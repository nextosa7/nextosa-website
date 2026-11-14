import Container from "@/components/Container";
import { Reveal } from "@/components/motion/primitives";
import { siteConfig } from "@/lib/site";

const paragraphs = [
  "Growing up in Rajasthan, our founder, Harsh Soni, saw something that never left him. Clinic doctors, school principals, shop owners, restaurant families, CA firms, salon artists: incredibly talented people who gave everything to their work. But when the shutters came down, their day was not over. It was just changing shifts. Late at night they were still chasing WhatsApp messages, matching ledgers, hunting for overdue payments and switching between five different tools that refused to talk to each other. Big enterprise software was priced for companies they would never be. Cheap tools broke the moment real life got complicated.",
  "Harsh made a decision: build the system these people deserved, from scratch, and build all of it. Not just a CRM. Not just a WhatsApp bot. One connected platform where customers, billing, accounting, inventory, teams, training and AI agents work as a single brain. The kind of platform that a clinic, a school, a restaurant and a real estate firm could all run on, each with modules that speak its own language.",
  "Nobody tells you how heavy that mountain is. There were nights that turned into mornings with the code still open. Prototypes that failed after weeks of work. APIs that refused to behave, systems that broke at the exact moment they were supposed to work, and days when exhaustion was louder than motivation. More than once the easiest answer was to stop, to settle for something smaller, to tell himself that a platform this big was too big to be built by a founder starting out in Rajasthan.",
  "He fell. He got back up. He fell again, and he learned something every single time. Every failed prototype became a lesson, every broken integration became a stronger foundation, and every sleepless night became another brick in a platform that would not be shaken. Because he kept remembering who he was building it for: the doctor who deserved to go home to her family, the teacher who should not be doing fee reminders at midnight, the owner who started a business to live a life, not to drown in admin.",
  "That relentless refusal to quit is why NEXTOSA exists today. What began as an answer to messy WhatsApp follow-ups has grown into a complete AI operating system: CRM, ERP, finance and accounting, training, and AI Sales, Support and Marketing agents working across WhatsApp, email and your website, with purpose-built modules for 10 industries. It runs the busywork of a business end to end, so owners can finally focus on the work they love.",
  "And this is only the beginning. We know exactly how hard the road is, because we walked it first. We went through the struggle, the doubt and the sleepless nights so that our clients never have to. Every feature we ship carries that promise: your business deserves a system as determined as you are.",
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
              {paragraphs.slice(1).map((p, i) => (
                <div key={p.slice(0, 24)} className="space-y-6">
                  {i === 3 && (
                    <blockquote className="my-2 rounded-2xl bg-white p-7 text-2xl font-semibold leading-snug tracking-tight text-navy-900 shadow-[0_1px_2px_rgba(10,46,34,0.05),0_18px_40px_-24px_rgba(10,46,34,0.25)] ring-1 ring-accent-200">
                      <span className="text-accent-600">&ldquo;</span>He fell. He got back up. He never once gave up on the people he was building this for.<span className="text-accent-600">&rdquo;</span>
                    </blockquote>
                  )}
                  <p className="text-lg leading-8 text-slate-600">{p}</p>
                </div>
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
