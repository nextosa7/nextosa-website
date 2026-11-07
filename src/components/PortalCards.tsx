import type { Portal } from "@/lib/portals";

// One card per outside-facing portal: who it is for, how they sign in, what they can do, and the security boundary.
export default function PortalCards({ portals, dark = false }: { portals: Portal[]; dark?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {portals.map((p) => (
        <article
          key={p.kind + p.persona}
          className={`rounded-2xl border p-7 ${dark ? "border-white/10 bg-navy-800/60" : "border-slate-200 bg-white shadow-sm"}`}
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-600">{p.persona}</span>
          <h3 className={`mt-2 text-xl font-bold ${dark ? "text-white" : "text-navy-900"}`}>{p.kind}</h3>
          <p className={`mt-3 text-sm leading-6 ${dark ? "text-slate-300" : "text-slate-600"}`}>
            <span className="font-semibold">How they sign in: </span>
            {p.signIn}
          </p>
          <ul className="mt-4 space-y-2">
            {p.can.map((c) => (
              <li key={c} className={`flex items-start gap-2.5 text-sm leading-6 ${dark ? "text-slate-300" : "text-slate-700"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 flex-none text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
          <p className={`mt-5 rounded-lg px-4 py-3 text-xs leading-5 ${dark ? "bg-white/5 text-slate-400" : "bg-slate-50 text-slate-600"}`}>
            <span className="font-semibold">Security boundary: </span>
            {p.boundary}
          </p>
        </article>
      ))}
    </div>
  );
}
