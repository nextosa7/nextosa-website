"use server";

// Inbound lead capture - sends this site's own Contact/Lead form submissions to the NEXTOSA CRM's
// Connected Software inbound route (External Event Received trigger). Mirrors
// src/app/api/webhooks/crm/route.ts's own env var for the shared secret - CRM_WEBHOOK_SECRET is
// the SAME key used in both directions: NEXTOSA signs the commands it sends US with it (verified
// in that route), and we present it as the x-api-key header NEXTOSA's own inbound route expects
// here. NEXTOSA_INBOUND_URL is the full, connection-specific inbound URL NEXTOSA generates (shown
// once, alongside the key, when you click "Generate Inbound API Key" in NEXTOSA's own
// Settings > Integrations > Custom Apps) - see README.md's "Environment Variables" section.

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
}

function isNonEmptyString(value: FormDataEntryValue | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function submitLeadToNextosa(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const business = formData.get("business");
  const message = formData.get("message");

  if (!isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(phone)) {
    return {
      status: "error",
      message: "Please fill in your name, email, and phone number.",
    };
  }

  const inboundUrl = process.env.NEXTOSA_INBOUND_URL;
  const apiKey = process.env.CRM_WEBHOOK_SECRET;
  if (!inboundUrl || !apiKey) {
    console.error(
      "[contact-form] NEXTOSA_INBOUND_URL or CRM_WEBHOOK_SECRET is not configured",
    );
    return {
      status: "error",
      message:
        "Sorry, we couldn't submit your request right now. Please email us directly instead.",
    };
  }

  try {
    const response = await fetch(inboundUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({
        eventType: "website_lead_submitted",
        phone: phone.trim(),
        name: name.trim(),
        email: email.trim(),
        business: isNonEmptyString(business) ? business.trim() : undefined,
        message: isNonEmptyString(message) ? message.trim() : undefined,
      }),
      // NEXTOSA's own inbound receiver always acks within its own short request lifetime (the
      // actual workflow runs after that) - this is just a sane upper bound so a hung connection
      // can never leave the visitor's submit button stuck forever.
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error(`[contact-form] NEXTOSA inbound request failed: ${response.status}`);
      return {
        status: "error",
        message:
          "Sorry, something went wrong submitting your request. Please try again or email us directly.",
      };
    }

    return {
      status: "success",
      message: "Thanks! Your message has been received - our team will be in touch shortly.",
    };
  } catch (error) {
    const timedOut = error instanceof Error && error.name === "TimeoutError";
    console.error("[contact-form] failed to reach NEXTOSA:", error);
    return {
      status: "error",
      message: timedOut
        ? "The request took too long. Please try again."
        : "Sorry, something went wrong submitting your request. Please try again or email us directly.",
    };
  }
}
