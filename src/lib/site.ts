export const siteConfig = {
  name: "NEXTOSA",
  tagline: "The AI Operating System to Run Your Entire Business",
  description:
    "NEXTOSA is an all-in-one AI business operating system — billing, staff management, compliance tracking, and automated WhatsApp client communication, with dedicated modules for 9 industries.",
  url: "https://nextosa.com",
  appUrl: "https://nextosa-frontend.vercel.app",
  loginUrl: "https://nextosa-frontend.vercel.app/login",
  signupUrl: "https://nextosa-frontend.vercel.app/register",
  email: "nextosa7@gmail.com",
  founder: "Harsh Soni",
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/#industries", label: "Industries" },
    { href: "/#features", label: "Features" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  footerLinks: {
    product: [
      { href: "/#industries", label: "Industries" },
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
