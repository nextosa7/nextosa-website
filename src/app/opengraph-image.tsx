import { renderOgImage, OG_SIZE } from "@/lib/ogImage";

export const alt = "NEXTOSA: AI CRM and WhatsApp business automation platform";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "AI business platform",
    title: "CRM, WhatsApp automation and AI agents in one platform",
    subtitle: "Invoicing, accounting, automations and ready-made modules for 10 industries.",
  });
}
