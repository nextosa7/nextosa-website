import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import { DetailGrid, FaqList } from "@/components/DepthBlocks";
import CTA from "@/components/home/CTA";
import type { Detail, Faq } from "@/lib/depth";

export const metadata: Metadata = buildMetadata({
  title: "Security & Trust",
  description:
    "How NEXTOSA keeps each workspace separate, controls who can see what, protects patient and customer data, and keeps a tamper-evident record of access.",
  path: "/security",
});

const platform: Detail[] = [
  { title: "Every workspace is separate", text: "Each piece of data belongs to one organization, and every request is scoped to the signed-in user's organization on the server. Sockets join only their own organization's room." },
  { title: "Signed sessions", text: "Sign-in issues a signed token that every API request and live connection is verified against." },
  { title: "Encrypted credentials", text: "WhatsApp access tokens are stored encrypted and are never logged or returned by the API." },
  { title: "Verified incoming events", text: "Payment webhooks are verified per workspace, Gmail push messages are checked against Google's signed token, and public endpoints are rate limited." },
  { title: "Portals that can only see their own data", text: "Parents, students, teachers, distributors, members and clients get default-deny access: a short list of allowed routes, and everything else answers 403." },
  { title: "Durable background work", text: "Inbound messages, campaign sends and webhooks run through a durable queue, so a restart does not lose them." },
];

const records: Detail[] = [
  { title: "Credit notes, not edits", text: "A refund issues a credit note and never edits or deletes the invoice. The ledger entries behind documents are append-only." },
  { title: "Audit log for sensitive actions", text: "Sensitive actions are recorded in an audit log that Admins can review." },
  { title: "Re-authentication for risky changes", text: "Some changes, such as moving a team member between roles that affect seats, ask for a recent sign-in again." },
  { title: "Nothing deleted by accident", text: "Records with history are deactivated rather than deleted, such as wards, beds, departments and diagnostic tests." },
];

const hospital: Detail[] = [
  { title: "Tamper-evident access log", text: "Every access to patient data is written to an append-only log chained with a keyed hash. A database trigger refuses edits and deletes, and an integrity check detects any altered, removed or re-linked row." },
  { title: "Log kept for at least six years", text: "Purging the access log is a deliberate, separate act and can never go below six years." },
  { title: "Fail-closed auditing", text: "If the audit record cannot be written, the patient data is not returned." },
  { title: "Care-team scoping", text: "A restricted member sees only the patients on their care team, and an Admin has no automatic access to clinical content." },
  { title: "Break-glass with a reason", text: "Opening a chart outside your team needs a written reason, is read-only, lasts four hours and is reviewed afterwards." },
  { title: "Immutable clinical records", text: "Signed notes, issued prescriptions, vital signs and lab results are protected by database triggers, not just by the app." },
  { title: "Encrypted documents", text: "Each patient file gets its own encryption key and is stored in a separate private bucket. There is no link to a document; it is streamed only to someone with access." },
  { title: "AI is off for patient data by default", text: "Patient data reaches an AI provider only if the operator has confirmed zero data retention, your workspace has opted in, and the text has been de-identified. Patient files never go to AI." },
];

const faqs: Faq[] = [
  { question: "Can another company see my data?", answer: "No. Every query is scoped to your organization on the server, and portals are limited to a short allow-list of routes." },
  { question: "Is my WhatsApp token safe?", answer: "It is stored encrypted and is never logged or sent back to the browser." },
  { question: "Who can see patient records?", answer: "People with a treating relationship to the patient: the doctor of an open consultation, the care team of an admission, or someone using break-glass, which is read-only and reviewed. Admins have no automatic access." },
  { question: "Where can I read the data policy?", answer: "See the Privacy Policy and Terms linked in the footer." },
];

export default function SecurityPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 py-24">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <Container className="relative text-center">
          <Badge>Security and trust</Badge>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Built so the wrong person cannot see the wrong thing</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Workspaces are kept separate, access is checked on the server, and the most sensitive records have protections in the database itself. See also{" "}
            <Link href="/roles-and-permissions" className="font-medium text-accent-300 hover:underline">roles and permissions</Link>.
          </p>
        </Container>
      </section>
      <DetailGrid eyebrow="Platform" title="How the platform protects every workspace" items={platform} tone="white" />
      <DetailGrid eyebrow="Records" title="Money and history that cannot be quietly rewritten" items={records} />
      <DetailGrid eyebrow="Hospital mode" title="Extra protection for patient data" description="These apply to workspaces that switch on hospital mode." items={hospital} tone="white" />
      <FaqList faqs={faqs} />
      <CTA />
    </>
  );
}
