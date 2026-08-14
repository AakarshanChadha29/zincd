/**
 * Best-effort in-process rate limiting for the lead endpoint.
 *
 * IMPORTANT — known limitation: this counter lives in the memory of a single
 * serverless instance. Vercel may run several instances concurrently and may
 * recycle them at any time, so the effective limit is "per instance", not
 * "per deployment". It meaningfully dampens naive scripted abuse (bursts tend
 * to land on one warm instance) but it is NOT a hard guarantee.
 *
 * The durable fix is edge-level and needs no code: add a rate-limit rule to
 * Vercel's Firewall (Project → Firewall → Rate Limiting) targeting
 * `/api/leads` and `/api/distributor-leads`. A shared store such as Upstash Redis would also work, but adds
 * a dependency and a hosted service. See docs/project-status.md.
 */

type Bucket = { count: number; resetAt: number };

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_PER_WINDOW = 5; // per IP, per window
const MAX_TRACKED_IPS = 5000; // bound memory against a spoofed-IP flood

const buckets = new Map<string, Bucket>();

/** Drop expired buckets so the map cannot grow without bound. */
function sweep(now: number) {
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

/**
 * Resolve the client IP. On Vercel, `x-forwarded-for` is set by the platform
 * and its first entry is the real client. Locally it is usually absent, so we
 * fall back to a shared key — which is correct behaviour for `next dev`.
 */
export function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export type RateLimitResult = {
  limited: boolean;
  /** Seconds until the caller may retry. Only meaningful when `limited`. */
  retryAfter: number;
  remaining: number;
};

export function checkRateLimit(key: string, now = Date.now()): RateLimitResult {
  if (buckets.size > MAX_TRACKED_IPS) sweep(now);

  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { limited: false, retryAfter: 0, remaining: MAX_PER_WINDOW - 1 };
  }

  bucket.count += 1;

  if (bucket.count > MAX_PER_WINDOW) {
    return {
      limited: true,
      retryAfter: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
      remaining: 0,
    };
  }

  return {
    limited: false,
    retryAfter: 0,
    remaining: MAX_PER_WINDOW - bucket.count,
  };
}

/** Test-only escape hatch; not referenced by application code. */
export function __resetRateLimit() {
  buckets.clear();
}
