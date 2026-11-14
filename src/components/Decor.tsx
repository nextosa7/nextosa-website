import type { ReactNode } from "react";

// Decorative layer for the marketing site: faint emerald / soft-blue orbs far in the background, small glass chips and
// icon tiles. Everything here is aria-hidden and pointer-events-none, drawn with gradients (no filter blur, no images),
// so it adds depth without touching layout, contrast or performance. Keep it sparse: one orb pair per section at most.

const EMERALD = "22, 168, 99";
const BLUE = "56, 139, 253";

function orb(rgb: string, alpha: number): string {
  return `radial-gradient(closest-side, rgba(${rgb}, ${alpha}) 0%, rgba(${rgb}, ${alpha * 0.45}) 45%, rgba(${rgb}, 0) 100%)`;
}

type OrbLayout = "hero" | "split" | "left" | "right" | "center";

// Where the two orbs sit. Sizes are large and alphas tiny (5-7%), so they read as depth, never as shapes.
const LAYOUTS: Record<OrbLayout, { className: string; rgb: string; alpha: number }[]> = {
  hero: [
    { className: "-left-40 top-10 h-[34rem] w-[34rem]", rgb: BLUE, alpha: 0.06 },
    { className: "-right-48 top-48 h-[38rem] w-[38rem]", rgb: EMERALD, alpha: 0.07 },
  ],
  split: [
    { className: "-left-56 top-1/4 h-[32rem] w-[32rem]", rgb: EMERALD, alpha: 0.06 },
    { className: "-right-56 bottom-0 h-[32rem] w-[32rem]", rgb: BLUE, alpha: 0.05 },
  ],
  left: [{ className: "-left-48 top-1/3 h-[30rem] w-[30rem]", rgb: BLUE, alpha: 0.055 }],
  right: [{ className: "-right-48 top-1/4 h-[30rem] w-[30rem]", rgb: EMERALD, alpha: 0.06 }],
  center: [
    { className: "left-1/2 top-1/2 h-[26rem] w-[44rem] -translate-x-1/2 -translate-y-1/2", rgb: EMERALD, alpha: 0.06 },
    { className: "left-[12%] top-0 h-[20rem] w-[20rem]", rgb: BLUE, alpha: 0.045 },
  ],
};

export function GlowOrbs({ layout = "split" }: { layout?: OrbLayout }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {LAYOUTS[layout].map((o, i) => (
        <div key={i} className={`absolute rounded-full ${o.className}`} style={{ background: orb(o.rgb, o.alpha) }} />
      ))}
    </div>
  );
}

// ---- Minimal line icons (24px grid, 1.6 stroke) ----

const paths = {
  spark: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z",
  shield: "M12 3l7 3v5.5c0 4.3-2.9 8.2-7 9.5-4.1-1.3-7-5.2-7-9.5V6l7-3zm-3 9l2.2 2.2L15.5 10",
  chart: "M4 20h16M7 16v-4m5 4V8m5 8v-6",
  chat: "M8 10h8m-8 4h5m-8 6l1.4-3.5A8 8 0 1112 20a8 8 0 01-3.2-.7L5 20z",
  megaphone: "M4 10v4a1 1 0 001 1h2l5 4V5L7 9H5a1 1 0 00-1 1zm12-1a4 4 0 010 6m2.5-9a8 8 0 010 12",
  lock: "M7 11V8a5 5 0 0110 0v3m-11 0h12a1 1 0 011 1v7a1 1 0 01-1 1H6a1 1 0 01-1-1v-7a1 1 0 011-1zm6 4v2",
  users: "M16 19v-1.5a3.5 3.5 0 00-3.5-3.5h-5A3.5 3.5 0 004 17.5V19m13-8a3 3 0 000-6m3 14v-1.5a3.5 3.5 0 00-2.5-3.3M13 8a3 3 0 11-6 0 3 3 0 016 0z",
  key: "M15 7a4 4 0 11-3.9 5H8v2H6v2H3v-3l5.2-5.2A4 4 0 0115 7zm1 3h.01",
  log: "M8 7h8M8 11h8M8 15h5M6 3h12a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z",
  folder: "M4 7a1 1 0 011-1h4l2 2h8a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V7zm8 5v3m-1.5-1.5h3",
  layers: "M12 4l8 4-8 4-8-4 8-4zm-8 8l8 4 8-4M4 16l8 4 8-4",
  plug: "M9 3v4m6-4v4M7 7h10v4a5 5 0 01-10 0V7zm5 9v5",
  check: "M5 13l4 4L19 7",
} as const;

export type DecorIconName = keyof typeof paths;

export function DecorIcon({ name, className = "h-4 w-4" }: { name: DecorIconName; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

// Small tinted icon tile used at the top of a card.
export function IconTile({ name, tone = "emerald" }: { name: DecorIconName; tone?: "emerald" | "blue" }) {
  const toneClass =
    tone === "blue"
      ? "bg-gradient-to-br from-sky-50 to-white text-sky-600 ring-sky-100"
      : "bg-gradient-to-br from-accent-50 to-white text-accent-600 ring-accent-100";
  return (
    <span aria-hidden="true" className={`inline-flex h-10 w-10 items-center justify-center rounded-xl shadow-[0_1px_2px_rgba(10,46,34,0.06)] ring-1 ${toneClass}`}>
      <DecorIcon name={name} className="h-5 w-5" />
    </span>
  );
}

// Glass chip: a quiet label with an icon. Decorative by default (aria-hidden) - it repeats what the section already says.
export function GlassChip({
  icon,
  children,
  tone = "emerald",
  className = "",
}: {
  icon: DecorIconName;
  children: ReactNode;
  tone?: "emerald" | "blue";
  className?: string;
}) {
  const dot = tone === "blue" ? "bg-sky-50 text-sky-600" : "bg-accent-50 text-accent-600";
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none inline-flex select-none items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 py-1.5 pl-1.5 pr-3.5 text-xs font-medium text-navy-900 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_10px_30px_-14px_rgba(10,46,34,0.28)] backdrop-blur-md ${className}`}
    >
      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${dot}`}>
        <DecorIcon name={icon} className="h-3.5 w-3.5" />
      </span>
      {children}
    </span>
  );
}

// A chip that floats beside a hero heading. Only on wide screens, where the side gutters are empty.
export function FloatingChip({
  icon,
  children,
  tone,
  className = "",
  delay = 0,
}: {
  icon: DecorIconName;
  children: ReactNode;
  tone?: "emerald" | "blue";
  className?: string;
  delay?: number;
}) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute hidden xl:block ${className}`}>
      <div className="animate-float" style={{ animationDelay: `${delay}s` }}>
        <GlassChip icon={icon} tone={tone}>
          {children}
        </GlassChip>
      </div>
    </div>
  );
}
