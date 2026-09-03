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
  Lock,
  Award,
  Headphones,
  Mail,
  Sparkles,
  ChevronDown,
  ArrowLeft,
  ChevronRight,
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
      { title: "Área do Cliente UniTV Pro — Instalação e Suporte" },
      {
        name: "description",
        content:
          "Área exclusiva para clientes UniTV Pro. Escolha entre o tutorial de instalação ou suporte direto via WhatsApp.",
      },
    ],
  }),
  component: JaSouClientePage,
});

// LISTA DIVERSIFICADA PARA A ESTEIRA DO FUNDO
const CATALOG_2026_POSTERS = [
  "/7GV5rrUJf0BRUhoh2cyFoeNthlQ.jpg",
  "/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg",
  "/360qdtu2hLnqMu8SVHMywn420w1.jpg",
  "/uRxrNXQWkHoeENm3nwVOZDYSCx2F.jpg",
  "/cWAVzTWm9xdc8skHH7h1vreUtcD.jpg",
  "/ju10W5gl3PPK3b7TjEmVOZap51I.jpg",
  "/gVZgjKIsXZOT3cNZm5PJZBtQRaG.jpg",
  "/ht8Uv9QPv9y7K0RvUyJIaXOZTfd.jpg",
  "/gpC7h43xPMEV3goYMQShfJbTtLq.jpg",
  "/2uSWRTtCG336nuBiG8jOTEUKSy8.jpg",
  "/gMYZZvnkVNTqSVnVCphWbPXwWwb.jpg",
  "/uYJvxMWMb9W4zIY3cbM50sj3dpC.jpg",
  "/bh2OuKvq19jBHsloUVCfPSZZw81.jpg",
  "/1EwNyiiNFd863H4e8nWEzutnZD7.jpg",
  "/xGvz7nlGQeePcVOpAzOcHsC7kRt.jpg",
  "/5qGIxdEO841C0tdY8vOdLoRVrr0.jpg",
  "/s8BefU3RIJrfipTpsDtOiatlp8j.jpg",
  "/v0Ljeti537c6cNKweuEN0iaU3x4.jpg",
  "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
  "/40nHGUfypLhlr7gJx8At1IbYkaK.jpg",
  "/50yWyY981TyUHhoxxSEKwO70FmQ.jpg",
  "/p3epSUdF9qSWWHTBlA3mJ0w2i2Y.jpg",
  "/rYLQbyIvbEd0lF84iXrx7CbPcBB.jpg",
  "/temIXpcua7j5v4FipOxmzTfrB06.jpg",
];

const linha1 = CATALOG_2026_POSTERS.slice(0, 8);
const linha2 = CATALOG_2026_POSTERS.slice(8, 16);
const linha3 = CATALOG_2026_POSTERS.slice(16, 24);

const DOWNLOADER_PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=com.esaba.downloader";
const APK_MEDIAFIRE_URL = "https://www.mediafire.com/file/3g5ftk7ep3tq9ao/unitv_RS-NPWN.apk/file";
const WHATSAPP_VENDEDOR_URL = "https://wa.me/556182743140?text=Ol%C3%A1!%20Comprei%20minha%20recarga%2C%20quero%20meu%20acesso%2C%20tenho%20d%C3%BAvidas%20ou%20preciso%20de%20reembolso";
const WHATSAPP_INSTALACAO_URL = "https://wa.me/5561984016006?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20a%20instala%C3%A7%C3%A3o%20do%20UniTV%20Pro";

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
  const [currentView, setCurrentView] = useState<"hub" | "instalacao" | "suporte">("hub");
  const [deviceTab, setDeviceTab] = useState<"tv" | "mobile">("tv");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const search = window.location.search;
      if (search.includes("aba=suporte") || search.includes("tab=suporte")) {
        setCurrentView("suporte");
      } else if (search.includes("aba=instalacao") || search.includes("tab=instalacao")) {
        setCurrentView("instalacao");
      }
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

          <nav className="flex items-center gap-2 sm:gap-4 text-xs font-bold">
            <Link to="/" className="hidden sm:inline-block text-white/70 hover:text-white transition-colors">
              Início
            </Link>
            <button
              onClick={() => setCurrentView("hub")}
              className={`px-3 py-1 rounded-full text-xs font-black transition-all cursor-pointer ${
                currentView === "hub"
                  ? "bg-white/20 text-white border border-white/30"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Área do Cliente
            </button>
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={WHATSAPP_VENDEDOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-black tracking-wide uppercase rounded-full border border-amber-400/50 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black transition-all items-center gap-1.5 backdrop-blur-md cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.5)]"
            >
              <WhatsAppIcon className="size-3.5 fill-current text-black" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="relative z-10 mx-auto w-[92%] max-w-4xl pt-20 sm:pt-24 pb-20 space-y-6">

        {/* ==================== VISTA 1: HUB PRINCIPAL (APENAS OS 2 BOTÕES 3D) ==================== */}
        {currentView === "hub" && (
          <div className="space-y-8 animate-fade-in text-center py-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/40 px-3.5 py-1 text-[11px] font-black tracking-wider text-emerald-400 uppercase backdrop-blur-xl shadow-md">
                <Sparkles className="size-3 text-emerald-400 animate-pulse" />
                <span>Área do Cliente UniTV Pro</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                O que você precisa no momento?
              </h1>
            </div>

            {/* OS 2 BOTÕES 3D DE ALTAS ANIMAÇÕES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto pt-2">
              
              {/* BOTÃO 1 3D: INSTALAÇÃO */}
              <button
                type="button"
                onClick={() => setCurrentView("instalacao")}
                className="group relative flex flex-col items-center justify-between p-8 sm:p-10 rounded-3xl border border-red-500/40 bg-gradient-to-b from-red-950/50 via-zinc-900/90 to-zinc-950 backdrop-blur-2xl transition-all duration-500 hover:scale-[1.04] hover:border-red-400 hover:shadow-[0_0_60px_rgba(220,38,38,0.5)] cursor-pointer text-center overflow-hidden"
              >
                {/* Efeito de Luz 3D de Fundo */}
                <div className="absolute -top-20 -left-20 size-44 rounded-full bg-red-600/30 blur-3xl group-hover:bg-red-500/50 transition-all duration-500" />

                {/* ÍCONE 3D ANIMADO DE INSTALAÇÃO */}
                <div className="relative my-4 flex size-28 items-center justify-center">
                  {/* Aura 3D pulsante */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-red-600 to-rose-500 blur-xl opacity-70 group-hover:opacity-100 transition-opacity animate-pulse" />
                  
                  {/* Container 3D em Camadas de Vidro */}
                  <div className="relative size-24 rounded-2xl bg-gradient-to-br from-red-500 via-rose-600 to-red-900 p-0.5 shadow-[0_15px_35px_rgba(220,38,38,0.6)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <div className="flex size-full items-center justify-center rounded-2xl bg-black/70 backdrop-blur-md border border-white/30">
                      <Tv className="size-12 text-white drop-shadow-[0_4px_12px_rgba(255,255,255,0.6)] animate-bounce" />
                    </div>
                  </div>
                  
                  {/* Badge 3D Flutuante */}
                  <div className="absolute -bottom-2 -right-2 flex size-9 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg border border-white/50 font-mono text-xs font-black animate-pulse">
                    <Download className="size-5" />
                  </div>
                </div>

                <div className="space-y-2 mt-4 z-10">
                  <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-red-400 transition-colors uppercase tracking-wider drop-shadow-md">
                    Instalação
                  </h2>
                  <p className="text-xs sm:text-sm text-white/70 font-medium max-w-xs leading-relaxed">
                    Vídeo tutorial em 2min, códigos do Downloader e guia de instalação para TV e Celular.
                  </p>
                </div>

                <div className="mt-8 w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 group-hover:from-red-500 group-hover:to-rose-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all flex items-center justify-center gap-2">
                  <span>Acessar Tutorial</span>
                  <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* BOTÃO 2 3D: SUPORTE */}
              <button
                type="button"
                onClick={() => setCurrentView("suporte")}
                className="group relative flex flex-col items-center justify-between p-8 sm:p-10 rounded-3xl border border-amber-500/40 bg-gradient-to-b from-amber-950/50 via-zinc-900/90 to-zinc-950 backdrop-blur-2xl transition-all duration-500 hover:scale-[1.04] hover:border-amber-300 hover:shadow-[0_0_60px_rgba(245,158,11,0.5)] cursor-pointer text-center overflow-hidden"
              >
                {/* Efeito de Luz 3D de Fundo */}
                <div className="absolute -top-20 -right-20 size-44 rounded-full bg-amber-500/30 blur-3xl group-hover:bg-amber-400/50 transition-all duration-500" />

                {/* ÍCONE 3D ANIMADO DE SUPORTE */}
                <div className="relative my-4 flex size-28 items-center justify-center">
                  {/* Aura 3D pulsante */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-400 blur-xl opacity-70 group-hover:opacity-100 transition-opacity animate-pulse" />
                  
                  {/* Container 3D em Camadas de Vidro */}
                  <div className="relative size-24 rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 p-0.5 shadow-[0_15px_35px_rgba(245,158,11,0.6)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <div className="flex size-full items-center justify-center rounded-2xl bg-black/70 backdrop-blur-md border border-white/30">
                      <Headphones className="size-12 text-amber-400 drop-shadow-[0_4px_12px_rgba(245,158,11,0.8)] animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Badge 3D Flutuante WhatsApp */}
                  <div className="absolute -bottom-2 -right-2 flex size-9 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg border border-white/50 font-mono text-xs font-black">
                    <WhatsAppIcon className="size-5 fill-current" />
                  </div>
                </div>

                <div className="space-y-2 mt-4 z-10">
                  <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-400 transition-colors uppercase tracking-wider drop-shadow-md">
                    Suporte
                  </h2>
                  <p className="text-xs sm:text-sm text-white/70 font-medium max-w-xs leading-relaxed">
                    Contatos do WhatsApp para recargas, envio de acessos, tirar dúvidas ou solicitar reembolso.
                  </p>
                </div>

                <div className="mt-8 w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 group-hover:from-amber-400 group-hover:to-yellow-400 text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all flex items-center justify-center gap-2">
                  <span>Ver Contatos de Suporte</span>
                  <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform text-black" />
                </div>
              </button>

            </div>
          </div>
        )}

        {/* ==================== VISTA 2: PÁGINA ESPECÍFICA DE INSTALAÇÃO ==================== */}
        {currentView === "instalacao" && (
          <div className="space-y-6 animate-fade-in">
            {/* BARRA DE VOLTAR */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <button
                type="button"
                onClick={() => setCurrentView("hub")}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 px-4 py-2 text-xs font-extrabold text-white transition-all cursor-pointer border border-white/15"
              >
                <ArrowLeft className="size-4" />
                <span>Voltar para a Área do Cliente</span>
              </button>

              <div className="text-xs font-black text-red-500 uppercase tracking-widest hidden sm:block">
                Tutorial de Instalação UniTV Pro
              </div>
            </div>

            {/* TUTORIAL DE INSTALAÇÃO VISUAL */}
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
                          na loja de aplicativos do seu aparelho (Google Play Store ou Amazon Appstore).
                        </p>
                      </li>

                      <li className="space-y-2">
                        <div className="flex items-start gap-3">
                          <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600 text-white font-mono text-xs font-black shadow-md border border-white/20">
                            02
                          </span>
                          <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                            Abra o app <strong>Downloader</strong> e digite o código de instalação abaixo no campo de URL:
                          </p>
                        </div>
                        <CodeCopyBox code="9884830" />
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600 text-white font-mono text-xs font-black shadow-md border border-white/20">
                          03
                        </span>
                        <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                          Aguarde o download e clique em <strong>INSTALAR</strong> quando o aviso aparecer na tela.
                        </p>
                      </li>

                      <li className="space-y-2 pt-2 border-t border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black text-amber-400 uppercase tracking-wider">
                            💡 Alternativa para TV Box (Ntdown)
                          </span>
                        </div>
                        <p className="text-xs text-white/80">
                          Se o app Downloader não estiver disponível, abra o navegador Chrome da sua TV Box ou o app Ntdown e use o código:
                        </p>
                        <CodeCopyBox code="691238" />
                      </li>
                    </ol>
                  </>
                )}

                {deviceTab === "mobile" && (
                  <>
                    <div className="flex items-center gap-3 pb-3 border-b border-white/15">
                      <Smartphone className="size-8 text-emerald-400 shrink-0" />
                      <div>
                        <h2 className="text-base sm:text-lg font-black text-white">
                          Celular &amp; Tablet Android
                        </h2>
                      </div>
                    </div>

                    <ol className="space-y-4">
                      <li className="space-y-2">
                        <div className="flex items-start gap-3">
                          <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600 text-white font-mono text-xs font-black shadow-md border border-white/20">
                            01
                          </span>
                          <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                            Faça o download direto do aplicativo UniTV Pro para celulares Android clicando no botão abaixo:
                          </div>
                        </div>

                        <div className="p-3 bg-white/[0.03] border border-white/10 rounded-2xl max-w-md mx-auto">
                          <a
                            href={APK_MEDIAFIRE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 my-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-3 text-xs font-black text-white transition-colors shadow-md border border-emerald-400/30 cursor-pointer"
                          >
                            <Download className="size-4 animate-bounce" />
                            BAIXAR APK UNITV PRO (DIRETO)
                          </a>
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

            {/* CONFIRMAÇÃO CLIENTE */}
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/60 p-4 text-center flex items-center justify-center gap-2.5 backdrop-blur-2xl shadow-md">
              <CheckCircle2 className="size-5 text-emerald-400 shrink-0" />
              <span className="text-xs sm:text-sm font-black text-white tracking-wide">
                Pronto! Insira seu código de recarga ou dados de login para ter acesso ilimitado.
              </span>
            </div>

            {/* CALLOUT PARA IR PARA PÁGINA DE SUPORTE */}
            <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-5 text-center space-y-3 backdrop-blur-xl">
              <p className="text-xs sm:text-sm text-white/80 font-bold">
                Precisa de ajuda durante a instalação ou com sua recarga?
              </p>
              <button
                onClick={() => setCurrentView("suporte")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-5 py-2.5 text-xs font-black text-black shadow-md transition-all hover:scale-105 cursor-pointer"
              >
                <Headphones className="size-4" />
                ACESSAR CENTRAL DE SUPORTE
              </button>
            </div>
          </div>
        )}

        {/* ==================== VISTA 3: PÁGINA ESPECÍFICA DE SUPORTE ==================== */}
        {currentView === "suporte" && (
          <div className="space-y-6 animate-fade-in">
            {/* BARRA DE VOLTAR */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <button
                type="button"
                onClick={() => setCurrentView("hub")}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 px-4 py-2 text-xs font-extrabold text-white transition-all cursor-pointer border border-white/15"
              >
                <ArrowLeft className="size-4" />
                <span>Voltar para a Área do Cliente</span>
              </button>

              <div className="text-xs font-black text-amber-400 uppercase tracking-widest hidden sm:block">
                Central de Suporte UniTV Pro
              </div>
            </div>

            {/* CARD PRINCIPAL DE SUPORTE WHATSAPP COM OS 2 BOTÕES DE CONTATO */}
            <div className="rounded-3xl border border-amber-500/40 bg-gradient-to-b from-amber-950/40 via-zinc-900 to-zinc-950 p-6 sm:p-8 text-center space-y-5 backdrop-blur-2xl shadow-[0_15px_50px_rgba(245,158,11,0.2)]">
              <div className="flex size-16 items-center justify-center rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-400 mx-auto shadow-inner animate-pulse">
                <Headphones className="size-8" />
              </div>

              <div className="space-y-2">
                <h2 className="text-xl sm:text-3xl font-black text-white">
                  Central de Suporte &amp; Atendimento
                </h2>
                <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto leading-relaxed">
                  Fale com a nossa equipe no WhatsApp para receber acessos, recargas, tirar dúvidas ou solicitar suporte de instalação. Atendimento 7 dias por semana!
                </p>
              </div>

              {/* OS 2 BOTÕES DE CONTATO DO WHATSAPP */}
              <div className="flex flex-col gap-3.5 max-w-lg mx-auto pt-2">
                {/* BOTÃO VENDEDOR (1º LUGAR) */}
                <a
                  href={WHATSAPP_VENDEDOR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 px-6 py-4 text-xs sm:text-sm font-black text-black uppercase tracking-wider transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(245,158,11,0.5)] border border-yellow-300 cursor-pointer"
                >
                  <WhatsAppIcon className="size-5 text-black" />
                  <span>💬 QUERO MEU ACESSO, RECARGA OU REEMBOLSO</span>
                </a>

                {/* BOTÃO INSTALAÇÃO (2º LUGAR) */}
                <a
                  href={WHATSAPP_INSTALACAO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 px-6 py-4 text-xs sm:text-sm font-black text-white uppercase tracking-wider transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(16,185,129,0.5)] border border-emerald-400/50 cursor-pointer"
                >
                  <WhatsAppIcon className="size-5" />
                  <span>🛠️ AJUDA COM A INSTALAÇÃO</span>
                </a>
              </div>

              <div className="pt-3 text-xs text-white/40 flex items-center justify-center gap-2 flex-wrap">
                <Mail className="size-4 text-amber-400 shrink-0" />
                <span>E-mail oficial:</span>
                <a href="mailto:unitvpro.oficial2026@gmail.com" className="text-white font-bold underline hover:text-amber-400">
                  unitvpro.oficial2026@gmail.com
                </a>
              </div>
            </div>

            {/* DUVIDAS FREQUENTES CLIENTES */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-black text-white text-center flex items-center justify-center gap-2">
                <HelpCircle className="size-5 text-red-500" /> Perguntas Frequentes
              </h3>

              <div className="space-y-2">
                {[
                  {
                    q: "Onde encontro meu código de recarga ou dados de acesso?",
                    a: "Assim que seu pagamento é confirmado, você recebe no seu e-mail cadastrado o código de recarga ou os dados de login. Caso não encontre, verifique a pasta de Spam ou fale no nosso WhatsApp de vendas.",
                  },
                  {
                    q: "Como renovar ou adicionar uma nova recarga?",
                    a: "Para renovar seu acesso, basta adquirir uma nova recarga em nosso site e digitar o código recebido diretamente no menu 'Recarga' dentro do aplicativo UniTV Pro no seu aparelho.",
                  },
                  {
                    q: "Posso usar a mesma conta em mais de um aparelho?",
                    a: "No Plano Anual VIP você possui 2 telas simultâneas liberadas. Nos planos mensal e trimestral o acesso é para 1 tela simultânea.",
                  },
                  {
                    q: "Como funciona a garantia e o reembolso?",
                    a: "Oferecemos 7 dias de garantia incondicional de reembolso. Se não ficar 100% satisfeito, solicite a devolução pelo WhatsApp do vendedor sem complicações.",
                  },
                ].map((faq, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/15 bg-white/[0.04] overflow-hidden backdrop-blur-xl transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-white hover:text-red-400 transition-colors cursor-pointer"
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
            <div className="pt-4 border-t border-white/15">
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
          </div>
        )}

      </main>
    </div>
  );
}
