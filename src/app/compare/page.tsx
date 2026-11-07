import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Badge from "@/components/Badge";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Why NEXTOSA",
  description:
    "How NEXTOSA compares with traditional ERP suites and app-bundle suites: one connected platform, set up in minutes, with AI agents and industry modules built in.",
};

// Deliberately generic: compares approaches, not named vendors, so nothing here depends on a competitor's current
// pricing or feature list.
const rows: { topic: string; nextosa: string; erp: string; bundle: string }[] = [
  { topic: "Time to first value", nextosa: "Sign up, pick your industry and start with demo data in minutes.", erp: "Typically a project with consultants and a go-live date.", bundle: "Pick and configure many separate apps." },
  { topic: "Built for your industry", nextosa: "10 industry modules (clinic and hospital, school, restaurant, gym and more) in one product.", erp: "Industry editions, usually with extra implementation.", bundle: "General-purpose apps you adapt yourself." },
  { topic: "Finance and operations connected", nextosa: "Sales, inventory and billing post to one double-entry ledger automatically.", erp: "Strong, but heavy to set up.", bundle: "Often separate products you integrate." },
  { topic: "WhatsApp", nextosa: "Official Business API, several numbers, AI replies or approval, campaigns, all in the inbox.", erp: "Usually a third-party add-on.", bundle: "Usually a connector or add-on." },
  { topic: "AI agents", nextosa: "Sales, Support and Marketing agents grounded in your catalog and knowledge base, with human handover.", erp: "Assistants are emerging, scope varies.", bundle: "Assistants vary by app." },
  { topic: "Pricing", nextosa: "Three public plans, billed monthly, quarterly or yearly, with token top-ups.", erp: "Quote-based.", bundle: "Per user, per app." },
  { topic: "Who can run it", nextosa: "A business owner, without a developer.", erp: "An IT team or partner.", bundle: "A capable admin." },
];

export default function ComparePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 py-24">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <Container className="relative text-center">
          <Badge>Why NEXTOSA</Badge>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Enterprise depth, without the enterprise project
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Large ERP suites are powerful but slow to adopt. App bundles are quick to start but leave you wiring things together. NEXTOSA aims for the depth of the first and the speed of the second.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Approach" title="Three ways to run a business on software" description="A general comparison of approaches. Details vary by vendor, so check any product's own pricing and feature pages." />
          <div className="mt-14 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-semibold"> </th>
                  <th className="px-6 py-4 font-semibold text-accent-600">NEXTOSA</th>
                  <th className="px-6 py-4 font-semibold">Traditional ERP suites</th>
                  <th className="px-6 py-4 font-semibold">App-bundle suites</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((r) => (
                  <tr key={r.topic} className="align-top">
                    <td className="px-6 py-5 font-semibold text-navy-900">{r.topic}</td>
                    <td className="bg-accent-500/5 px-6 py-5 text-slate-800">{r.nextosa}</td>
                    <td className="px-6 py-5 text-slate-600">{r.erp}</td>
                    <td className="px-6 py-5 text-slate-600">{r.bundle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
