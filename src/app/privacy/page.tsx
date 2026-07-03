import type { Metadata } from "next";
import {
  LegalHero,
  LegalTOC,
  LegalSection,
  LegalPage,
} from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "NEXTOSA Privacy Policy: how we collect, use, store, and protect your data, including data processed through the WhatsApp Business Platform.",
};

const LAST_UPDATED = "July 3, 2026";

const toc = [
  { id: "introduction", label: "1. Introduction" },
  { id: "data-controller", label: "2. Data Controller" },
  { id: "information-we-collect", label: "3. Information We Collect" },
  { id: "whatsapp-data", label: "4. WhatsApp Business API & Meta Data" },
  { id: "legal-basis", label: "5. Legal Basis for Processing" },
  { id: "how-we-use", label: "6. How We Use Your Information" },
  { id: "ai-processing", label: "7. AI & Automated Processing" },
  { id: "data-sharing", label: "8. Data Sharing & Third Parties" },
  { id: "international-transfers", label: "9. International Data Transfers" },
  { id: "data-retention", label: "10. Data Retention" },
  { id: "data-security", label: "11. Data Security" },
  { id: "your-rights", label: "12. Your Privacy Rights (GDPR)" },
  { id: "other-rights", label: "13. Other Regional Rights" },
  { id: "cookies", label: "14. Cookies & Tracking" },
  { id: "children", label: "15. Children's Privacy" },
  { id: "breach", label: "16. Data Breach Notification" },
  { id: "third-party-links", label: "17. Third-Party Links" },
  { id: "changes", label: "18. Changes to This Policy" },
  { id: "contact", label: "19. Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHero title="Privacy Policy" lastUpdated={LAST_UPDATED} />
      <LegalPage>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr]">
          <div className="hidden lg:block">
            <LegalTOC items={toc} />
          </div>

          <div className="space-y-10 lg:max-w-3xl">
            <p className="text-sm leading-7 text-slate-600">
              NEXTOSA (&ldquo;NEXTOSA,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
              or &ldquo;our&rdquo;) provides an AI-powered CRM and WhatsApp
              automation platform (the &ldquo;Service&rdquo;) to businesses.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard information when you use our website
              ({siteConfig.url}), our web application, and any related
              services, including our integration with the WhatsApp Business
              Platform operated by Meta Platforms, Inc. (&ldquo;Meta&rdquo;).
            </p>

            <LegalSection id="introduction" title="1. Introduction">
              <p>
                We are committed to protecting the privacy and security of
                personal data belonging to our business customers
                (&ldquo;Customers,&rdquo; &ldquo;you&rdquo;) and the end
                clients that Customers communicate with through NEXTOSA
                (&ldquo;End Users&rdquo;). This Policy is designed to comply
                with the EU General Data Protection Regulation (GDPR), and
                describes the categories of data we process, the purposes and
                legal bases for processing, and the rights available to data
                subjects.
              </p>
              <p>
                By using the Service, you acknowledge that you have read and
                understood this Privacy Policy. If you do not agree with this
                Policy, please do not use the Service.
              </p>
            </LegalSection>

            <LegalSection id="data-controller" title="2. Data Controller">
              <p>
                For the purposes of GDPR, NEXTOSA acts as the data controller
                for account and platform data, and as a data processor on
                behalf of our business Customers for the client and message
                data they manage through the Service.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Business name:</strong> NEXTOSA
                </li>
                <li>
                  <strong>Owner/Operator:</strong> {siteConfig.founder}
                </li>
                <li>
                  <strong>Contact email:</strong>{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-accent-600 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
              <p>
                For any privacy-related requests or questions, contact us
                using the details above or in Section 19 (Contact Us).
              </p>
            </LegalSection>

            <LegalSection
              id="information-we-collect"
              title="3. Information We Collect"
            >
              <p>We collect the following categories of information:</p>
              <p className="font-semibold text-navy-900">
                a) Account &amp; Business Information
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Name, email address, and phone number</li>
                <li>Business name, industry, and business address</li>
                <li>
                  Login credentials (passwords are stored using industry
                  standard hashing and are never stored in plain text)
                </li>
                <li>Billing and subscription information</li>
              </ul>
              <p className="font-semibold text-navy-900">
                b) WhatsApp &amp; Communication Data
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  WhatsApp Business phone numbers connected to your account
                </li>
                <li>
                  Message content, timestamps, delivery status, and media
                  (images, documents, audio) exchanged between you and your
                  End Users via the WhatsApp Business Platform
                </li>
                <li>
                  End User phone numbers, names, and profile information made
                  available through WhatsApp
                </li>
                <li>Message templates you create for sending on WhatsApp</li>
              </ul>
              <p className="font-semibold text-navy-900">
                c) Client &amp; CRM Data
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Client records, notes, tags, and interaction history you
                  create or import into NEXTOSA
                </li>
                <li>
                  Documents you upload (contracts, invoices, price lists,
                  FAQs, knowledge-base files) for storage or for training the
                  AI Q&amp;A assistant
                </li>
              </ul>
              <p className="font-semibold text-navy-900">
                d) Technical &amp; Usage Data
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  IP address, browser type, device identifiers, and operating
                  system
                </li>
                <li>
                  Log data such as pages visited, features used, and
                  timestamps of activity
                </li>
                <li>Cookies and similar tracking technologies (Section 14)</li>
              </ul>
              <p className="font-semibold text-navy-900">
                e) Payment Information
              </p>
              <p>
                Payments are processed by third-party payment providers.
                NEXTOSA does not store full credit card or bank account
                numbers on its own servers.
              </p>
            </LegalSection>

            <LegalSection
              id="whatsapp-data"
              title="4. WhatsApp Business API & Meta Data"
            >
              <p>
                NEXTOSA integrates with the WhatsApp Business Platform
                (WhatsApp Business API) provided by Meta to enable messaging
                automation. When you connect a WhatsApp Business number to
                NEXTOSA, the following applies:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Messages, media, and contact information you send or
                  receive through WhatsApp are transmitted through
                  Meta&apos;s infrastructure and are subject to Meta&apos;s
                  own Privacy Policy and WhatsApp Business Messaging Policy,
                  in addition to this Policy.
                </li>
                <li>
                  NEXTOSA accesses WhatsApp data (messages, phone numbers,
                  templates, delivery/read receipts) solely to provide the
                  Service you have requested — including AI-generated
                  responses, reminders, template delivery, client
                  organization, and Away Mode automation.
                </li>
                <li>
                  We do not use data obtained through the WhatsApp Business
                  Platform for advertising purposes, and we do not sell
                  WhatsApp data to third parties, in accordance with
                  Meta&apos;s Platform Terms and WhatsApp Business Data
                  Processing Terms.
                </li>
                <li>
                  We retain WhatsApp conversation data only for as long as
                  necessary to provide the Service, comply with legal
                  obligations, or as configured by the business Customer
                  (Section 10).
                </li>
                <li>
                  Businesses using NEXTOSA are responsible for ensuring they
                  have appropriate consent or opt-in from End Users before
                  messaging them via WhatsApp, in line with WhatsApp&apos;s
                  Business Messaging Policy and applicable law.
                </li>
              </ul>
              <p>
                For more information on how Meta handles data on the WhatsApp
                Business Platform, please refer to Meta&apos;s Privacy Policy
                and WhatsApp&apos;s own Privacy Policy directly.
              </p>
            </LegalSection>

            <LegalSection id="legal-basis" title="5. Legal Basis for Processing">
              <p>
                Where GDPR applies, we rely on the following legal bases to
                process personal data:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Performance of a contract</strong> — to provide the
                  Service you signed up for, including CRM features, WhatsApp
                  automation, and AI Q&amp;A.
                </li>
                <li>
                  <strong>Legitimate interests</strong> — to improve,
                  secure, and support the Service, prevent fraud, and
                  communicate with Customers about their accounts.
                </li>
                <li>
                  <strong>Consent</strong> — where required, such as for
                  optional marketing communications or specific End User
                  opt-ins for WhatsApp messaging.
                </li>
                <li>
                  <strong>Legal obligation</strong> — to comply with
                  applicable laws, regulations, or lawful requests from
                  authorities.
                </li>
              </ul>
            </LegalSection>

            <LegalSection id="how-we-use" title="6. How We Use Your Information">
              <ul className="list-disc space-y-2 pl-6">
                <li>Provide, operate, and maintain the NEXTOSA platform</li>
                <li>
                  Enable WhatsApp messaging automation, reminders, templates,
                  and Away Mode
                </li>
                <li>
                  Power the AI Q&amp;A assistant and AI customer support
                  features using your uploaded documents and business data
                </li>
                <li>Process transactions and manage subscriptions</li>
                <li>
                  Provide customer support and respond to inquiries
                </li>
                <li>
                  Monitor, detect, and prevent fraud, abuse, or security
                  incidents
                </li>
                <li>
                  Send service-related notifications and, with consent,
                  product updates or marketing communications
                </li>
                <li>Comply with legal obligations and enforce our Terms</li>
              </ul>
            </LegalSection>

            <LegalSection id="ai-processing" title="7. AI & Automated Processing">
              <p>
                NEXTOSA uses artificial intelligence and machine learning
                models to power features such as AI Q&amp;A, AI customer
                support, and automated WhatsApp replies. This involves
                processing message content and uploaded documents to generate
                relevant, automated responses.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Some AI processing may be performed by trusted third-party
                  AI service providers under contractual data protection
                  terms; these providers do not use your data to train their
                  general-purpose models except where explicitly disclosed.
                </li>
                <li>
                  NEXTOSA&apos;s automated responses assist with customer
                  communication and do not make decisions that produce legal
                  effects or similarly significant effects on End Users
                  within the meaning of GDPR Article 22.
                </li>
                <li>
                  Business Customers can review, edit, or disable AI-generated
                  automation at any time from their dashboard.
                </li>
              </ul>
            </LegalSection>

            <LegalSection id="data-sharing" title="8. Data Sharing & Third Parties">
              <p>
                We do not sell your personal data. We may share information
                with the following categories of recipients, solely as
                necessary to provide the Service:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Meta / WhatsApp Business Platform</strong> — to
                  send and receive WhatsApp messages on your behalf.
                </li>
                <li>
                  <strong>Cloud hosting &amp; infrastructure providers</strong>{" "}
                  — to store and process data securely.
                </li>
                <li>
                  <strong>AI service providers</strong> — to generate
                  AI-powered responses and Q&amp;A functionality.
                </li>
                <li>
                  <strong>Payment processors</strong> — to process
                  subscription payments securely.
                </li>
                <li>
                  <strong>Analytics providers</strong> — to help us
                  understand usage and improve the Service.
                </li>
                <li>
                  <strong>Legal &amp; regulatory authorities</strong> — when
                  required by law, court order, or to protect our rights,
                  users, or the public.
                </li>
                <li>
                  <strong>Business transfers</strong> — in connection with a
                  merger, acquisition, or sale of assets, subject to
                  continued protection of your data under this Policy.
                </li>
              </ul>
            </LegalSection>

            <LegalSection
              id="international-transfers"
              title="9. International Data Transfers"
            >
              <p>
                Your data may be processed and stored on servers located
                outside your country of residence, including in countries
                that may not have data protection laws equivalent to those in
                your jurisdiction. Where we transfer personal data outside the
                European Economic Area (EEA), we rely on appropriate
                safeguards such as Standard Contractual Clauses (SCCs)
                approved by the European Commission, or equivalent mechanisms,
                to ensure your data remains protected.
              </p>
            </LegalSection>

            <LegalSection id="data-retention" title="10. Data Retention">
              <p>
                We retain personal data only for as long as necessary to
                fulfill the purposes described in this Policy, including:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  For as long as your account remains active, plus a
                  reasonable period afterward to comply with legal, tax, or
                  accounting obligations
                </li>
                <li>
                  WhatsApp conversation data is retained according to your
                  account settings or until you request deletion, whichever
                  is earlier
                </li>
                <li>
                  Uploaded documents remain stored until you delete them or
                  close your account
                </li>
              </ul>
              <p>
                Upon account closure or a valid deletion request, we will
                delete or anonymize your personal data within a commercially
                reasonable timeframe, unless retention is required by law.
              </p>
            </LegalSection>

            <LegalSection id="data-security" title="11. Data Security">
              <p>
                We implement industry-standard technical and organizational
                measures to protect your data, including:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Encryption of data in transit (TLS/SSL) and at rest</li>
                <li>Access controls and role-based permissions</li>
                <li>Regular security reviews and monitoring</li>
                <li>
                  Secure cloud infrastructure with reputable hosting
                  providers
                </li>
              </ul>
              <p>
                While we take data security seriously, no method of
                transmission or storage is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </LegalSection>

            <LegalSection id="your-rights" title="12. Your Privacy Rights (GDPR)">
              <p>
                If you are located in the European Economic Area (EEA), UK, or
                other jurisdictions with similar protections, you have the
                following rights regarding your personal data:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Right to access</strong> — request a copy of the
                  personal data we hold about you
                </li>
                <li>
                  <strong>Right to rectification</strong> — request
                  correction of inaccurate or incomplete data
                </li>
                <li>
                  <strong>Right to erasure</strong> — request deletion of
                  your personal data, subject to legal exceptions
                </li>
                <li>
                  <strong>Right to restrict processing</strong> — request
                  that we limit how we use your data
                </li>
                <li>
                  <strong>Right to data portability</strong> — receive your
                  data in a structured, machine-readable format
                </li>
                <li>
                  <strong>Right to object</strong> — object to processing
                  based on legitimate interests or for direct marketing
                </li>
                <li>
                  <strong>Right to withdraw consent</strong> — where
                  processing is based on consent, at any time
                </li>
                <li>
                  <strong>Right to lodge a complaint</strong> — with your
                  local data protection supervisory authority
                </li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-accent-600 hover:underline"
                >
                  {siteConfig.email}
                </a>
                . We will respond within the timeframe required by applicable
                law.
              </p>
            </LegalSection>

            <LegalSection id="other-rights" title="13. Other Regional Rights">
              <p>
                Depending on your location, you may have additional rights
                under local law (for example, the California Consumer Privacy
                Act (CCPA) or similar state privacy laws in the United
                States), including the right to know what personal
                information is collected, the right to request deletion, and
                the right to non-discrimination for exercising your privacy
                rights. We do not sell personal information as defined under
                CCPA. Contact us to exercise any applicable regional rights.
              </p>
            </LegalSection>

            <LegalSection id="cookies" title="14. Cookies & Tracking Technologies">
              <p>
                Our website and web application use cookies and similar
                technologies to:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Keep you logged in and remember your preferences</li>
                <li>Understand how visitors use our website</li>
                <li>Improve performance and user experience</li>
              </ul>
              <p>
                You can control or disable cookies through your browser
                settings. Disabling cookies may affect certain features of
                the Service.
              </p>
            </LegalSection>

            <LegalSection id="children" title="15. Children's Privacy">
              <p>
                The Service is intended for use by businesses and individuals
                who are at least 18 years old. We do not knowingly collect
                personal data from children under 16. If we become aware that
                we have inadvertently collected data from a child, we will
                take steps to delete it promptly.
              </p>
            </LegalSection>

            <LegalSection id="breach" title="16. Data Breach Notification">
              <p>
                In the event of a data breach that poses a risk to your
                rights and freedoms, we will notify affected Customers and
                relevant supervisory authorities without undue delay, in
                accordance with GDPR and other applicable data breach
                notification laws.
              </p>
            </LegalSection>

            <LegalSection id="third-party-links" title="17. Third-Party Links">
              <p>
                Our website may contain links to third-party websites or
                services, including Meta/WhatsApp. We are not responsible for
                the privacy practices of third parties, and we encourage you
                to review their privacy policies separately.
              </p>
            </LegalSection>

            <LegalSection id="changes" title="18. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time to
                reflect changes in our practices, technology, legal
                requirements, or other factors. We will post the updated
                Policy on this page with a revised &ldquo;Last updated&rdquo;
                date. Material changes will be communicated via email or a
                notice within the Service.
              </p>
            </LegalSection>

            <LegalSection id="contact" title="19. Contact Us">
              <p>
                If you have questions, concerns, or requests regarding this
                Privacy Policy or how we handle your data, please contact us:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Email:{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-accent-600 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>Attn: {siteConfig.founder}, {siteConfig.name}</li>
              </ul>
            </LegalSection>
          </div>
        </div>
      </LegalPage>
    </>
  );
}
