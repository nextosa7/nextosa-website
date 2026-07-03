import Container from "../Container";
import SectionHeading from "../SectionHeading";

const features = [
  {
    title: "AI Customer Support",
    description:
      "Your AI agent answers customer questions on WhatsApp instantly, 24/7 — trained on your business so replies sound like you, not a generic bot.",
    span: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8-1.09 0-2.13-.17-3.09-.48L3 21l1.6-4.28C3.6 15.34 3 13.73 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
  },
  {
    title: "Client Management",
    description:
      "A complete CRM that keeps every contact, conversation, and deal organized in one place — no more spreadsheets or scattered chats.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4"
      />
    ),
  },
  {
    title: "WhatsApp Reminders",
    description:
      "Automatically send appointment reminders, payment nudges, and follow-ups so nothing slips through the cracks.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .53-.21 1.04-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    ),
  },
  {
    title: "Document Storage",
    description:
      "Securely store contracts, invoices, and client files, and retrieve any document instantly from your dashboard or via WhatsApp.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
  },
  {
    title: "AI Q&A Knowledge Base",
    description:
      "Upload your docs and FAQs — NEXTOSA's AI learns your business and answers client questions accurately, without you lifting a finger.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.663 17h4.673M12 3a6 6 0 00-6 6c0 2.093 1.132 3.393 2.09 4.393.545.567.91 1.16.91 1.607v.5a1 1 0 001 1h4a1 1 0 001-1v-.5c0-.447.365-1.04.91-1.607C15.868 12.393 17 11.093 17 9a6 6 0 00-6-6z"
      />
    ),
  },
  {
    title: "Template Management",
    description:
      "Create and reuse Meta-approved WhatsApp message templates for broadcasts, receipts, and updates — fully compliant and ready to send.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 6a2 2 0 012-2h12a2 2 0 012 2M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6m-9 5h4m-4 4h4"
      />
    ),
  },
  {
    title: "Away Mode",
    description:
      "Stepping away? Flip on Away Mode and let your AI assistant handle every incoming conversation until you're back online.",
    span: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to run client communication on autopilot"
          description="NEXTOSA brings your CRM and WhatsApp together with AI at the core — so your business responds faster, stays organized, and never drops a client."
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
