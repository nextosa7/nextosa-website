import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import GuideHero from "@/components/GuideHero";
import { DetailGrid, FaqList } from "@/components/DepthBlocks";
import CTA from "@/components/home/CTA";
import type { Detail, Faq } from "@/lib/depth";

export const metadata: Metadata = buildMetadata({
  title: "WhatsApp Campaigns and Broadcasts",
  description:
    "Send approved WhatsApp templates to a chosen audience: all clients, a tag, recent service dates or clients who have gone quiet. Scheduling, opt-outs, live progress, sending number and plan limits explained.",
  path: "/campaigns",
});

const how: Detail[] = [
  { title: "Pick an approved template", text: "A campaign sends one approved WhatsApp template. See how templates are approved in the templates guide." },
  { title: "Choose the audience", text: "All clients, clients with a tag, clients who had a service in a date range, clients who have gone quiet since a date, or a custom list." },
  { title: "Draft, schedule or send", text: "A campaign starts as a draft you can review. Send it now or schedule it. States: Draft, Scheduled, Running, Completed, Failed, Cancelled." },
  { title: "Watch it live", text: "Delivery counts update on the page while the campaign runs, without refreshing." },
  { title: "Pick the sending number", text: "Choose which WhatsApp number it goes from, or let it use your Primary number." },
];

const audiences: Detail[] = [
  { title: "All", text: "Every client in the workspace." },
  { title: "Tag", text: "Clients carrying a tag you choose, for example vip or newsletter." },
  { title: "Service date", text: "Clients who had a service between two dates." },
  { title: "Inactive", text: "Clients with no service since a date you choose, for win-back campaigns." },
  { title: "Custom", text: "A list you build yourself." },
  { title: "Always safe", text: "Clients who have opted out of marketing are excluded from every audience type, every time." },
];

const reliability: Detail[] = [
  { title: "One job per recipient", text: "Each recipient is its own job in a durable queue. If a server restarts mid-campaign, at most the one message in flight is affected and the rest continue." },
  { title: "Paced sending", text: "Messages are sent at a controlled rate that respects Meta's limits, instead of all at once." },
  { title: "Checked before it starts", text: "The campaign is checked against your monthly WhatsApp template allowance up front. It either starts cleanly or is refused, so it never stops halfway for the wrong reason." },
  { title: "Counts as template messages", text: "Each message sent counts toward your plan's WhatsApp template messages. See plan limits." },
  { title: "Number restrictions apply", text: "A team member limited to certain numbers can only see and send the campaigns on those numbers." },
];

const related: Detail[] = [
  { title: "Marketing Agent", text: "The Marketing Agent can only create a draft broadcast for a person to review, schedule and send. It never sends one on its own." },
  { title: "Replies become leads", text: "When a client who got a Marketing Agent broadcast replies with buying intent, NEXTOSA can tag them, open a deal, add a follow-up task and let the Sales Agent take over that chat." },
  { title: "Email broadcasts", text: "For email, build a schedule in Automations that emails a tagged group. Each email carries an unsubscribe link and there is a daily cap of 300 emails per workspace." },
];

const faqs: Faq[] = [
  { question: "Can I message people who have not opted in?", answer: "Marketing messages on WhatsApp must follow Meta's rules and your local law. NEXTOSA excludes anyone marked as opted out, but obtaining consent is your responsibility." },
  { question: "Why must I use a template?", answer: "WhatsApp only allows a business to start a conversation with a template that Meta has approved." },
  { question: "Can I cancel a running campaign?", answer: "A campaign has a Cancelled state. Check the campaign page for what it does to messages still waiting." },
  { question: "Does a campaign use AI tokens?", answer: "No. Sending a template costs no tokens. It uses your WhatsApp template allowance." },
];

export default function CampaignsPage() {
  return (
    <>
      <GuideHero badge="Campaigns" title="Broadcast to the right people, safely">
        Send an approved template to a chosen audience, with opt-outs respected and live progress. Start with{" "}
        <Link href="/whatsapp-templates" className="font-medium text-accent-300 hover:underline">templates</Link>.
      </GuideHero>
      <DetailGrid eyebrow="How it works" title="From template to delivered" items={how} tone="white" />
      <DetailGrid eyebrow="Audiences" title="Who a campaign can reach" items={audiences} />
      <DetailGrid eyebrow="Reliability" title="Built to finish what it starts" items={reliability} tone="white" />
      <DetailGrid eyebrow="Related" title="Around campaigns" items={related} />
      <FaqList faqs={faqs} tone="white" />
      <CTA />
    </>
  );
}
