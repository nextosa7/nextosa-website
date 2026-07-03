import type { Metadata } from "next";
import {
  LegalHero,
  LegalTOC,
  LegalSection,
  LegalPage,
} from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "NEXTOSA Terms of Service: the rules and conditions governing your use of the NEXTOSA AI CRM and WhatsApp automation platform.",
};

const LAST_UPDATED = "July 3, 2026";

const toc = [
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
      <LegalHero title="Terms of Service" lastUpdated={LAST_UPDATED} />
      <LegalPage>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr]">
          <div className="hidden lg:block">
            <LegalTOC items={toc} />
          </div>

          <div className="space-y-10 lg:max-w-3xl">
            <p className="text-sm leading-7 text-slate-600">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access
              to and use of NEXTOSA&apos;s website, application, and
              AI-powered CRM and WhatsApp automation services (collectively,
              the &ldquo;Service&rdquo;), operated by NEXTOSA
              (&ldquo;NEXTOSA,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;). By accessing or using the Service, you agree
              to be bound by these Terms. If you do not agree, do not use the
              Service.
            </p>

            <LegalSection id="acceptance" title="1. Acceptance of Terms">
              <p>
                By creating an account, accessing, or using NEXTOSA, you
                confirm that you have read, understood, and agree to these
                Terms and our Privacy Policy. If you are using the Service on
                behalf of a business or organization, you represent that you
                have the authority to bind that entity to these Terms.
              </p>
            </LegalSection>

            <LegalSection id="description" title="2. Description of Service">
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
            </LegalSection>

            <LegalSection id="eligibility" title="3. Eligibility & Registration">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  You must be at least 18 years old and capable of forming a
                  binding contract to use the Service.
                </li>
                <li>
                  You must provide accurate, current, and complete
                  information when creating an account and keep it updated.
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  your account credentials and for all activity that occurs
                  under your account.
                </li>
                <li>
                  You must notify us immediately of any unauthorized use of
                  your account.
                </li>
              </ul>
            </LegalSection>

            <LegalSection
              id="subscriptions"
              title="4. Subscriptions, Fees & Payment"
            >
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  NEXTOSA is offered under subscription plans as described on
                  our Pricing page. Fees are billed in advance on a recurring
                  basis (monthly or annually) unless otherwise stated.
                </li>
                <li>
                  All fees are exclusive of applicable taxes unless stated
                  otherwise. You are responsible for any taxes associated
                  with your subscription.
                </li>
                <li>
                  Subscriptions automatically renew at the end of each
                  billing cycle unless canceled before the renewal date.
                </li>
                <li>
                  Fees are non-refundable except where required by law or as
                  explicitly stated in these Terms.
                </li>
                <li>
                  We may change our pricing with at least 30 days&apos;
                  notice; continued use of the Service after a price change
                  takes effect constitutes acceptance of the new pricing.
                </li>
              </ul>
            </LegalSection>

            <LegalSection id="trial" title="5. Free Trial">
              <p>
                We may offer a free trial period for new Customers. At the
                end of the trial, your account may automatically convert to a
                paid subscription unless you cancel before the trial ends. We
                reserve the right to modify or terminate free trial offers at
                any time.
              </p>
            </LegalSection>

            <LegalSection id="acceptable-use" title="6. Acceptable Use Policy">
              <p>You agree not to use the Service to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Send unsolicited, spam, or bulk messages to individuals who
                  have not opted in to receive communications from you
                </li>
                <li>
                  Transmit content that is illegal, fraudulent, defamatory,
                  obscene, harassing, or infringes on the rights of others
                </li>
                <li>
                  Impersonate any person or entity, or misrepresent your
                  affiliation with any person or entity
                </li>
                <li>
                  Upload malicious code, attempt to breach security, or
                  interfere with the integrity or performance of the Service
                </li>
                <li>
                  Use the Service to violate any applicable law, regulation,
                  or third-party rights, including data protection and
                  anti-spam laws
                </li>
                <li>
                  Reverse-engineer, decompile, or attempt to extract the
                  source code of the Service, except as permitted by law
                </li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts that
                violate this Acceptable Use Policy.
              </p>
            </LegalSection>

            <LegalSection
              id="whatsapp-compliance"
              title="7. WhatsApp Platform Compliance"
            >
              <p>
                Because NEXTOSA sends and receives messages through the
                WhatsApp Business Platform, you agree to comply with
                Meta&apos;s WhatsApp Business Messaging Policy and related
                platform terms, including:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Obtaining valid opt-in consent from End Users before
                  messaging them on WhatsApp
                </li>
                <li>
                  Only using approved message templates for outbound,
                  business-initiated conversations as required by WhatsApp
                </li>
                <li>
                  Not sending prohibited content categories under
                  WhatsApp&apos;s Commerce and Business Policies (including
                  content related to illegal products, deceptive practices,
                  or restricted goods and services)
                </li>
                <li>
                  Honoring opt-out requests from End Users promptly
                </li>
                <li>
                  Maintaining accurate business information on your WhatsApp
                  Business profile
                </li>
              </ul>
              <p>
                You are solely responsible for your compliance with
                Meta&apos;s policies. NEXTOSA may suspend WhatsApp
                functionality on your account if Meta flags or restricts your
                number due to policy violations, and NEXTOSA is not liable
                for actions taken by Meta against your WhatsApp Business
                account.
              </p>
            </LegalSection>

            <LegalSection id="content-ownership" title="8. Your Content & Data">
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
            </LegalSection>

            <LegalSection id="ai-disclaimer" title="9. AI-Generated Content">
              <p>
                NEXTOSA uses artificial intelligence to generate automated
                responses, summaries, and suggestions based on the data and
                documents you provide. AI-generated content may occasionally
                be inaccurate, incomplete, or inappropriate for a specific
                context.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  You are responsible for reviewing and, where appropriate,
                  approving AI-generated communications sent to your clients.
                </li>
                <li>
                  NEXTOSA does not guarantee the accuracy or completeness of
                  AI-generated responses and disclaims liability for
                  decisions made based on such content.
                </li>
              </ul>
            </LegalSection>

            <LegalSection
              id="intellectual-property"
              title="10. Intellectual Property"
            >
              <p>
                The Service, including its software, design, branding, and
                underlying technology, is owned by NEXTOSA and protected by
                intellectual property laws. Except for the limited rights
                granted to use the Service, no other rights are granted to
                you. You may not copy, modify, distribute, or create
                derivative works from the Service without our prior written
                consent.
              </p>
            </LegalSection>

            <LegalSection
              id="third-party-services"
              title="11. Third-Party Services"
            >
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
            </LegalSection>

            <LegalSection id="confidentiality" title="12. Confidentiality">
              <p>
                Each party agrees to protect the other&apos;s confidential
                information with the same degree of care it uses to protect
                its own confidential information, and not to disclose it to
                third parties except as necessary to perform obligations
                under these Terms or as required by law.
              </p>
            </LegalSection>

            <LegalSection id="disclaimers" title="13. Disclaimers & Warranties">
              <p>
                THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
                AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER
                EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR
                UNINTERRUPTED AND ERROR-FREE OPERATION. NEXTOSA DOES NOT
                WARRANT THAT THE SERVICE WILL MEET YOUR REQUIREMENTS OR THAT
                DEFECTS WILL BE CORRECTED.
              </p>
            </LegalSection>

            <LegalSection id="liability" title="14. Limitation of Liability">
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
            </LegalSection>

            <LegalSection id="indemnification" title="15. Indemnification">
              <p>
                You agree to indemnify and hold harmless NEXTOSA and its
                owners, employees, and affiliates from any claims, damages,
                liabilities, and expenses (including reasonable legal fees)
                arising from your use of the Service, your violation of these
                Terms, or your violation of any applicable law or third-party
                right, including WhatsApp messaging and data protection
                obligations.
              </p>
            </LegalSection>

            <LegalSection id="termination" title="16. Termination">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  You may cancel your subscription at any time through your
                  account settings; cancellation will take effect at the end
                  of the current billing period.
                </li>
                <li>
                  We may suspend or terminate your access to the Service, with
                  or without notice, if you violate these Terms, fail to pay
                  applicable fees, or engage in conduct that harms NEXTOSA,
                  other users, or third parties.
                </li>
                <li>
                  Upon termination, your right to use the Service will cease,
                  and we may delete your data after a reasonable retention
                  period, except where retention is required by law.
                </li>
              </ul>
            </LegalSection>

            <LegalSection id="governing-law" title="17. Governing Law">
              <p>
                These Terms are governed by and construed in accordance with
                applicable law, without regard to conflict of law principles.
                Any disputes arising from these Terms or the Service shall be
                resolved through good-faith negotiation, and if unresolved,
                through the courts or arbitration bodies of competent
                jurisdiction.
              </p>
            </LegalSection>

            <LegalSection id="changes" title="18. Changes to These Terms">
              <p>
                We may update these Terms from time to time. We will post the
                revised Terms on this page with an updated &ldquo;Last
                updated&rdquo; date, and where changes are material, we will
                provide additional notice (such as email). Your continued use
                of the Service after changes take effect constitutes
                acceptance of the revised Terms.
              </p>
            </LegalSection>

            <LegalSection id="contact" title="19. Contact Us">
              <p>
                If you have any questions about these Terms, please contact
                us:
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
                <li>
                  Attn: {siteConfig.founder}, {siteConfig.name}
                </li>
              </ul>
            </LegalSection>
          </div>
        </div>
      </LegalPage>
    </>
  );
}
