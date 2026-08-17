export const PROMO_KEY = "unitv_promo_deadline_24h";
export const PROMO_DURATION_MS = 24 * 3600 * 1000; // 24 horas exatamente (86.400.000 ms)

export function getBrasiliaDate(): Date {
  return new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
  );
}

export function getPromoDeadline(): number {
  if (typeof window === "undefined") return Date.now() + PROMO_DURATION_MS;

  let stored = localStorage.getItem(PROMO_KEY);
  let deadline = stored ? parseInt(stored, 10) : 0;

  const now = Date.now();
  if (!deadline) {
    // Registra a ativação do teste no primeiro acesso do usuário no site
    deadline = now + PROMO_DURATION_MS;
    localStorage.setItem(PROMO_KEY, String(deadline));
  }

  return deadline;
}

export function isPromoExpired(): boolean {
  if (typeof window === "undefined") return false;
  const deadline = getPromoDeadline();
  return Date.now() >= deadline;
}

export function getPromoRemainingSeconds(): number {
  if (typeof window === "undefined") return Math.floor(PROMO_DURATION_MS / 1000);
  const deadline = getPromoDeadline();
  const diff = Math.floor((deadline - Date.now()) / 1000);
  return Math.max(0, diff);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  });
}
