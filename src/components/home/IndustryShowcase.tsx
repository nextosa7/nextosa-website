import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { Reveal, Stagger, StaggerItem } from "../motion/primitives";
import { industryPages, leadShot } from "@/lib/content";

// Ten industry cards, each with a real screenshot and a link to its own page.
export default function IndustryShowcase() {
  return (
    <section id="industries" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <Reveal>
        <SectionHeading
          eyebrow="Industries"
          title="Ten industries, each with its own modules"
          description="Not a one-size-fits-all chatbot. Every industry gets the screens and workflows it actually uses."
        />
        </Reveal>
        <Stagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
          {industryPages.map((p) => (
            <StaggerItem lift key={p.slug} className="h-full rounded-2xl">
            <Link
              href={`/industries/${p.slug}`}
              className="group block h-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors duration-300 hover:border-accent-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-200 bg-slate-100">
                <Image
                  src={leadShot(p).src}
                  alt={`${p.name} screen`}
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-navy-900">{p.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600">
                  See the modules <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
