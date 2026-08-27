import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Download,
  Smartphone,
  Hash,
  ExternalLink,
  Tv,
  Monitor,
  Copy,
  Check,
  Play,
  Gift,
  CheckCircle2,
  ShieldCheck,
  Zap,
  CreditCard,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Flame,
} from "lucide-react";
import { img } from "@/data/catalog";
import { PromoBanner } from "@/components/PromoBanner";
import { WhatsAppIcon } from "@/components/icons";

export const Route = createFileRoute("/instalar")({
  head: () => ({
    meta: [
      { title: "🎁 Teste Grátis 3 Dias — Como Instalar UniTV Pro (Smart TV, Celular, TV Box, PC)" },
      {
        name: "description",
        content:
          "Passo a passo rápido para instalar o UniTV Pro e ativar seus 3 dias de teste grátis no seu aparelho Android, TV Box, FireTV, Celular ou Computador.",
      },
    ],
  }),
  component: InstalarPage,
});

const ROW_1_POSTERS = [
  "/v12w67F0fLoxw263v72d9m49M87.jpg", // Jogos Mortais (Saw 2004)
  "/iSq6J55RFLfwcceDKxYtMjOr1sz.jpg", // Dark Water 2002
  "/sT5ITTlTcnPOeFzHEu5j0hTZUvD.jpg", // Martyrs 2008
  "/zp5NrmYp80axIGiEiYPmm1CW6uH.jpg", // Eu Vi o Diabo 2010
  "/mL4vGghS5XtgeNIPjhoTg8Tv5cJ.jpg", // O Lamento 2016
  "/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg", // Obsessão 2026
  "/uRxrNXQWkHoENm3nwVOZDYSCx2F.jpg", // Evil Dead Burn 2026
  "/kNxRgcTeqeU5jauBackTERoO2De.jpg", // Other Mommy 2026
];

const ROW_2_POSTERS = [
  "/2PFgFMnrdCPXWiZl1PUvky7Mo9D.jpg", // Undertone 2026
  "/2sOEJzhPzjTkZSlPbGxOJ7xgIyS.jpg", // Passageiro do Mal 2026
  "/x6rHcQFiYcczLQPrmxXPAicm54E.jpg", // Hokum 2026
  "/qEl4BDBTGnhLiadZx0c9nHM8vBF.jpg", // Backrooms 2026
  "/rpU5DGrTVdqcygZBB9npt1WMFch.jpg", // Socorro! Send Help 2026
  "/pmff1wjKrgJi92PPr346lAifzlg.jpg", // Dia D 2026
  "/yH2sGLdQejqf3Zk8KDuoDa5gr6E.jpg", // The Eyes 2026
  "/1ZTrQWpuhxMr32uC1fQBRnkVYlf.jpg", // Pemandi Jenazah
];

const PURCHASE_MARQUEE_POSTERS = [
  "/v12w67F0fLoxw263v72d9m49M87.jpg", // Jogos Mortais (Saw)
  "/iSq6J55RFLfwcceDKxYtMjOr1sz.jpg", // Dark Water
  "/sT5ITTlTcnPOeFzHEu5j0hTZUvD.jpg", // Martyrs
  "/zp5NrmYp80axIGiEiYPmm1CW6uH.jpg", // Eu Vi o Diabo
  "/mL4vGghS5XtgeNIPjhoTg8Tv5cJ.jpg", // O Lamento
  "/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg", // Obsessão
  "/uRxrNXQWkHoENm3nwVOZDYSCx2F.jpg", // Evil Dead Burn
  "/kNxRgcTeqeU5jauBackTERoO2De.jpg", // Other Mommy
  "/2PFgFMnrdCPXWiZl1PUvky7Mo9D.jpg", // Undertone
  "/qEl4BDBTGnhLiadZx0c9nHM8vBF.jpg", // Backrooms
];

const DOWNLOADER_PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=com.esaba.downloader";
const NTDOWN_PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=link.ntdev.ntdw";
const LDPLAYER_WEBSITE_URL = "https://pt.ldplayer.net/";
const APK_MEDIAFIRE_URL = "https://www.mediafire.com/file/3g5ftk7ep3tq9ao/unitv_RS-NPWN.apk/file";

function DownloaderAppIcon({ className = "size-11" }: { className?: string }) {
  return (
    <div className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-md ${className}`}>
      <img
        src="/apps/downloader.png"
        alt="Downloader Icon"
        className="size-full object-cover"
      />
    </div>
  );
}

function AndroidIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 18c0 .55.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h4v3c0 .55.45 1 1 1s1-.45 1-1v-3h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
    </svg>
  );
}

function CodeCopyBox({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 my-2 py-2">
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-mono font-black text-2xl tracking-wider">
          <Hash className="size-5" />
        </div>
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block">
            CÓDIGO DE INSTALAÇÃO
          </span>
          <div className="font-mono font-black text-2xl sm:text-3xl tracking-widest text-white leading-tight">
            {code}
          </div>
        </div>
      </div>

      <button
        onClick={handleCopy}
        className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md active:scale-95 ${
          copied
            ? "bg-emerald-400 text-black font-extrabold"
            : "bg-emerald-600 hover:bg-emerald-500 text-white"
        }`}
      >
        {copied ? (
          <>
            <Check className="size-4 stroke-[3]" /> COPIADO!
          </>
        ) : (
          <>
            <Copy className="size-4" /> COPIAR CÓDIGO
          </>
        )}
      </button>
    </div>
  );
}

function InstalarPage() {
  const [deviceTab, setDeviceTab] = useState<"tv" | "mobile" | "pc">("tv");

  return (
    <div className="relative min-h-screen bg-[#080808] text-white overflow-x-hidden">
      {/* LUZ AMBIENTAL RED GLOW */}
      <div className="pointer-events-none fixed top-1/4 left-1/2 -translate-x-1/2 size-[800px] rounded-full bg-red-600/20 blur-[180px] z-0 animate-pulse" />

      {/* ── FUNDO DA PÁGINA INTEIRA REPLETO DE CAPINHAS DE FILMES DE CIMA A EMBAIXO ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="flex flex-col gap-5 -top-10 relative opacity-45 scale-105">
          {/* FILEIRA 1 */}
          <div className="flex w-max gap-4 animate-marquee">
            {ROW_1_POSTERS.concat(ROW_1_POSTERS).concat(ROW_1_POSTERS).map((p, i) => (
              <img
                key={`page-bg-r1-${i}`}
                src={img(p, "w342")}
                alt=""
                className="h-44 w-30 rounded-2xl object-cover shadow-2xl border border-white/20"
              />
            ))}
          </div>

          {/* FILEIRA 2 */}
          <div className="flex w-max gap-4 animate-marquee-reverse">
            {ROW_2_POSTERS.concat(ROW_2_POSTERS).concat(ROW_2_POSTERS).map((p, i) => (
              <img
                key={`page-bg-r2-${i}`}
                src={img(p, "w342")}
                alt=""
                className="h-44 w-30 rounded-2xl object-cover shadow-2xl border border-white/20"
              />
            ))}
          </div>

          {/* FILEIRA 3 */}
          <div className="flex w-max gap-4 animate-marquee">
            {ROW_1_POSTERS.slice().reverse().concat(ROW_1_POSTERS).concat(ROW_1_POSTERS).map((p, i) => (
              <img
                key={`page-bg-r3-${i}`}
                src={img(p, "w342")}
                alt=""
                className="h-44 w-30 rounded-2xl object-cover shadow-2xl border border-white/20"
              />
            ))}
          </div>

          {/* FILEIRA 4 */}
          <div className="flex w-max gap-4 animate-marquee-reverse">
            {ROW_2_POSTERS.slice().reverse().concat(ROW_2_POSTERS).concat(ROW_2_POSTERS).map((p, i) => (
              <img
                key={`page-bg-r4-${i}`}
                src={img(p, "w342")}
                alt=""
                className="h-44 w-30 rounded-2xl object-cover shadow-2xl border border-white/20"
              />
            ))}
          </div>

          {/* FILEIRA 5 */}
          <div className="flex w-max gap-4 animate-marquee">
            {ROW_1_POSTERS.concat(ROW_2_POSTERS).concat(ROW_1_POSTERS).map((p, i) => (
              <img
                key={`page-bg-r5-${i}`}
                src={img(p, "w342")}
                alt=""
                className="h-44 w-30 rounded-2xl object-cover shadow-2xl border border-white/20"
              />
            ))}
          </div>

          {/* FILEIRA 6 */}
          <div className="flex w-max gap-4 animate-marquee-reverse">
            {ROW_2_POSTERS.concat(ROW_1_POSTERS).concat(ROW_2_POSTERS).map((p, i) => (
              <img
                key={`page-bg-r6-${i}`}
                src={img(p, "w342")}
                alt=""
                className="h-44 w-30 rounded-2xl object-cover shadow-2xl border border-white/20"
              />
            ))}
          </div>
        </div>

        {/* GRADIENTE DE PROFUNDIDADE PARA MANTER TEXTOS 100% LEGÍVEIS */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/75 via-[#080808]/85 to-[#080808]" />
      </div>

      {/* BARRA PROMOCIONAL DO TOPO */}
      <div className="fixed inset-x-0 top-0 z-[60]">
        <PromoBanner />
      </div>

      {/* HEADER COMPACTO */}
      <header className="fixed inset-x-0 top-8 z-50 transition-all duration-300 [transform:translateZ(0)]">
        <div className="glass mx-auto mt-2 flex w-[94%] max-w-6xl items-center justify-between rounded-full px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.8)] border border-white/15 backdrop-blur-2xl bg-black/75">
          <Link to="/" className="flex items-center gap-3">
            <span className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 via-rose-700 to-red-900 shadow-[0_0_20px_rgba(220,38,38,0.7)]">
              <svg className="size-5 fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="font-display text-lg font-black tracking-wider text-white">
                UniTV <span className="text-red-500">Pro</span>
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-white/80">
            <Link to="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <Link to="/catalogo" className="hover:text-white transition-colors">
              Catálogo
            </Link>
            <Link to="/instalar" className="text-red-500 font-extrabold">
              Teste Grátis
            </Link>
            <Link to="/suporte" className="hover:text-white transition-colors">
              Suporte
            </Link>
          </nav>

          <a
            href="#plano-mensal"
            className="btn-cta px-4 py-1.5 text-[11px] font-extrabold tracking-wide uppercase shadow-md"
          >
            VER PLANO
          </a>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="relative z-10 mx-auto w-[94%] max-w-3xl pt-34 sm:pt-38 pb-20 space-y-6">

        {/* TOPO E TÍTULO PRINCIPAL */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-gradient-to-r from-red-950/90 via-black to-red-950/90 px-5 py-2 text-xs sm:text-sm font-black tracking-wider text-red-400 uppercase mb-3 backdrop-blur-md shadow-[0_0_30px_rgba(220,38,38,0.4)]">
            <Gift className="size-4 text-red-400 animate-pulse" />
            <span>🎁 TESTE O UNITV PRO GRÁTIS POR 3 DIAS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-2 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Como instalar o <span className="text-red-500">UniTV Pro</span>
          </h1>
          <p className="text-xs sm:text-base text-white/80 max-w-lg mx-auto leading-relaxed font-medium">
            Selecione seu aparelho abaixo e siga o passo a passo rápido para liberar seu acesso instantaneamente.
          </p>
        </div>

        {/* ESTRUTURA FLUIDA UNIFICADA (SEM CAIXAS ANINHADAS EXCESSIVAS) */}
        <div className="rounded-3xl border border-red-500/40 bg-[#160408]/95 backdrop-blur-2xl shadow-[0_25px_80px_rgba(220,38,38,0.3)] overflow-hidden">

          {/* SELETOR DE ABAS DE DISPOSITIVO */}
          <div className="p-4 sm:p-5 bg-black/40 border-b border-white/10">
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setDeviceTab("tv")}
                className={`flex items-center justify-center gap-2 rounded-xl py-3 px-3 text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  deviceTab === "tv"
                    ? "bg-red-600 text-white shadow-md"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Tv className="size-4 text-red-400" />
                <span>TV / TV Box</span>
              </button>

              <button
                onClick={() => setDeviceTab("mobile")}
                className={`flex items-center justify-center gap-2 rounded-xl py-3 px-3 text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  deviceTab === "mobile"
                    ? "bg-red-600 text-white shadow-md"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Smartphone className="size-4 text-emerald-400" />
                <span>Celular</span>
              </button>

              <button
                onClick={() => setDeviceTab("pc")}
                className={`flex items-center justify-center gap-2 rounded-xl py-3 px-3 text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  deviceTab === "pc"
                    ? "bg-red-600 text-white shadow-md"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Monitor className="size-4 text-amber-400" />
                <span>Computador</span>
              </button>
            </div>
          </div>

          {/* TUTORIAL PASSOS */}
          <div className="p-6 sm:p-8 space-y-5">

            {deviceTab === "tv" && (
              <>
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <DownloaderAppIcon />
                  <div>
                    <h2 className="text-lg font-black text-white">Instalação em Smart TV e TV Box</h2>
                    <p className="text-xs text-white/60">Via Downloader (Android TV, FireTV Stick, Xiaomi Mi Stick)</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs font-bold text-white">
                    <div className="flex items-center gap-2">
                      <Play className="size-4 text-red-500 fill-red-500" />
                      <span>Vídeo Tutorial (1 min)</span>
                    </div>
                  </div>
                  <div className="relative aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/0QH2y4005EQ"
                      title="Vídeo Tutorial"
                      className="size-full border-0"
                      allowFullScreen
                    />
                  </div>
                </div>

                <ol className="space-y-4 pt-2">
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 rounded-lg bg-red-600 px-2.5 py-0.5 text-xs font-black text-white">
                      Passo 1
                    </span>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Abra a loja de apps da Smart TV/TV Box (Play Store) e instale o app{" "}
                      <a href={DOWNLOADER_PLAYSTORE_URL} target="_blank" rel="noopener noreferrer" className="text-red-400 font-bold underline">
                        Downloader <ExternalLink className="inline size-3" />
                      </a>.
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="shrink-0 rounded-lg bg-red-600 px-2.5 py-0.5 text-xs font-black text-white">
                      Passo 2
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
                      No <strong>Downloader</strong>, digite o código de instalação:
                      <CodeCopyBox code="1089401" />
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="shrink-0 rounded-lg bg-red-600 px-2.5 py-0.5 text-xs font-black text-white">
                      Passo 3
                    </span>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Clique em <strong>"Go"</strong> para baixar e toque em instalar quando concluir.
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="shrink-0 rounded-lg bg-red-600 px-2.5 py-0.5 text-xs font-black text-white">
                      Passo 4
                    </span>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Permita a instalação e abra o UniTV Pro para aproveitar seus 3 dias grátis!
                    </p>
                  </li>
                </ol>
              </>
            )}

            {deviceTab === "mobile" && (
              <>
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold">
                    <AndroidIcon className="size-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-white">Instalação no Celular Android</h2>
                    <p className="text-xs text-white/60">Download direto do APK oficial</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs font-bold text-white">
                    <div className="flex items-center gap-2">
                      <Play className="size-4 text-red-500 fill-red-500" />
                      <span>Vídeo Tutorial Celular</span>
                    </div>
                  </div>
                  <div className="relative aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/Ge1WVaiOQxQ"
                      title="Vídeo Tutorial Celular"
                      className="size-full border-0"
                      allowFullScreen
                    />
                  </div>
                </div>

                <ol className="space-y-4 pt-2">
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 rounded-lg bg-red-600 px-2.5 py-0.5 text-xs font-black text-white">
                      Passo 1
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
                      Toque abaixo para baixar o instalador oficial:
                      <a
                        href={APK_MEDIAFIRE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 my-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-3 text-xs font-black text-white shadow-md transition-all"
                      >
                        <Download className="size-4 animate-bounce" />
                        BAIXAR APK UNITV PRO
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="shrink-0 rounded-lg bg-red-600 px-2.5 py-0.5 text-xs font-black text-white">
                      Passo 2
                    </span>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Abra a pasta <strong>Downloads</strong> do seu celular e toque no arquivo <strong>unitv_RS-NPWN.apk</strong>.
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="shrink-0 rounded-lg bg-red-600 px-2.5 py-0.5 text-xs font-black text-white">
                      Passo 3
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
                      Ou instale o app <strong className="text-white">ntDown</strong> na Play Store com o código:
                      <CodeCopyBox code="94596" />
                    </div>
                  </li>
                </ol>
              </>
            )}

            {deviceTab === "pc" && (
              <>
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-black font-black text-sm">
                    LD
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-white">Instalação no Computador / PC</h2>
                    <p className="text-xs text-white/60">Via emulador Android leve (LDPlayer)</p>
                  </div>
                </div>

                <ol className="space-y-4 pt-2">
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 rounded-lg bg-red-600 px-2.5 py-0.5 text-xs font-black text-white">
                      Passo 1
                    </span>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Baixe o emulador{" "}
                      <a href={LDPLAYER_WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="text-red-400 font-bold underline">
                        LDPlayer <ExternalLink className="inline size-3" />
                      </a>{" "}
                      no seu computador e faça a instalação.
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="shrink-0 rounded-lg bg-red-600 px-2.5 py-0.5 text-xs font-black text-white">
                      Passo 2
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
                      Abra o Downloader no emulador e coloque o código:
                      <CodeCopyBox code="1089401" />
                    </div>
                  </li>
                </ol>
              </>
            )}

          </div>

          {/* CONFIRMAÇÃO DE TESTE LIBERADO RIBBON */}
          <div className="bg-emerald-950/60 p-4 border-t border-emerald-500/30 text-center flex items-center justify-center gap-2">
            <CheckCircle2 className="size-5 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm font-black text-white">
              Pronto! Seu teste grátis de 3 dias está liberado 🎉
            </span>
          </div>

          {/* SEÇÃO DE COMPRA: GOSTOU DO QUE VIU? (FLUIDA, SEM VÁRIAS CAIXAS DENTRO DE CAIXAS) */}
          <div id="plano-mensal" className="p-6 sm:p-10 border-t border-white/10 bg-gradient-to-b from-transparent via-[#23040b]/80 to-[#120104] text-center space-y-5">
            
            <span className="inline-flex items-center gap-1.5 text-xs font-black text-red-400 uppercase tracking-wider">
              <Sparkles className="size-3.5 text-red-400 animate-pulse" />
              ACESSO ILIMITADO • SEM FIDELIDADE
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Gostou do que viu?
            </h2>
            <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto leading-relaxed">
              Continue assistindo a todos os seus filmes, séries, esportes e canais ao vivo no UniTV Pro sem interrupções!
            </p>

            {/* MARQUEE CONTINUO DE FILMES PASSANDO DENTRO DA ÁREA DE VENDA */}
            <div className="overflow-hidden py-2 my-2 -mx-6 sm:-mx-10">
              <div className="flex w-max gap-3 animate-marquee">
                {PURCHASE_MARQUEE_POSTERS.concat(PURCHASE_MARQUEE_POSTERS).map((p, i) => (
                  <img
                    key={`p-marquee-${i}`}
                    src={img(p, "w185")}
                    alt=""
                    className="h-24 w-16 rounded-xl object-cover shadow-lg border border-white/20 shrink-0"
                  />
                ))}
              </div>
            </div>

            {/* PREÇO LIMPO E DESTACADO SEM MULTIPLAS BORDAS DENTRO DE BORDAS */}
            <div className="py-2">
              <span className="text-xs font-bold text-red-300 uppercase tracking-wider block mb-1">
                Plano Mensal (30 Dias de Acesso)
              </span>
              <div className="flex items-baseline justify-center gap-2 flex-nowrap whitespace-nowrap">
                <span className="text-xs sm:text-sm font-bold text-white/70">A partir de</span>
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
                  R$ 34,99
                </span>
                <span className="text-xs sm:text-sm font-bold text-white/80">/mês</span>
              </div>
            </div>

            {/* RECURSOS LISTA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left max-w-lg mx-auto py-2 border-t border-white/10">
              {[
                "1 Tela simultânea",
                "O maior catálogo de filmes e séries",
                "Lançamentos semanais inéditos",
                "Animes, Doramas & Novelas Turcas",
                "Canais Ao Vivo & Esportes 4K",
                "Suporte 7 dias por WhatsApp",
                "Garantia de reembolso de 7 dias",
                "Sem fidelidade (Cancele quando quiser)",
              ].map((f, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span className="text-xs text-white/90">{f}</span>
                </div>
              ))}
            </div>

            {/* BOTÃO ASSINATURA */}
            <div className="pt-2">
              <a
                href="https://pay.braip.co/ref?pl=plajge84&ck=che7eo0g&af=afixjm3pn2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 px-8 py-4 text-sm font-black text-white shadow-[0_0_35px_rgba(220,38,38,0.8)] border border-red-400/50 transition-all hover:scale-105 active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <Zap className="size-4 fill-current" />
                <span>QUERO CONTINUAR COM O ACESSO</span>
                <ArrowRight className="size-4" />
              </a>
            </div>

            {/* BADGES SEGURANÇA */}
            <div className="flex items-center justify-center gap-4 text-[11px] font-bold text-white/70 pt-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="size-3.5 text-emerald-400" /> Garantia 7 dias
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CreditCard className="size-3.5 text-blue-400" /> Pix ou cartão
              </span>
            </div>

          </div>

          {/* SUPORTE RODAPÉ */}
          <div className="p-4 bg-black/40 border-t border-white/10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <HelpCircle className="size-5 text-emerald-400 shrink-0" />
              <p className="text-xs text-white/80 font-medium">Dúvidas na instalação? Fale com nosso suporte via WhatsApp.</p>
            </div>
            <a
              href="https://wa.me/5561984016006?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20para%20instalar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-black text-white hover:bg-emerald-500 transition-colors shrink-0"
            >
              <WhatsAppIcon className="size-4 fill-current" />
              SUPORTE WHATSAPP
            </a>
          </div>

        </div>

      </main>
    </div>
  );
}
