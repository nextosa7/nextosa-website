// Marketing content for the platform and industry pages. Every statement here is taken from what the NEXTOSA app
// actually does today; screenshots are real captures from the app (public/screens/<folder>/<name>.jpg).

export interface Shot {
  src: string; // path under /screens
  caption: string;
  url: string; // the in-app route shown in the browser frame, e.g. "app.nextosa.com/invoices"
  mobile?: boolean; // phone-sized capture (390x844 at 2x): shown in a phone frame instead of a browser frame
}

export interface ModuleBlock {
  title: string;
  description: string;
  bullets: string[];
  shot?: Shot;
}

export interface PlatformPage {
  slug: string;
  name: string;
  short: string; // one-liner for menus and cards
  headline: string;
  intro: string;
  stats: { value: string; label: string }[];
  modules: ModuleBlock[];
  capabilities: string[];
  related: string[]; // other platform slugs
}

const s = (folder: string, file: string, caption: string, route: string): Shot => ({
  src: `/screens/${folder}/${file}.jpg`,
  caption,
  url: `app.nextosa.com${route}`,
});

export const platformPages: PlatformPage[] = [
  {
    slug: "crm",
    name: "CRM",
    short: "Contacts, deals, tickets and campaigns",
    headline: "A CRM that is already connected to your billing, inventory and chats",
    intro:
      "Every customer, lead and conversation lives in one record. Deals move through a pipeline, tickets get tracked, and campaigns reach the right people on WhatsApp, with opted-out contacts always excluded.",
    stats: [
      { value: "360°", label: "customer record" },
      { value: "Pipeline", label: "deals with stages" },
      { value: "WhatsApp + Email", label: "campaign channels" },
    ],
    modules: [
      {
        title: "Customer 360",
        description: "One record per customer with their invoices, sales, documents, conversations and notes.",
        bullets: ["Import contacts from a file", "Tags, sources and custom attributes", "Sales count and lifetime value computed live", "Opt-out respected across every campaign"],
        shot: s("platform", "contacts", "Contacts with source, tags and activity", "/contacts"),
      },
      {
        title: "Deals pipeline",
        description: "Track every opportunity from new lead to won or lost, with value and stage totals at a glance.",
        bullets: ["Stage columns with pipeline value", "AI agents create and update deals for you", "Follow-up tasks and reminders", "Win and conversion rate on the dashboard"],
        shot: s("retail", "deals", "B2B inquiries and deal pipeline", "/deals"),
      },
      {
        title: "Campaigns & broadcasts",
        description: "Send approved WhatsApp templates to a segment, schedule them, and watch delivery live.",
        bullets: ["Segments: all, tagged or inactive for N days", "Per-recipient delivery status in real time", "Durable queue, so a restart never loses a send", "Marketing opt-out honoured automatically"],
        shot: s("platform", "campaigns", "Campaign list with status and delivery", "/campaigns"),
      },
      {
        title: "Shared inbox",
        description: "WhatsApp and email threads side by side with contact context, assigned to the right person.",
        bullets: ["One thread per client per WhatsApp number", "AI reply, or approval before sending", "Hand a chat to a person at any time", "Live updates, no refresh"],
        shot: s("platform", "conversations", "Conversations inbox", "/conversations"),
      },
    ],
    capabilities: ["Customer tickets for your own customers", "Communication log of every message sent", "Approval inbox for AI-drafted replies", "Reminders and tasks", "Notes and documents per contact", "Role-based access for every team member"],
    related: ["whatsapp", "automations", "ai-agents"],
  },
  {
    slug: "erp",
    name: "ERP",
    short: "Inventory, catalog, purchasing, production",
    headline: "ERP built for the way small and mid-size businesses actually operate",
    intro:
      "Track stock down to the batch, price a catalog with packages and upsells, raise purchase orders, run production and keep equipment maintained. Everything posts to your books automatically.",
    stats: [
      { value: "Batch + expiry", label: "stock tracking" },
      { value: "PO to GRN", label: "purchasing" },
      { value: "Live", label: "stock ledger" },
    ],
    modules: [
      {
        title: "Inventory",
        description: "Items with cost price and selling price, low-stock alerts and a full movement history.",
        bullets: ["Stock value and low-stock at a glance", "Stock transfers between locations", "First-expiry-first-out for batch items", "Import items from a spreadsheet"],
        shot: s("platform", "inventory", "Inventory with stock and prices", "/inventory"),
      },
      {
        title: "Product & service catalog",
        description: "Describe what you sell once, with photos, benefits, packages and linked upsells. Your AI agents use it.",
        bullets: ["Packages such as Basic and Premium", "Upsell, cross-sell and combo links", "Client-aware stock ledger: who bought what", "Drag-and-drop photo upload"],
        shot: s("platform", "catalog", "Product catalog", "/catalog"),
      },
      {
        title: "Purchase orders",
        description: "Raise orders to vendors, receive goods against them and keep payables straight.",
        bullets: ["Vendor-wise orders and status", "Goods received notes update stock", "Costs flow into your accounts", "Approval before sending"],
        shot: s("manufacturer", "purchase-orders", "Purchase orders", "/purchase-orders"),
      },
      {
        title: "Production board",
        description: "Plan and run production orders from raw material to finished goods on a Kanban board.",
        bullets: ["Raw material consumption and output posted to stock", "Scrap tracked separately", "Sales orders with fulfilment", "Equipment and maintenance records"],
        shot: s("manufacturer", "production-board", "Production board", "/production-board"),
      },
    ],
    capabilities: ["Sales orders and fulfilment", "Equipment and maintenance", "Barcode-ready item records", "Multiple tax rates with CGST and SGST", "Recycle bin for accidental deletes", "Audit log of changes"],
    related: ["fms", "crm", "automations"],
  },
  {
    slug: "fms",
    name: "Finance (FMS)",
    short: "Invoicing, accounts, reports, payments",
    headline: "A real double-entry ledger behind every invoice you send",
    intro:
      "Invoices, payments and expenses post to a proper chart of accounts. Credit notes never edit history. Reports tie out to the paisa, and customers can pay by Razorpay link or QR code.",
    stats: [
      { value: "Double-entry", label: "ledger" },
      { value: "Credit notes", label: "append-only" },
      { value: "Razorpay", label: "payment links and QR" },
    ],
    modules: [
      {
        title: "Invoicing & payments",
        description: "Create invoices from sales or timesheets, record payments, and send them by WhatsApp or email.",
        bullets: ["Tax-aware invoices with your own prefix", "Auto-send invoices and receipts", "Razorpay QR code on every invoice PDF", "Partial payments and receipts"],
        shot: s("platform", "invoices", "Invoices with status and amounts", "/invoices"),
      },
      {
        title: "Chart of accounts & journal",
        description: "Every business event posts balanced journal entries to a ready-made chart of accounts.",
        bullets: ["Revenue, tax payable, receivables and cash posted for you", "Manual journal entries when you need them", "Bank reconciliation", "Budgets against actuals"],
        shot: s("platform", "finance", "Chart of accounts", "/finance/accounts"),
      },
      {
        title: "Financial reports",
        description: "Profit and loss, trial balance and more, straight from the ledger. Consolidate across branches.",
        bullets: ["P&L and trial balance", "Tax report netting credit notes", "Consolidated view across subsidiary workspaces", "Always consistent with the invoices"],
        shot: s("platform", "finance-reports", "Financial reports", "/finance/reports"),
      },
      {
        title: "Expenses",
        description: "Capture expenses, attach bills, and let AI read invoices and receipts into structured entries.",
        bullets: ["Category-wise spend", "Bill extraction from uploads", "Posts to the ledger", "Net profit on your dashboard"],
        shot: s("platform", "expenses", "Expenses", "/expenses"),
      },
    ],
    capabilities: ["Credit notes for refunds, without editing the invoice", "GST-style tax with multiple rates", "Multi-currency display", "Recurring invoices and reminders", "Overdue reminders over WhatsApp", "Audit trail for sensitive actions"],
    related: ["erp", "crm", "integrations"],
  },
  {
    slug: "lms",
    name: "Training (LMS)",
    short: "Courses, lessons and certificates",
    headline: "Train your team and customers without another tool",
    intro:
      "Build courses with video lessons, assign them to staff or students, and track who has completed what. Certificates are generated and stored for you.",
    stats: [
      { value: "Video", label: "lessons" },
      { value: "Learner portal", label: "for your people" },
      { value: "Certificates", label: "on completion" },
    ],
    modules: [
      {
        title: "Course builder",
        description: "Organise lessons into courses, upload video, and publish when you are ready.",
        bullets: ["Sections and lessons", "Video uploads to private storage", "Draft and publish states", "Reusable across your team"],
        shot: s("platform", "lms-courses", "Course builder", "/training/courses"),
      },
    ],
    capabilities: ["Learner portal with progress", "Completion certificates", "Works for staff onboarding, member education and customer training", "Role-based access to courses"],
    related: ["crm", "erp", "automations"],
  },
  {
    slug: "automations",
    name: "Automations",
    short: "Visual builder for triggers, delays and actions",
    headline: "Automate follow-ups, reminders and broadcasts with a visual builder",
    intro:
      "Drag triggers, conditions, waits and actions onto a canvas. Run on a schedule in your timezone, react to a payment or an inbound message, or call your own systems with a signed webhook.",
    stats: [
      { value: "13", label: "trigger types" },
      { value: "100+", label: "actions" },
      { value: "Run history", label: "per step" },
    ],
    modules: [
      {
        title: "Visual workflow builder",
        description: "A canvas for triggers, conditions, delays and actions, with one-click starters.",
        bullets: ["Email broadcast, welcome drip and auto-reply starters", "Wait for a delay or a date", "Search the palette of actions", "AI can draft a workflow for you"],
        shot: s("platform", "automations", "Automations and starters", "/automations"),
      },
    ],
    capabilities: [
      "Triggers: inbound WhatsApp, inbound email, new contact, schedule, payment received, CRM status change, webhook, membership expiring and more",
      "Send WhatsApp, send email, create deals, bookings, tickets and tasks",
      "Schedule runs in your own timezone",
      "Signed inbound webhooks for external systems",
      "Durable queue: a restart never loses a run",
      "Run history with a step-by-step timeline",
      "Daily caps and unsubscribe links on email",
    ],
    related: ["whatsapp", "crm", "integrations"],
  },
  {
    slug: "whatsapp",
    name: "WhatsApp",
    short: "Multiple numbers, AI replies, campaigns",
    headline: "Run every WhatsApp number your business uses from one place",
    intro:
      "Connect several official WhatsApp Business numbers, each with its own mode and assigned person. Replies always leave from the number the customer wrote to, and staff can be limited to specific numbers.",
    stats: [
      { value: "Up to 10", label: "numbers on Enterprise" },
      { value: "Official", label: "Meta Business API" },
      { value: "AI or approval", label: "per number" },
    ],
    modules: [
      {
        title: "Multi-number inbox",
        description: "One thread per client per number, so sales and support lines never mix.",
        bullets: ["Number labels on every chat", "Reply goes out on the receiving number", "Assign a number to a team member", "Staff can be restricted to chosen numbers"],
        shot: s("platform", "conversations", "Conversations across numbers", "/conversations"),
      },
      {
        title: "Approval inbox",
        description: "Let AI draft replies and have a person approve, edit or reject them before they send.",
        bullets: ["AUTO or APPROVAL mode per number", "Edit before sending", "Live updates when a draft arrives", "Superseded drafts cleared automatically"],
        shot: s("platform", "approvals", "Approval inbox", "/approvals"),
      },
      {
        title: "Templates",
        description: "Submit templates to Meta and track review from draft to approved.",
        bullets: ["Draft, pending, approved, rejected", "Used by campaigns and automations", "Document headers for invoices and receipts", "Authentication templates for OTPs"],
        shot: s("platform", "templates", "WhatsApp templates", "/templates"),
      },
      {
        title: "Campaigns",
        description: "Broadcast to a segment with scheduling, pacing and live delivery tracking.",
        bullets: ["Opt-out contacts always excluded", "Inactive-for-N-days segment", "AI Marketing Agent can draft a broadcast", "Delivery and read status per recipient"],
        shot: s("platform", "campaigns", "Campaigns", "/campaigns"),
      },
    ],
    capabilities: ["Official WhatsApp Business Platform", "Encrypted access tokens", "Away mode", "Per-number AI agent assignment", "Window-aware human replies", "Monthly message allowance per plan"],
    related: ["ai-agents", "automations", "crm"],
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    short: "Sales, Support and Marketing agents",
    headline: "Three AI agents that answer, sell and promote while you sleep",
    intro:
      "The Sales Agent quotes live prices and stock, the Support Agent answers only from your knowledge base and hands over when it cannot help, and the Marketing Agent plans and publishes content. A Business AI assistant answers questions about your own data.",
    stats: [
      { value: "3", label: "specialised agents" },
      { value: "Grounded", label: "answers from your data" },
      { value: "Human handover", label: "any time" },
    ],
    modules: [
      {
        title: "AI Sales Agent",
        description: "Handles enquiries on WhatsApp, email and your website, and moves buyers toward a deal.",
        bullets: ["Looks up exact prices and live stock before quoting", "Creates deals and bookings", "Suggests one linked upsell", "Takes payment links through your Razorpay"],
        shot: s("platform", "sales-agent", "Sales Agent settings", "/ai-agents/sales-agent"),
      },
      {
        title: "AI Support Agent",
        description: "Answers from the articles you publish and escalates with a summary when it should not guess.",
        bullets: ["Knowledge base with search by meaning", "Several named agents with their own persona", "Hand-over inbox for your team", "Token budget so cost stays predictable"],
        shot: s("platform", "support-agent", "Support Agent", "/ai-agents/support-agent"),
      },
      {
        title: "AI Marketing Agent",
        description: "Turns a weekly or monthly plan into scheduled content and finds buying intent in the replies.",
        bullets: ["Instagram posts and WhatsApp broadcasts", "Review mode before anything goes out", "Hands warm leads to the Sales Agent", "Uses your catalog for new arrivals and best sellers"],
        shot: s("platform", "marketing-agent", "Marketing Agent", "/ai-agents/marketing-agent"),
      },
      {
        title: "Business AI",
        description: "Ask about your revenue, clients, stock and tasks in plain language.",
        bullets: ["Answers from your own workspace data", "Respects each user's permissions", "Summaries and next actions", "Hand-off to the AI Command Center for quick actions"],
        shot: s("platform", "business-ai", "Business AI", "/business-ai"),
      },
    ],
    capabilities: ["Action Toolbox you control", "Safety rules the model cannot override", "Plan and per-agent token limits", "Knowledge-base articles as the only source", "No patient data to AI in hospital mode unless explicitly allowed", "Playground to test before going live"],
    related: ["business-ai", "whatsapp", "crm"],
  },
  {
    slug: "business-ai",
    name: "Business AI & Command Center",
    short: "Ask about your business, or tell it what to do",
    headline: "Nextosa Copilot: ask your business questions, then get things done",
    intro:
      "Nextosa Copilot is the AI built into NEXTOSA. Business AI answers questions about your own workspace in plain language. The AI Command Center is a pop-up you can type or speak to, to open pages, add contacts, set reminders and more. Both work only within what each person is allowed to see and do.",
    stats: [
      { value: "Your data", label: "answers from your workspace" },
      { value: "Per user", label: "permissions applied on every message" },
      { value: "Type or speak", label: "in the Command Center" },
    ],
    modules: [
      {
        title: "Business AI",
        description: "A chat page where you ask about your revenue, clients, stock, tasks and more, and get answers from your real data.",
        bullets: [
          "Looks things up in your workspace instead of guessing",
          "Reads each person's permissions fresh on every message, so a change takes effect at once",
          "Staff limited to certain WhatsApp numbers only see data from those numbers",
          "Past chats are saved so you can pick up where you left off",
        ],
        shot: s("platform", "business-ai", "Business AI", "/business-ai"),
      },
      {
        title: "AI Command Center",
        description: "A pop-up assistant available on every page that carries out actions for you, by text or voice.",
        bullets: [
          "Open any page or switch a tab you have access to",
          "Add or update a contact, create a reminder or a service record",
          "Create a campaign or send an approved WhatsApp template",
          "Export data, switch light and dark mode, and hand a question to Business AI",
          "Asks you to confirm before actions that change important things",
        ],
        shot: s("platform", "command-center", "AI Command Center", "/dashboard"),
      },
      {
        title: "One identity, everywhere",
        description: "Ask who it is and it answers the same way on every page: Nextosa Copilot, NEXTOSA's own business assistant.",
        bullets: ["Same assistant in Business AI and the Command Center", "Speaks for your workspace, not a third-party chatbot", "Type, or tap the mic and speak"],
        shot: s("platform", "command-center-answer", "Nextosa Copilot in the Command Center", "/dashboard"),
      },
    ],
    capabilities: [
      "Same identity everywhere: Nextosa Copilot",
      "Only the tools each user has permission for",
      "Voice input in the Command Center",
      "Confirmation step before sensitive actions",
      "Counts toward your plan's AI token allowance",
      "No patient data to AI in hospital mode unless explicitly allowed",
    ],
    related: ["ai-agents", "crm", "automations"],
  },
  {
    slug: "integrations",
    name: "Integrations",
    short: "WhatsApp, Gmail, Razorpay, Instagram and more",
    headline: "Connect the tools you already use",
    intro:
      "Official WhatsApp Business, Gmail, Instagram and Razorpay are built in. Link Google Drive, Slack, Shopify or Zapier, add the chat widget to your website, and call NEXTOSA from your own systems with signed webhooks.",
    stats: [
      { value: "WhatsApp", label: "official Business API" },
      { value: "Gmail", label: "send and read" },
      { value: "Webhooks", label: "signed and queued" },
    ],
    modules: [
      {
        title: "Connected websites",
        description: "Add your website or app, capture leads from it and let the AI chat widget answer visitors.",
        bullets: ["Leads land in your CRM with their source", "Per-site WhatsApp number", "Chat widget with human handover", "Site connections included in every plan"],
        shot: s("platform", "connected-websites", "Connected websites", "/connected-websites"),
      },
    ],
    capabilities: [
      "WhatsApp Business Platform (Meta)",
      "Gmail: invoices, receipts, broadcasts and inbound AI replies",
      "Instagram publishing for the Marketing Agent",
      "Razorpay: payment links, QR codes, refunds",
      "Google Drive, Slack, Shopify and Zapier connections",
      "Custom API connections and signed inbound webhooks",
      "Google sign-in",
      "Files stored in Google Cloud Storage",
    ],
    related: ["automations", "whatsapp", "fms"],
  },
  {
    slug: "email",
    name: "Email",
    short: "Invoices, drips and AI replies through Gmail",
    headline: "Send invoices, run drips and answer your inbox, all through your own Gmail",
    intro:
      "Connect Gmail once. Invoices and receipts go out automatically, automations send broadcasts and drips with a built-in unsubscribe link, and an AI agent can answer customers who email you, threaded like a normal reply.",
    stats: [
      { value: "Gmail", label: "your own address" },
      { value: "Opt-in", label: "inbound AI replies" },
      { value: "Unsubscribe", label: "on every automation email" },
    ],
    modules: [
      {
        title: "Invoices & receipts by email",
        description: "Send invoices and payment receipts to the client's email, automatically or by hand.",
        bullets: ["Auto-send toggle in Settings", "Send or resend from the invoice page", "School invoices go to the guardian only", "Clear message if Gmail is not connected or the address is invalid"],
        shot: s("platform", "invoices", "Invoices with a Send via Email action", "/invoices"),
      },
      {
        title: "Email automations",
        description: "Broadcasts and drips built on the same automation canvas, with no separate campaign tool.",
        bullets: ["Broadcast to all contacts or a tag on a schedule", "Drip: trigger, email, wait, email", "Marketing opt-outs always skipped", "Daily cap per workspace"],
      },
      {
        title: "Inbound AI replies",
        description: "A Support or Sales Agent answers customers who email your connected inbox.",
        bullets: ["You switch it on; mail from before is never answered", "Threaded replies as a normal Re:", "Skips newsletters, automated mail and no-reply senders", "Limit of three replies per conversation per hour"],
      },
    ],
    capabilities: [
      "Gmail send and read-only access, not full mailbox control",
      "HTML and plain-text bodies",
      "One-click unsubscribe headers",
      "Inbound email as an automation trigger",
      "Duplicate-safe: a redelivered email never gets a second reply",
      "Renewal job keeps the inbox connection alive",
    ],
    related: ["automations", "ai-agents", "fms"],
  },
];

export interface IndustryPage {
  slug: string;
  name: string;
  folder: string;
  short: string;
  headline: string;
  intro: string;
  challenges: { title: string; text: string }[];
  modules: ModuleBlock[];
  workflow: { title: string; text: string }[];
  highlights: string[];
}

const i = (folder: string, file: string, caption: string, route: string) => s(folder, file, caption, route);

export const industryPages: IndustryPage[] = [
  {
    slug: "healthcare",
    name: "Healthcare & Hospitals",
    folder: "healthcare",
    short: "Clinics, and a full hospital mode",
    headline: "From a one-doctor clinic to a multi-department hospital",
    intro:
      "Start as a simple clinic with patients, appointments and billing. When you are ready, switch on hospital mode for IPD beds, clinical records, pharmacy, lab, radiology and insurance claims, with every access to patient data audited.",
    challenges: [
      { title: "Scattered patient records", text: "Notes, prescriptions and reports sit in different places. A single chart per patient, with signed and immutable notes, fixes that." },
      { title: "Billing that ignores insurance", text: "Room rent caps, co-pay and TPA approvals change what a patient owes. NEXTOSA splits every bill between patient and insurer to the paisa." },
      { title: "Who saw this chart?", text: "Every read of patient data is written to a tamper-evident audit log, and doctors only see patients they treat." },
    ],
    modules: [
      { title: "Patients & appointments", description: "Register patients, book appointments and remind them on WhatsApp.", bullets: ["Appointment calendar with reminders", "Prescriptions and visit history", "Patient documents in private storage"], shot: i("healthcare", "appointments", "Appointments", "/service-records") },
      { title: "Inpatient & bed management", description: "Wards, rooms and beds on a live board, with admissions, transfers and discharge.", bullets: ["One admitted stay per patient, enforced by the database", "Care teams and ward staff", "Bed board that hides identities from people outside the care team"], shot: i("healthcare", "ipd", "Bed board and admissions", "/ipd") },
      { title: "Clinical records (EMR)", description: "Encounters, vitals, SOAP notes, prescriptions and lab orders with drug-allergy screening.", bullets: ["Signed notes cannot be edited, only amended", "Break-glass access with a written reason", "AI summaries only when explicitly enabled"], shot: i("healthcare", "emr", "Clinical records", "/clinical") },
      { title: "Pharmacy desk", description: "Batch and expiry tracked stock with dispensing against issued prescriptions.", bullets: ["First-expiry-first-out", "Expired stock cannot be dispensed", "Charges post to the patient's bill"], shot: i("healthcare", "pharmacy", "Pharmacy desk", "/pharmacy") },
      { title: "Lab & radiology", description: "Order from a priced catalog, work a queue, and keep results write-once with an amendment history.", bullets: ["Separate permissions for lab and radiology", "Reports and images stored encrypted", "Billed at the moment of performing"], shot: i("healthcare", "diagnostics", "Lab and radiology queue", "/diagnostics") },
      { title: "Hospital billing & TPA claims", description: "Daily room charges, bill splitting, pre-authorisation and the full claim lifecycle.", bullets: ["Room, nursing and pharmacy charges accrue automatically", "Claims with partial payments and TDS", "Credit notes for disallowances"], shot: i("healthcare", "hospital-billing", "Hospital billing", "/hospital-billing") },
    ],
    workflow: [
      { title: "Register", text: "Add the patient and book a visit." },
      { title: "Treat", text: "Open an encounter, record vitals, notes and orders." },
      { title: "Dispense & test", text: "Pharmacy and lab work from their own queues." },
      { title: "Bill & claim", text: "Split the bill, raise the claim, track settlement." },
    ],
    highlights: ["Hash-chained access audit log", "Doctor-level patient scoping", "Encrypted patient documents in a private bucket", "Opt-in, one-way hospital mode"],
  },
  {
    slug: "schools",
    name: "Schools & Colleges",
    folder: "school",
    short: "Admissions, fees, attendance, portals",
    headline: "Run admissions, fees and the classroom from one system",
    intro:
      "Move applicants through an admission board with task checklists, collect fees from guardians over WhatsApp, mark attendance, publish exams and give parents, students and teachers their own portals.",
    challenges: [
      { title: "Admissions in spreadsheets", text: "Documents, interviews and fee clearance get lost. A board with nested checklists keeps every applicant moving." },
      { title: "Chasing fees", text: "Fee schedules, overdue cycles and reminders go to the guardian's number automatically." },
      { title: "Too many apps for staff", text: "Teachers see only their class. Attendance, homework and marks live in one place." },
    ],
    modules: [
      { title: "Admissions board", description: "A Kanban board of applicants with tasks and nested checklists for documents, assessment and fees.", bullets: ["Overdue chips and progress on every card", "Class and section allotment", "Guardian contact on the record"], shot: i("school", "admissions", "Admissions board", "/service-records") },
      { title: "Students & records", description: "Student profiles with guardians, classes and academic records.", bullets: ["Student and parent portals", "Student records and certificates", "Notice board"], shot: i("school", "students", "Students", "/contacts") },
      { title: "Fee management", description: "Fee components, quarterly schedules and collection cycles, with invoices to the guardian.", bullets: ["Receipts reconcile to the paisa", "Overdue reminders", "Payment links by Razorpay"], shot: i("school", "fees", "Fee management", "/fees") },
      { title: "Attendance", description: "Daily attendance per class and section, visible to parents.", bullets: ["Class teacher portal", "Absence alerts", "Monthly summaries"], shot: i("school", "attendance", "Attendance", "/attendance") },
      { title: "Exams & results", description: "Exam cycles, subjects and marks with results for each student.", bullets: ["Multiple exam cycles", "Subject-wise marks", "Result view for students and parents"], shot: i("school", "exams", "Exams and results", "/exams") },
      { title: "Homework, timetable, transport, library", description: "The rest of the school day, tracked in the same system.", bullets: ["Homework posted by class", "Timetable", "Transport routes", "Library catalog"], shot: i("school", "homework", "Homework", "/homework") },
    ],
    workflow: [
      { title: "Apply", text: "An applicant lands on the admissions board." },
      { title: "Admit", text: "Complete the checklist and allot a class." },
      { title: "Teach", text: "Attendance, homework and exams run in the portals." },
      { title: "Collect", text: "Fees and reminders go to the guardian." },
    ],
    highlights: ["Parent, student and teacher portals", "Class teachers see only their class", "Guardian-first communication", "Staff and HR in the same workspace"],
  },
  {
    slug: "restaurants",
    name: "Restaurants & Food Service",
    folder: "restaurant",
    short: "QR table ordering and live orders",
    headline: "Let guests order from their table and pay on their phone",
    intro:
      "Guests scan a QR code at the table, browse the menu, verify their WhatsApp number and pay online or at the counter. Staff run a live orders board, and ingredient stock updates as dishes are sold.",
    challenges: [
      { title: "Slow table service", text: "QR ordering takes the order and the payment without waiting for a waiter." },
      { title: "Stock that never matches", text: "Recipes deduct ingredients when an order is paid, so counts stay honest." },
      { title: "No-shows and reservations", text: "Reservations are tracked and reminded on WhatsApp." },
    ],
    modules: [
      { title: "Tables & QR", description: "A unique QR code per table. The menu is public, but checkout needs a WhatsApp code.", bullets: ["Online payment through your Razorpay, or pay at the counter", "Tax applied from your own rates", "Printable QR sheets"], shot: i("restaurant", "tables-qr", "Tables and QR codes", "/table-ordering") },
      { title: "Menu & ingredients", description: "Menu items with price, availability and recipes linked to ingredient stock.", bullets: ["Veg and non-veg tags", "Mark items unavailable", "Low-stock alerts"], shot: i("restaurant", "menu", "Menu and ingredients", "/inventory") },
      { title: "Reservations", description: "Take and manage table reservations.", bullets: ["Confirmation and reminders on WhatsApp", "Reservation status board", "Guest history"], shot: i("restaurant", "reservations", "Reservations", "/service-records") },
      { title: "Sales & billing", description: "Every paid order produces an invoice and a receipt.", bullets: ["Refunds with credit notes", "Revenue and tax in the ledger", "Daily sales"], shot: i("restaurant", "sales", "Sales", "/sales") },
    ],
    workflow: [
      { title: "Scan", text: "The guest scans the table's QR code." },
      { title: "Order", text: "They pick dishes and verify their number." },
      { title: "Pay", text: "Online or at the counter." },
      { title: "Serve", text: "The kitchen works the live board." },
    ],
    highlights: ["Prices always read from your menu, never the guest's phone", "Automatic refunds on cancelled paid orders", "Receipt sent on WhatsApp", "Stock deducted once per paid order"],
  },
  {
    slug: "retail",
    name: "Retail & Distribution",
    folder: "retail",
    short: "Inventory-aware sales and B2B",
    headline: "Sell, stock and invoice from the same screen",
    intro:
      "Keep a catalog with selling prices, record sales that invoice themselves, raise purchase orders and let an AI agent quote live prices and stock to customers on WhatsApp.",
    challenges: [
      { title: "Stock and billing out of sync", text: "A sale reduces stock and creates the invoice in one step." },
      { title: "Quoting by hand", text: "The AI Sales Agent reads the real price and stock before it answers." },
      { title: "B2B follow-ups", text: "Wholesale clients get list prices and a deal pipeline." },
    ],
    modules: [
      { title: "Inventory", description: "Cost, selling price and stock for every item, with low-stock warnings.", bullets: ["Stock value", "Batch and expiry tracking", "Import from a spreadsheet"], shot: i("retail", "inventory", "Inventory", "/inventory") },
      { title: "Product catalog", description: "Descriptions, photos, packages and upsells your agents can use.", bullets: ["Packages and variants", "Linked upsells", "Stock movement ledger by client"], shot: i("retail", "catalog", "Product catalog", "/catalog") },
      { title: "Sales & invoices", description: "Record a sale and get an invoice, receipt and ledger entry.", bullets: ["Auto-send on WhatsApp", "Partial payments", "Razorpay QR on the invoice"], shot: i("retail", "sales", "Sales", "/sales") },
      { title: "Purchase orders", description: "Order from vendors and receive stock against the order.", bullets: ["Vendor-wise tracking", "Goods received notes", "Payables in the books"], shot: i("retail", "purchase-orders", "Purchase orders", "/purchase-orders") },
      { title: "B2B inquiries", description: "A pipeline for wholesale and distributor deals.", bullets: ["Stages with value", "Follow-up reminders", "AI-created deals"], shot: i("retail", "deals", "B2B inquiries", "/deals") },
    ],
    workflow: [
      { title: "Stock", text: "Add items and receive stock." },
      { title: "Sell", text: "Quote, sell and invoice." },
      { title: "Collect", text: "Payment links and QR codes." },
      { title: "Re-engage", text: "Broadcasts to inactive customers." },
    ],
    highlights: ["Selling price separate from cost", "First-expiry-first-out for perishable goods", "Never quotes a price that is not set", "After-sales and AMC tracking"],
  },
  {
    slug: "manufacturers",
    name: "Manufacturers",
    folder: "manufacturer",
    short: "Production, orders and inventory",
    headline: "Plan production, buy materials and ship orders in one workspace",
    intro:
      "Run a production board, raise purchase orders for raw materials, fulfil sales orders and keep equipment maintained, with costs and revenue flowing into your books.",
    challenges: [
      { title: "Materials and output not tied to stock", text: "Consumption, output and scrap post to inventory as the order moves." },
      { title: "Orders everywhere", text: "Sales orders and purchase orders sit beside production in one view." },
      { title: "Machine downtime", text: "Equipment records and maintenance keep the line running." },
    ],
    modules: [
      { title: "Production board", description: "A Kanban of production orders from planned to done.", bullets: ["Raw material consumption", "Finished goods output", "Scrap recorded"], shot: i("manufacturer", "production-board", "Production board", "/production-board") },
      { title: "Sales orders", description: "Orders from customers with fulfilment against stock.", bullets: ["Order status", "Fulfilment updates stock", "Invoice from the order"], shot: i("manufacturer", "sales-orders", "Sales orders", "/sales-orders") },
      { title: "Purchase orders", description: "Buy raw materials and receive them against the order.", bullets: ["Vendor tracking", "GRN updates stock", "Cost into accounts"], shot: i("manufacturer", "purchase-orders", "Purchase orders", "/purchase-orders") },
      { title: "Inventory", description: "Raw materials and finished goods with live stock.", bullets: ["Stock ledger", "Low-stock alerts", "Valuation"], shot: i("manufacturer", "inventory", "Inventory", "/inventory") },
      { title: "Equipment", description: "Machines, status and maintenance records.", bullets: ["Breakdown alerts can trigger automations", "Service history", "Assets register"], shot: i("manufacturer", "equipment", "Equipment", "/equipment") },
      { title: "Staff & HR", description: "Attendance, payroll and leave for your team.", bullets: ["Roster", "Payroll", "Leave"], shot: i("manufacturer", "hr", "Staff and HR", "/hr") },
    ],
    workflow: [
      { title: "Buy", text: "Raise a PO and receive materials." },
      { title: "Make", text: "Run the production order." },
      { title: "Ship", text: "Fulfil the sales order." },
      { title: "Bill", text: "Invoice and post to the ledger." },
    ],
    highlights: ["Scrap tracked separately", "Production posts to the stock ledger", "Audit logs", "Role-based permissions"],
  },
  {
    slug: "ca-firms",
    name: "CA & Tax Firms",
    folder: "ca-firm",
    short: "Clients, jobs, compliance calendar",
    headline: "Never miss a filing deadline again",
    intro:
      "Keep every tax client, job and deadline on a board and calendar, bill by service, and let AI surface what needs attention.",
    challenges: [
      { title: "Deadlines across clients", text: "The tax calendar shows what is due, for whom, and who owns it." },
      { title: "Work tracked in chats", text: "A job board assigns each filing with status and owner." },
      { title: "Billing after the fact", text: "Services and timesheets turn into invoices." },
    ],
    modules: [
      { title: "Tax clients", description: "A register of clients with their services and details.", bullets: ["Per-client services", "Documents in the vault", "WhatsApp reminders"], shot: i("ca-firm", "clients", "Tax clients", "/tax-clients") },
      { title: "Job board", description: "Filings and engagements on a board with owners and status.", bullets: ["Assign to staff", "Status columns", "Linked client and service"], shot: i("ca-firm", "job-board", "Job board", "/tax-job-board") },
      { title: "Compliance calendar", description: "Due dates for every client in one calendar.", bullets: ["Upcoming and overdue", "Reminders", "Filter by client or service"], shot: i("ca-firm", "calendar", "Tax calendar", "/tax-calendar") },
      { title: "Billing", description: "Invoice by service and track what clients owe.", bullets: ["Recurring invoices", "Receipts", "Outstanding by client"], shot: i("ca-firm", "billing", "Billing", "/tax-billing") },
      { title: "AI insights", description: "Plain-language summaries of workload and revenue.", bullets: ["Where jobs are stuck", "Client activity", "Revenue by service"], shot: i("ca-firm", "ai-insights", "AI insights", "/tax-ai-insights") },
    ],
    workflow: [
      { title: "Onboard", text: "Add the client and their services." },
      { title: "Plan", text: "Deadlines land on the calendar." },
      { title: "Deliver", text: "Work the job board." },
      { title: "Bill", text: "Invoice and collect." },
    ],
    highlights: ["Assignment per job", "Document vault", "Client reminders on WhatsApp", "Timesheet-driven invoicing"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    folder: "real-estate",
    short: "Properties, leads, site visits, finance",
    headline: "Turn enquiries into site visits and closed deals",
    intro:
      "List your properties, capture leads from your website and WhatsApp, schedule site visits and track the money in a dedicated ledger.",
    challenges: [
      { title: "Leads going cold", text: "AI follow-ups and reminders keep every enquiry warm." },
      { title: "Inventory in many files", text: "One property inventory with status per unit." },
      { title: "Brokerage and payments", text: "A finance ledger tracks bookings and receipts." },
    ],
    modules: [
      { title: "Property inventory", description: "Units and listings with status, price and details.", bullets: ["Available, booked, sold", "Photos", "Filters"], shot: i("real-estate", "property-inventory", "Property inventory", "/property-inventory") },
      { title: "Agent dashboard", description: "Each agent's leads, visits and deals at a glance.", bullets: ["Follow-ups due", "Visit schedule", "Conversion"], shot: i("real-estate", "agent-dashboard", "Agent dashboard", "/agent-dashboard") },
      { title: "Bookings", description: "Site visits and unit bookings in one place.", bullets: ["Site-visit scheduling", "Reminders", "Booking status"], shot: i("real-estate", "bookings", "Bookings", "/bookings") },
      { title: "Finance ledger", description: "Payments and commitments per booking.", bullets: ["Receipts", "Outstanding", "Posts to accounts"], shot: i("real-estate", "finance-ledger", "Finance ledger", "/finance-ledger") },
    ],
    workflow: [
      { title: "Capture", text: "Leads arrive from WhatsApp and your site." },
      { title: "Visit", text: "Schedule and remind." },
      { title: "Book", text: "Reserve the unit." },
      { title: "Collect", text: "Track payments in the ledger." },
    ],
    highlights: ["Website lead capture", "AI follow-ups", "Per-agent dashboards", "Audit logs"],
  },
  {
    slug: "salons",
    name: "Salons & Spas",
    folder: "salon",
    short: "Bookings, staff, clients, payroll",
    headline: "Fill your chairs and keep clients coming back",
    intro:
      "A booking calendar, staff roster, client portal and payroll in one place, with automatic reminders and AI insights on what is working.",
    challenges: [
      { title: "No-shows", text: "Automatic reminders on WhatsApp reduce missed appointments." },
      { title: "Roster clashes", text: "A staff roster and resource view avoid double booking." },
      { title: "Commission and payroll", text: "Payroll is computed from attendance and services." },
    ],
    modules: [
      { title: "Booking calendar", description: "Appointments by stylist and resource.", bullets: ["Drag to reschedule", "Reminders", "Client history"], shot: i("salon", "bookings", "Booking calendar", "/salon-bookings") },
      { title: "Clients", description: "Client profiles with visits, preferences and spend.", bullets: ["Visit history", "Notes", "Client portal"], shot: i("salon", "clients", "Salon clients", "/salon-clients") },
      { title: "Staff roster", description: "Who works when, and which services they offer.", bullets: ["Shifts", "Leave", "Skills"], shot: i("salon", "staff", "Staff roster", "/salon-staff") },
      { title: "Services & resources", description: "Your service menu, durations and chairs or rooms.", bullets: ["Price and duration", "Resources", "Packages"], shot: i("salon", "services", "Services and resources", "/salon-services") },
      { title: "Staff payroll", description: "Pay your team from attendance and performance.", bullets: ["Salary and commission", "Payslips", "Posts to accounts"], shot: i("salon", "payroll", "Staff payroll", "/salon-payroll") },
      { title: "AI insights", description: "What sells, who is busy and where gaps are.", bullets: ["Top services", "Utilisation", "Returning clients"], shot: i("salon", "ai-insights", "AI insights", "/salon-ai-insights") },
    ],
    workflow: [
      { title: "Book", text: "Client books by WhatsApp or the calendar." },
      { title: "Remind", text: "Automatic reminder before the visit." },
      { title: "Serve", text: "Check out and invoice." },
      { title: "Rebook", text: "Win-back messages after a gap." },
    ],
    highlights: ["Client portal", "Salon inventory", "Reminders", "Commission-aware payroll"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    folder: "professional-services",
    short: "Projects, timesheets, proposals",
    headline: "Run client projects from proposal to final invoice",
    intro:
      "Manage clients and deals, send proposals, run projects on a board with tasks and checklists, track time and invoice from hours.",
    challenges: [
      { title: "Projects without structure", text: "Tasks and nested checklists keep every engagement on track." },
      { title: "Unbilled hours", text: "Timesheets convert straight into invoices." },
      { title: "Proposals lost in email", text: "Proposals live next to the client record." },
    ],
    modules: [
      { title: "Projects board", description: "Client projects across stages with owners and deadlines.", bullets: ["Tasks and checklists", "Overdue chips", "Team avatars"], shot: i("professional-services", "projects", "Projects", "/service-records") },
      { title: "Timesheets", description: "Log hours against projects and bill them.", bullets: ["Billable and non-billable", "Invoice from timesheets", "Team totals"], shot: i("professional-services", "timesheets", "Timesheets", "/timesheets") },
      { title: "Deals", description: "A pipeline from enquiry to signed engagement.", bullets: ["Stages and value", "Follow-ups", "AI-created deals"], shot: i("professional-services", "deals", "Deals", "/deals") },
      { title: "Proposals", description: "Draft and track proposals before they become projects.", bullets: ["Status tracking", "Convert to project", "Client record link"], shot: i("professional-services", "proposals", "Proposals", "/sales") },
      { title: "Service catalog", description: "Your services with prices, ready for quotes.", bullets: ["Fixed or hourly", "AI quotes from it", "Packages"], shot: i("professional-services", "service-catalog", "Service catalog", "/service-catalog") },
    ],
    workflow: [
      { title: "Win", text: "Deal and proposal." },
      { title: "Deliver", text: "Project with tasks." },
      { title: "Track", text: "Timesheets." },
      { title: "Invoice", text: "From hours to cash." },
    ],
    highlights: ["Client portal", "Nested task checklists", "Time-to-invoice flow", "Team workload view"],
  },
  {
    slug: "gyms",
    name: "Gyms & Fitness Studios",
    folder: "gym",
    short: "Memberships, check-in, trainers, store",
    headline: "Sell memberships, run the front desk and keep members active",
    intro:
      "Plans and memberships, a check-in desk, trainer commissions, equipment maintenance and a members store, with automatic renewal and absence reminders.",
    challenges: [
      { title: "Lapsed memberships", text: "Automations message members before expiry and after absence." },
      { title: "Front-desk chaos", text: "A check-in desk records attendance in seconds." },
      { title: "Trainer commissions", text: "Commissions are calculated from sales." },
    ],
    modules: [
      { title: "Members & leads", description: "Every member and lead with plan, status and history.", bullets: ["Lead capture", "Renewals", "Member profile"], shot: i("gym", "members", "Members and leads", "/gym/members") },
      { title: "Plans", description: "Your membership plans and pricing.", bullets: ["Duration and price", "Freeze and renew", "Sign-up flow"], shot: i("gym", "plans", "Gym plans", "/gym/plans") },
      { title: "Check-in desk", description: "Fast check-in for the front desk.", bullets: ["Attendance log", "Expiry warnings", "Member lookup"], shot: i("gym", "checkin", "Check-in desk", "/gym/desk") },
      { title: "Equipment", description: "Track machines and maintenance.", bullets: ["Breakdown reports", "Service history", "Alerts"], shot: i("gym", "equipment", "Equipment", "/gym/equipment") },
      { title: "Store", description: "Sell supplements and merchandise with stock.", bullets: ["Product photos", "POS-style sales", "Stock"], shot: i("gym", "store", "Store", "/gym/store") },
      { title: "Trainer commissions", description: "See what each trainer earned.", bullets: ["Per trainer", "Per period", "Transparent"], shot: i("gym", "trainer-commissions", "Trainer commissions", "/gym/reports/trainers") },
    ],
    workflow: [
      { title: "Join", text: "Sign up on a plan." },
      { title: "Train", text: "Check in each visit." },
      { title: "Renew", text: "Reminders before expiry." },
      { title: "Win back", text: "Message absent members." },
    ],
    highlights: ["Member portal", "Expiry and absence automations", "Equipment alerts", "Store with stock"],
  },
];

export const platformBySlug = (slug: string) => platformPages.find((p) => p.slug === slug);
export const industryBySlug = (slug: string) => industryPages.find((p) => p.slug === slug);

// Captures that still show an empty page, a permission notice or a setup nag are not shown. Those modules render as
// text-only cards instead.
const SPARSE = new Set([
  "gym/checkin", "gym/trainer-commissions", "school/timetable", "retail/purchase-orders", "healthcare/emr",
  "platform/approvals", "platform/lms-courses", "platform/tasks", "platform/templates", "platform/campaigns",
  "platform/purchase-orders", "platform/ai-agents", "platform/documents",
]);
const isSparse = (sh?: Shot) => !!sh && SPARSE.has(sh.src.replace("/screens/", "").replace(".jpg", ""));
for (const p of [...platformPages, ...industryPages]) {
  for (const m of p.modules) if (isSparse(m.shot)) m.shot = undefined;
}

/** First module that still has a real screenshot (used for heroes and cards). */
export function leadShot(page: { modules: ModuleBlock[] }): Shot {
  return (page.modules.find((m) => m.shot) ?? page.modules[0]).shot ?? { src: "/screens/platform/dashboard.jpg", caption: "NEXTOSA dashboard", url: "app.nextosa.com/dashboard" };
}
