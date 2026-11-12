import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export interface DemoVideo {
  name: "command-center" | "business-ai" | "platform-tour";
  title: string;
  text: string;
}

export const demoVideos: Record<DemoVideo["name"], DemoVideo> = {
  "command-center": {
    name: "command-center",
    title: "AI Command Center",
    text: "Ask in plain language, move around the app with a sentence, and switch settings by asking.",
  },
  "business-ai": {
    name: "business-ai",
    title: "Business AI",
    text: "A question about open deals, answered from the workspace's own data.",
  },
  "platform-tour": {
    name: "platform-tour",
    title: "A quick tour",
    text: "Dashboard, deals, projects, invoices, clients and automations in one minute.",
  },
};

// Real screen recordings of the live app. Nothing loads until the visitor presses play (preload="metadata").
export default function DemoVideos({ names, title = "See it in action", description = "Screen recordings of the live NEXTOSA app, with no audio." }: { names: DemoVideo["name"][]; title?: string; description?: string }) {
  const items = names.map((n) => demoVideos[n]);
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Watch" title={title} description={description} />
        <div className={`mt-12 grid gap-8 ${items.length === 1 ? "mx-auto max-w-3xl" : items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
          {items.map((v) => (
            <figure key={v.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <video className="aspect-[8/5] w-full bg-slate-900" controls muted playsInline preload="metadata" poster={`/videos/${v.name}-poster.png`} aria-label={v.title}>
                <source src={`/videos/${v.name}.webm`} type="video/webm" />
                Your browser cannot play this video.
              </video>
              <figcaption className="p-5">
                <h3 className="text-lg font-semibold text-navy-900">{v.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{v.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
