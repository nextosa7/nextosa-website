import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import { DetailGrid, FaqList } from "@/components/DepthBlocks";
import CTA from "@/components/home/CTA";
import type { Detail, Faq } from "@/lib/depth";

export const metadata: Metadata = buildMetadata({
  title: "Plan limits explained",
  description:
    "What each NEXTOSA plan includes: WhatsApp messages, team members, WhatsApp numbers, site connections, documents and storage, what counts toward each limit and what happens when you reach it.",
  path: "/plan-limits",
});

const rows: { label: string; trial: string; starter: string; growth: string; enterprise: string }[] = [
  { label: "Price", trial: "Free for 3 days", starter: "₹1,499/mo", growth: "₹3,999/mo", enterprise: "₹8,999/mo" },
  { label: "WhatsApp messages / month", trial: "50", starter: "100", growth: "1,000", enterprise: "3,000" },
  { label: "Team members", trial: "1", starter: "3", growth: "5", enterprise: "15" },
  { label: "WhatsApp numbers", trial: "1", starter: "1", growth: "3", enterprise: "10" },
  { label: "Site connections", trial: "1", starter: "1", growth: "2", enterprise: "5" },
  { label: "Documents", trial: "20", starter: "50", growth: "500", enterprise: "2,000" },
  { label: "Document storage", trial: "200 MB", starter: "500 MB", growth: "5 GB", enterprise: "20 GB" },
  { label: "AI tokens / month", trial: "100,000", starter: "500,000", growth: "2,000,000", enterprise: "5,000,000" },
];

const whatsapp: Detail[] = [
  { title: "What counts", text: "Every message your workspace successfully sends on WhatsApp counts as one: a reply you type, an AI reply, a template, a campaign message, a reminder, an invoice or receipt, a booking confirmation or an automation message." },
  { title: "What does not count", text: "Messages your customers send to you are not counted. A message that failed to send is not counted either." },
  { title: "Resets every month", text: "The count starts again at zero with your billing month. Unused messages do not carry over." },
  { title: "Per workspace", text: "Each workspace has its own monthly count and gets the plan's full allowance. They are not pooled across workspaces." },
  { title: "Checked before a send starts", text: "A single message, a bulk template send or a campaign is checked once, up front. If you are already at the limit it is refused outright, so a big send never stops halfway for the wrong reason." },
  { title: "When you reach it", text: "Sending is paused and the app asks you to upgrade. Receiving customer messages, reading conversations and the rest of NEXTOSA keep working." },
  { title: "Meta's charges are separate", text: "The monthly allowance is NEXTOSA's own limit. Any charges Meta makes for WhatsApp Business conversations are billed by Meta and are not part of your NEXTOSA plan." },
];

const other: Detail[] = [
  { title: "Team members", text: "The plan counts the people in your workspace plus any invitations still waiting, so a pending invite already holds a seat. Customer-facing portal logins (parents, students, distributors, gym members, clients) and School class teachers do not use a paid seat." },
  { title: "WhatsApp numbers", text: "How many WhatsApp numbers you can connect to one workspace. Each number can have its own mode and its own AI agent. Connecting one more than your plan allows is refused until you upgrade." },
  { title: "Site connections", text: "How many of your own websites or apps you can connect to send leads and bookings into NEXTOSA. Connecting beyond the limit asks you to upgrade." },
  { title: "Documents", text: "The number of files you can keep in the Documents area. Uploading one past the limit is refused. The temporary attachment in document chat also stops once the limit has been reached." },
  { title: "Document storage", text: "The total size of your uploaded files. An upload that would take you past the plan's storage is refused, and you can free space by removing files." },
  { title: "AI tokens", text: "A separate monthly allowance for everything AI does. See the AI tokens page for where tokens are used and what top-ups are available." },
];

const behaviour: Detail[] = [
  { title: "Limits stop the action, not your data", text: "Reaching a limit only blocks the thing that went over (a send, an upload, an invite). Nothing is deleted and everything you already have stays available." },
  { title: "One clear message", text: "The app tells you which limit you reached and offers an upgrade right there, instead of a vague error." },
  { title: "Upgrade takes effect straight away", text: "A higher plan raises the limits for the same workspace. You can also change plans or cancel later." },
  { title: "Need something bigger?", text: "If your usage does not fit a public plan, contact us and we can set limits that suit your business." },
];

const faqs: Faq[] = [
  { question: "Is the WhatsApp limit per number or per workspace?", answer: "Per workspace. All your WhatsApp numbers share the workspace's monthly message allowance." },
  { question: "Do incoming customer messages use my allowance?", answer: "No. Only messages your workspace sends count." },
  { question: "Does an AI reply count as a message?", answer: "Yes, it is a WhatsApp message like any other. It also uses AI tokens, because the AI wrote it." },
  { question: "Do unused messages roll over?", answer: "No. The count resets each month." },
  { question: "Can I buy extra WhatsApp messages?", answer: "Not as a separate pack today. You can move to a higher plan. AI tokens can be topped up separately." },
  { question: "I run several businesses. Do the limits add up?", answer: "Each workspace has its own full allowance for messages and tokens. They are never combined." },
];

export default function PlanLimitsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 py-24">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <Container className="relative text-center">
          <Badge>Plan limits</Badge>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Know what your plan includes before you start</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            WhatsApp messages, team members, numbers, documents and more: what each plan allows, what counts toward it and what happens at the limit. For AI, see{" "}
            <Link href="/ai-tokens" className="font-medium text-accent-300 hover:underline">AI tokens explained</Link>.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">At a glance</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900">Every plan, side by side</h2>
          </div>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-50 text-navy-900">
                <tr>
                  <th className="px-5 py-4 font-semibold">&nbsp;</th>
                  <th className="px-5 py-4 font-semibold">Free Trial</th>
                  <th className="px-5 py-4 font-semibold">Starter</th>
                  <th className="px-5 py-4 font-semibold">Growth</th>
                  <th className="px-5 py-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-t border-slate-200">
                    <th scope="row" className="px-5 py-3 font-medium text-slate-700">{r.label}</th>
                    <td className="px-5 py-3 text-slate-600">{r.trial}</td>
                    <td className="px-5 py-3 text-slate-600">{r.starter}</td>
                    <td className="px-5 py-3 text-slate-600">{r.growth}</td>
                    <td className="px-5 py-3 text-slate-600">{r.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">Limits apply to each workspace. Quarterly and yearly billing are available on the paid plans.</p>
        </Container>
      </section>

      <DetailGrid eyebrow="WhatsApp messages" title="How the monthly message limit works" items={whatsapp} />
      <DetailGrid eyebrow="Everything else" title="The other limits, one by one" items={other} tone="white" />
      <DetailGrid eyebrow="At the limit" title="What happens when you reach one" items={behaviour} />
      <FaqList faqs={faqs} tone="white" />
      <CTA />
    </>
  );
}
