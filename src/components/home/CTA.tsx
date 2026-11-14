import { GlassChip, GlowOrbs } from "../Decor";
import Container from "../Container";
import Button from "../Button";
import { siteConfig } from "@/lib/site";
import { Reveal } from "../motion/primitives";

export default function CTA() {
  return (
    <section className="relative overflow-hidden theme-light py-24">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <GlowOrbs layout="center" />
      <Container className="relative text-center">
        <Reveal>
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <GlassChip icon="spark">AI agents</GlassChip>
          <GlassChip icon="shield" tone="blue">Encrypted credentials</GlassChip>
          <GlassChip icon="chart" tone="blue">Live reports</GlassChip>
        </div>
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to run your entire business on one platform?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
          Join businesses using NEXTOSA to manage billing, staff, and
          compliance, and automate client communication on WhatsApp — all
          from one AI operating system.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={siteConfig.signupUrl} size="lg">
            Start Free Trial
          </Button>
          <Button href="/about" variant="ghost" size="lg">
            Learn More About Us
          </Button>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
