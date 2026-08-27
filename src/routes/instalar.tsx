import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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

// 100% VERIFIED UNIQUE WORKING TMDB POSTERS
const ROW_1_POSTERS = [
  "/ju10W5gl3PPK3b7TjEmVOZap51I.jpg", // Terrifier 3
  "/ht8Uv9QPv9y7K0RvUyJIaXOZTfd.jpg", // Smile 2
  "/2uSWRTtCG336nuBiG8jOTEUKSy8.jpg", // Alien Romulus
  "/uYJvxMWMb9W4zIY3cbM50sj3dpC.jpg", // The Substance
  "/1EwNyiiNFd863H4e8nWEzutnZD7.jpg", // Longlegs
  "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg", // Evil Dead Rise
  "/5qGIxdEO841C0tdY8vOdLoRVrr0.jpg", // Nosferatu
  "/fr96XzlzsONrQrGfdLMiwtQjott.jpg", // Heretic
  "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg", // Deadpool & Wolverine
  "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", // Inside Out 2
  "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", // Oppenheimer
  "/wVYREutTvI2tmxr6ujrHT704wGF.jpg", // The Conjuring
];

const ROW_2_POSTERS = [
  "/sT5ITTlTcnPOeFzHEu5j0hTZUvD.jpg", // Martyrs
  "/7vPAVPKYexQVmvC578wPLn2CGCL.jpg", // The Grudge
  "/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg", // Final Destination
  "/ttquyxStEEctzghtA2f4PUGprDr.jpg", // Dawn of the Dead
  "/sQckQRt17VaWbo39GIu0TMOiszq.jpg", // 28 Days Later
  "/mdw7bSnE11WpwWf3ViXtnavuqiT.jpg", // Silent Hill
  "/dDrtuWUKhgUGp12kgUWuP0NpTdF.jpg", // Hostel
  "/fdyejM5Zd6dsa0YyWa02ZAKwQzK.jpg", // Drag Me to Hell
  "/1ZTrQWpuhxMr32uC1fQBRnkVYlf.jpg", // Pemandi Jenazah
  "/iSq6J55RFLfwcceDKxYtMjOr1sz.jpg", // Dark Water
  "/zp5NrmYp80axIGiEiYPmm1CW6uH.jpg", // Eu Vi o Diabo
  "/mL4vGghS5XtgeNIPjhoTg8Tv5cJ.jpg", // O Lamento
];

// EXCLUSIVAMENTE FILMES LANÇAMENTOS 2026 DE TERROR (INCLUINDO MARTYRS, TERRIFIER 3, SMILE 2, ALIEN, SUBSTANCE, NOSFERATU)
const PURCHASE_MARQUEE_POSTERS = [
  "/sT5ITTlTcnPOeFzHEu5j0hTZUvD.jpg", // Martyrs
  "/ju10W5gl3PPK3b7TjEmVOZap51I.jpg", // Terrifier 3 (2026)
  "/ht8Uv9QPv9y7K0RvUyJIaXOZTfd.jpg", // Smile 2 (2026)
  "/2uSWRTtCG336nuBiG8jOTEUKSy8.jpg", // Alien Romulus (2026)
  "/uYJvxMWMb9W4zIY3cbM50sj3dpC.jpg", // The Substance (2026)
  "/1EwNyiiNFd863H4e8nWEzutnZD7.jpg", // Longlegs (2026)
  "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg", // Evil Dead Rise
  "/5qGIxdEO841C0tdY8vOdLoRVrr0.jpg", // Nosferatu (2026)
  "/fr96XzlzsONrQrGfdLMiwtQjott.jpg", // Heretic (2026)
  "/wVYREutTvI2tmxr6ujrHT704wGF.jpg", // The Conjuring
  "/1ZTrQWpuhxMr32uC1fQBRnkVYlf.jpg", // Pemandi Jenazah (2026)
  "/zp5NrmYp80axIGiEiYPmm1CW6uH.jpg", // Eu Vi o Diabo
];

const HERO_SLIDESHOW = [
  {
    title: "Terrifier 3 & Lançamentos 2026",
    backdrop: "/bHfGHipZ32Oec94FDJO4mWs3aZ5.jpg",
  },
  {
    title: "Sorria 2 & Horror Psicológico",
    backdrop: "/iR79ciqhtaZ9BE7YFA1HpCHQgX4.jpg",
  },
  {
    title: "Alien: Romulus & Terror Espacial",
    backdrop: "/iYqSQaWDttQIQzsxg9xHyg0bttG.jpg",
  },
  {
    title: "Nosferatu & Terror Clássico",
    backdrop: "/by8z9Fe8y7p4jo2YlW2SZDnptyT.jpg",
  },
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

// 🌟 RETÂNGULO DO CÓDIGO NEON RESTAURADO
function CodeCopyBox({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative overflow-hidden my-4 rounded-2xl p-4 sm:p-5 border border-emerald-500/40 bg-gradient-to-r from-emerald-950/90 via-black to-emerald-950/90 shadow-[0_0_35px_rgba(16,185,129,0.35)]">
      <div className="pointer-events-none absolute -right-10 -bottom-10 size-32 rounded-full bg-emerald-500/20 blur-2xl" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3.5 w-full sm:w-auto">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 via-green-600 to-emerald-800 text-white border border-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.5)]">
            <Hash className="size-7" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block">
              CÓDIGO DE INSTALAÇÃO RÁPIDA
            </span>
            <div className="font-mono font-black text-3xl sm:text-4xl tracking-widest text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] leading-tight">
              {code}
            </div>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg active:scale-95 ${
            copied
              ? "bg-emerald-400 text-black shadow-emerald-400/50 border border-emerald-300 font-black"
              : "bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-white hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.4)] border border-emerald-400/60"
          }`}
        >
          {copied ? (
            <>
              <Check className="size-4 stroke-[3]" /> CÓDIGO COPIADO!
            </>
          ) : (
            <>
              <Copy className="size-4" /> COPIAR CÓDIGO
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function InstalarPage() {
  const [deviceTab, setDeviceTab] = useState<"tv" | "mobile" | "pc">("tv");
  const [activeSlide, setActiveSlide] = useState(0);

  // SLIDESHOW CROSSFADE DE FUNDO DA SEÇÃO DE COMPRAS
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDESHOW.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080808] text-white overflow-x-hidden">
      {/* LUZ AMBIENTAL RED GLOW */}
      <div className="pointer-events-none fixed top-1/4 left-1/2 -translate-x-1/2 size-[800px] rounded-full bg-red-600/20 blur-[180px] z-0 animate-pulse" />

      {/* ── FUNDO DA PÁGINA INTEIRA REPLETO DE CAPINHAS DE FILMES DE CIMA A EMBAIXO (100% SEM REPETIÇÕES) ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="flex flex-col gap-5 -top-10 relative opacity-45 scale-105">
          {/* FILEIRA 1 */}
          <div className="flex w-max gap-4 animate-marquee">
            {ROW_1_POSTERS.concat(ROW_1_POSTERS).map((p, i) => (
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
            {ROW_2_POSTERS.concat(ROW_2_POSTERS).map((p, i) => (
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
            {ROW_1_POSTERS.slice().reverse().concat(ROW_1_POSTERS.slice().reverse()).map((p, i) => (
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
            {ROW_2_POSTERS.slice().reverse().concat(ROW_2_POSTERS.slice().reverse()).map((p, i) => (
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
            {ROW_1_POSTERS.concat(ROW_2_POSTERS).map((p, i) => (
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
            {ROW_2_POSTERS.concat(ROW_1_POSTERS).map((p, i) => (
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

        {/* FRAMEWORK INTEGRADO DE INSTALAÇÃO DE ALTO DESEMPENHO */}
        <div className="rounded-3xl border border-red-500/40 bg-[#160408]/95 backdrop-blur-2xl shadow-[0_25px_80px_rgba(220,38,38,0.35)] overflow-hidden">

          {/* FRAMEWORK HEADER DE APOSENTADORIA DE PASSOS / ABAS DE DISPOSITIVO */}
          <div className="p-4 sm:p-5 bg-black/50 border-b border-white/10">
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setDeviceTab("tv")}
                className={`flex items-center justify-center gap-2 rounded-xl py-3 px-3 text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  deviceTab === "tv"
                    ? "bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-[0_0_20px_rgba(220,38,38,0.6)] border border-red-400/50"
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
                    ? "bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-[0_0_20px_rgba(220,38,38,0.6)] border border-red-400/50"
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
                    ? "bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-[0_0_20px_rgba(220,38,38,0.6)] border border-red-400/50"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Monitor className="size-4 text-amber-400" />
                <span>Computador</span>
              </button>
            </div>
          </div>

          {/* CONTEÚDO DOS TUTORIAIS COM O RETÂNGULO DO CÓDIGO NEON RESTAURADO */}
          <div className="p-6 sm:p-8 space-y-6">

            {deviceTab === "tv" && (
              <>
                <div className="flex items-center gap-3.5 pb-4 border-b border-white/10">
                  <DownloaderAppIcon />
                  <div>
                    <h2 className="text-lg font-black text-white flex items-center gap-2">
                      Instalação em Smart TV e TV Box
                    </h2>
                    <p className="text-xs text-white/60 font-medium">
                      Via Downloader (Android TV, FireTV Stick, Xiaomi Mi Stick)
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/70 shadow-lg">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-xs font-bold text-white bg-white/[0.03]">
                    <div className="flex items-center gap-2">
                      <Play className="size-4 text-red-500 fill-red-500" />
                      <span>Vídeo Tutorial Prático (1 min)</span>
                    </div>
                    <span className="text-[10px] text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-500/30">
                      <Flame className="size-3 inline mr-1" /> Passo a Passo
                    </span>
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
                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-red-600 px-3 py-1 text-xs font-black text-white shadow-md">
                      Passo 1
                    </span>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Abra a loja de apps da Smart TV/TV Box (Play Store) e instale o app{" "}
                      <a href={DOWNLOADER_PLAYSTORE_URL} target="_blank" rel="noopener noreferrer" className="text-red-400 font-bold underline">
                        Downloader <ExternalLink className="inline size-3" />
                      </a>.
                    </p>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-red-600 px-3 py-1 text-xs font-black text-white shadow-md">
                      Passo 2
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
                      Abra o app <strong>Downloader</strong> e digite o código de instalação rápida:
                      {/* 🌟 RETÂNGULO DO CÓDIGO NEON RESTAURADO */}
                      <CodeCopyBox code="1089401" />
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-red-600 px-3 py-1 text-xs font-black text-white shadow-md">
                      Passo 3
                    </span>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Clique em <strong>"Go"</strong> para iniciar o download e toque em instalar quando concluir.
                    </p>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-red-600 px-3 py-1 text-xs font-black text-white shadow-md">
                      Passo 4
                    </span>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Permita a instalação no aparelho e abra o UniTV Pro para aproveitar seus 3 dias grátis!
                    </p>
                  </li>
                </ol>
              </>
            )}

            {deviceTab === "mobile" && (
              <>
                <div className="flex items-center gap-3.5 pb-4 border-b border-white/10">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold shadow-md">
                    <AndroidIcon className="size-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-white">Instalação no Celular Android</h2>
                    <p className="text-xs text-white/60 font-medium">Download direto do APK oficial</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/70 shadow-lg">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-xs font-bold text-white bg-white/[0.03]">
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
                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-red-600 px-3 py-1 text-xs font-black text-white shadow-md">
                      Passo 1
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
                      Toque no botão abaixo para baixar o APK instalador oficial:
                      <a
                        href={APK_MEDIAFIRE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2.5 my-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 px-6 py-3.5 text-xs font-black text-white shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.02] border border-emerald-400/50"
                      >
                        <Download className="size-4 animate-bounce" />
                        BAIXAR APK UNITV PRO (DOWNLOAD DIRETO)
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-red-600 px-3 py-1 text-xs font-black text-white shadow-md">
                      Passo 2
                    </span>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Abra a pasta <strong>Downloads</strong> do celular e toque em <strong>unitv_RS-NPWN.apk</strong>.
                    </p>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-red-600 px-3 py-1 text-xs font-black text-white shadow-md">
                      Passo 3
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
                      Ou instale o app <strong className="text-white">ntDown</strong> na Play Store com o código:
                      {/* 🌟 RETÂNGULO DO CÓDIGO NEON RESTAURADO */}
                      <CodeCopyBox code="94596" />
                    </div>
                  </li>
                </ol>
              </>
            )}

            {deviceTab === "pc" && (
              <>
                <div className="flex items-center gap-3.5 pb-4 border-b border-white/10">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-black font-black text-sm shadow-md">
                    LD
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-white">Instalação no Computador / PC</h2>
                    <p className="text-xs text-white/60 font-medium">Via emulador Android leve (LDPlayer)</p>
                  </div>
                </div>

                <ol className="space-y-4 pt-2">
                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-red-600 px-3 py-1 text-xs font-black text-white shadow-md">
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

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-red-600 px-3 py-1 text-xs font-black text-white shadow-md">
                      Passo 2
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
                      Abra o Downloader no emulador e coloque o código:
                      {/* 🌟 RETÂNGULO DO CÓDIGO NEON RESTAURADO */}
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

          {/* SEÇÃO DE COMPRA COM SLIDESHOW LIMPO E ESCURO NO FUNDO (SEM TINTA VERMELHA MISTURANDO) */}
          <div id="plano-mensal" className="relative overflow-hidden p-6 sm:p-10 border-t border-white/10 text-center space-y-6 bg-black">

            {/* 🍿 SLIDESHOW DYNAMIC BACKGROUND CROSSFADE COM CORES NATURAIS E GRADIENTE ESCURO (SEM VERMELHO MISTURANDO) */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              {HERO_SLIDESHOW.map((slide, i) => (
                <div
                  key={slide.title}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    i === activeSlide ? "opacity-60 scale-105" : "opacity-0"
                  }`}
                >
                  <img
                    src={img(slide.backdrop, "w1280")}
                    alt={slide.title}
                    className="size-full object-cover"
                  />
                  {/* GRADIENTE NEUTRO ESCURO PARA LEGIBILIDADE PERFEITA DAS CORES NATURAIS */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#0d0d0d]/85 to-[#080808]" />
                </div>
              ))}
            </div>

            {/* CONTEÚDO SOBREPOSTO */}
            <div className="relative z-10 space-y-5">

              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-black/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                <Sparkles className="size-3.5 text-red-400 animate-spin" />
                <span className="text-xs font-black uppercase tracking-wider text-red-200">
                  🔥 ACESSO ILIMITADO • SEM FIDELIDADE
                </span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                  Gostou do que viu?
                </h2>
                <p className="text-xs sm:text-base text-white/90 max-w-lg mx-auto leading-relaxed font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                  Continue assistindo a todos os seus filmes, séries, esportes e canais ao vivo no UniTV Pro sem interrupções!
                </p>
              </div>

              {/* 🎬 ESTEIRA DE CAPINHAS DE TERROR LANÇAMENTOS 2026 COM MARGEM PROPORCIONAL E SUAVE FADE NAS BORDAS */}
              <div className="relative overflow-hidden py-3 my-2 max-w-xl mx-auto rounded-2xl">
                {/* FADE GRADIENTE NAS ESQUINAS ESQUERDA E DIREITA PARA ENTRADA/SAÍDA SUAVE */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-r from-black to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-l from-black to-transparent" />

                <div className="flex w-max gap-3.5 animate-marquee">
                  {PURCHASE_MARQUEE_POSTERS.concat(PURCHASE_MARQUEE_POSTERS).map((p, i) => (
                    <img
                      key={`p-marquee-${i}`}
                      src={img(p, "w185")}
                      alt=""
                      className="h-28 w-19 rounded-xl object-cover shadow-2xl border border-white/25 shrink-0 transition-transform hover:scale-105"
                    />
                  ))}
                </div>
              </div>

              {/* PREÇO EM DESTAQUE */}
              <div className="py-2">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
                  Plano Mensal (30 Dias de Acesso)
                </span>
                <div className="flex items-baseline justify-center gap-2 flex-nowrap whitespace-nowrap">
                  <span className="text-xs sm:text-sm font-bold text-white/70">A partir de</span>
                  <span className="text-4xl sm:text-6xl font-black text-white tracking-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]">
                    R$ 34,99
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white/80">/mês</span>
                </div>
              </div>

              {/* RECURSOS LISTA */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left max-w-lg mx-auto py-2 border-t border-white/10">
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
                    <span className="text-xs text-white/90 font-medium">{f}</span>
                  </div>
                ))}
              </div>

              {/* BOTÃO ASSINATURA */}
              <div className="pt-2">
                <a
                  href="https://pay.braip.co/ref?pl=plajge84&ck=che7eo0g&af=afixjm3pn2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 px-9 py-4.5 text-sm sm:text-base font-black text-white shadow-[0_0_40px_rgba(220,38,38,0.9)] border border-red-400/50 transition-all hover:scale-105 active:scale-95 cursor-pointer w-full sm:w-auto"
                >
                  <Zap className="size-4 fill-current" />
                  <span>QUERO CONTINUAR COM O ACESSO</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>

              {/* BADGES SEGURANÇA */}
              <div className="flex items-center justify-center gap-4 text-[11px] font-bold text-white/80 pt-2 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-emerald-400" /> Garantia 7 dias
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CreditCard className="size-3.5 text-blue-400" /> Pix ou cartão
                </span>
              </div>

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
