"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import BrowserFrame from "../BrowserFrame";
import { EASE, Reveal } from "../motion/primitives";
import { leadShot, platformPages } from "@/lib/content";

// Zoho-style tabbed suite: pick a part of the platform, see the real screen and what it does.
export default function PlatformTabs() {
  const [active, setActive] = useState(platformPages[0].slug);
  const page = platformPages.find((p) => p.slug === active) ?? platformPages[0];
  const first = page.modules[0];

  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <Container>
        <Reveal>
        <SectionHeading
          eyebrow="The platform"
          title="CRM, ERP, finance and training, on one connected platform"
          description="Every module shares the same customers, catalog and ledger, so nothing is entered twice."
        />
        </Reveal>

        <div role="tablist" className="mt-12 flex flex-wrap justify-center gap-2">
          {platformPages.map((p) => (
            <button
              key={p.slug}
              role="tab"
              aria-selected={p.slug === active}
              onClick={() => setActive(p.slug)}
              className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                p.slug === active ? "text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-900"
              }`}
            >
              {p.slug === active && (
                <motion.span
                  layoutId="platform-tab-pill"
                  className="absolute inset-0 rounded-full bg-navy-900 shadow"
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                />
              )}
              <span className="relative">{p.name}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          className="mt-14 grid items-center gap-12 lg:grid-cols-5"
        >
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">{page.headline}</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">{page.intro}</p>
            <ul className="mt-6 space-y-3">
              {page.modules.slice(0, 4).map((m) => (
                <li key={m.title} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-5 w-5 flex-none text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="font-semibold text-navy-900">{m.title}.</strong> {m.description}</span>
                </li>
              ))}
            </ul>
            <Link href={`/platform/${page.slug}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 hover:text-accent-700">
              Explore {page.name}
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="lg:col-span-3">
            <BrowserFrame shot={first.shot ?? leadShot(page)} showCaption />
          </div>
        </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
