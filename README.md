# NEXTOSA — Marketing Website

Marketing site for **NEXTOSA**, an AI-powered CRM and WhatsApp automation platform for businesses. Built with Next.js (App Router) and Tailwind CSS.

Live domain: [nextosa.com](https://nextosa.com)

## Pages

| Route      | Description                                                              |
| ---------- | ------------------------------------------------------------------------- |
| `/`        | Homepage — hero, features, how it works, pricing, testimonials, FAQ, CTA |
| `/about`   | Company info, mission, and founder                                       |
| `/privacy` | GDPR-compliant Privacy Policy, including WhatsApp Business API data usage |
| `/terms`   | Terms of Service, including WhatsApp Business Platform compliance         |
| `/contact` | Contact form and company contact details                                  |

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- Self-contained components — no external UI library

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

```bash
npm run dev      # start the dev server
npm run build    # production build
npm run start    # run the production build
npm run lint     # run ESLint
```

## Project Structure

```
src/
  app/                # routes (App Router)
    about/
    contact/
    privacy/
    terms/
  components/
    home/              # homepage sections
    legal/             # shared layout for legal pages
    contact/           # contact form
  lib/
    site.ts            # site-wide config (name, links, contact info)
```

## Deployment

Intended for deployment on [Vercel](https://vercel.com), mapped to the `nextosa.com` domain.

## Contact

- Email: [nextosa7@gmail.com](mailto:nextosa7@gmail.com)
- Founder: Harsh Soni
