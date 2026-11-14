import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import GuideHero from "@/components/GuideHero";
import { DetailGrid, FaqList, SetupSteps } from "@/components/DepthBlocks";
import CTA from "@/components/home/CTA";
import type { Detail, Faq } from "@/lib/depth";

export const metadata: Metadata = buildMetadata({
  title: "WhatsApp Templates: Approval, Variables and Auto-Send",
  description:
    "How WhatsApp message templates work in NEXTOSA: Meta review (Draft, Pending, Approved, Rejected), categories, headers and buttons, the variables each automation expects, PDF templates for invoices, and why templates count toward your plan.",
  path: "/whatsapp-templates",
});

const lifecycle: Detail[] = [
  { title: "Why templates exist", text: "WhatsApp only lets a business start a conversation, or message a customer after 24 hours of silence, with a template that Meta has approved. Invoices, receipts and reminders are all sent this way." },
  { title: "Draft", text: "You write the template in NEXTOSA. Nothing has been sent to Meta yet." },
  { title: "Pending", text: "You submit it from NEXTOSA and Meta reviews it. NEXTOSA checks the status for you." },
  { title: "Approved", text: "The template can now be used for sends, campaigns and automations." },
  { title: "Rejected", text: "Meta declined it. Edit the wording and submit again." },
  { title: "Different from an auto-reply template", text: "An auto-reply template is a local snippet the AI uses to match intents. It is never submitted to Meta and is a separate thing from a WhatsApp template." },
];

const build: Detail[] = [
  { title: "Category", text: "Marketing, Utility or Authentication, the same categories Meta uses. Invoices and reminders are normally Utility. Meta decides the final category." },
  { title: "Language code", text: "For example en_US. It must match the language of the text." },
  { title: "Header", text: "None, text, document, image or video. A document header is how an invoice PDF is attached. Media headers need the optional Meta App ID on your WhatsApp connection." },
  { title: "Body and variables", text: "The message text, with numbered variables {{1}}, {{2}} that NEXTOSA fills in for each customer, such as the first name or an amount." },
  { title: "Footer and buttons", text: "An optional footer, and buttons of three kinds: a link, a phone number or a quick reply." },
  { title: "Create with one click", text: "Settings offers prefilled templates for the common jobs, which you can submit to Meta as they are or adjust first." },
  { title: "Import", text: "If you already have templates in other profiles you manage, import them instead of recreating them." },
];

const variables: Detail[] = [
  { title: "Pre-service (appointment) reminder", text: "2 variables." },
  { title: "Overdue invoice reminder", text: "3 variables, with an optional PDF of the invoice in the header." },
  { title: "Lead follow-up", text: "2 variables (for schools, the admission inquiry follow-up)." },
  { title: "DSC renewal (CA firms)", text: "2 variables." },
  { title: "Overdue demand letter (Real Estate)", text: "3 variables." },
  { title: "Invoice, receipt, proposal, demand letter and plan sends", text: "These are PDF-first: the template needs a document header and at most one variable, the client's first name. Pick it once in Settings and every automatic send uses it." },
  { title: "Wrong shape is caught early", text: "If the template does not match what the automation expects, Settings shows an error as you pick it, instead of failing silently later." },
];

const sending: Detail[] = [
  { title: "Same WhatsApp account", text: "A template belongs to a WhatsApp Business Account. It can only be sent from numbers in that same account." },
  { title: "Chosen number, no silent swap", text: "If the number you chose cannot send a template, that send fails with a clear reason and the Gmail fallback can take over, rather than quietly using another number." },
  { title: "Counts toward your plan", text: "Each template message sent counts toward your monthly WhatsApp allowance. Plain replies inside the 24-hour window do not. See plan limits." },
  { title: "Checked before sending", text: "A bulk or campaign send is checked against your allowance once, up front, so it never stops halfway." },
  { title: "Authentication templates", text: "NEXTOSA cannot create authentication templates. If a feature, such as restaurant QR ordering, needs one, you pick an existing approved one." },
];

const steps: Detail[] = [
  { title: "Connect your number", text: "A template needs a connected WhatsApp number and WhatsApp Business Account." },
  { title: "Create or import", text: "Open Templates, create one (or use a prefilled one from Settings), then submit it." },
  { title: "Wait for approval", text: "Status moves from Pending to Approved or Rejected." },
  { title: "Pick it in Settings", text: "In Settings, then Automation, choose the approved template for each reminder or auto-send." },
];

const faqs: Faq[] = [
  { question: "How long does approval take?", answer: "That is up to Meta. NEXTOSA shows the status as soon as Meta reports it." },
  { question: "Why was my template rejected?", answer: "Meta decides. Common causes are unclear wording or the wrong category. Edit it and submit again." },
  { question: "Can I use a template without WhatsApp?", answer: "No. Without WhatsApp, use Gmail for invoices, receipts and reminders." },
  { question: "Why do invoice templates need a PDF header?", answer: "So the invoice goes out as an attached PDF with one short line of text." },
];

export default function WhatsAppTemplatesPage() {
  return (
    <>
      <GuideHero badge="WhatsApp templates" title="Templates: the key to automatic WhatsApp messages">
        How approval works, how to build a template, which variables each automation expects, and what counts toward your plan. Connect first:{" "}
        <Link href="/whatsapp-connect" className="font-medium text-accent-300 hover:underline">Connect WhatsApp</Link>.
      </GuideHero>
      <DetailGrid eyebrow="Basics" title="Why templates and how approval works" items={lifecycle} tone="white" />
      <DetailGrid eyebrow="Building one" title="What goes into a template" items={build} />
      <DetailGrid eyebrow="Variables" title="What each automation expects" items={variables} tone="white" />
      <DetailGrid eyebrow="Sending" title="From which number, and what it costs" items={sending} />
      <SetupSteps title="From zero to a working automation" items={steps} />
      <FaqList faqs={faqs} tone="white" />
      <CTA />
    </>
  );
}
