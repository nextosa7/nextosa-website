import Container from "./Container";
import BrowserFrame from "./BrowserFrame";
import type { ModuleBlock } from "@/lib/content";

// Alternating text / screenshot rows used by platform and industry pages.
export default function ModuleRows({ modules }: { modules: ModuleBlock[] }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="space-y-24">
        {modules.map((m, index) => (
          <div key={m.title} className="grid items-center gap-12 lg:grid-cols-2">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">{m.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{m.description}</p>
              <ul className="mt-6 space-y-3">
                {m.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-5 w-5 flex-none text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            {m.shot ? (
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <BrowserFrame shot={m.shot} showCaption />
              </div>
            ) : (
              <div className={`hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-accent-50 p-10 lg:block ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">In NEXTOSA</p>
                <p className="mt-3 text-xl font-bold text-navy-900">{m.title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{m.bullets.join(" | ")}</p>
              </div>
            )}
          </div>
        ))}
      </Container>
    </section>
  );
}
