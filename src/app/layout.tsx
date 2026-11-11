import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackBar from "@/components/BackBar";
import ClickTracker from "@/components/ClickTracker";
import { Analytics } from "@vercel/analytics/next";
import { MotionProvider } from "@/components/motion/primitives";
import { siteConfig } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { SEO_DEFAULT_DESCRIPTION, SEO_DEFAULT_TITLE, SEO_KEYWORDS, organizationLd, softwareLd, websiteLd } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: SEO_DEFAULT_TITLE,
    template: `%s | ${siteConfig.name}`,
  },
  description: SEO_DEFAULT_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: siteConfig.url },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: SEO_DEFAULT_TITLE,
    description: SEO_DEFAULT_DESCRIPTION,
    siteName: siteConfig.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_DEFAULT_TITLE,
    description: SEO_DEFAULT_DESCRIPTION,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Content must be readable without JavaScript: scroll/load animations start hidden, so undo that here. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {/* Same for a script that fails to load: if React has not taken over after 4s, show everything. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `setTimeout(function(){var d=document.documentElement;if(!d.dataset.hydrated)d.classList.add("motion-failsafe")},4000)`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-white text-navy-900">
        <MotionProvider>
          <div className="sticky top-0 z-50">
            <Navbar />
            <BackBar />
          </div>
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
        <JsonLd data={[organizationLd(), websiteLd(), softwareLd()]} />
        <Analytics />
        <ClickTracker />
      </body>
    </html>
  );
}
