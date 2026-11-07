import Container from "../Container";
import Badge from "../Badge";

export default function ArchitectureBanner() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-24">
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
      <div className="absolute inset-0 bg-radial-glow" />
      <Container className="relative max-w-3xl text-center">
        <Badge>One Platform, Every Industry</Badge>
        <p className="mx-auto mt-6 text-balance text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
          One powerful underlying platform. But whether you&apos;re a clinic
          or a CA firm, NEXTOSA adapts its modules, fields, workflows,
          permissions, and portals to fit exactly how your industry works.
        </p>
      </Container>
    </section>
  );
}
