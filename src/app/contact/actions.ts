"use server";

// Contact form. One submission does two things on the NEXTOSA side:
//   1. POST {NEXTOSA_API_URL}/public/website-inquiries (header x-website-secret): the API stores the
//      inquiry for the Superadmin panel and instantly emails the owner. This is the path that decides
//      whether the visitor sees success.
//   2. Best effort, unchanged from before: the lead is also sent to the NEXTOSA CRM's Connected
//      Software inbound route (External Event Received trigger). It only decides the result when path 1
//      is not configured (so an older deployment keeps working).
// See README.md's "Environment Variables" section.

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
}

const SUCCESS: ContactFormState = {
  status: "success",
  message: "Thanks! Your message has been received - our team will be in touch shortly.",
};
const FAILURE: ContactFormState = {
  status: "error",
  message: "Sorry, something went wrong submitting your request. Please try again or email us directly.",
};

function isNonEmptyString(value: FormDataEntryValue | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function optional(value: FormDataEntryValue | null): string | undefined {
  return isNonEmptyString(value) ? value.trim() : undefined;
}

type Outcome = "ok" | "failed" | "unconfigured";

async function postInquiryToApi(payload: Record<string, string | undefined>): Promise<Outcome> {
  const base = process.env.NEXTOSA_API_URL;
  const secret = process.env.WEBSITE_INQUIRY_SECRET;
  if (!base || !secret) return "unconfigured";
  try {
    const response = await fetch(`${base.replace(/\/+$/, "")}/public/website-inquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-website-secret": secret },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      console.error(`[contact-form] inquiry API answered ${response.status}`);
      return "failed";
    }
    return "ok";
  } catch (error) {
    console.error("[contact-form] could not reach the inquiry API:", error);
    return "failed";
  }
}

async function postLeadToCrm(payload: Record<string, string | undefined>): Promise<Outcome> {
  const inboundUrl = process.env.NEXTOSA_INBOUND_URL;
  const apiKey = process.env.CRM_WEBHOOK_SECRET;
  if (!inboundUrl || !apiKey) return "unconfigured";
  try {
    const response = await fetch(inboundUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": apiKey },
      body: JSON.stringify({ eventType: "website_lead_submitted", ...payload }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      console.error(`[contact-form] NEXTOSA inbound request failed: ${response.status}`);
      return "failed";
    }
    return "ok";
  } catch (error) {
    console.error("[contact-form] failed to reach NEXTOSA CRM:", error);
    return "failed";
  }
}

export async function submitLeadToNextosa(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: a hidden field real visitors never fill. A bot that does gets a convincing success and nothing is sent.
  if (isNonEmptyString(formData.get("company_website"))) return SUCCESS;

  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");

  if (!isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(phone)) {
    return { status: "error", message: "Please fill in your name, email, and phone number." };
  }

  const payload = {
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    business: optional(formData.get("business")),
    message: optional(formData.get("message")),
  };

  const [api, crm] = await Promise.all([postInquiryToApi(payload), postLeadToCrm(payload)]);

  if (api === "ok") return SUCCESS;
  if (api === "unconfigured" && crm === "ok") return SUCCESS;

  console.error(`[contact-form] submission not delivered (inquiry API: ${api}, CRM: ${crm})`);
  if (api === "unconfigured" && crm === "unconfigured") {
    return { status: "error", message: "Sorry, we couldn't submit your request right now. Please email us directly instead." };
  }
  return FAILURE;
}
