import type { ReactNode } from "react";
import Container from "@/components/Container";
import { Reveal } from "@/components/motion/primitives";
import { siteConfig } from "@/lib/site";

// Highlighted phrase, in the style of a marker pen. box-decoration-clone keeps the highlight
// unbroken when the phrase wraps over several lines.
function Mark({ children }: { children: ReactNode }) {
  return <mark className="box-decoration-clone rounded-sm bg-accent-100/90 px-1 text-inherit">{children}</mark>;
}

type VisualKind = "founder" | "climb" | "rise" | "platform";

interface Chapter {
  visual: VisualKind;
  caption: string;
  captionSub: string;
  heading: string;
  quote: string;
  paragraphs: string[];
}

const chapters: Chapter[] = [
  {
    visual: "founder",
    caption: siteConfig.founder,
    captionSub: `Founder, ${siteConfig.name}`,
    heading: "Built for the businesses that build our world.",
    quote:
      "They weren't resting. They were drowning in manual WhatsApp follow-ups, overdue invoices and software that refused to talk to each other.",
    paragraphs: [
      "Growing up in Rajasthan, our founder, Harsh Soni, saw something that never left him. Clinic doctors, school principals, shop owners, restaurant families, CA firms, salon artists: incredibly talented people who gave everything to their work. But when the shutters came down, their day was not over. It was just changing shifts.",
      "Late at night they were still chasing messages, matching ledgers, hunting for overdue payments and switching between five different tools. Big enterprise software was priced for companies they would never be. Cheap tools broke the moment real life got complicated.",
    ],
  },
  {
    visual: "climb",
    caption: "The climb",
    captionSub: "One platform, built from scratch",
    heading: "The mountain nobody warns you about.",
    quote: "Failed prototypes. Stubborn APIs. Sleepless nights. The easiest choice was to give up.",
    paragraphs: [
      "Harsh made a decision: build the system these people deserved, and build all of it. Not just a CRM. Not just a WhatsApp bot. One connected platform where customers, billing, accounting, inventory, teams, training and AI agents work as a single brain, with modules that speak the language of each industry.",
      "Nobody tells you how heavy that mountain is. There were nights that turned into mornings with the code still open, prototypes that failed after weeks of work, and days when exhaustion was louder than motivation. More than once the easiest answer was to stop and settle for something smaller, because a platform this big felt too big for a founder starting out in Rajasthan.",
    ],
  },
  {
    visual: "rise",
    caption: "Never giving up",
    captionSub: "Every fall taught us something",
    heading: "He fell. He got back up.",
    quote: "Every failed prototype became a lesson. Every sleepless night became another brick.",
    paragraphs: [
      "He fell. He got back up. He fell again, and he learned something every single time. Every broken integration became a stronger foundation, and every long night became another brick in a platform that would not be shaken.",
      "Because he kept remembering who he was building it for: the doctor who deserved to go home to her family, the teacher who should not be doing fee reminders at midnight, the owner who started a business to live a life, not to drown in admin.",
    ],
  },
  {
    visual: "platform",
    caption: `${siteConfig.name} today`,
    captionSub: "One AI operating system",
    heading: "Today, a complete AI operating system.",
    quote: "We went through the struggle so that our clients never have to.",
    paragraphs: [
      "That relentless refusal to quit is why NEXTOSA exists today. What began as an answer to messy WhatsApp follow-ups has grown into a complete AI operating system: CRM, ERP, finance and accounting, training, and AI Sales, Support and Marketing agents working across WhatsApp, email and your website, with purpose-built modules for 10 industries.",
      "And this is only the beginning. We know exactly how hard the road is, because we walked it first. Every feature we ship carries one promise: your business deserves a system as determined as you are.",
    ],
  },
];

// A capsule (Zoho-style) with a gradient and a themed emblem. Each variant is a small self-contained
// SVG illustration in the brand palette; no photo is used, so a real portrait can replace the first
// one later without touching the layout.
function StoryVisual({ kind, id }: { kind: VisualKind; id: string }) {
  return (
    <svg viewBox="0 0 440 460" role="img" aria-label="" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-cap`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#34d399" />
          <stop offset="0.55" stopColor="#16a863" />
          <stop offset="1" stopColor="#bef264" />
        </linearGradient>
      </defs>
      {/* Capsule, rotated like the reference. */}
      <g transform="rotate(-45 220 250)">
        <rect x="-10" y="150" width="440" height="200" rx="100" fill={`url(#${id}-cap)`} />
      </g>
      <circle cx="372" cy="86" r="22" fill="none" stroke="#e11d48" strokeWidth="3" />
      <path d="M44 372l12-12m0 12l-12-12" stroke="#0a2e22" strokeWidth="3" strokeLinecap="round" />
      <path d="M392 392h26m-13-13v26" stroke="#e11d48" strokeWidth="4" strokeLinecap="round" />

      {kind === "founder" && (
        <g>
          <circle cx="215" cy="190" r="118" fill="#0f2f25" />
          <circle cx="215" cy="190" r="118" fill="none" stroke="#fff" strokeWidth="10" />
          <text x="215" y="224" textAnchor="middle" fontSize="92" fontWeight="800" fill="#fff" fontFamily="inherit" letterSpacing="-2">
            HS
          </text>
          <path d="M100 330c20-70 60-96 115-96s95 26 115 96" fill="#0f2f25" stroke="#fff" strokeWidth="10" strokeLinejoin="round" />
        </g>
      )}

      {kind === "climb" && (
        <g>
          <path d="M40 360L170 150l60 90 50-70 120 190z" fill="#0f2f25" />
          <path d="M170 150l30 45-20-8-18 20-20-32z" fill="#fff" />
          <path d="M280 170l25 40-22-6-14 18z" fill="#fff" />
          <path d="M170 150V96" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
          <path d="M170 96l46 14-46 14z" fill="#e11d48" />
          <path d="M60 372c40-8 80-40 110-100" fill="none" stroke="#fff" strokeWidth="5" strokeDasharray="2 12" strokeLinecap="round" />
        </g>
      )}

      {kind === "rise" && (
        <g>
          <circle cx="215" cy="170" r="70" fill="#fde68a" />
          <path d="M30 360h380" stroke="#0f2f25" strokeWidth="6" strokeLinecap="round" />
          <path d="M60 360v-34h60v-34h60v-34h60v-34h60v-34h60" fill="none" stroke="#fff" strokeWidth="14" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M60 360v-34h60v-34h60v-34h60v-34h60v-34h60" fill="none" stroke="#0f2f25" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M300 130l20-34 20 34" fill="none" stroke="#e11d48" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}

      {kind === "platform" && (
        <g>
          <circle cx="215" cy="210" r="124" fill="#fff" />
          <svg x="130" y="120" width="170" height="190" viewBox="92 30 116 132">
            <path d="M112 142V50L188 142V50" fill="none" stroke="#0f2f25" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
            <g fill="#e11d2e">
              <circle cx="112" cy="142" r="15" />
              <circle cx="112" cy="50" r="15" />
              <circle cx="188" cy="142" r="15" />
              <circle cx="188" cy="50" r="15" />
            </g>
            <g fill="#fff">
              <circle cx="112" cy="142" r="5" />
              <circle cx="112" cy="50" r="5" />
              <circle cx="188" cy="142" r="5" />
              <circle cx="188" cy="50" r="5" />
            </g>
          </svg>
        </g>
      )}
    </svg>
  );
}

// Flat skyline illustration: the industries NEXTOSA serves, with a big "10" like a milestone banner.
function SkylineBanner() {
  return (
    <svg
      viewBox="0 0 1200 260"
      className="mx-auto block h-auto w-full max-w-6xl"
      role="img"
      aria-label="Illustration of the ten industries NEXTOSA is built for"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Clinic */}
      <rect x="40" y="110" width="120" height="110" fill="#ffe0e5" stroke="#0a2e22" strokeWidth="2" />
      <rect x="86" y="132" width="28" height="8" fill="#e11d48" />
      <rect x="96" y="122" width="8" height="28" fill="#e11d48" />
      <rect x="64" y="170" width="20" height="50" fill="#fff" stroke="#0a2e22" strokeWidth="2" />
      <rect x="116" y="170" width="20" height="50" fill="#fff" stroke="#0a2e22" strokeWidth="2" />
      {/* School */}
      <path d="M190 220V120l70-44 70 44v100z" fill="#aaf0cc" stroke="#0a2e22" strokeWidth="2" strokeLinejoin="round" />
      <rect x="244" y="168" width="32" height="52" fill="#fff" stroke="#0a2e22" strokeWidth="2" />
      <path d="M260 76V46" stroke="#0a2e22" strokeWidth="2" />
      <path d="M260 46l24 8-24 8z" fill="#e11d48" />
      {/* Paper plane (WhatsApp / send) */}
      <g transform="translate(-86 0)">
        <path d="M352 150c30-60 80-82 140-80" fill="none" stroke="#0a2e22" strokeWidth="2" strokeDasharray="3 7" strokeLinecap="round" />
        <path d="M492 70l-34 4 10 10-4 18 14-12 18 4z" fill="#16a863" stroke="#0a2e22" strokeWidth="2" strokeLinejoin="round" />
      </g>
      {/* Big 10 */}
      <text x="600" y="214" textAnchor="middle" fontSize="214" fontWeight="800" fill="#e11d48" fontFamily="inherit" letterSpacing="-6">
        10
      </text>
      <path d="M744 96h30m-15-15v30" stroke="#16a863" strokeWidth="8" strokeLinecap="round" />
      {/* Restaurant */}
      <path d="M800 220v-70l60-44 60 44v70z" fill="#fde68a" stroke="#0a2e22" strokeWidth="2" strokeLinejoin="round" />
      <rect x="840" y="170" width="36" height="50" fill="#fff" stroke="#0a2e22" strokeWidth="2" />
      <rect x="884" y="156" width="24" height="24" fill="#fff" stroke="#0a2e22" strokeWidth="2" />
      {/* Shop / office */}
      <rect x="950" y="96" width="96" height="124" fill="#d6f8e6" stroke="#0a2e22" strokeWidth="2" />
      {[116, 144, 172].map((y) => (
        <g key={y}>
          <rect x="962" y={y} width="20" height="14" fill="#fff" stroke="#0a2e22" strokeWidth="1.5" />
          <rect x="1014" y={y} width="20" height="14" fill="#fff" stroke="#0a2e22" strokeWidth="1.5" />
        </g>
      ))}
      <rect x="988" y="178" width="20" height="42" fill="#0a2e22" />
      {/* Trees */}
      {[170, 700, 1090, 1150].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={i % 2 ? 190 : 196} r="18" fill="#6fe0a8" stroke="#0a2e22" strokeWidth="2" />
          <path d={`M${x} ${i % 2 ? 208 : 214}V220`} stroke="#0a2e22" strokeWidth="2" />
        </g>
      ))}
      {/* Seated people with laptops */}
      <g transform="translate(215 0)">
        <circle cx="560" cy="170" r="9" fill="#fff" stroke="#0a2e22" strokeWidth="2" />
        <path d="M552 182l-10 26h30l-6-26z" fill="#e11d48" stroke="#0a2e22" strokeWidth="2" strokeLinejoin="round" />
      </g>
      <g transform="translate(-300 0)">
        <circle cx="660" cy="176" r="9" fill="#fff" stroke="#0a2e22" strokeWidth="2" />
        <path d="M652 188l-8 22h28l-6-22z" fill="#16a863" stroke="#0a2e22" strokeWidth="2" strokeLinejoin="round" />
      </g>
      {/* Ground */}
      <path d="M0 220h1200" stroke="#0a2e22" strokeWidth="2" />
    </svg>
  );
}

export default function OurStory() {
  return (
    <>
      {/* Intro */}
      <section id="our-story" className="scroll-mt-20 bg-[#FAFAFA] pt-24 sm:pt-28" aria-labelledby="our-story-heading">
        <Container className="text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">Our story</p>
            <h2
              id="our-story-heading"
              className="mx-auto mt-5 max-w-3xl text-balance text-5xl font-medium leading-[1.08] tracking-tight text-navy-900 sm:text-6xl"
            >
              We are {siteConfig.name}.
              <br />
              This is our story.
            </h2>
            <div className="mx-auto mt-8 h-px w-14 bg-navy-900/70" aria-hidden="true" />
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-800">
              In Rajasthan, a simple, stubborn idea took root: <Mark>give hardworking business owners their lives back.</Mark> That idea
              became {siteConfig.name}, an AI operating system for the businesses that build our world.
            </p>
          </Reveal>
        </Container>
        <div className="mt-16 overflow-hidden px-4 sm:px-8">
          <SkylineBanner />
        </div>
      </section>

      {/* Chapters */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="space-y-28 sm:space-y-36">
            {chapters.map((c, i) => (
              <Reveal key={c.heading}>
                <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-24 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                  <div className="mx-auto w-full max-w-md">
                    <figure>
                      <StoryVisual kind={c.visual} id={`sv${i}`} />
                      <figcaption className="mt-2 border-t border-slate-300 pt-3">
                        <p className="text-sm font-semibold text-navy-900">{c.caption}</p>
                        <p className="text-xs text-slate-500">{c.captionSub}</p>
                      </figcaption>
                    </figure>
                  </div>

                  <div>
                    <h3 className="text-balance text-4xl font-medium leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">{c.heading}</h3>
                    <blockquote className="mt-9 flex gap-4">
                      <span className="select-none text-5xl font-bold leading-none text-crimson-500" aria-hidden="true">
                        &ldquo;
                      </span>
                      <p className="text-xl leading-8 text-navy-900">
                        <Mark>{c.quote}</Mark>
                      </p>
                    </blockquote>
                    <div className="mt-8 space-y-5">
                      {c.paragraphs.map((p) => (
                        <p key={p.slice(0, 24)} className="text-base leading-8 text-slate-700">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
