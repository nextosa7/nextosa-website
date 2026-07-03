import Container from "../Container";
import SectionHeading from "../SectionHeading";

const testimonials = [
  {
    quote:
      "We used to lose track of client follow-ups constantly. Now NEXTOSA's AI handles reminders and FAQs on WhatsApp automatically — it feels like we hired a full-time support agent.",
    name: "Priya M.",
    role: "Salon Owner",
  },
  {
    quote:
      "The AI Q&A feature is incredible. It answers pricing and availability questions from our documents so accurately that clients think a human replied instantly.",
    name: "Arjun K.",
    role: "Real Estate Consultant",
  },
  {
    quote:
      "Away Mode alone is worth it. I can step away from my shop and know every WhatsApp message still gets a smart, on-brand reply.",
    name: "Fatima R.",
    role: "Boutique Retailer",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Businesses run smoother with NEXTOSA"
          description="See how teams use NEXTOSA to automate WhatsApp and manage clients without extra headcount."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8"
            >
              <div className="flex gap-1 text-accent-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-6 text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-700 text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
