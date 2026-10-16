import { createHmac, timingSafeEqual } from "node:crypto";
import type { NextRequest } from "next/server";

const SIGNATURE_HEADER = "x-nextosa-signature";

type CrmWebhookPayload = {
  command: string;
  contactId?: string | number;
  [key: string]: unknown;
};

function isCrmWebhookPayload(value: unknown): value is CrmWebhookPayload {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return false;
  }
  const { command, contactId } = value as Record<string, unknown>;
  return (
    typeof command === "string" &&
    command.length > 0 &&
    (contactId === undefined ||
      typeof contactId === "string" ||
      typeof contactId === "number")
  );
}

function isValidSignature(
  rawBody: string,
  header: string | null,
  secret: string,
): boolean {
  if (!header) return false;
  const provided = (
    header.startsWith("sha256=") ? header.slice("sha256=".length) : header
  ).toLowerCase();
  const expected = createHmac("sha256", secret).update(rawBody).digest("hex");

  const providedBuf = Buffer.from(provided, "utf8");
  const expectedBuf = Buffer.from(expected, "utf8");
  return (
    providedBuf.length === expectedBuf.length &&
    timingSafeEqual(providedBuf, expectedBuf)
  );
}

export async function POST(request: NextRequest) {
  try {
    const secret = process.env.CRM_WEBHOOK_SECRET;
    if (!secret) {
      console.error("[crm-webhook] CRM_WEBHOOK_SECRET is not configured");
      return Response.json(
        { success: false, error: "Webhook is not configured" },
        { status: 500 },
      );
    }

    const rawBody = await request.text();

    if (!isValidSignature(rawBody, request.headers.get(SIGNATURE_HEADER), secret)) {
      console.warn("[crm-webhook] rejected request with missing/invalid signature");
      return Response.json(
        { success: false, error: "Invalid signature" },
        { status: 401 },
      );
    }

    let body: unknown;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return Response.json(
        { success: false, error: "Request body must be valid JSON" },
        { status: 400 },
      );
    }

    if (!isCrmWebhookPayload(body)) {
      return Response.json(
        {
          success: false,
          error: "Payload must include a non-empty string `command`",
        },
        { status: 400 },
      );
    }

    console.log("[crm-webhook] command received:", body.command);
    console.log("[crm-webhook] payload:", JSON.stringify(body));

    return Response.json({ success: true });
  } catch (error) {
    console.error("[crm-webhook] unexpected error:", error);
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
