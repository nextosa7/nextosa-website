import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

// One place for SEO text and structured data, so every page is described the same way.
// Titles are written for how a buyer searches (CRM, WhatsApp automation, invoicing, AI agents) and kept short
// enough that search engines show them in full (about 60 characters including the " | NEXTOSA" suffix).

export const SEO_DEFAULT_TITLE = "NEXTOSA: AI CRM & WhatsApp Business Automation Platform";
export const SEO_DEFAULT_DESCRIPTION =
  "NEXTOSA is the AI business platform that combines CRM, invoicing and accounting, WhatsApp and email automation, and AI Sales, Support and Marketing agents, with ready-made modules for 10 industries.";

export const SEO_KEYWORDS = [
  "AI CRM software",
  "WhatsApp Business API automation",
  "WhatsApp CRM",
  "B2B CRM platform",
  "AI sales agent",
  "AI customer support agent",
  "invoicing and accounting software",
  "business automation software",
  "industry-specific business software",
  "hospital management software",
  "school management software",
  "NEXTOSA",
];

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}

// Keeps a description inside the roughly 160 characters search results show, cutting at a word boundary.
export function clip(text: string, max = 158): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const space = cut.lastIndexOf(" ");
  return `${cut.slice(0, space > 80 ? space : cut.length).replace(/[,;:.\- ]+$/, "")}…`;
}

interface PageMeta {
  title: string;
  description: string;
  path: string; // e.g. "/platform/crm"
  // Pages with their own opengraph-image file (platform, industries) pass false; everything else gets the default card.
  defaultImage?: boolean;
}

// Every page states its own canonical URL plus Open Graph and Twitter text, so a shared link shows that page's
// title and description (not the home page's). The share image comes from the opengraph-image file of the route.
export function buildMetadata({ title, description, path, defaultImage = true }: PageMeta): Metadata {
  const desc = clip(description);
  const url = absoluteUrl(path);
  const full = `${title} | ${siteConfig.name}`;
  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: full,
      description: desc,
      siteName: siteConfig.name,
      ...(defaultImage ? { images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: SEO_DEFAULT_TITLE }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: full,
      description: desc,
      ...(defaultImage ? { images: [absoluteUrl("/twitter-image")] } : {}),
    },
  };
}

// ---- JSON-LD (schema.org) ----

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    founder: { "@type": "Person", name: siteConfig.founder },
    contactPoint: [{ "@type": "ContactPoint", contactType: "sales and support", email: siteConfig.email, availableLanguage: ["English", "Hindi"] }],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: SEO_DEFAULT_DESCRIPTION,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en",
  };
}

// No price, rating or review is stated here on purpose: structured data must match what the page really shows.
export function softwareLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.url}/#software`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: SEO_DEFAULT_DESCRIPTION,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "CRM, invoicing and WhatsApp automation software",
    operatingSystem: "Web",
    publisher: { "@id": `${siteConfig.url}/#organization` },
    featureList: [
      "CRM with contacts, deals, tickets and campaigns",
      "Official WhatsApp Business Platform automation",
      "Invoicing, payments and double-entry accounting",
      "AI Sales, Support and Marketing agents",
      "Visual automation builder",
      "Modules for healthcare, schools, restaurants, retail, manufacturing, CA firms, real estate, salons, professional services and gyms",
    ],
  };
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: absoluteUrl(t.path) })),
  };
}

export function faqLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };
}
