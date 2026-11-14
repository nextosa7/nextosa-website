import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import GuideHero from "@/components/GuideHero";
import { DetailGrid, FaqList } from "@/components/DepthBlocks";
import CTA from "@/components/home/CTA";
import type { Detail, Faq } from "@/lib/depth";

export const metadata: Metadata = buildMetadata({
  title: "Portals for Parents, Students, Teachers, Members and Staff",
  description:
    "NEXTOSA gives your clients and staff their own confined portals: parents, students, class teachers, gym members, distributors, salon clients and employees. What each can see and why they use no paid seat.",
  path: "/portals",
});

const portals: Detail[] = [
  { title: "Parents and students (Schools)", text: "Parents and students sign in to their own portals and see their own records. Fee invoices and reminders go to the guardian." },
  { title: "Class teachers (Schools)", text: "A class teacher gets a portal-only seat, with their own role, tied to their class. They see what teaching needs and nothing about finance, billing, settings or team." },
  { title: "Gym members", text: "Members get their own confined access, limited to what a member needs." },
  { title: "Distributors", text: "Distributors get their own login to work with you, confined to what a distributor needs." },
  { title: "Salon clients", text: "Clients can book, see their wallet and prices in your currency, with limits on how far ahead and how many bookings they can hold." },
  { title: "Employees (Manufacturer)", text: "Staff sign in with their phone and a PIN to see their own attendance, leave and payslips, including tips paid on top of salary where they apply." },
  { title: "Restaurant diners", text: "Diners scan a table's QR code, verify their WhatsApp number with a code, order and pay. Their order page is protected by its own private link." },
];

const safety: Detail[] = [
  { title: "Confined by default", text: "Each portal has a short list of things it may use. Anything not on the list is refused, so a feature added later is unreachable from a portal until someone allows it on purpose." },
  { title: "A portal login is not a staff login", text: "A portal token used on a staff screen is rejected. Staff and portal sessions cannot be swapped for each other." },
  { title: "Sign-in limits", text: "Portal sign-ins are rate-limited to slow down guessing." },
  { title: "No sideways viewing", text: "A parent sees their own child, a member sees their own plan, an employee sees their own payslips and nothing belongs to anyone else." },
  { title: "Not in every workspace", text: "The Employee Portal is switched off for School workspaces, which use the Teacher, Student and Parent portals instead. Real Estate has no buyer portal." },
];

const seats: Detail[] = [
  { title: "No paid seat for customers", text: "Parents, students, distributors, gym members and clients logging in do not use one of your plan's team seats." },
  { title: "Class teachers are free seats", text: "A class teacher's portal-only seat is not counted against your team limit either." },
  { title: "One definition of a seat", text: "The seat limit and the usage meter in Settings use the same rule, so they cannot disagree." },
];

const faqs: Faq[] = [
  { question: "Can a teacher see fees or invoices?", answer: "No. A class teacher's portal is limited to teaching work, and finance, billing, settings and team answer with a refusal." },
  { question: "Do portals need an app?", answer: "Portals run in the browser." },
  { question: "Can an employee see another employee's pay?", answer: "No. The employee portal shows only the signed-in person's own records." },
];

export default function PortalsPage() {
  return (
    <>
      <GuideHero badge="Portals" title="Give clients and staff their own confined portal">
        Parents, students, teachers, members, distributors, salon clients and employees, each with exactly what they need. See{" "}
        <Link href="/roles-and-permissions" className="font-medium text-accent-300 hover:underline">roles and permissions</Link> for team access.
      </GuideHero>
      <DetailGrid eyebrow="Who gets a portal" title="Portals by business" items={portals} tone="white" />
      <DetailGrid eyebrow="Safety" title="Why a portal cannot wander" items={safety} />
      <DetailGrid eyebrow="Seats" title="Portals and your plan" items={seats} tone="white" />
      <FaqList faqs={faqs} />
      <CTA />
    </>
  );
}
