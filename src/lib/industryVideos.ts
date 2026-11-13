// Screen recordings of the live NEXTOSA app, one set per industry page (public/videos/industries/<file>.mp4 + <file>.jpg).
// They are silent walkthroughs with on-screen captions and never use any AI feature.
export interface IndustryVideo {
  file: string; // base name under /videos/industries
  title: string;
  text: string;
}

const common =
  "It also covers the dashboard, billing, finance, tasks, automations, templates, conversations, tickets, staff and settings, including Refer & Earn, Support Tickets and Integrations.";

const make = (file: string, title: string, lead: string): IndustryVideo[] => [
  { file, title, text: `${lead} ${common}` },
];

export const industryVideos: Record<string, IndustryVideo[]> = {
  healthcare: make("healthcare", "Healthcare, A to Z", "A full walkthrough for clinics and hospitals: patients, appointments, hospital setup, pharmacy and documents."),
  schools: make("schools", "Schools and colleges, A to Z", "A full walkthrough: admissions, students, fees, attendance, exams, homework, timetable, transport, library and HR."),
  restaurants: make("restaurants", "Restaurants, A to Z", "A full walkthrough: guests, menu and recipes, tables with QR ordering, the live orders board and reservations."),
  retail: make("retail", "Retail and distribution, A to Z", "A full walkthrough: customers and vendors, B2B deals, after-sales, and inventory with batches."),
  manufacturers: make("manufacturers", "Manufacturers, A to Z", "A full walkthrough: orders, sales orders, production board, raw materials, equipment and HR."),
  "ca-firms": make("ca-firms", "CA firms, A to Z", "A full walkthrough: tax clients, job board, tax calendar and billing for tax work."),
  "real-estate": make("real-estate", "Real estate, A to Z", "A full walkthrough: property inventory, agent dashboard, bookings with payment plans and the finance ledger."),
  salons: make("salons", "Salons and spas, A to Z", "A full walkthrough: staff, clients, services, booking calendar, checkout, stock and commissions."),
  "professional-services": make("professional-services", "Agencies and consultants, A to Z", "A full walkthrough: clients, projects with tasks and checklists, timesheets and the deals pipeline."),
  gyms: make("gyms", "Gyms and studios, A to Z", "A full walkthrough: members and leads, plans, check-in desk, store, trainer commissions and staff."),
};
