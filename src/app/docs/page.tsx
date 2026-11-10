import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import CTA from "@/components/home/CTA";
import { docPages } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Step-by-step NEXTOSA setup and usage guides for every business type, plus detailed guides for WhatsApp, Razorpay payments, Gmail, Instagram, connected websites and webhooks.",
};

export default function DocsIndexPage() {
  const start = docPages.filter((p) => p.kind !== "industry");
  const industries = docPages.filter((p) => p.kind === "industry");
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 py-24">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <Container className="relative text-center">
          <Badge>Documentation</Badge>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Set up NEXTOSA and learn to use every part of it</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Start with the first-time setup, connect WhatsApp and payments, then follow the guide for your business type. Also see{" "}
            <Link href="/plan-limits" className="font-medium text-accent-300 hover:underline">plan limits</Link>,{" "}
            <Link href="/ai-tokens" className="font-medium text-accent-300 hover:underline">AI tokens</Link> and{" "}
            <Link href="/roles-and-permissions" className="font-medium text-accent-300 hover:underline">roles and permissions</Link>.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-navy-900">Start here</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {start.map((p) => (
              <Link key={p.slug} href={`/docs/${p.slug}`} className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:border-accent-400 hover:bg-white">
                <h3 className="text-lg font-semibold text-navy-900 group-hover:text-accent-700">{p.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.description}</p>
                <p className="mt-4 text-sm font-medium text-accent-600">Read the guide &rarr;</p>
              </Link>
            ))}
          </div>

          <h2 className="mt-14 text-2xl font-bold tracking-tight text-navy-900">Guide for your business type</h2>
          <p className="mt-2 text-sm text-slate-600">Each guide covers the first-time setup, that industry&apos;s modules and daily use, the shared modules, and roles and permissions.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((p) => (
              <Link key={p.slug} href={`/docs/${p.slug}`} className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-accent-400 hover:bg-white">
                <h3 className="text-base font-semibold text-navy-900 group-hover:text-accent-700">{p.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.description}</p>
                <p className="mt-3 text-xs text-slate-500">{p.chapters.length} chapters</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
