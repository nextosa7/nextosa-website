import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ModuleRows from "@/components/ModuleRows";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/home/CTA";
import { leadShot, platformBySlug, platformPages } from "@/lib/content";
import { DetailGrid, FaqList } from "@/components/DepthBlocks";
import { platformDepth } from "@/lib/depth";

export function generateStaticParams() {
  return platformPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = platformBySlug(slug);
  if (!page) return {};
  return { title: `${page.name} — ${page.short}`, description: page.intro };
}

export default async function PlatformPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = platformBySlug(slug);
  if (!page) notFound();
  const depth = platformDepth[page.slug];

  return (
    <>
      <PageHero eyebrow={page.name} title={page.headline} intro={page.intro} shot={leadShot(page)} stats={page.stats} />
      <ModuleRows modules={page.modules} />
      {depth && <DetailGrid eyebrow="In depth" title={`How ${page.name} really works`} items={depth.details} tone="white" />}

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="And more" title={`Everything included with ${page.name}`} />
          <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {page.capabilities.map((c) => (
              <li key={c} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-5 w-5 flex-none text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {c}
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-14 max-w-4xl">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500">Works together with</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {page.related.map((r) => {
                const rel = platformBySlug(r);
                return rel ? (
                  <Link key={r} href={`/platform/${r}`} className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-navy-900 transition-colors hover:border-accent-300 hover:text-accent-600">
                    {rel.name}
                  </Link>
                ) : null;
              })}
            </div>
          </div>
        </Container>
      </section>
      {depth && <FaqList faqs={depth.faqs} tone="white" />}
      <CTA />
    </>
  );
}
