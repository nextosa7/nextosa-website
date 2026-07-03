import Container from "../Container";
import SectionHeading from "../SectionHeading";

const steps = [
  {
    number: "01",
    title: "Connect WhatsApp",
    description:
      "Link your WhatsApp Business number to NEXTOSA in minutes using the official WhatsApp Business API.",
  },
  {
    number: "02",
    title: "Train your AI",
    description:
      "Upload documents, FAQs, and client details. Your AI assistant learns your business instantly.",
  },
  {
    number: "03",
    title: "Automate & Engage",
    description:
      "Set up reminders, templates, and Away Mode so replies and follow-ups happen automatically.",
  },
  {
    number: "04",
    title: "Manage from one CRM",
    description:
      "Track every client, conversation, and document from a single, unified NEXTOSA dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-navy-900 py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_30%,transparent_100%)]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="How It Works"
          title="From setup to automation in four simple steps"
          description="No developers, no complicated integrations — NEXTOSA is built for business owners to set up themselves."
          dark
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-800/60 p-6 backdrop-blur">
                <span className="text-4xl font-black text-accent-500/40">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-px w-8 -translate-y-1/2 translate-x-full bg-gradient-to-r from-accent-500/60 to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
