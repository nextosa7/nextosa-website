import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import GuideHero from "@/components/GuideHero";
import { DetailGrid, FaqList, SetupSteps } from "@/components/DepthBlocks";
import CTA from "@/components/home/CTA";
import type { Detail, Faq } from "@/lib/depth";

export const metadata: Metadata = buildMetadata({
  title: "Payments with Your Own Razorpay Account",
  description:
    "Connect your own Razorpay account to NEXTOSA: payment links from the AI Sales Agent, invoice QR codes, automatic payment recording through a webhook, QR table-ordering payments and refunds with credit notes.",
  path: "/payments",
});

const steps: Detail[] = [
  { title: "Get your keys from Razorpay", text: "In your Razorpay dashboard open Settings, then API Keys, and copy the Key ID and Key Secret." },
  { title: "Connect in NEXTOSA", text: "Paste them into the Razorpay card in Settings. The secret is stored encrypted and never shown again." },
  { title: "Add the webhook", text: "NEXTOSA shows a Webhook URL and can generate a Webhook Secret. In Razorpay open Settings, then Webhooks, add a new webhook and paste both." },
  { title: "Choose the events", text: "Under Active Events tick payment.captured and order.paid, then save." },
  { title: "Turn on what you want", text: "Switch on the invoice QR code, and let your Sales Agent send payment links." },
];

const what: Detail[] = [
  { title: "Your account, never a shared key", text: "Payments go to your own Razorpay account. NEXTOSA does not hold your money and does not use a shared platform key for your customers." },
  { title: "Payment links from the Sales Agent", text: "In a conversation the AI Sales Agent can generate a payment link for what the customer agreed to buy." },
  { title: "QR code on invoices", text: "A toggle puts a Razorpay QR code on your invoices so clients can pay from the PDF." },
  { title: "Paid invoices update themselves", text: "When Razorpay reports a captured payment through the webhook, the matching invoice is marked Paid and the payment is logged, with no manual step." },
  { title: "Restaurant QR ordering", text: "Diners can pay online through your own Razorpay account, or pay at the counter if you have not connected one." },
  { title: "No website needed", text: "If Razorpay asks for a website while you verify your account, you can say you use NEXTOSA to generate invoices and collect payments, or share your Facebook or Instagram page." },
];

const safety: Detail[] = [
  { title: "Webhooks are verified", text: "Each workspace has its own webhook secret. A payment is trusted only when the signature matches, and it is applied to your workspace only." },
  { title: "Amounts are checked", text: "For table orders the amount and currency are compared in the smallest currency unit, and a payment settles exactly once, so a repeat notification cannot count twice." },
  { title: "Regenerating a secret", text: "If you regenerate the webhook secret, the old one stops working at once, so update it in Razorpay too or payments stop being recorded." },
  { title: "Disconnecting", text: "Disconnecting Razorpay stops payment links and invoice QR codes until you reconnect." },
  { title: "Overpayment is refused", text: "Recording more than the balance due is refused with a message telling you the maximum to enter." },
];

const refunds: Detail[] = [
  { title: "Refunds never edit the invoice", text: "A refund creates a credit note. The original invoice and its ledger entries stay as they were, and the credit note nets it to zero in reports." },
  { title: "Table orders", text: "Cancelling a paid online table order triggers an automatic Razorpay refund, and issues a credit note. Counter orders are refunded by hand." },
  { title: "Gateway first", text: "The refund is locked, sent to Razorpay, and only finalised when the gateway accepts it. A gateway failure leaves the order untouched." },
  { title: "Not built yet", text: "Partial credit notes for ordinary invoices and a manual issue-credit-note button outside the table-order and hospital-claim flows." },
];

const faqs: Faq[] = [
  { question: "Does NEXTOSA take a cut of my payments?", answer: "No. Payments go through your own Razorpay account under your own agreement with Razorpay." },
  { question: "Do I have to connect Razorpay?", answer: "No. Without it you can still create invoices and record payments by hand. Payment links and invoice QR codes need it." },
  { question: "What if the webhook is not set up?", answer: "Payments still reach your Razorpay account, but invoices are not marked Paid automatically." },
  { question: "Where do I find my keys?", answer: "In Razorpay under Settings, then API Keys." },
];

export default function PaymentsPage() {
  return (
    <>
      <GuideHero badge="Payments" title="Collect payments into your own Razorpay account">
        Payment links, invoice QR codes and automatic payment recording, set up in a few minutes. See also{" "}
        <Link href="/security" className="font-medium text-accent-300 hover:underline">security</Link>.
      </GuideHero>
      <SetupSteps title="Connect Razorpay in five steps" items={steps} />
      <DetailGrid eyebrow="What you get" title="What payments unlock" items={what} tone="white" />
      <DetailGrid eyebrow="Safety" title="Built to be trusted with money" items={safety} />
      <DetailGrid eyebrow="Refunds" title="Refunds and credit notes" items={refunds} tone="white" />
      <FaqList faqs={faqs} />
      <CTA />
    </>
  );
}
