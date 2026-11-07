import Link from "next/link";
import Container from "../Container";
import SectionHeading from "../SectionHeading";

// Only integrations that exist in the NEXTOSA app today.
const items = [
  { name: "WhatsApp Business", note: "Official Meta platform, multiple numbers" },
  { name: "Gmail", note: "Send invoices and campaigns, answer inbound mail" },
  { name: "Instagram", note: "Publish posts with the Marketing Agent" },
  { name: "Razorpay", note: "Payment links, QR codes, refunds" },
  { name: "Google Drive", note: "Connect your files" },
  { name: "Slack", note: "Team notifications" },
  { name: "Shopify", note: "Connect your store" },
  { name: "Zapier", note: "Link thousands of other apps" },
  { name: "Website widget", note: "AI chat and lead capture on your site" },
  { name: "Webhooks & API", note: "Signed inbound webhooks, custom API connections" },
  { name: "Google sign-in", note: "One-click login for your team" },
  { name: "Google Cloud Storage", note: "Private, encrypted file storage" },
];

export default function Integrations() {
  return (
    <section id="integrations" className="bg-slate-50 py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Integrations" title="Plays well with the tools you already use" description="Built-in connections for messaging, payments and storage, plus webhooks and an API for everything else." />
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.name} className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-navy-900">{i.name}</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">{i.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm">
          <Link href="/platform/integrations" className="font-semibold text-accent-600 hover:text-accent-700">See all integrations →</Link>
        </p>
      </Container>
    </section>
  );
}
