"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { EASE, Reveal } from "../motion/primitives";
import { homeFaqs as faqs } from "@/lib/homeFaqs";



export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container className="max-w-4xl">
        <Reveal>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about NEXTOSA — from running your business operations to how WhatsApp automation fits in."
        />
        </Reveal>

        <Reveal className="mt-14 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="px-6">
                <button
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-navy-900 sm:text-base">
                    {faq.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 flex-none text-accent-600 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-6 text-slate-600 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
