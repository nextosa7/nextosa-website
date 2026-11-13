// NEXTOSA logo: a network "N" (four connected nodes) with the wordmark. The site is dark, so the default
// uses a white line and white "NEXT"; "OSA" and the nodes are always brand red. Static files for other uses
// live in /public/brand.

export function LogoMark({ className = "h-9 w-auto", dark = true }: { className?: string; dark?: boolean }) {
  const line = dark ? "#ffffff" : "#111114";
  return (
    <svg viewBox="92 30 116 132" className={className} role="img" aria-label="NEXTOSA" xmlns="http://www.w3.org/2000/svg">
      <path d="M112 142V50L188 142V50" fill="none" stroke={line} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <g fill="#e11d2e">
        <circle cx="112" cy="142" r="15" />
        <circle cx="112" cy="50" r="15" />
        <circle cx="188" cy="142" r="15" />
        <circle cx="188" cy="50" r="15" />
      </g>
      <g fill="#ffffff">
        <circle cx="112" cy="142" r="5" />
        <circle cx="112" cy="50" r="5" />
        <circle cx="188" cy="142" r="5" />
        <circle cx="188" cy="50" r="5" />
      </g>
    </svg>
  );
}

export default function Logo({ dark = true, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <span className={`flex shrink-0 items-center gap-2.5 whitespace-nowrap ${className}`}>
      <LogoMark dark={dark} className="h-8 w-auto" />
      <span className="text-lg font-extrabold leading-none tracking-[0.1em]">
        <span className={dark ? "text-white" : "text-[#111114]"}>NEXT</span>
        <span className="text-[#e11d2e]">OSA</span>
      </span>
    </span>
  );
}
