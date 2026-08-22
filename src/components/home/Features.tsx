import Container from "../Container";
import SectionHeading from "../SectionHeading";

const features = [
  {
    title: "Core Operations & Billing",
    description:
      "Run invoicing, payments, and day-to-day operations from one dashboard — built to match how your industry actually bills and works.",
    span: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 9v1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Staff & Job Management",
    description:
      "Assign jobs, track staff schedules, and manage your team's workload from a built-in job board — no separate HR tool required.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m-4 6h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z"
      />
    ),
  },
  {
    title: "Compliance Calendars",
    description:
      "Never miss a filing, renewal, or regulatory deadline — NEXTOSA tracks industry-specific compliance dates and alerts you automatically.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "AI Business Insights",
    description:
      "Get AI-generated reports on revenue, client activity, and staff performance — the insights you need to make decisions, without the spreadsheets.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
  },
  {
    title: "WhatsApp Client Automation",
    description:
      "Your AI agent answers client questions and sends reminders on WhatsApp instantly, 24/7 — trained on your business so replies sound like you.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8-1.09 0-2.13-.17-3.09-.48L3 21l1.6-4.28C3.6 15.34 3 13.73 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
  },
  {
    title: "Secure Document Vault",
    description:
      "Securely store contracts, invoices, and client files, and retrieve any document instantly from your dashboard or via WhatsApp.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    ),
  },
  {
    title: "Industry-Specific Modules",
    description:
      "From CA firms to salons to schools, NEXTOSA ships with dedicated workflows for your industry — not a one-size-fits-all chatbot.",
    span: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5"
      />
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Platform"
          title="One operating system for every part of your business"
          description="From billing and staff management to compliance tracking and AI-powered WhatsApp automation — NEXTOSA replaces the patchwork of tools most businesses juggle."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-xl hover:shadow-accent-500/10 ${
                feature.span ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-navy-900">
                {feature.title}
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
