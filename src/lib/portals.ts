// Portals and deep details per industry. Every statement is taken from what the NEXTOSA app does today.
// Where an industry has no outside-facing portal, that is stated plainly instead of implied.

export interface Portal {
  persona: string;
  kind: string; // short label, e.g. "Parent portal"
  signIn: string;
  can: string[];
  boundary: string;
  shotFile?: string; // file under /screens/portals, without extension
  shotUrl?: string; // route shown in the browser frame
}

export interface IndustryDepth {
  portals: Portal[];
  noPortalNote?: string;
  details: { title: string; text: string }[];
}

const employeePortal: Portal = {
  persona: "Staff member",
  kind: "Employee self-service portal",
  shotFile: "school-employee",
  shotUrl: "/employee-portal",
  signIn: "Phone number and a 4-8 digit PIN that the admin sets on the staff record. Clearing the PIN revokes access.",
  can: ["View own profile", "Request leave and track its status", "See assigned shifts", "List and download payslips as PDF"],
  boundary: "A separate token with no user account behind it, so it cannot reach any staff screen or API.",
};

export const industryDepth: Record<string, IndustryDepth> = {
  healthcare: {
    portals: [],
    noPortalNote:
      "NEXTOSA has no patient portal today. Patients are reached on WhatsApp for appointment reminders and messages; clinical records stay inside the hospital team, behind care-team scoping and the access audit log.",
    details: [
      { title: "Opt-in hospital mode", text: "A clinic stays a simple clinic until an Admin deliberately switches on hospital mode, which is one-way and needs an explicit acknowledgement. Clinics that never switch it on see no change." },
      { title: "Tamper-evident access log", text: "Every read of patient data is written to an append-only, hash-chained log. A database trigger refuses edits and deletes, and an integrity check detects any altered or removed row." },
      { title: "Access follows treatment, not role", text: "Doctors open the charts of patients they treat. An Admin has no automatic access to clinical content; reaching a chart outside the care team needs break-glass with a written reason, which is reviewed afterwards." },
      { title: "Immutable clinical records", text: "Signed notes cannot be edited, only amended as a new version. Issued prescriptions are sealed, vital signs are append-only, and lab results are write-once with an amendment history." },
      { title: "Money that adds up to the paisa", text: "Room rent caps, co-pay, deductible and sum insured split each bill into a patient invoice and a payer invoice that always total the bill. Disallowances become credit notes." },
      { title: "Encrypted documents", text: "Patient files are encrypted per file and stored in a separate private bucket. There is no public link to a document; it is streamed only to someone with access." },
    ],
  },
  schools: {
    portals: [
      {
        persona: "Parent or guardian",
        kind: "Parent portal",
        shotFile: "school-parent",
        shotUrl: "/parent",
        signIn: "The school invites them from Settings > Team with at least one linked student. They accept the invite, set a password (or use Google) and sign in. It uses no paid seat.",
        can: ["Switch between several children", "See attendance and exam results", "View fee invoices", "Create and track leave requests", "Read announcements and notifications", "Message the child's teachers, with attachments"],
        boundary: "Only the parent-portal APIs answer; every other route returns 403, and the child records are resolved on the server from the guardian link.",
      },
      {
        persona: "Student",
        kind: "Student portal",
        shotFile: "school-student",
        shotUrl: "/student",
        signIn: "Invited with a link to their own student record, then password sign-in.",
        can: ["Own profile", "Homework", "Timetable", "Exam results", "Announcements and notifications"],
        boundary: "Read-only, and limited to the student-portal APIs.",
      },
      {
        persona: "Class teacher",
        kind: "Teacher portal",
        shotFile: "school-teacher",
        shotUrl: "/teacher",
        signIn: "Invited from the HR record, which binds the staff member to a class. It is an unpaid, portal-only seat.",
        can: ["Mark attendance for the class", "Set homework and enter exam marks", "See the timetable and library", "Request own leave", "Message parents"],
        boundary: "A default-deny allowlist: finance, billing, settings and HR answer 403 even if permissions were granted by mistake.",
      },
    ],
    details: [
      { title: "Admissions as a board", text: "Every admission is a card with tasks and nested checklists (documents, entrance assessment, fee clearance, class allotment), progress, overdue flags and the people involved." },
      { title: "Fees to the guardian", text: "Fee schedules bill each cycle, invoices go to the guardian's number rather than the student's, and receipts reconcile to the paisa." },
      { title: "Classes, sections and subjects", text: "Academic sessions, classes with sections, subject masters, timetables, exams with marks and homework are all built in." },
      { title: "Class teachers cost nothing", text: "Teacher seats are portal-only and never count against your paid team seats, and the usage meter and the limit use the same definition." },
    ],
  },
  restaurants: {
    portals: [
      {
        persona: "Diner",
        kind: "QR table ordering page",
        shotFile: "restaurant-diner",
        shotUrl: "/t/your-table",
        signIn: "No account. The diner scans the table's QR code, then verifies their WhatsApp number with a one-time code at checkout.",
        can: ["Browse the live menu", "Build a cart", "Pay online or at the counter", "Add order notes", "Track the order from paid to preparing, ready and served"],
        boundary: "The QR code identifies only the table. Prices always come from your menu, never from the request, and the order page is protected by its own token.",
      },
    ],
    details: [
      { title: "Pay first", text: "Online orders are confirmed by the verified payment webhook only, so an order is never marked paid on the diner's say-so." },
      { title: "Taxes and invoices", text: "Tax uses your configured rates, snapshotted per order. A paid order becomes a customer, a paid invoice and a receipt automatically." },
      { title: "Stock follows orders", text: "A paid order deducts ingredient stock exactly once, and a refund restores it only if the kitchen had not started." },
      { title: "Refunds with credit notes", text: "Cancelling a paid online order triggers an automatic refund and issues a credit note, so the invoice itself is never edited." },
      { title: "Live kitchen board", text: "Staff see new and updated orders instantly. The live events carry no customer details." },
    ],
  },
  retail: {
    portals: [],
    noPortalNote: "Retail workspaces have no customer portal today. Customers are served over WhatsApp, with invoices and receipts sent automatically.",
    details: [
      { title: "Selling price and cost kept apart", text: "Items carry a customer-facing selling price, a wholesale list price and a cost price that is never shown to customers or quoted by the AI." },
      { title: "Sale to invoice", text: "A recorded sale creates a linked invoice with the revenue entry posted, and a receipt when payment is taken." },
      { title: "Catalog with packages and upsells", text: "Products carry descriptions, benefits, images, packages with their own prices, and linked upsell or cross-sell items." },
      { title: "A stock ledger you can trace", text: "Every stock movement records the balance after it and, for sales, which client and which sale, and the item page shows the full history." },
    ],
  },
  manufacturers: {
    portals: [
      {
        persona: "Distributor or B2B customer",
        kind: "Distributor portal",
        shotFile: "manufacturer-distributor",
        shotUrl: "/b2b-catalog",
        signIn: "The team invites them from Settings > Team, linked to their customer record, then password sign-in.",
        can: ["Browse your published finished-goods catalog with list prices", "Place orders", "See their own order history and order detail"],
        boundary: "They never see cost or stock. Price and customer are stamped on the server, and only published, priced finished goods can be ordered.",
      },
      employeePortal,
    ],
    details: [
      { title: "Bills of materials and production", text: "Production consumes raw materials and outputs finished goods or scrap, with the stock ledger recording each movement." },
      { title: "Purchase to payment", text: "Purchase orders and goods receipt are part of the same inventory and ledger as sales." },
      { title: "Payroll and attendance", text: "Staff attendance, leave, shifts and payslips are built in, with a self-service portal for the team." },
      { title: "Sales orders and fulfilment", text: "Customer orders are fulfilled against stock, and the customer is recorded on each stock row." },
    ],
  },
  "ca-firms": {
    portals: [
      {
        persona: "Tax client",
        kind: "Secure client portal",
        shotFile: "ca-firm-client",
        shotUrl: "/tax-client-portal",
        signIn: "Staff enable portal access with an email and password for the client, who then signs in at a shareable firm link.",
        can: ["View their profile", "List and download their documents", "See invoices with detail and payment history"],
        boundary: "Access is re-checked against the database on every request, so switching a client's portal off takes effect immediately, and the token cannot reach any staff API.",
      },
    ],
    details: [
      { title: "A job board per client", text: "Jobs move across a board, and the team works them with due dates." },
      { title: "Service catalog and timesheets", text: "Standard services carry their own fees, and time spent is logged against jobs." },
      { title: "Documents per client", text: "Client documents live with the client record, and the client portal lets them download what you share." },
      { title: "Billing and tax", text: "Invoices post to the ledger, and the tax report accounts for credit notes in the period they were issued." },
    ],
  },
  "real-estate": {
    portals: [],
    noPortalNote: "A buyer cannot log in to NEXTOSA today. Buyers and tenants are handled through your team, WhatsApp and documents you send them.",
    details: [
      { title: "Leads to bookings", text: "Enquiries enter as leads, move through your pipeline and become bookings against specific units." },
      { title: "Channel partners and KYC", text: "Track channel partners and collect the buyer documents your process needs." },
      { title: "Follow-ups that do not slip", text: "WhatsApp and reminders keep follow-ups with leads from slipping." },
      { title: "Payments and invoices", text: "Invoices and receipts post to the same ledger as the rest of your finance." },
    ],
  },
  salons: {
    portals: [
      {
        persona: "Salon client",
        kind: "Client portal",
        shotFile: "salon-client",
        shotUrl: "/salon-client-portal",
        signIn: "Staff enable it on the client record with an email and password, and the client signs in at the salon's own link.",
        can: ["See their profile", "View packages and wallet or membership balance", "List their own bookings", "Book an appointment by choosing a service, a staff member and an available slot"],
        boundary: "A separate sign-in with its own token; a client sees only their own data.",
      },
    ],
    details: [
      { title: "Bookings and staff schedules", text: "Services, staff, available slots and bookings are managed together, and clients can pick a free slot themselves in the portal." },
      { title: "Packages and memberships", text: "Sell packages and memberships and track the remaining balance per client." },
      { title: "Salon payroll", text: "Payroll is a separate permission from the staff roster, so you can let a manager roster the team without seeing salaries." },
      { title: "Reminders on WhatsApp", text: "Reminders and messages go out on the official WhatsApp Business API." },
    ],
  },
  "professional-services": {
    portals: [
      {
        persona: "Client",
        kind: "Client portal",
        shotFile: "professional-services-client",
        shotUrl: "/professional-services-client-portal",
        signIn: "Staff enable access with an email and a password of at least eight characters, and the client signs in at the firm's link.",
        can: ["See their projects", "View invoices with payment status and an overdue badge", "Open shared documents", "View their profile"],
        boundary: "Read-only, with its own token that cannot reach any staff API.",
      },
    ],
    details: [
      { title: "Projects on a board", text: "Projects move across Kanban columns with tasks and two-level checklists, assignees, due dates and an overdue flag." },
      { title: "Timesheets to invoices", text: "Logged time can be turned into an invoice, and the entries are marked as billed so they cannot be billed twice." },
      { title: "Demo portfolio", text: "The demo workspace ships a realistic team and project portfolio so you can explore without entering your own data." },
      { title: "Client documents", text: "Keep client documents with the client and share them through the portal." },
    ],
  },
  gyms: {
    portals: [
      {
        persona: "Gym member",
        kind: "Member portal (mobile)",
        shotFile: "gym-member",
        shotUrl: "/portal/member",
        signIn: "The gym clicks Send Portal Access and the member receives a single-use magic link valid for 7 days. No password to remember.",
        can: ["See their name, photo and check-in QR code", "View current plan, status, dates and days remaining", "Browse the gym store", "View their profile"],
        boundary: "The member id comes from the session, never from the client, and every other route is closed to a member.",
      },
    ],
    details: [
      { title: "Check-in with QR", text: "Members check in with a QR code, which feeds attendance and expiry tracking." },
      { title: "Plans and renewals", text: "Membership plans, start and end dates and days remaining are tracked, with automations for expiry and absent members." },
      { title: "Trainers and commissions", text: "Trainer commissions, equipment tracking and a product store each have their own permission." },
      { title: "One permission per screen", text: "Plans, check-in, trainer commissions, equipment and the store can each be granted separately to staff." },
    ],
  },
};
