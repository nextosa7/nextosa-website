import Link from "next/link";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import BrowserFrame from "../BrowserFrame";
import { leadShot, platformBySlug } from "@/lib/content";

// Two deep-dive sections on the homepage: Automations and multi-number WhatsApp.
const spotlights = [
  {
    slug: "automations",
    eyebrow: "Automations",
    title: "A visual builder for everything you repeat",
    text: "Welcome drips, renewal reminders, win-back broadcasts, payment follow-ups. Drag a trigger, add waits and actions, and see every run step by step.",
    points: ["13 trigger types, from inbound WhatsApp and email to payments and schedules", "Send WhatsApp or email, create deals, bookings and tasks", "Runs on a schedule in your own timezone", "Signed webhooks so your other systems can start a run"],
    shotIndex: 0,
    dark: false,
  },
  {
    slug: "whatsapp",
    eyebrow: "WhatsApp",
    title: "Every number, every conversation, one inbox",
    text: "Connect multiple official WhatsApp Business numbers. Each keeps its own threads, its own AI or approval mode and its own assigned person.",
    points: ["Up to 10 numbers on Enterprise, 3 on Growth", "Replies leave from the number the customer wrote to", "Limit staff to the numbers they should see", "Campaigns that never message opted-out contacts"],
    shotIndex: 0,
    dark: true,
  },
];

export default function Spotlights() {
  return (
    <>
      {spotlights.map((sp) => {
        const page = platformBySlug(sp.slug)!;
        const dark = sp.dark;
        return (
          <section key={sp.slug} className={`${dark ? "bg-navy-900" : "bg-white"} py-24 sm:py-28`}>
            <Container>
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className={dark ? "lg:order-2" : ""}>
                  <SectionHeading eyebrow={sp.eyebrow} title={sp.title} center={false} dark={dark} />
                  <p className={`mt-5 text-base leading-7 ${dark ? "text-slate-300" : "text-slate-600"}`}>{sp.text}</p>
                  <ul className="mt-6 space-y-3">
                    {sp.points.map((p) => (
                      <li key={p} className={`flex items-start gap-3 text-sm leading-6 ${dark ? "text-slate-300" : "text-slate-700"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`mt-0.5 h-5 w-5 flex-none ${dark ? "text-accent-400" : "text-accent-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/platform/${sp.slug}`} className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold ${dark ? "text-accent-400 hover:text-accent-300" : "text-accent-600 hover:text-accent-700"}`}>
                    Learn more <span aria-hidden>→</span>
                  </Link>
                </div>
                <div className={dark ? "lg:order-1" : ""}>
                  <BrowserFrame shot={(page.modules[sp.shotIndex].shot ?? leadShot(page))} />
                </div>
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
