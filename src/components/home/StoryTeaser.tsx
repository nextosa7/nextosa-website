import Link from "next/link";
import Container from "@/components/Container";

// A calm break in the middle of the home page that sends visitors straight to the Our Story section on /about.
export default function StoryTeaser() {
  return (
    <section className="bg-[#FAFAFA] py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-accent-600/15 bg-white px-6 py-12 text-center shadow-[0_20px_50px_-30px_rgba(10,46,34,0.25)] sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">Our story</p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Built by people who lived the struggle
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
            Sleepless nights, overdue invoices and a lot of falling and getting back up. Read how NEXTOSA began, and why we will not stop.
          </p>
          <Link
            href="/about#our-story"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-600 to-accent-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent-600/25 transition hover:from-accent-500 hover:to-accent-600"
          >
            Read our story <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
