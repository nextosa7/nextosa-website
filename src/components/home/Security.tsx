import Container from "../Container";
import SectionHeading from "../SectionHeading";

// Statements here mirror controls that exist in the app; no certifications are claimed.
const items = [
  { title: "Workspace isolation", text: "Every record belongs to one workspace, and every query is scoped to it." },
  { title: "Role-based permissions", text: "Fine-grained switches per team member, plus limits by WhatsApp number, class or care team." },
  { title: "Encrypted credentials", text: "WhatsApp and other access tokens are stored encrypted, and never shown back." },
  { title: "Audit trails", text: "Sensitive actions are logged. Hospital workspaces get a tamper-evident, hash-chained access log." },
  { title: "Private patient storage", text: "Clinical documents are encrypted per file and kept in a separate private bucket." },
  { title: "Safe AI by design", text: "Agents answer from your data, cannot override safety rules, and patient data stays out of AI unless you explicitly allow it." },
];

export default function Security() {
  return (
    <section id="security" className="relative overflow-hidden bg-navy-900 py-24 sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_30%,transparent_100%)]" />
      <Container className="relative">
        <SectionHeading eyebrow="Trust" title="Built to keep your business data safe" description="Security is designed into the product, not added on." dark />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-white/10 bg-navy-800/60 p-7">
              <h3 className="text-base font-semibold text-white">{i.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{i.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
