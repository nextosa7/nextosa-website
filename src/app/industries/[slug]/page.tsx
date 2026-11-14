import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ModuleRows from "@/components/ModuleRows";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/home/CTA";
import { industryDepth } from "@/lib/portals";
import { industryExtra } from "@/lib/depth";
import JsonLd from "@/components/JsonLd";
import IndustryVideos from "@/components/IndustryVideos";
import { breadcrumbLd, buildMetadata, faqLd } from "@/lib/seo";
import { FaqList, SetupSteps } from "@/components/DepthBlocks";
import { industryBySlug, industryPages, leadShot, type ModuleBlock } from "@/lib/content";

export function generateStaticParams() {
  return industryPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = industryBySlug(slug);
  if (!page) return {};
  return buildMetadata({ title: `${page.name} Software: CRM, Billing & WhatsApp`, description: page.intro, path: `/industries/${page.slug}`, defaultImage: false });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = industryBySlug(slug);
  if (!page) notFound();
  const depth = industryDepth[page.slug];
  const extra = industryExtra[page.slug];
  // Portals are shown as ordinary module rows, right after the app screens, so they sit with the rest of the modules.
  const modules: ModuleBlock[] = [
    ...page.modules,
    ...(depth?.portals ?? []).map((p) => ({
      title: p.kind,
      description: `For the ${p.persona.toLowerCase()}. ${p.signIn}`,
      bullets: [...p.can, `Security: ${p.boundary}`],
      shot:
        p.shotFile && existsSync(join(process.cwd(), "public", "screens", "portals", `${p.shotFile}.jpg`))
          ? { src: `/screens/portals/${p.shotFile}.jpg`, caption: p.kind, url: `app.nextosa.com${p.shotUrl ?? ""}`, mobile: p.shotFile === "gym-member" || p.shotFile === "restaurant-diner" }
          : undefined,
    })),
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Industries", path: "/#industries" }, { name: page.name, path: `/industries/${page.slug}` }]),
          ...(extra?.faqs?.length ? [faqLd(extra.faqs)] : []),
        ]}
      />
      <PageHero eyebrow={page.name} title={page.headline} intro={page.intro} shot={leadShot(page)} />

      <IndustryVideos slug={page.slug} name={page.name} />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="The problem" title={`What ${page.name.toLowerCase()} struggle with`} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {page.challenges.map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <h3 className="text-lg font-semibold text-navy-900">{c.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{c.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="bg-slate-50 pt-20">
        <Container>
          <SectionHeading eyebrow="Modules" title={`Built for ${page.name.toLowerCase()}, screen by screen`} description="Every screen below is from the live NEXTOSA app." />
        </Container>
      </div>
      <ModuleRows modules={modules} />

      <section className="relative overflow-hidden theme-light py-20 sm:py-24">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <Container className="relative">
          <SectionHeading eyebrow="Workflow" title="How a day looks" dark />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {page.workflow.map((w, i) => (
              <li key={w.title} className="rounded-2xl border border-white/10 bg-navy-800/60 p-6">
                <span className="text-3xl font-black text-accent-500/50">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{w.text}</p>
              </li>
            ))}
          </ol>
          <ul className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
            {page.highlights.map((h) => (
              <li key={h} className="rounded-full border border-accent-400/30 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold text-accent-300">{h}</li>
            ))}
          </ul>
        </Container>
      </section>

      {depth && (
        <>
          <section className="bg-white py-16 sm:py-20">
            <Container>
              <SectionHeading eyebrow="In depth" title={`How NEXTOSA handles the details for ${page.name.toLowerCase()}`} />
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {depth.details.map((d) => (
                  <div key={d.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                    <h3 className="text-lg font-semibold text-navy-900">{d.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{d.text}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </>
      )}

      <section className="bg-white py-16">
        <Container className="text-center">
          <p className="text-sm text-slate-600">
            Also included for every industry: <Link href="/platform/fms" className="font-medium text-accent-600 hover:underline">finance</Link>,{" "}
            <Link href="/platform/crm" className="font-medium text-accent-600 hover:underline">CRM</Link>,{" "}
            <Link href="/platform/automations" className="font-medium text-accent-600 hover:underline">automations</Link>,{" "}
            <Link href="/platform/whatsapp" className="font-medium text-accent-600 hover:underline">WhatsApp</Link> and{" "}
            <Link href="/platform/ai-agents" className="font-medium text-accent-600 hover:underline">AI agents</Link>.
          </p>
        </Container>
      </section>
      {extra && <SetupSteps items={extra.setup} title={`Getting started with ${page.name.toLowerCase()}`} />}
      {extra && <FaqList faqs={extra.faqs} />}
      <CTA />
    </>
  );
}
