import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NEXTOSA's mission to help businesses automate client communication with AI-powered CRM and WhatsApp automation.",
};

const values = [
  {
    title: "Customer Obsessed",
    description:
      "Every feature we build starts with a real business problem — we work closely with users to solve what actually matters.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21c-4.97-3.14-8-6.7-8-10.5A5.5 5.5 0 0112 6a5.5 5.5 0 018 4.5c0 3.8-3.03 7.36-8 10.5z"
      />
    ),
  },
  {
    title: "Simplicity First",
    description:
      "Powerful AI shouldn't require a technical team. We design NEXTOSA so any business owner can set it up in minutes.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    title: "Trust & Security",
    description:
      "We handle sensitive client data and WhatsApp conversations with strict security practices and full transparency.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Built to Scale",
    description:
      "From solo entrepreneurs to growing teams, NEXTOSA is engineered to grow with your business without breaking a sweat.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 py-24 sm:py-28">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <Container className="relative text-center">
          <Badge>About NEXTOSA</Badge>
          <h1 className="mx-auto mt-6 max-w-2xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Helping businesses build better client relationships, powered by AI
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
            NEXTOSA was born from a simple observation: businesses were
            drowning in WhatsApp messages, missed follow-ups, and scattered
            client information. We built the CRM and automation layer to fix
            that.
          </p>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <Badge>Our Mission</Badge>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Give every business an AI teammate for client communication
              </h2>
              <p className="mt-6 text-lg leading-7 text-slate-600">
                Millions of businesses run their entire customer relationship
                through WhatsApp — but without the tools to manage it at
                scale. NEXTOSA&apos;s mission is to give any business, regardless
                of size or technical skill, an AI-powered CRM that automates
                the busywork of client communication: answering questions,
                sending reminders, organizing contacts, and storing documents.
              </p>
              <p className="mt-4 text-lg leading-7 text-slate-600">
                We believe automation should feel personal, not robotic. Every
                feature we ship is designed to make your business more
                responsive and more human — not less.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-10 ring-1 ring-slate-200">
              <blockquote className="text-xl font-medium leading-8 text-navy-900">
                &ldquo;We started NEXTOSA because we saw business owners
                losing clients not from bad service, but from slow replies
                and disorganized follow-ups. AI and WhatsApp automation can
                fix that — for every business, not just the big ones.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-700 text-lg font-bold text-white">
                  HS
                </div>
                <div>
                  <p className="font-semibold text-navy-900">
                    {siteConfig.founder}
                  </p>
                  <p className="text-sm text-slate-500">
                    Founder, {siteConfig.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="What We Believe"
            title="The principles behind everything we build"
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    {value.icon}
                  </svg>
                </div>
                <h3 className="mt-5 text-base font-semibold text-navy-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container className="max-w-3xl text-center">
          <Badge>Founder</Badge>
          <div className="mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-700 text-2xl font-bold text-white">
            HS
          </div>
          <h2 className="mt-6 text-2xl font-bold text-navy-900">
            {siteConfig.founder}
          </h2>
          <p className="mt-1 text-sm font-medium text-accent-600">
            Founder &amp; CEO, {siteConfig.name}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600">
            Harsh founded NEXTOSA to help businesses of every size turn
            WhatsApp into a scalable, AI-powered customer relationship
            channel — combining practical CRM tools with automation that
            actually gets used.
          </p>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy-900 py-20">
        <div className="absolute inset-0 bg-radial-glow" />
        <Container className="relative text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Want to see NEXTOSA in action?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-slate-300">
            Get in touch and we&apos;ll walk you through how NEXTOSA can
            automate your WhatsApp and client management.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
