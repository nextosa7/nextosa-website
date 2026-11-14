import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import { DetailGrid, FaqList } from "@/components/DepthBlocks";
import CTA from "@/components/home/CTA";
import type { Detail, Faq } from "@/lib/depth";

export const metadata: Metadata = buildMetadata({
  title: "AI tokens explained",
  description:
    "What an AI token is, where NEXTOSA uses tokens, what never costs tokens, how much each plan includes and what happens when you run out.",
  path: "/ai-tokens",
});

const plans: { name: string; tokens: string; price: string }[] = [
  { name: "Free Trial", tokens: "100,000", price: "Free for 3 days" },
  { name: "Starter", tokens: "500,000", price: "₹1,499/mo" },
  { name: "Growth", tokens: "2,000,000", price: "₹3,999/mo" },
  { name: "Enterprise", tokens: "5,000,000", price: "₹8,999/mo" },
];

const topUps: { tokens: string; price: string }[] = [
  { tokens: "1M", price: "₹499" },
  { tokens: "5M", price: "₹1,999" },
  { tokens: "15M", price: "₹4,499" },
];

const basics: Detail[] = [
  { title: "What is a token?", text: "A token is a small piece of text, roughly three-quarters of a word. Every time an AI model reads something (your question, a customer's message, a document) and writes something back, both the reading and the writing are counted in tokens." },
  { title: "One shared monthly allowance", text: "Your plan has a single AI token allowance per workspace per month. Every AI feature draws from that same counter, so you always see one number, not a separate meter for each feature." },
  { title: "Resets every month", text: "The monthly allowance starts again at zero with your billing month. Unused plan tokens do not carry over." },
  { title: "Each workspace has its own", text: "If you run several workspaces or branches, each one gets the full allowance of your plan on its own. They are never pooled together." },
  { title: "Top-up tokens come second", text: "Your monthly allowance is always spent first. Purchased top-up tokens are used only after it runs out, and they never expire." },
  { title: "You can see it", text: "Settings shows how many tokens the workspace has used against its plan, and the Support Agent page shows its own meter and budget." },
];

const whatsapp: Detail[] = [
  { title: "WhatsApp auto-replies", text: "When a customer messages your WhatsApp number and the AI writes the reply (in automatic mode, or as a draft in approval mode), the customer's message, the conversation history and the reply are counted. Bill and receipt photos a customer sends are read with AI too." },
  { title: "Sales Agent", text: "Each turn of a Sales Agent chat, on WhatsApp, on your website widget or by email, uses tokens, including the turns where it looks up prices, stock or books something for the customer." },
  { title: "Support Agent", text: "Answering from your knowledge base uses tokens for the customer's question, the article excerpts it reads and the answer. Turning your articles into searchable form (embedding) also uses tokens, once per article you save. You can give each Support Agent its own monthly budget on top of the plan allowance." },
  { title: "Marketing Agent", text: "Reading your marketing plan, writing posts, captions and broadcast copy, and checking whether a customer's reply shows buying interest all use tokens. Generated images and videos use a flat, larger token charge each (about 5,000 tokens per image and 25,000 per video)." },
];

const team: Detail[] = [
  { title: "Business AI and Command Center", text: "Asking the assistant questions about your business, or telling it to do things for you, uses tokens for every message and every lookup it makes." },
  { title: "Chat with your documents", text: "Asking questions about uploaded files uses tokens for the question, the parts of the files it reads and the answer." },
  { title: "Reading bills, invoices and receipts", text: "When AI reads an uploaded invoice, receipt or bill image and pulls out contacts, line items and amounts, it uses tokens. The same goes for turning a document into service records or importing a file." },
  { title: "Writing help", text: "Suggested WhatsApp templates, reworded or summarised text and other writing assistance inside the app use tokens each time you use them." },
  { title: "Building automations with AI", text: "Describing an automation or workflow in plain words and letting AI draft it uses tokens. Rules you build by hand in the visual builder do not." },
  { title: "AI steps inside automations", text: "A workflow step that asks AI to write a reply, and conditions that ask AI to understand what a customer meant (for example a yes or no to a reminder, or a table booking request), use tokens each time they run." },
  { title: "Clinical summaries (hospital mode)", text: "If a hospital workspace has deliberately switched on AI summaries, each summary uses tokens. This is off by default." },
];

const free: Detail[] = [
  { title: "Using the CRM, ERP and finance modules", text: "Contacts, deals, invoices, payments, inventory, payroll, reports and every screen you open and edit by hand never use AI tokens." },
  { title: "Sending and receiving messages", text: "Sending a WhatsApp or email message yourself, or by a plain automation, costs no tokens. WhatsApp messages have their own separate monthly allowance in your plan." },
  { title: "Rules you build yourself", text: "Automations, reminders, campaigns and templates that you set up by hand run without tokens, apart from any AI step you deliberately add." },
  { title: "Voice-to-text and file storage", text: "Storing documents, and turning a voice note into text, are not counted in tokens. Storage has its own plan limit." },
  { title: "Invoices, receipts, QR ordering, bookings", text: "Creating and sending invoices, receipts, table orders, bookings and portals is ordinary software, not AI, so it never touches the token meter." },
];

const limits: Detail[] = [
  { title: "Before the limit", text: "Everything works as normal and every AI call is added to the monthly counter." },
  { title: "When the allowance is used up", text: "If you have top-up tokens, AI carries on and draws them down automatically, only for the part past your monthly allowance. If you have none, AI features pause and the app asks you to upgrade or top up. The rest of NEXTOSA keeps working." },
  { title: "Customers are never left hanging", text: "If a live customer chat reaches a limit, the Support Agent hands the chat to your team instead of showing the customer an error." },
  { title: "Big jobs are checked first", text: "Before saving a long knowledge-base article, NEXTOSA checks it will fit in what you have left, so one large article cannot push you far past your limit." },
  { title: "A budget per Support Agent", text: "Each Support Agent can have a monthly token budget of its own (at least 10,000), so one busy chat channel cannot use your whole plan." },
];

const faqs: Faq[] = [
  { question: "How many tokens will I use?", answer: "It depends on how much AI you switch on. A few short customer replies use very little. Long conversations, large documents and heavy automation use more. Start with the trial allowance, watch the meter in Settings and choose a plan that suits your usage." },
  { question: "Do tokens apply to my team members separately?", answer: "No. The allowance belongs to the workspace. Members do not get separate limits, though the Admin can see how much each person has used." },
  { question: "Do the monthly tokens carry over?", answer: "No, the plan allowance resets every month. Top-up tokens you buy never expire." },
  { question: "Are top-ups a subscription?", answer: "No. Top-ups are one-time packs: 1M for ₹499, 5M for ₹1,999 and 15M for ₹4,499." },
  { question: "Are WhatsApp messages counted as tokens?", answer: "No. WhatsApp messages have their own monthly allowance in each plan. Only the AI's reading and writing counts as tokens." },
  { question: "Which AI features are optional?", answer: "All of them. Auto-replies, agents, AI drafting and AI steps are switched on by you. A workspace that never switches AI on uses no tokens." },
];

export default function AiTokensPage() {
  return (
    <>
      <section className="relative overflow-hidden theme-light py-24">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <Container className="relative text-center">
          <Badge>AI tokens</Badge>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Know exactly where your AI tokens go</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Every paid plan includes a monthly AI token allowance. Here is what uses it, what never does, and what happens when you need more. For messages, seats and storage see{" "}
            <Link href="/plan-limits" className="font-medium text-accent-300 hover:underline">plan limits</Link>, and the plans are in the{" "}
            <Link href="/#pricing" className="font-medium text-accent-300 hover:underline">pricing section</Link>.
          </p>
        </Container>
      </section>

      <DetailGrid eyebrow="The basics" title="How AI tokens work" items={basics} tone="white" />

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">Plans</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900">What each plan includes every month</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((p) => (
              <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
                <p className="text-sm font-semibold text-slate-500">{p.name}</p>
                <p className="mt-2 text-3xl font-extrabold text-navy-900">{p.tokens}</p>
                <p className="text-xs text-slate-500">AI tokens / month</p>
                <p className="mt-3 text-sm font-medium text-accent-600">{p.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="text-center text-lg font-semibold text-navy-900">Need more? One-time top-ups</h3>
            <p className="mx-auto mt-2 max-w-xl text-center text-sm text-slate-600">Packs never expire and are used automatically after your monthly allowance runs out.</p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {topUps.map((pack) => (
                <div key={pack.tokens} className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
                  <p className="text-2xl font-bold text-navy-900">{pack.tokens}</p>
                  <p className="text-xs text-slate-500">AI tokens</p>
                  <p className="mt-2 text-xl font-semibold text-accent-600">{pack.price}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <DetailGrid eyebrow="Customer-facing AI" title="Where tokens are used when customers talk to you" description="Every message the AI reads or writes for your customers counts." items={whatsapp} tone="white" />
      <DetailGrid eyebrow="Inside your team" title="Where tokens are used when your team works" items={team} />
      <DetailGrid eyebrow="No tokens" title="What never uses tokens" description="Most of NEXTOSA is ordinary software and is not metered." items={free} tone="white" />
      <DetailGrid eyebrow="Limits" title="What happens as you approach the limit" items={limits} />
      <FaqList faqs={faqs} tone="white" />
      <CTA />
    </>
  );
}
