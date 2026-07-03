import { ReactNode } from "react";
import Container from "../Container";
import Badge from "../Badge";

export function LegalHero({
  title,
  lastUpdated,
}: {
  title: string;
  lastUpdated: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-24">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
      <div className="absolute inset-0 bg-radial-glow" />
      <Container className="relative text-center">
        <Badge>Legal</Badge>
        <h1 className="mx-auto mt-6 max-w-2xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-slate-400">
          Last updated: {lastUpdated}
        </p>
      </Container>
    </section>
  );
}

export function LegalTOC({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  return (
    <nav className="rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-24">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        On this page
      </p>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm text-slate-600 transition-colors hover:text-accent-600"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-slate-200 pt-10 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-bold text-navy-900 sm:text-2xl">{title}</h2>
      <div className="prose-legal mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-7">
        {children}
      </div>
    </section>
  );
}

export function LegalPage({ children }: { children: ReactNode }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>{children}</Container>
    </section>
  );
}
