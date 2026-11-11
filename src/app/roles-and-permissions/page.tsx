import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import { DetailGrid, FaqList } from "@/components/DepthBlocks";
import CTA from "@/components/home/CTA";
import type { Detail, Faq } from "@/lib/depth";

export const metadata: Metadata = buildMetadata({
  title: "Roles & Permissions for Teams",
  description:
    "Owner, Admin and team roles, a permission switch for every screen, WhatsApp number restrictions, care-team scoping and portal-only seats in NEXTOSA.",
  path: "/roles-and-permissions",
});

const roles: Detail[] = [
  { title: "Owner, Admin and Agent", text: "Every user belongs to one organization with a role. Admins manage settings and team, and everyone else works within the permissions they are given." },
  { title: "A switch for every screen", text: "When you invite someone or edit their access, you see a list of permission switches for your business type. Turning one on opens that screen and nothing else." },
  { title: "Defaults you can trust", text: "Sensitive capabilities, such as clinical records, hospital billing or payroll, are off for a new team member until you switch them on." },
  { title: "Your business type decides the list", text: "A school sees school switches, a gym sees gym switches. Hospital switches appear only once hospital mode is on." },
  { title: "Finer control where it matters", text: "Gym screens (plans, check-in, trainer commissions, equipment, store) are separate switches, and salon payroll is separate from the staff roster." },
  { title: "Changing a switch never locks anyone out by accident", text: "When a switch is split into two, people who had the old access keep it, and an explicit setting always wins." },
];

const scoping: Detail[] = [
  { title: "Limit staff to chosen WhatsApp numbers", text: "An Admin can restrict a team member to specific numbers. They see only those threads, approvals, campaigns and figures, and a restricted member who loses their last number sees nothing." },
  { title: "Care-team scoping in hospitals", text: "A restricted clinician sees only patients on their care team or in a ward they staff. A record outside their scope answers with a refusal." },
  { title: "Treating relationship, not job title", text: "In hospital mode, clinical access comes from actually treating the patient. An Admin has no automatic access to clinical content." },
  { title: "Portal-only seats", text: "Class teachers use an unpaid, portal-only seat. Parents, students, distributors and gym members have their own confined access and use no paid seat." },
  { title: "Default-deny portals", text: "Every portal has a short list of routes it may use. A route added to the app later is unreachable from a portal unless someone adds it on purpose." },
  { title: "Seats that match what you pay for", text: "The usage meter in Settings and the seat limit use the same definition, so they cannot disagree." },
];

const faqs: Faq[] = [
  { question: "Can I let a manager do payroll but not billing?", answer: "Yes. Each screen has its own switch, so you can grant one without the other." },
  { question: "Can I limit someone to one WhatsApp number?", answer: "Yes. Choose the numbers when you invite them or edit their permissions." },
  { question: "Do teachers use a paid seat?", answer: "No. Class teacher seats are portal-only and unpaid." },
  { question: "Is there a log of who did what?", answer: "Sensitive actions are recorded in an audit log, and hospital workspaces also keep a tamper-evident log of access to patient data." },
];

export default function RolesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 py-24">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <Container className="relative text-center">
          <Badge>Roles and permissions</Badge>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Give each person exactly the access their job needs</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Roles, per-screen switches, number restrictions and care-team scoping, all enforced on the server. Read more on{" "}
            <Link href="/security" className="font-medium text-accent-300 hover:underline">security and trust</Link>.
          </p>
        </Container>
      </section>
      <DetailGrid eyebrow="Roles" title="Roles and permission switches" items={roles} tone="white" />
      <DetailGrid eyebrow="Scoping" title="Narrowing access beyond the screen" items={scoping} />
      <FaqList faqs={faqs} tone="white" />
      <CTA />
    </>
  );
}
