import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import { MobilePolicyTOC, PolicyTOC, PrintButton, ReadingProgress, type TocItem } from "@/components/legal/PolicyNav";
import { GlanceCards, PolicyCallout, PolicyList, PolicySection, PolicyTable, icons } from "@/components/legal/PolicyBlocks";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How NEXTOSA collects, uses, stores and protects data: account and workspace data, WhatsApp and email data, AI processing, health data in hospital mode, service providers, retention and your rights.",
  path: "/privacy",
});

const LAST_UPDATED = "November 10, 2026";

const toc: TocItem[] = [
  { id: "introduction", label: "1. Introduction" },
  { id: "who-we-are", label: "2. Who we are" },
  { id: "information-we-collect", label: "3. Information we collect" },
  { id: "whatsapp-data", label: "4. WhatsApp and Meta" },
  { id: "connected-services", label: "5. Email and other connections" },
  { id: "payments", label: "6. Payments" },
  { id: "health-data", label: "7. Health and sensitive data" },
  { id: "ai-processing", label: "8. AI and automated processing" },
  { id: "legal-basis", label: "9. Legal basis" },
  { id: "how-we-use", label: "10. How we use information" },
  { id: "data-sharing", label: "11. Sharing and service providers" },
  { id: "international-transfers", label: "12. International transfers" },
  { id: "data-retention", label: "13. Retention and account expiry" },
  { id: "data-security", label: "14. Security" },
  { id: "your-rights", label: "15. Your rights" },
  { id: "other-rights", label: "16. Regional rights" },
  { id: "cookies", label: "17. Cookies and analytics" },
  { id: "website", label: "18. Website visitors" },
  { id: "children", label: "19. Children" },
  { id: "breach", label: "20. Data breaches" },
  { id: "third-party-links", label: "21. Third-party links" },
  { id: "changes", label: "22. Changes" },
  { id: "contact", label: "23. Contact us" },
];

const mail = (
  <a href={`mailto:${siteConfig.email}`} className="font-medium text-accent-600 hover:underline">
    {siteConfig.email}
  </a>
);

export default function PrivacyPolicyPage() {
  return (
    <>
      <ReadingProgress />

      <section className="relative overflow-hidden theme-light pb-20 pt-20 sm:pb-24 sm:pt-24">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <Container className="relative text-center">
          <Badge>Legal</Badge>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-6xl">Privacy Policy</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            What we collect, why we collect it, who it is shared with, how long we keep it and the choices you have. Written to be read, not skipped.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-300">Last updated: {LAST_UPDATED}</span>
            <PrintButton />
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-14">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">The short version</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">Six things to know before you read the rest</h2>
          <div className="mt-8">
            <GlanceCards
              items={[
                { title: "We never sell your data", text: "Not yours, and not your customers’. It is used only to run the features you switch on.", icon: icons.noSale },
                { title: "Your workspace is separate", text: "Every record belongs to one organization, and every request is checked on the server against it.", icon: icons.shield },
                { title: "Credentials are encrypted", text: "WhatsApp tokens, payment secrets and integration keys are stored encrypted and never shown back.", icon: icons.lock },
                { title: "AI is something you turn on", text: "AI replies, agents and drafting are switched on by you, and for patient data it is off by default.", icon: icons.spark },
                { title: "You can export your data", text: "Built-in export tools let you take your records with you, including during the 30-day grace period.", icon: icons.download },
                { title: "You stay in control", text: "Ask us to access, correct or delete personal data. Customers’ own clients can ask the business first.", icon: icons.person },
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
              <PolicySection id="introduction" number={1} title="Introduction">
                <p>
                  This Privacy Policy explains how NEXTOSA (“we”, “us”) handles personal data when you use our website and our CRM, ERP, finance and WhatsApp automation platform (the “Service”). It covers two groups of people: our business customers (“Customers”, “you”) and the people those Customers communicate with or keep records about through NEXTOSA (“End Users”), such as clients, patients, students, guests and members.
                </p>
                <p>
                  We aim to follow applicable data protection law, including the EU General Data Protection Regulation (GDPR) and India’s Digital Personal Data Protection Act, 2023. By using the Service you confirm that you have read this Policy. If you do not agree with it, please do not use the Service.
                </p>
                <PolicyCallout>
                  Customers decide what to put into their workspace. For that data, we work on the Customer’s instructions and the Customer is responsible for having a lawful reason to hold it.
                </PolicyCallout>
              </PolicySection>

              <PolicySection id="who-we-are" number={2} title="Who we are and our role">
                <p>
                  NEXTOSA is the <strong className="text-navy-900">data controller</strong> for account and platform data (who signs in, billing, support, our website). For the client, patient, student, message and document data a Customer manages in their workspace, NEXTOSA acts as a <strong className="text-navy-900">data processor</strong> on the Customer’s behalf, and the Customer is the controller.
                </p>
                <PolicyList
                  items={[
                    <span key="a"><strong className="text-navy-900">Business name:</strong> NEXTOSA</span>,
                    <span key="b"><strong className="text-navy-900">Owner / operator:</strong> {siteConfig.founder}</span>,
                    <span key="c"><strong className="text-navy-900">Contact:</strong> {mail}</span>,
                  ]}
                />
                <p>If you are an End User and want to exercise a right over data a business holds about you, please contact that business first. We will help the business respond.</p>
              </PolicySection>

              <PolicySection id="information-we-collect" number={3} title="Information we collect">
                <PolicyTable
                  head={["Category", "What it includes", "Why we have it"]}
                  rows={[
                    ["Account and business", "Name, email, phone, business name, industry, address, tax ID, password (stored only as a hash) or Google sign-in identity, subscription and plan details.", "To create and secure your account, issue invoices in your name and bill your subscription."],
                    ["Workspace data you enter", "Contacts and clients, deals, service records, invoices, payments, expenses, inventory, staff and payroll records, documents you upload, notes and settings.", "To provide the modules you use. You control what is stored."],
                    ["Messaging data", "WhatsApp numbers you connect, message text and media, timestamps, delivery status, End User phone numbers and names, templates. Email content when you connect Gmail.", "To send, receive and show conversations and to run automations and AI replies you enable."],
                    ["Portal and form data", "Details entered by End Users in portals, QR table ordering, booking pages and connected websites, such as name, phone and what they ordered or booked.", "To complete the order, booking or request."],
                    ["Technical and usage data", "IP address, browser and device type, pages and features used, error logs and security events.", "To run, secure, debug and improve the Service and to detect abuse."],
                    ["Support and enquiries", "Messages you send us, including through our website contact form.", "To answer you and keep a record of the conversation."],
                  ]}
                />
                <p>We do not knowingly collect more than a feature needs. Where a field is optional, leaving it blank does not stop you using the rest of the Service.</p>
              </PolicySection>

              <PolicySection id="whatsapp-data" number={4} title="WhatsApp Business Platform and Meta data">
                <p>NEXTOSA connects to the WhatsApp Business Platform operated by Meta. When you connect a number:</p>
                <PolicyList
                  items={[
                    "Messages, media and contact details pass through Meta’s infrastructure and are also subject to Meta’s own privacy policy and WhatsApp Business messaging policy.",
                    "We access WhatsApp data only to provide what you asked for: showing conversations, AI replies and drafts, reminders, templates, campaigns and automations.",
                    "Access tokens you give us are stored encrypted and are never logged or sent back to your browser.",
                    "We do not use WhatsApp data for advertising and we do not sell it.",
                  ]}
                />
                <PolicyCallout kind="important">
                  Customers are responsible for having an appropriate opt-in from End Users before messaging them on WhatsApp, and for honouring opt-outs. NEXTOSA’s broadcast tools always skip contacts who have opted out.
                </PolicyCallout>
              </PolicySection>

              <PolicySection id="connected-services" number={5} title="Email, Instagram and other connections">
                <p>Each connection is optional, is made by you, and can be disconnected by you at any time.</p>
                <PolicyTable
                  head={["Connection", "What we access", "What we do with it"]}
                  rows={[
                    ["Gmail", "Permission to send email and to read incoming email in the connected mailbox.", "Send invoices, receipts and campaigns from your address. If you switch on AI replies to your inbox, read only new customer emails that arrive afterwards and draft a threaded reply. Newsletters, automated mail and your own messages are skipped. Mail from before you switched it on is not read for replies."],
                    ["Instagram and Meta", "Your Instagram Business account and linked Page, and your ad account if you use paid ads.", "Publish posts you or the Marketing Agent prepare, and create ad campaigns that stay paused until you activate them."],
                    ["Razorpay", "The API keys of your own Razorpay account.", "Create payment links and confirm payments. See Payments below."],
                    ["Shopify, Slack, Zapier, webhooks, connected websites", "The credentials or API keys you provide, and the data you choose to send or receive.", "Run the actions you configure, such as syncing a catalog, posting to a channel or sending a signed webhook."],
                  ]}
                />
                <p>
                  We use data we receive from Google and Meta only to provide and improve the features you have turned on. We do not use it for advertising, we do not sell it, and we do not let people read it except where needed to provide support you ask for, to keep the Service secure or to comply with law.
                </p>
              </PolicySection>

              <PolicySection id="payments" number={6} title="Payments">
                <PolicyList
                  items={[
                    "Our own subscription is paid through a third-party payment provider. We do not store full card or bank account numbers on our servers.",
                    "If you connect your own Razorpay account, your customers pay you directly. NEXTOSA does not hold the funds. We store your Razorpay keys encrypted and use them only to create payment links, show QR codes and read payment confirmations.",
                    "We keep the invoice and payment records you create, because they form your accounting history.",
                  ]}
                />
              </PolicySection>

              <PolicySection id="health-data" number={7} title="Health and other sensitive data">
                <p>
                  Healthcare Customers may store patient information. A Customer must switch on <strong className="text-navy-900">hospital mode</strong> deliberately to use hospital features, and the following protections then apply:
                </p>
                <PolicyList
                  items={[
                    "Every access to patient data is written to an append-only audit log that is chained so that edited or removed entries can be detected. It is kept for at least six years.",
                    "Patient documents are encrypted with their own keys and stored in a separate private store. There is no public link to a document; it is only streamed to someone who has access.",
                    "Doctors and nurses see patients through a treating relationship such as an open consultation or care team, not by role alone. Opening a chart outside your team needs a written reason, is read-only and is reviewed afterwards.",
                    "Patient data is sent to an AI provider only if the platform operator has confirmed zero data retention with the provider, the Customer has opted in, and the text has first been de-identified. Patient files are never sent to AI.",
                  ]}
                />
                <p>Customers using NEXTOSA for health data are responsible for meeting the health-privacy rules that apply to them, and should not enter more clinical detail than they need.</p>
              </PolicySection>

              <PolicySection id="ai-processing" number={8} title="AI and automated processing">
                <p>
                  NEXTOSA uses AI to power features such as automated WhatsApp and email replies, the Sales, Support and Marketing agents, reading uploaded invoices and receipts, chatting with documents, writing help and drafting automations. To do this, relevant message text, document content and the Customer’s own instructions and catalog are sent to AI providers.
                </p>
                <PolicyList
                  items={[
                    "AI features are controlled by the Customer. They can be switched off, run in an approval mode where a person reviews each reply, or tested first in a safe test chat.",
                    "Our AI providers process this data under data protection terms, and they do not use Customer data to train their general-purpose models.",
                    "Support Agents answer only from the Customer’s own knowledge base and hand over to a person when they cannot help.",
                    "AI output can be wrong. Customers should review important replies, and decisions with legal or serious effect on a person should not be left to AI alone.",
                  ]}
                />
              </PolicySection>

              <PolicySection id="legal-basis" number={9} title="Legal basis for processing">
                <p>Where GDPR applies, we rely on:</p>
                <PolicyList
                  items={[
                    <span key="a"><strong className="text-navy-900">Contract:</strong> to provide the Service you signed up for.</span>,
                    <span key="b"><strong className="text-navy-900">Legitimate interests:</strong> to secure, support and improve the Service and prevent fraud.</span>,
                    <span key="c"><strong className="text-navy-900">Consent:</strong> for optional marketing and for End User opt-ins, which can be withdrawn.</span>,
                    <span key="d"><strong className="text-navy-900">Legal obligation:</strong> to comply with law and lawful requests from authorities.</span>,
                  ]}
                />
              </PolicySection>

              <PolicySection id="how-we-use" number={10} title="How we use information">
                <PolicyList
                  items={[
                    "Provide, operate and maintain the Service and the modules you use.",
                    "Run messaging, reminders, templates, campaigns, automations and AI features you enable.",
                    "Process subscriptions and provide customer support.",
                    "Send service messages such as billing notices, security alerts and low-stock or limit warnings.",
                    "Detect, investigate and prevent fraud, abuse and security incidents.",
                    "Understand which pages and features help people, in aggregate, so we can improve them.",
                  ]}
                />
              </PolicySection>

              <PolicySection id="data-sharing" number={11} title="Sharing and service providers">
                <p>We do not sell personal data. We share it only with service providers who help us run the Service, and in the situations below.</p>
                <PolicyTable
                  head={["Provider type", "Used for"]}
                  rows={[
                    ["Meta / WhatsApp", "Sending and receiving WhatsApp messages and Instagram publishing."],
                    ["Cloud hosting and storage", "Running the website and servers, the database, queues and file storage."],
                    ["AI providers", "Generating replies, reading documents, search by meaning and creating images or video you request."],
                    ["Payment providers", "Our subscription billing, and payments through your own connected Razorpay account."],
                    ["Email delivery", "Service emails from NEXTOSA, and mail sent from your own connected Gmail."],
                    ["Analytics", "Counting visits and clicks on our public website, without cookies."],
                  ]}
                />
                <p>We may also disclose information when required by law, court order or to protect rights, safety and security, or in connection with a merger or sale of the business, in which case we will tell you and this Policy’s protections will continue to apply.</p>
              </PolicySection>

              <PolicySection id="international-transfers" number={12} title="International data transfers">
                <p>
                  Our providers may process data in countries other than yours. Where personal data is transferred out of the European Economic Area, we rely on appropriate safeguards such as Standard Contractual Clauses. You can ask us for more detail using the contact below.
                </p>
              </PolicySection>

              <PolicySection id="data-retention" number={13} title="Retention, usage limits and account expiry">
                <p>We keep personal data only as long as needed for the purposes in this Policy and to meet legal and accounting duties.</p>
                <PolicyList
                  items={[
                    <span key="a"><strong className="text-navy-900">Usage limits.</strong> Plans include limits such as AI tokens, WhatsApp messages, seats and storage. Reaching a limit blocks only the action that went over, until your cycle resets or you upgrade. Nothing is deleted.</span>,
                    <span key="b"><strong className="text-navy-900">Expiry and 30-day grace period.</strong> When a trial or subscription ends, active services are paused. For 30 days from the expiry date your data remains safe and you keep read-only access so you can view and export it.</span>,
                    <span key="c"><strong className="text-navy-900">Permanent deletion.</strong> If you do not renew within the 30-day grace period, the organization’s data, including CRM records, documents and logs, is permanently deleted and cannot be recovered.</span>,
                    <span key="d"><strong className="text-navy-900">Records kept longer.</strong> Some records are kept longer by design or law, such as the access log for hospital mode (at least six years), clinical documents and accounting entries.</span>,
                  ]}
                />
                <PolicyCallout kind="important">
                  Export what you need before the grace period ends. Once data is deleted we cannot bring it back.
                </PolicyCallout>
              </PolicySection>

              <PolicySection id="data-security" number={14} title="Security">
                <p>We use layered protections and we keep improving them. They include:</p>
                <PolicyList
                  items={[
                    "Encryption in transit, and encryption at rest for stored credentials and for sensitive files.",
                    "Strict separation between workspaces: every request is scoped to your organization on the server.",
                    "Role and permission checks on the server for every request, with portals limited to a short allow-list of routes.",
                    "Re-entering your password or signing in again for sensitive actions such as disconnecting a payment connection.",
                    "Audit logs for sensitive actions, and verified incoming events from payment, email and messaging providers.",
                    "Rate limits on public endpoints and sign-in attempts.",
                  ]}
                />
                <p>
                  No system is perfectly secure. You help by using a strong password, giving each person only the permissions they need and removing people who leave. See our <Link href="/security" className="font-medium text-accent-600 hover:underline">Security page</Link> for more.
                </p>
              </PolicySection>

              <PolicySection id="your-rights" number={15} title="Your privacy rights">
                <p>Depending on where you live, you may have the right to:</p>
                <PolicyList
                  items={[
                    <span key="a"><strong className="text-navy-900">Access</strong> a copy of your personal data.</span>,
                    <span key="b"><strong className="text-navy-900">Correct</strong> data that is wrong or incomplete.</span>,
                    <span key="c"><strong className="text-navy-900">Erase</strong> your personal data, where the law allows.</span>,
                    <span key="d"><strong className="text-navy-900">Restrict</strong> or <strong className="text-navy-900">object</strong> to certain processing.</span>,
                    <span key="e"><strong className="text-navy-900">Port</strong> your data in a machine-readable format.</span>,
                    <span key="f"><strong className="text-navy-900">Withdraw consent</strong> at any time, without affecting what was done before.</span>,
                  ]}
                />
                <p>
                  You can export many records yourself from the lists in the app. To make a request, email {mail}. We may need to confirm who you are first, and we aim to reply within 30 days. You may also complain to your local data protection authority.
                </p>
              </PolicySection>

              <PolicySection id="other-rights" number={16} title="Regional rights">
                <p>
                  Residents of some places, such as California, have additional rights, including to know what is collected and to be treated equally when they use their rights. We do not “sell” or “share” personal information as those terms are defined under the CCPA. In India we handle requests in line with the Digital Personal Data Protection Act, 2023, including the right to nominate someone to act for you.
                </p>
              </PolicySection>

              <PolicySection id="cookies" number={17} title="Cookies and analytics">
                <p>
                  The application uses cookies and similar browser storage to keep you signed in and remember preferences such as theme and language. You can block them in your browser, though some features may stop working.
                </p>
                <p>
                  On our public website we use Vercel Web Analytics to count visits and clicks on buttons such as “Start free trial” or “Contact”. It records the page, the button text and the section of the page. It does not use cookies, and we do not send it your name, email address or phone number.
                </p>
              </PolicySection>

              <PolicySection id="website" number={18} title="Website visitors and enquiries">
                <p>
                  If you use the contact form on our website, we store the details you send (such as name, email and message) so we can reply, and we email them to our team. We use them only to respond to you and to keep a record of the enquiry, and they are not added to any marketing list without your agreement.
                </p>
              </PolicySection>

              <PolicySection id="children" number={19} title="Children’s privacy">
                <p>
                  The Service is meant for businesses and for people aged 18 and over. We do not knowingly collect personal data from children under 16 for our own purposes. Schools and similar Customers may record information about students and guardians as part of their own operations, and are responsible for doing so lawfully and with any consent required.
                </p>
              </PolicySection>

              <PolicySection id="breach" number={20} title="Data breach notification">
                <p>
                  If a breach poses a risk to people’s rights, we will tell affected Customers and the relevant authorities without undue delay, as required by law, and explain what happened and what to do.
                </p>
              </PolicySection>

              <PolicySection id="third-party-links" number={21} title="Third-party links">
                <p>
                  The Service may link to other sites and platforms such as Meta, Google and Razorpay. We are not responsible for their privacy practices, so please read their policies.
                </p>
              </PolicySection>

              <PolicySection id="changes" number={22} title="Changes to this Policy">
                <p>
                  We may update this Policy. We will post the new version here with a new “Last updated” date, and tell Customers of material changes by email or an in-app notice.
                </p>
              </PolicySection>

              <PolicySection id="contact" number={23} title="Contact us">
                <p>Questions, concerns or requests about this Policy or about your data:</p>
                <PolicyList
                  items={[
                    <span key="a">Email: {mail}</span>,
                    <span key="b">Attn: {siteConfig.founder}, {siteConfig.name}</span>,
                  ]}
                />
                <div className="flex flex-wrap gap-3 pt-2 text-sm">
                  <Link href="/terms" className="rounded-full border border-slate-200 px-4 py-2 font-medium text-navy-900 hover:border-accent-400 hover:text-accent-700">Terms of Service</Link>
                  <Link href="/security" className="rounded-full border border-slate-200 px-4 py-2 font-medium text-navy-900 hover:border-accent-400 hover:text-accent-700">Security</Link>
                  <Link href="/plan-limits" className="rounded-full border border-slate-200 px-4 py-2 font-medium text-navy-900 hover:border-accent-400 hover:text-accent-700">Plan limits</Link>
                  <Link href="/contact" className="rounded-full bg-navy-900 px-4 py-2 font-medium text-white hover:bg-navy-800">Contact us</Link>
                </div>
              </PolicySection>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
