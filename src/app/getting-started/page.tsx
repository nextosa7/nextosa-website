import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import GuideHero from "@/components/GuideHero";
import { DetailGrid, FaqList, SetupSteps } from "@/components/DepthBlocks";
import CTA from "@/components/home/CTA";
import type { Detail, Faq } from "@/lib/depth";

export const metadata: Metadata = buildMetadata({
  title: "Getting Started with NEXTOSA",
  description:
    "Your first day on NEXTOSA: sign up, choose your business type, start the 3-day free trial, connect WhatsApp or Gmail, add your clients, switch on automations and invite your team.",
  path: "/getting-started",
});

const steps: Detail[] = [
  { title: "Sign up", text: "Create your account with your email or with Google." },
  { title: "Tell us about your business", text: "Choose your business type. NEXTOSA sets up the right screens, terms and permissions for it." },
  { title: "Start your free trial", text: "Agree to the trial terms and begin. No payment is taken to start." },
  { title: "Connect a channel", text: "Connect WhatsApp, Gmail or both. You do not need WhatsApp to use NEXTOSA." },
  { title: "Add your clients", text: "Add your clients one by one, or import a CSV or Excel (.xlsx) file: you map the columns, review the rows, and any row with a problem is listed with the reason while the good rows are imported. A demo-data option is available if you want to explore first." },
  { title: "Switch on automations", text: "In Settings, then Automation, turn on invoice and receipt sending and the reminders you want." },
  { title: "Invite your team", text: "Invite people and give each one only the permission switches their job needs." },
];

const trial: Detail[] = [
  { title: "3 days, free", text: "The trial lasts 3 days from the moment you agree to it." },
  { title: "What the trial includes", text: "Up to 5 team members, 1 WhatsApp number, 1 site connection, 50 WhatsApp template messages, 100,000 AI tokens, 20 documents and 200 MB of storage." },
  { title: "Choose a plan any time", text: "Pick Starter, Growth or Enterprise from billing and your workspace continues with the higher limits." },
  { title: "If you do not pay", text: "After 3 days with no payment, access is locked. If it stays locked for 30 days, saved data is permanently deleted. Choose a plan before then to keep everything." },
];

const channels: Detail[] = [
  { title: "WhatsApp", text: "Connect your WhatsApp Business number with a label, then create and approve templates for automatic messages." },
  { title: "Gmail", text: "Connect Gmail for invoices, receipts, reminders and email automations. It also works as an automatic fallback when WhatsApp cannot deliver." },
  { title: "Both", text: "Use both and choose per automation which channel and which number to send from." },
];

const first: Detail[] = [
  { title: "Make your first invoice", text: "Create an invoice for a client and watch it go out automatically if auto-send is on." },
  { title: "Record a payment", text: "Record a payment and the receipt follows." },
  { title: "Try the AI", text: "Ask Business AI a question about your own data, or set up a Sales or Support agent and use Test chat." },
  { title: "Build one workflow", text: "Open Automations and start from a template, or build your own in the visual builder." },
  { title: "Read the manual for your industry", text: "Each business type has a complete setup guide in Help, written for its own screens." },
];

const faqs: Faq[] = [
  { question: "Do I need a credit card to start?", answer: "No. Starting the trial does not take payment." },
  { question: "Can I change my business type later?", answer: "An Admin can change it from Settings. It decides the screens, terms and permission switches, so change it early, before you enter a lot of data." },
  { question: "Is there demo data?", answer: "Yes, as an option you choose. It is not loaded unless you tick it, and it can be cleared." },
  { question: "Will I lose data when the trial ends?", answer: "Not immediately. Access locks after 3 days without payment, and data is deleted only after 30 days of staying locked." },
  { question: "I do not use WhatsApp. Can I still use it?", answer: "Yes. Connect Gmail and send invoices, receipts and reminders by email." },
];

export default function GettingStartedPage() {
  return (
    <>
      <GuideHero badge="Getting started" title="Your first day on NEXTOSA">
        From signup to your first automatic invoice, in order. See also{" "}
        <Link href="/whatsapp-connect" className="font-medium text-accent-300 hover:underline">connect WhatsApp</Link>,{" "}
        <Link href="/email-and-gmail" className="font-medium text-accent-300 hover:underline">connect Gmail</Link> and{" "}
        <Link href="/plan-limits" className="font-medium text-accent-300 hover:underline">plan limits</Link>.
      </GuideHero>
      <SetupSteps title="Seven steps" items={steps} />
      <DetailGrid eyebrow="The trial" title="What the free trial gives you" items={trial} tone="white" />
      <DetailGrid eyebrow="Channels" title="Connect how you talk to clients" items={channels} />
      <DetailGrid eyebrow="Then" title="Good things to try next" items={first} tone="white" />
      <FaqList faqs={faqs} />
      <CTA />
    </>
  );
}
