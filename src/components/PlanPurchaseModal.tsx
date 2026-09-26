import { useState, useEffect } from "react";
import { X, ShieldCheck, Check, ArrowRight, Lock, UserCheck } from "lucide-react";
import { WhatsAppIcon, AndroidIcon } from "@/components/icons";

export type PlanDetails = {
  nome: string;
  preco: string;
  periodo?: string;
  dias?: string;
  telas?: string;
  link: string;
};

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
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      {/* OVERLAY CLICK TO CLOSE */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* MODAL CARD */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-emerald-500/40 bg-zinc-950 p-5 sm:p-7 shadow-[0_0_60px_rgba(16,185,129,0.3)] text-white animate-scale-up max-h-[92vh] flex flex-col overflow-y-auto">
        {/* BUTTON CLOSE */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all cursor-pointer border border-white/15 z-20"
          aria-label="Fechar"
        >
          <X className="size-4.5" />
        </button>

        {/* HEADER BADGE & ICON */}
        <div className="text-center space-y-2.5">
          <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 shadow-inner animate-pulse">
            <ShieldCheck className="size-7" />
          </div>

          <div className="space-y-1">
            <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-0.5 text-[10.5px] font-black uppercase tracking-wider text-emerald-300 border border-emerald-500/30">
              🔒 Ambiente Criptografado &amp; Seguro
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight pt-0.5">
              Escolha seu plano <span className="text-emerald-400">UniTV Pro</span>
            </h3>
          </div>
        </div>

        {/* ALTERNADOR DE PLANOS (MENSAL / TRIMESTRAL / ANUAL VIP) */}
        <div className="flex items-center justify-center p-1 rounded-2xl bg-white/[0.06] border border-white/15 my-3.5 gap-1 shadow-inner shrink-0">
          <button
            type="button"
            onClick={() => setSelectedTab("mensal")}
            className={`flex-1 py-2 px-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              selectedTab === "mensal"
                ? "bg-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.7)] border border-white/30"
                : "text-white/70 hover:text-white"
            }`}
          >
            Mensal
          </button>
          <button
            type="button"
            onClick={() => setSelectedTab("trimestral")}
            className={`flex-1 py-2 px-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              selectedTab === "trimestral"
                ? "bg-emerald-600 text-white shadow-[0_0_12px_rgba(16,185,129,0.7)] border border-white/30"
                : "text-white/70 hover:text-white"
            }`}
          >
            Trimestral
          </button>
          <button
            type="button"
            onClick={() => setSelectedTab("anual")}
            className={`flex-1 py-2 px-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              selectedTab === "anual"
                ? "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.8)] border border-amber-200 font-extrabold"
                : "text-amber-300 hover:text-amber-200"
            }`}
          >
            Anual VIP 👑
          </button>
        </div>

        {/* PLAN DETAILS CARD */}
        <div className="my-1 rounded-2xl border border-white/15 bg-white/[0.04] p-4 space-y-3 shrink-0">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <p className="text-[10.5px] font-extrabold text-white/60 uppercase tracking-wider">Plano Selecionado</p>
              <h4 className="text-base sm:text-lg font-black text-white">{activePlan.nome}</h4>
            </div>
            <div className="text-right">
              <span className="text-xl sm:text-2xl font-black text-emerald-400">{activePlan.preco}</span>
              {activePlan.periodo && <span className="text-[11px] text-white/50 block">/{activePlan.periodo}</span>}
            </div>
          </div>

          <div className="space-y-2 pt-0.5 text-xs text-white/85">
            {activePlan.dias && (
              <div className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400 shrink-0" />
                <span>Duração: <strong className="text-white">{activePlan.dias}</strong> de acesso total</span>
              </div>
            )}
            {activePlan.telas && (
              <div className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400 shrink-0" />
                <span>Telas: <strong className="text-white">{activePlan.telas}</strong></span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Check className="size-4 text-emerald-400 shrink-0" />
              <span>Garantia: <strong className="text-white">7 dias de reembolso total</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <AndroidIcon className="size-4 fill-emerald-400 text-emerald-400 shrink-0" />
              <span>Compatibilidade: <strong className="text-white">Smart TV Android, TV Box, Stick, Celular e Tablet</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <UserCheck className="size-4 text-emerald-400 shrink-0" />
              <span>Tipo de Acesso: <strong className="text-white">Usuário e Senha</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <WhatsAppIcon className="size-4 fill-emerald-400 text-emerald-400 shrink-0" />
              <span>Forma de Recebimento: <strong className="text-white">Imediato via WhatsApp</strong></span>
            </div>
          </div>
        </div>

        {/* GREEN PROCEED BUTTON */}
        <button
          type="button"
          onClick={handleProceed}
          className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 hover:to-teal-400 px-5 py-3.5 text-xs sm:text-sm font-black text-black uppercase tracking-wider transition-all hover:scale-[1.02] shadow-[0_0_35px_rgba(16,185,129,0.7)] border border-emerald-300 cursor-pointer shrink-0"
        >
          <span>PROSSEGUIR PARA O PAGAMENTO SEGURO</span>
          <ArrowRight className="size-4.5 text-black" />
        </button>

        {/* SECURITY FOOTER */}
        <div className="mt-3 text-center text-[10.5px] text-white/40 flex items-center justify-center gap-1.5 flex-wrap shrink-0">
          <Lock className="size-3.5 text-emerald-400 shrink-0" />
          <span>Pagamento 100% Seguro via Braip Pay</span>
        </div>
      </div>
    </div>
  );
}
