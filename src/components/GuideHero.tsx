import type { ReactNode } from "react";
import Container from "./Container";
import Badge from "./Badge";

// Shared hero for the guide pages (white canvas, centered, no decoration).
export default function GuideHero({ badge, title, children }: { badge: string; title: string; children: ReactNode }) {
  return (
    <section className="relative overflow-hidden theme-light py-24">
      <Container className="relative text-center">
        <Badge>{badge}</Badge>
        <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">{children}</p>
      </Container>
    </section>
  );
}
