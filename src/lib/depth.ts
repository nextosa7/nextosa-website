// Extra depth for platform pages and industry pages: how things actually behave, setup steps, and FAQs.
// Every statement is taken from what the NEXTOSA app does today. Where something is not built, it says so.

export interface Detail {
  title: string;
  text: string;
}
export interface Faq {
  question: string;
  answer: string;
}

export const platformDepth: Record<string, { details: Detail[]; faqs: Faq[] }> = {
  "ai-agents": {
    details: [
      { title: "Answers only from what you give it", text: "The Support Agent answers from the knowledge-base articles you publish. If nothing relevant is found it asks one clarifying question, then hands the chat to a person instead of guessing." },
      { title: "Hand-over that never drops a customer", text: "If the AI provider is down, a token limit is hit or an answer comes back empty, a live chat becomes a hand-over to your team, never an error shown to the customer." },
      { title: "One agent per number", text: "A WhatsApp number is answered by exactly one agent, Sales or Support. Assigning a second one is refused, so a customer never gets two voices." },
      { title: "Actions you switch on", text: "The Support Agent can run business actions (create a deal, open a ticket, book) only from the Action Toolbox you enable. Every call is re-checked on the server, so a made-up tool name does nothing." },
      { title: "Prompt-injection safe by design", text: "Knowledge-base text and customer messages are treated as data. Your instructions sit below built-in safety rules the model cannot override." },
      { title: "Two token ceilings", text: "Your plan has a token allowance, and each Support Agent can have its own monthly budget. When either is reached, live chats are handed over, not left unanswered." },
      { title: "Marketing to sales handover", text: "When a contact who received a broadcast replies with buying intent, the Marketing Agent tags them, creates a deal and a follow-up task, and the Sales Agent takes over with a briefing." },
      { title: "Test before going live", text: "Each agent has a Playground that runs the real pipeline and shows what it retrieved and why it decided what it did, without creating tickets or hand-overs." },
    ],
    faqs: [
      { question: "Can the AI send messages to my customers without my approval?", answer: "On WhatsApp you choose per number: AUTO sends the AI reply immediately, APPROVAL puts every draft in the Approval Inbox for a person to approve, edit or reject. The Marketing Agent runs in review mode by default." },
      { question: "Does the AI see my patients' data?", answer: "In hospital mode, patient data reaches an AI provider only if the platform operator has confirmed zero data retention and your workspace has switched it on, and then only de-identified text. Patient files are never sent to AI. The Support and Marketing Agents are refused in hospital workspaces." },
      { question: "Can the AI quote wrong prices?", answer: "The Sales Agent is instructed to look up the exact stored selling price and live stock before stating either, and it never has access to your cost price." },
      { question: "Which agent answers my Gmail inbox?", answer: "You can assign either a Support Agent or a Sales Agent to the inbox, never both. Inbound email also needs the Gmail inbound switch turned on." },
    ],
  },
  whatsapp: {
    details: [
      { title: "Routed by the number, not by guesswork", text: "An inbound message is routed by the WhatsApp phone number it arrived on, and the reply always leaves from that same number." },
      { title: "A thread per client per number", text: "One client can have a separate conversation on each of your numbers, with a label that stays readable even if a number is later renamed or removed." },
      { title: "Restrict staff to chosen numbers", text: "An Admin can limit a team member to specific numbers. It is enforced on the server across conversations, approvals, templates, campaigns, notifications and analytics, and it fails closed." },
      { title: "Window-aware human replies", text: "A person's reply goes out over WhatsApp first, and if the 24-hour window has closed you are told so, and nothing is stored as sent." },
      { title: "Inbound that survives a restart", text: "Inbound messages and campaign sends run through a durable queue. A restart loses at most the one message in flight." },
      { title: "Templates tied to the right account", text: "Template sends are limited to numbers in the template's own WhatsApp Business account, and review status is tracked from draft to approved." },
      { title: "Opt-outs are always respected", text: "Contacts who opted out of marketing are excluded from every campaign segment, whichever filter you pick." },
      { title: "Monthly allowance per plan", text: "Each plan includes a monthly WhatsApp message allowance, with usage shown in Settings." },
    ],
    faqs: [
      { question: "Do I need the official WhatsApp Business API?", answer: "Yes. NEXTOSA uses the official Meta WhatsApp Business Platform. You connect a WhatsApp Business account and number, and the number count depends on your plan." },
      { question: "Can two team members share one number?", answer: "Yes. A number can be assigned to a team member, and staff can also be restricted to specific numbers, so each person sees only their lines." },
      { question: "Can I broadcast to everyone?", answer: "You can broadcast to a segment, including contacts inactive for a number of days. Opted-out contacts are always excluded, and sends are paced and tracked per recipient." },
    ],
  },
  email: {
    details: [
      { title: "Invoices and receipts by email", text: "Switch on automatic email in Settings and invoices and receipts go to the client's email address. Schools send to the guardian's address only, never the student's." },
      { title: "Manual send and resend", text: "Send or resend any invoice or a single payment receipt from its page, and you are told plainly if Gmail is not connected, the client has no valid email or Gmail refused." },
      { title: "Email automations", text: "A broadcast is a scheduled automation to all contacts or a tag. A drip is trigger, email, wait, email. There is no separate campaign engine to learn." },
      { title: "Built-in safety", text: "Marketing opt-outs are skipped, there is a daily cap of 300 automation emails per workspace, and every automation email carries an unsubscribe link and one-click headers." },
      { title: "Unsubscribe that scanners cannot trigger", text: "Opening the unsubscribe link only shows a button. A person has to press it, so link scanners cannot opt anyone out." },
      { title: "Inbound AI replies, opt-in", text: "Connecting Gmail never starts answering your inbox by itself. You switch on inbound replies, and only mail that arrives afterwards is answered, threaded as a normal reply." },
      { title: "Never auto-answers the wrong mail", text: "Newsletters, promotions, automated mail, no-reply senders, your own address and anything older than 48 hours are skipped, with a limit of three replies per conversation per hour." },
      { title: "Inbound email as a trigger", text: "An incoming email can start an automation, optionally filtered by keywords in the subject or body, with the sender and subject available to the steps." },
    ],
    faqs: [
      { question: "Which mailbox does NEXTOSA send from?", answer: "Your connected Gmail. Emails are sent through the Gmail API from your own address." },
      { question: "Can it read attachments?", answer: "Not yet. Inbound AI replies are text only, and the assistant asks the customer to paste details instead." },
      { question: "Will it answer old emails when I switch it on?", answer: "No. Inbound replies start from the moment you switch them on; earlier mail is never answered." },
    ],
  },
  integrations: {
    details: [
      { title: "Gmail, read and send", text: "Gmail uses send and read-only access, deliberately not full mailbox control. Older connections are asked to reconnect once to add the read scope." },
      { title: "Verified inbound events", text: "Gmail push messages are verified against Google's signed token and refused if the endpoint is not configured. Razorpay events are verified per workspace." },
      { title: "Razorpay in your own account", text: "Payment links, QR codes and refunds use your own Razorpay, and payment is confirmed by the verified webhook, not by anyone's say-so." },
      { title: "Connected websites", text: "Link a website, capture its leads with their source, bind it to a WhatsApp number and add the AI chat widget with human handover." },
      { title: "Public booking API", text: "Your own website can create bookings through a public booking API authenticated per connection." },
      { title: "Signed webhooks in and out", text: "Inbound webhooks are signed and handled through the durable queue, so a restart never loses an event." },
      { title: "Instagram publishing", text: "The Marketing Agent can publish posts and reels to Instagram. Outside production this is a dry run." },
      { title: "Files in Google Cloud Storage", text: "Certificates, lesson videos and product images are stored in Google Cloud Storage. Patient documents use a separate private bucket." },
    ],
    faqs: [
      { question: "Does it integrate with my accounting software?", answer: "NEXTOSA has its own double-entry ledger and finance reports built in, so most businesses do not need a separate accounting tool. Custom API connections and signed webhooks are available for your own systems." },
      { question: "Can I connect more than one website?", answer: "Yes. The number of site connections depends on your plan." },
    ],
  },
  fms: {
    details: [
      { title: "A refund never edits an invoice", text: "A refund issues a credit note, a separate append-only document linked to the invoice with its own number series. The invoice itself and its history stay exactly as they were." },
      { title: "Reports that net credit notes", text: "Revenue reports use what was actually collected after credit notes, and the tax report subtracts credit notes in the period they were issued." },
      { title: "Sale to invoice", text: "A sale you record creates a linked invoice whose total equals the sale, with the revenue entry posted and a receipt if payment was taken." },
      { title: "Invoice from timesheets", text: "Time entries are billed into an invoice and marked as billed, so the same hours cannot be billed twice." },
      { title: "Hospital billing and insurance", text: "Hospital workspaces split a bill between patient and insurer to the paisa, track pre-authorisations and claims, and raise credit notes for disallowances." },
      { title: "Multiple tax rates", text: "Configure your own tax rates and have them snapshotted on each invoice and order." },
      { title: "Overdue reminders", text: "Overdue invoices trigger reminders over WhatsApp, and receipts can be sent automatically." },
      { title: "Audit trail", text: "Sensitive actions are recorded in an audit log, and the ledger entries behind every document are never silently rewritten." },
    ],
    faqs: [
      { question: "Is there a real chart of accounts?", answer: "Yes. Revenue, tax payable, receivables and cash are posted to a ready-made chart of accounts, and you can add manual journal entries." },
      { question: "Can customers pay online?", answer: "Yes, through Razorpay payment links and a QR code on the invoice PDF, using your own Razorpay account." },
    ],
  },
  automations: {
    details: [
      { title: "A run is never walked twice", text: "A run takes an atomic claim before it executes, so a queue redelivery, a worker and the recovery sweep can reach it at once and exactly one proceeds." },
      { title: "Recovery sweep", text: "A background sweep resumes waiting runs that are overdue, and marks runs that were interrupted as failed without re-running them, since earlier steps may already have sent messages." },
      { title: "Schedules in your timezone", text: "Schedule triggers match in your organization's timezone, and each minute is claimed once so two servers never fire the same run." },
      { title: "No silent mass messaging", text: "A scheduled broadcast has no default audience. You must choose all contacts, a tag or the workspace, and there is a cap on contacts per run." },
      { title: "Opt-outs and caps", text: "Contacts who opted out are always skipped, and email automations have a daily cap and an unsubscribe link." },
      { title: "Run history you can read", text: "Each run has a step-by-step timeline, status filters and a cancel option for runs that are still waiting." },
      { title: "Guardrails when you save", text: "The builder refuses an unsafe workflow, such as two replies at the same moment, a workspace schedule that tries to reply to a contact, or a reply step on an email trigger." },
      { title: "Engine health at a glance", text: "The automations page shows whether workers, the scheduler and recovery are running, and how many runs are stranded." },
    ],
    faqs: [
      { question: "Can I build a drip campaign?", answer: "Yes. A drip is a trigger, a send step, a wait and another send step, built on the same canvas." },
      { question: "Is there a Run now button?", answer: "No, deliberately. A button like that could message real contacts by accident. Use a schedule or a trigger instead." },
      { question: "What happens if the server restarts mid-run?", answer: "Runs waiting on a delay resume. Runs that were mid-step are marked interrupted and are not re-walked, so nobody gets a duplicate message." },
    ],
  },
};

const common: Faq[] = [
  { question: "Can I try it with sample data first?", answer: "Yes. Pick your industry when you sign up and explore with demo data, then clear it when you are ready to use your own." },
  { question: "Is there a guide for my industry?", answer: "Yes. Inside the app there is a Setup and Modules guide for your industry, in English and Hindi." },
];

export const industryExtra: Record<string, { setup: Detail[]; faqs: Faq[] }> = {
  healthcare: {
    setup: [
      { title: "Choose Healthcare at sign-up", text: "You get a clinic workspace with patients, appointments, prescriptions and billing." },
      { title: "Add your patients and appointments", text: "Register patients, book visits and let WhatsApp reminders go out." },
      { title: "Invite your team with the right access", text: "Give each person only the screens they need." },
      { title: "Switch on hospital mode only if you need it", text: "It is one-way and needs an acknowledgement. It adds departments, wards and beds, clinical records, pharmacy, lab and radiology, and hospital billing." },
    ],
    faqs: [
      { question: "Do I have to use hospital mode?", answer: "No. A clinic stays a clinic until an Admin deliberately turns it on, and clinics that never do see no change." },
      { question: "Is there a patient portal?", answer: "Not today. Patients are reached on WhatsApp, and clinical records stay with the care team." },
      { question: "How do multiple branches work?", answer: "Each hospital branch is its own workspace, and the consolidation feature gives you the combined financial view." },
      ...common,
    ],
  },
  schools: {
    setup: [
      { title: "Choose School or College at sign-up", text: "You get admissions, classes, fees, attendance and exams." },
      { title: "Set up classes, sections and fees", text: "Create the academic session, classes with sections, subjects and fee components." },
      { title: "Invite teachers, parents and students", text: "Class teachers are unpaid, portal-only seats. Parents are linked to their children and students to their own record." },
      { title: "Run admissions and attendance", text: "Admissions move across a board with tasks and checklists, and attendance feeds the parent portal." },
    ],
    faqs: [
      { question: "Do class teachers use up my paid seats?", answer: "No. Class teacher seats are portal-only and never count as paid seats." },
      { question: "Who receives fee invoices?", answer: "The guardian, on the guardian's number, not the student's." },
      { question: "Can a parent see more than one child?", answer: "Yes. The parent portal has a child switcher." },
      ...common,
    ],
  },
  restaurants: {
    setup: [
      { title: "Choose Restaurant at sign-up", text: "You get a menu with recipes, tables, bookings and ordering." },
      { title: "Build the menu and tables", text: "Add items with prices, veg markers and availability, then create tables with QR codes." },
      { title: "Connect payments and WhatsApp", text: "Connect your own Razorpay for online payment and pick an approved WhatsApp template for the diner's one-time code." },
      { title: "Print the QR codes", text: "Guests scan, order, pay and track the order. Staff run the live board." },
    ],
    faqs: [
      { question: "Do diners need an account?", answer: "No. They verify their WhatsApp number with a code at checkout." },
      { question: "Can guests pay at the counter?", answer: "Yes, if you allow it. Online payment needs your own Razorpay." },
      { question: "What happens when a paid order is cancelled?", answer: "An online order is refunded through Razorpay and a credit note is issued, and ingredient stock is restored if the kitchen had not started." },
      ...common,
    ],
  },
  retail: {
    setup: [
      { title: "Choose Retail at sign-up", text: "You get inventory, sales, purchase orders and invoicing." },
      { title: "Add your products", text: "Enter selling price, wholesale price and cost, plus descriptions, images and packages." },
      { title: "Record sales and stock", text: "Each sale creates a linked invoice and moves stock, and every movement is in the ledger." },
      { title: "Let the AI answer price questions", text: "The Sales Agent looks up exact price and live stock from your catalog." },
    ],
    faqs: [
      { question: "Does the AI ever show my cost price?", answer: "No. Cost price and margin are never shown to customers or quoted by the AI." },
      { question: "Is there a customer portal?", answer: "Not today. Customers are served on WhatsApp, with invoices and receipts sent automatically." },
      ...common,
    ],
  },
  manufacturers: {
    setup: [
      { title: "Choose Manufacturer at sign-up", text: "You get inventory, production, purchase orders, sales orders and HR." },
      { title: "Add raw materials and finished goods", text: "Set units, prices and what is published to your distributor catalog." },
      { title: "Run production and purchasing", text: "Production consumes materials and outputs finished goods or scrap." },
      { title: "Invite distributors and set worker PINs", text: "Distributors order from their own portal, and workers use a phone and PIN portal for leave, shifts and payslips." },
    ],
    faqs: [
      { question: "Can distributors see my cost or stock?", answer: "No. They see published, priced finished goods with list prices only." },
      { question: "Can workers apply for leave themselves?", answer: "Yes, in the Employee portal with a phone number and PIN you set." },
      ...common,
    ],
  },
  "ca-firms": {
    setup: [
      { title: "Choose CA Firm at sign-up", text: "You get tax clients, jobs, services, timesheets and billing." },
      { title: "Add tax clients and services", text: "Create clients and a catalog of services with fees." },
      { title: "Track jobs on the board", text: "Move filings and engagements across the board and log time." },
      { title: "Open the client portal when ready", text: "Enable it per client with an email and password so they can see documents and invoices." },
    ],
    faqs: [
      { question: "Can clients upload documents?", answer: "Not yet. The portal lets them view and download what you share, and see invoices and payments." },
      { question: "Can I switch a client's access off?", answer: "Yes, and it takes effect on their very next request." },
      ...common,
    ],
  },
  "real-estate": {
    setup: [
      { title: "Choose Real Estate at sign-up", text: "You get leads, projects, units and bookings." },
      { title: "Add projects and units", text: "Set up what you are selling." },
      { title: "Capture and follow up leads", text: "Enquiries enter the pipeline and WhatsApp keeps follow-ups moving." },
      { title: "Book units and invoice", text: "Turn a lead into a booking and invoice from the same workspace." },
    ],
    faqs: [
      { question: "Is there a buyer portal?", answer: "No. A buyer cannot log in to NEXTOSA today." },
      { question: "Can I track channel partners?", answer: "Yes, along with the KYC documents your process needs." },
      ...common,
    ],
  },
  salons: {
    setup: [
      { title: "Choose Salon or Spa at sign-up", text: "You get services, staff, bookings, packages and billing." },
      { title: "Add services and staff", text: "Set service prices, durations and who performs them." },
      { title: "Sell packages and memberships", text: "Track each client's balance and wallet." },
      { title: "Let clients book themselves", text: "Enable the client portal per client so they can pick a service, a staff member and a free slot." },
    ],
    faqs: [
      { question: "Can clients book online?", answer: "Yes, through the client portal with their own sign-in." },
      { question: "Can a manager roster staff without seeing salaries?", answer: "Yes. Payroll is a separate permission from the staff roster." },
      ...common,
    ],
  },
  "professional-services": {
    setup: [
      { title: "Choose Professional Services at sign-up", text: "You get projects, tasks, timesheets, billing and a client portal." },
      { title: "Add clients and projects", text: "Create projects on the board with tasks and checklists." },
      { title: "Log time and invoice", text: "Turn timesheets into invoices without double-billing." },
      { title: "Share progress through the portal", text: "Enable it per client so they see projects, invoices and documents." },
    ],
    faqs: [
      { question: "Can clients edit anything in the portal?", answer: "No. It is read-only." },
      { question: "Can the same hours be billed twice?", answer: "No. Billed time entries are marked and cannot be billed again." },
      ...common,
    ],
  },
  gyms: {
    setup: [
      { title: "Choose Gym or Fitness at sign-up", text: "You get members, plans, check-in, equipment and a store." },
      { title: "Create your plans", text: "Set monthly, quarterly and other plans with prices." },
      { title: "Add members and send portal access", text: "Each member gets a single-use magic link, valid for seven days." },
      { title: "Check members in with QR", text: "Members show their QR code at the front desk." },
    ],
    faqs: [
      { question: "Do members need a password?", answer: "No. They open a single-use link sent by the gym, valid for seven days." },
      { question: "Can staff be limited to some screens?", answer: "Yes. Plans, check-in, trainer commissions, equipment and the store are separate permissions." },
      ...common,
    ],
  },
};
