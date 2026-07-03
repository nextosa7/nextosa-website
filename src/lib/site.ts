export const siteConfig = {
  name: "NEXTOSA",
  tagline: "AI-Powered CRM & WhatsApp Automation",
  description:
    "NEXTOSA is an AI-powered CRM and WhatsApp automation platform that helps businesses manage clients, automate support, and never miss a follow-up.",
  url: "https://nextosa.com",
  email: "nextosa7@gmail.com",
  founder: "Harsh Soni",
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/#features", label: "Features" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  footerLinks: {
    product: [
      { href: "/#features", label: "Features" },
      { href: "/#how-it-works", label: "How it Works" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#testimonials", label: "Testimonials" },
    ],
    company: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
    ],
    legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
