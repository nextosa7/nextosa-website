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

## Environment Variables

This site integrates both ways with a NEXTOSA CRM Custom App connection (Settings > Integrations >
Custom Apps in NEXTOSA). Copy `.env.example` to `.env.local` and fill in both values from the same
connection - they're shown together, once, when you click "Generate Inbound API Key":

| Variable               | Used by                                            | Purpose                                                                                                         |
| ----------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `NEXTOSA_INBOUND_URL`   | `src/app/contact/actions.ts`                       | The full, connection-specific URL this site POSTs new Contact form leads to.                                   |
| `CRM_WEBHOOK_SECRET`    | `src/app/contact/actions.ts`, `src/app/api/webhooks/crm/route.ts` | The connection's shared secret - sent as the `x-api-key` header on outbound leads, and used to verify the `x-nextosa-signature` HMAC-SHA256 header on inbound commands NEXTOSA sends this site. |

In production (Vercel), set both under the project's own Environment Variables settings rather
than committing `.env.local`.

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
