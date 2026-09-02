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
  ArrowRight,
  Flame,
  Smile,
  X,
  Lock,
  Award,
  Headphones,
  Mail,
  Sparkles,
  Star,
  Film,
  Trophy,
  Heart,
  Clapperboard,
  ChevronDown,
} from "lucide-react";
import { img } from "@/data/catalog";
import { WhatsAppIcon } from "@/components/icons";
import {
  DOWNLOADER_OFFICIAL_CODE,
  NTDOWN_OFFICIAL_CODE,
  getVerifiedDownloaderCode,
  getVerifiedNtDownCode,
} from "@/config/security";
import { DOMIntegrityShield } from "@/components/DOMIntegrityShield";

export const Route = createFileRoute("/instalar")({
  head: () => ({
    meta: [
      { title: "🎁 Teste Grátis 3 Dias — Como Instalar UniTV Pro (Smart TV Android, Celular e Tablet, TV Box)" },
      {
        name: "description",
        content:
          "Seu teste grátis de 3 dias está quase pronto! Passo a passo simples e rápido para instalar o UniTV Pro em aparelhos com sistema Android.",
      },
    ],
  }),
  component: InstalarPage,
});

// LISTA DE FILMES E SÉRIES PARA ESTEIRA HORIZONTAL
const HORROR_2026_POSTERS = [
  "/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg", // Obsessão
  "/uRxrNXQWkHoENm3nwVOZDYSCx2F.jpg", // Evil Dead Burn
  "/cWAVzTWm9xdc8skHH7h1vreUtcD.jpg", // Motor City
  "/kNxRgcTeqeU5jauBackTERoO2De.jpg", // Other Mommy
  "/2PFgFMnrdCPXWiZl1PUvky7Mo9D.jpg", // Undertone
  "/360qdtu2hLnqMu8SVHMywn420w1.jpg", // Batman Knightfall
  "/2sOEJzhPzjTkZSlPbGxOJ7xgIyS.jpg", // Passageiro do Mal
  "/x6rHcQFiYcczLQPrmxXPAicm54E.jpg", // Hokum
  "/qEl4BDBTGnhLiadZx0c9nHM8vBF.jpg", // Backrooms
  "/rB495nxugPfNlBmFDUjN5kaTy90.jpg", // Omukade
  "/sT5ITTlTcnPOeFzHEu5j0hTZUvD.jpg", // Martyrs
  "/ju10W5gl3PPK3b7TjEmVOZap51I.jpg", // Terrifier 3
  "/ht8Uv9QPv9y7K0RvUyJIaXOZTfd.jpg", // Smile 2
  "/2uSWRTtCG336nuBiG8jOTEUKSy8.jpg", // Alien Romulus
  "/uYJvxMWMb9W4zIY3cbM50sj3dpC.jpg", // The Substance
  "/1EwNyiiNFd863H4e8nWEzutnZD7.jpg", // Longlegs
  "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg", // Evil Dead Rise
  "/5qGIxdEO841C0tdY8vOdLoRVrr0.jpg", // Nosferatu
  "/fr96XzlzsONrQrGfdLMiwtQjott.jpg", // Heretic
  "/omV2IW2OlFTSw6Hih13hz6lFdvP.jpg", // A Freira 2
  "/1ZTrQWpuhxMr32uC1fQBRnkVYlf.jpg", // Pemandi Jenazah
  "/zp5NrmYp80axIGiEiYPmm1CW6uH.jpg", // Eu Vi o Diabo
  "/mL4vGghS5XtgeNIPjhoTg8Tv5cJ.jpg", // O Lamento
  "/bOl0rJ86WWxVYlQlGttHhHuYiPQ.jpg", // Salmokji
  "/ojWSVt7O92ZLtEUyQs8u5pRI40b.jpg", // Dia Bukan Ibu
  "/fI6XBw8k5CWNwxLEYZwpjA89TPg.jpg", // A Maldição da Múmia
  "/lH8k9uCWYn2b2gsYleqYBDPbWa8.jpg", // A Boca do Diabo
  "/psEJSjQr6I9GSJTdW28CKC4Kffs.jpg", // A Hora do Mal
  "/v0Ljeti537c6cNKweuEN0iaU3x4.jpg", // Pecadores
  "/40nHGUfypLhlr7gJx8At1IbYkaK.jpg", // Invocação do Mal 4
  "/p3epSUdF9qSWWHTBlA3mJ0w2i2Y.jpg", // O Telefone Preto 2
  "/xfmnUz6C5WRboIMQZD0j3SNDT7v.jpg", // Faça Ela Voltar
  "/temIXpcua7j5v4FipOxmzTfrB06.jpg", // Premonição 6
  "/12H82Xrr2ijDF0lJWUarqGFV7bC.jpg", // Five Nights at Freddy's 2
  "/skwydfnpaQdRQZfXMroh59FMJyY.jpg", // Rua do Medo Rainha do Baile
  "/2jME1L29XGE3T4f0zUHgpiKsPrV.jpg", // O Macaco
  "/pRtJagIxpfODzzb0T0NAvZSzErC.jpg", // FROM (Origem)
];

const linha1 = HORROR_2026_POSTERS.slice(0, 8);
const linha2 = HORROR_2026_POSTERS.slice(8, 16);
const linha3 = HORROR_2026_POSTERS.slice(16, 24);
const linha4 = HORROR_2026_POSTERS.slice(24, 32);
const linha5 = HORROR_2026_POSTERS.slice(32, 40);

const DOWNLOADER_PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=com.esaba.downloader";
const APK_MEDIAFIRE_URL = "https://www.mediafire.com/file/3g5ftk7ep3tq9ao/unitv_RS-NPWN.apk/file";

function DownloaderAppIcon({ className = "size-10" }: { className?: string }) {
  return (
    <div className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-sm ${className}`}>
      <img
        src="/apps/downloader.png"
        alt="Downloader Icon"
        className="size-full object-cover"
      />
    </div>
  );
}

// RETÂNGULO DO CÓDIGO
function CodeCopyBox({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const verifiedCode = code === NTDOWN_OFFICIAL_CODE ? getVerifiedNtDownCode(code) : getVerifiedDownloaderCode(code);

  const handleCopy = () => {
    navigator.clipboard.writeText(verifiedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative overflow-hidden my-2.5 rounded-2xl p-3.5 sm:p-4 border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-xl shadow-md max-w-md mx-auto text-center">
      <div className="pointer-events-none absolute -right-10 -bottom-10 size-36 rounded-full bg-emerald-500/15 blur-2xl" />
      <div className="flex flex-col items-center justify-center gap-2 relative z-10 w-full text-center">
        <div className="flex items-center justify-center gap-1.5">
          <div className="flex size-5.5 items-center justify-center rounded-md bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 font-mono font-bold text-xs backdrop-blur-md">
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
          className={`w-full sm:w-auto min-w-[160px] inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2 text-xs font-black tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-md backdrop-blur-md active:scale-95 ${
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

function InstalarPage() {
  const [deviceTab, setDeviceTab] = useState<"tv" | "mobile">("tv");
  const [planTab, setPlanTab] = useState<"mensal" | "trimestral" | "anual">("mensal");
  const [isTikTokUser, setIsTikTokUser] = useState(false);
  const [copiedMediaFire, setCopiedMediaFire] = useState(false);

  useEffect(() => {
    const ua = (typeof navigator !== "undefined" ? navigator.userAgent : "") || "";
    const ref = (typeof document !== "undefined" ? document.referrer : "") || "";
    const search = (typeof window !== "undefined" ? window.location.search : "") || "";

    const isTikTok =
      /TikTok|Musical_ly|Bytedance|Trill/i.test(ua) ||
      /tiktok\.com/i.test(ref) ||
      /[?&](ref|src|from|utm_source)=tiktok/i.test(search) ||
      /[?&]tt=1/i.test(search);

    if (isTikTok) {
      setIsTikTokUser(true);
    }
  }, []);

  const openApkWithTikTokBypass = (url: string) => {
    const ua = (typeof navigator !== "undefined" ? navigator.userAgent : "") || "";
    const isTikTok = /TikTok|Musical_ly|Bytedance/i.test(ua);
    const isAndroid = /Android/i.test(ua);

    if (isTikTok && isAndroid) {
      const cleanUrl = url.replace(/^https?:\/\//, "");
      window.location.href = `intent://${cleanUrl}#Intent;scheme=https;package=com.android.chrome;end;`;
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCloseModal = () => {
    setShowPermissionModal(false);
    if (pendingRedirectUrl) {
      openApkWithTikTokBypass(pendingRedirectUrl);
      setPendingRedirectUrl(null);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#060606] text-white overflow-x-hidden">
      {/* FUNDO ANIMADO COM MARQUEES INFINITOS */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-40 select-none">
        <div className="flex flex-col gap-3.5 -rotate-6 scale-110 -translate-y-12">
          <div className="flex overflow-hidden">
            <div className="animate-marquee-slow flex shrink-0 items-center gap-3.5 pr-3.5">
              {[...linha1, ...linha1, ...linha1].map((p, idx) => (
                <img key={p + idx} src={img(p, "w342")} alt="" aria-hidden="true" decoding="async" className="h-42 sm:h-54 w-auto aspect-[2/3] rounded-xl object-cover shadow-[0_4px_20px_rgba(0,0,0,0.6)] border border-white/20" />
              ))}
            </div>
          </div>
          <div className="flex overflow-hidden">
            <div className="animate-marquee-reverse-slow flex shrink-0 items-center gap-3.5 pr-3.5">
              {[...linha2, ...linha2, ...linha2].map((p, idx) => (
                <img key={p + idx} src={img(p, "w342")} alt="" aria-hidden="true" decoding="async" className="h-42 sm:h-54 w-auto aspect-[2/3] rounded-xl object-cover shadow-[0_4px_20px_rgba(0,0,0,0.6)] border border-white/20" />
              ))}
            </div>
          </div>
          <div className="flex overflow-hidden">
            <div className="animate-marquee-slow flex shrink-0 items-center gap-3.5 pr-3.5">
              {[...linha3, ...linha3, ...linha3].map((p, idx) => (
                <img key={p + idx} src={img(p, "w342")} alt="" aria-hidden="true" decoding="async" className="h-42 sm:h-54 w-auto aspect-[2/3] rounded-xl object-cover shadow-[0_4px_20px_rgba(0,0,0,0.6)] border border-white/20" />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606]/80 via-[#060606]/55 to-[#060606]/90" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* LUZES AMBIENTAIS */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 size-[800px] rounded-full bg-red-600/15 blur-[180px] z-0 animate-pulse" />

      {/* HEADER VIDRO */}
      <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
        <div className="mx-auto mt-3 sm:mt-4 flex w-[94%] max-w-5xl items-center justify-between rounded-full px-4 sm:px-6 py-2 sm:py-2.5 border border-white/15 backdrop-blur-2xl bg-black/60 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <span className="relative flex size-7 sm:size-8 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 via-rose-700 to-red-900 shadow-[0_0_15px_rgba(220,38,38,0.7)] border border-white/20">
              <svg className="size-3.5 sm:size-4 fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="font-display text-sm sm:text-base font-black tracking-wider text-white">
              UniTV <span className="text-red-500">Pro</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-white/80">
            <Link to="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <Link to="/instalar" className="text-red-500 font-extrabold">
              Teste Grátis
            </Link>
            <a href="#plano-mensal" className="hover:text-white transition-colors">
              Planos
            </a>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#suporte"
              className="hidden sm:inline-flex px-3 sm:px-3.5 py-1.5 text-[11px] font-extrabold tracking-wide uppercase rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all items-center gap-1.5 backdrop-blur-md cursor-pointer"
            >
              <Headphones className="size-3.5 text-emerald-400" />
              <span>Suporte</span>
            </a>

            <a
              href="#plano-mensal"
              className="btn-cta px-6 py-2.5 text-xs font-black tracking-wider uppercase rounded-full shadow-[0_0_20px_rgba(220,38,38,0.7)] flex items-center justify-center shrink-0 hover:scale-105 transition-all sm:px-5 sm:py-2 sm:text-xs"
            >
              <span>ASSINAR</span>
            </a>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="relative z-10 mx-auto w-[92%] max-w-3xl pt-20 sm:pt-24 pb-20 space-y-4 sm:space-y-5">

        {/* HERO TITLE - INFORMAÇÃO CLARA E TRANSPARENTE SOBRE O TESTE */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/40 px-3 py-1 text-[11px] font-black tracking-wider text-emerald-400 uppercase backdrop-blur-xl shadow-md">
            <Sparkles className="size-3 text-emerald-400" />
            <span>Seu teste grátis está quase pronto 🎉</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Como instalar o <span className="whitespace-nowrap">UniTV <span className="text-red-500">Pro</span></span>
          </h1>

          <p className="text-sm sm:text-base text-white/90 max-w-lg mx-auto leading-relaxed font-semibold">
            Instale em aparelhos com sistema operacional Android
          </p>

        </div>

        {/* 💎 TUTORIAL DE INSTALAÇÃO VISUAL */}
        <div className="rounded-3xl border border-white/20 bg-white/[0.05] backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="p-2.5 sm:p-4 bg-white/[0.04] border-b border-white/15 backdrop-blur-md">
            <div className="grid grid-cols-2 gap-2 sm:gap-3 items-stretch">
              <button
                onClick={() => setDeviceTab("tv")}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 rounded-xl p-2.5 sm:py-3.5 sm:px-4 text-xs sm:text-sm font-black transition-all cursor-pointer backdrop-blur-md text-center sm:text-left leading-tight min-h-[56px] w-full overflow-hidden ${
                  deviceTab === "tv"
                    ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.6)] border border-white/30"
                    : "text-white/70 hover:text-white hover:bg-white/10 border border-transparent"
                }`}
              >
                <Tv className="size-5 sm:size-6 text-white shrink-0" />
                <span className="break-words max-w-full">Smart TV, TV Box &amp; Projetor</span>
              </button>

              <button
                onClick={() => setDeviceTab("mobile")}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 rounded-xl p-2.5 sm:py-3.5 sm:px-4 text-xs sm:text-sm font-black transition-all cursor-pointer backdrop-blur-md text-center sm:text-left leading-tight min-h-[56px] w-full overflow-hidden ${
                  deviceTab === "mobile"
                    ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.6)] border border-white/30"
                    : "text-white/70 hover:text-white hover:bg-white/10 border border-transparent"
                }`}
              >
                <Smartphone className="size-5 sm:size-6 text-emerald-400 shrink-0" />
                <span className="break-words max-w-full">Celular e Tablet</span>
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {deviceTab === "tv" && (
              <>
                <div className="flex items-center gap-3 pb-3 border-b border-white/15">
                  <DownloaderAppIcon />
                  <div>
                    <h2 className="text-base sm:text-lg font-black text-white">
                      Smart TV, TV Box, Fire Stick, Xiaomi Stick &amp; Projetor
                    </h2>
                    <p className="text-xs text-white/60">Xiaomi Stick, Fire Stick, Smart TV Android, TV Box e Projetor Android</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/20 bg-zinc-900 shadow-md">
                  <div className="flex items-center justify-between border-b border-white/15 px-4 py-2 text-xs font-bold text-white bg-white/[0.04]">
                    <div className="flex items-center gap-2">
                      <Play className="size-3.5 text-red-500 fill-red-500" />
                      <span className="text-emerald-400 font-black">🎥 Assista ao vídeo de 2 minutos para instalar</span>
                    </div>
                  </div>
                  <div className="relative aspect-video w-full bg-black z-20">
                    <iframe
                      src="https://www.youtube.com/embed/u2X4iUABhq4?rel=0&enablejsapi=1"
                      title="Vídeo Tutorial de Instalação na Smart TV Android e TV Box"
                      className="size-full border-0 relative z-20 pointer-events-auto"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>

                <ol className="space-y-4 pt-1">
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600 text-white font-mono text-xs font-black shadow-md border border-white/20">
                      01
                    </span>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Baixe o app{" "}
                      <a href={DOWNLOADER_PLAYSTORE_URL} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-extrabold underline hover:text-emerald-300">
                        Downloader <ExternalLink className="inline size-3" />
                      </a>{" "}
                      na loja do seu aparelho.
                    </p>
                  </li>

                  <li className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600 text-white font-mono text-xs font-black shadow-md border border-white/20">
                        02
                      </span>
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                        Abra o Downloader e digite o código:
                      </p>
                    </div>
                    <CodeCopyBox code="9884830" />
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600 text-white font-mono text-xs font-black shadow-md border border-white/20">
                      03
                    </span>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Clique em <strong>"Go"</strong> e confirme a instalação!
                    </p>
                  </li>
                </ol>
              </>
            )}

            {deviceTab === "mobile" && (
              <>
                <div className="flex items-center gap-3 pb-3 border-b border-white/15">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-black font-bold shadow-md">
                    <Smartphone className="size-5" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-black text-white">
                      Celular &amp; Tablet
                    </h2>
                    <p className="text-xs text-white/60">Para celulares e tablets com sistema operacional Android</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/20 bg-zinc-900 shadow-md">
                  <div className="flex items-center justify-between border-b border-white/15 px-4 py-2 text-xs font-bold text-white bg-white/[0.04]">
                    <div className="flex items-center gap-2">
                      <Play className="size-3.5 text-red-500 fill-red-500" />
                      <span className="text-emerald-400 font-black">🎥 Assista ao vídeo de 1 minuto para instalar</span>
                    </div>
                  </div>
                  <div className="relative aspect-video w-full bg-black z-20">
                    <iframe
                      src="https://www.youtube.com/embed/0dSJ_Q4DDus?rel=0&enablejsapi=1"
                      title="Vídeo Tutorial Celular e Tablet"
                      className="size-full border-0 relative z-20 pointer-events-auto"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>

                <ol className="space-y-4 pt-1">
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600 text-white font-mono text-xs font-black shadow-md border border-white/20">
                      01
                    </span>
                    <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
                      {isTikTokUser ? (
                        <div className="my-1 rounded-xl border border-amber-500/50 bg-amber-950/60 p-3 text-amber-100 shadow-md">
                          <p className="text-xs font-bold text-amber-100 mb-2">
                            Copie o link abaixo e cole no seu navegador:
                          </p>
                          <div className="flex items-center justify-between gap-2 rounded-lg bg-black/70 p-2 border border-amber-500/40">
                            <span className="font-mono text-[10px] text-amber-200 truncate select-all pr-2">
                              {APK_MEDIAFIRE_URL}
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                navigator.clipboard.writeText(APK_MEDIAFIRE_URL);
                                setCopiedMediaFire(true);
                                setTimeout(() => setCopiedMediaFire(false), 2500);
                              }}
                              className="shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-amber-500 hover:bg-amber-400 text-black font-black text-[11px] transition-colors cursor-pointer"
                            >
                              {copiedMediaFire ? (
                                <>
                                  <Check className="size-3" /> COPIADO!
                                </>
                              ) : (
                                <>
                                  <Copy className="size-3" /> COPIAR LINK
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          Baixe o APK oficial:
                          <a
                            href={APK_MEDIAFIRE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 my-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-3 text-xs font-black text-white transition-colors shadow-md border border-emerald-400/30 cursor-pointer"
                          >
                            <Download className="size-4 animate-bounce" />
                            BAIXAR APK UNITV PRO (DIRETO)
                          </a>
                        </>
                      )}
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600 text-white font-mono text-xs font-black shadow-md border border-white/20">
                      02
                    </span>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Abra o arquivo baixado e confirme a instalação.
                    </p>
                  </li>

                  <li className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600 text-white font-mono text-xs font-black shadow-md border border-white/20">
                        03
                      </span>
                      <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                        Ou use o{" "}
                        <a
                          href={DOWNLOADER_PLAYSTORE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-black text-emerald-400 underline underline-offset-2 hover:text-emerald-300 inline-flex items-center gap-1"
                        >
                          Downloader na Play Store <ExternalLink className="size-3 inline shrink-0" />
                        </a>{" "}
                        com o código:
                      </div>
                    </div>
                    <CodeCopyBox code="9884830" />
                  </li>
                </ol>
              </>
            )}
          </div>
        </div>

        {/* MENSAGEM PÓS-TUTORIAL DE INCENTIVO */}
        <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/60 p-4 text-center flex items-center justify-center gap-2.5 backdrop-blur-2xl shadow-md">
          <CheckCircle2 className="size-5 text-emerald-400 shrink-0 animate-pulse" />
          <span className="text-xs sm:text-sm font-black text-white tracking-wide">
            Pronto! Agora aproveite os próximos 3 dias para explorar o catálogo e encontrar algo novo para assistir.
          </span>
        </div>

        {/* SEÇÃO DE PLANOS - POSICIONADA APÓS O TUTORIAL E A EXPLICAÇÃO DO TESTE */}
        <div id="plano-mensal" className="rounded-3xl border border-white/20 bg-white/[0.05] backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="p-6 sm:p-10 text-center space-y-5">
            <div className="space-y-2">
              <span className="text-[11px] font-black text-red-400 uppercase tracking-widest block">
                {planTab === "mensal" && "Plano Mensal • Acesso Ilimitado"}
                {planTab === "trimestral" && "Plano Trimestral • Economize no 90 Dias"}
                {planTab === "anual" && "👑 Plano Anual VIP • 2 Telas • Melhor Custo-Benefício"}
              </span>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Gostou do teste? <span className="text-red-500">Escolha o plano ideal</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto leading-relaxed font-medium">
                Continue assistindo a todos os seus filmes, séries, esportes e canais ao vivo no UniTV Pro sem interrupções!
              </p>
            </div>

            {/* ALTERNADOR DE PLANOS (MENSAL / TRIMESTRAL / ANUAL VIP) */}
            <div className="flex items-center justify-center p-1.5 rounded-2xl bg-white/[0.06] border border-white/20 backdrop-blur-xl max-w-md mx-auto my-3 gap-1 shadow-inner">
              <button
                type="button"
                onClick={() => setPlanTab("mensal")}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  planTab === "mensal"
                    ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.7)] border border-white/30"
                    : "text-white/70 hover:text-white hover:bg-white/10 border border-transparent"
                }`}
              >
                Mensal
              </button>
              <button
                type="button"
                onClick={() => setPlanTab("trimestral")}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  planTab === "trimestral"
                    ? "bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.7)] border border-white/30"
                    : "text-white/70 hover:text-white hover:bg-white/10 border border-transparent"
                }`}
              >
                Trimestral
              </button>
              <button
                type="button"
                onClick={() => setPlanTab("anual")}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  planTab === "anual"
                    ? "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.8)] border border-amber-200 font-extrabold"
                    : "text-amber-300 hover:bg-white/10 border border-amber-500/30"
                }`}
              >
                Anual VIP 👑
              </button>
            </div>

            {/* ESTEIRA HORIZONTAL DE CAPINHAS DE TERROR */}
            <div className="relative overflow-hidden py-2 my-2 max-w-xl mx-auto rounded-2xl">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-[#0d090a] to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-[#0d090a] to-transparent" />

              <div className="flex w-max gap-3 animate-marquee-slow">
                {HORROR_2026_POSTERS.concat(HORROR_2026_POSTERS, HORROR_2026_POSTERS).map((p, i) => (
                  <img
                    key={`p-marquee-${i}`}
                    src={img(p, "w185")}
                    alt=""
                    className="h-28 w-19 rounded-xl object-cover shadow-lg border border-red-500/30 shrink-0 transition-transform hover:scale-105"
                  />
                ))}
              </div>
            </div>

            {/* PREÇO DINÂMICO CONFORME PLANO SELECIONADO */}
            <div className="py-1">
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">
                {planTab === "mensal" && "30 DIAS DE ACESSO COMPLETO"}
                {planTab === "trimestral" && "⚡ 90 DIAS DE ACESSO COMPLETO"}
                {planTab === "anual" && "👑 365 DIAS DE ACESSO (2 TELAS SIMULTÂNEAS)"}
              </span>
              <div className="flex items-baseline justify-center gap-2 flex-nowrap whitespace-nowrap">
                <span className="text-xs sm:text-sm font-bold text-white/60">Apenas</span>
                <span className="text-6xl sm:text-7xl font-black text-white tracking-tight drop-shadow-[0_0_35px_rgba(255,255,255,0.8)]">
                  {planTab === "mensal" && "R$ 34,99"}
                  {planTab === "trimestral" && "R$ 99,99"}
                  {planTab === "anual" && "R$ 179,99"}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white/80">
                  {planTab === "mensal" && "/mês"}
                  {planTab === "trimestral" && "/3 meses"}
                  {planTab === "anual" && "/ano"}
                </span>
              </div>
            </div>

            {/* BENEFÍCIOS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left max-w-lg mx-auto pt-3 pb-1 border-t border-white/15">
              {[
                planTab === "anual"
                  ? "2 Telas simultâneas (Smart TV Android, TV Box, Celular, Tablet ou Projetor Android)"
                  : "1 Tela simultânea (Smart TV Android, TV Box, Celular, Tablet ou Projetor Android)",
                "Milhares de Filmes & Séries",
                "Lançamentos semanais inéditos de terror & cinema",
                "Canais Ao Vivo & Esportes sem travar (4K & Full HD)",
                "Animes, Doramas & Novelas Turcas atualizadas",
                "Programação Infantil & Desenhos Dublados",
                "Guia de Programação EPG & Replay de 7 dias",
                "Suporte VIP via WhatsApp",
                "Garantia incondicional de reembolso por 7 dias",
                "Sem fidelidade ou multa (Cancele quando quiser)",
              ].map((f, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-white/90 font-medium leading-relaxed">{f}</span>
                </div>
              ))}
            </div>

            {/* BOTÃO ASSINATURA DINÂMICO (BRAIP LINKS PRESERVADOS 100%) */}
            <div className="pt-1">
              <a
                href={
                  planTab === "mensal"
                    ? "https://pay.braip.co/ref?pl=plajge84&ck=che7eo0g&af=afixjm3pn2"
                    : planTab === "trimestral"
                      ? "https://pay.braip.co/ref?pl=pla1qqq6&ck=che7eo0g&af=afixjm3pn2"
                      : "https://pay.braip.co/ref?pl=pla6lllo&ck=che7eo0g&af=afixjm3pn2"
                }
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-xs sm:text-sm font-black transition-all hover:scale-105 cursor-pointer w-full sm:w-auto backdrop-blur-md uppercase tracking-wider ${
                  planTab === "anual"
                    ? "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-black shadow-[0_0_35px_rgba(245,158,11,0.9)] border border-yellow-200"
                    : planTab === "trimestral"
                      ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.7)] border border-emerald-400/50"
                      : "bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white shadow-[0_0_30px_rgba(220,38,38,0.7)] border border-red-400/40"
                }`}
              >
                <Zap className="size-4 fill-current" />
                <span>
                  {planTab === "mensal" && "ASSINAR PLANO MENSAL"}
                  {planTab === "trimestral" && "ASSINAR PLANO TRIMESTRAL"}
                  {planTab === "anual" && "ASSINAR PLANO ANUAL VIP (2 TELAS)"}
                </span>
                <ArrowRight className="size-4" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 text-[11px] font-bold text-white/70 pt-2 border-t border-white/15">
              <span className="flex items-center gap-1">
                <ShieldCheck className="size-3.5 text-emerald-400" /> Garantia 7 dias
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CreditCard className="size-3.5 text-blue-400" /> Pix ou cartão
              </span>
            </div>
          </div>

          {/* CERTIFICADOS DE SEGURANÇA */}
          <div className="p-6 sm:p-8 bg-white/[0.02] border-t border-white/15 backdrop-blur-xl text-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-[11px] font-extrabold tracking-widest text-emerald-400 uppercase backdrop-blur-md shadow-sm">
                <ShieldCheck className="size-3.5" /> Compra 100% Segura &amp; Protegida
              </span>
              <h3 className="mt-2 text-lg sm:text-xl font-black text-white">
                Ambiente seguro com <span className="text-emerald-400">garantia total</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 text-center">
              {[
                { icon: Lock, title: "SSL 256-bit", desc: "Ambiente Criptografado", color: "text-emerald-400" },
                { icon: ShieldCheck, title: "Garantia 7 Dias", desc: "Reembolso Garantido", color: "text-blue-400" },
                { icon: Zap, title: "Envio Imediato", desc: "Envio no E-mail", color: "text-amber-400" },
                { icon: CreditCard, title: "Pagamento Seguro", desc: "PIX ou Cartão 12x", color: "text-purple-400" },
                { icon: Award, title: "+30.000 Clientes", desc: "Assinantes Ativos", color: "text-rose-400" },
                { icon: CheckCircle2, title: "Sem Fidelidade", desc: "Cancele quando quiser", color: "text-teal-400" },
              ].map((c) => (
                <div
                  key={c.title}
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08]"
                >
                  <div className={`flex size-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 ${c.color} shadow-inner transition-transform group-hover:scale-110`}>
                    <c.icon className="size-4.5" />
                  </div>
                  <p className="text-xs font-black text-white">{c.title}</p>
                  <p className="text-[10px] text-white/50 leading-tight font-medium">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SUPORTE RODAPÉ */}
          <div id="suporte" className="p-4 sm:p-5 bg-white/[0.02] border-t border-white/15 text-center sm:text-left flex flex-col gap-3.5 backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <HelpCircle className="size-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm text-white font-bold">Precisa de ajuda ou suporte?</p>
                  <p className="text-[11px] text-white/60 font-medium">Atendimento via WhatsApp 7 dias por semana.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto shrink-0">
                <a
                  href="https://wa.me/556184016006?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20para%20instalar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 px-4 py-2.5 text-xs font-bold text-white transition-colors border border-emerald-400/30 shadow-md"
                >
                  <WhatsAppIcon className="size-3.5 fill-current" />
                  DÚVIDAS / INSTALAÇÃO
                </a>

                <a
                  href="https://wa.me/556182743140?text=J%C3%A1%20sou%20cliente%20e%20preciso%20de%20suporte%20com%20meu%20acesso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-4 py-2.5 text-xs font-bold text-white transition-colors border border-blue-400/30 shadow-md"
                >
                  <WhatsAppIcon className="size-3.5 fill-current" />
                  JÁ SOU CLIENTE (SUPORTE)
                </a>
              </div>
            </div>

            <div className="pt-2.5 border-t border-white/10 text-center text-xs text-white/60 flex items-center justify-center gap-1.5 flex-wrap">
              <Mail className="size-3.5 text-emerald-400 shrink-0" />
              <span>Ou se preferir, envie um e-mail para:</span>
              <a href="mailto:unitvpro.oficial2026@gmail.com" className="text-white font-extrabold underline hover:text-emerald-400 transition-colors">
                unitvpro.oficial2026@gmail.com
              </a>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
