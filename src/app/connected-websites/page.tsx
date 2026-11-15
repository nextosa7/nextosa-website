import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/Container";
import GuideHero from "@/components/GuideHero";
import SectionHeading from "@/components/SectionHeading";
import { DetailGrid, FaqList, SetupSteps } from "@/components/DepthBlocks";
import CTA from "@/components/home/CTA";
import type { Detail, Faq } from "@/lib/depth";

export const metadata: Metadata = buildMetadata({
  title: "Connected Websites: Link Your Site or App to NEXTOSA",
  description:
    "Connect your website, online store, booking site or software product to NEXTOSA. Capture leads, take bookings without double-booking, sync products, chat with an AI assistant, and let your AI agents read live data from your site. Full developer docs included.",
  path: "/connected-websites",
});

const whatItDoes: Detail[] = [
  { title: "Leads from your website become contacts", text: "A contact-form submission, a sign-up or an enquiry is posted to NEXTOSA from your server. The person is found, or created as a new lead, and your automations can start from it." },
  { title: "An AI chat assistant on your site", text: "Put the live chat on any page. The visitor gives an email, becomes a real contact, and talks to your AI assistant, which answers from what NEXTOSA knows about your business." },
  { title: "Bookings that cannot double-book", text: "Your site reads open slots and books straight into NEXTOSA. The slot is re-checked at the moment of booking, so two people can never take the same one, even against appointments your team typed in by hand." },
  { title: "Your store catalog, in WhatsApp", text: "Push your products in and the WhatsApp AI Sales Agent answers price, description and stock questions from real data. An item you mark out of stock is described as out of stock, not offered." },
  { title: "Live data for your AI agents", text: "Map one read-only address on your site (listings, courses, orders, usage, form submissions) and NEXTOSA fetches it on demand when an agent or automation needs it. Nothing is copied or stored." },
  { title: "Commands back to your site", text: "An automation can tell your site to do something, for example assign a plan or mark a lead. The request is signed so your site can trust it came from NEXTOSA." },
];

const categoryRows: { type: string; inbound: string; hosted: string }[] = [
  { type: "Booking / Appointments", inbound: "Booking API: open slots, create, reschedule, cancel, webhooks", hosted: "Create booking, open slots" },
  { type: "E-Commerce", inbound: "Product sync", hosted: "Orders, create product" },
  { type: "Simple Website", inbound: "Live chat, lead events", hosted: "Form submissions" },
  { type: "Portfolio", inbound: "Live chat, lead events", hosted: "Form submissions" },
  { type: "Real Estate", inbound: "Enquiry events", hosted: "Listings" },
  { type: "EdTech / Courses", inbound: "Enrolment events", hosted: "Courses" },
  { type: "SaaS", inbound: "Sign-up events", hosted: "Usage" },
];

const setupSteps: Detail[] = [
  { title: "Add the website", text: "Open Connected Websites in the sidebar and choose Add Custom App. Give it a name and its base URL, and pick its category. You can change the category later." },
  { title: "Generate the inbound API key", text: "On the connection, choose Generate Inbound API Key. It is shown once, so store it straight away as an environment variable on your server. Regenerating it stops the old key immediately." },
  { title: "Link a WhatsApp number (optional)", text: "Edit the connection and link one of your WhatsApp numbers so leads from this site are answered there. This is also what lets a store's catalog feed the WhatsApp AI Sales Agent." },
  { title: "Map the addresses you host (optional)", text: "If your category has endpoints that NEXTOSA should read, such as listings or orders, add their URLs under the connection's Settings tab, plus any header NEXTOSA must send, for example a Bearer token." },
  { title: "Set an outbound webhook URL (optional)", text: "Add it if you want NEXTOSA to send signed commands or booking webhooks to your site. Nothing is sent until an API key exists, because the key signs every request." },
  { title: "Send a test", text: "Post a test lead or a test product from your server and check that it appears. The in-app Developer Hub fills every address and id in for the connection you pick, so you can copy straight into your code." },
];

const credentials: { name: string; setUp: string; usedFor: string }[] = [
  { name: "Inbound API key", setUp: "Generated in NEXTOSA, shown once.", usedFor: "Authenticates your server's calls to NEXTOSA (Booking API, Events, Product sync), and signs every command and webhook NEXTOSA sends to you." },
  { name: "Connection headers", setUp: "You type them on the connection, for example Authorization: Bearer ...", usedFor: "Sent by NEXTOSA on every call to the endpoints you host, so your site can tell it is NEXTOSA asking." },
  { name: "Session id", setUp: "Nothing to set up. Returned when a chat starts.", usedFor: "The live chat only. It is built to run in a visitor's browser, so it needs no API key." },
];

const limits: { what: string; limit: string; scope: string }[] = [
  { what: "Booking API reads", limit: "120 per minute", scope: "per connection" },
  { what: "Booking API writes", limit: "30 per minute", scope: "per connection" },
  { what: "Events and product sync", limit: "30 per minute", scope: "per connection, shared by both" },
  { what: "Live chat", limit: "15 per minute", scope: "per visitor IP, shared by the three chat calls" },
  { what: "Request bodies you send", limit: "about 100 KB", scope: "per request" },
  { what: "Products per sync request", limit: "500", scope: "split a larger catalog into batches" },
  { what: "Endpoints you host", limit: "8 second timeout, first 20,000 characters read", scope: "public https addresses only" },
];

const trust: Detail[] = [
  { title: "Keys stay on your server", text: "The API key is for server-side code only. The one browser-safe part is the live chat, which uses no key and a per-visitor session id instead." },
  { title: "Signed commands", text: "Every command and booking webhook NEXTOSA sends carries an HMAC-SHA256 signature of the raw body, made with your key. Your site verifies it before acting." },
  { title: "Safe retries", text: "Send a unique event id with an event and NEXTOSA runs it once per 24 hours, so a retry never fires an automation twice. Bookings use your own booking id the same way: a retry returns the original booking." },
  { title: "Public https only", text: "Addresses NEXTOSA calls must be public https URLs. Private and internal addresses are blocked, and a slow answer is cut off after 8 seconds." },
  { title: "Live data is not copied", text: "Orders, listings, courses and usage are read on demand and never added to NEXTOSA's own sales, invoices or revenue, so a connected store can never double-count into your figures." },
  { title: "Booking API gives nothing away", text: "On the Booking API a wrong key and an unknown connection id return the same 401, so nobody can probe which connections exist. Failed attempts count toward the rate limit on every API." },
];

const faqs: Faq[] = [
  { question: "Do I need a developer?", answer: "For a custom site, yes: someone has to add a few server calls. The live chat, the Booking API, events and product sync are plain HTTPS requests with copy-ready examples in the developer reference." },
  { question: "Can I use more than one connected website?", answer: "Yes. Each website is its own connection with its own key, category and settings. The number of connections is limited by your plan. A lead is tagged with the connection that first brought them in and is never re-attributed." },
  { question: "Is the live chat safe to put on a public page?", answer: "It is built for that. It needs no API key, is limited to 15 requests per minute per visitor, and the session id it returns is the visitor's only credential. Because the page supplies the connection id, a determined visitor could label a lead with a different one of your connections. If attribution must be tamper-proof, send the lead from your server instead." },
  { question: "What happens if a customer is double-booked on my own system?", answer: "If you use the Booking API, NEXTOSA decides: the slot is re-checked atomically on every booking. If you bring your own booking system instead, your system decides whether a slot is free, and NEXTOSA's double-booking protection does not apply." },
  { question: "Does NEXTOSA store my orders or listings?", answer: "No. Endpoints you host are read live when needed and never added to NEXTOSA's own records. Product sync is the exception by design: it stores the catalog you push so the AI can answer from it." },
  { question: "Can only one store feed the AI Sales Agent?", answer: "Yes. Only one connected store can have product sync switched on for the AI at a time." },
  { question: "Where do I find my exact URLs?", answer: "Inside NEXTOSA, on Connected Websites, the Developer Hub fills every URL, organization id and connection id in for the connection you select. The developer reference here uses placeholders." },
  { question: "Which Booking API businesses are supported?", answer: "Restaurants and salons use their own booking engines and cannot use the Booking API. Other business types can, once online booking is switched on and availability is set." },
];

const pill = "rounded-full border border-accent-600/30 bg-accent-50 px-4 py-2 text-accent-700 hover:bg-accent-100";

export default function ConnectedWebsitesPage() {
  return (
    <>
      <GuideHero badge="Connected Websites" title="Connect your website or app to NEXTOSA, in both directions">
        Send leads, bookings and products from your site into NEXTOSA, and let NEXTOSA read live data from your site and send it signed commands back. Everything is a plain HTTPS call with copy-ready examples in the{" "}
        <Link href="/connected-websites/api" className="font-medium text-accent-300 hover:underline">developer reference</Link>.
        <span className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-medium">
          <a href="#what-it-does" className={pill}>What it does</a>
          <a href="#directions" className={pill}>Two directions</a>
          <a href="#types" className={pill}>Website types</a>
          <a href="#setup" className={pill}>Setup</a>
          <a href="#limits" className={pill}>Limits</a>
        </span>
      </GuideHero>

      <div id="what-it-does" className="scroll-mt-24">
        <DetailGrid eyebrow="What you get" title="One connection, many jobs" description="Use any of these on their own or together. None of them depends on your website category." items={whatItDoes} tone="white" />
      </div>

      <section id="directions" className="scroll-mt-24 bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="How it fits together" title="Two directions. Know which one you need." description="Which direction an integration runs in decides which part of the docs to read." />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-700">Your site to NEXTOSA</p>
              <h3 className="mt-2 text-lg font-semibold text-navy-900">APIs NEXTOSA hosts</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Your code calls NEXTOSA to book an appointment, sync products, send an event or start a chat. You authenticate with your connection&apos;s API key (the live chat needs none). Use this to push things into NEXTOSA.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-700">NEXTOSA to your site</p>
              <h3 className="mt-2 text-lg font-semibold text-navy-900">Endpoints you host</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                You map a URL on your site, such as listings, courses or orders, and NEXTOSA calls it when an AI agent or automation needs live data. NEXTOSA reads it and does not keep a copy. Use this to let NEXTOSA look things up.
              </p>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-slate-600">
            Your website <strong className="font-semibold text-navy-900">category</strong> decides which endpoints NEXTOSA can call on your site. The APIs NEXTOSA hosts (events, live chat, booking, product sync) are not tied to a category: any connection can use them.
          </p>
        </Container>
      </section>

      <section id="types" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Website types" title="Pick the type that matches your site" description="Choose a category when you add the connection. Every type can also send events and receive signed commands." />
          <div className="mx-auto mt-12 hidden max-w-5xl overflow-hidden rounded-2xl border border-slate-200 md:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-navy-900">
                <tr>
                  <th className="p-4 font-semibold">Website type</th>
                  <th className="p-4 font-semibold">Your site to NEXTOSA</th>
                  <th className="p-4 font-semibold">NEXTOSA to your site (you host)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {categoryRows.map((r) => (
                  <tr key={r.type} className="align-top">
                    <td className="p-4 font-semibold text-navy-900">{r.type}</td>
                    <td className="p-4 leading-6 text-slate-600">{r.inbound}</td>
                    <td className="p-4 leading-6 text-slate-600">{r.hosted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 md:hidden">
            {categoryRows.map((r) => (
              <div key={r.type} className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-base font-semibold text-navy-900">{r.type}</h3>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent-700">Your site to NEXTOSA</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{r.inbound}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent-700">NEXTOSA to your site</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{r.hosted}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div id="setup" className="scroll-mt-24">
        <SetupSteps title="How to connect a website" items={setupSteps} />
      </div>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Credentials" title="Which key, and where" description="Three different credentials are in play. Mixing them up is the most common integration mistake." />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {credentials.map((c) => (
              <div key={c.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-base font-semibold text-navy-900">{c.name}</h3>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent-700">Where it comes from</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{c.setUp}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent-700">What it is for</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{c.usedFor}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-slate-600">
            Calls NEXTOSA makes to the endpoints you host are <strong className="font-semibold text-navy-900">not signed</strong>: protect them with the connection headers. Only commands and webhooks sent to your outbound webhook URL carry a signature.
          </p>
        </Container>
      </section>

      <DetailGrid eyebrow="Trust" title="Built to be safe to wire into production" items={trust} tone="white" />

      <section id="limits" className="scroll-mt-24 bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Limits" title="Rate limits and sizes" description="Going over a rate limit returns 429. Wait a moment and retry. Failed authentication attempts count toward the limit." />
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-navy-900">
                <tr>
                  <th className="p-4 font-semibold">What</th>
                  <th className="p-4 font-semibold">Limit</th>
                  <th className="hidden p-4 font-semibold sm:table-cell">Applies to</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {limits.map((r) => (
                  <tr key={r.what} className="align-top">
                    <td className="p-4 font-semibold text-navy-900">
                      {r.what}
                      <span className="mt-1 block text-xs font-normal text-slate-500 sm:hidden">{r.scope}</span>
                    </td>
                    <td className="p-4 text-slate-600">{r.limit}</td>
                    <td className="hidden p-4 text-slate-600 sm:table-cell">{r.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-accent-600/20 bg-accent-50 p-7">
            <h3 className="text-lg font-semibold text-navy-900">Ready to build?</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              The developer reference has every endpoint with its parameters, responses, errors and cURL, Node.js and Python examples.
            </p>
            <p className="mt-4 text-sm">
              <Link href="/connected-websites/api" className="font-medium text-accent-700 hover:underline">Open the developer reference &rarr;</Link>
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Related: <Link href="/automations" className="font-medium text-accent-700 hover:underline">automations</Link>,{" "}
              <Link href="/whatsapp-connect" className="font-medium text-accent-700 hover:underline">connect WhatsApp</Link> and{" "}
              <Link href="/platform/ai-agents" className="font-medium text-accent-700 hover:underline">AI agents</Link>.
            </p>
          </div>
        </Container>
      </section>

      <FaqList faqs={faqs} tone="white" />
      <CTA />
    </>
  );
}
