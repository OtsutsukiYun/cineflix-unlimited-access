import { X, ShieldCheck, Check, ArrowRight, Lock } from "lucide-react";

export type PlanDetails = {
  nome: string;
  preco: string;
  periodo?: string;
  dias?: string;
  telas?: string;
  link: string;
};

interface PlanPurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: PlanDetails | null;
}

export function PlanPurchaseModal({ isOpen, onClose, plan }: PlanPurchaseModalProps) {
  if (!isOpen || !plan) return null;

  const handleProceed = () => {
    if (plan.link) {
      window.open(plan.link, "_blank", "noopener,noreferrer");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      {/* OVERLAY CLICK TO CLOSE */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* MODAL CARD */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-emerald-500/40 bg-zinc-950/90 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(16,185,129,0.3)] text-white animate-scale-up">
        {/* BUTTON CLOSE */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all cursor-pointer border border-white/15"
          aria-label="Fechar"
        >
          <X className="size-5" />
        </button>

        {/* HEADER BADGE & ICON */}
        <div className="text-center space-y-3">
          <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 shadow-inner animate-pulse">
            <ShieldCheck className="size-8" />
          </div>

          <div className="space-y-1">
            <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-emerald-300 border border-emerald-500/30">
              🔒 Ambiente Criptografado &amp; Seguro
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight pt-1">
              Você está a um passo do seu Acesso VIP!
            </h3>
          </div>
        </div>

        {/* PLAN DETAILS CARD */}
        <div className="my-5 rounded-2xl border border-white/15 bg-white/[0.04] p-4.5 space-y-3 backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <p className="text-[11px] font-extrabold text-white/60 uppercase tracking-wider">Plano Selecionado</p>
              <h4 className="text-lg font-black text-white">{plan.nome}</h4>
            </div>
            <div className="text-right">
              <span className="text-xl font-black text-emerald-400">{plan.preco}</span>
              {plan.periodo && <span className="text-xs text-white/50 block">/{plan.periodo}</span>}
            </div>
          </div>

          <div className="space-y-2 pt-1 text-xs text-white/85">
            {plan.dias && (
              <div className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400 shrink-0" />
                <span>Duração: <strong className="text-white">{plan.dias}</strong> de acesso total</span>
              </div>
            )}
            {plan.telas && (
              <div className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400 shrink-0" />
                <span>Telas: <strong className="text-white">{plan.telas}</strong> simultâneas</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Check className="size-4 text-emerald-400 shrink-0" />
              <span>Garantia: <strong className="text-white">7 dias de reembolso total</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4 text-emerald-400 shrink-0" />
              <span>Envio: <strong className="text-white">Imediato via E-mail</strong></span>
            </div>
          </div>
        </div>

        {/* GREEN PROCEED BUTTON */}
        <button
          type="button"
          onClick={handleProceed}
          className="w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 hover:to-teal-400 px-6 py-4 text-sm sm:text-base font-black text-black uppercase tracking-wider transition-all hover:scale-[1.02] shadow-[0_0_35px_rgba(16,185,129,0.7)] border border-emerald-300 cursor-pointer"
        >
          <span>PROSSEGUIR COM A COMPRA</span>
          <ArrowRight className="size-5 text-black" />
        </button>

        {/* SECURITY FOOTER */}
        <div className="mt-4 text-center text-[11px] text-white/40 flex items-center justify-center gap-2 flex-wrap">
          <Lock className="size-3.5 text-emerald-400 shrink-0" />
          <span>Pagamento 100% Seguro via Braip Pay</span>
        </div>
      </div>
    </div>
  );
}
