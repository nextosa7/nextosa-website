import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { Reveal, Stagger, StaggerItem } from "../motion/primitives";

// Mirrors the three AI agents in the NEXTOSA app (/ai-agents): Sales, Support, Marketing.
const agents = [
  {
    name: "AI Sales Agent",
    tagline: "Turns enquiries into deals",
    points: [
      "Answers on WhatsApp, email and your website chat",
      "Quotes your real prices and live stock from the catalog",
      "Creates deals and bookings, then hands hot leads to your team",
      "Suggests a related upsell, never invents a price",
    ],
  },
  {
    name: "AI Support Agent",
    tagline: "Answers from your own knowledge base",
    points: [
      "Replies only from the articles you publish — no guessing",
      "Hands the chat to a person when it cannot help, with a summary",
      "Opens support tickets and runs the actions you allow",
      "Several named agents, each with its own persona",
    ],
  },
  {
    name: "AI Marketing Agent",
    tagline: "Plans and publishes your content",
    points: [
      "Turn a weekly or monthly plan into scheduled posts",
      "Instagram posts and WhatsApp broadcasts, reviewed before they go out",
      "Spots buying intent in replies and passes the lead to Sales",
      "Uses your real catalog for new arrivals and best sellers",
    ],
  },
];

export default function AiAgents() {
  return (
    <section id="ai-agents" className="relative overflow-hidden theme-light py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_30%,transparent_100%)]" />
      <Container className="relative">
        <Reveal>
        <SectionHeading
          eyebrow="AI Agents"
          title="A sales, support and marketing team that never sleeps"
          description="Three AI agents trained on your own catalog, documents and rules. You stay in control: every agent has safety limits, and a person can take over any conversation."
          dark
        />
        </Reveal>

        <Stagger className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {agents.map((agent) => (
            <StaggerItem lift key={agent.name} className="flex flex-col rounded-2xl border border-white/10 bg-navy-800/60 p-8 backdrop-blur">
              <h3 className="text-xl font-semibold text-white">{agent.name}</h3>
              <p className="mt-1 text-sm font-medium text-accent-400">{agent.tagline}</p>
              <ul className="mt-6 space-y-3">
                {agent.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-5 w-5 flex-none text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
