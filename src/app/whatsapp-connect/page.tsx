import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import { DetailGrid, FaqList, SetupSteps } from "@/components/DepthBlocks";
import CTA from "@/components/home/CTA";
import type { Detail, Faq } from "@/lib/depth";

export const metadata: Metadata = buildMetadata({
  title: "Connect WhatsApp: Numbers, Labels and Settings",
  description:
    "How to connect your WhatsApp Business number to NEXTOSA, what each field means, why every number needs a label such as Sales or Support, and how multiple numbers, primary number and reply modes work.",
  path: "/whatsapp-connect",
});

const steps: Detail[] = [
  { title: "Open the WhatsApp settings", text: "Go to Settings and open WhatsApp, then press Add WhatsApp Number." },
  { title: "Give the number a label", text: "Type a short name such as Sales, Support or Billing. It is required, and it is how you and your team recognise this number everywhere in NEXTOSA." },
  { title: "Paste your credentials from Meta", text: "Enter the permanent access token, the Phone number ID and the WhatsApp Business Account ID from your Meta developer console. These come from your own Meta account." },
  { title: "Optional: Meta App ID and App Secret", text: "The App ID lets you use templates with a document, image or video header. The App Secret lets NEXTOSA check that incoming messages really come from Meta." },
  { title: "Choose a reply mode", text: "Auto sends AI replies immediately. Approval holds them in the Approval Inbox until a teammate approves." },
  { title: "Press Connect", text: "NEXTOSA checks the details with Meta. If the token or an ID is wrong, the field that failed is highlighted with a clear message." },
];

const fields: Detail[] = [
  { title: "Label (required, up to 60 characters)", text: "Your own name for the number, for example Sales, Support, Billing or Branch 2. Meta does not see it. It exists only so people can tell numbers apart inside NEXTOSA." },
  { title: "Permanent access token", text: "The key that lets NEXTOSA send and receive for your number. It is stored encrypted, never shown again and never returned by the system. Leave it blank when editing to keep the existing one." },
  { title: "Phone number ID", text: "Meta's internal ID for the number (not the phone number itself). Incoming messages are routed to your workspace by this ID, so each ID can be connected to only one workspace." },
  { title: "WhatsApp Business Account ID (WABA ID)", text: "The account that owns the number and its message templates. Templates belong to a WABA, and a template can only be sent from numbers in the same WABA." },
  { title: "Meta App ID (optional)", text: "Needed to upload media for template headers such as a PDF invoice. Without it, templates with a media header cannot be created." },
  { title: "Meta App Secret (optional)", text: "Used only to verify that incoming WhatsApp events are signed by Meta. Stored encrypted and never shown again. When it is set, anything that fails the check is rejected." },
  { title: "Reply mode", text: "Auto or Approval for the AI replies on this number. Each number has its own mode, so Sales can be Auto while Support is Approval." },
  { title: "Verified name, phone number", text: "After connecting, the card shows the verified business name and phone number that Meta returns, so you can confirm it is the right number." },
];

const whyLabel: Detail[] = [
  { title: "Tell numbers apart at a glance", text: "Every conversation, approval and campaign shows a chip with the number's label, so you never wonder which number a thread belongs to." },
  { title: "Pick the sending number", text: "Wherever you can choose where a message leaves from (a reply, a template, a campaign), the choice is shown by label." },
  { title: "Route automations by purpose", text: "In Settings you can send billing from Billing, reminders from another number and school alerts from a third, by choosing labels." },
  { title: "Give staff only some numbers", text: "An Admin can limit a team member to chosen numbers. They see only those threads, approvals, campaigns and figures." },
  { title: "Assign AI agents", text: "A number can be answered by one Sales or Support agent. You choose the number by its label." },
  { title: "Remember where a client first came from", text: "A client keeps a tag of the number they first contacted you on, such as Sales. The label is copied at that moment, so the tag still reads correctly after you rename or remove the number." },
];

const multi: Detail[] = [
  { title: "Several numbers in one workspace", text: "Connect more than one number, up to your plan's limit. Each has its own label, reply mode and optional assigned agent." },
  { title: "One primary number", text: "The first number you connect becomes Primary. You can press Make Primary on another at any time. Exactly one is primary, and it is the default when nothing else says which number to use." },
  { title: "Replies leave from the number that received", text: "When a customer writes to your Support number, the reply goes out on the Support number. A client can have a separate thread on each number." },
  { title: "System messages choose sensibly", text: "Invoices, reminders and other automatic messages use the number you chose for that trigger, otherwise the client's most recent number, otherwise the Primary." },
  { title: "Rename any time", text: "Editing the label changes how the number is displayed. Old tags on clients keep the name they were saved with." },
  { title: "Guardrails when removing a number", text: "A Primary number cannot be deleted while others exist: make another one primary first. A number answered by a Support agent must be removed from that agent first." },
];

const faqs: Faq[] = [
  { question: "Why must I enter a label?", answer: "It is how NEXTOSA, and your team, tells numbers apart. It is used on conversations, when choosing the sending number, for staff access, for automations and for client tags. If you have only one number you can simply call it Main." },
  { question: "Does the customer see the label?", answer: "No. The label is internal. Customers see your WhatsApp Business profile name and number as set in Meta." },
  { question: "Can I change the label later?", answer: "Yes, edit the connection and update it. Tags already saved on clients keep the old name so history stays readable." },
  { question: "Can two workspaces use the same number?", answer: "No. A Phone number ID can be connected to one workspace only." },
  { question: "Is my token safe?", answer: "It is stored encrypted and never shown or returned again. To change it, use Update credentials." },
  { question: "What if I do not want WhatsApp?", answer: "You do not need it. Connect Gmail and use email instead. See the Email and Gmail guide." },
];

export default function WhatsAppConnectPage() {
  return (
    <>
      <section className="relative overflow-hidden theme-light py-24">
        <Container className="relative text-center">
          <Badge>WhatsApp</Badge>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Connect your WhatsApp number, and name it
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            What every field means, why each number gets a label like Sales or Support, and how several numbers work together. No WhatsApp? Use{" "}
            <Link href="/email-and-gmail" className="font-medium text-accent-300 hover:underline">Gmail instead</Link>.
          </p>
        </Container>
      </section>
      <SetupSteps title="How to connect a number" items={steps} />
      <DetailGrid eyebrow="The form" title="What each field means" items={fields} tone="white" />
      <DetailGrid eyebrow="The label" title="Why every number needs a name" description="The label is small, but the whole multi-number system is built on it." items={whyLabel} />
      <DetailGrid eyebrow="More than one" title="Working with several numbers" items={multi} tone="white" />
      <FaqList faqs={faqs} />
      <CTA />
    </>
  );
}
