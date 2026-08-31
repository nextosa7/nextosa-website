"use client";

import { useState } from "react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Button from "../Button";
import { siteConfig } from "@/lib/site";

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
    cta: "Select Plan",
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
    cta: "Select Plan",
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
    cta: "Select Plan",
  },
];

function formatInr(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export default function Pricing() {
  const [cycle, setCycle] = useState<Cycle>("monthly");
  const [workspaces, setWorkspaces] = useState<Record<string, number>>(
    Object.fromEntries(plans.map((plan) => [plan.name, 1]))
  );

  const adjustWorkspaces = (planName: string, delta: number) => {
    setWorkspaces((prev) => ({
      ...prev,
      [planName]: Math.max(1, prev[planName] + delta),
    }));
  };

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

                <div className="mt-8">
                  <p
                    className={`text-center text-xs font-semibold uppercase tracking-wider ${
                      plan.highlighted ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Workspaces
                  </p>
                  <div
                    className={`mx-auto mt-2 flex w-fit items-center gap-4 rounded-full border px-2 py-1.5 ${
                      plan.highlighted
                        ? "border-white/15"
                        : "border-slate-200"
                    }`}
                  >
                    <button
                      type="button"
                      aria-label={`Decrease ${plan.name} workspace count`}
                      onClick={() => adjustWorkspaces(plan.name, -1)}
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-base font-semibold transition-colors ${
                        plan.highlighted
                          ? "text-white hover:bg-white/10"
                          : "text-navy-900 hover:bg-slate-100"
                      }`}
                    >
                      −
                    </button>
                    <span
                      className={`w-4 text-center text-sm font-semibold ${
                        plan.highlighted ? "text-white" : "text-navy-900"
                      }`}
                    >
                      {workspaces[plan.name]}
                    </span>
                    <button
                      type="button"
                      aria-label={`Increase ${plan.name} workspace count`}
                      onClick={() => adjustWorkspaces(plan.name, 1)}
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-base font-semibold transition-colors ${
                        plan.highlighted
                          ? "text-white hover:bg-white/10"
                          : "text-navy-900 hover:bg-slate-100"
                      }`}
                    >
                      +
                    </button>
                  </div>
                </div>

                <Button
                  href={siteConfig.signupUrl}
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className={`mt-6 w-full ${
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

        <div className="mt-14 flex justify-center">
          <Button
            href={siteConfig.signupUrl}
            variant="secondary"
            size="lg"
            className="!border-2 !border-navy-900 !bg-transparent !text-navy-900 !shadow-none hover:!bg-navy-900 hover:!text-white"
          >
            Start your free 3-day trial
          </Button>
        </div>
      </Container>
    </section>
  );
}
