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
  const [deviceTab, setDeviceTab] = useState<"tv" | "mobile">("tv");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[250] flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative z-10 w-full max-w-lg rounded-3xl border border-white/20 bg-[#0c0c0c] shadow-[0_0_60px_rgba(220,38,38,0.4)] p-4 sm:p-6 text-center my-auto max-h-[92vh] flex flex-col overflow-y-auto">
        {/* BOTÃO FECHAR */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Fechar"
          className="absolute top-3.5 right-3.5 flex size-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-all cursor-pointer z-20"
        >
          <X className="size-4" />
        </button>

        {/* TOPO: SEU TESTE ESTÁ QUASE PRONTO */}
        <div className="text-center space-y-2 mb-4 shrink-0 pr-6 pl-2 pt-1">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/60 px-3 py-1 text-[11px] font-black tracking-wider text-emerald-400 uppercase shadow-md">
            <Sparkles className="size-3 text-emerald-400" />
            <span>Seu teste está quase pronto 🎉</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Como instalar o <span className="text-red-500">UniTV Pro</span>
          </h2>
        </div>

        {/* NOME DOS DISPOSITIVOS (ABAS) */}
        <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/15 mb-4 shrink-0">
          <button
            type="button"
            onClick={() => setDeviceTab("tv")}
            className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs sm:text-sm font-black transition-all cursor-pointer ${
              deviceTab === "tv"
                ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.6)] border border-white/30"
                : "text-white/70 hover:text-white hover:bg-white/10 border border-transparent"
            }`}
          >
            <Tv className="size-4 shrink-0" />
            <span>Smart TV &amp; TV Box</span>
          </button>

          <button
            type="button"
            onClick={() => setDeviceTab("mobile")}
            className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs sm:text-sm font-black transition-all cursor-pointer ${
              deviceTab === "mobile"
                ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.6)] border border-white/30"
                : "text-white/70 hover:text-white hover:bg-white/10 border border-transparent"
            }`}
          >
            <Smartphone className="size-4 text-emerald-400 shrink-0" />
            <span>Celular &amp; Tablet</span>
          </button>
        </div>

        {/* CONTEÚDO DA ABA */}
        <div className="space-y-4 text-left overflow-y-auto pr-1">
          {deviceTab === "tv" && (
            <>
              {/* VÍDEO LOGO NO COMEÇO */}
              <div className="overflow-hidden rounded-2xl border border-white/20 bg-zinc-900 shadow-md">
                <div className="flex items-center justify-between border-b border-white/15 px-3.5 py-2 text-xs font-bold text-white bg-white/[0.04]">
                  <div className="flex items-center gap-2">
                    <Play className="size-3.5 text-red-500 fill-red-500" />
                    <span className="text-emerald-400 font-black">
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

              {/* CÓDIGO COM BOTÃO DE COPIAR */}
              <div className="text-center space-y-1">
                <p className="text-xs sm:text-sm font-bold text-white/90">
                  Abra o app Downloader na sua TV e digite o código:
                </p>
                <CodeCopyBox code="9884830" />
              </div>

              {/* BOTÕES DE LINK */}
              <div className="pt-1">
                <a
                  href={DOWNLOADER_PLAYSTORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-3 text-xs font-black text-white transition-colors shadow-md border border-emerald-400/30 cursor-pointer uppercase tracking-wider text-center"
                >
                  <Download className="size-4" />
                  <span>Baixar Downloader na Play Store</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </>
          )}

          {deviceTab === "mobile" && (
            <>
              {/* VÍDEO LOGO NO COMEÇO */}
              <div className="overflow-hidden rounded-2xl border border-white/20 bg-zinc-900 shadow-md">
                <div className="flex items-center justify-between border-b border-white/15 px-3.5 py-2 text-xs font-bold text-white bg-white/[0.04]">
                  <div className="flex items-center gap-2">
                    <Play className="size-3.5 text-red-500 fill-red-500" />
                    <span className="text-emerald-400 font-black">
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

              {/* BOTÃO DE DOWNLOAD DIRETO */}
              <div className="pt-1">
                <a
                  href={APK_MEDIAFIRE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-3.5 text-xs font-black text-white transition-colors shadow-md border border-emerald-400/30 cursor-pointer uppercase tracking-wider text-center shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                >
                  <Download className="size-4 animate-bounce" />
                  <span>Baixar APK UniTV Pro (Download Direto)</span>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
