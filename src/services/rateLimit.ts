/**
 * Implementación sencilla de rate limit en memoria.
 */
export type RateLimitOptions = {
  limit?: number;
  windowMs?: number;
};

// Store request counts per IP
const requests = new Map<string, { count: number; timer: NodeJS.Timeout }>();

/**
 * Checks if the IP is within the allowed request limit.
 * Returns true if the request should be allowed, false otherwise.
 */
export function rateLimit(ip: string, options: RateLimitOptions = {}): boolean {
  const limit = options.limit ?? 5;
  const windowMs = options.windowMs ?? 60_000; // 1 minute

  const entry = requests.get(ip);
  if (!entry) {
    const timer = setTimeout(() => {
      requests.delete(ip);
    }, windowMs);
    requests.set(ip, { count: 1, timer });
    return true;
  }

  entry.count += 1;
  if (entry.count > limit) {
    return false;
  }
  return true;
}
