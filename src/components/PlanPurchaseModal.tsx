import { useState, useEffect } from "react";
import { X, ShieldCheck, CheckCircle2, ArrowRight, Lock, Zap, Crown } from "lucide-react";
import { img } from "@/data/catalog";

export type PlanDetails = {
  nome: string;
  preco: string;
  periodo?: string;
  dias?: string;
  telas?: string;
  link: string;
};

const POSTERS_MARQUEE = [
  "/7GV5rrUJf0BRUhoh2cyFoeNthlQ.jpg",
  "/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg",
  "/360qdtu2hLnqMu8SVHMywn420w1.jpg",
  "/cWAVzTWm9xdc8skHH7h1vreUtcD.jpg",
  "/gVZgjKIsXZOT3cNZm5PJZBtQRaG.jpg",
  "/1C2qbfUW3lTzb8vpZeG8pjYzW3Q.jpg",
  "/zm0KAbOjlt9eR5y7vDiL2dEOwMl.jpg",
  "/rpU5DGrTVdqcygZBB9npt1WMFch.jpg",
  "/pmff1wjKrgJi92PPr346lAifzlg.jpg",
  "/yihdXomYb5kTeSivtFndMy5iDmf.jpg",
  "/uRxrNXQWkHoENm3nwVOZDYSCx2F.jpg",
  "/e0WaDBrrBAMcq2stAXCR7rXEsiw.jpg",
];

const DEFAULT_PLANS: Record<"mensal" | "trimestral" | "anual", PlanDetails> = {
  mensal: {
    nome: "Plano Mensal",
    preco: "R$ 34,99",
    periodo: "mês",
    dias: "30 dias",
    telas: "1 tela simultânea",
    link: "https://pay.braip.co/ref?pl=plajge84&ck=che7eo0g&af=afixjm3pn2",
  },
  trimestral: {
    nome: "Plano Trimestral",
    preco: "R$ 99,99",
    periodo: "3 meses",
    dias: "90 dias",
    telas: "1 tela simultânea",
    link: "https://pay.braip.co/ref?pl=pla1qqq6&ck=che7eo0g&af=afixjm3pn2",
  },
  anual: {
    nome: "Plano Anual VIP",
    preco: "R$ 179,99",
    periodo: "ano",
    dias: "365 dias",
    telas: "2 telas simultâneas",
    link: "https://pay.braip.co/ref?pl=pla6lllo&ck=che7eo0g&af=afixjm3pn2",
  },
};

interface PlanPurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: PlanDetails | null;
}

export function PlanPurchaseModal({ isOpen, onClose, plan }: PlanPurchaseModalProps) {
  const [selectedTab, setSelectedTab] = useState<"mensal" | "trimestral" | "anual">("mensal");

  useEffect(() => {
    if (plan) {
      const name = plan.nome.toLowerCase();
      if (name.includes("anual")) setSelectedTab("anual");
      else if (name.includes("trimestral")) setSelectedTab("trimestral");
      else setSelectedTab("mensal");
    }
  }, [plan]);

  if (!isOpen) return null;

  const activePlan = DEFAULT_PLANS[selectedTab];

  const handleProceed = () => {
    if (activePlan.link) {
      window.open(activePlan.link, "_blank", "noopener,noreferrer");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      {/* OVERLAY CLICK TO CLOSE */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* MODAL CARD */}
      <div className="glass relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-white/25 bg-[#0a0707]/80 backdrop-blur-2xl p-5 sm:p-7 shadow-[0_0_80px_rgba(220,38,38,0.5)] text-white animate-scale-up max-h-[92vh] flex flex-col overflow-y-auto">
        {/* BUTTON CLOSE */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all cursor-pointer border border-white/15 z-20"
          aria-label="Fechar"
        >
          <X className="size-4.5" />
        </button>

        {/* HEADER TITLE */}
        <div className="text-center space-y-2 shrink-0 pr-6 pl-2 pt-1">
          <span className="inline-flex items-center gap-1 rounded-full bg-red-500/20 border border-red-500/40 px-3 py-0.5 text-[10.5px] font-black text-red-300 uppercase tracking-wider">
            {selectedTab === "mensal" && "Plano Mensal • Acesso Ilimitado"}
            {selectedTab === "trimestral" && "Plano Trimestral • Economize nos 90 Dias"}
            {selectedTab === "anual" && "👑 Plano Anual VIP • 2 Telas Simultâneas"}
          </span>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Faça parte da família <span className="text-red-500">UniTV Pro</span> hoje mesmo.
          </h2>
          <p className="text-xs text-white/70 max-w-sm mx-auto leading-relaxed font-medium">
            Planos pré-pagos e sem fidelidade com 7 dias de garantia de reembolso.
          </p>
        </div>

        {/* ALTERNADOR DE PLANOS (MENSAL / TRIMESTRAL / ANUAL VIP) */}
        <div className="flex items-center justify-center p-1 rounded-2xl bg-white/[0.06] border border-white/15 my-3 gap-1 shadow-inner shrink-0">
          <button
            type="button"
            onClick={() => setSelectedTab("mensal")}
            className={`flex-1 py-2 px-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              selectedTab === "mensal"
                ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.7)] border border-white/30"
                : "text-white/70 hover:text-white hover:bg-white/10 border border-transparent"
            }`}
          >
            Mensal
          </button>
          <button
            type="button"
            onClick={() => setSelectedTab("trimestral")}
            className={`flex-1 py-2 px-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              selectedTab === "trimestral"
                ? "bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.7)] border border-white/30"
                : "text-white/70 hover:text-white hover:bg-white/10 border border-transparent"
            }`}
          >
            Trimestral
          </button>
          <button
            type="button"
            onClick={() => setSelectedTab("anual")}
            className={`flex-1 py-2 px-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              selectedTab === "anual"
                ? "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.8)] border border-amber-200 font-extrabold"
                : "text-amber-300 hover:text-amber-200 hover:bg-white/10 border border-amber-500/30"
            }`}
          >
            Anual VIP 👑
          </button>
        </div>

        {/* ESTEIRA HORIZONTAL ANIMADA DE CAPINHAS DE FILMES E SÉRIES ("OS FILMES PASSANDO") */}
        <div className="relative overflow-hidden py-1.5 my-1 rounded-2xl shrink-0 bg-black/40 border border-white/10">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-zinc-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-zinc-950 to-transparent" />

          <div className="flex w-max gap-2.5 animate-marquee-slow">
            {POSTERS_MARQUEE.concat(POSTERS_MARQUEE).map((p, i) => (
              <img
                key={`poster-modal-${i}`}
                src={img(p, "w185")}
                alt=""
                className="h-24 w-16 rounded-lg object-cover shadow-md border border-red-500/30 shrink-0"
              />
            ))}
          </div>
        </div>

        {/* PREÇO DINÂMICO CONFORME PLANO SELECIONADO */}
        <div className="py-2 text-center shrink-0">
          <span className="text-[10.5px] font-black text-red-400 uppercase tracking-widest block mb-0.5">
            {selectedTab === "mensal" && "⚡ 30 DIAS DE ACESSO TOTAL"}
            {selectedTab === "trimestral" && "⚡ 90 DIAS DE ACESSO TOTAL"}
            {selectedTab === "anual" && "👑 365 DIAS DE ACESSO (2 TELAS SIMULTÂNEAS)"}
          </span>
          <div className="flex items-baseline justify-center gap-1.5 whitespace-nowrap">
            <span className="text-xs font-bold text-white/60">Apenas</span>
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]">
              {activePlan.preco}
            </span>
            <span className="text-xs font-bold text-white/80">
              /{activePlan.periodo}
            </span>
          </div>
        </div>

        {/* BENEFÍCIOS DO PLANO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left max-w-md mx-auto py-2.5 border-t border-white/15 shrink-0">
          {[
            selectedTab === "anual" ? "2 Telas simultâneas" : "1 Tela simultânea",
            "Milhares de Filmes & Séries",
            "Lançamentos semanais exclusivos",
            "Canais Ao Vivo & Esportes em 4K e Full HD",
            "Animes, Doramas & Novelas Turcas",
            "Suporte 7 dias por semana no WhatsApp",
            "Garantia incondicional de 7 dias",
            "Sem fidelidade (Cancele quando quiser)",
          ].map((f, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-[11px] sm:text-xs text-white/90 font-medium leading-tight">{f}</span>
            </div>
          ))}
        </div>

        {/* BOTÃO ASSINATURA DINÂMICO */}
        <div className="pt-2 shrink-0">
          <button
            type="button"
            onClick={handleProceed}
            className={`flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-xs sm:text-sm font-black transition-all hover:scale-[1.02] cursor-pointer backdrop-blur-md uppercase tracking-wider ${
              selectedTab === "anual"
                ? "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-black shadow-[0_0_30px_rgba(245,158,11,0.9)] border border-yellow-200"
                : selectedTab === "trimestral"
                  ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.7)] border border-emerald-400/50"
                  : "bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white shadow-[0_0_25px_rgba(220,38,38,0.7)] border border-red-400/40"
            }`}
          >
            <Zap className="size-4 fill-current" />
            <span>
              {selectedTab === "mensal" && "ASSINAR PLANO MENSAL (R$ 34,99)"}
              {selectedTab === "trimestral" && "ASSINAR PLANO TRIMESTRAL (R$ 99,99)"}
              {selectedTab === "anual" && "ASSINAR PLANO ANUAL VIP (R$ 179,99)"}
            </span>
            <ArrowRight className="size-4 ml-1" />
          </button>
        </div>

        {/* FOOTER SEGURANÇA */}
        <div className="mt-3 text-center text-[10.5px] text-white/40 flex items-center justify-center gap-1.5 shrink-0">
          <Lock className="size-3 text-emerald-400 shrink-0" />
          <span>Pagamento 100% Seguro · Recebimento Imediato via WhatsApp</span>
        </div>
      </div>
    </div>
  );
}
