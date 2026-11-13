import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

// The branded share card (1200x630) used for the default image and the platform and industry pages.
export function renderOgImage({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  const long = title.length > 48;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #0b1f24 0%, #0f3a3f 60%, #0f766e 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="50" height="57" viewBox="92 30 116 132"><path d="M112 142V50L188 142V50" fill="none" stroke="#ffffff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" /><circle cx="112" cy="142" r="15" fill="#e11d2e" /><circle cx="112" cy="50" r="15" fill="#e11d2e" /><circle cx="188" cy="142" r="15" fill="#e11d2e" /><circle cx="188" cy="50" r="15" fill="#e11d2e" /></svg>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 800, letterSpacing: 4 }}><span>NEXT</span><span style={{ color: "#e11d2e" }}>OSA</span></div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 26, fontWeight: 700, color: "#5eead4", textTransform: "uppercase", letterSpacing: 3 }}>{eyebrow}</div>
          <div style={{ fontSize: long ? 56 : 68, fontWeight: 800, lineHeight: 1.08 }}>{title}</div>
          <div style={{ fontSize: 28, color: "#cbd5e1", lineHeight: 1.35, maxWidth: 980 }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#94a3b8" }}>
          <div>CRM · WhatsApp · Invoicing · AI agents</div>
          <div>nextosa.com</div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
