import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Button from "../Button";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "For solo business owners getting started with WhatsApp automation.",
    features: [
      "1 WhatsApp Business number",
      "Up to 500 contacts",
      "AI customer support (basic)",
      "WhatsApp reminders",
      "5 message templates",
      "Email support",
    ],
    highlighted: false,
    cta: "Start Free Trial",
  },
  {
    name: "Growth",
    price: "$79",
    period: "/month",
    description: "For growing teams that need full CRM and AI automation.",
    features: [
      "3 WhatsApp Business numbers",
      "Up to 5,000 contacts",
      "AI customer support (advanced)",
      "AI Q&A knowledge base",
      "Document storage",
      "Unlimited templates",
      "Away Mode automation",
      "Priority support",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For larger organizations with advanced volume and compliance needs.",
    features: [
      "Unlimited WhatsApp numbers",
      "Unlimited contacts",
      "Custom AI training",
      "Dedicated account manager",
      "Advanced analytics",
      "Custom integrations",
      "SLA & onboarding support",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with your business"
          description="Start free for 14 days. No credit card required. Upgrade, downgrade, or cancel anytime."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
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
                  Most Popular
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
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className={
                      plan.highlighted ? "text-slate-400" : "text-slate-500"
                    }
                  >
                    {plan.period}
                  </span>
                )}
              </div>

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
          ))}
        </div>
      </Container>
    </section>
  );
}
