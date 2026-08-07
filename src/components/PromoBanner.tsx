import { useEffect, useState } from "react";
import { Gift } from "lucide-react";

function getBrasiliaDate() {
  return new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
  );
}

function getSecondsUntilMidnight() {
  const now = getBrasiliaDate();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  return Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000));
}

function formatDate(date: Date) {
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  });
}

export function PromoBanner() {
  // Inicializa com null para evitar hydration mismatch (SSR vs cliente)
  const [seconds, setSeconds] = useState<number | null>(null);
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    // Só roda no cliente, após hydration
    setSeconds(getSecondsUntilMidnight());
    setDate(formatDate(getBrasiliaDate()));

    const tick = setInterval(() => {
      const s = getSecondsUntilMidnight();
      setSeconds(s);
      setDate(formatDate(getBrasiliaDate()));
    }, 1000);

    return () => clearInterval(tick);
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const el = document.querySelector("#planos");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const hh = seconds !== null ? String(Math.floor(seconds / 3600)).padStart(2, "0") : "--";
  const mm = seconds !== null ? String(Math.floor((seconds % 3600) / 60)).padStart(2, "0") : "--";
  const ss = seconds !== null ? String(seconds % 60).padStart(2, "0") : "--";

  return (
    <a
      href="#planos"
      onClick={handleClick}
      aria-label="Ver planos disponíveis"
      className="group relative flex w-full items-center justify-center gap-1.5 sm:gap-3 overflow-hidden px-2.5 py-1.5 sm:py-2.5 text-white transition-all duration-300 backdrop-blur-xl border-b border-purple-500/40 bg-gradient-to-r from-purple-950/90 via-primary/80 to-fuchsia-950/90 shadow-[0_4px_25px_rgba(168,85,247,0.4)] hover:border-purple-400/70 hover:shadow-[0_4px_35px_rgba(168,85,247,0.6)]"
    >
      {/* Brilho reflexivo de vidro deslizante */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
      />

      <Gift className="size-3 sm:size-3.5 shrink-0 text-accent animate-bounce drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />

      <span className="text-[10px] sm:text-xs font-bold tracking-tight sm:tracking-wide text-purple-100 whitespace-nowrap">
        <span className="sm:hidden">🔥 Oferta somente hoje:</span>
        <span className="hidden sm:inline">
          🔥 Oferta especial válida somente hoje
          {date ? (
            <>
              ,{" "}
              <span className="font-black text-white underline underline-offset-2 decoration-accent">{date}</span>!
            </>
          ) : "!"}
        </span>
      </span>

      <span className="hidden sm:inline text-[10px] text-purple-300/40">|</span>

      <span className="flex items-center gap-1 text-[10px] sm:text-xs font-extrabold whitespace-nowrap shrink-0">
        <span className="opacity-80 font-medium hidden sm:inline text-purple-200">Termina em</span>
        <span className="rounded-full bg-purple-950/90 border border-purple-400/60 px-2 py-0.5 font-mono text-[10px] sm:text-xs text-purple-100 shadow-[0_0_12px_rgba(168,85,247,0.5)]">
          {hh}h {mm}m {ss}s
        </span>
      </span>
    </a>
  );
}
