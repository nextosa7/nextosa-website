import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import { DetailGrid, FaqList, SetupSteps } from "@/components/DepthBlocks";
import CTA from "@/components/home/CTA";
import type { Detail, Faq } from "@/lib/depth";

export const metadata: Metadata = buildMetadata({
  title: "Gmail and Email: Use NEXTOSA Without WhatsApp",
  description:
    "Connect Gmail and send invoices, receipts and reminders by email. Choose WhatsApp, Gmail or both, pick the sending number, and get an automatic Gmail fallback when WhatsApp does not deliver.",
  path: "/email-and-gmail",
});

const whyGmail: Detail[] = [
  { title: "Not tied to WhatsApp", text: "NEXTOSA does not depend on WhatsApp alone. If you do not want to connect WhatsApp, connect Gmail and your invoices, receipts and reminders still reach clients." },
  { title: "Your own mailbox", text: "Emails go out through your own Gmail account, so replies come back to you and clients see a sender they know." },
  { title: "PDF attached", text: "Invoices and receipts are emailed with the PDF attached, in a clean HTML and plain-text message." },
  { title: "Works with or without WhatsApp", text: "Email is its own channel. You can use it alone, or alongside WhatsApp." },
];

const connectSteps: Detail[] = [
  { title: "Open App Integrations", text: "Go to Settings, then App Integrations, and choose Gmail." },
  { title: "Sign in with Google", text: "Press Connect and approve access in Google. NEXTOSA asks only for permission to send mail and to read your inbox (needed for inbound replies). It does not ask to modify or delete your mail." },
  { title: "You are connected", text: "The Gmail panel shows the connection. If you connected earlier and want inbound AI replies, it will offer a one-click Reconnect to grant the extra read permission." },
  { title: "Switch on what you want", text: "Go to Settings, then Automation and turn on email for invoices and receipts, or leave WhatsApp on and let Gmail act as the safety net." },
];

const whatSends: Detail[] = [
  { title: "Invoices and receipts", text: "Every invoice and payment receipt can be emailed automatically with the PDF. You can also press Send via Email, or Resend, on any invoice, and use the mail icon on a single receipt." },
  { title: "Overdue invoice reminders", text: "Reminders for unpaid invoices go out by email, and the late-fee revised invoice too." },
  { title: "School fee reminders", text: "Fee reminders and invoices go to the guardian's email. A student's own email is never used." },
  { title: "Salon, CA and Real Estate documents", text: "Salon invoices, CA tax invoices and receipts, and Real Estate demand letters, receipts and overdue reminders can all go by email." },
  { title: "Gym plans", text: "Workout and diet plans can be emailed with the file attached." },
  { title: "Automations you build", text: "In the Automations module the Send Email step lets you design email broadcasts and drips, with an unsubscribe link in every email." },
];

const chooseItems: Detail[] = [
  { title: "Only Gmail", text: "Turn the email auto-send toggle on and leave the WhatsApp auto-send toggles off. Clients with an email address receive the document by Gmail." },
  { title: "Only WhatsApp", text: "Leave the email toggle off. WhatsApp sends as usual." },
  { title: "Both", text: "Turn both on. The client gets the document on both channels, and NEXTOSA makes sure the same email is never sent twice." },
  { title: "More than one WhatsApp number", text: "Choose which number each kind of message leaves from. Billing messages can use your Billing number, appointment reminders another, school alerts another." },
  { title: "Per message in your automations", text: "In the visual builder, each WhatsApp-sending step has a Send from option: the usual routing, or your Billing number." },
  { title: "Nothing silently swapped", text: "If the number you chose cannot send that template, the WhatsApp send fails with a clear reason instead of quietly using another number. That is what lets the email fallback take over." },
];

const fallbackItems: Detail[] = [
  { title: "WhatsApp did not deliver, Gmail steps in", text: "If WhatsApp auto-send is on but the message did not go (no WhatsApp connection, no approved template, no phone number, over your quota, a Meta error), the same document is sent by Gmail automatically." },
  { title: "It is one direction", text: "The fallback goes from WhatsApp to Gmail. If a Gmail send fails, NEXTOSA keeps the original outcome and does not retry on WhatsApp." },
  { title: "Only when you asked for WhatsApp", text: "If WhatsApp auto-send is switched off, that is your choice and not a failure, so no fallback email is sent." },
  { title: "Needs Gmail and a client email", text: "The fallback needs Gmail connected and a valid email on the client. Without one, nothing is sent and nothing breaks." },
  { title: "Never breaks the original action", text: "A failed fallback never throws an error at the person who created the invoice. It is logged and the invoice stays as it was." },
  { title: "No duplicates", text: "A claim stamp on each invoice and receipt means a retry or a second trigger cannot email the same document twice." },
];

const notCovered: Detail[] = [
  { title: "Appointment and lead reminders", text: "These are WhatsApp reminders today and do not fall back to email." },
  { title: "Manual WhatsApp buttons", text: "Pressing Send via WhatsApp sends on WhatsApp only. Use Send via Email for the email version." },
  { title: "Email attachments inbound", text: "AI replies to incoming email read text only, not attachments." },
];

const faqs: Faq[] = [
  { question: "Can I use NEXTOSA with no WhatsApp at all?", answer: "Yes. Connect Gmail and use email for invoices, receipts, reminders and email automations. WhatsApp-only features, such as WhatsApp conversations, need WhatsApp." },
  { question: "What if a client has no email address?", answer: "That client is skipped for email and nothing fails. Add an email to the client to include them." },
  { question: "Will clients get duplicates if both channels are on?", answer: "They get one message per channel, by your choice. A single channel is never sent twice for the same document." },
  { question: "Is Gmail the only email option?", answer: "Gmail is the connected mailbox for sending. Platform notifications use NEXTOSA's own sender." },
  { question: "Can the AI answer emails that customers send me?", answer: "Yes, optionally. Switch on Answer inbound emails with AI in the Gmail panel. It never answers newsletters, automatic mail or no-reply senders, and replies stay in the same thread." },
  { question: "Is my mailbox safe?", answer: "NEXTOSA asks only to send and read mail, not to modify or delete it, and you can disconnect at any time, which also switches inbound replies off." },
];

export default function EmailAndGmailPage() {
  return (
    <>
      <section className="relative overflow-hidden theme-light py-24">
        <Container className="relative text-center">
          <Badge>Email and Gmail</Badge>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            No WhatsApp? Connect Gmail. Or use both and never miss a client
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            NEXTOSA does not rely on WhatsApp alone. Send invoices, receipts and reminders by Gmail, choose the channel and the number, and let Gmail take over automatically when WhatsApp cannot deliver. See also{" "}
            <Link href="/automations" className="font-medium text-accent-300 hover:underline">how automations work</Link>.
          </p>
        </Container>
      </section>
      <DetailGrid eyebrow="Why Gmail" title="A full channel of its own" items={whyGmail} tone="white" />
      <SetupSteps title="How to connect Gmail" items={connectSteps} />
      <DetailGrid eyebrow="What it sends" title="Everything financial, and more, by Gmail" description="The same documents your automations send on WhatsApp can go by email." items={whatSends} tone="white" />
      <DetailGrid eyebrow="Your choice" title="Pick the channel and the number" items={chooseItems} />
      <DetailGrid eyebrow="Automatic fallback" title="When WhatsApp fails, Gmail delivers" description="Connect both and an undelivered financial message is not lost." items={fallbackItems} tone="white" />
      <DetailGrid eyebrow="Good to know" title="What does not fall back to email" items={notCovered} />
      <FaqList faqs={faqs} tone="white" />
      <CTA />
    </>
  );
}
