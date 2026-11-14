"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Container from "./Container";
import { industryPages, platformPages } from "@/lib/content";

const STATIC_LABELS: Record<string, string> = {
  about: "About",
  contact: "Contact",
  compare: "Why NEXTOSA",
  security: "Security",
  "roles-and-permissions": "Roles & permissions",
  automations: "Automations guide",
  "email-and-gmail": "Email & Gmail",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
};

// A slim bar under the navbar on every page except the home page: a Back button, a Home link and where
// you are, so nobody has to edit the address to get back.
export default function BackBar() {
  const pathname = usePathname();
  const router = useRouter();
  if (pathname === "/") return null;

  const [section, slug] = pathname.split("/").filter(Boolean);
  const crumbs: { label: string; href?: string }[] = [{ label: "Home", href: "/" }];

  if (section === "industries") {
    crumbs.push({ label: "Industries", href: "/#industries" });
    const page = industryPages.find((p) => p.slug === slug);
    if (page) crumbs.push({ label: page.name });
  } else if (section === "platform") {
    crumbs.push({ label: "Platform", href: "/#platform" });
    const page = platformPages.find((p) => p.slug === slug);
    if (page) crumbs.push({ label: page.name });
  } else if (section) {
    crumbs.push({ label: STATIC_LABELS[section] ?? section });
  }

  function goBack() {
    // With no earlier page in this tab (a link opened directly), Back would leave the site: go Home instead.
    if (window.history.length > 1) router.back();
    else router.push("/");
  }

  return (
    <div className="border-b border-white/10 theme-light">
      <Container>
        <div className="flex items-center gap-4 py-2.5 text-sm">
          <button
            type="button"
            onClick={goBack}
            className="flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1 font-medium text-slate-200 transition-colors hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-2 text-slate-400">
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex min-w-0 items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {c.href ? (
                  <Link href={c.href} className="font-medium text-slate-200 hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="truncate text-slate-400" aria-current="page">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </Container>
    </div>
  );
}
