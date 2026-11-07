import Container from "./Container";
import SectionHeading from "./SectionHeading";
import type { Detail, Faq } from "@/lib/depth";

// Shared "how it really works" grid, numbered steps and FAQ list used by platform, industry and trust pages.

export function DetailGrid({ eyebrow, title, description, items, tone = "slate" }: { eyebrow: string; title: string; description?: string; items: Detail[]; tone?: "slate" | "white" }) {
  return (
    <section className={`py-16 sm:py-20 ${tone === "slate" ? "bg-slate-50" : "bg-white"}`}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((d) => (
            <div key={d.title} className={`rounded-2xl border border-slate-200 p-7 ${tone === "slate" ? "bg-white" : "bg-slate-50"}`}>
              <h3 className="text-lg font-semibold text-navy-900">{d.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{d.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SetupSteps({ items, title = "Getting started" }: { items: Detail[]; title?: string }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Setup" title={title} />
        <ol className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {items.map((s, i) => (
            <li key={s.title} className="flex gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent-600 text-sm font-bold text-white">{i + 1}</span>
              <div>
                <h3 className="text-base font-semibold text-navy-900">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function FaqList({ faqs, title = "Questions people ask", tone = "slate" }: { faqs: Faq[]; title?: string; tone?: "slate" | "white" }) {
  return (
    <section className={`py-16 sm:py-20 ${tone === "slate" ? "bg-slate-50" : "bg-white"}`}>
      <Container>
        <SectionHeading eyebrow="FAQ" title={title} />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f) => (
            <details key={f.question} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-navy-900">
                {f.question}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-slate-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{f.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
