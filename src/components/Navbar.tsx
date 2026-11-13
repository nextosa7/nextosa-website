"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import Button from "./Button";
import { siteConfig } from "@/lib/site";
import { industryPages, platformPages } from "@/lib/content";

type MenuKey = "platform" | "industries" | null;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);
  const ref = useRef<HTMLElement>(null);

  // Close the mega menu on outside click or Escape.
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setMenu(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenu(null);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const close = () => {
    setMenu(null);
    setOpen(false);
  };

  const topLink = "text-sm font-medium text-slate-300 transition-colors hover:text-white";
  const trigger = (key: Exclude<MenuKey, null>, label: string) => (
    <button
      type="button"
      aria-expanded={menu === key}
      onClick={() => setMenu(menu === key ? null : key)}
      onMouseEnter={() => setMenu(key)}
      className={`flex items-center gap-1 ${topLink} ${menu === key ? "text-white" : ""}`}
    >
      {label}
      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${menu === key ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );

  return (
    <header ref={ref} className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/90 backdrop-blur-lg" onMouseLeave={() => setMenu(null)}>
      <Container>
        <nav className="flex h-18 items-center justify-between py-4">
          <Link href="/" aria-label="NEXTOSA home" onClick={close} className="mr-6 shrink-0">
            <Logo />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {trigger("platform", "Platform")}
            {trigger("industries", "Industries")}
            <Link href="/platform/ai-agents" className={topLink} onMouseEnter={() => setMenu(null)}>AI Agents</Link>
            <Link href="/#pricing" className={topLink} onMouseEnter={() => setMenu(null)}>Pricing</Link>
            <Link href="/docs" className={topLink} onMouseEnter={() => setMenu(null)}>Docs</Link>
            <Link href="/security" className={topLink} onMouseEnter={() => setMenu(null)}>Security</Link>
            <Link href="/compare" className={topLink} onMouseEnter={() => setMenu(null)}>Why NEXTOSA</Link>
            <Link href="/about" className={topLink} onMouseEnter={() => setMenu(null)}>About</Link>
            <Link href="/contact" className={topLink} onMouseEnter={() => setMenu(null)}>Contact</Link>
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <Link href={siteConfig.loginUrl} className={topLink}>Login</Link>
            <Button href={siteConfig.signupUrl} size="md">Start free trial</Button>
          </div>

          <button className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </nav>
      </Container>

      {/* Desktop mega menu */}
      <AnimatePresence>
      {menu && (
        <motion.div
          key="mega"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 top-full hidden border-b border-white/10 bg-navy-900 shadow-2xl shadow-black/40 lg:block"
        >
          <Container className="py-8">
            {menu === "platform" ? (
              <div className="grid grid-cols-4 gap-x-8 gap-y-6">
                {platformPages.map((p) => (
                  <Link key={p.slug} href={`/platform/${p.slug}`} onClick={close} className="group rounded-xl p-3 transition-colors hover:bg-white/5">
                    <p className="text-sm font-semibold text-white group-hover:text-accent-300">{p.name}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{p.short}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-5 gap-x-6 gap-y-5">
                {industryPages.map((p) => (
                  <Link key={p.slug} href={`/industries/${p.slug}`} onClick={close} className="group rounded-xl p-3 transition-colors hover:bg-white/5">
                    <p className="text-sm font-semibold text-white group-hover:text-accent-300">{p.name}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{p.short}</p>
                  </Link>
                ))}
              </div>
            )}
          </Container>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="mobile"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-h-[80vh] overflow-y-auto border-t border-white/10 bg-navy-900 lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Platform</p>
            {platformPages.map((p) => (
              <Link key={p.slug} href={`/platform/${p.slug}`} onClick={close} className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white">{p.name}</Link>
            ))}
            <p className="px-3 pt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Industries</p>
            {industryPages.map((p) => (
              <Link key={p.slug} href={`/industries/${p.slug}`} onClick={close} className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white">{p.name}</Link>
            ))}
            <p className="px-3 pt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Company</p>
            {[["/#pricing", "Pricing"], ["/docs", "Documentation"], ["/ai-tokens", "AI tokens"], ["/plan-limits", "Plan limits"], ["/security", "Security"], ["/roles-and-permissions", "Roles & permissions"], ["/compare", "Why NEXTOSA"], ["/about", "About"], ["/contact", "Contact"]].map(([href, label]) => (
              <Link key={href} href={href} onClick={close} className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white">{label}</Link>
            ))}
            <Link href={siteConfig.loginUrl} onClick={close} className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white">Login</Link>
            <div className="mt-2">
              <Button href={siteConfig.signupUrl} size="md" className="w-full">Start free trial</Button>
            </div>
          </Container>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
}
