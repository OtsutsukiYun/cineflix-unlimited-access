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

// CAPINHAS VERIFICADAS PARA O BANNER DE FUNDO
const ROW_1_POSTERS = [
  "/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg",
  "/uRxrNXQWkHoENm3nwVOZDYSCx2F.jpg",
  "/kNxRgcTeqeU5jauBackTERoO2De.jpg",
  "/2PFgFMnrdCPXWiZl1PUvky7Mo9D.jpg",
  "/2sOEJzhPzjTkZSlPbGxOJ7xgIyS.jpg",
  "/x6rHcQFiYcczLQPrmxXPAicm54E.jpg",
  "/pRtJagIxpfODzzb0T0NAvZSzErC.jpg",
  "/qEl4BDBTGnhLiadZx0c9nHM8vBF.jpg",
  "/oCutmhFznao1Pzy6wM1C32kxAEu.jpg",
  "/vKq8XEJKxQTHd2Bm5zZMFPUrke7.jpg",
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
  "/bOl0rJ86WWxVYlQlGttHhHuYiPQ.jpg",
  "/ojWSVt7O92ZLtEUyQs8u5pRI40b.jpg",
];

const DOWNLOADER_PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=com.esaba.downloader";
const NTDOWN_PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=link.ntdev.ntdw";
const LDPLAYER_WEBSITE_URL = "https://pt.ldplayer.net/";
const APK_MEDIAFIRE_URL = "https://www.mediafire.com/file/3g5ftk7ep3tq9ao/unitv_RS-NPWN.apk/file";

function DownloaderAppIcon({ className = "size-10 sm:size-12" }: { className?: string }) {
  return (
    <div className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/20 shadow-md ${className}`}>
      <img
        src="/apps/downloader.png"
        alt="Downloader Icon"
        className="size-full object-cover"
      />
    </div>
  );
}

function NtDownAppIcon({ className = "size-10 sm:size-12" }: { className?: string }) {
  return (
    <div className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/20 shadow-md ${className}`}>
      <img
        src="/apps/ntdown.png"
        alt="ntDown Icon"
        className="size-full object-cover"
      />
    </div>
  );
}

function AndroidIcon({ className = "size-4" }: { className?: string }) {
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
    <div className="my-3 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl p-4 border border-emerald-500/30 bg-black/90 shadow-[0_0_25px_rgba(16,185,129,0.15)]">
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600/30 text-emerald-400 border border-emerald-500/50">
          <Hash className="size-6" />
        </div>
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider text-muted-foreground block">
            Código de Instalação (Downloader / NTDown)
          </span>
          <div className="font-mono font-black text-3xl sm:text-4xl tracking-widest text-emerald-400 leading-tight">
            {code}
          </div>
        </div>
      </div>

      <button
        onClick={handleCopy}
        className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md ${
          copied
            ? "bg-emerald-500 text-black shadow-emerald-500/40"
            : "bg-emerald-600 hover:bg-emerald-500 text-white hover:scale-[1.02]"
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
  );
}

function InstalarPage() {
  const [deviceTab, setDeviceTab] = useState<"tv" | "mobile" | "pc">("tv");

  return (
    <div className="relative min-h-screen bg-[#0d090b] text-white overflow-x-hidden">
      {/* LUZ AMBIENTAL VERMELHA */}
      <div className="pointer-events-none fixed top-1/4 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-red-600/15 blur-[160px] z-0" />
      <div className="pointer-events-none fixed bottom-20 right-10 size-[500px] rounded-full bg-rose-700/15 blur-[140px] z-0" />

      {/* BARRA PROMOCIONAL DO TOPO */}
      <div className="fixed inset-x-0 top-0 z-[60]">
        <PromoBanner />
      </div>

      {/* HEADER COMPACTO COM VIDRO E BLUR */}
      <header className="fixed inset-x-0 top-8 z-50 transition-all duration-300 [transform:translateZ(0)]">
        <div className="glass mx-auto mt-2 flex w-[94%] max-w-6xl items-center justify-between rounded-full px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.8)] border border-white/15 backdrop-blur-2xl bg-black/60">
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
            href="/#planos"
            className="btn-cta px-4 py-1.5 text-[11px] font-extrabold tracking-wide uppercase shadow-md"
          >
            VER PLANOS
          </a>
        </div>
      </header>

      {/* GRID DE CAPINHAS NO BACKGROUND DECORATIVO */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-25">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d090b]/85 via-[#0d090b]/65 to-[#0d090b]/90 z-10" />
        <div className="flex flex-col gap-4 pt-16 scale-105 blur-[1px]">
          <div className="flex w-max gap-4 animate-marquee">
            {ROW_1_POSTERS.concat(ROW_1_POSTERS).map((p, i) => (
              <img key={`r1-${i}`} src={img(p, "w342")} alt="" className="h-40 w-28 rounded-xl object-cover shadow-md" />
            ))}
          </div>
          <div className="flex w-max gap-4 animate-marquee-reverse">
            {ROW_2_POSTERS.concat(ROW_2_POSTERS).map((p, i) => (
              <img key={`r2-${i}`} src={img(p, "w342")} alt="" className="h-40 w-28 rounded-xl object-cover shadow-md" />
            ))}
          </div>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL (ESTRUTURA 5 ETAPAS SOLICITADA) */}
      <main className="relative z-10 mx-auto w-[94%] max-w-3xl pt-36 sm:pt-40 pb-20 space-y-10">

        {/* ── 1. TOPO ────────────────────────────────────────────── */}
        <section className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/60 px-4 py-1.5 text-xs sm:text-sm font-black tracking-wider text-red-400 uppercase mb-4 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
            <Gift className="size-4 text-red-400" />
            <span>🎁 TESTE O UNITV PRO GRÁTIS POR 3 DIAS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-3">
            Escolha onde você quer assistir e <span className="text-red-500">siga o passo a passo</span>
          </h1>
          <p className="text-xs sm:text-base text-white/70 max-w-lg mx-auto leading-relaxed">
            Selecione seu dispositivo abaixo para ver o tutorial interativo e o código de ativação imediato.
          </p>

          {/* SELETOR DE DISPOSITIVOS EM ABAS */}
          <div className="mt-6">
            <div className="grid grid-cols-3 gap-2 rounded-2xl glass p-1.5 border border-white/15 bg-black/60 backdrop-blur-2xl shadow-2xl">
              <button
                onClick={() => setDeviceTab("tv")}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 rounded-xl py-3 px-2 sm:px-4 text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  deviceTab === "tv"
                    ? "bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-[0_0_25px_rgba(220,38,38,0.5)] border border-red-500/60 scale-[1.02]"
                    : "bg-transparent text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Tv className="size-4 sm:size-5" />
                <span>TV / TV Box</span>
              </button>

              <button
                onClick={() => setDeviceTab("mobile")}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 rounded-xl py-3 px-2 sm:px-4 text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  deviceTab === "mobile"
                    ? "bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-[0_0_25px_rgba(220,38,38,0.5)] border border-red-500/60 scale-[1.02]"
                    : "bg-transparent text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Smartphone className="size-4 sm:size-5" />
                <span>Celular</span>
              </button>

              <button
                onClick={() => setDeviceTab("pc")}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 rounded-xl py-3 px-2 sm:px-4 text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  deviceTab === "pc"
                    ? "bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-[0_0_25px_rgba(220,38,38,0.5)] border border-red-500/60 scale-[1.02]"
                    : "bg-transparent text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Monitor className="size-4 sm:size-5" />
                <span>Computador</span>
              </button>
            </div>
          </div>
        </section>

        {/* ── 2. TUTORIAL ────────────────────────────────────────── */}
        <section className="glass p-6 sm:p-9 rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] space-y-7">

          {/* TUTORIAL: TV / TV BOX */}
          {deviceTab === "tv" && (
            <>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <DownloaderAppIcon />
                  <div>
                    <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                      Instalação em Smart TV, TV Box &amp; Stick
                    </h2>
                    <p className="text-xs text-muted-foreground font-medium">
                      Método via aplicativo Downloader (compatível com Android TV, FireTV, Xiaomi Mi Stick)
                    </p>
                  </div>
                </div>
              </div>

              {/* VÍDEO CURTO */}
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-black text-white">
                  <Play className="size-4 text-red-500 fill-red-500" />
                  <span>Vídeo Tutorial Curto — Passo a Passo para Smart TV</span>
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

              {/* PASSOS NUMERADOS COM CÓDIGO GRANDE + BOTAO COPIAR */}
              <ol className="space-y-6">
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

                {/* CÓDIGO GRANDE + BOTAO COPIAR */}
                <div className="pl-0 sm:pl-24">
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
                <div className="flex items-center gap-3">
                  <div className="flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md">
                    <AndroidIcon className="size-6" />
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
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-black text-white">
                  <Play className="size-4 text-red-500 fill-red-500" />
                  <span>Vídeo Tutorial Curto — Passo a Passo no Smartphone</span>
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

              <ol className="space-y-6">
                <li className="flex items-start gap-3.5">
                  <span className="shrink-0 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 border border-red-400/40 px-3 py-1 text-xs font-black text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] tracking-wider">
                    Passo 1
                  </span>
                  <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                    Toque no botão verde abaixo para baixar o instalador oficial do UniTV Pro diretamente no seu celular.
                  </div>
                </li>

                <div className="pl-0 sm:pl-24">
                  <a
                    href={APK_MEDIAFIRE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 px-6 py-4 text-xs sm:text-sm font-black text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] w-full"
                  >
                    <Download className="size-5" />
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

                <div className="pl-0 sm:pl-24">
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
                <div className="flex items-center gap-3">
                  <div className="flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-black font-black text-sm shadow-md">
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

              <ol className="space-y-6">
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

                <div className="pl-0 sm:pl-24">
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

        </section>

        {/* ── 3. CONFIRMAÇÃO ─────────────────────────────────────── */}
        <section className="rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/40 via-emerald-900/20 to-black/80 p-6 sm:p-8 backdrop-blur-2xl text-center shadow-[0_0_30px_rgba(16,185,129,0.2)]">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-inner">
            <CheckCircle2 className="size-8 stroke-[2.5]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
            Pronto! Seu teste grátis está liberado 🎉
          </h2>
          <p className="text-xs sm:text-base text-emerald-200/90 max-w-md mx-auto leading-relaxed font-medium">
            Agora abra o UniTV Pro no seu aparelho e escolha algo para assistir imediatamente.
          </p>
        </section>

        {/* ── 4. MICROVENDA ──────────────────────────────────────── */}
        <section className="glass p-7 sm:p-10 rounded-3xl border border-red-500/30 bg-gradient-to-b from-red-950/30 via-black/80 to-black p-8 backdrop-blur-2xl text-center shadow-[0_20px_50px_rgba(220,38,38,0.2)] space-y-6">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-red-400 block mb-2">
              GARANTA SEU ACESSO DEFINITIVO
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-2">
              Gostou do que encontrou?
            </h2>
            <p className="text-sm sm:text-base text-white/75 max-w-md mx-auto leading-relaxed">
              Você pode continuar com acesso completo e ilimitado quando quiser.
            </p>
          </div>

          <div className="inline-flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 backdrop-blur-md">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Planos com recarga mensal</span>
            <span className="text-xl sm:text-3xl font-black text-red-400 mt-0.5">
              A partir de R$ 34,99/mês
            </span>
          </div>

          <div>
            <a
              href="/#planos"
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 px-8 py-4 text-sm sm:text-base font-black text-white shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] active:scale-95 cursor-pointer w-full sm:w-auto"
            >
              <Zap className="size-5 fill-current" />
              QUERO CONTINUAR COM O ACESSO
            </a>
          </div>

          {/* MICROBENEFÍCIOS DE GARANTIA E SEGURANÇA */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-white/70 pt-2 border-t border-white/10">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-emerald-400" /> Garantia de 7 dias
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <CreditCard className="size-4 text-blue-400" /> Pix ou cartão
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <Zap className="size-4 text-amber-400" /> Ativação após confirmação
            </span>
          </div>
        </section>

        {/* ── 5. SUPORTE ─────────────────────────────────────────── */}
        <section className="glass p-7 sm:p-9 rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-2xl text-center shadow-xl space-y-4">
          <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
            <HelpCircle className="size-6" />
          </div>

          <div>
            <h3 className="text-xl font-black text-white mb-1">
              Está com dificuldade para instalar?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
              Nossa equipe de suporte está online no WhatsApp para te guiar passo a passo!
            </p>
          </div>

          <div>
            <a
              href="https://wa.me/5561984016006?text=Ol%C3%A1!%20Estou%20com%20dificuldade%20para%20instalar%20o%20UniTV%20Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-7 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-lg transition-all hover:scale-[1.02] cursor-pointer w-full sm:w-auto"
            >
              <WhatsAppIcon className="size-4 fill-current" />
              FALAR COM O SUPORTE
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
