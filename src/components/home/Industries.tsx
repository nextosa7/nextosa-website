import Container from "../Container";
import SectionHeading from "../SectionHeading";

const industries = [
  {
    name: "CA Firms",
    description:
      "Compliance calendars, client billing, and document workflows built for practice management.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17v-2a4 4 0 014-4h4m0 0l-3-3m3 3l-3 3M5 7h4m-4 4h4m-4 4h4m8 6H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v4"
      />
    ),
  },
  {
    name: "Real Estate",
    description:
      "Property listings, lead follow-ups, and site-visit scheduling on autopilot.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l2-2m0 0l7-7 7 7m-9-7v18m9-9l2 2m-2-2v9a1 1 0 01-1 1h-3m-6 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1m-6 0h6"
      />
    ),
  },
  {
    name: "Retail & Product Business",
    description:
      "Inventory-aware billing, order tracking, and automated customer re-engagement.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    ),
  },
  {
    name: "Salon & Spa",
    description:
      "Appointment booking, staff schedules, and automated client reminders.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 21a4 4 0 01-4-4V9a4 4 0 014-4m0 16a4 4 0 004-4V9a4 4 0 00-4-4m0 16h10a4 4 0 004-4V9a4 4 0 00-4-4H7m6 8a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
  {
    name: "Healthcare & Clinics",
    description:
      "Patient records, appointment reminders, and secure document storage.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-3-3v6m8-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    name: "Schools & Colleges",
    description:
      "Fee management, parent communication, and admissions tracking.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.42A12.083 12.083 0 0112 21a12.083 12.083 0 01-6.16-10.42L12 14zm0 0l-9-5m9 5v7"
      />
    ),
  },
  {
    name: "Restaurants & Food Service",
    description:
      "Order updates, table reservations, and staff shift management.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3v18m0-18c0 3 2 3 2 6s-2 3-2 6m18-12v18M12 3v18m-2-9h4"
      />
    ),
  },
  {
    name: "Professional Services",
    description:
      "Client onboarding, project billing, and deadline tracking.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-5 9l2 2 4-4"
      />
    ),
  },
  {
    name: "Manufacturers",
    description:
      "Job orders, vendor communication, and production compliance tracking.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 5.5-3 3-3-3L8 4z"
      />
    ),
  },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Built For Your Industry"
          title="One platform, tailored to how your industry actually works"
          description="NEXTOSA isn't a generic chatbot — every module, workflow, and automation is purpose-built for the way these 9 industries run their business."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.name}
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
                  {industry.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-base font-semibold text-navy-900">
                {industry.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
