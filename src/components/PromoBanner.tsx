import { useEffect, useState } from "react";
import { Gift } from "lucide-react";
import { getBrasiliaDate, formatDate } from "@/utils/promo";

export function PromoBanner() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    setDate(formatDate(getBrasiliaDate()));
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const el = document.querySelector("#planos");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <a
      href="#planos"
      onClick={handleClick}
      aria-label="Ver planos disponíveis"
      className="group relative flex w-full items-center justify-center gap-2 overflow-hidden px-3 py-1.5 sm:py-2 text-white transition-all duration-300 backdrop-blur-xl border-b border-red-500/30 bg-gradient-to-r from-[#0a0505] via-red-950/80 to-[#0a0505] shadow-md hover:border-red-500/60 hover:shadow-lg"
    >
      {/* Brilho reflexivo de vidro deslizante */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
      />

      <Gift className="size-3.5 shrink-0 text-red-500 animate-bounce drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />

      <span className="text-[10.5px] sm:text-xs font-extrabold tracking-wide text-white/90 whitespace-nowrap">
        Resgate seu teste de 3 dias grátis hoje
        {date ? (
          <>
            ,{" "}
            <span className="font-black text-white underline underline-offset-2 decoration-red-500">{date}</span>!
          </>
        ) : "!"}
      </span>
    </a>
  );
}
