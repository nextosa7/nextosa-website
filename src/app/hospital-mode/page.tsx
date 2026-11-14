import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import GuideHero from "@/components/GuideHero";
import { DetailGrid, FaqList } from "@/components/DepthBlocks";
import CTA from "@/components/home/CTA";
import type { Detail, Faq } from "@/lib/depth";

export const metadata: Metadata = buildMetadata({
  title: "Hospital Mode: IPD, EMR, Pharmacy, Lab and Billing",
  description:
    "What changes when a healthcare workspace turns on hospital mode: wards and beds, clinical records with a treating-relationship rule, pharmacy batches, lab and radiology, TPA billing, access auditing and AI safeguards.",
  path: "/hospital-mode",
});

const switchItems: Detail[] = [
  { title: "A plain clinic stays a plain clinic", text: "A healthcare workspace works as an ordinary clinic (patients, appointments, billing, pharmacy stock) until an Admin deliberately turns on hospital mode. Clinics that never do see no change." },
  { title: "A one-way switch", text: "Hospital mode needs an explicit acknowledgement and cannot be switched back off, because patient records and audit trails must not disappear." },
  { title: "One branch, one workspace", text: "Each hospital branch is its own workspace, joined to the others with the existing multi-workspace and consolidation feature." },
  { title: "Hospital switches appear only when it is on", text: "Hospital permission switches and the hospital screens are hidden until hospital mode is enabled." },
];

const modules: Detail[] = [
  { title: "Departments, doctors and rosters", text: "A department tree, practitioner profiles with registration numbers and fees, and a duty roster that refuses double-booking a person." },
  { title: "IPD and the bed board", text: "Wards, rooms and beds, admissions, bed transfers and discharge. Two people can never be put in the same bed, even if they try at the same moment." },
  { title: "EMR: clinical records", text: "Encounters, vitals, diagnoses, signed notes, prescriptions with allergy screening, lab orders and encrypted clinical documents." },
  { title: "Pharmacy", text: "Batch and expiry stock, first-expiry-first-out dispensing, substitution with a written reason, returns, and charges posted to the patient's bill." },
  { title: "Lab and radiology", text: "A priced test catalog, orders, sample or exam steps, write-once results with amendment history, and secure scan attachments." },
  { title: "Billing and TPA claims", text: "Room charges from the bed census, a charge master, split billing between patient and insurer, pre-authorization, and the claim lifecycle through settlement." },
];

const privacy: Detail[] = [
  { title: "Access comes from treating the patient", text: "Clinical records open only through a real treating relationship: your own consultation, your care team or ward. A job title, even Admin, does not open a chart." },
  { title: "Break-glass for emergencies", text: "In an emergency a clinician can open a chart read-only with a written reason. It is time-limited, audited, and reviewed by an Admin afterwards." },
  { title: "Tamper-evident access log", text: "Every access to patient data is recorded in an append-only log chained with a cryptographic hash, so an edited or removed row is detectable. Reading the log is itself logged." },
  { title: "Signed records cannot be changed", text: "A signed note, an issued prescription and a recorded result are locked by the database itself. Corrections are new, linked entries, never edits." },
  { title: "Encrypted documents, private storage", text: "Clinical files are encrypted before storage in a separate private bucket and streamed back only through an access-checked download. There is no public link." },
  { title: "Care-team scoping", text: "A clinician can be limited to patients on their care team or in their ward, and a patient outside their scope is refused." },
];

const ai: Detail[] = [
  { title: "AI is off for patient data by default", text: "In hospital mode, patient data reaches an AI provider only if the platform has a zero-data-retention agreement, the workspace has opted in, and the text has been de-identified." },
  { title: "Patient files are never sent", text: "Raw patient files cannot be de-identified, so uploading or chatting with them through the AI document feature is refused." },
  { title: "AI summaries are drafts", text: "An AI clinical summary is built from de-identified fields and checked for leaks, and it only becomes part of the record after a doctor accepts, edits and signs it." },
  { title: "Customer chat agents are off", text: "The Sales, Support and Marketing agents are refused in hospital workspaces." },
];

const notBuilt: Detail[] = [
  { title: "Not built yet", text: "ABDM and FHIR integration, transmitting claims to a TPA electronically, critical-value alerts for lab results, a DICOM viewer or PACS, barcode scanning, controlled-drug registers, advance deposits and package pricing, and OPD queue and token management." },
  { title: "Honest scope", text: "Parts of the AI privacy review are still open, so some AI features that do not touch patient charts are not yet reviewed for hospital mode. Ask us before relying on a specific feature for compliance." },
];

const faqs: Faq[] = [
  { question: "Can a small clinic skip all this?", answer: "Yes. Hospital mode is optional and off until an Admin turns it on." },
  { question: "Can I turn hospital mode off again?", answer: "No. It is a one-way switch so that records and the audit trail are never lost." },
  { question: "Can an Admin read every patient's chart?", answer: "Not automatically. They can see who accessed what in the audit log, and reach a chart only through the audited break-glass route." },
  { question: "Is NEXTOSA a certified medical device?", answer: "NEXTOSA is business software for running a hospital's operations and records. Check your local regulatory requirements for what you need on top." },
];

export default function HospitalModePage() {
  return (
    <>
      <GuideHero badge="Healthcare" title="Hospital mode: from clinic to full hospital system">
        Wards and beds, clinical records, pharmacy, lab, billing and insurance claims, with patient-data privacy built in. See also the{" "}
        <Link href="/industries/healthcare" className="font-medium text-accent-300 hover:underline">healthcare industry page</Link>.
      </GuideHero>
      <DetailGrid eyebrow="The switch" title="Optional, deliberate and one-way" items={switchItems} tone="white" />
      <DetailGrid eyebrow="Modules" title="What hospital mode adds" items={modules} />
      <DetailGrid eyebrow="Privacy" title="Patient data, protected by design" items={privacy} tone="white" />
      <DetailGrid eyebrow="AI" title="AI and patient data" items={ai} />
      <DetailGrid eyebrow="Limits" title="What is not built yet" items={notBuilt} tone="white" />
      <FaqList faqs={faqs} />
      <CTA />
    </>
  );
}
