import { useEffect, useState } from "react";
import { Gift } from "lucide-react";

function restante() {
  const agora = new Date();
  const fim = new Date(agora);
  fim.setHours(23, 59, 59, 999);
  const diff = Math.max(0, fim.getTime() - agora.getTime());
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);
  return { h, m, s };
}

const pad = (n: number) => String(n).padStart(2, "0");

function Bloco({ valor, label }: { valor: number; label: string }) {
  return (
    <span className="flex flex-col items-center">
      <span className="font-display min-w-[2.1rem] rounded-md bg-background/35 px-1.5 py-0.5 text-sm leading-none font-extrabold tabular-nums">
        {pad(valor)}
      </span>
      <span className="mt-0.5 text-[8px] tracking-[0.18em] uppercase opacity-80">
        {label}
      </span>
    </span>
  );
}

export function PromoBar() {
  const [t, setT] = useState(() => restante());

  useEffect(() => {
    const id = setInterval(() => setT(restante()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-hot text-primary-foreground">
      <div className="mx-auto flex w-[94%] max-w-6xl items-center justify-center gap-3 py-2 text-center sm:gap-4">
        <Gift className="size-4 shrink-0 sm:size-5" />
        <p className="min-w-0 text-[11px] leading-tight font-semibold sm:text-sm">
          <span className="hidden sm:inline">
            Promoção por tempo limitado —{" "}
          </span>
          <span className="sm:hidden">Promoção </span>
          termina em
        </p>
        <span className="flex shrink-0 items-start gap-1.5">
          <Bloco valor={t.h} label="hrs" />
          <Bloco valor={t.m} label="min" />
          <Bloco valor={t.s} label="seg" />
        </span>
      </div>
    </div>
  );
}
