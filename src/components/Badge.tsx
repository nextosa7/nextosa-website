import { ReactNode } from "react";

export default function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-300 ${className}`}
    >
      {children}
    </span>
  );
}
