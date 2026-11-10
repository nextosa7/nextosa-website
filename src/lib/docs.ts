import common from "@/content/docs/common.json";
import integrations from "@/content/docs/integrations.json";
import healthcare from "@/content/docs/healthcare.json";
import school from "@/content/docs/school.json";
import restaurant from "@/content/docs/restaurant.json";
import retail from "@/content/docs/retail.json";
import manufacturer from "@/content/docs/manufacturer.json";
import caFirm from "@/content/docs/caFirm.json";
import realEstate from "@/content/docs/realEstate.json";
import salon from "@/content/docs/salon.json";
import professionalServices from "@/content/docs/professionalServices.json";
import gym from "@/content/docs/gym.json";

// Setup and usage manual. The business-type guides are the same verified guides the app ships in its own
// Help area (written from the product's behaviour, not from marketing copy); integrations.json is written
// for the website. Shape: guide = { title, subtitle, intro, chapters[], closing[] }, chapter = { title,
// summary?, callout?, sections[] }, section = { title, body?, steps?, route?, permission? }.

export interface DocSection {
  title: string;
  body?: string;
  steps?: string[];
  route?: string;
  permission?: string;
}
export interface DocCallout {
  type: string;
  body: string;
}
export interface DocChapter {
  title: string;
  summary?: string;
  callout?: DocCallout;
  sections: DocSection[];
}
interface Guide {
  title: string;
  subtitle: string;
  intro: string;
  chapters: DocChapter[];
  closing?: DocChapter[];
}

export interface DocPage {
  slug: string;
  name: string;
  kind: "start" | "integrations" | "industry";
  description: string;
  title: string;
  subtitle: string;
  intro: string;
  chapters: DocChapter[]; // already in reading order
}

const commonSetup = (common as unknown as { setup: DocChapter }).setup;
const commonModules = (common as unknown as { modules: DocChapter[] }).modules;

function industryPage(slug: string, name: string, description: string, guide: Guide): DocPage {
  return {
    slug,
    name,
    kind: "industry",
    description,
    title: guide.title,
    subtitle: guide.subtitle,
    intro: guide.intro,
    // Order: shared first-time setup, then this business type's own setup and modules, the modules every
    // workspace shares, and finally the roles and permissions chapter for the type.
    chapters: [commonSetup, ...guide.chapters, ...commonModules, ...(guide.closing ?? [])],
  };
}

const integrationsGuide = integrations as unknown as Guide;

export const docPages: DocPage[] = [
  {
    slug: "getting-started",
    name: "Getting started",
    kind: "start",
    description: "The ten steps every workspace does first, in the order that avoids rework.",
    title: "Getting started with NEXTOSA",
    subtitle: "Create your workspace, fill in your business details, set tax and numbering, connect WhatsApp, teach the AI, invite your team and add your first data.",
    intro: "These steps are the same for every business type. Your business-specific setup, modules and daily use are in the guide for your industry, and each connection is covered in detail in the integrations guide.",
    chapters: [commonSetup],
  },
  {
    slug: "integrations",
    name: "Integrations & payments",
    kind: "integrations",
    description: "WhatsApp, Razorpay payments, Gmail, Instagram, connected websites, Shopify, Slack, Zapier and webhooks.",
    title: integrationsGuide.title,
    subtitle: integrationsGuide.subtitle,
    intro: integrationsGuide.intro,
    chapters: integrationsGuide.chapters,
  },
  industryPage("healthcare", "Healthcare & Hospitals", "Clinics and hospitals: appointments, patients, pharmacy, and the hospital mode with IPD, EMR, lab, billing and insurance.", healthcare as unknown as Guide),
  industryPage("schools", "Schools & Colleges", "Admissions, students, fees, attendance, exams, homework and the teacher, parent and student portals.", school as unknown as Guide),
  industryPage("restaurants", "Restaurants", "Menu and recipes, reservations, QR table ordering with online payment, and sales.", restaurant as unknown as Guide),
  industryPage("retail", "Retail & Wholesale", "Customers and vendors, B2B inquiries, sales, stock across locations, purchasing and billing.", retail as unknown as Guide),
  industryPage("manufacturers", "Manufacturers", "Inventory, purchasing, production board, equipment, workers, distributors and sales orders.", manufacturer as unknown as Guide),
  industryPage("ca-firms", "CA Firms", "Tax clients, job board with maker-checker, tax calendar, billing and the client portal.", caFirm as unknown as Guide),
  industryPage("real-estate", "Real Estate", "Property inventory, leads and site visits, bookings, demand letters and collections.", realEstate as unknown as Guide),
  industryPage("salons", "Salons & Spas", "Staff roster, services, booking calendar, checkout, packages, inventory and payroll.", salon as unknown as Guide),
  industryPage("professional-services", "Professional Services", "Clients and deals, service catalog and proposals, projects, timesheets and invoicing.", professionalServices as unknown as Guide),
  industryPage("gyms", "Gyms & Fitness", "Members and leads, plans and billing, check-in desk, trainers, equipment and store.", gym as unknown as Guide),
];

export function getDocPage(slug: string): DocPage | undefined {
  return docPages.find((p) => p.slug === slug);
}

export function chapterAnchor(index: number): string {
  return `chapter-${index + 1}`;
}
