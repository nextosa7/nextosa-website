import type { ReactNode } from "react";

// Presentation blocks for the privacy policy. Server components, no behaviour.

export function PolicySection({ id, number, title, children }: { id: string; number: number; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-32 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 print:break-inside-avoid print:shadow-none">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-navy-900 text-sm font-bold text-accent-300">{number}</span>
        <h2 className="pt-0.5 text-xl font-bold tracking-tight text-navy-900 sm:text-2xl">{title}</h2>
      </div>
      <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600 sm:pl-[3.25rem]">{children}</div>
    </section>
  );
}

const callouts = {
  note: { label: "In plain words", box: "border-accent-200 bg-accent-50", text: "text-accent-900", dot: "bg-accent-500" },
  important: { label: "Important", box: "border-amber-200 bg-amber-50", text: "text-amber-900", dot: "bg-amber-500" },
} as const;

export function PolicyCallout({ kind = "note", children }: { kind?: keyof typeof callouts; children: ReactNode }) {
  const c = callouts[kind];
  return (
    <div className={`rounded-xl border p-4 ${c.box}`}>
      <p className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${c.text}`}>
        <span className={`h-2 w-2 rounded-full ${c.dot}`} />
        {c.label}
      </p>
      <div className={`mt-2 text-sm leading-6 ${c.text}`}>{children}</div>
    </div>
  );
}

export function PolicyList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PolicyTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <>
      <div className="hidden overflow-x-auto rounded-xl border border-slate-200 sm:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-navy-900">
            <tr>
              {head.map((h) => (
                <th key={h} className="px-4 py-3 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t border-slate-200 align-top">
                {row.map((cell, j) => (
                  <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-navy-900" : "text-slate-600"}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-y-3 sm:hidden">
        {rows.map((row, i) => (
          <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-navy-900">{row[0]}</p>
            <dl className="mt-2 space-y-2">
              {row.slice(1).map((cell, j) => (
                <div key={j}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">{head[j + 1]}</dt>
                  <dd className="mt-0.5 text-sm leading-6 text-slate-600">{cell}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </>
  );
}

export function GlanceCards({ items }: { items: { title: string; text: string; icon: ReactNode }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div key={it.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600">{it.icon}</span>
          <h3 className="mt-4 text-base font-semibold text-navy-900">{it.title}</h3>
          <p className="mt-1.5 text-sm leading-6 text-slate-600">{it.text}</p>
        </div>
      ))}
    </div>
  );
}

const ico = (d: ReactNode) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

export const icons = {
  shield: ico(<path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />),
  lock: ico(<><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>),
  noSale: ico(<><circle cx="12" cy="12" r="9" /><path d="M5.6 5.6l12.8 12.8" /></>),
  spark: ico(<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />),
  download: ico(<><path d="M12 3v12" /><path d="M7 11l5 5 5-5" /><path d="M5 21h14" /></>),
  person: ico(<><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" /></>),
};
