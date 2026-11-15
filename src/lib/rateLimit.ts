// A small in-memory sliding-window limiter for the contact form.
//
// Honest limits: on serverless hosting each warm instance keeps its own memory, so this is a best-effort brake
// (it stops a script hammering one instance and caps the damage per instance), not a global guarantee. The
// global guarantee is a Vercel Firewall rate-limit rule on POST /contact (see README "Security").

const buckets = new Map<string, number[]>();
const MAX_KEYS = 5000;

export function hit(key: string, limit: number, windowMs: number, now = Date.now()): boolean {
  const recent = (buckets.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    buckets.set(key, recent);
    return false;
  }
  recent.push(now);
  buckets.set(key, recent);
  if (buckets.size > MAX_KEYS) {
    // Drop the oldest keys so the map cannot grow without bound under a flood of distinct addresses.
    for (const k of buckets.keys()) {
      buckets.delete(k);
      if (buckets.size <= MAX_KEYS / 2) break;
    }
  }
  return true;
}

// The visitor's address as seen by the platform. Vercel sets x-forwarded-for / x-real-ip itself.
export function clientKey(h: Headers): string {
  const forwarded = h.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || h.get("x-real-ip")?.trim() || "unknown";
}
