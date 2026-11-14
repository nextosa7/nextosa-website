import Container from "./Container";
import Badge from "./Badge";
import Button from "./Button";
import BrowserFrame from "./BrowserFrame";
import { siteConfig } from "@/lib/site";
import type { Shot } from "@/lib/content";

// Dark hero shared by platform and industry pages, with a real screenshot under the copy.
export default function PageHero({
  eyebrow,
  title,
  intro,
  shot,
  stats,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  shot: Shot;
  stats?: { value: string; label: string }[];
}) {
  return (
    <section className="relative overflow-hidden theme-light pt-20 sm:pt-24">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
      <div className="absolute inset-0 bg-radial-glow" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>{eyebrow}</Badge>
          <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">{intro}</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href={siteConfig.signupUrl} size="lg">Start free trial</Button>
            <Button href="/contact" variant="ghost" size="lg">Talk to us</Button>
          </div>
        </div>

        {stats && (
          <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="text-2xl font-bold text-white">{s.value}</dt>
                <dd className="mt-1 text-sm text-slate-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="relative mx-auto mt-16 max-w-5xl translate-y-0">
          <BrowserFrame shot={shot} priority />
        </div>
      </Container>
      <div className="h-24 bg-gradient-to-b from-navy-900 to-white sm:h-32" />
    </section>
  );
}
