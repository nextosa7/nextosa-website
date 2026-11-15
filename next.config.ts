import type { NextConfig } from "next";

// Security headers for every response.
//
// The CSP is enforced. script-src still allows 'unsafe-inline' because Next.js injects small inline scripts for
// hydration (and layout.tsx has one of its own); removing it needs a per-request nonce. Everything else is strict:
// no framing, no plugins, forms and base URI locked to this site, images/media/fonts/connections limited to the
// origins listed. If a new third-party script, image host or embed is ever added, add its origin here or the
// browser will block it.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://flagcdn.com", // flagcdn: country flags in the contact form's phone field
  "media-src 'self'", // product videos are served from /public/videos
  "font-src 'self' data:",
  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
  // No includeSubDomains on purpose: the app and API live on other subdomains and are not controlled by this repo.
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
