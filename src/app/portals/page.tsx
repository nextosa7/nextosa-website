import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Badge from "@/components/Badge";
import PortalCards from "@/components/PortalCards";
import CTA from "@/components/home/CTA";
import { industryPages } from "@/lib/content";
import { industryDepth } from "@/lib/portals";

export const metadata: Metadata = {
  title: "Portals for every industry",
  description:
    "The self-service portals NEXTOSA gives parents, students, teachers, distributors, members, clients and diners, and what each one can and cannot see.",
};

export default function PortalsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 py-24">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <Container className="relative text-center">
          <Badge>Portals</Badge>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">A portal for the people you serve</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Parents, students, teachers, distributors, members, clients and diners each get a locked-down view of their own information. Nothing else is reachable from it.
          </p>
        </Container>
      </section>

      {industryPages.map((ind, idx) => {
        const d = industryDepth[ind.slug];
        if (!d) return null;
        return (
          <section key={ind.slug} className={`py-16 sm:py-20 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
            <Container>
              <SectionHeading eyebrow={ind.name} title={d.portals.length ? `${ind.name} portals` : `${ind.name}: no outside portal`} />
              <div className="mt-10">
                {d.portals.length ? (
                  <PortalCards portals={d.portals} />
                ) : (
                  <p className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-7 text-center text-sm leading-6 text-slate-600">{d.noPortalNote}</p>
                )}
              </div>
              <p className="mt-6 text-center text-sm">
                <Link href={`/industries/${ind.slug}`} className="font-medium text-accent-600 hover:underline">All {ind.name} features</Link>
              </p>
            </Container>
          </section>
        );
      })}
      <CTA />
    </>
  );
}
