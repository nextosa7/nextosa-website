import { GlowOrbs, IconTile } from "../Decor";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { Reveal, Stagger, StaggerItem } from "../motion/primitives";

// Statements here mirror controls that exist in the app; no certifications are claimed.
const items = [
  { icon: "layers" as const, title: "Workspace isolation", text: "Every record belongs to one workspace, and every query is scoped to it." },
  { icon: "users" as const, title: "Role-based permissions", text: "Fine-grained switches per team member, plus limits by WhatsApp number, class or care team." },
  { icon: "key" as const, title: "Encrypted credentials", text: "WhatsApp and other access tokens are stored encrypted, and never shown back." },
  { icon: "log" as const, title: "Audit trails", text: "Sensitive actions are logged. Hospital workspaces get a tamper-evident, hash-chained access log." },
  { icon: "folder" as const, title: "Private patient storage", text: "Clinical documents are encrypted per file and kept in a separate private bucket." },
  { icon: "spark" as const, title: "Safe AI by design", text: "Agents answer from your data, cannot override safety rules, and patient data stays out of AI unless you explicitly allow it." },
];

export default function Security() {
  return (
    <section id="security" className="relative overflow-hidden theme-light py-24 sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_30%,transparent_100%)]" />
      <GlowOrbs layout="right" />
      <Container className="relative">
        <Reveal>
        <SectionHeading eyebrow="Trust" title="Built to keep your business data safe" description="Security is designed into the product, not added on." dark />
        </Reveal>
        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <StaggerItem lift key={i.title} className="rounded-2xl border border-white/10 bg-navy-800/60 p-7">
              <IconTile name={i.icon} tone={i.icon === "spark" ? "emerald" : "blue"} />
              <h3 className="mt-4 text-base font-semibold text-white">{i.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{i.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
