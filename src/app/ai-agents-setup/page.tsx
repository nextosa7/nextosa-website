import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import GuideHero from "@/components/GuideHero";
import { DetailGrid, FaqList } from "@/components/DepthBlocks";
import CTA from "@/components/home/CTA";
import type { Detail, Faq } from "@/lib/depth";

export const metadata: Metadata = buildMetadata({
  title: "AI Agents Setup: Sales, Support and Marketing",
  description:
    "Which NEXTOSA AI agent answers which channel: Sales and Support agents on WhatsApp numbers, the website chat and your Gmail inbox, how routing and conflicts work, and how hand-over to a person happens.",
  path: "/ai-agents-setup",
});

const agents: Detail[] = [
  { title: "Sales Agent", text: "Answers prospects and customers: looks up real prices and stock, creates deals and bookings, and can send payment links. You can create several named agents, each with its own instructions and its own set of allowed actions." },
  { title: "Support Agent", text: "Answers from a knowledge base you write and publish. If it cannot help, it hands the chat to a person. You can create several named agents, up to 20, with their own persona. The knowledge base, hand-over rules and token budget are shared." },
  { title: "Marketing Agent", text: "Turns a weekly or monthly plan you write into content for Instagram and WhatsApp broadcasts. It starts in review mode: nothing goes out until you approve it, unless you switch autopilot on." },
];

const routing: Detail[] = [
  { title: "WhatsApp number", text: "Each number is answered by exactly one agent, Sales or Support. In Sales you tick the numbers an agent answers. In Support you choose an agent per number." },
  { title: "Gmail inbox", text: "Your connected Gmail inbox can be answered by one Support Agent or one Sales Agent, never both. You choose it in the agent's page under Email inbox, and switch on Answer inbound emails with AI in the Gmail panel." },
  { title: "Website chat widget", text: "The widget is answered by the Support agent you choose for it. If none is chosen, the Sales assistant answers as before." },
  { title: "Mix and match", text: "Because each channel is separate, you can have Sales on your WhatsApp number and Support on your Gmail inbox at the same time." },
  { title: "Conflicts are refused, not guessed", text: "Giving a number to a Support agent while a Sales agent holds it, or the reverse, is refused with a clear message. The same applies to the email inbox. A customer never gets two voices." },
  { title: "Disabled agents step aside", text: "A disabled agent is treated as not assigned, and an agent that still serves a number or the widget cannot be deleted until you remove it there." },
];

const handover: Detail[] = [
  { title: "Built-in triggers", text: "The Support Agent hands over when the customer asks for a person, mentions a refund or chargeback, raises something legal or fraud-related, or uses a word you added yourself." },
  { title: "No dead ends", text: "If the AI provider is down, a limit is reached or an answer comes back empty, a live chat becomes a hand-over to your team, never an error shown to the customer." },
  { title: "A person takes over", text: "Hand-overs appear in the Handoffs inbox. When someone claims the chat, the AI stays silent. On WhatsApp the person's reply goes out inside the 24-hour window, and nothing is stored if it did not reach the customer." },
  { title: "Hand back to the AI", text: "A person can return the chat to the AI. Earlier, already-handled issues are not raised again." },
  { title: "Optional tickets", text: "If you switch on the Create Support Ticket action for an agent, a hand-over also opens a ticket." },
];

const control: Detail[] = [
  { title: "Allowed actions per agent", text: "Each agent has its own Action Toolbox: create a deal, update a deal, look up prices or catalog, and more for your business type. Support agents start with none and you switch on only what you want. Sales agents start with all of them." },
  { title: "Test chat before going live", text: "Each agent has a Test chat that runs exactly as production does, against your real knowledge base. Support tests create no ticket or hand-over." },
  { title: "Token budget", text: "An optional monthly token cap for the Support Agent keeps cost predictable. When it is reached, the customer is handed to a person." },
  { title: "Answers only from what you give it", text: "The Support Agent answers from your published articles. Your knowledge-base text and customer messages are treated as data, and your instructions sit below built-in safety rules." },
  { title: "Number restrictions apply", text: "A staff member limited to certain WhatsApp numbers sees only the chats and hand-overs on those numbers." },
];

const limits: Detail[] = [
  { title: "Not in hospital workspaces", text: "Customer chat is never sent to an AI provider in hospital mode, so the Sales, Support and Marketing agents are refused there." },
  { title: "Email is text only", text: "On email the agents read text, not attachments, and reply as plain text in the same thread, with a limit of 3 replies per conversation per hour." },
  { title: "Support on website: replies by polling", text: "A person's reply reaches the website chat when the widget next refreshes. There is no instant push to the widget." },
  { title: "No live test with every provider", text: "Check your first conversations in Test chat and in the Handoffs inbox before relying on an agent unattended." },
];

const faqs: Faq[] = [
  { question: "Can I have Sales on WhatsApp and Support on Gmail?", answer: "Yes. WhatsApp and email are separate channels, and the one-agent rule applies inside each channel." },
  { question: "Can one number have both a Sales and a Support agent?", answer: "No. A number has exactly one agent, so the customer always hears one voice." },
  { question: "What if I do nothing?", answer: "Agents answer only where you assign them. Unassigned channels behave as before." },
  { question: "Do I need a knowledge base?", answer: "For the Support Agent, yes. Without published articles it hands the chat to a person straight away." },
  { question: "Do agents use AI tokens?", answer: "Yes. Every AI turn uses your monthly tokens. See the AI tokens page." },
];

export default function AiAgentsSetupPage() {
  return (
    <>
      <GuideHero badge="AI agents" title="Put the right agent on the right channel">
        Sales, Support and Marketing agents, where each can answer, how conflicts are handled and how a person takes over. Related:{" "}
        <Link href="/platform/ai-agents" className="font-medium text-accent-300 hover:underline">AI agents overview</Link> and{" "}
        <Link href="/email-and-gmail" className="font-medium text-accent-300 hover:underline">Email and Gmail</Link>.
      </GuideHero>
      <DetailGrid eyebrow="The three agents" title="What each one does" items={agents} tone="white" />
      <DetailGrid eyebrow="Routing" title="Which agent answers which channel" items={routing} />
      <DetailGrid eyebrow="Hand-over" title="When a person steps in" items={handover} tone="white" />
      <DetailGrid eyebrow="Control" title="Keep every agent on a leash" items={control} />
      <DetailGrid eyebrow="Good to know" title="Limits to be aware of" items={limits} tone="white" />
      <FaqList faqs={faqs} />
      <CTA />
    </>
  );
}
