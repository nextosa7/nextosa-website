"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";
import Button from "./Button";
import { siteConfig } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/80 backdrop-blur-lg">
      <Container>
        <nav className="flex h-18 items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-white"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 text-sm font-black text-white">
              N
            </span>
            NEXTOSA
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button href="/contact" size="md">
              Get Started
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-navy-900 md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2">
              <Button href="/contact" size="md" className="w-full">
                Get Started
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
