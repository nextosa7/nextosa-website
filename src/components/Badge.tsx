import { ReactNode } from "react";

export default function Badge({
  children,
  className = "",
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean; // for use on a light background
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${
        light ? "border-accent-200 bg-accent-50 text-accent-700" : "border-accent-400/30 bg-accent-500/10 text-accent-300"
      } ${className}`}
    >
      {children}
    </span>
  );
}
