import Image from "next/image";
import type { Shot } from "@/lib/content";

// A real app screenshot inside a browser-style frame.
export default function BrowserFrame({
  shot,
  priority = false,
  className = "",
  showCaption = false,
}: {
  shot: Shot;
  priority?: boolean;
  className?: string;
  showCaption?: boolean;
}) {
  if (shot.mobile) {
    // Phone-sized capture: a narrow device frame, so a tall screenshot never stretches the layout.
    return (
      <figure className={className}>
        <div className="mx-auto w-[260px] rounded-[2.2rem] border-[7px] border-navy-900 bg-navy-900 shadow-2xl shadow-navy-900/20 sm:w-[280px]">
          <div className="overflow-hidden rounded-[1.7rem] bg-white">
            <Image src={shot.src} alt={shot.caption} width={780} height={1688} priority={priority} sizes="280px" className="h-auto w-full" />
          </div>
        </div>
        {showCaption && <figcaption className="mt-3 text-center text-sm text-slate-500">{shot.caption}</figcaption>}
      </figure>
    );
  }
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl shadow-navy-900/15 ring-1 ring-black/5">
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-xs text-slate-500">
            {shot.url}
          </span>
        </div>
        <Image
          src={shot.src}
          alt={shot.caption}
          width={1440}
          height={900}
          priority={priority}
          sizes="(min-width: 1024px) 700px, 100vw"
          className="h-auto w-full"
        />
      </div>
      {showCaption && (
        <figcaption className="mt-3 text-center text-sm text-slate-500">{shot.caption}</figcaption>
      )}
    </figure>
  );
}
