"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { siteConfig } from "@/lib/site";

// One delegated click listener for the whole site: any click on a link to sign up, log in or contact us is
// recorded as a "cta_click" event with where it was (header, hero, pricing, ...) and which page. No personal
// data is sent: only the button text, the kind of link, the section and the page path.
function kindOf(href: string): "signup" | "login" | "contact" | null {
  if (href.startsWith(siteConfig.signupUrl)) return "signup";
  if (href.startsWith(siteConfig.loginUrl)) return "login";
  try {
    const url = new URL(href, window.location.origin);
    if (url.origin === window.location.origin && url.pathname === "/contact") return "contact";
  } catch {
    /* not a valid URL: ignore */
  }
  return null;
}

function whereOf(el: Element): string {
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  const section = el.closest("section[id]");
  if (section?.id) return section.id;
  return el.closest("section") ? "page" : "other";
}

export default function ClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest?.("a[href]");
      if (!link) return;
      const kind = kindOf(link.getAttribute("href") ?? "");
      if (!kind) return;
      track("cta_click", {
        type: kind,
        label: (link.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 60),
        where: whereOf(link),
        page: window.location.pathname,
      });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
