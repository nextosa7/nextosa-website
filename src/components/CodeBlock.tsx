"use client";

import { useState } from "react";

// A plain, quiet code panel for the developer reference: one or more language tabs, a copy button, nothing else.

export interface CodeSample {
  label: string;
  code: string;
}

export default function CodeBlock({ title, samples, status }: { title?: string; samples: CodeSample[]; status?: string }) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const sample = samples[Math.min(active, samples.length - 1)];

  async function copy() {
    try {
      await navigator.clipboard.writeText(sample.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard can be blocked (insecure context, permissions): the text is still selectable.
    }
  }

  return (
    <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2">
        <div className="flex items-center gap-3">
          {title && <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</span>}
          {status && <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs font-medium text-slate-600">{status}</span>}
        </div>
        <div className="flex items-center gap-1">
          {samples.length > 1 &&
            samples.map((s, i) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${i === active ? "bg-navy-900 text-white" : "text-slate-600 hover:bg-slate-200"}`}
              >
                {s.label}
              </button>
            ))}
          <button type="button" onClick={copy} className="ml-1 rounded-md px-2.5 py-1 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-200">
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </figcaption>
      <pre className="overflow-x-auto p-4 text-[13px] leading-6 text-slate-800">
        <code>{sample.code}</code>
      </pre>
    </figure>
  );
}
