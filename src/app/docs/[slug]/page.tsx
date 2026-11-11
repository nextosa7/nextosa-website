import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import CTA from "@/components/home/CTA";
import { chapterAnchor, docPages, getDocPage, type DocCallout } from "@/lib/docs";

export function generateStaticParams() {
  return docPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getDocPage(slug);
  if (!page) return {};
  return buildMetadata({ title: page.title, description: page.subtitle, path: `/docs/${page.slug}` });
}

const calloutStyle: Record<string, { label: string; box: string }> = {
  tip: { label: "Tip", box: "border-accent-200 bg-accent-50 text-accent-900" },
  important: { label: "Important", box: "border-amber-200 bg-amber-50 text-amber-900" },
  alert: { label: "Careful", box: "border-red-200 bg-red-50 text-red-900" },
};

function Callout({ callout }: { callout: DocCallout }) {
  const s = calloutStyle[callout.type] ?? calloutStyle.important;
  return (
    <div className={`mt-5 rounded-xl border px-5 py-4 text-sm leading-6 ${s.box}`}>
      <span className="font-semibold">{s.label}: </span>
      {callout.body}
    </div>
  );
}

export default async function DocPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getDocPage(slug);
  if (!page) notFound();
  const index = docPages.findIndex((p) => p.slug === slug);
  const prev = docPages[index - 1];
  const next = docPages[index + 1];

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 py-20">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <Container className="relative">
          <Link href="/docs" className="text-sm font-medium text-accent-300 hover:underline">&larr; All documentation</Link>
          <div className="mt-5"><Badge>{page.name}</Badge></div>
          <h1 className="mt-5 max-w-4xl text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">{page.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{page.subtitle}</p>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">On this page</p>
              <ol className="mt-3 space-y-1 border-l border-slate-200 text-sm lg:max-h-[calc(100vh-14rem)] lg:overflow-y-auto">
                {page.chapters.map((c, i) => (
                  <li key={`${c.title}-${i}`}>
                    <a href={`#${chapterAnchor(i)}`} className="-ml-px block border-l border-transparent py-1 pl-4 text-slate-600 hover:border-accent-500 hover:text-navy-900">
                      {i + 1}. {c.title}
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-6 hidden border-t border-slate-200 pt-4 text-sm lg:block">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Other guides</p>
                <ul className="mt-2 space-y-1">
                  {docPages.filter((p) => p.slug !== slug).map((p) => (
                    <li key={p.slug}><Link href={`/docs/${p.slug}`} className="text-slate-600 hover:text-accent-700">{p.name}</Link></li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="min-w-0">
              <p className="max-w-3xl text-base leading-7 text-slate-700">{page.intro}</p>

              {page.chapters.map((chapter, ci) => (
                <article key={`${chapter.title}-${ci}`} id={chapterAnchor(ci)} className="mt-10 scroll-mt-24 border-t border-slate-200 pt-10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">Chapter {ci + 1}</p>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">{chapter.title}</h2>
                  {chapter.summary && <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{chapter.summary}</p>}
                  {chapter.callout && <Callout callout={chapter.callout} />}

                  <div className="mt-6 space-y-6">
                    {chapter.sections.map((s, si) => (
                      <section key={`${s.title}-${si}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <h3 className="text-lg font-semibold text-navy-900">{s.title}</h3>
                        {(s.route || s.permission) && (
                          <div className="mt-2 flex flex-wrap gap-2 text-xs">
                            {s.route && <span className="rounded-full border border-slate-300 bg-white px-3 py-1 font-mono text-slate-600">Page: {s.route}</span>}
                            {s.permission && <span className="rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-accent-700">Needs: {s.permission}</span>}
                          </div>
                        )}
                        {s.body && <p className="mt-3 text-sm leading-7 text-slate-700">{s.body}</p>}
                        {s.steps && s.steps.length > 0 && (
                          <ol className="mt-4 space-y-2">
                            {s.steps.map((step, k) => (
                              <li key={k} className="flex gap-3 text-sm leading-6 text-slate-700">
                                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-white">{k + 1}</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        )}
                      </section>
                    ))}
                  </div>
                </article>
              ))}

              <div className="mt-14 flex flex-col justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
                {prev ? <Link href={`/docs/${prev.slug}`} className="text-sm font-medium text-accent-700 hover:underline">&larr; {prev.name}</Link> : <span />}
                {next ? <Link href={`/docs/${next.slug}`} className="text-sm font-medium text-accent-700 hover:underline">{next.name} &rarr;</Link> : <span />}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
