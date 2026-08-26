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
import { img, heroSlides } from "@/data/catalog";
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

// SLIDES DO FUNDO DA PÁGINA
const PAGE_BACKDROP_SLIDES = [
  "/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg", // Evil Dead Rise
  "/r013C8Me2bZ0pUi0OWJRh0h7MzT.jpg",  // Obsessão
  "/wjwMC7u3xWKkrronolBqsIy4L0L.jpg", // Backrooms
];

const ROW_1_POSTERS = [
  "/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg",
  "/uRxrNXQWkHoENm3nwVOZDYSCx2F.jpg",
  "/kNxRgcTeqeU5jauBackTERoO2De.jpg",
  "/2PFgFMnrdCPXWiZl1PUvky7Mo9D.jpg",
  "/2sOEJzhPzjTkZSlPbGxOJ7xgIyS.jpg",
  "/x6rHcQFiYcczLQPrmxXPAicm54E.jpg",
  "/pRtJagIxpfODzzb0T0NAvZSzErC.jpg",
  "/qEl4BDBTGnhLiadZx0c9nHM8vBF.jpg",
];

const ROW_2_POSTERS = [
  "/rpU5DGrTVdqcygZBB9npt1WMFch.jpg",
  "/pmff1wjKrgJi92PPr346lAifzlg.jpg",
  "/yihdXomYb5kTeSivtFndMy5iDmf.jpg",
  "/yH2sGLdQejqf3Zk8KDuoDa5gr6E.jpg",
  "/xNVJr9q6AtSbjosS6Ed9YirOkSo.jpg",
  "/zp5NrmYp80axIGiEiYPmm1CW6uH.jpg",
  "/mL4vGghS5XtgeNIPjhoTg8Tv5cJ.jpg",
  "/1ZTrQWpuhxMr32uC1fQBRnkVYlf.jpg",
];

const DOWNLOADER_PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=com.esaba.downloader";
const NTDOWN_PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=link.ntdev.ntdw";
const LDPLAYER_WEBSITE_URL = "https://pt.ldplayer.net/";
const APK_MEDIAFIRE_URL = "https://www.mediafire.com/file/3g5ftk7ep3tq9ao/unitv_RS-NPWN.apk/file";

function DownloaderAppIcon({ className = "size-11 sm:size-12" }: { className?: string }) {
  return (
    <div className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-orange-500/30 bg-gradient-to-br from-amber-500 to-orange-600 shadow-md ${className}`}>
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
    <div className="relative overflow-hidden my-3 rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-950/30 backdrop-blur-md shadow-lg">
      <div className="pointer-events-none absolute -right-10 -bottom-10 size-32 rounded-full bg-emerald-500/10 blur-2xl" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3.5 w-full sm:w-auto">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-green-700 text-white border border-emerald-400/40 shadow-md">
            <Hash className="size-7" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block">
              CÓDIGO DE INSTALAÇÃO RÁPIDA
            </span>
            <div className="font-mono font-black text-3xl sm:text-4xl tracking-widest text-white leading-tight">
              {code}
            </div>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md active:scale-95 ${
            copied
              ? "bg-emerald-400 text-black shadow-emerald-400/40 border border-emerald-300"
              : "bg-emerald-600 hover:bg-emerald-500 text-white hover:scale-[1.02] border border-emerald-400/50"
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
  const [bgSlide, setBgSlide] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);

  // SLIDESHOW SUAVE DO FUNDO DA PÁGINA
  useEffect(() => {
    const timer = setInterval(() => {
      setBgSlide((prev) => (prev + 1) % PAGE_BACKDROP_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // SLIDESHOW DO CARROSSEL DE COMPRA
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentHero = heroSlides[heroIndex] || heroSlides[0]!;

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-x-hidden">
      {/* LUZ AMBIENTAL SUAVE */}
      <div className="pointer-events-none fixed top-1/4 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-red-600/10 blur-[160px] z-0" />

      {/* FUNDO DA PÁGINA DE TESTE COM FILMES E CAPINHAS BEM VISÍVEIS */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {PAGE_BACKDROP_SLIDES.map((bd, i) => (
          <img
            key={bd}
            src={img(bd, "w1280")}
            alt=""
            className="absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: i === bgSlide ? 0.45 : 0,
              filter: "brightness(0.82)",
            }}
          />
        ))}

        {/* ESTEIRA DE CAPINHAS PASSANDO NO FUNDO */}
        <div className="flex flex-col gap-4 pt-16 scale-105 opacity-35">
          <div className="flex w-max gap-4 animate-marquee">
            {ROW_1_POSTERS.concat(ROW_1_POSTERS).map((p, i) => (
              <img key={`r1-${i}`} src={img(p, "w342")} alt="" className="h-44 w-30 rounded-2xl object-cover shadow-xl border border-white/20" />
            ))}
          </div>
          <div className="flex w-max gap-4 animate-marquee-reverse">
            {ROW_2_POSTERS.concat(ROW_2_POSTERS).map((p, i) => (
              <img key={`r2-${i}`} src={img(p, "w342")} alt="" className="h-44 w-30 rounded-2xl object-cover shadow-xl border border-white/20" />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/50 via-[#080808]/75 to-[#080808]/95" />
      </div>

      {/* BARRA PROMOCIONAL DO TOPO */}
      <div className="fixed inset-x-0 top-0 z-[60]">
        <PromoBanner />
      </div>

      {/* HEADER COMPACTO */}
      <header className="fixed inset-x-0 top-8 z-50 transition-all duration-300 [transform:translateZ(0)]">
        <div className="glass mx-auto mt-2 flex w-[94%] max-w-6xl items-center justify-between rounded-full px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.7)] border border-white/10 backdrop-blur-2xl bg-black/60">
          <Link to="/" className="flex items-center gap-3">
            <span className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 via-rose-700 to-red-900 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
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
            href="/#planos"
            className="btn-cta px-4 py-1.5 text-[11px] font-extrabold tracking-wide uppercase shadow-md"
          >
            VER PLANOS
          </a>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="relative z-10 mx-auto w-[94%] max-w-3xl pt-34 sm:pt-38 pb-20">

        {/* TOPO E TÍTULO PRINCIPAL */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/50 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wider text-red-400 uppercase mb-3 backdrop-blur-md">
            <Gift className="size-4 text-red-400 animate-pulse" />
            <span>🎁 TESTE O UNITV PRO GRÁTIS POR 3 DIAS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-2">
            Escolha onde você quer assistir e <span className="text-red-500">siga o passo a passo</span>
          </h1>
          <p className="text-xs sm:text-base text-white/70 max-w-lg mx-auto leading-relaxed">
            Selecione seu dispositivo para ver o tutorial interativo e ativar seu teste instantaneamente.
          </p>
        </div>

        {/* CONTAINER MAESTRO NEUTRO E ELEGANTE (SEM EXCESSO DE VERMELHO OU PRETO TOTAL) */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">

          {/* 1. SELETOR DE DISPOSITIVOS EM ABAS NEUTRO */}
          <div className="p-4 sm:p-6 bg-white/[0.02] border-b border-white/10">
            <div className="grid grid-cols-3 gap-2 rounded-2xl bg-white/[0.05] p-1.5 border border-white/10">
              <button
                onClick={() => setDeviceTab("tv")}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 rounded-xl py-3 px-2 sm:px-4 text-xs sm:text-sm font-black transition-all duration-300 cursor-pointer ${
                  deviceTab === "tv"
                    ? "bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-lg scale-[1.02]"
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
                    ? "bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-lg scale-[1.02]"
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
                    ? "bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-lg scale-[1.02]"
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
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-lg">
                  <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-bold text-white">
                    <div className="flex items-center gap-2">
                      <Play className="size-4 text-red-500 fill-red-500" />
                      <span>Vídeo Tutorial Curto — Passo a Passo para Smart TV</span>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-red-400 bg-red-950/50 px-2 py-0.5 rounded border border-red-500/20">
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

                {/* PASSOS */}
                <ol className="space-y-5">
                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-red-600 border border-red-500/40 px-3 py-1 text-xs font-extrabold text-white shadow-sm tracking-wider">
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
                    <span className="shrink-0 rounded-xl bg-red-600 border border-red-500/40 px-3 py-1 text-xs font-extrabold text-white shadow-sm tracking-wider">
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
                    <span className="shrink-0 rounded-xl bg-red-600 border border-red-500/40 px-3 py-1 text-xs font-extrabold text-white shadow-sm tracking-wider">
                      Passo 3
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Clique em <strong>"Go"</strong>. O download do app iniciará imediatamente. Quando terminar, toque no botão para instalar.
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-red-600 border border-red-500/40 px-3 py-1 text-xs font-extrabold text-white shadow-sm tracking-wider">
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
                    <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-green-700 text-white border border-emerald-400/40 shadow-sm">
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
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-lg">
                  <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-bold text-white">
                    <div className="flex items-center gap-2">
                      <Play className="size-4 text-red-500 fill-red-500" />
                      <span>Vídeo Tutorial Curto — Passo a Passo no Smartphone</span>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/20">
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
                    <span className="shrink-0 rounded-xl bg-red-600 border border-red-500/40 px-3 py-1 text-xs font-extrabold text-white shadow-sm tracking-wider">
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
                      className="flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 px-6 py-4 text-xs sm:text-sm font-black text-white shadow-lg transition-all hover:scale-[1.02] w-full border border-emerald-400/40"
                    >
                      <Download className="size-5 animate-bounce" />
                      BAIXAR APK UNITV PRO (DOWNLOAD DIRETO)
                    </a>
                  </div>

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-red-600 border border-red-500/40 px-3 py-1 text-xs font-extrabold text-white shadow-sm tracking-wider">
                      Passo 2
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Abra as notificações do celular ou a pasta <strong>Downloads</strong> e toque no arquivo <strong>unitv_RS-NPWN.apk</strong>.
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-red-600 border border-red-500/40 px-3 py-1 text-xs font-extrabold text-white shadow-sm tracking-wider">
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
                    <span className="shrink-0 rounded-xl bg-red-600 border border-red-500/40 px-3 py-1 text-xs font-extrabold text-white shadow-sm tracking-wider">
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
                    <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-black font-black text-base shadow-sm border border-amber-300">
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
                    <span className="shrink-0 rounded-xl bg-red-600 border border-red-500/40 px-3 py-1 text-xs font-extrabold text-white shadow-sm tracking-wider">
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
                    <span className="shrink-0 rounded-xl bg-red-600 border border-red-500/40 px-3 py-1 text-xs font-extrabold text-white shadow-sm tracking-wider">
                      Passo 2
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Abra o LDPlayer e instale o app <strong>Downloader</strong> pela Play Store do emulador.
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="shrink-0 rounded-xl bg-red-600 border border-red-500/40 px-3 py-1 text-xs font-extrabold text-white shadow-sm tracking-wider">
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
                    <span className="shrink-0 rounded-xl bg-red-600 border border-red-500/40 px-3 py-1 text-xs font-extrabold text-white shadow-sm tracking-wider">
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
          <div className="bg-emerald-950/40 p-4 sm:p-5 border-y border-emerald-500/30 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
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

          {/* 4. MICROVENDA COM CARROSSEL DE FILMES CINEMATOGRÁFICO E LIMPO */}
          <div className="relative overflow-hidden p-6 sm:p-10 bg-gradient-to-b from-white/[0.02] to-black/80 text-center space-y-5">

            {/* SLIDESHOW DO CARROSSEL HERO NA SEÇÃO DE VENDA */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              {heroSlides.map((s, idx) => (
                <img
                  key={s.title}
                  src={img(s.backdrop, "w1280")}
                  alt={s.title}
                  className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out ${
                    idx === heroIndex ? "opacity-20 scale-105" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-black/70" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/60 px-4 py-1 backdrop-blur-md">
                <Sparkles className="size-3.5 text-red-400 animate-spin" />
                <span className="text-[11px] font-black uppercase tracking-wider text-red-200">
                  🔥 EM DESTAQUE NO APP: {currentHero.title} ({currentHero.year})
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-1">
                  Gostou do que encontrou?
                </h2>
                <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto leading-relaxed font-medium italic">
                  "{currentHero.tagline}"
                </p>
              </div>

              {/* PONTINHOS NAVEGADORES */}
              <div className="flex items-center justify-center gap-1.5 py-1">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      i === heroIndex ? "w-6 bg-red-500 shadow-md" : "w-1.5 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* PREÇO EM DESTAQUE NEUTRO E MODERNO */}
              <div className="inline-flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] px-6 sm:px-9 py-3.5 backdrop-blur-md shadow-lg">
                <span className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest">
                  Planos sem fidelidade • Cancele quando quiser
                </span>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-xs font-bold text-red-400">A partir de apenas</span>
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    R$ 34,99
                  </span>
                  <span className="text-xs font-bold text-white/70">/mês</span>
                </div>
              </div>

              {/* BOTÃO PRINCIPAL CTA */}
              <div>
                <a
                  href="/#planos"
                  className="group relative inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 px-8 py-4 text-xs sm:text-sm font-black text-white shadow-[0_0_30px_rgba(220,38,38,0.6)] border border-red-400/50 transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer w-full sm:w-auto"
                >
                  <span className="flex size-6 items-center justify-center rounded-lg bg-white/20 text-white group-hover:scale-110 transition-transform">
                    <Zap className="size-3.5 fill-current" />
                  </span>
                  <span>QUERO CONTINUAR COM O ACESSO</span>
                  <ArrowRight className="size-4 text-white/90 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* BENEFÍCIOS */}
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
                  <Zap className="size-3.5 text-amber-400" /> Ativação após confirmação
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
