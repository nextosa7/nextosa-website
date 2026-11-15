import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/Container";
import GuideHero from "@/components/GuideHero";
import CTA from "@/components/home/CTA";
import CodeBlock from "@/components/CodeBlock";
import * as api from "@/lib/connectedWebsitesApi";

export const metadata: Metadata = buildMetadata({
  title: "Connected Websites API Reference for Developers",
  description:
    "Developer reference for NEXTOSA Connected Websites: authentication, live chat, events with replay protection, product sync, the Booking API, signed commands and webhooks, endpoints you host, errors and rate limits. cURL, Node.js and Python examples.",
  path: "/connected-websites/api",
});

const toc: { id: string; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "authentication", label: "Authentication" },
  { id: "limits", label: "Limits" },
  { id: "errors", label: "Error conventions" },
  { id: "live-chat", label: "Live chat" },
  { id: "events", label: "Send an event" },
  { id: "commands", label: "Receive commands" },
  { id: "product-sync", label: "Product sync" },
  { id: "booking", label: "Booking API" },
  { id: "hosted", label: "Endpoints you host" },
  { id: "checklist", label: "Go-live checklist" },
];

const bookingToc: { id: string; label: string }[] = [
  { id: "booking-how", label: "How availability works" },
  { id: "booking-availability", label: "Get availability" },
  { id: "booking-create", label: "Create a booking" },
  { id: "booking-get", label: "Retrieve" },
  { id: "booking-reschedule", label: "Reschedule" },
  { id: "booking-cancel", label: "Cancel" },
  { id: "booking-object", label: "Booking object" },
  { id: "booking-webhooks", label: "Webhooks" },
  { id: "booking-errors", label: "Errors" },
  { id: "booking-own", label: "Your own booking system" },
];

function Code({ children }: { children: ReactNode }) {
  return <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[0.85em] font-medium text-navy-900">{children}</code>;
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-slate-200 pt-12 first:border-t-0 first:pt-0">
      <h2 className="text-2xl font-bold tracking-tight text-navy-900">{title}</h2>
      <div className="mt-5 space-y-5 text-[15px] leading-7 text-slate-700">{children}</div>
    </section>
  );
}

function Sub({ id, title, method, path, children }: { id: string; title: string; method?: string; path?: string; children: ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-lg font-semibold text-navy-900">{title}</h3>
        {method && path && (
          <span className="flex min-w-0 items-center gap-2 text-sm">
            <span className="rounded-md bg-navy-900 px-2 py-0.5 text-xs font-semibold text-white">{method}</span>
            <code className="break-all text-slate-700">{path}</code>
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function Note({ tone = "info", children }: { tone?: "info" | "warn"; children: ReactNode }) {
  return (
    <div className={`rounded-xl border p-4 text-sm leading-6 ${tone === "warn" ? "border-amber-200 bg-amber-50 text-amber-900" : "border-accent-600/20 bg-accent-50 text-slate-700"}`}>{children}</div>
  );
}

interface Row {
  name: string;
  type?: string;
  required?: boolean;
  desc: ReactNode;
}

function Params({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[34rem] text-left text-sm">
          <tbody className="divide-y divide-slate-200">
            {rows.map((r) => (
              <tr key={r.name} className="align-top">
                <td className="whitespace-nowrap p-3 font-mono text-[13px] font-semibold text-navy-900">
                  {r.name}
                  {r.required && <span className="ml-1.5 text-xs font-sans font-medium text-rose-600">required</span>}
                </td>
                <td className="whitespace-nowrap p-3 text-xs text-slate-500">{r.type}</td>
                <td className="p-3 leading-6 text-slate-600">{r.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SimpleTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[32rem] text-left text-sm">
        <thead className="bg-slate-50 text-navy-900">
          <tr>
            {head.map((h) => (
              <th key={h} className="p-3 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {rows.map((r, i) => (
            <tr key={i} className="align-top">
              {r.map((c, j) => (
                <td key={j} className={`p-3 leading-6 ${j === 0 ? "font-semibold text-navy-900" : "text-slate-600"}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ConnectedWebsitesApiPage() {
  return (
    <>
      <GuideHero badge="Developer reference" title="Connected Websites API">
        Everything a developer needs to connect a site or app to NEXTOSA: authentication, the APIs NEXTOSA hosts, the endpoints you host, signed commands, errors and limits. New to the idea? Start with the{" "}
        <Link href="/connected-websites" className="font-medium text-accent-300 hover:underline">overview</Link>.
      </GuideHero>

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">On this page</p>
              <nav aria-label="On this page" className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:gap-0.5">
                {toc.map((t) => (
                  <a key={t.id} href={`#${t.id}`} className="rounded-md px-2.5 py-1.5 text-sm text-slate-600 hover:bg-slate-100 hover:text-navy-900">
                    {t.label}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="min-w-0 space-y-14">
              <Section id="overview" title="Overview">
                <p>
                  An integration runs in one of two directions. <strong className="font-semibold text-navy-900">Your site to NEXTOSA</strong> uses APIs NEXTOSA hosts: live chat, events, product sync and the Booking API.{" "}
                  <strong className="font-semibold text-navy-900">NEXTOSA to your site</strong> uses endpoints you host and map on the connection: NEXTOSA calls them when an AI agent or automation needs live data.
                </p>
                <Note>
                  The examples use <Code>{api.API_HOST}</Code>, <Code>YOUR_CONNECTION_ID</Code> and <Code>YOUR_ORGANIZATION_ID</Code> as placeholders. Inside NEXTOSA, on Connected Websites, the Developer Hub shows the real values for the connection you pick, ready to copy.
                </Note>
                <Note>
                  Your website category decides which endpoints NEXTOSA can call on your site. The APIs NEXTOSA hosts are not tied to a category: any connection can use them.
                </Note>
              </Section>

              <Section id="authentication" title="Authentication">
                <p>
                  Each connected website has its own <strong className="font-semibold text-navy-900">inbound API key</strong>. Generate it on Connected Websites with <em>Generate Inbound API Key</em>. It is shown once, so store it in an environment variable on your server. Regenerating it invalidates the old key immediately.
                </p>
                <p>
                  Send it as <Code>x-api-key</Code>. The Booking API also accepts <Code>Authorization: Bearer KEY</Code>; the Events and Product sync endpoints accept only <Code>x-api-key</Code>.
                </p>
                <Note tone="warn">
                  Keep the key on your server. Never put it in browser code, a mobile app or a public repository. The live chat is the one exception: it needs no key, so it can run in the browser.
                </Note>
                <SimpleTable
                  head={["Credential", "Where you set it", "Used for"]}
                  rows={[
                    ["Inbound API key", "Generated in NEXTOSA. Shown once.", "Your calls to the Booking API, Product sync and Events. It also signs (HMAC) every command and webhook NEXTOSA sends you."],
                    ["Connection headers", "You enter them on the connection, for example Authorization: Bearer ...", "Sent by NEXTOSA on every call to the endpoints you host."],
                    ["Session id", "Nothing to set up.", "The live chat API, which uses your organization id plus the visitor's session id."],
                  ]}
                />
                <p>
                  Calls NEXTOSA makes to endpoints <em>you</em> host are <strong className="font-semibold text-navy-900">not signed</strong>: protect them with the connection headers. Only commands and webhooks sent to your <em>Outbound webhook URL</em> carry <Code>x-nextosa-signature</Code>.
                </p>
              </Section>

              <Section id="limits" title="Limits">
                <SimpleTable
                  head={["What", "Limit", "Applies to"]}
                  rows={[
                    ["Booking API, reads", "120 per minute", "per connection"],
                    ["Booking API, writes", "30 per minute", "per connection"],
                    ["Events and product sync", "30 per minute", "per connection, shared by both"],
                    ["Live chat", "15 per minute", "per visitor IP, shared by the three chat endpoints"],
                    ["Request bodies you send", "about 100 KB", "per request"],
                    ["Endpoints you host", "8 second timeout, first 20,000 characters read", "per call; public https addresses only"],
                  ]}
                />
                <p>Going over a rate limit returns <Code>429</Code>. Wait a moment and retry. Failed authentication attempts count toward the limit too.</p>
              </Section>

              <Section id="errors" title="Error conventions">
                <ul className="list-disc space-y-2 pl-5">
                  <li><strong className="font-semibold text-navy-900">Booking API:</strong> JSON <Code>{`{ "error": "...", "details": { "code": "..." } }`}</Code>. Branch on <Code>details.code</Code>, not the message. Full table under the Booking API.</li>
                  <li><strong className="font-semibold text-navy-900">Events and product sync:</strong> authentication failures (<Code>401</Code>, <Code>403</Code>, <Code>404</Code>) return the status code only, with no JSON body. Product sync validation errors return JSON.</li>
                  <li><strong className="font-semibold text-navy-900">Live chat:</strong> JSON <Code>{`{ "error": "..." }`}</Code>.</li>
                </ul>
              </Section>

              <Section id="live-chat" title="Live chat">
                <p>
                  Three ways to get a visitor into NEXTOSA as a lead. The live chat is hosted by NEXTOSA and called straight from the visitor&apos;s browser: the visitor gives an email, becomes a real contact, and chats with your AI assistant.
                </p>
                <Note>
                  No API key. The <Code>sessionId</Code> it returns is the visitor&apos;s only credential, so treat it like a secret and do not log it. Limit: 15 requests per minute per visitor IP, shared across the three chat endpoints.
                </Note>
                <Sub id="chat-session" title="Start a chat session" method="POST" path="/api/public/ai-chat/session">
                  <p>Starts a conversation for one visitor. Their email makes them a lead: an existing contact with that email is matched, otherwise a new contact is created (source: web chat) using the name you send, or &quot;Website Visitor&quot;.</p>
                  <Params
                    title="Body"
                    rows={[
                      { name: "organizationId", type: "string", required: true, desc: "Your NEXTOSA organization id." },
                      { name: "email", type: "string", required: true, desc: "The visitor's email. Stored lowercase." },
                      { name: "name", type: "string (max 200)", desc: "The visitor's name." },
                      { name: "connectionId", type: "string", desc: "Strongly recommended. Tags the lead, and any deal or appointment the assistant creates in the chat, with this website. A wrong id is rejected rather than ignored." },
                    ]}
                  />
                  <p>
                    Returns <Code>201</Code> with <Code>sessionId</Code>. Errors: <Code>400</Code>; <Code>404</Code> for an unknown organization or an unknown <Code>connectionId</Code> (<Code>details.code: UNKNOWN_CONNECTION</Code>); <Code>403</Code> if the connection is switched off (<Code>CONNECTION_DISABLED</Code>); <Code>429</Code>.
                  </p>
                  <Note>
                    A lead is attributed to the website that first brought them in and is never re-attributed. This endpoint runs in the visitor&apos;s browser, so <Code>connectionId</Code> is a label your page supplies: a determined visitor could send a different one of your connection ids. When attribution must be tamper-proof, send the lead from your server as an event instead.
                  </Note>
                  <CodeBlock title="Request" samples={api.chatSession} />
                  <CodeBlock title="Response" status="201 Created" samples={[{ label: "JSON", code: api.chatSessionResponse }]} />
                </Sub>
                <Sub id="chat-message" title="Send a chat message" method="POST" path="/api/public/ai-chat/message">
                  <p>Sends the visitor&apos;s message and waits for the assistant&apos;s reply, returned as plain text. Replies can take a few seconds, so show a typing indicator.</p>
                  <Params
                    title="Body"
                    rows={[
                      { name: "organizationId", type: "string", required: true, desc: "Your organization id." },
                      { name: "sessionId", type: "string", required: true, desc: "From Start a chat session." },
                      { name: "message", type: "string (1-4000)", required: true, desc: "What the visitor typed." },
                    ]}
                  />
                  <p>Returns <Code>200</Code> with the reply&apos;s <Code>id</Code> and <Code>content</Code>. Errors: <Code>400</Code>, <Code>404 Chat session not found</Code>, <Code>429</Code>.</p>
                  <CodeBlock title="Request" samples={api.chatMessage} />
                  <CodeBlock title="Response" status="200 OK" samples={[{ label: "JSON", code: api.chatMessageResponse }]} />
                </Sub>
                <Sub id="chat-history" title="Chat history" method="GET" path="/api/public/ai-chat/session/:sessionId/messages">
                  <p>Returns the visible conversation so far, for restoring the chat after a page reload. Only the visitor&apos;s messages and the assistant&apos;s replies are included. Pass <Code>organizationId</Code> as a query parameter.</p>
                  <p>Returns <Code>200</Code>. Errors: <Code>400</Code>, <Code>404 Chat session not found</Code>, <Code>429</Code>.</p>
                  <CodeBlock title="Request" samples={api.chatHistory} />
                </Sub>
                <p>
                  Two more ways to capture a lead: post a form submission from your server as an event (next section), and, for Simple Website and Portfolio sites, map a <em>Form submissions</em> endpoint that NEXTOSA reads on demand (see Endpoints you host).
                </p>
              </Section>

              <Section id="events" title="Send an event">
                <Sub id="event-send" title="Send an event" method="POST" path="/api/webhooks/connected-apps/:connectionId">
                  <p>
                    Posts one event from your server. NEXTOSA resolves the contact, then starts every <strong className="font-semibold text-navy-900">active</strong> automation whose <em>Connected software event</em> trigger points at this connection, each as its own durable run. Works for every category.
                  </p>
                  <Note tone="warn">
                    <strong>Send a unique event id on every event.</strong> Add <Code>X-Event-Id: &lt;your id&gt;</Code> (or <Code>Idempotency-Key</Code>), for example your own lead or order id. NEXTOSA runs each id once per 24 hours: a retry or replay with the same id is acknowledged with <Code>200</Code> but not processed again, so your automations never fire twice. Without an id there is no deduplication, so a retry runs the automation again. Ids can be up to 200 characters and are scoped to this connection.
                  </Note>
                  <Params
                    title="Headers"
                    rows={[
                      { name: "x-api-key", type: "header", required: true, desc: "This connection's API key. A Bearer header is not accepted here." },
                      { name: "X-Event-Id", type: "header", desc: "Your unique id for this event (or send Idempotency-Key). Max 200 characters." },
                      { name: "Content-Type", type: "header", desc: "application/json" },
                    ]}
                  />
                  <Params
                    title="Body (a JSON object)"
                    rows={[
                      { name: "phone", type: "string", desc: "Identifies the contact. Send international format, for example +919876543210. It must match how the contact is stored to find them; anything else creates a new lead." },
                      { name: "contactId", type: "string", desc: "A NEXTOSA contact id, if you have one. Takes priority over phone." },
                      { name: "name", type: "string (max 200)", desc: "Saved on a new lead or a contact with no real name yet. Never overwrites a name already on record." },
                      { name: "email", type: "string", desc: "Saved lowercase when the contact has none. Never replaces an existing one. Ignored if it is not a valid address." },
                      { name: "eventType", type: "string (max 100)", desc: "Your own label, for example lead.created or order.paid. An automation can be set to run only for one eventType." },
                      { name: "(any other fields)", type: "any", desc: "Passed through untouched to your automations as {{trigger.payload.fieldName}}. The event label is {{trigger.eventType}}." },
                    ]}
                  />
                  <p>
                    You must send <Code>phone</Code> or <Code>contactId</Code>: with neither, the event is acknowledged but nothing runs. An automation with an <Code>eventType</Code> filter only runs for events carrying exactly that value; one with no filter runs for every event on the connection.
                  </p>
                  <p>
                    Returns <Code>200</Code> (plain <Code>OK</Code>) once authenticated, even if processing fails internally (that is logged on NEXTOSA&apos;s side so your sender does not needlessly retry). <Code>401</Code> wrong key, <Code>403</Code> connection off, <Code>404</Code> unknown connection or no key generated (status only, no body), <Code>429</Code> rate limited.
                  </p>
                  <Note>Limit: 30 requests per minute per connection, shared with product sync. Bodies over about 100 KB are rejected.</Note>
                  <CodeBlock title="Request" samples={api.eventRequest} />
                </Sub>
              </Section>

              <Section id="commands" title="Receive commands">
                <p>
                  When an automation runs <em>Send command to connected software</em>, NEXTOSA POSTs to the <strong className="font-semibold text-navy-900">Outbound webhook URL</strong> you set on the connection. The <Code>command</Code> name is whatever the automation&apos;s author chose (NEXTOSA has no fixed list) and the rest of the body is the payload they wrote.
                </p>
                <CodeBlock title="What your endpoint receives" samples={[{ label: "JSON", code: api.commandPayload }]} />
                <Params
                  title="Headers"
                  rows={[
                    { name: "x-nextosa-signature", type: "header", required: true, desc: "HMAC-SHA256 of the raw body, signed with this connection's API key, as sha256=<hex>. Always verify it." },
                    { name: "Idempotency-Key", type: "header", desc: "Stable for one automation step, even if it is re-run. Use it to skip a command you already handled." },
                    { name: "Content-Type", type: "header", desc: "application/json" },
                  ]}
                />
                <CodeBlock title="Verify the signature" samples={api.verifySignature} />
                <Note>
                  The URL must be <Code>https://</Code> and public. Reply with a <Code>2xx</Code> within 8 seconds: a JSON reply is handed to the next automation step; a non-2xx reply or a timeout marks that step as failed. Nothing is sent until you have generated an API key for the connection, since it signs every command.
                </Note>
              </Section>

              <Section id="product-sync" title="Product sync (E-Commerce)">
                <p>
                  Your store pushes its catalog into NEXTOSA, and the WhatsApp AI Sales Agent then answers product, price and stock questions from real data. Link the connection to a WhatsApp number to turn this on; only one connected store can have it on at a time.
                </p>
                <Sub id="product-sync-endpoint" title="Sync products" method="POST" path="/api/webhooks/sync-products/:connectionId">
                  <p>
                    Products are matched on your own <Code>externalProductId</Code>, so sending a product again updates it instead of duplicating it. Products you leave out of a request are left as they are: sync never deletes. Authenticate with <Code>x-api-key</Code> from your store&apos;s server, on each change or on a schedule.
                  </p>
                  <Params title="Body" rows={[{ name: "products", type: "array (1-500)", required: true, desc: "The products to create or update." }]} />
                  <Params
                    title="Each product"
                    rows={[
                      { name: "externalProductId", type: "string (1-200)", required: true, desc: "Your store's own product id: the update key." },
                      { name: "name", type: "string (1-300)", required: true, desc: "Product name." },
                      { name: "price", type: "number (0 or more)", required: true, desc: "Unit price." },
                      { name: "currency", type: "string (3 letters)", desc: "ISO currency code, for example INR or USD. Defaults to INR." },
                      { name: "inventory", type: "integer or null", desc: "Stock on hand. null means you do not track stock; 0 means genuinely out of stock, and the AI says so rather than offering it." },
                      { name: "description", type: "string (max 5000)", desc: "Shown to the AI so it can describe the product." },
                      { name: "imageUrl", type: "string (URL)", desc: "Product image URL." },
                      { name: "sku", type: "string (max 200)", desc: "Your SKU." },
                    ]}
                  />
                  <p>
                    Returns <Code>200</Code> with <Code>{`{ "ok": true, "synced": N }`}</Code>. Errors: <Code>400</Code> (JSON, <Code>error: &quot;Invalid request&quot;</Code> with <Code>details.fieldErrors</Code>); <Code>401</Code> wrong key, <Code>403</Code> connection off, <Code>404</Code> unknown connection or no key (status only); <Code>429</Code>.
                  </p>
                  <Note tone="warn">Up to 500 products and about 100 KB per request: split a large catalog into batches. 30 requests per minute per connection, shared with the Events endpoint.</Note>
                  <CodeBlock title="Request" samples={api.productSync} />
                  <CodeBlock title="Response" status="200 OK" samples={[{ label: "JSON", code: api.productSyncResponse }]} />
                </Sub>
              </Section>

              <Section id="booking" title="Booking API">
                <p>
                  Hosted by NEXTOSA. Your site reads open slots and books straight into the <strong className="font-semibold text-navy-900">Upcoming</strong> column, and double-booking is prevented. Base URL:
                </p>
                <CodeBlock samples={[{ label: "Base URL", code: api.BOOKING_BASE }]} />
                <p>
                  Prerequisites on the NEXTOSA side: online booking availability is switched on (opening hours set) in the Online Booking Availability card on Connected Websites, the connection has an inbound API key, and its <em>Booking API</em> switch is on.
                </p>
                <Note tone="warn">Call the API from your server, never from the visitor&apos;s browser. The key would be exposed, and browser requests are blocked on purpose.</Note>
                <nav aria-label="Booking API sections" className="flex flex-wrap gap-2 text-sm">
                  {bookingToc.map((t) => (
                    <a key={t.id} href={`#${t.id}`} className="rounded-full border border-slate-200 px-3 py-1 text-slate-600 hover:border-accent-400 hover:text-accent-700">{t.label}</a>
                  ))}
                </nav>

                <Sub id="booking-how" title="How availability works">
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                    <li>Slots sit on a grid (for example every 30 minutes) anchored to midnight in the business&apos;s timezone, within its weekly opening hours. An appointment must finish by closing time.</li>
                    <li>The business sets a minimum notice and a booking window. Times outside them are never offered.</li>
                    <li>Capacity is how many appointments may overlap. A slot is open while fewer than that many active appointments occupy it.</li>
                    <li>Upcoming, in-progress and pending-approval appointments all count, including ones the team typed in by hand and bookings from other connected websites. Back-to-back appointments do not conflict.</li>
                    <li><Code>GET /availability</Code> is a preview. The real decision happens when you <Code>POST</Code>: it is re-checked atomically, so always handle <Code>409 SLOT_UNAVAILABLE</Code>.</li>
                    <li>Times are ISO 8601 in UTC (<Code>startsAt</Code>). <Code>localTime</Code> is the same moment on the business&apos;s clock, for display.</li>
                  </ul>
                </Sub>

                <Sub id="booking-availability" title="Get availability" method="GET" path="/availability">
                  <p>Lists every open start time in a date range, grouped by calendar day in the business&apos;s timezone. Days with no openings come back with an empty <Code>slots</Code> array.</p>
                  <Params
                    title="Query parameters"
                    rows={[
                      { name: "from", type: "YYYY-MM-DD", required: true, desc: "First day, as a calendar date in the business's timezone." },
                      { name: "to", type: "YYYY-MM-DD", desc: "Last day, inclusive. Defaults to from. The range can span at most 31 days." },
                      { name: "durationMinutes", type: "integer (5-480)", desc: "Appointment length to check. Defaults to the business's default length. Only slots long enough are returned." },
                    ]}
                  />
                  <p>Returns <Code>200</Code>. Errors: <Code>400</Code>, <Code>401</Code>, <Code>403</Code>, <Code>409 BOOKING_NOT_ENABLED</Code>.</p>
                  <CodeBlock title="Request" samples={api.availabilityRequest} />
                  <CodeBlock title="Response" status="200 OK" samples={[{ label: "JSON", code: api.availabilityResponse }]} />
                </Sub>

                <Sub id="booking-create" title="Create a booking" method="POST" path="/bookings">
                  <p>Books a slot. The customer is matched to an existing client by phone number, or added as a new lead. The booking appears in the Upcoming column straight away.</p>
                  <Note>
                    <strong>Safe to retry.</strong> Send your own unique <Code>externalBookingId</Code>. If a request times out and you send it again, you get the original booking back (<Code>200</Code> with an <Code>Idempotent-Replay: true</Code> header) instead of a duplicate.
                  </Note>
                  <Params
                    title="Body"
                    rows={[
                      { name: "externalBookingId", type: "string (1-200)", required: true, desc: "Your own unique id. Also your handle for GET, PATCH and DELETE." },
                      { name: "startsAt", type: "ISO 8601", required: true, desc: "Start time with an explicit UTC offset, for example 2027-05-03T04:30:00.000Z or 2027-05-03T10:00:00+05:30. Must be a slot you were offered." },
                      { name: "service", type: "string (1-300)", required: true, desc: "What is being booked. Shown as the appointment title." },
                      { name: "customer.name", type: "string (1-200)", required: true, desc: "The customer's name." },
                      { name: "customer.phone", type: "string (5-30)", required: true, desc: "With country code, for example +919876543210. Identifies the customer." },
                      { name: "customer.email", type: "string", desc: "Customer email address." },
                      { name: "durationMinutes", type: "integer (5-480)", desc: "Defaults to the business's default appointment length." },
                      { name: "notes", type: "string (max 2000)", desc: "Free-text notes shown on the appointment." },
                      { name: "extra", type: "object", desc: "Up to 20 flat key/value pairs (string, number or boolean) stored on the appointment, for example a campaign or party size." },
                    ]}
                  />
                  <p>Returns <Code>201</Code> (or <Code>200</Code> on a replay) with <Code>{`{ "booking": ... }`}</Code>. Errors: <Code>409 SLOT_UNAVAILABLE</Code>, <Code>409 IDEMPOTENCY_CONFLICT</Code>, <Code>409 BOOKING_CANCELLED</Code>, <Code>422 INVALID_SLOT</Code>, <Code>422 INVALID_PHONE</Code>.</p>
                  <CodeBlock title="Request" samples={api.createBookingRequest} />
                  <CodeBlock title="Response" status="201 Created" samples={[{ label: "JSON", code: api.createBookingResponse }]} />
                  <CodeBlock title="If the slot was just taken" status="409 Conflict" samples={[{ label: "JSON", code: api.slotUnavailableResponse }]} />
                </Sub>

                <Sub id="booking-get" title="Retrieve a booking" method="GET" path="/bookings/:externalBookingId">
                  <p>Fetches a booking you made through this connection, with its current status, which changes as the business works through it (for example to <Code>COMPLETED</Code>). You can only see bookings made through your own connection.</p>
                  <p>Returns <Code>200</Code>. Errors: <Code>404 BOOKING_NOT_FOUND</Code>.</p>
                  <CodeBlock title="Request" samples={api.getBooking} />
                </Sub>

                <Sub id="booking-reschedule" title="Reschedule a booking" method="PATCH" path="/bookings/:externalBookingId">
                  <p>Moves an upcoming booking to a new time. The new slot goes through the same atomic check as a new booking, and the booking&apos;s own current slot never counts against it.</p>
                  <Params
                    title="Body"
                    rows={[
                      { name: "startsAt", type: "ISO 8601", required: true, desc: "The new start time, with a UTC offset." },
                      { name: "durationMinutes", type: "integer (5-480)", desc: "A new length. Defaults to the booking's current length." },
                    ]}
                  />
                  <p>Returns <Code>200</Code>. Errors: <Code>404 BOOKING_NOT_FOUND</Code>, <Code>409 SLOT_UNAVAILABLE</Code> (with alternatives), <Code>409 BOOKING_NOT_MODIFIABLE</Code>, <Code>422 INVALID_SLOT</Code>.</p>
                  <CodeBlock title="Request" samples={api.rescheduleBooking} />
                  <CodeBlock title="Response" status="200 OK" samples={[{ label: "JSON", code: api.rescheduleResponse }]} />
                </Sub>

                <Sub id="booking-cancel" title="Cancel a booking" method="DELETE" path="/bookings/:externalBookingId">
                  <p>Cancels an upcoming booking and frees its slot immediately. Cancelling twice is harmless: you get the cancelled booking back both times.</p>
                  <Note tone="warn">A cancelled <Code>externalBookingId</Code> cannot be reused. To book the customer again, use a new id.</Note>
                  <p>Returns <Code>200</Code>. Errors: <Code>404 BOOKING_NOT_FOUND</Code>, <Code>409 BOOKING_NOT_MODIFIABLE</Code> (already in progress or finished).</p>
                  <CodeBlock title="Request" samples={api.cancelBooking} />
                  <CodeBlock title="Response" status="200 OK" samples={[{ label: "JSON", code: api.cancelResponse }]} />
                </Sub>

                <Sub id="booking-object" title="The booking object">
                  <Params
                    title="Fields"
                    rows={[
                      { name: "id", type: "string", desc: "NEXTOSA's internal id for the appointment." },
                      { name: "externalBookingId", type: "string", desc: "Your id, as sent when creating it." },
                      { name: "status", type: "string", desc: <><Code>UPCOMING</Code>, <Code>IN_PROGRESS</Code>, <Code>COMPLETED</Code>, <Code>CANCELLED</Code>. Rarely <Code>PENDING_APPROVAL</Code> or <Code>WAITLISTED</Code>.</> },
                      { name: "service", type: "string", desc: "What was booked." },
                      { name: "startsAt / endsAt", type: "ISO 8601, UTC", desc: "The appointment's start and end." },
                      { name: "durationMinutes", type: "integer", desc: "Length of the appointment." },
                      { name: "customer", type: "object", desc: "name, phone (E.164) and email (or null)." },
                      { name: "createdAt / updatedAt", type: "ISO 8601, UTC", desc: "When it was made and last changed." },
                    ]}
                  />
                </Sub>

                <Sub id="booking-webhooks" title="Booking webhooks">
                  <p>
                    Set an <strong className="font-semibold text-navy-900">Outbound webhook URL</strong> on the connection and NEXTOSA POSTs to it whenever a booking made through that connection is created, rescheduled or cancelled.
                  </p>
                  <CodeBlock title="Request body" samples={[{ label: "JSON", code: api.bookingWebhookPayload }]} />
                  <Params
                    title="What you receive"
                    rows={[
                      { name: "command", type: "string", desc: <><Code>booking.created</Code>, <Code>booking.rescheduled</Code> or <Code>booking.cancelled</Code>.</> },
                      { name: "booking", type: "object", desc: "The full booking object." },
                      { name: "x-nextosa-signature", type: "header", desc: "HMAC-SHA256 of the raw body, signed with your API key, as sha256=<hex>. Always verify it." },
                      { name: "Idempotency-Key", type: "header", desc: "Stable per event. Use it to ignore a delivery you already handled." },
                    ]}
                  />
                  <p>Verify the signature exactly as shown under Receive commands.</p>
                  <Note>
                    The URL must be <Code>https://</Code> and publicly reachable. Reply with a <Code>2xx</Code> within 8 seconds; otherwise the delivery is retried (up to 3 attempts, with increasing delays). The same events are also available as the <em>Connected software event</em> trigger in the Automation Builder.
                  </Note>
                </Sub>

                <Sub id="booking-errors" title="Booking errors">
                  <SimpleTable
                    head={["Status", "Code", "Meaning"]}
                    rows={api.bookingErrors.map((e) => [String(e.status), <code key={e.code} className="text-[13px]">{e.code}</code>, e.meaning])}
                  />
                  <p className="text-sm">Practical advice: use your own order or reservation id as <Code>externalBookingId</Code> so a retry can never double-book; treat availability as a hint and show returned alternatives on a <Code>409</Code>; always send an explicit UTC offset and display times using <Code>localTime</Code>; verify every webhook signature and make your handler idempotent.</p>
                </Sub>

                <Sub id="booking-own" title="Your own booking system">
                  <p>
                    Prefer to keep your own scheduling system as the source of truth? Choose the <strong className="font-semibold text-navy-900">Booking / Appointments</strong> category, map the two URLs below under the connection&apos;s Settings tab, and NEXTOSA calls <em>your</em> endpoints when an AI agent, an automation or the connection&apos;s dashboard wants to create a booking or look up open times.
                  </p>
                  <Note tone="warn">In this mode your system decides whether a slot is free. NEXTOSA&apos;s own double-booking protection only applies to the Booking API above.</Note>
                  <p>The two endpoints (Create booking, Open slots) are described in the next section.</p>
                </Sub>
              </Section>

              <Section id="hosted" title="Endpoints you host">
                <p>
                  Map a URL per endpoint under the connection&apos;s Settings tab, and add the headers NEXTOSA should send. NEXTOSA calls them when an AI agent, an automation or the connection&apos;s dashboard needs the data, and reads the answer without keeping a copy.
                </p>
                <Note>
                  <strong>What NEXTOSA expects.</strong> A public <Code>https://</Code> URL (private and internal addresses are blocked) that answers within 8 seconds with a <Code>2xx</Code> and a JSON body. Only the first 20,000 characters are read, so a longer body is cut off mid-JSON and cannot be parsed: return recent or summarised data, not your whole database. Calls are not signed, so protect the endpoint with the header(s) you add on the connection. The response shapes below are recommended, not enforced.
                </Note>
                <div className="space-y-4">
                  {api.hostedSlots.map((s) => (
                    <div key={`${s.category}-${s.name}`} className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-base font-semibold text-navy-900">{s.name}</h3>
                        <span className="rounded-md bg-navy-900 px-2 py-0.5 text-xs font-semibold text-white">{s.method}</span>
                        <span className="text-sm text-slate-500">{s.category}</span>
                      </div>
                      <p className="text-sm leading-6 text-slate-600"><span className="font-semibold text-navy-900">NEXTOSA sends:</span> {s.sends}</p>
                      <CodeBlock title="Recommended response" status="200 OK" samples={[{ label: "JSON", code: s.example }]} />
                    </div>
                  ))}
                </div>
                <p>A minimal handler, shown for the orders endpoint (every endpoint follows the same shape):</p>
                <CodeBlock title="Example handler" samples={api.hostedHandler} />
                <p>Simple Website and Portfolio connections share the one Form submissions endpoint.</p>
              </Section>

              <Section id="checklist" title="Go-live checklist">
                <ul className="list-disc space-y-2 pl-5">
                  <li>The inbound API key is stored in a server-side environment variable, not in browser code or a repository.</li>
                  <li>Every event carries a unique <Code>X-Event-Id</Code>, so a retry cannot run an automation twice.</li>
                  <li>Every command and webhook handler verifies <Code>x-nextosa-signature</Code> against the raw body and answers within 8 seconds.</li>
                  <li>Booking calls use your own <Code>externalBookingId</Code> and handle <Code>409 SLOT_UNAVAILABLE</Code> by offering the alternatives.</li>
                  <li>Phone numbers are in international format, so the right contact is found instead of a new lead being created.</li>
                  <li>Endpoints you host are public https, protected by a header, and keep their answer under 20,000 characters.</li>
                  <li>Large catalogs are synced in batches of at most 500 products.</li>
                </ul>
                <p className="text-sm">
                  Questions about a specific integration? <Link href="/contact" className="font-medium text-accent-700 hover:underline">Contact us</Link>. For the non-technical picture, see the <Link href="/connected-websites" className="font-medium text-accent-700 hover:underline">Connected Websites overview</Link>.
                </p>
              </Section>
            </div>
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
