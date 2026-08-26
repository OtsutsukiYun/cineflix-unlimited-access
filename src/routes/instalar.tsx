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
  Clapperboard,
  Tv2,
  Trophy,
  Film,
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

const DOWNLOADER_PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=com.esaba.downloader";
const NTDOWN_PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=link.ntdev.ntdw";
const LDPLAYER_WEBSITE_URL = "https://pt.ldplayer.net/";
const APK_MEDIAFIRE_URL = "https://www.mediafire.com/file/3g5ftk7ep3tq9ao/unitv_RS-NPWN.apk/file";

const CATEGORY_CARDS = [
  {
    icon: Film,
    title: "Filmes & Lançamentos 2026",
    tag: "+50.000 Filmes",
    desc: "Sucessos do cinema, estreias inéditas e produções exclusivas em 4K e Full HD.",
    banners: [
      "/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg", // Evil Dead Rise
      "/r013C8Me2bZ0pUi0OWJRh0h7MzT.jpg", // Obsessão
      "/wjwMC7u3xWKkrronolBqsIy4L0L.jpg", // Backrooms
    ],
    gradient: "from-red-600 to-rose-700",
    border: "border-red-500/40",
  },
  {
    icon: Clapperboard,
    title: "Séries, Doramas & Animes",
    tag: "+15.000 Séries",
    desc: "Episódios atualizados diariamente com animes lendários, doramas coreanos e novelas turcas.",
    banners: [
      "/nTvM4z1Z56Sp5HAWYflab6EsNoL.jpg", // Demon Slayer
      "/3A57V29u9143W2Z0l1JpG9F.jpg",      // Jujutsu Kaisen
      "/9faGSFi5jam6pUdFi2Q4Sp5VRhC.jpg", // Last of Us
    ],
    gradient: "from-purple-600 to-indigo-700",
    border: "border-purple-500/40",
  },
  {
    icon: Trophy,
    title: "Esportes Ao Vivo em 4K",
    tag: "Futebol & Lutas 24h",
    desc: "Brasileirão, Champions League, Premier League, UFC, F1 e NBA sem travamentos.",
    banners: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Erling_Haaland_France_v_Norway_26_June_26-008.jpg/1280px-Erling_Haaland_France_v_Norway_26_June_26-008.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Kylian_Mbappe_France_v_Senegal_16_June_2026-391_%28cropped%29.jpg",
    ],
    gradient: "from-emerald-600 to-teal-700",
    border: "border-emerald-500/40",
  },
  {
    icon: Tv2,
    title: "Canais Ao Vivo 24h",
    tag: "+500 Canais HD/4K",
    desc: "Telecine, HBO, Premiere, SporTV, BBB 24h, Infantil, Notícias e Variedades.",
    banners: [
      "/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg", // Inside Out 2
      "/9l1E2v92uqx09u4345u310b809.jpg",  // Moana 2
    ],
    gradient: "from-amber-500 to-orange-600",
    border: "border-amber-500/40",
  },
];

function CategorySlideshowCard({ card }: { card: (typeof CATEGORY_CARDS)[0] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!card.banners || card.banners.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % card.banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [card.banners]);

  const IconComp = card.icon;

  return (
    <div className={`relative min-h-[170px] sm:min-h-[190px] overflow-hidden rounded-2xl border ${card.border} bg-black/80 p-5 shadow-xl transition-all duration-300 hover:scale-[1.02]`}>
      {/* BACKGROUND SLIDESHOW IMAGES */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {card.banners.map((b, i) => (
          <img
            key={b}
            src={img(b, "w780")}
            alt=""
            className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-35 scale-105" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30" />
      </div>

      {/* CARD CONTENT */}
      <div className="relative z-10 flex flex-col justify-between h-full space-y-3">
        <div className="flex items-center justify-between">
          <div className={`flex size-10 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} text-white shadow-md border border-white/20`}>
            <IconComp className="size-5" />
          </div>
          <span className="rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] font-black text-white border border-white/20">
            {card.tag}
          </span>
        </div>

        <div>
          <h4 className="text-base font-black text-white tracking-tight">{card.title}</h4>
          <p className="text-xs text-white/80 leading-relaxed font-medium mt-0.5">{card.desc}</p>
        </div>
      </div>
    </div>
  );
}

function DownloaderAppIcon({ className = "size-12" }: { className?: string }) {
  return (
    <div className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-orange-500/40 bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 shadow-[0_0_20px_rgba(245,158,11,0.4)] ${className}`}>
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
    <div className="relative overflow-hidden my-3 rounded-2xl p-4 sm:p-5 border border-emerald-500/40 bg-gradient-to-r from-emerald-950/90 via-black to-emerald-950/90 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
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
              ? "bg-emerald-400 text-black shadow-emerald-400/50 border border-emerald-300"
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

  return (
    <div className="relative min-h-screen bg-[#080808] text-white overflow-x-hidden">
      {/* LUZ AMBIENTAL RED GLOW */}
      <div className="pointer-events-none fixed top-1/4 left-1/2 -translate-x-1/2 size-[750px] rounded-full bg-red-600/20 blur-[180px] z-0" />

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
      <main className="relative z-10 mx-auto w-[94%] max-w-3xl pt-34 sm:pt-38 pb-20 space-y-8">

        {/* TOPO E TÍTULO PRINCIPAL */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-gradient-to-r from-red-950/90 via-black to-red-950/90 px-5 py-2 text-xs sm:text-sm font-black tracking-wider text-red-400 uppercase mb-3 backdrop-blur-md shadow-[0_0_30px_rgba(220,38,38,0.4)]">
            <Gift className="size-4 text-red-400 animate-pulse" />
            <span>🎁 TESTE O UNITV PRO GRÁTIS POR 3 DIAS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-2 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Escolha onde você quer assistir e <span className="text-red-500">siga o passo a passo</span>
          </h1>
          <p className="text-xs sm:text-base text-white/80 max-w-lg mx-auto leading-relaxed font-medium">
            Selecione seu dispositivo para ver o tutorial interativo e ativar seu teste instantaneamente.
          </p>
        </div>

        {/* MASTER CONTAINER ÚNICO INTEGRADO (TUTORIAL + CATEGORIAS + PLANO MENSAL) */}
        <div className="rounded-3xl border border-red-500/40 bg-gradient-to-b from-[#280910]/95 via-[#1a0509]/95 to-[#0e0205]/98 backdrop-blur-2xl shadow-[0_25px_80px_rgba(220,38,38,0.35)] overflow-hidden">

          {/* 1. SELETOR DE DISPOSITIVOS EM ABAS DE ALTO IMPACTO */}
          <div className="p-4 sm:p-6 bg-red-950/30 border-b border-red-500/20">
            <div className="grid grid-cols-3 gap-2 rounded-2xl bg-black/60 p-1.5 border border-red-500/30">
              <button
                onClick={() => setDeviceTab("tv")}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 rounded-xl py-3 px-2 sm:px-4 text-xs sm:text-sm font-black transition-all duration-300 cursor-pointer ${
                  deviceTab === "tv"
                    ? "bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-[0_0_25px_rgba(220,38,38,0.7)] border border-red-400/70 scale-[1.02]"
                    : "bg-transparent text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Tv className="size-4 sm:size-5 text-red-400" />
                <span>TV / TV Box</span>
              </button>

              <button
                onClick={() => setDeviceTab("mobile")}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 rounded-xl py-3 px-2 sm:px-4 text-xs sm:text-sm font-black transition-all duration-300 cursor-pointer ${
                  deviceTab === "mobile"
                    ? "bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-[0_0_25px_rgba(220,38,38,0.7)] border border-red-400/70 scale-[1.02]"
                    : "bg-transparent text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Smartphone className="size-4 sm:size-5 text-emerald-400" />
                <span>Celular</span>
              </button>

              <button
                onClick={() => setDeviceTab("pc")}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 rounded-xl py-3 px-2 sm:px-4 text-xs sm:text-sm font-black transition-all duration-300 cursor-pointer ${
                  deviceTab === "pc"
                    ? "bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-[0_0_25px_rgba(220,38,38,0.7)] border border-red-400/70 scale-[1.02]"
                    : "bg-transparent text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Monitor className="size-4 sm:size-5 text-amber-400" />
                <span>Computador</span>
              </button>
            </div>
          </div>

          {/* 2. CONTEÚDO DO TUTORIAL */}
          <div className="p-6 sm:p-9 space-y-6">

            {/* TUTORIAL: TV / TV BOX */}
            {deviceTab === "tv" && (
              <>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3.5">
                    <DownloaderAppIcon />
                    <div>
                      <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                        Instalação em Smart TV, TV Box &amp; Stick
                      </h2>
                      <p className="text-xs text-muted-foreground font-medium">
                        Via Downloader (Android TV, FireTV Stick, Xiaomi Mi Stick)
                      </p>
                    </div>
                  </div>
                </div>

                {/* VÍDEO CURTO */}
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-black text-white">
                    <div className="flex items-center gap-2">
                      <Play className="size-4 text-red-500 fill-red-500" />
                      <span>Vídeo Tutorial Curto — Passo a Passo para Smart TV</span>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-500/30">
                      <Flame className="size-3" /> Vídeo Prático (1 min)
                    </span>
                  </div>
                  <div className="relative aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/0QH2y4005EQ"
                      title="Vídeo Tutorial de Instalação UniTV Pro na Smart TV"
                      className="size-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* PASSOS RESTAURADOS COM BADGES 'PASSO 1', 'PASSO 2' */}
                <ol className="space-y-5">
                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 border border-red-400/40 px-3 py-1 text-xs font-black text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] tracking-wider">
                      Passo 1
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Abra a loja de aplicativos da sua Smart TV ou TV Box (Play Store / App Store) e instale o app{" "}
                      <a
                        href={DOWNLOADER_PLAYSTORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 font-bold underline underline-offset-2 hover:text-red-300"
                      >
                        Downloader <ExternalLink className="inline size-3" />
                      </a>.
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 border border-red-400/40 px-3 py-1 text-xs font-black text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] tracking-wider">
                      Passo 2
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
                      Abra o app <strong>Downloader</strong> e digite no campo de busca:
                    </div>
                  </li>

                  <div className="pl-0 sm:pl-20">
                    <CodeCopyBox code="1089401" />
                  </div>

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 border border-red-400/40 px-3 py-1 text-xs font-black text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] tracking-wider">
                      Passo 3
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Clique em <strong>"Go"</strong>. O download do app iniciará imediatamente. Quando terminar, toque no botão para instalar.
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 border border-red-400/40 px-3 py-1 text-xs font-black text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] tracking-wider">
                      Passo 4
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Se o sistema solicitar permissão para instalar apps desconhecidos, escolha <strong>"Permitir desta fonte"</strong> ou <strong>"Instalar mesmo assim"</strong>. Abra o UniTV Pro e aproveite!
                    </div>
                  </li>
                </ol>
              </>
            )}

            {/* TUTORIAL: CELULAR */}
            {deviceTab === "mobile" && (
              <>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3.5">
                    <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-green-700 text-white border border-emerald-400/50 shadow-[0_4px_20px_rgba(16,185,129,0.35)]">
                      <AndroidIcon className="size-7" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                        Instalação no Celular ou Tablet
                      </h2>
                      <p className="text-xs text-muted-foreground font-medium">
                        Download direto do APK instalador para Android
                      </p>
                    </div>
                  </div>
                </div>

                {/* VÍDEO CURTO */}
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-black text-white">
                    <div className="flex items-center gap-2">
                      <Play className="size-4 text-red-500 fill-red-500" />
                      <span>Vídeo Tutorial Curto — Passo a Passo no Smartphone</span>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      <Flame className="size-3" /> Instalação Rápida
                    </span>
                  </div>
                  <div className="relative aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/Ge1WVaiOQxQ"
                      title="Vídeo Tutorial de Instalação UniTV Pro no Celular"
                      className="size-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <ol className="space-y-5">
                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 border border-red-400/40 px-3 py-1 text-xs font-black text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] tracking-wider">
                      Passo 1
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Toque no botão verde abaixo para baixar o instalador oficial do UniTV Pro diretamente no seu celular.
                    </div>
                  </li>

                  <div className="pl-0 sm:pl-20">
                    <a
                      href={APK_MEDIAFIRE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 px-6 py-4 text-xs sm:text-sm font-black text-white shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] w-full border border-emerald-400/50"
                    >
                      <Download className="size-5 animate-bounce" />
                      BAIXAR APK UNITV PRO (DOWNLOAD DIRETO)
                    </a>
                  </div>

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 border border-red-400/40 px-3 py-1 text-xs font-black text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] tracking-wider">
                      Passo 2
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Abra as notificações do celular ou a pasta <strong>Downloads</strong> e toque no arquivo <strong>unitv_RS-NPWN.apk</strong>.
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 border border-red-400/40 px-3 py-1 text-xs font-black text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] tracking-wider">
                      Passo 3
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Opção alternativa via Play Store: Instale o app{" "}
                      <a href={NTDOWN_PLAYSTORE_URL} target="_blank" rel="noopener noreferrer" className="text-red-400 font-bold underline">
                        ntDown <ExternalLink className="inline size-3" />
                      </a>{" "}
                      e digite o código:
                    </div>
                  </li>

                  <div className="pl-0 sm:pl-20">
                    <CodeCopyBox code="94596" />
                  </div>

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 border border-red-400/40 px-3 py-1 text-xs font-black text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] tracking-wider">
                      Passo 4
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Permita a instalação no celular quando solicitado e abra o UniTV Pro!
                    </div>
                  </li>
                </ol>
              </>
            )}

            {/* TUTORIAL: COMPUTADOR */}
            {deviceTab === "pc" && (
              <>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3.5">
                    <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-black font-black text-base shadow-[0_4px_20px_rgba(245,158,11,0.4)] border border-amber-300">
                      LD
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                        Instalação no Computador / PC
                      </h2>
                      <p className="text-xs text-muted-foreground font-medium">
                        Via emulador Android leve (Windows &amp; Mac)
                      </p>
                    </div>
                  </div>
                </div>

                <ol className="space-y-5">
                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 border border-red-400/40 px-3 py-1 text-xs font-black text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] tracking-wider">
                      Passo 1
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Baixe o emulador gratuito{" "}
                      <a
                        href={LDPLAYER_WEBSITE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 font-bold underline"
                      >
                        LDPlayer <ExternalLink className="inline size-3" />
                      </a>{" "}
                      no seu computador e faça a instalação.
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 border border-red-400/40 px-3 py-1 text-xs font-black text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] tracking-wider">
                      Passo 2
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Abra o LDPlayer e instale o app <strong>Downloader</strong> pela Play Store do emulador.
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 border border-red-400/40 px-3 py-1 text-xs font-black text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] tracking-wider">
                      Passo 3
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
                      No Downloader dentro do emulador, digite o código:
                    </div>
                  </li>

                  <div className="pl-0 sm:pl-20">
                    <CodeCopyBox code="1089401" />
                  </div>

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 border border-red-400/40 px-3 py-1 text-xs font-black text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] tracking-wider">
                      Passo 4
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Instale o UniTV Pro no emulador e assista em tela cheia no monitor ou TV!
                    </div>
                  </li>
                </ol>
              </>
            )}

          </div>

          {/* 3. CONFIRMAÇÃO DE TESTE LIBERADO (RIBBON VERDE INTEGRADO) */}
          <div className="bg-gradient-to-r from-emerald-950/80 via-emerald-900/60 to-emerald-950/80 p-4 sm:p-5 border-t border-emerald-500/30 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                <CheckCircle2 className="size-5 stroke-[2.5]" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                  Pronto! Seu teste grátis está liberado 🎉
                </h3>
                <p className="text-xs text-emerald-200/90 font-medium">
                  Abra o UniTV Pro no seu aparelho e escolha o que quer assistir agora mesmo.
                </p>
              </div>
            </div>
          </div>

          {/* 4. RETÂNGULOS DE CATEGORIAS PASSANDO COM SLIDESHOW (FILMES, ESPORTES, DORAMAS, CANAIS) */}
          <div id="plano-mensal" className="p-6 sm:p-8 bg-gradient-to-b from-black/60 to-[#1e050b]/90 border-t border-red-500/20 space-y-6">
            <div className="text-center space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-red-400">
                <Sparkles className="size-3.5 text-red-400 animate-pulse" />
                Tudo Incluso No UniTV Pro
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                Gostou do que encontrou?
              </h3>
              <p className="text-xs sm:text-sm text-white/70">
                Assista em qualquer aparelho com o Plano Mensal sem fidelidade!
              </p>
            </div>

            {/* GRADE 2x2 DE RETÂNGULOS COM ANIMAÇÃO SLIDESHOW IGUAL DA HOME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CATEGORY_CARDS.map((card) => (
                <CategorySlideshowCard key={card.title} card={card} />
              ))}
            </div>

            {/* CARD ÚNICO DO PLANO MENSAL DENTRO DA ÁREA DE COMPRA */}
            <div className="rounded-3xl border-2 border-red-500/60 bg-gradient-to-b from-[#380913]/95 via-[#23040b]/95 to-[#120104]/98 p-6 sm:p-8 shadow-[0_0_50px_rgba(220,38,38,0.4)] text-center space-y-5">
              
              <div className="inline-flex items-center gap-2 rounded-full border border-red-400/50 bg-red-950/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                <Zap className="size-4 text-red-400" />
                <span className="text-xs font-black uppercase tracking-wider text-red-200">
                  🔥 PLANO MENSAL — SEM FIDELIDADE
                </span>
              </div>

              {/* CAIXA DE PREÇO EM DESTAQUE */}
              <div className="inline-flex flex-col items-center justify-center rounded-3xl border border-red-500/50 bg-gradient-to-r from-red-950/95 via-rose-950/95 to-red-950/95 px-5 sm:px-10 py-4 backdrop-blur-xl shadow-[0_0_40px_rgba(220,38,38,0.4)] max-w-full">
                <span className="text-[10px] sm:text-[11px] font-black text-red-200 uppercase tracking-[0.15em] flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="size-3 sm:size-3.5 text-red-400 animate-pulse" />
                  30 DIAS DE ACESSO ILIMITADO
                </span>
                <div className="flex items-baseline justify-center gap-1.5 sm:gap-2 mt-1 flex-nowrap whitespace-nowrap">
                  <span className="text-[11px] sm:text-sm font-bold text-red-300 whitespace-nowrap">A partir de apenas</span>
                  <span className="text-3xl sm:text-5xl font-black text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] tracking-tight whitespace-nowrap">
                    R$ 34,99
                  </span>
                  <span className="text-[11px] sm:text-sm font-bold text-white/90 whitespace-nowrap">/mês</span>
                </div>
              </div>

              {/* LISTA COMPLETA DE RECURSOS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left max-w-xl mx-auto pt-2 border-t border-white/10">
                {[
                  "1 Tela simultânea",
                  "O maior catálogo de filmes e séries dos streamings",
                  "Lançamentos semanais e produções inéditas",
                  "Filmes e séries que nem estrearam no Brasil",
                  "Animes, Doramas & Novelas Turcas",
                  "Canais Ao Vivo & Esportes em Full HD e 4K",
                  "Compatível com TV, Box, Stick e Celular",
                  "Suporte 7 dias por semana via WhatsApp",
                  "Garantia de reembolso de 7 dias",
                  "Sem fidelidade (Cancele quando quiser)",
                ].map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-400" />
                    <span className="text-xs text-white/90 font-medium">{f}</span>
                  </div>
                ))}
              </div>

              {/* BOTÃO PRINCIPAL DE ASSINATURA DO PLANO MENSAL */}
              <div className="pt-2">
                <a
                  href="https://pay.braip.co/ref?pl=plajge84&ck=che7eo0g&af=afixjm3pn2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 px-9 py-4.5 text-sm sm:text-base font-black text-white shadow-[0_0_40px_rgba(220,38,38,0.9)] border border-red-300/70 transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer w-full sm:w-auto"
                >
                  <span className="flex size-6 items-center justify-center rounded-lg bg-white/20 text-white group-hover:scale-110 transition-transform shadow-inner">
                    <Zap className="size-3.5 fill-current" />
                  </span>
                  <span>ASSINAR PLANO MENSAL — R$ 34,99</span>
                  <ArrowRight className="size-4 text-white/90 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* REASSURANCE BADGES */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[11px] font-extrabold text-white/80 pt-2 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-emerald-400" /> Garantia de 7 dias
                </span>
                <span className="text-white/30">•</span>
                <span className="flex items-center gap-1.5">
                  <CreditCard className="size-3.5 text-blue-400" /> Pix ou cartão
                </span>
                <span className="text-white/30">•</span>
                <span className="flex items-center gap-1.5">
                  <Zap className="size-3.5 text-amber-400" /> Ativação imediata
                </span>
              </div>

            </div>
          </div>

          {/* 5. SUPORTE INLINE RODAPÉ */}
          <div className="p-4 sm:p-5 bg-white/[0.02] border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  <HelpCircle className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-white">
                    Está com dificuldade para instalar?
                  </h4>
                  <p className="text-[11px] text-muted-foreground">
                    Fale direto com a equipe de suporte no WhatsApp.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/5561984016006?text=Ol%C3%A1!%20Estou%20com%20dificuldade%20para%20instalar%20o%20UniTV%20Pro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs font-black text-white shadow-md transition-all hover:scale-[1.02] cursor-pointer shrink-0 w-full sm:w-auto"
              >
                <WhatsAppIcon className="size-4 fill-current" />
                FALAR COM SUPORTE
              </a>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
