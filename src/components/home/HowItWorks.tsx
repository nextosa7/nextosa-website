import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { Reveal, Stagger, StaggerItem } from "../motion/primitives";

const steps = [
  {
    number: "01",
    title: "Pick your industry",
    description:
      "Choose your business type and NEXTOSA sets up the right modules, with demo data to explore before you add your own.",
  },
  {
    number: "02",
    title: "Connect your channels",
    description:
      "Link WhatsApp through the official Business API, connect Gmail, and add the chat widget to your website.",
  },
  {
    number: "03",
    title: "Train your AI agents",
    description:
      "Add your catalog, prices and knowledge-base articles. Sales, Support and Marketing agents answer from them.",
  },
  {
    number: "04",
    title: "Run it from one place",
    description:
      "Invoices, conversations, automations, staff and reports live in one dashboard, and you can step in on any chat.",
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
        <Reveal>
        <SectionHeading
          eyebrow="How It Works"
          title="From sign-up to AI-run follow-ups in four steps"
          description="No developers needed — NEXTOSA is built for business owners to set up themselves."
          dark
        />
        </Reveal>

        <Stagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" gap={0.12}>
          {steps.map((step, i) => (
            <StaggerItem lift key={step.number} className="relative">
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
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
