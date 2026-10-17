import Container from "../Container";
import SectionHeading from "../SectionHeading";

const pillars = [
  {
    name: "Core ERP",
    description:
      "Centralized operations, resources, and day-to-day workflows that keep every part of your business connected.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5"
      />
    ),
  },
  {
    name: "CRM",
    description:
      "Track leads, manage client relationships, and follow up automatically across the entire customer lifecycle.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-1a4 4 0 00-4-4h-1m-4-3a4 4 0 100-8 4 4 0 000 8zm-6 7v-1a4 4 0 014-4h2a4 4 0 014 4v1H3z"
      />
    ),
  },
  {
    name: "LMS (Learning Management)",
    description:
      "Deliver training, courses, and certifications to staff, students, or clients, built directly into your workspace.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.42A12.083 12.083 0 0112 21a12.083 12.083 0 01-6.16-10.42L12 14zm0 0l-9-5m9 5v7"
      />
    ),
  },
  {
    name: "FMS (Financial Management)",
    description:
      "Invoicing, expense tracking, and financial reporting that keeps your books accurate in real time.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 9v1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    name: "Advanced Automation Engine",
    description:
      "Build custom workflows and triggers that handle the busywork automatically, from reminders to approvals.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    name: "Integration Platform",
    description:
      "Connect NEXTOSA with the tools you already use — payments, WhatsApp, calendars, and more.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.828 10.172a4 4 0 010 5.656l-2.828 2.828a4 4 0 11-5.656-5.656l1.415-1.414m5.656-5.656l1.414-1.415a4 4 0 115.656 5.656l-2.828 2.828a4 4 0 01-5.656 0"
      />
    ),
  },
  {
    name: "Team & Access Management",
    description:
      "Role-based permissions and granular access controls so every team member sees exactly what they need.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    ),
  },
  {
    name: "Multiple Stakeholder Portals",
    description:
      "Dedicated portals for clients, staff, vendors, and partners, each tailored to their role in your business.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-1a4 4 0 00-4-4h-1M9 20H4v-1a4 4 0 014-4h1m0-3a4 4 0 118 0 4 4 0 01-8 0zm-6 1a3 3 0 106 0 3 3 0 00-6 0zm12 0a3 3 0 106 0 3 3 0 00-6 0z"
      />
    ),
  },
];

export default function PlatformStack() {
  return (
    <section id="platform" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The Full Stack"
          title="Everything you need to run your business, in one place."
          description="NEXTOSA isn't a single tool bolted onto others — it's a complete operating system built from eight core pillars working together."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.name}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-xl hover:shadow-accent-500/10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  {pillar.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-base font-semibold text-navy-900">
                {pillar.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
