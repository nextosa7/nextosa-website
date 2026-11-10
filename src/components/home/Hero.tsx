import Button from "../Button";
import Container from "../Container";
import Badge from "../Badge";
import BrowserFrame from "../BrowserFrame";
import { siteConfig } from "@/lib/site";
import { LoadItem, LoadReveal, LoadStagger, Reveal } from "../motion/primitives";

const trustPoints = ["No credit card required", "3-day free trial", "Set up in minutes"];

const stats = [
  { value: "10", label: "industry modules" },
  { value: "3", label: "AI agents" },
  { value: "4", label: "suites: CRM, ERP, finance, training" },
  { value: "Multi", label: "number WhatsApp & email" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
      <div className="absolute inset-0 bg-radial-glow" />

      <Container className="relative pt-24 sm:pt-28">
        <LoadStagger className="mx-auto max-w-4xl text-center">
          <LoadItem>
            <Badge>The business operating system</Badge>
          </LoadItem>
          <LoadItem>
          <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            One platform to run{" "}
            <span className="bg-gradient-to-r from-accent-400 to-cyan-400 bg-clip-text text-transparent">
              your entire business
            </span>
          </h1>
          </LoadItem>
          <LoadItem>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            CRM, ERP, finance and training in one connected platform, with AI Sales, Support and Marketing agents on
            WhatsApp, email and your website. Ready-made modules for 10 industries, from clinics and schools to
            restaurants and gyms.
          </p>
          </LoadItem>
          <LoadItem>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href={siteConfig.signupUrl} size="lg">
              Start free trial
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button href="/#industries" variant="ghost" size="lg">
              Explore industries
            </Button>
          </div>
          </LoadItem>
          <LoadItem>
          <dl className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-slate-300">{point}</span>
              </div>
            ))}
          </dl>
          </LoadItem>
        </LoadStagger>

        <LoadReveal className="relative mx-auto mt-16 max-w-6xl">
          <div className="absolute -inset-x-10 -top-10 bottom-0 bg-radial-glow opacity-60" />
          <BrowserFrame
            priority
            shot={{ src: "/screens/platform/dashboard.jpg", caption: "NEXTOSA dashboard", url: "app.nextosa.com/dashboard" }}
          />
        </LoadReveal>

        <Reveal className="relative mx-auto mt-16 max-w-5xl border-t border-white/10">
        <dl className="grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="text-3xl font-extrabold text-white">{s.value}</dt>
              <dd className="mt-1 text-xs leading-5 text-slate-400">{s.label}</dd>
            </div>
          ))}
        </dl>
        </Reveal>
      </Container>
    </section>
  );
}
