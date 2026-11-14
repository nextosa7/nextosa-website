import Container from "@/components/Container";
import { Reveal } from "@/components/motion/primitives";
import { siteConfig } from "@/lib/site";

const paragraphs = [
  "Growing up in Rajasthan, our founder, Harsh Soni, watched incredibly talented local business owners—from clinic practitioners to school administrators—pour their hearts into their work. But there was a hidden, exhausting cost. After closing their doors for the day, they weren't resting. They were drowning in manual WhatsApp follow-ups, overdue invoices, and disconnected software that refused to talk to each other. Enterprise tools were too expensive, and cheap tools simply didn't work.",
  "Determined to bridge this gap, Harsh set out to build a unified system from scratch. It was a grueling journey. There were countless sleepless nights spent architecting a platform that could seamlessly blend complex CRM logic, automated WhatsApp routing, and AI. Building an enterprise-grade ecosystem that could adapt to 10 different industries was a massive technical mountain to climb. Through failed prototypes, complex API hurdles, and sheer exhaustion, the easiest choice would have been to give up.",
  "But when you are building something to give hardworking people their lives back, quitting isn't an option. Today, NEXTOSA stands as the result of that relentless drive. It has grown into a powerful, intelligent AI operating system that replaces fragmented tools with a single, elegant hub. We went through the struggle so that our clients never have to.",
];

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-24 sm:py-32" aria-labelledby="our-story-heading">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Founder visual: a clean brand placeholder until a real portrait is dropped in. */}
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-accent-50 via-white to-accent-100 shadow-[0_2px_4px_rgba(10,46,34,0.04),0_32px_64px_-24px_rgba(10,46,34,0.28)] ring-1 ring-slate-200/80">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-200/50 blur-3xl" aria-hidden="true" />
                <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-accent-100 blur-3xl" aria-hidden="true" />
                <div className="relative flex h-full flex-col items-center justify-center gap-6 px-8 text-center">
                  <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-700 text-5xl font-bold tracking-tight text-white shadow-xl shadow-accent-600/25 ring-8 ring-white/80">
                    HS
                  </div>
                  <div>
                    <p className="text-xl font-semibold tracking-tight text-navy-900">{siteConfig.founder}</p>
                    <p className="mt-1 text-sm font-medium text-slate-500">Founder, {siteConfig.name}</p>
                  </div>
                </div>
              </div>
              <figcaption className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-700">Rooted in</p>
                  <p className="mt-1 font-semibold text-navy-900">Rajasthan, India</p>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-700">Built for</p>
                  <p className="mt-1 font-semibold text-navy-900">10 industries</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
              <span className="h-px w-8 bg-accent-500" aria-hidden="true" />
              Our story
            </p>
            <h2
              id="our-story-heading"
              className="mt-5 max-w-2xl text-balance text-4xl font-bold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl"
            >
              Built for the businesses that build our world.
            </h2>

            <div className="mt-10 space-y-6 border-l-2 border-accent-200 pl-6 sm:pl-8">
              <p className="text-xl font-medium leading-9 text-slate-800">{paragraphs[0]}</p>
              {paragraphs.slice(1).map((p) => (
                <p key={p.slice(0, 24)} className="text-lg leading-8 text-slate-600">
                  {p}
                </p>
              ))}
            </div>

            <p className="mt-10 pl-6 text-sm font-semibold text-navy-900 sm:pl-8">
              {siteConfig.founder}
              <span className="font-normal text-slate-500"> · Founder, {siteConfig.name}</span>
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
