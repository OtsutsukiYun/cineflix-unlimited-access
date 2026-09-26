import { useState } from "react";
import {
  X,
  Tv,
  Smartphone,
  Sparkles,
  Play,
  Download,
  ExternalLink,
  Hash,
  Copy,
  Check,
  Zap,
  Crown,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import {
  DOWNLOADER_OFFICIAL_CODE,
  NTDOWN_OFFICIAL_CODE,
  getVerifiedDownloaderCode,
  getVerifiedNtDownCode,
} from "@/config/security";

const DOWNLOADER_PLAYSTORE_URL =
  "https://play.google.com/store/apps/details?id=com.esaba.downloader";
const APK_MEDIAFIRE_URL =
  "https://www.mediafire.com/file/3g5ftk7ep3tq9ao/unitv_RS-NPWN.apk/file";

const PLAN_LINKS = {
  mensal: "https://pay.braip.co/ref?pl=plajge84&ck=che7eo0g&af=afixjm3pn2",
  trimestral: "https://pay.braip.co/ref?pl=pla1qqq6&ck=che7eo0g&af=afixjm3pn2",
  anual: "https://pay.braip.co/ref?pl=pla6lllo&ck=che7eo0g&af=afixjm3pn2",
};

function CodeCopyBox({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const verifiedCode =
    code === NTDOWN_OFFICIAL_CODE
      ? getVerifiedNtDownCode(code)
      : getVerifiedDownloaderCode(code);

  const handleCopy = () => {
    navigator.clipboard.writeText(verifiedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative overflow-hidden my-2.5 rounded-2xl p-3 sm:p-3.5 border border-emerald-500/30 bg-emerald-950/30 backdrop-blur-xl shadow-md max-w-sm mx-auto text-center">
      <div className="pointer-events-none absolute -right-10 -bottom-10 size-28 rounded-full bg-emerald-500/15 blur-2xl" />
      <div className="flex flex-col items-center justify-center gap-1.5 relative z-10 w-full text-center">
        <div className="flex items-center justify-center gap-1.5">
          <div className="flex size-5 items-center justify-center rounded-md bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 font-mono font-bold text-[11px] backdrop-blur-md">
            <Hash className="size-3" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
            Código de Instalação 🔒
          </span>
        </div>

        <div className="font-mono font-black text-2xl sm:text-3xl tracking-widest text-white drop-shadow-md leading-none my-0.5">
          {verifiedCode}
        </div>

        <button
          onClick={handleCopy}
          type="button"
          className={`w-full sm:w-auto min-w-[150px] inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2 text-xs font-black tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-md backdrop-blur-md active:scale-95 ${
            copied
              ? "bg-white text-black border border-white font-extrabold"
              : "bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-400/30 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
          }`}
        >
          {copied ? (
            <>
              <Check className="size-3.5 stroke-[3]" /> COPIADO!
            </>
          ) : (
            <>
              <Copy className="size-3.5" /> COPIAR CÓDIGO
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export function TrialModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeView, setActiveView] = useState<"install" | "plans">("install");
  const [deviceTab, setDeviceTab] = useState<"tv" | "mobile">("tv");
  const [planTab, setPlanTab] = useState<"mensal" | "trimestral" | "anual">("mensal");

  if (!isOpen) return null;

  const handleCheckout = (tab: "mensal" | "trimestral" | "anual") => {
    window.open(PLAN_LINKS[tab], "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed inset-0 z-[250] flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative z-10 w-full max-w-lg rounded-3xl border border-white/20 bg-[#0c0c0c] shadow-[0_0_60px_rgba(220,38,38,0.4)] p-4 sm:p-6 text-center my-auto max-h-[92vh] flex flex-col overflow-y-auto">
        {/* BOTÃO FECHAR */}
        <button
          onClick={() => {
            setActiveView("install");
            onClose();
          }}
          type="button"
          aria-label="Fechar"
          className="absolute top-3.5 right-3.5 flex size-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-all cursor-pointer z-20"
        >
          <X className="size-4" />
        </button>

        {/* ALTERNADOR DE VISÃO (INSTALAÇÃO vs PLANOS) */}
        <div className="flex items-center justify-center p-1 rounded-2xl bg-white/[0.04] border border-white/15 mb-3.5 shrink-0 max-w-xs mx-auto gap-1">
          <button
            type="button"
            onClick={() => setActiveView("install")}
            className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeView === "install"
                ? "bg-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.6)] border border-white/20"
                : "text-white/60 hover:text-white hover:bg-white/10"
            }`}
          >
            🎁 Instalação
          </button>
          <button
            type="button"
            onClick={() => setActiveView("plans")}
            className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeView === "plans"
                ? "bg-amber-500 text-black shadow-[0_0_12px_rgba(245,158,11,0.7)] border border-amber-300 font-extrabold"
                : "text-amber-400 hover:text-amber-300 hover:bg-white/10"
            }`}
          >
            ⚡ Planos &amp; Preços
          </button>
        </div>

        {/* VISÃO DE INSTALAÇÃO */}
        {activeView === "install" ? (
          <>
            <div className="text-center space-y-1.5 mb-3.5 shrink-0 pr-6 pl-2">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/60 px-3 py-0.5 text-[10.5px] font-black tracking-wider text-emerald-400 uppercase shadow-md">
                <Sparkles className="size-3 text-emerald-400" />
                <span>Seu teste está quase pronto 🎉</span>
              </div>

              <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
                Como instalar o <span className="text-red-500">UniTV Pro</span> em menos de 2 minutos
              </h2>
            </div>

            {/* ABAS DE DISPOSITIVOS */}
            <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/15 mb-3.5 shrink-0">
              <button
                type="button"
                onClick={() => setDeviceTab("tv")}
                className={`flex items-center justify-center gap-2 rounded-xl py-2 px-2.5 text-xs font-black transition-all cursor-pointer ${
                  deviceTab === "tv"
                    ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.6)] border border-white/30"
                    : "text-white/70 hover:text-white hover:bg-white/10 border border-transparent"
                }`}
              >
                <Tv className="size-3.5 shrink-0" />
                <span className="text-[11px] sm:text-xs">Smart TV, TV Box, Stick &amp; Projetor</span>
              </button>

              <button
                type="button"
                onClick={() => setDeviceTab("mobile")}
                className={`flex items-center justify-center gap-2 rounded-xl py-2 px-2.5 text-xs font-black transition-all cursor-pointer ${
                  deviceTab === "mobile"
                    ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.6)] border border-white/30"
                    : "text-white/70 hover:text-white hover:bg-white/10 border border-transparent"
                }`}
              >
                <Smartphone className="size-3.5 text-emerald-400 shrink-0" />
                <span className="text-[11px] sm:text-xs">Celular &amp; Tablet</span>
              </button>
            </div>

            {/* CONTEÚDO DA ABA */}
            <div className="space-y-3 text-left overflow-y-auto pr-1">
              {deviceTab === "tv" && (
                <>
                  <div className="overflow-hidden rounded-2xl border border-white/20 bg-zinc-900 shadow-md">
                    <div className="flex items-center justify-between border-b border-white/15 px-3 py-1.5 text-xs font-bold text-white bg-white/[0.04]">
                      <div className="flex items-center gap-2">
                        <Play className="size-3.5 text-red-500 fill-red-500" />
                        <span className="text-emerald-400 font-black text-[11px] sm:text-xs">
                          🎥 Assista ao vídeo de 2 minutos para instalar
                        </span>
                      </div>
                    </div>
                    <div className="relative aspect-video w-full bg-black">
                      <iframe
                        src="https://www.youtube.com/embed/u2X4iUABhq4?rel=0&enablejsapi=1"
                        title="Vídeo Tutorial de Instalação na Smart TV Android e TV Box"
                        className="size-full border-0 relative z-20 pointer-events-auto"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  <div className="text-center space-y-1.5 pt-1">
                    <p className="text-xs sm:text-sm font-bold text-white/90">
                      Abra o aplicativo{" "}
                      <a
                        href={DOWNLOADER_PLAYSTORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 underline font-black inline-flex items-center gap-0.5 cursor-pointer"
                      >
                        Downloader <ExternalLink className="size-3" />
                      </a>{" "}
                      na sua TV e digite o código:
                    </p>
                    <CodeCopyBox code="9884830" />
                  </div>
                </>
              )}

              {deviceTab === "mobile" && (
                <>
                  <div className="overflow-hidden rounded-2xl border border-white/20 bg-zinc-900 shadow-md">
                    <div className="flex items-center justify-between border-b border-white/15 px-3 py-1.5 text-xs font-bold text-white bg-white/[0.04]">
                      <div className="flex items-center gap-2">
                        <Play className="size-3.5 text-red-500 fill-red-500" />
                        <span className="text-emerald-400 font-black text-[11px] sm:text-xs">
                          🎥 Assista ao vídeo de 1 minuto para instalar
                        </span>
                      </div>
                    </div>
                    <div className="relative aspect-video w-full bg-black">
                      <iframe
                        src="https://www.youtube.com/embed/0dSJ_Q4DDus?rel=0&enablejsapi=1"
                        title="Vídeo Tutorial Celular e Tablet"
                        className="size-full border-0 relative z-20 pointer-events-auto"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  <div className="pt-1">
                    <a
                      href={APK_MEDIAFIRE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-3 text-xs font-black text-white transition-colors shadow-md border border-emerald-400/30 cursor-pointer uppercase tracking-wider text-center shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                    >
                      <Download className="size-4 animate-bounce" />
                      <span>Baixar APK UniTV Pro (Download Direto)</span>
                    </a>
                  </div>
                </>
              )}
            </div>

            {/* BOTÃO PARA MOSTRAR PLANOS NESSE MESMO MODAL */}
            <div className="pt-3 border-t border-white/10 mt-3 shrink-0">
              <button
                type="button"
                onClick={() => setActiveView("plans")}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 px-4 py-3 text-xs sm:text-sm font-black text-white uppercase tracking-wider shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Zap className="size-4 fill-white text-white" />
                <span>QUERO ACESSO ILIMITADO AOS CONTEÚDOS</span>
              </button>
            </div>
          </>
        ) : (
          /* VISÃO DE PLANOS & PREÇOS NO MESMO MODAL */
          <div className="space-y-3.5 text-center overflow-y-auto pr-1 animate-in fade-in duration-200">
            <div className="space-y-1 shrink-0">
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 border border-amber-400/40 px-3 py-0.5 text-[10.5px] font-black text-amber-300 uppercase tracking-wider">
                👑 Acesso VIP Sem Fidelidade
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                Escolha o seu plano <span className="text-red-500">UniTV Pro</span>
              </h3>
            </div>

            {/* ABAS DE PLANO (MENSAL / TRIMESTRAL / ANUAL VIP) */}
            <div className="flex items-center justify-center p-1 rounded-2xl bg-white/[0.06] border border-white/20 gap-1 shadow-inner">
              <button
                type="button"
                onClick={() => setPlanTab("mensal")}
                className={`flex-1 py-2 px-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  planTab === "mensal"
                    ? "bg-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.7)] border border-white/30"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Mensal
              </button>
              <button
                type="button"
                onClick={() => setPlanTab("trimestral")}
                className={`flex-1 py-2 px-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  planTab === "trimestral"
                    ? "bg-emerald-600 text-white shadow-[0_0_12px_rgba(16,185,129,0.7)] border border-white/30"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Trimestral
              </button>
              <button
                type="button"
                onClick={() => setPlanTab("anual")}
                className={`flex-1 py-2 px-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  planTab === "anual"
                    ? "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.8)] border border-amber-200 font-extrabold"
                    : "text-amber-300 hover:text-amber-200"
                }`}
              >
                Anual VIP 👑
              </button>
            </div>

            {/* EXIBIÇÃO DE VALORES E DETALHES */}
            <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-4 text-center space-y-3">
              <div>
                <span className="text-[10px] font-black text-red-400 uppercase tracking-widest block mb-0.5">
                  {planTab === "mensal" && "⚡ 30 DIAS DE ACESSO TOTAL"}
                  {planTab === "trimestral" && "⚡ 90 DIAS DE ACESSO TOTAL"}
                  {planTab === "anual" && "👑 365 DIAS DE ACESSO (2 TELAS SIMULTÂNEAS)"}
                </span>

                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-xs text-white/50 font-bold">Apenas</span>
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-md">
                    {planTab === "mensal" && "R$ 34,99"}
                    {planTab === "trimestral" && "R$ 99,99"}
                    {planTab === "anual" && "R$ 179,99"}
                  </span>
                  <span className="text-xs text-white/70 font-bold">
                    {planTab === "mensal" && "/mês"}
                    {planTab === "trimestral" && "/3 meses"}
                    {planTab === "anual" && "/ano"}
                  </span>
                </div>
              </div>

              {/* LISTA DE BENEFÍCIOS DO PLANO */}
              <div className="space-y-1.5 text-left text-xs text-white/85 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>
                    Telas:{" "}
                    <strong className="text-white">
                      {planTab === "anual" ? "2 Telas Simultâneas" : "1 Tela Simultânea"}
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>O maior catálogo de Filmes, Séries, Animes e Doramas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Canais ao vivo &amp; Esportes em Full HD e 4K</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Liberação imediata no WhatsApp + Suporte 7 dias por semana</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Garantia incondicional de reembolso por 7 dias</span>
                </div>
              </div>

              {/* BOTÃO ASSINAR SELECIONADO */}
              <button
                type="button"
                onClick={() => handleCheckout(planTab)}
                className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider transition-all hover:scale-[1.02] cursor-pointer shadow-lg mt-2 ${
                  planTab === "anual"
                    ? "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-black shadow-[0_0_25px_rgba(245,158,11,0.9)] border border-yellow-200"
                    : planTab === "trimestral"
                      ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.7)] border border-emerald-400/50"
                      : "bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.7)] border border-red-400/40"
                }`}
              >
                <Zap className="size-4 fill-current" />
                <span>
                  {planTab === "mensal" && "ASSINAR PLANO MENSAL (R$ 34,99)"}
                  {planTab === "trimestral" && "ASSINAR PLANO TRIMESTRAL (R$ 99,99)"}
                  {planTab === "anual" && "ASSINAR PLANO ANUAL VIP (R$ 179,99)"}
                </span>
                <ExternalLink className="size-3.5 ml-1" />
              </button>
            </div>

            {/* BOTÃO VOLTAR PARA TUTORIAL DE INSTALAÇÃO */}
            <button
              type="button"
              onClick={() => setActiveView("install")}
              className="inline-flex items-center justify-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors cursor-pointer py-1"
            >
              <ArrowLeft className="size-3.5" />
              <span>Voltar para Tutorial de Instalação</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
