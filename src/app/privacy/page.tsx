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

const LAST_UPDATED = "July 13, 2026";

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
  {
    id: "data-retention",
    label: "10. Data Retention, Usage Limits & Account Expiration",
  },
  { id: "data-security", label: "11. Data Security" },
  { id: "your-rights", label: "12. Your Privacy Rights (GDPR & Global)" },
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
            <LegalSection id="introduction" title="1. Introduction">
              <p>
                We are committed to protecting the privacy and security of
                personal data belonging to our business customers
                (&ldquo;Customers,&rdquo; &ldquo;you&rdquo;) and the end
                clients that Customers communicate with through NEXTOSA
                (&ldquo;End Users&rdquo;). This Policy is designed to comply
                with applicable data protection laws, including the EU
                General Data Protection Regulation (GDPR), and describes the
                categories of data we process, the purposes and legal bases
                for processing, and the rights available to data subjects.
              </p>
              <p>
                By using the NEXTOSA platform (the &ldquo;Service&rdquo;), you
                acknowledge that you have read and understood this Privacy
                Policy. If you do not agree with this Policy, please do not
                use the Service.
              </p>
            </LegalSection>

            <LegalSection id="data-controller" title="2. Data Controller">
              <p>
                For the purposes of data protection laws, NEXTOSA acts as the
                data controller for account and platform data, and as a data
                processor on behalf of our business Customers for the client
                and message data they manage through the Service.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Business Name:</strong> NEXTOSA
                </li>
                <li>
                  <strong>Owner/Operator:</strong> {siteConfig.founder}
                </li>
                <li>
                  <strong>Contact Email:</strong>{" "}
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
                using the details above or refer to Section 19.
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
              <p>
                Name, email address, phone number, business name, industry,
                business address, login credentials (securely hashed), and
                subscription details.
              </p>
              <p className="font-semibold text-navy-900">
                b) WhatsApp &amp; Communication Data
              </p>
              <p>
                WhatsApp Business phone numbers connected to your account,
                message content, timestamps, media (images, documents, audio)
                exchanged between you and your End Users, End User phone
                numbers/names, and customized message templates.
              </p>
              <p className="font-semibold text-navy-900">
                c) Client &amp; CRM Data
              </p>
              <p>
                Client records, notes, tags, interaction history, and
                documents you upload (e.g., contracts, FAQs, knowledge-base
                files) for storage or AI training.
              </p>
              <p className="font-semibold text-navy-900">
                d) Technical &amp; Usage Data
              </p>
              <p>
                IP address, browser type, device identifiers, operating
                system, and log data such as pages visited, features used, and
                timestamps of activity.
              </p>
              <p className="font-semibold text-navy-900">
                e) Payment Information
              </p>
              <p>
                Payments are processed by third-party payment providers (e.g.,
                Razorpay). NEXTOSA does not store full credit card or bank
                account numbers on its own servers.
              </p>
            </LegalSection>

            <LegalSection
              id="whatsapp-data"
              title="4. WhatsApp Business API & Meta Data"
            >
              <p>
                NEXTOSA integrates with the WhatsApp Business Platform
                provided by Meta to enable messaging automation. When you
                connect a WhatsApp Business number to NEXTOSA:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Messages, media, and contact information are transmitted
                  through Meta&apos;s infrastructure and are subject to
                  Meta&apos;s Privacy Policy and WhatsApp Business Messaging
                  Policy.
                </li>
                <li>
                  NEXTOSA accesses WhatsApp data solely to provide the Service
                  you requested (AI-generated responses, reminders, template
                  delivery, and Away Mode automation).
                </li>
                <li>
                  We do not use WhatsApp data for advertising purposes, nor do
                  we sell it to third parties.
                </li>
              </ul>
              <p>
                <strong>Customer Responsibility:</strong> Businesses using
                NEXTOSA are strictly responsible for ensuring they have
                appropriate consent (opt-in) from End Users before messaging
                them via WhatsApp.
              </p>
            </LegalSection>

            <LegalSection id="legal-basis" title="5. Legal Basis for Processing">
              <p>Where GDPR applies, we rely on the following legal bases:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Performance of a Contract:</strong> To provide the
                  Service you signed up for.
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> To improve, secure,
                  and support the Service, and prevent fraud.
                </li>
                <li>
                  <strong>Consent:</strong> For optional marketing
                  communications or specific End User opt-ins.
                </li>
                <li>
                  <strong>Legal Obligation:</strong> To comply with applicable
                  laws and lawful requests from authorities.
                </li>
              </ul>
            </LegalSection>

            <LegalSection id="how-we-use" title="6. How We Use Your Information">
              <ul className="list-disc space-y-2 pl-6">
                <li>Provide, operate, and maintain the NEXTOSA platform.</li>
                <li>
                  Enable WhatsApp messaging automation, reminders, and
                  templates.
                </li>
                <li>
                  Power the AI Q&amp;A assistant using your uploaded business
                  documents.
                </li>
                <li>
                  Process transactions, manage subscriptions, and provide
                  customer support.
                </li>
                <li>
                  Monitor, detect, and prevent fraud, abuse, or security
                  incidents.
                </li>
              </ul>
            </LegalSection>

            <LegalSection id="ai-processing" title="7. AI & Automated Processing">
              <p>
                NEXTOSA uses artificial intelligence to power features such as
                AI Q&amp;A and automated WhatsApp replies. This involves
                processing message content and uploaded documents to generate
                relevant responses. Some AI processing may be performed by
                trusted third-party AI providers under strict data protection
                terms; they do not use your private data to train
                general-purpose models. Business Customers can review, edit,
                or disable AI automation at any time from their dashboard.
              </p>
            </LegalSection>

            <LegalSection id="data-sharing" title="8. Data Sharing & Third Parties">
              <p>
                We do not sell your personal data. We share information
                solely as necessary to provide the Service with:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Meta / WhatsApp:</strong> To send and receive
                  messages on your behalf.
                </li>
                <li>
                  <strong>Cloud Hosting Providers:</strong> To store and
                  process data securely.
                </li>
                <li>
                  <strong>AI Service Providers:</strong> To generate
                  AI-powered responses.
                </li>
                <li>
                  <strong>Payment Processors:</strong> To process subscription
                  payments securely.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law,
                  court order, or to protect our rights.
                </li>
              </ul>
            </LegalSection>

            <LegalSection
              id="international-transfers"
              title="9. International Data Transfers"
            >
              <p>
                Your data may be processed and stored on servers located
                outside your country of residence. Where we transfer personal
                data outside the European Economic Area (EEA), we rely on
                appropriate safeguards such as Standard Contractual Clauses
                (SCCs) to ensure your data remains protected.
              </p>
            </LegalSection>

            <LegalSection
              id="data-retention"
              title="10. Data Retention, Usage Limits, and Account Expiration"
            >
              <p>
                We retain personal data only for as long as necessary. Please
                note our strict policy regarding subscriptions and data
                retention:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Feature Usage Limits:</strong> Depending on your
                  selected subscription plan or trial status, certain
                  features (e.g., AI tokens, WhatsApp messages) are subject to
                  predefined limits. If your account exceeds these limits, the
                  affected feature(s) will be temporarily locked until your
                  billing cycle resets or you upgrade your plan.
                </li>
                <li>
                  <strong>Subscription Expiration &amp; 30-Day Grace
                  Period:</strong> Upon the expiration of your free trial or
                  active subscription, your account will be downgraded, and
                  active services will be paused. We provide a 30-day grace
                  period starting from the exact date of expiration. During
                  this time, your data remains safe, and you will retain
                  read-only access to your dashboard to view and export your
                  data using our built-in export tools.
                </li>
                <li>
                  <strong>Permanent Data Deletion:</strong> If you do not
                  upgrade or renew your subscription within the 30-day grace
                  period, all data associated with your organization will be
                  permanently and irreversibly deleted. This includes CRM
                  records, documents, and logs. We cannot recover this data
                  once purged. It is solely your responsibility to export your
                  data before this period concludes.
                </li>
              </ul>
            </LegalSection>

            <LegalSection id="data-security" title="11. Data Security">
              <p>
                We implement industry-standard measures to protect your data,
                including encryption in transit (TLS/SSL) and at rest, strict
                access controls, and secure cloud infrastructure. While we
                take data security seriously, no transmission method is 100%
                secure.
              </p>
            </LegalSection>

            <LegalSection
              id="your-rights"
              title="12. Your Privacy Rights (GDPR & Global)"
            >
              <p>
                Depending on your location, you have rights regarding your
                personal data, including:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Right to Access:</strong> Request a copy of your
                  personal data.
                </li>
                <li>
                  <strong>Right to Rectification:</strong> Request correction
                  of inaccurate data.
                </li>
                <li>
                  <strong>Right to Erasure:</strong> Request deletion of your
                  personal data.
                </li>
                <li>
                  <strong>Right to Restrict Processing:</strong> Request
                  limits on how we use your data.
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> Receive your
                  data in a machine-readable format.
                </li>
                <li>
                  <strong>Right to Object / Withdraw Consent:</strong> Object
                  to processing or withdraw consent at any time.
                </li>
              </ul>
              <p>
                To exercise these rights, contact us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-accent-600 hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </LegalSection>

            <LegalSection id="other-rights" title="13. Other Regional Rights">
              <p>
                Users in jurisdictions with specific privacy laws (like the
                CCPA in California) have additional rights, including the
                right to know what information is collected and the right to
                non-discrimination. We do not &ldquo;sell&rdquo; personal
                information as defined under the CCPA.
              </p>
            </LegalSection>

            <LegalSection id="cookies" title="14. Cookies & Tracking Technologies">
              <p>
                Our application uses cookies to keep you logged in, remember
                preferences, and improve performance. You can disable cookies
                through your browser settings, though this may affect Service
                functionality.
              </p>
            </LegalSection>

            <LegalSection id="children" title="15. Children's Privacy">
              <p>
                The Service is intended for businesses and individuals at
                least 18 years old. We do not knowingly collect data from
                children under 16.
              </p>
            </LegalSection>

            <LegalSection id="breach" title="16. Data Breach Notification">
              <p>
                In the event of a data breach posing a risk to your rights, we
                will notify affected Customers and relevant authorities
                without undue delay, per applicable laws.
              </p>
            </LegalSection>

            <LegalSection id="third-party-links" title="17. Third-Party Links">
              <p>
                Our Service may contain links to third-party platforms (like
                Meta/WhatsApp). We are not responsible for their privacy
                practices.
              </p>
            </LegalSection>

            <LegalSection id="changes" title="18. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will
                post updates on this page with a revised &ldquo;Last
                updated&rdquo; date, and material changes will be communicated
                via email or an in-app notice.
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
