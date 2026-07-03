import Button from "../Button";
import Container from "../Container";
import Badge from "../Badge";

const trustPoints = [
  "No credit card required",
  "Setup in under 10 minutes",
  "Cancel anytime",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
      <div className="absolute inset-0 bg-radial-glow" />

      <Container className="relative py-24 sm:py-28 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="animate-fade-up">
            <Badge>AI-Powered CRM for WhatsApp</Badge>
            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turn WhatsApp into your{" "}
              <span className="bg-gradient-to-r from-accent-400 to-cyan-400 bg-clip-text text-transparent">
                smartest sales &amp; support channel
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              NEXTOSA combines an AI-powered CRM with WhatsApp automation —
              answer client questions instantly, manage every contact in one
              place, and never miss a follow-up again.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Start Free Trial
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              <Button href="/#how-it-works" variant="ghost" size="lg">
                See How It Works
              </Button>
            </div>

            <dl className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-none text-accent-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-300">{point}</span>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="animate-float">
              <div className="relative mx-auto max-w-md rounded-2xl border border-white/10 bg-navy-800/80 p-4 shadow-2xl shadow-black/40 backdrop-blur">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 font-bold text-white">
                    A
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      NEXTOSA AI Assistant
                    </p>
                    <p className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Online on WhatsApp
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-accent-600 px-4 py-2.5 text-sm text-white">
                    Hi! Do you have availability this Friday for a
                    consultation?
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-navy-700 px-4 py-2.5 text-sm text-slate-200">
                    Yes! I found a 3:00 PM slot based on your saved
                    preferences. I&apos;ve booked it and added a reminder.
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-navy-700 px-4 py-2.5 text-sm text-slate-200">
                    📄 I also pulled your last invoice from our records — let
                    me know if you need anything else.
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-navy-900/60 px-4 py-2.5">
                  <span className="text-xs text-slate-500">
                    Type a message…
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto h-4 w-4 text-accent-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.4 20.6l17.45-8.73a.5.5 0 000-.9L3.4 2.24a.5.5 0 00-.7.55l1.9 7.6 10.9 1.1-10.9 1.1-1.9 7.6a.5.5 0 00.7.55z" />
                  </svg>
                </div>
              </div>

              <div className="absolute -right-6 -top-6 hidden w-48 rounded-xl border border-white/10 bg-navy-800/90 p-4 shadow-xl backdrop-blur sm:block">
                <p className="text-xs font-semibold text-slate-400">
                  Active Clients
                </p>
                <p className="mt-1 text-2xl font-bold text-white">1,284</p>
                <p className="mt-1 text-xs text-emerald-400">
                  ↑ synced in real-time
                </p>
              </div>

              <div className="absolute -bottom-8 -left-6 hidden w-52 rounded-xl border border-white/10 bg-navy-800/90 p-4 shadow-xl backdrop-blur sm:block">
                <p className="text-xs font-semibold text-slate-400">
                  Away Mode
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-white">
                    AI handling replies
                  </span>
                  <span className="flex h-5 w-9 items-center rounded-full bg-accent-500 p-0.5">
                    <span className="h-4 w-4 rounded-full bg-white" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
