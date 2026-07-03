import Badge from "./Badge";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div
      className={`mx-auto max-w-2xl ${center ? "text-center" : "text-left"}`}
    >
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2
        className={`mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-7 ${
            dark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
