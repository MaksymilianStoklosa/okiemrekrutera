// Prosty, w pamięci procesu rate-limiter dla API route formularza kontaktowego.
// Uwaga: w środowisku serverless (np. Vercel) stan nie jest współdzielony
// między instancjami/regionami, więc to ochrona najlepszego wysiłku (best-effort),
// a nie twarda gwarancja. Dla pełnej ochrony rozważ Redis/Upstash w przyszłości.

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

const requestLog = new Map<string, number[]>();

export function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const timestamps = requestLog.get(identifier) ?? [];
  const recent = timestamps.filter((ts) => now - ts < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    requestLog.set(identifier, recent);
    return true;
  }

  recent.push(now);
  requestLog.set(identifier, recent);
  return false;
}
