"use client";

import { useEffect, useState } from "react";

export interface TocItem {
  id: string;
  label: string;
}

// Thin reading-progress bar pinned to the top of the viewport.
export function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? Math.min(100, Math.max(0, (h.scrollTop / max) * 100)) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 bg-transparent print:hidden" aria-hidden="true">
      <div className="h-full bg-gradient-to-r from-accent-400 to-accent-600 transition-[width] duration-100" style={{ width: `${pct}%` }} />
    </div>
  );
}

// Height of the site's sticky header (navbar plus breadcrumb bar), so our own sticky bits sit just under it.
function useHeaderOffset(fallback: number) {
  const [offset, setOffset] = useState(fallback);
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(".sticky.top-0.z-50");
    if (!el) return;
    const update = () => setOffset(Math.round(el.getBoundingClientRect().height));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return offset;
}

// Which section is currently being read.
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    if (els.length === 0) return;
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.boundingClientRect.top);
          else visible.delete(e.target.id);
        }
        if (visible.size > 0) {
          const first = [...visible.entries()].sort((a, b) => a[1] - b[1])[0][0];
          setActive(first);
        }
      },
      { rootMargin: "-190px 0px -60% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

export function PolicyTOC({ items }: { items: TocItem[] }) {
  const active = useActiveSection(items.map((i) => i.id));
  const top = useHeaderOffset(96);
  return (
    <nav aria-label="Table of contents" style={{ top: top + 16 }} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">On this page</p>
      <ul className="mt-3 max-h-[calc(100vh-14rem)] space-y-0.5 overflow-y-auto pr-1">
        {items.map((item) => {
          const on = item.id === active;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={on ? "true" : undefined}
                className={`block rounded-lg border-l-2 px-3 py-1.5 text-sm transition-colors ${
                  on ? "border-accent-500 bg-accent-50 font-semibold text-accent-700" : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-navy-900"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// Compact "jump to" bar for small screens.
export function MobilePolicyTOC({ items }: { items: TocItem[] }) {
  const active = useActiveSection(items.map((i) => i.id));
  const [open, setOpen] = useState(false);
  const top = useHeaderOffset(124);
  const current = items.find((i) => i.id === active) ?? items[0];
  return (
    <div style={{ top }} className="sticky z-30 -mx-4 border-b border-slate-200 bg-white/95 px-4 py-2 backdrop-blur lg:hidden print:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 rounded-lg px-1 py-1.5 text-left text-sm font-medium text-navy-900"
      >
        <span className="truncate">{current?.label}</span>
        <span className="flex-none text-xs text-accent-600">{open ? "Close" : "Jump to"}</span>
      </button>
      {open && (
        <ul className="mt-2 max-h-72 space-y-0.5 overflow-y-auto pb-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm ${item.id === active ? "bg-accent-50 font-semibold text-accent-700" : "text-slate-600 hover:bg-slate-50"}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 print:hidden"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 9V2h12v7" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
      </svg>
      Print or save as PDF
    </button>
  );
}
