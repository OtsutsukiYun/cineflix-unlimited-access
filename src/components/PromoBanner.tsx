import { useEffect, useState } from "react";
import { Gift } from "lucide-react";
import {
  getBrasiliaDate,
  getPromoRemainingSeconds,
  formatDate,
  isPromoExpired,
} from "@/utils/promo";

export function PromoBanner() {
  const [seconds, setSeconds] = useState<number | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    if (isPromoExpired()) {
      setExpired(true);
      return;
    }

    setSeconds(getPromoRemainingSeconds());
    setDate(formatDate(getBrasiliaDate()));

    const tick = setInterval(() => {
      if (isPromoExpired()) {
        setExpired(true);
        clearInterval(tick);
      } else {
        setSeconds(getPromoRemainingSeconds());
        setDate(formatDate(getBrasiliaDate()));
      }
    }, 1000);

    return () => clearInterval(tick);
  }, []);

  // Se a oferta de resgate expirou para a pessoa, a barra promocional NÃO aparece mais
  if (expired || (seconds !== null && seconds <= 0)) {
    return null;
  }

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
      className="group relative flex w-full items-center justify-center gap-1.5 sm:gap-3 overflow-hidden px-2.5 py-1.5 sm:py-2.5 text-white transition-all duration-300 backdrop-blur-xl border-b border-red-500/30 bg-gradient-to-r from-[#0a0505] via-red-950/80 to-[#0a0505] shadow-md hover:border-red-500/60 hover:shadow-lg"
    >
      {/* Brilho reflexivo de vidro deslizante */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
      />

      <Gift className="size-3.5 shrink-0 text-red-500 animate-bounce drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />

      <span className="text-[9.5px] sm:text-[11px] font-bold tracking-tight sm:tracking-wide text-white/90 whitespace-nowrap">
        <span className="sm:hidden">Resgate seu teste de 3 dias grátis:</span>
        <span className="hidden sm:inline">
          Resgate seu teste de 3 dias grátis hoje
          {date ? (
            <>
              ,{" "}
              <span className="font-black text-white underline underline-offset-2 decoration-red-500">{date}</span>!
            </>
          ) : "!"}
        </span>
      </span>

      <span className="hidden sm:inline text-[9.5px] text-white/20">|</span>

      <span className="flex items-center gap-1.5 text-[9.5px] sm:text-[11px] font-extrabold whitespace-nowrap shrink-0">
        <span className="opacity-90 font-semibold text-red-300">Resgate expira em:</span>
        <span className="rounded-full bg-surface/80 border border-white/10 px-2 py-0.5 font-mono text-[9.5px] sm:text-[11px] text-white/90 shadow-sm">
          {hh}h {mm}m {ss}s
        </span>
      </span>
    </a>
  );
}
