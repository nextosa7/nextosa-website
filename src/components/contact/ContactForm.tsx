"use client";

import { FormEvent, useState } from "react";
import Button from "../Button";
import { siteConfig } from "@/lib/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString() ?? "";
    const email = data.get("email")?.toString() ?? "";
    const business = data.get("business")?.toString() ?? "";
    const message = data.get("message")?.toString() ?? "";

    const subject = encodeURIComponent(`NEXTOSA Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nBusiness: ${business}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-navy-900"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-navy-900 placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-navy-900"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@business.com"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-navy-900 placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="business"
          className="mb-1.5 block text-sm font-medium text-navy-900"
        >
          Business Name
        </label>
        <input
          id="business"
          name="business"
          type="text"
          placeholder="Your Business Inc."
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-navy-900 placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-navy-900"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your business and what you'd like NEXTOSA to help with..."
          className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-navy-900 placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Send Message
      </Button>

      {submitted && (
        <p className="text-center text-sm text-emerald-600">
          Your email client should now be open with your message ready to
          send. If it didn&apos;t open, email us directly at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
