import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { industryPages, platformPages } from "@/lib/content";
import { docPages } from "@/lib/docs";

// Every public page, generated from the same content lists the site renders, so a new platform, industry or
// docs page appears here without anyone remembering to add it.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    entry("/", 1, "weekly"),
    ...platformPages.map((p) => entry(`/platform/${p.slug}`, 0.9, "monthly")),
    ...industryPages.map((p) => entry(`/industries/${p.slug}`, 0.9, "monthly")),
    entry("/compare", 0.8, "monthly"),
    entry("/security", 0.8, "monthly"),
    entry("/docs", 0.7, "weekly"),
    ...docPages.map((p) => entry(`/docs/${p.slug}`, 0.6, "monthly")),
    entry("/roles-and-permissions", 0.6, "monthly"),
    entry("/automations", 0.7, "monthly"),
    entry("/email-and-gmail", 0.7, "monthly"),
    entry("/whatsapp-connect", 0.7, "monthly"),
    entry("/ai-tokens", 0.5, "monthly"),
    entry("/plan-limits", 0.5, "monthly"),
    entry("/about", 0.5, "yearly"),
    entry("/contact", 0.6, "yearly"),
    entry("/privacy", 0.3, "yearly"),
    entry("/terms", 0.3, "yearly"),
  ];
}
