import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import SectionHeading from "@/components/SectionHeading";
import { DetailGrid, FaqList } from "@/components/DepthBlocks";
import CTA from "@/components/home/CTA";
import type { Detail, Faq } from "@/lib/depth";

export const metadata: Metadata = buildMetadata({
  title: "Automations: Settings and the Visual Builder",
  description:
    "How NEXTOSA automation works: ready-made reminders and auto-send in Settings, plus the Automations module with a visual workflow builder, schedules, email drips and run history. And exactly how the two differ.",
  path: "/automations",
});

const settingsItems: Detail[] = [
  { title: "Pre-service reminders", text: "Pick an approved WhatsApp template and a lead time. Customers get a reminder before their appointment, and you can run the sweep on demand with Run now." },
  { title: "Overdue invoice reminders", text: "Choose a template (with an optional PDF of the invoice) and NEXTOSA reminds clients whose invoices are past due. If WhatsApp does not deliver, the same reminder goes out by Gmail." },
  { title: "Lead follow-up", text: "Template-based follow-ups for leads that went quiet, with a Run now button so you can see who would be messaged." },
  { title: "Auto-send invoices and receipts", text: "Switch it on once and every invoice and payment receipt goes to the client automatically as a PDF-first WhatsApp template. Gmail is the fallback when WhatsApp cannot deliver." },
  { title: "Send by email", text: "A toggle that also emails invoices and receipts through your connected Gmail. Schools email the guardian only, never the student." },
  { title: "Industry reminders", text: "Demand-letter reminders for Real Estate, workout and diet plans for Gyms, DSC expiry for CA firms, and proposal sending for Professional Services." },
  { title: "School alerts", text: "Absence, homework and library alerts, fee reminders, library fines and report cards, each with its own template and its own permission." },
  { title: "Sender numbers per trigger", text: "With two or more WhatsApp numbers, choose which number each automatic message goes out from, for example billing from the Billing number. If a template belongs to a different WhatsApp account, the send fails clearly instead of silently using another number." },
  { title: "AI reschedule mode", text: "When a customer asks to move an appointment, let the AI propose the new slot for your approval, or apply it automatically." },
];

const builderTriggers: Detail[] = [
  { title: "WhatsApp message", text: "Starts when a customer messages you. Add keyword hints or let the AI Router decide the intent." },
  { title: "Email received", text: "Starts on an incoming email to your connected Gmail, optionally only when it mentions words like price, quote or demo." },
  { title: "New contact", text: "Fires the moment a lead, client or patient is added." },
  { title: "Schedule", text: "A cron schedule in your workspace time zone. It runs once for the workspace, for every contact, or for contacts with a tag. Opted-out contacts are always skipped." },
  { title: "CRM event", text: "Starts when a record changes status, for example an appointment becomes completed." },
  { title: "Payment received", text: "Starts the moment a payment lands, so thank-you messages and follow-ups need no manual step." },
  { title: "Inbound webhook and external events", text: "Let another system start a workflow: a website form, an order from your store, an event from a connected app." },
  { title: "Industry triggers", text: "Membership expiring, member absent, new gym lead, equipment broken and more, depending on your business type." },
];

const builderNodes: Detail[] = [
  { title: "Send messages", text: "Send a WhatsApp reply, an approved WhatsApp template with variables, an AI-written reply, or an email with merge fields such as the first name and business name." },
  { title: "Wait and time", text: "A Delay node waits minutes, hours or days. A Smart Timer waits until a date taken from the record, such as a due date. A waiting run survives restarts." },
  { title: "Decide", text: "Condition (yes or no), Multi-Path Router (several branches) and AI Router (classifies what the customer meant) send each run down the right path." },
  { title: "Look things up", text: "Check Data reads your own records first (service catalog, free slots, content plan) so replies quote real prices and real availability." },
  { title: "Use AI where it helps", text: "AI Extract pulls fields out of text, AI Summarize shortens it, AI Task runs your own instruction and AI Reply writes the answer. Each is a step you place, not a hidden behaviour." },
  { title: "Update your CRM", text: "Add a tag, create a task, notify the owner, create or move a deal, create a booking, or create an admission lead." },
  { title: "Shape data", text: "Transform text and dates, evaluate math such as amount times tax, and loop over a list with the Iterator." },
  { title: "Connect to other tools", text: "Call a webhook, trigger Zapier, call a connected app or your own custom app, publish to Instagram, extract text from a PDF, or run a browser action." },
];

const safety: Detail[] = [
  { title: "No accidental mass messages", text: "A schedule has no default audience. You must choose workspace, every contact or a tag, and a per-run contact cap applies (default 200)." },
  { title: "Opt-outs are respected", text: "Contacts who unsubscribed are skipped by every schedule and every email. Each email carries an unsubscribe link." },
  { title: "Email daily cap", text: "Automation emails are capped at 300 per workspace per rolling 24 hours." },
  { title: "A run is never walked twice", text: "Each run is claimed atomically, so a retry, a worker restart or the recovery sweep can never send the same message twice." },
  { title: "Interrupted runs are flagged, not repeated", text: "A run stuck part-way is marked failed as interrupted instead of being replayed, because earlier steps may already have messaged someone." },
  { title: "Full run history", text: "The Run history tab shows every run with its status and a step-by-step timeline. You can cancel a run that is still waiting." },
];

const starters: Detail[] = [
  { title: "Weekly email to a contact group", text: "A schedule that emails everyone with a tag every Monday. It targets a tag nobody has yet, so activating it unedited emails no one." },
  { title: "Welcome email series", text: "New contact, email now, wait two days, follow-up email: a real drip made of ordinary steps." },
  { title: "Reply to incoming emails", text: "Email received, filtered on price, pricing or quote, then an automatic reply." },
];

const compareRows: { topic: string; settings: string; builder: string }[] = [
  { topic: "What it is", settings: "A set of built-in automations for the jobs every business needs.", builder: "A blank canvas where you design your own workflow." },
  { topic: "Where you find it", settings: "Settings, then Automation.", builder: "The Automations module in the sidebar, with tabs for Automations, Run history and Templates." },
  { topic: "How you set it up", settings: "Switch a toggle on and pick a template. A few minutes, no design needed.", builder: "Place a trigger and steps on the canvas, connect them, fill each step's fields, activate." },
  { topic: "Who it suits", settings: "Everyone, especially a new workspace that wants the basics running today.", builder: "Owners and managers who want something specific to their business." },
  { topic: "What starts it", settings: "Fixed events: an invoice becomes overdue, an appointment is near, a payment is recorded.", builder: "Your choice from many triggers: messages, emails, new contacts, schedules, status changes, payments, webhooks." },
  { topic: "Logic", settings: "Nothing to design. The rule is built in.", builder: "Conditions, multi-path routing, AI classification, delays, loops and lookups." },
  { topic: "Flexibility", settings: "You choose the template, timing and sending number. The flow itself is fixed.", builder: "Fully flexible: any order, any branch, any combination of steps." },
  { topic: "Channels", settings: "WhatsApp templates, with Gmail as fallback for financial messages.", builder: "WhatsApp, email, Instagram, webhooks, Zapier, connected apps and custom apps." },
  { topic: "AI", settings: "Only AI reschedule mode.", builder: "AI Router, AI Reply, Extract, Summarize and custom AI tasks as steps." },
  { topic: "Visibility", settings: "A Run now button shows what would be sent.", builder: "A run history with a step-by-step timeline for every run, and cancel for waiting runs." },
  { topic: "Example", settings: "Remind every client whose invoice is overdue.", builder: "When a lead messages about pricing, look up the price, reply, tag them, create a deal, and follow up after two days if they stay quiet." },
];

const faqs: Faq[] = [
  { question: "Do I need both?", answer: "Most businesses start with Settings, because it covers invoices, receipts and reminders in minutes. Add the visual builder when you want a workflow that only your business has." },
  { question: "Can the two send the same message twice?", answer: "They are separate. Settings handles the built-in reminders and auto-send. If you build a similar workflow in the builder, review it so the same customer is not messaged by both." },
  { question: "Do I need to write code?", answer: "No. The builder is visual and you fill in fields on each step. Merge fields such as the first name are simple placeholders." },
  { question: "What happens if a customer opted out?", answer: "Scheduled workflows and every automation email skip contacts who opted out." },
  { question: "Do automations run while I am offline?", answer: "Yes. Delays and schedules run on the server in durable queues, and a recovery sweep picks up anything that was interrupted." },
  { question: "Is there a button to run a workflow right now?", answer: "Settings automations have Run now. The builder deliberately has none for graph workflows, because it could message real contacts by accident. Use a schedule or a trigger." },
];

const pill = "rounded-full border border-accent-600/30 bg-accent-50 px-4 py-2 text-accent-700 hover:bg-accent-100";

export default function AutomationsPage() {
  return (
    <>
      <section className="relative overflow-hidden theme-light py-24">
        <Container className="relative text-center">
          <Badge>Automations</Badge>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Two ways to automate: ready in minutes, or built your way
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            <strong className="font-semibold">Settings &gt; Automation</strong> gives you the proven basics with a few toggles. The{" "}
            <strong className="font-semibold">Automations module</strong> gives you a visual builder for anything else. This page explains both, and exactly how they differ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-medium">
            <a href="#settings" className={pill}>Settings automation</a>
            <a href="#builder" className={pill}>Visual builder</a>
            <a href="#difference" className={pill}>The difference</a>
          </div>
        </Container>
      </section>

      <div id="settings" className="scroll-mt-24">
        <DetailGrid
          eyebrow="Part 1"
          title="Settings > Automation: the built-in basics"
          description="These automations are already designed for you. You do not build anything. You turn them on, pick your approved WhatsApp template, and NEXTOSA does the rest."
          items={settingsItems}
          tone="white"
        />
      </div>

      <div id="builder" className="scroll-mt-24">
        <section className="bg-slate-50 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Part 2"
              title="The Automations module and its visual builder"
              description="A canvas where you place a trigger, connect steps and decide what happens next. The same engine runs your workflow every time, on the server, even when you are not logged in."
            />
            <ol className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Start with a trigger", "What should begin the workflow."],
                ["Add steps", "Messages, waits, decisions, lookups, AI, CRM updates."],
                ["Connect them", "Draw the path. Branch where the answer differs."],
                ["Activate", "It runs on its own. Watch each run in Run history."],
              ].map(([t, d], i) => (
                <li key={t} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-600 text-sm font-bold text-white">{i + 1}</span>
                  <h3 className="mt-4 text-base font-semibold text-navy-900">{t}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">{d}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
        <DetailGrid eyebrow="Triggers" title="What can start a workflow" items={builderTriggers} tone="white" />
        <DetailGrid eyebrow="Steps" title="What a workflow can do" items={builderNodes} />
        <DetailGrid eyebrow="Starters" title="One-click email starters" description="Open the builder pre-filled, then change anything on the canvas." items={starters} tone="white" />
        <DetailGrid eyebrow="Safety" title="Built so automation never runs wild" items={safety} />
      </div>

      <section id="difference" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Part 3"
            title="Settings automation vs the visual builder"
            description="Same goal, different job. Think of Settings as the ready-made appliance and the builder as the workshop."
          />
          <div className="mx-auto mt-12 hidden max-w-5xl overflow-hidden rounded-2xl border border-slate-200 md:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-navy-900">
                <tr>
                  <th className="p-4 font-semibold">&nbsp;</th>
                  <th className="p-4 font-semibold">Settings &gt; Automation</th>
                  <th className="p-4 font-semibold">Automations module (visual builder)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {compareRows.map((r) => (
                  <tr key={r.topic} className="align-top">
                    <td className="p-4 font-semibold text-navy-900">{r.topic}</td>
                    <td className="p-4 leading-6 text-slate-600">{r.settings}</td>
                    <td className="p-4 leading-6 text-slate-600">{r.builder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 md:hidden">
            {compareRows.map((r) => (
              <div key={r.topic} className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-base font-semibold text-navy-900">{r.topic}</h3>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent-700">Settings automation</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{r.settings}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent-700">Visual builder</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{r.builder}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-accent-600/20 bg-accent-50 p-7">
            <h3 className="text-lg font-semibold text-navy-900">Which one should I use?</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              If the job is on the Settings list (invoices, receipts, overdue and appointment reminders, school alerts), use Settings: it is faster and already tuned. If you need your own sequence, your own conditions or a connection to another tool, build it in the Automations module. Many teams use both: Settings for billing, the builder for sales follow-up.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Related:{" "}
              <Link href="/platform/ai-agents" className="font-medium text-accent-700 hover:underline">AI agents</Link> and{" "}
              <Link href="/roles-and-permissions" className="font-medium text-accent-700 hover:underline">roles and permissions</Link>.
            </p>
          </div>
        </Container>
      </section>

      <FaqList faqs={faqs} />
      <CTA />
    </>
  );
}
