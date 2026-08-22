"use client";

import { useState } from "react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Button from "../Button";

type Cycle = "monthly" | "quarterly" | "yearly";

const cycles: { id: Cycle; label: string }[] = [
  { id: "monthly", label: "Monthly" },
  { id: "quarterly", label: "3-Months (Save 10%)" },
  { id: "yearly", label: "Yearly (2 Months Free)" },
];

const plans = [
  {
    name: "Starter",
    description: "For solo business owners getting started with NEXTOSA.",
    pricing: {
      monthly: { perMonth: 1499, billedNote: null },
      quarterly: { perMonth: 1349, billedNote: "Billed ₹4,047 every 3 months" },
      yearly: { perMonth: 1249, billedNote: "Billed ₹14,990 per year" },
    },
    features: [
      "1 team member",
      "1 Workspace",
      "100 WhatsApp messages/mo",
      "500,000 AI tokens/mo",
      "Up to 50 documents",
      "500MB document storage",
      "Core CRM & WhatsApp automation",
    ],
    highlighted: false,
    cta: "Start Free Trial",
  },
  {
    name: "Growth",
    description: "For growing teams that need more messages, tokens, and automation.",
    pricing: {
      monthly: { perMonth: 3999, billedNote: null },
      quarterly: { perMonth: 3599, billedNote: "Billed ₹10,797 every 3 months" },
      yearly: { perMonth: 3333, billedNote: "Billed ₹39,990 per year" },
    },
    features: [
      "5 team members",
      "1 Workspace",
      "1,000 WhatsApp messages/mo",
      "2,000,000 AI tokens/mo",
      "Up to 500 documents",
      "5GB document storage",
      "Priority support",
      "Advanced analytics",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    description: "For larger teams with high message and document volume.",
    pricing: {
      monthly: { perMonth: 8999, billedNote: null },
      quarterly: { perMonth: 8099, billedNote: "Billed ₹24,297 every 3 months" },
      yearly: { perMonth: 7499, billedNote: "Billed ₹89,990 per year" },
    },
    features: [
      "15 team members",
      "1 Workspace",
      "3,000 WhatsApp messages/mo",
      "5,000,000 AI tokens/mo",
      "Up to 2,000 documents",
      "20GB document storage",
      "Dedicated support",
      "Custom integrations",
    ],
    highlighted: false,
    cta: "Start Free Trial",
  },
];

function formatInr(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export default function Pricing() {
  const [cycle, setCycle] = useState<Cycle>("monthly");

  return (
    <section id="pricing" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with your business"
          description="Start free for 3 days. No credit card required. Upgrade, downgrade, or cancel anytime."
        />

        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            {cycles.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCycle(c.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                  cycle === c.id
                    ? "bg-navy-900 text-white shadow"
                    : "text-slate-600 hover:text-navy-900"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => {
            const { perMonth, billedNote } = plan.pricing[cycle];
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-navy-900 shadow-2xl shadow-navy-900/30 ring-1 ring-accent-500/50"
                    : "bg-white ring-1 ring-slate-200"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                    Most popular
                  </span>
                )}

                <h3
                  className={`text-lg font-semibold ${
                    plan.highlighted ? "text-white" : "text-navy-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlighted ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-extrabold tracking-tight ${
                      plan.highlighted ? "text-white" : "text-navy-900"
                    }`}
                  >
                    {formatInr(perMonth)}
                  </span>
                  <span
                    className={
                      plan.highlighted ? "text-slate-400" : "text-slate-500"
                    }
                  >
                    /mo
                  </span>
                </div>
                <p
                  className={`mt-1 text-xs ${
                    plan.highlighted ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  {billedNote ?? "Billed monthly"}
                </p>

                <ul className="mt-8 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`mt-0.5 h-5 w-5 flex-none ${
                          plan.highlighted ? "text-accent-400" : "text-accent-600"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          plan.highlighted ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className={`mt-8 w-full ${
                    !plan.highlighted
                      ? "!bg-navy-900 !text-white hover:!bg-navy-800"
                      : ""
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
