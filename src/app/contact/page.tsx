import type { Metadata } from "next";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the NEXTOSA team to learn how our AI-powered CRM and WhatsApp automation platform can help your business.",
};

const contactPoints = [
  {
    title: "Email Us",
    detail: siteConfig.email,
    description: "For general inquiries, support, or partnership requests.",
    href: `mailto:${siteConfig.email}`,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "Response Time",
    detail: "Within 24 hours",
    description: "Our team typically replies to every inquiry within a day.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Book a Demo",
    detail: "Talk to our founder",
    description:
      "Reach out and we'll set up a walkthrough of NEXTOSA tailored to your business.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4"
      />
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-24">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <Container className="relative text-center">
          <Badge>Contact</Badge>
          <h1 className="mx-auto mt-6 max-w-2xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Let&apos;s talk about automating your WhatsApp
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Have a question, want a demo, or ready to get started? Send us a
            message and our team will get back to you shortly.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-navy-900">
                Get in touch
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Whether you&apos;re exploring NEXTOSA for your business or
                already a customer with a question, we&apos;re here to help.
              </p>

              <div className="mt-8 space-y-6">
                {contactPoints.map((point) => (
                  <div key={point.title} className="flex gap-4">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.8}
                      >
                        {point.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">
                        {point.title}
                      </p>
                      {point.href ? (
                        <a
                          href={point.href}
                          className="text-sm font-medium text-accent-600 hover:underline"
                        >
                          {point.detail}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-accent-600">
                          {point.detail}
                        </p>
                      )}
                      <p className="mt-0.5 text-sm text-slate-500">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
