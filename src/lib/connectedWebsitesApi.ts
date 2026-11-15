import type { CodeSample } from "@/components/CodeBlock";

// Request samples and example payloads for the Connected Websites developer reference.
// Written from the NEXTOSA app's own Developer Hub (client/src/components/customApps/apiDocs) and the server
// controllers behind it. If an API contract changes in the app, this file changes with it.
//
// The real base URLs are shown on each connection inside NEXTOSA, with your connection id filled in. Here they
// use clear placeholders.

export const API_HOST = "https://YOUR-NEXTOSA-SERVER";
export const BOOKING_BASE = `${API_HOST}/api/public/v1/booking/YOUR_CONNECTION_ID`;
export const EVENTS_URL = `${API_HOST}/api/webhooks/connected-apps/YOUR_CONNECTION_ID`;
export const PRODUCT_SYNC_URL = `${API_HOST}/api/webhooks/sync-products/YOUR_CONNECTION_ID`;
export const CHAT_BASE = `${API_HOST}/api/public/ai-chat`;

const lines = (...parts: string[]) => parts.join("\n");
const json = (value: unknown) => JSON.stringify(value, null, 2);

// ── Live chat ────────────────────────────────────────────────────────────────────────────────

export const chatSession: CodeSample[] = [
  {
    label: "cURL",
    code: lines(
      `curl -X POST "${CHAT_BASE}/session" \\`,
      `  -H "content-type: application/json" \\`,
      `  -d '{"organizationId":"YOUR_ORGANIZATION_ID","email":"asha@example.com","name":"Asha Verma","connectionId":"YOUR_CONNECTION_ID"}'`,
    ),
  },
  {
    label: "Browser JS",
    code: lines(
      `const res = await fetch("${CHAT_BASE}/session", {`,
      `  method: "POST",`,
      `  headers: { "content-type": "application/json" },`,
      `  body: JSON.stringify({`,
      `    organizationId: "YOUR_ORGANIZATION_ID",`,
      `    email: "asha@example.com",`,
      `    name: "Asha Verma",`,
      `    connectionId: "YOUR_CONNECTION_ID", // tags the lead with this website`,
      `  }),`,
      `});`,
      `const { sessionId } = await res.json();`,
    ),
  },
];
export const chatSessionResponse = json({ sessionId: "cmvq7k2x90002uk0c4a5b6c7d" });

export const chatMessage: CodeSample[] = [
  {
    label: "cURL",
    code: lines(
      `curl -X POST "${CHAT_BASE}/message" \\`,
      `  -H "content-type: application/json" \\`,
      `  -d '{"organizationId":"YOUR_ORGANIZATION_ID","sessionId":"SESSION_ID","message":"Do you have a 3BHK available?"}'`,
    ),
  },
  {
    label: "Browser JS",
    code: lines(
      `const res = await fetch("${CHAT_BASE}/message", {`,
      `  method: "POST",`,
      `  headers: { "content-type": "application/json" },`,
      `  body: JSON.stringify({ organizationId: "YOUR_ORGANIZATION_ID", sessionId, message: "Do you have a 3BHK available?" }),`,
      `});`,
      `const { content } = await res.json(); // the assistant's reply, plain text`,
    ),
  },
];
export const chatMessageResponse = json({ id: "cmvq7k2x90003uk0c8d9e0f1a", content: "Yes - we have two 3BHK units open right now. Would you like details?" });

export const chatHistory: CodeSample[] = [
  { label: "cURL", code: `curl "${CHAT_BASE}/session/SESSION_ID/messages?organizationId=YOUR_ORGANIZATION_ID"` },
];

// ── Events ───────────────────────────────────────────────────────────────────────────────────

const EVENT_BODY = {
  eventType: "lead.created",
  phone: "+919876543210",
  name: "Asha Verma",
  email: "asha@example.com",
  message: "Interested in the 3BHK on Lake Road",
  source: "contact-form",
};

export const eventRequest: CodeSample[] = [
  {
    label: "cURL",
    code: lines(
      `curl -X POST "${EVENTS_URL}" \\`,
      `  -H "x-api-key: $NEXTOSA_API_KEY" \\`,
      `  -H "x-event-id: lead-10234" \\`,
      `  -H "content-type: application/json" \\`,
      `  -d '${JSON.stringify(EVENT_BODY)}'`,
    ),
  },
  {
    label: "Node.js",
    code: lines(
      `await fetch("${EVENTS_URL}", {`,
      `  method: "POST",`,
      `  headers: {`,
      `    "x-api-key": process.env.NEXTOSA_API_KEY,`,
      `    "x-event-id": "lead-10234", // your unique id for this event: makes retries safe`,
      `    "content-type": "application/json",`,
      `  },`,
      `  body: JSON.stringify({`,
      `    eventType: "lead.created", // optional: lets an automation filter on it`,
      `    phone: "+919876543210", // international format: identifies (or creates) the contact`,
      `    name: "Asha Verma",`,
      `    email: "asha@example.com",`,
      `    message: "Interested in the 3BHK on Lake Road", // extra fields go to your automations`,
      `  }),`,
      `});`,
    ),
  },
  {
    label: "Python",
    code: lines(
      `import os, requests`,
      ``,
      `requests.post(`,
      `    "${EVENTS_URL}",`,
      `    headers={`,
      `        "x-api-key": os.environ["NEXTOSA_API_KEY"],`,
      `        "x-event-id": "lead-10234",  # your unique id for this event: makes retries safe`,
      `    },`,
      `    json={`,
      `        "eventType": "lead.created",`,
      `        "phone": "+919876543210",`,
      `        "name": "Asha Verma",`,
      `        "email": "asha@example.com",`,
      `        "message": "Interested in the 3BHK on Lake Road",`,
      `    },`,
      `)`,
    ),
  },
];

// ── Commands to your site + signature check ──────────────────────────────────────────────────

export const commandPayload = json({ command: "assign_plan", userId: "usr_204", plan: "pro" });

export const verifySignature: CodeSample[] = [
  {
    label: "Node.js",
    code: lines(
      `import crypto from "node:crypto";`,
      `import express from "express";`,
      ``,
      `const app = express();`,
      ``,
      `// Verify against the RAW body: re-serialized JSON will not match the signature.`,
      `app.post("/nextosa-commands", express.raw({ type: "application/json" }), (req, res) => {`,
      `  const expected =`,
      `    "sha256=" + crypto.createHmac("sha256", process.env.NEXTOSA_API_KEY).update(req.body).digest("hex");`,
      `  const given = req.header("x-nextosa-signature") ?? "";`,
      `  const valid = given.length === expected.length && crypto.timingSafeEqual(Buffer.from(given), Buffer.from(expected));`,
      `  if (!valid) return res.sendStatus(401);`,
      ``,
      `  const { command, ...params } = JSON.parse(req.body.toString("utf8"));`,
      `  // Skip commands you already handled: req.header("idempotency-key")`,
      `  res.json({ ok: true }); // reply 2xx within 8 seconds`,
      `});`,
    ),
  },
  {
    label: "Python",
    code: lines(
      `import hmac, hashlib, os`,
      `from flask import Flask, request, abort, jsonify`,
      ``,
      `app = Flask(__name__)`,
      ``,
      `@app.post("/nextosa-commands")`,
      `def commands():`,
      `    raw = request.get_data()  # the RAW body, not re-serialized JSON`,
      `    expected = "sha256=" + hmac.new(os.environ["NEXTOSA_API_KEY"].encode(), raw, hashlib.sha256).hexdigest()`,
      `    if not hmac.compare_digest(request.headers.get("x-nextosa-signature", ""), expected):`,
      `        abort(401)`,
      `    payload = request.get_json()`,
      `    return jsonify(ok=True)  # reply 2xx within 8 seconds`,
    ),
  },
];

// ── Product sync ─────────────────────────────────────────────────────────────────────────────

const SYNC_BODY = {
  products: [
    {
      externalProductId: "sku-1001",
      name: "Linen Shirt",
      description: "Breathable linen, relaxed fit.",
      price: 1499,
      currency: "INR",
      inventory: 12,
      sku: "LS-1001",
      imageUrl: "https://cdn.example.com/ls-1001.jpg",
    },
  ],
};

export const productSync: CodeSample[] = [
  {
    label: "cURL",
    code: lines(
      `curl -X POST "${PRODUCT_SYNC_URL}" \\`,
      `  -H "x-api-key: $NEXTOSA_API_KEY" \\`,
      `  -H "content-type: application/json" \\`,
      `  -d '${JSON.stringify(SYNC_BODY)}'`,
    ),
  },
  {
    label: "Node.js",
    code: lines(
      `const res = await fetch("${PRODUCT_SYNC_URL}", {`,
      `  method: "POST",`,
      `  headers: { "x-api-key": process.env.NEXTOSA_API_KEY, "content-type": "application/json" },`,
      `  body: JSON.stringify({`,
      `    products: [`,
      `      {`,
      `        externalProductId: "sku-1001", // your store's own product id: the update key`,
      `        name: "Linen Shirt",`,
      `        price: 1499,`,
      `        currency: "INR",`,
      `        inventory: 12, // null = not tracked, 0 = out of stock`,
      `      },`,
      `    ],`,
      `  }),`,
      `});`,
      `console.log(await res.json()); // { ok: true, synced: 1 }`,
    ),
  },
];
export const productSyncResponse = json({ ok: true, synced: 1 });

// ── Booking API ──────────────────────────────────────────────────────────────────────────────

export const SAMPLE_BOOKING = {
  id: "cmvq7k2x90001uk0c8h1d2e3f",
  externalBookingId: "order-1042",
  status: "UPCOMING",
  service: "Consultation",
  startsAt: "2027-05-03T04:30:00.000Z",
  endsAt: "2027-05-03T05:00:00.000Z",
  durationMinutes: 30,
  notes: null,
  customer: { name: "Asha Verma", phone: "+919876543210", email: "asha@example.com" },
  createdAt: "2027-05-01T09:12:44.000Z",
  updatedAt: "2027-05-01T09:12:44.000Z",
};

export const availabilityRequest: CodeSample[] = [
  {
    label: "cURL",
    code: lines(`curl "${BOOKING_BASE}/availability?from=2027-05-03&to=2027-05-05&durationMinutes=30" \\`, `  -H "x-api-key: $NEXTOSA_API_KEY"`),
  },
  {
    label: "Node.js",
    code: lines(
      `const BASE = "${BOOKING_BASE}";`,
      ``,
      'const res = await fetch(`${BASE}/availability?from=2027-05-03&to=2027-05-05`, {',
      `  headers: { "x-api-key": process.env.NEXTOSA_API_KEY },`,
      `});`,
      `const { days } = await res.json();`,
      `console.log(days[0].slots); // [{ startsAt, endsAt, localTime }, ...]`,
    ),
  },
];
export const availabilityResponse = json({
  timezone: "Asia/Kolkata",
  durationMinutes: 30,
  slotMinutes: 30,
  days: [
    {
      date: "2027-05-03",
      slots: [
        { startsAt: "2027-05-03T03:30:00.000Z", endsAt: "2027-05-03T04:00:00.000Z", localTime: "09:00" },
        { startsAt: "2027-05-03T04:00:00.000Z", endsAt: "2027-05-03T04:30:00.000Z", localTime: "09:30" },
      ],
    },
    { date: "2027-05-04", slots: [] },
  ],
});

const CREATE_BODY = {
  externalBookingId: "order-1042",
  startsAt: "2027-05-03T04:30:00.000Z",
  service: "Consultation",
  durationMinutes: 30,
  customer: { name: "Asha Verma", phone: "+919876543210", email: "asha@example.com" },
  notes: "First visit",
};

export const createBookingRequest: CodeSample[] = [
  {
    label: "cURL",
    code: lines(
      `curl -X POST "${BOOKING_BASE}/bookings" \\`,
      `  -H "x-api-key: $NEXTOSA_API_KEY" \\`,
      `  -H "content-type: application/json" \\`,
      `  -d '${JSON.stringify(CREATE_BODY)}'`,
    ),
  },
  {
    label: "Node.js",
    code: lines(
      `const res = await fetch("${BOOKING_BASE}/bookings", {`,
      `  method: "POST",`,
      `  headers: { "x-api-key": process.env.NEXTOSA_API_KEY, "content-type": "application/json" },`,
      `  body: JSON.stringify({`,
      `    externalBookingId: "order-1042", // your own unique id: a retry returns the same booking`,
      `    startsAt: "2027-05-03T04:30:00.000Z", // a slot you were offered, with a UTC offset`,
      `    service: "Consultation",`,
      `    customer: { name: "Asha Verma", phone: "+919876543210" },`,
      `  }),`,
      `});`,
      `if (res.status === 409) {`,
      `  const { details } = await res.json();`,
      `  console.log(details.alternatives); // nearest open slots if someone just took it`,
      `}`,
    ),
  },
];
export const createBookingResponse = json({ booking: SAMPLE_BOOKING });
export const rescheduleResponse = json({ booking: { ...SAMPLE_BOOKING, startsAt: "2027-05-03T05:30:00.000Z", endsAt: "2027-05-03T06:00:00.000Z", updatedAt: "2027-05-01T10:02:10.000Z" } });
export const cancelResponse = json({ booking: { ...SAMPLE_BOOKING, status: "CANCELLED", updatedAt: "2027-05-01T10:15:31.000Z" } });
export const slotUnavailableResponse = json({
  error: "That time slot is no longer available.",
  details: {
    code: "SLOT_UNAVAILABLE",
    alternatives: [
      { startsAt: "2027-05-03T04:00:00.000Z", endsAt: "2027-05-03T04:30:00.000Z" },
      { startsAt: "2027-05-03T05:00:00.000Z", endsAt: "2027-05-03T05:30:00.000Z" },
    ],
  },
});

export const getBooking: CodeSample[] = [
  { label: "cURL", code: lines(`curl "${BOOKING_BASE}/bookings/order-1042" \\`, `  -H "x-api-key: $NEXTOSA_API_KEY"`) },
];
export const rescheduleBooking: CodeSample[] = [
  {
    label: "cURL",
    code: lines(
      `curl -X PATCH "${BOOKING_BASE}/bookings/order-1042" \\`,
      `  -H "x-api-key: $NEXTOSA_API_KEY" \\`,
      `  -H "content-type: application/json" \\`,
      `  -d '{"startsAt":"2027-05-03T05:30:00.000Z"}'`,
    ),
  },
];
export const cancelBooking: CodeSample[] = [
  { label: "cURL", code: lines(`curl -X DELETE "${BOOKING_BASE}/bookings/order-1042" \\`, `  -H "x-api-key: $NEXTOSA_API_KEY"`) },
];
export const bookingWebhookPayload = json({ command: "booking.created", booking: SAMPLE_BOOKING }); // the booking is NOT wrapped here

export const bookingErrors: { status: number; code: string; meaning: string }[] = [
  { status: 400, code: "(Invalid request)", meaning: "The body or query failed validation. details.fieldErrors lists each problem." },
  { status: 400, code: "INVALID_DATE", meaning: "from or to is not a real YYYY-MM-DD date, or to is before from." },
  { status: 400, code: "RANGE_TOO_LARGE", meaning: "The availability range spans more than 31 days." },
  { status: 400, code: "INVALID_DURATION", meaning: "durationMinutes must be a whole number from 5 to 480." },
  { status: 401, code: "UNAUTHORIZED", meaning: "Missing or wrong API key, or the connection id does not exist. The two are deliberately indistinguishable." },
  { status: 403, code: "CONNECTION_DISABLED", meaning: "The connection is switched off in NEXTOSA." },
  { status: 403, code: "BOOKING_API_DISABLED", meaning: "The connection's Booking API switch is off." },
  { status: 404, code: "BOOKING_NOT_FOUND", meaning: "No booking with that externalBookingId was made through this connection." },
  { status: 409, code: "BOOKING_NOT_ENABLED", meaning: "The business has not turned on online booking, or has not configured availability yet." },
  { status: 409, code: "SLOT_UNAVAILABLE", meaning: "That time was taken. details.alternatives lists the nearest open slots." },
  { status: 409, code: "IDEMPOTENCY_CONFLICT", meaning: "That externalBookingId already exists with a different start time. Use PATCH to move it." },
  { status: 409, code: "BOOKING_CANCELLED", meaning: "That externalBookingId belonged to a booking that was cancelled. Use a new id to book again." },
  { status: 409, code: "BOOKING_NOT_MODIFIABLE", meaning: "Only an upcoming booking can be rescheduled or cancelled. This one has started or finished." },
  { status: 422, code: "INVALID_SLOT", meaning: "That start and duration could never be offered: off the slot grid, closed, outside hours, too soon or too far ahead." },
  { status: 422, code: "INVALID_PHONE", meaning: "customer.phone is not a valid number. Include the country code, for example +919876543210." },
  { status: 422, code: "UNSUPPORTED_BUSINESS_TYPE", meaning: "Restaurants and salons use their own booking engines and cannot use this API." },
  { status: 429, code: "(rate limited)", meaning: "Too many requests. See the limits table." },
];

// ── Endpoints you host ───────────────────────────────────────────────────────────────────────

export interface HostedSlot {
  category: string;
  name: string;
  method: "GET" | "POST";
  sends: string;
  example: string;
}

export const hostedSlots: HostedSlot[] = [
  {
    category: "Booking / Appointments",
    name: "Create booking",
    method: "POST",
    sends: "JSON body: customerName (required), startTime (as the caller supplied it, usually ISO 8601: parse defensively), customerPhone and notes (empty strings when unknown).",
    example: json({ id: "bk_7781", status: "confirmed" }),
  },
  {
    category: "Booking / Appointments",
    name: "Open slots",
    method: "GET",
    sends: "Optional query parameter daysAhead (an integer), only when the caller supplies it.",
    example: json({
      slots: [
        { start: "2027-05-03T10:00:00+05:30", end: "2027-05-03T10:30:00+05:30", available: true },
        { start: "2027-05-03T10:30:00+05:30", end: "2027-05-03T11:00:00+05:30", available: false },
      ],
    }),
  },
  {
    category: "E-Commerce",
    name: "Orders",
    method: "GET",
    sends: "Optional query parameter daysBack (an integer), only when the caller supplies it.",
    example: json({
      orders: [
        {
          id: "1001",
          createdAt: "2027-04-28T10:15:00.000Z",
          status: "paid",
          total: 2998,
          currency: "INR",
          items: [{ title: "Linen Shirt", quantity: 2, price: 1499 }],
          customer: { name: "Asha Verma", email: "asha@example.com" },
        },
      ],
    }),
  },
  {
    category: "E-Commerce",
    name: "Create product",
    method: "POST",
    sends: "JSON body: title and price (required), description and sku (empty strings when blank).",
    example: json({ id: "p_5521", url: "https://shop.example.com/products/linen-shirt" }),
  },
  {
    category: "Simple Website and Portfolio",
    name: "Form submissions",
    method: "GET",
    sends: "Optional query parameter daysBack (an integer), only when the caller supplies it.",
    example: json({
      leads: [{ id: "ld_310", name: "Asha Verma", email: "asha@example.com", phone: "+919876543210", message: "Interested in your services", submittedAt: "2027-04-29T08:41:00.000Z" }],
    }),
  },
  {
    category: "Real Estate",
    name: "Listings",
    method: "GET",
    sends: "Nothing: a plain GET.",
    example: json({
      listings: [{ id: "L-2041", title: "3BHK apartment, Lake Road", type: "apartment", status: "for-sale", price: 8900000, currency: "INR", bedrooms: 3, city: "Pune" }],
    }),
  },
  {
    category: "EdTech / Courses",
    name: "Courses",
    method: "GET",
    sends: "Nothing: a plain GET.",
    example: json({
      courses: [{ id: "crs_88", title: "Data Analysis with Python", level: "beginner", price: 4999, currency: "INR", durationHours: 24 }],
    }),
  },
  {
    category: "SaaS",
    name: "Usage",
    method: "GET",
    sends: "Nothing: a plain GET.",
    example: json({
      period: "2027-04",
      totals: { accounts: 148, activeUsers: 1210, apiCalls: 2840000 },
      accounts: [{ id: "acc_901", plan: "pro", seats: 12, activeUsers: 9, apiCalls: 41000, status: "active" }],
    }),
  },
];

export const hostedHandler: CodeSample[] = [
  {
    label: "Node.js",
    code: lines(
      `import express from "express";`,
      ``,
      `const app = express();`,
      ``,
      `app.get("/api/nextosa/orders", async (req, res) => {`,
      `  // The header you configured under Headers on the connection.`,
      "  if (req.header(\"authorization\") !== `Bearer ${process.env.NEXTOSA_TOKEN}`) return res.sendStatus(401);",
      `  const daysBack = Number(req.query.daysBack ?? 30);`,
      `  const orders = await db.orders.findRecent({ daysBack, limit: 50 }); // your own data layer`,
      `  res.json({ orders }); // keep it under 20,000 characters`,
      `});`,
    ),
  },
  {
    label: "Python",
    code: lines(
      `import os`,
      `from flask import Flask, request, jsonify, abort`,
      ``,
      `app = Flask(__name__)`,
      ``,
      `@app.get("/api/nextosa/orders")`,
      `def orders():`,
      `    if request.headers.get("Authorization") != f"Bearer {os.environ['NEXTOSA_TOKEN']}":`,
      `        abort(401)`,
      `    days_back = int(request.args.get("daysBack", 30))`,
      `    return jsonify(orders=db.orders.find_recent(days_back=days_back, limit=50))  # your own data layer`,
    ),
  },
];
