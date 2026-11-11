import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import { MobilePolicyTOC, PolicyTOC, PrintButton, ReadingProgress, type TocItem } from "@/components/legal/PolicyNav";
import { GlanceCards, PolicyList, PolicySection, icons } from "@/components/legal/PolicyBlocks";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "NEXTOSA Terms of Service: the rules and conditions governing your use of the NEXTOSA AI CRM and WhatsApp automation platform.",
  path: "/terms",
});

const LAST_UPDATED = "November 10, 2026";

const toc: TocItem[] = [
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "description", label: "2. Description of Service" },
  { id: "eligibility", label: "3. Eligibility & Registration" },
  { id: "subscriptions", label: "4. Subscriptions, Fees & Payment" },
  { id: "trial", label: "5. Free Trial" },
  { id: "acceptable-use", label: "6. Acceptable Use Policy" },
  { id: "whatsapp-compliance", label: "7. WhatsApp Platform Compliance" },
  { id: "content-ownership", label: "8. Your Content & Data" },
  { id: "ai-disclaimer", label: "9. AI-Generated Content" },
  { id: "intellectual-property", label: "10. Intellectual Property" },
  { id: "third-party-services", label: "11. Third-Party Services" },
  { id: "confidentiality", label: "12. Confidentiality" },
  { id: "disclaimers", label: "13. Disclaimers & Warranties" },
  { id: "liability", label: "14. Limitation of Liability" },
  { id: "indemnification", label: "15. Indemnification" },
  { id: "termination", label: "16. Termination" },
  { id: "governing-law", label: "17. Governing Law" },
  { id: "changes", label: "18. Changes to These Terms" },
  { id: "contact", label: "19. Contact Us" },
];

export default function TermsPage() {
  return (
    <>
      <ReadingProgress />

      <section className="relative overflow-hidden bg-navy-900 pb-20 pt-20 sm:pb-24 sm:pt-24">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <Container className="relative text-center">
          <Badge>Legal</Badge>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-6xl">Terms of Service</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            The rules for using NEXTOSA: your account, subscriptions, acceptable use, WhatsApp compliance, your content and how either side can end the agreement.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-300">Last updated: {LAST_UPDATED}</span>
            <PrintButton />
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-14">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">Key points</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">The main things these Terms say</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">A quick summary. The full Terms below are what apply.</p>
          <div className="mt-8">
            <GlanceCards
              items={[
                { title: "You own your content", text: "Your data, documents and client information stay yours. We use them only to provide and improve the Service.", icon: icons.person },
                { title: "Billed in advance", text: "Subscriptions are billed ahead of each cycle, renew automatically and can be cancelled before the renewal date.", icon: icons.download },
                { title: "Messaging rules apply", text: "You need opt-in from the people you message on WhatsApp and must follow Meta’s policies.", icon: icons.shield },
                { title: "AI needs your review", text: "AI replies can be wrong. You are responsible for reviewing what is sent to your clients.", icon: icons.spark },
                { title: "No spam or misuse", text: "Unsolicited bulk messages, illegal content and attempts to break the Service are not allowed.", icon: icons.noSale },
                { title: "Leave any time", text: "Cancel from your account settings. Cancellation takes effect at the end of the billing period.", icon: icons.lock },
              ]}
            />
          </div>
        </Container>
      </section>

      <section className="bg-white pb-20 pt-10 sm:pt-14">
        <Container>
          <MobilePolicyTOC items={toc} />
          <div className="mt-8 grid grid-cols-1 gap-10 lg:mt-0 lg:grid-cols-[290px_1fr]">
            <div className="hidden lg:block">
              <PolicyTOC items={toc} />
            </div>

            <div className="min-w-0 space-y-6 lg:max-w-3xl">
              <div className="rounded-2xl border border-accent-200 bg-accent-50 p-5 text-[15px] leading-7 text-accent-900 sm:p-6">
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of NEXTOSA&apos;s website, application, and AI-powered CRM and WhatsApp automation services (collectively, the &ldquo;Service&rdquo;), operated by NEXTOSA (&ldquo;NEXTOSA,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.
              </div>

              <PolicySection id="acceptance" number={1} title="Acceptance of Terms">
              <p>
                By creating an account, accessing, or using NEXTOSA, you
                confirm that you have read, understood, and agree to these
                Terms and our Privacy Policy. If you are using the Service on
                behalf of a business or organization, you represent that you
                have the authority to bind that entity to these Terms.
              </p>
            </PolicySection>

            <PolicySection id="description" number={2} title="Description of Service">
              <p>
                NEXTOSA provides a software-as-a-service platform combining a
                customer relationship management (CRM) system with WhatsApp
                messaging automation, including document storage, an
                AI-powered Q&amp;A knowledge base, client management, WhatsApp
                reminders, AI customer support, message template management,
                and Away Mode automation. NEXTOSA integrates with the
                official WhatsApp Business Platform provided by Meta to send
                and receive messages on behalf of business Customers.
              </p>
              <p>
                We may add, modify, or discontinue features of the Service at
                any time, with reasonable notice where the change materially
                affects your use of the Service.
              </p>
            </PolicySection>

            <PolicySection id="eligibility" number={3} title="Eligibility & Registration">
              <PolicyList
                  items={[
                    <span key="0">You must be at least 18 years old and capable of forming a binding contract to use the Service.</span>,
                    <span key="1">You must provide accurate, current, and complete information when creating an account and keep it updated.</span>,
                    <span key="2">You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.</span>,
                    <span key="3">You must notify us immediately of any unauthorized use of your account.</span>,
                  ]}
                />
            </PolicySection>

            <PolicySection id="subscriptions" number={4} title="Subscriptions, Fees & Payment">
              <PolicyList
                  items={[
                    <span key="0">NEXTOSA is offered under subscription plans as described on our Pricing page. Fees are billed in advance on a recurring basis (monthly, quarterly or yearly, as you choose at checkout) unless otherwise stated.</span>,
                    <span key="1">All fees are exclusive of applicable taxes unless stated otherwise. You are responsible for any taxes associated with your subscription.</span>,
                    <span key="2">Subscriptions automatically renew at the end of each billing cycle unless canceled before the renewal date.</span>,
                    <span key="3">Fees are non-refundable except where required by law or as explicitly stated in these Terms.</span>,
                    <span key="4">We may change our pricing with at least 30 days&apos; notice; continued use of the Service after a price change takes effect constitutes acceptance of the new pricing.</span>,
                  ]}
                />
            </PolicySection>

            <PolicySection id="trial" number={5} title="Free Trial">
              <p>
                We may offer a free trial for new Customers, currently 3 days. A trial starts only when you choose to start it, and it does not charge you or convert to a paid subscription automatically. When the trial ends, active services pause unless you choose a paid plan; the Privacy Policy explains the 30-day read-only period that follows. Trial limits are lower than paid plans, and we reserve the right to change or end trial offers at any time.
              </p>
            </PolicySection>

            <PolicySection id="acceptable-use" number={6} title="Acceptable Use Policy">
              <p>You agree not to use the Service to:</p>
              <PolicyList
                  items={[
                    <span key="0">Send unsolicited, spam, or bulk messages to individuals who have not opted in to receive communications from you</span>,
                    <span key="1">Transmit content that is illegal, fraudulent, defamatory, obscene, harassing, or infringes on the rights of others</span>,
                    <span key="2">Impersonate any person or entity, or misrepresent your affiliation with any person or entity</span>,
                    <span key="3">Upload malicious code, attempt to breach security, or interfere with the integrity or performance of the Service</span>,
                    <span key="4">Use the Service to violate any applicable law, regulation, or third-party rights, including data protection and anti-spam laws</span>,
                    <span key="5">Reverse-engineer, decompile, or attempt to extract the source code of the Service, except as permitted by law</span>,
                  ]}
                />
              <p>
                We reserve the right to suspend or terminate accounts that
                violate this Acceptable Use Policy.
              </p>
            </PolicySection>

            <PolicySection id="whatsapp-compliance" number={7} title="WhatsApp Platform Compliance">
              <p>
                Because NEXTOSA sends and receives messages through the
                WhatsApp Business Platform, you agree to comply with
                Meta&apos;s WhatsApp Business Messaging Policy and related
                platform terms, including:
              </p>
              <PolicyList
                  items={[
                    <span key="0">Obtaining valid opt-in consent from End Users before messaging them on WhatsApp</span>,
                    <span key="1">Only using approved message templates for outbound, business-initiated conversations as required by WhatsApp</span>,
                    <span key="2">Not sending prohibited content categories under WhatsApp&apos;s Commerce and Business Policies (including content related to illegal products, deceptive practices, or restricted goods and services)</span>,
                    <span key="3">Honoring opt-out requests from End Users promptly</span>,
                    <span key="4">Maintaining accurate business information on your WhatsApp Business profile</span>,
                  ]}
                />
              <p>
                You are solely responsible for your compliance with
                Meta&apos;s policies. NEXTOSA may suspend WhatsApp
                functionality on your account if Meta flags or restricts your
                number due to policy violations, and NEXTOSA is not liable
                for actions taken by Meta against your WhatsApp Business
                account.
              </p>
            </PolicySection>

            <PolicySection id="content-ownership" number={8} title="Your Content & Data">
              <p>
                You retain ownership of all data, documents, client
                information, and content you upload or generate through the
                Service (&ldquo;Customer Content&rdquo;). You grant NEXTOSA a
                limited, non-exclusive license to use, store, and process
                Customer Content solely to provide and improve the Service.
              </p>
              <p>
                You are responsible for ensuring you have the necessary
                rights and consents to upload and process any Customer
                Content, including personal data of your End Users, in
                compliance with applicable data protection laws.
              </p>
            </PolicySection>

            <PolicySection id="ai-disclaimer" number={9} title="AI-Generated Content">
              <p>
                NEXTOSA uses artificial intelligence to generate automated
                responses, summaries, and suggestions based on the data and
                documents you provide. AI-generated content may occasionally
                be inaccurate, incomplete, or inappropriate for a specific
                context.
              </p>
              <PolicyList
                  items={[
                    <span key="0">You are responsible for reviewing and, where appropriate, approving AI-generated communications sent to your clients.</span>,
                    <span key="1">NEXTOSA does not guarantee the accuracy or completeness of AI-generated responses and disclaims liability for decisions made based on such content.</span>,
                  ]}
                />
            </PolicySection>

            <PolicySection id="intellectual-property" number={10} title="Intellectual Property">
              <p>
                The Service, including its software, design, branding, and
                underlying technology, is owned by NEXTOSA and protected by
                intellectual property laws. Except for the limited rights
                granted to use the Service, no other rights are granted to
                you. You may not copy, modify, distribute, or create
                derivative works from the Service without our prior written
                consent.
              </p>
            </PolicySection>

            <PolicySection id="third-party-services" number={11} title="Third-Party Services">
              <p>
                The Service relies on and integrates with third-party
                services, including the Meta/WhatsApp Business Platform,
                cloud hosting providers, AI service providers, and payment
                processors. Your use of these integrations may be subject to
                the respective third party&apos;s own terms and policies. NEXTOSA
                is not responsible for the availability, performance, or
                practices of third-party services beyond our reasonable
                control.
              </p>
            </PolicySection>

            <PolicySection id="confidentiality" number={12} title="Confidentiality">
              <p>
                Each party agrees to protect the other&apos;s confidential
                information with the same degree of care it uses to protect
                its own confidential information, and not to disclose it to
                third parties except as necessary to perform obligations
                under these Terms or as required by law.
              </p>
            </PolicySection>

            <PolicySection id="disclaimers" number={13} title="Disclaimers & Warranties">
              <p>
                THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
                AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER
                EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR
                UNINTERRUPTED AND ERROR-FREE OPERATION. NEXTOSA DOES NOT
                WARRANT THAT THE SERVICE WILL MEET YOUR REQUIREMENTS OR THAT
                DEFECTS WILL BE CORRECTED.
              </p>
            </PolicySection>

            <PolicySection id="liability" number={14} title="Limitation of Liability">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEXTOSA AND ITS
                OWNERS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
                DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL,
                ARISING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY FOR
                ANY CLAIM ARISING FROM THESE TERMS OR THE SERVICE SHALL NOT
                EXCEED THE AMOUNT YOU PAID TO NEXTOSA IN THE TWELVE (12)
                MONTHS PRECEDING THE CLAIM.
              </p>
            </PolicySection>

            <PolicySection id="indemnification" number={15} title="Indemnification">
              <p>
                You agree to indemnify and hold harmless NEXTOSA and its
                owners, employees, and affiliates from any claims, damages,
                liabilities, and expenses (including reasonable legal fees)
                arising from your use of the Service, your violation of these
                Terms, or your violation of any applicable law or third-party
                right, including WhatsApp messaging and data protection
                obligations.
              </p>
            </PolicySection>

            <PolicySection id="termination" number={16} title="Termination">
              <PolicyList
                  items={[
                    <span key="0">You may cancel your subscription at any time through your account settings; cancellation will take effect at the end of the current billing period.</span>,
                    <span key="1">We may suspend or terminate your access to the Service, with or without notice, if you violate these Terms, fail to pay applicable fees, or engage in conduct that harms NEXTOSA, other users, or third parties.</span>,
                    <span key="2">Upon termination, your right to use the Service will cease, and we may delete your data after a reasonable retention period, except where retention is required by law. The Privacy Policy explains the 30-day read-only grace period after a plan ends.</span>,
                  ]}
                />
            </PolicySection>

            <PolicySection id="governing-law" number={17} title="Governing Law">
              <PolicyList
                items={[
                  <span key="0"><strong className="text-navy-900">Governing law.</strong> These Terms are governed by the laws of India, without regard to conflict of law principles.</span>,
                  <span key="1"><strong className="text-navy-900">Negotiation first.</strong> Any dispute arising from these Terms or the Service must first be addressed through good-faith negotiation for 30 days from the date one party notifies the other of the dispute.</span>,
                  <span key="2"><strong className="text-navy-900">Arbitration.</strong> If the dispute is not resolved within those 30 days, it shall be settled by binding arbitration in Jaipur, Rajasthan, under the Arbitration and Conciliation Act, 1996.</span>,
                  <span key="3"><strong className="text-navy-900">Courts.</strong> The competent courts in Jaipur, Rajasthan have exclusive jurisdiction for any court proceedings, including those to support or enforce arbitration.</span>,
                ]}
              />
            </PolicySection>

            <PolicySection id="changes" number={18} title="Changes to These Terms">
              <p>
                We may update these Terms from time to time. We will post the
                revised Terms on this page with an updated &ldquo;Last
                updated&rdquo; date, and where changes are material, we will
                provide additional notice (such as email). Your continued use
                of the Service after changes take effect constitutes
                acceptance of the revised Terms.
              </p>
            </PolicySection>

            <PolicySection id="contact" number={19} title="Contact Us">
              <p>
                If you have any questions about these Terms, please contact
                us:
              </p>
              <PolicyList
                  items={[
                    <span key="0">Email:{" "} <a href={`mailto:${siteConfig.email}`} className="text-accent-600 hover:underline" > {siteConfig.email} </a></span>,
                    <span key="1">Attn: {siteConfig.founder}, {siteConfig.name}</span>,
                  ]}
                />
            </PolicySection>
              <div className="flex flex-wrap gap-3 pt-2 text-sm">
                <Link href="/privacy" className="rounded-full border border-slate-200 px-4 py-2 font-medium text-navy-900 hover:border-accent-400 hover:text-accent-700">Privacy Policy</Link>
                <Link href="/security" className="rounded-full border border-slate-200 px-4 py-2 font-medium text-navy-900 hover:border-accent-400 hover:text-accent-700">Security</Link>
                <Link href="/plan-limits" className="rounded-full border border-slate-200 px-4 py-2 font-medium text-navy-900 hover:border-accent-400 hover:text-accent-700">Plan limits</Link>
                <Link href="/contact" className="rounded-full bg-navy-900 px-4 py-2 font-medium text-white hover:bg-navy-800">Contact us</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
