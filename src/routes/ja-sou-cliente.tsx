import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Download,
  Smartphone,
  Hash,
  ExternalLink,
  Tv,
  Copy,
  Check,
  Play,
  CheckCircle2,
  ShieldCheck,
  Zap,
  CreditCard,
  HelpCircle,
  X,
  Lock,
  Award,
  Headphones,
  Mail,
  Sparkles,
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

export const Route = createFileRoute("/ja-sou-cliente")({
  head: () => ({
    meta: [
      { title: "Já Sou Cliente — Como Instalar e Ativar o UniTV Pro" },
      {
        name: "description",
        content:
          "Tutorial completo para clientes UniTV Pro. Veja como instalar ou atualizar o aplicativo na sua Smart TV Android, TV Box, celular ou tablet.",
      },
    ],
  }),
  component: JaSouClientePage,
});

// LISTA DIVERSIFICADA (AÇÃO, FICÇÃO, TERROR 2026, ANIMAÇÃO, DORAMAS E ANIMES) PARA A ESTEIRA DO FUNDO
const CATALOG_2026_POSTERS = [
  "/7GV5rrUJf0BRUhoh2cyFoeNthlQ.jpg", // Star Wars: O Mandaloriano e Grogu (2026)
  "/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg", // Obsessão (Terror 2026)
  "/360qdtu2hLnqMu8SVHMywn420w1.jpg", // Batman Knightfall (DC 2026)
  "/uRxrNXQWkHoENm3nwVOZDYSCx2F.jpg", // Evil Dead Burn (Terror 2026)
  "/cWAVzTWm9xdc8skHH7h1vreUtcD.jpg", // Motor City (Ação 2026)
  "/ju10W5gl3PPK3b7TjEmVOZap51I.jpg", // Terrifier 3 (Terror)
  "/gVZgjKIsXZOT3cNZm5PJZBtQRaG.jpg", // Código Vingança (Ação 2026)
  "/ht8Uv9QPv9y7K0RvUyJIaXOZTfd.jpg", // Smile 2 (Terror)
  "/gpC7h43xPMEV3goYMQShfJbTtLq.jpg", // Lanternas (DC 2026)
  "/2uSWRTtCG336nuBiG8jOTEUKSy8.jpg", // Alien Romulus (Terror Sci-Fi)
  "/gMYZZvnkVNTqSVnVCphWbPXwWwb.jpg", // Silo (Apple TV+)
  "/uYJvxMWMb9W4zIY3cbM50sj3dpC.jpg", // The Substance (Terror Thriller)
  "/bh2OuKvq19jBHsloUVCfPSZZw81.jpg", // Vingadores: Doutor Destino (2026)
  "/1EwNyiiNFd863H4e8nWEzutnZD7.jpg", // Longlegs (Terror)
  "/xGvz7nlGQeePcVOpAzOcHsC7kRt.jpg", // Moana 2 (Animação)
  "/5qGIxdEO841C0tdY8vOdLoRVrr0.jpg", // Nosferatu (Terror 2026)
  "/s8BefU3RIJrfipTpsDtOiatlp8j.jpg", // Meu Malvado Favorito 4 (Animação)
  "/v0Ljeti537c6cNKweuEN0iaU3x4.jpg", // Pecadores (Terror 2026)
  "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg", // Deadpool & Wolverine (Marvel)
  "/40nHGUfypLhlr7gJx8At1IbYkaK.jpg", // Invocação do Mal 4 (Terror 2026)
  "/50yWyY981TyUHhoxxSEKwO70FmQ.jpg", // O Diabo Veste Prada 2 (2026)
  "/p3epSUdF9qSWWHTBlA3mJ0w2i2Y.jpg", // O Telefone Preto 2 (Terror 2026)
  "/rYLQbyIvbEd0lF84iXrx7CbPcBB.jpg", // My Royal Nemesis (Dorama 2026)
  "/temIXpcua7j5v4FipOxmzTfrB06.jpg", // Premonição 6 (Terror 2026)
  "/4RuJf3ufe8DgQVycdyMZrJHGK1s.jpg", // Demon Slayer (Anime)
  "/12H82Xrr2ijDF0lJWUarqGFV7bC.jpg", // Five Nights at Freddy's 2 (Terror 2026)
  "/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg", // Solo Leveling (Anime)
  "/skwydfnpaQdRQZfXMroh59FMJyY.jpg", // Rua do Medo Rainha do Baile (Terror 2026)
  "/9ltisibeD4gzqjM1AzmQwCdyirQ.jpg", // One Piece (Anime)
  "/2jME1L29XGE3T4f0zUHgpiKsPrV.jpg", // O Macaco (Terror 2026)
  "/xnxxrEKtBaIcI1ewq50pLkOMU6u.jpg", // Fúria (Furious 2026)
  "/kNxRgcTeqeU5jauBackTERoO2De.jpg", // Other Mommy (Terror 2026)
  "/1C2qbfUW3lTzb8vpZeG8pjYzW3Q.jpg", // Ponto Sem Retorno (Ação 2026)
  "/e0WaDBrrBAMcq2stAXCR7rXEsiw.jpg", // Just Play Dead (Terror 2026)
  "/mxa7YxVln3Rwnd2Va82PoclTznj.jpg", // Agente Kim: Reativado (Dorama 2026)
  "/zP83bIkBViw5b1s9bDemYJ3AAgX.jpg", // Resident Evil: O Retorno (Terror Sci-Fi 2026)
  "/yfYohBszGqoAW8oM0qydOtJ4kPh.jpg", // A Leste do Palácio (Dorama 2026)
  "/imnkSt4PSQpxIuyiRpJCiLk3SZz.jpg", // Werwulf (O Lobisomem 2026)
  "/pmff1wjKrgJi92PPr346lAifzlg.jpg", // Dia D (Disclosure Day 2026)
  "/pRtJagIxpfODzzb0T0NAvZSzErC.jpg", // FROM (Origem / Série de Terror)
];

const linha1 = CATALOG_2026_POSTERS.slice(0, 8);
const linha2 = CATALOG_2026_POSTERS.slice(8, 16);
const linha3 = CATALOG_2026_POSTERS.slice(16, 24);

const DOWNLOADER_PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=com.esaba.downloader";
const APK_MEDIAFIRE_URL = "https://www.mediafire.com/file/3g5ftk7ep3tq9ao/unitv_RS-NPWN.apk/file";
const WHATSAPP_SUPPORT_URL = "https://wa.me/556182743140?text=Ol%C3%A1!%20J%C3%A1%20sou%20cliente%20e%20preciso%20de%20suporte%20com%20meu%20acesso%2Frecarga";

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

function JaSouClientePage() {
  const [deviceTab, setDeviceTab] = useState<"tv" | "mobile">("tv");
  const [isTikTokUser, setIsTikTokUser] = useState(false);
  const [copiedMediaFire, setCopiedMediaFire] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  return (
    <div className="relative min-h-screen bg-[#060606] text-white overflow-x-hidden">
      <DOMIntegrityShield />

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
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 shrink-0 whitespace-nowrap">
            <span className="relative flex size-7 sm:size-8 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 via-rose-700 to-red-900 shadow-[0_0_15px_rgba(220,38,38,0.7)] border border-white/20 shrink-0">
              <svg className="size-3.5 sm:size-4 fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="font-display text-xs sm:text-base font-black tracking-wider text-white whitespace-nowrap">
              UniTV <span className="text-red-500">Pro</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-white/80">
            <Link to="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <Link to="/ja-sou-cliente" className="text-red-500 font-extrabold">
              Já Sou Cliente
            </Link>
            <Link to="/instalar" className="hover:text-white transition-colors">
              Como Instalar
            </Link>
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={WHATSAPP_SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-black tracking-wide uppercase rounded-full border border-emerald-400/40 bg-emerald-600 hover:bg-emerald-500 text-white transition-all items-center gap-1.5 backdrop-blur-md cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.5)]"
            >
              <WhatsAppIcon className="size-3.5" />
              <span>Suporte WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="relative z-10 mx-auto w-[92%] max-w-3xl pt-20 sm:pt-24 pb-20 space-y-5">

        {/* HERO TITLE - PARA CLIENTES ATIVOS */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/40 px-3.5 py-1 text-[11px] font-black tracking-wider text-emerald-400 uppercase backdrop-blur-xl shadow-md">
            <Sparkles className="size-3 text-emerald-400" />
            <span>Área do Cliente UniTV Pro</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Já é cliente? <span className="text-red-500">Veja como instalar</span>
          </h1>

          <p className="text-sm sm:text-base text-white/90 max-w-lg mx-auto leading-relaxed font-semibold">
            Siga o tutorial passo a passo abaixo para instalar ou atualizar o aplicativo na sua Smart TV Android, TV Box, celular ou tablet.
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
                <span className="break-words max-w-full">Celular &amp; Tablet Android</span>
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
                      na loja de aplicativos do seu aparelho.
                    </p>
                  </li>

                  <li className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600 text-white font-mono text-xs font-black shadow-md border border-white/20">
                        02
                      </span>
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                        Abra o Downloader e digite o código oficial:
                      </p>
                    </div>
                    <CodeCopyBox code="9884830" />
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600 text-white font-mono text-xs font-black shadow-md border border-white/20">
                      03
                    </span>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                      Clique em <strong>"Go"</strong>, confirme o download e abra o UniTV Pro! Insira seu código de recarga ou dados de login.
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
                      Celular &amp; Tablet Android
                    </h2>
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
                          Baixe o APK oficial diretamente no seu celular:
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
                      Abra o arquivo baixado nas suas Notificações ou Downloads e confirme a instalação.
                    </p>
                  </li>

                  <li className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600 text-white font-mono text-xs font-black shadow-md border border-white/20">
                        03
                      </span>
                      <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                        Ou use o app{" "}
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

        {/* MENSAGEM CONFIRMAÇÃO CLIENTE */}
        <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/60 p-4 text-center flex items-center justify-center gap-2.5 backdrop-blur-2xl shadow-md">
          <CheckCircle2 className="size-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm font-black text-white tracking-wide">
            Pronto! Insira seu código de recarga ou os dados de login enviados ao seu e-mail para ter acesso ilimitado.
          </span>
        </div>

        {/* SEÇÃO SUPORTE EXCLUSIVO WHATSAPP */}
        <div className="rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-emerald-950/80 via-zinc-900 to-zinc-950 p-6 sm:p-8 text-center space-y-4 backdrop-blur-2xl shadow-[0_15px_50px_rgba(16,185,129,0.2)]">
          <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 mx-auto shadow-inner">
            <WhatsAppIcon className="size-7" />
          </div>

          <div className="space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Precisa de ajuda com sua recarga ou acesso?
            </h2>
            <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto leading-relaxed">
              Nossa equipe de suporte está online no WhatsApp para te auxiliar na instalação ou envio de códigos em minutos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/5561984016006?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20a%20instala%C3%A7%C3%A3o%20do%20UniTV%20Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 px-6 py-3.5 text-xs sm:text-sm font-black text-white uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.5)] border border-emerald-400/50 cursor-pointer w-full sm:w-auto"
            >
              <WhatsAppIcon className="size-5" />
              <span>🛠️ AJUDA COM A INSTALAÇÃO</span>
            </a>

            <a
              href="https://wa.me/556182743140?text=Ol%C3%A1!%20J%C3%A1%20comprei%20minha%20recarga%20e%20quero%20meu%20acesso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 px-6 py-3.5 text-xs sm:text-sm font-black text-black uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_30px_rgba(245,158,11,0.5)] border border-yellow-300 cursor-pointer w-full sm:w-auto"
            >
              <WhatsAppIcon className="size-5 text-black" />
              <span>💬 COMPREI E QUERO MEU ACESSO</span>
            </a>
          </div>
        </div>

        {/* DUVIDAS FREQUENTES CLIENTES */}
        <div className="space-y-3 pt-4">
          <h3 className="text-lg font-black text-white text-center flex items-center justify-center gap-2">
            <HelpCircle className="size-5 text-red-500" /> Perguntas Frequentes
          </h3>

          <div className="space-y-2">
            {[
              {
                q: "Onde encontro meu código de recarga ou dados de acesso?",
                a: "Assim que seu pagamento é confirmado, você recebe no seu e-mail cadastrado o código de recarga ou os dados de login. Caso não encontre, verifique a pasta de Spam/Lixo Eletrônico ou chame nosso suporte no WhatsApp.",
              },
              {
                q: "Como renovar ou adicionar uma nova recarga?",
                a: "Para renovar seu acesso, basta adquirir uma nova recarga em nosso site e digitar o código recebido diretamente no menu 'Recarga' dentro do aplicativo UniTV Pro no seu aparelho.",
              },
              {
                q: "Posso usar a mesma conta em mais de um aparelho?",
                a: "No Plano Anual VIP você possui 2 telas simultâneas liberadas. Nos planos mensal e trimestral o acesso é para 1 tela simultânea.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/15 bg-white/[0.04] overflow-hidden backdrop-blur-xl transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-white hover:text-red-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`size-4 shrink-0 transition-transform ${openFaq === idx ? "rotate-180 text-red-400" : "text-white/60"}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-xs text-white/80 leading-relaxed border-t border-white/10 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICADOS DE SEGURANÇA */}
        <div className="pt-6 border-t border-white/15">
          <div className="grid grid-cols-2 gap-2 sm:gap-3.5 sm:grid-cols-3 lg:grid-cols-6 text-center">
            {[
              { icon: Lock, title: "SSL 256-bit", desc: "Ambiente Criptografado", color: "text-emerald-400" },
              { icon: ShieldCheck, title: "Garantia 7 Dias", desc: "Reembolso Garantido", color: "text-blue-400" },
              { icon: Zap, title: "Envio Imediato", desc: "Envio no E-mail", color: "text-amber-400" },
              { icon: CreditCard, title: "Pagamento Seguro", desc: "PIX ou Cartão", color: "text-purple-400" },
              { icon: Award, title: "+30.000 Clientes", desc: "Assinantes Ativos", color: "text-rose-400" },
              { icon: CheckCircle2, title: "Sem Fidelidade", desc: "Cancele quando quiser", color: "text-teal-400" },
            ].map((c) => (
              <div
                key={c.title}
                className="group flex flex-col items-center justify-center text-center gap-1 rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-3.5 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08]"
              >
                <div className={`flex size-7 sm:size-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-white/[0.06] border border-white/10 ${c.color} shadow-inner`}>
                  <c.icon className="size-4 sm:size-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-white text-[11px] sm:text-xs leading-tight">{c.title}</h4>
                  <p className="text-[9px] sm:text-[10px] text-white/50 leading-tight">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
