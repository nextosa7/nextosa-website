import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { industryVideos } from "@/lib/industryVideos";

// Real screen recordings of the live app. Nothing loads until the visitor presses play (preload="none"), and every
// video can be downloaded as an MP4.
export default function IndustryVideos({ slug, name }: { slug: string; name: string }) {
  const items = industryVideos[slug];
  if (!items?.length) return null;
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Watch"
          title={`${name}: the full walkthrough`}
          description="Screen recordings of the live NEXTOSA app, start to finish. Silent, with on-screen captions. Download them to share with your team."
        />
        <div className={`mt-12 grid gap-8 ${items.length === 1 ? "mx-auto max-w-4xl" : "lg:grid-cols-2"}`}>
          {items.map((v) => {
            const src = `/videos/industries/${v.file}.mp4`;
            return (
              <figure key={v.file} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <video className="aspect-[8/5] w-full bg-slate-900" controls muted playsInline preload="none" poster={`/videos/industries/${v.file}.jpg`} aria-label={v.title}>
                  <source src={src} type="video/mp4" />
                  Your browser cannot play this video. <a href={src}>Download it instead.</a>
                </video>
                <figcaption className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">{v.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{v.text}</p>
                  </div>
                  <a
                    href={src}
                    download={`nextosa-${v.file}.mp4`}
                    className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-navy-900 transition hover:border-accent-500 hover:text-accent-600"
                  >
                    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3v10m0 0l-4-4m4 4l4-4M4 16h12" /></svg>
                    Download MP4
                  </a>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
