"use client";

import { useState } from "react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";

const faqs = [
  {
    question: "Does NEXTOSA use the official WhatsApp Business API?",
    answer:
      "Yes. NEXTOSA integrates with the official WhatsApp Business Platform (Meta) to send and receive messages, ensuring your automation stays compliant with WhatsApp's messaging policies.",
  },
  {
    question: "Do I need my own WhatsApp Business account?",
    answer:
      "You'll need a WhatsApp Business account and a phone number to connect. Our team guides you through registering and verifying your number on the WhatsApp Business Platform during onboarding.",
  },
  {
    question: "Is my client data secure?",
    answer:
      "Yes. All data is encrypted in transit and at rest, stored on secure cloud infrastructure, and never sold to third parties. See our Privacy Policy for full details on how we handle and protect your data.",
  },
  {
    question: "How does the AI learn about my business?",
    answer:
      "You upload documents, FAQs, price lists, or policies, and NEXTOSA's AI uses them to answer client questions accurately in your tone — without writing a single line of code.",
  },
  {
    question: "Can I cancel or change plans anytime?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel your subscription at any time from your account settings, with no long-term lock-in contracts.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, every plan includes a 14-day free trial with no credit card required, so you can test AI automation on your real WhatsApp number before committing.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about NEXTOSA and how it works with WhatsApp."
        />

        <div className="mt-14 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
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
                {isOpen && (
                  <p className="pb-5 text-sm leading-6 text-slate-600 sm:text-base">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
