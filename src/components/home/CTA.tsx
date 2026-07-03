import Container from "../Container";
import Button from "../Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to automate your WhatsApp &amp; grow faster?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
          Join businesses using NEXTOSA to respond instantly, stay organized,
          and turn every conversation into a client relationship.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" size="lg">
            Start Free Trial
          </Button>
          <Button href="/about" variant="ghost" size="lg">
            Learn More About Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
