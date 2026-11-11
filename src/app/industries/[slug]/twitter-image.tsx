import { renderOgImage, OG_SIZE } from "@/lib/ogImage";
import { clip } from "@/lib/seo";
import { industryBySlug, industryPages } from "@/lib/content";

export const alt = "NEXTOSA industry solution";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return industryPages.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = industryBySlug(slug);
  return renderOgImage({
    eyebrow: "Industry solution",
    title: page ? page.name : "NEXTOSA",
    subtitle: clip(page ? page.short : "AI CRM and WhatsApp business automation platform", 120),
  });
}
