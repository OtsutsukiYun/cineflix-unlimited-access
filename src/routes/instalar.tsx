import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Download,
  Smartphone,
  Hash,
  Tv,
  Copy,
  Check,
  Play,
  Sparkles,
  Zap,
  CreditCard,
  Lock,
  ShieldCheck,
  CheckCircle2,
  Film,
  Tv2,
  Clapperboard,
  ArrowRight,
  ChevronRight,
  Award,
  Crown,
} from "lucide-react";
import { img } from "@/data/catalog";
import { DOMIntegrityShield } from "@/components/DOMIntegrityShield";
import { PlanPurchaseModal, PlanDetails } from "@/components/PlanPurchaseModal";

export const Route = createFileRoute("/instalar")({
  head: () => ({
    meta: [
      { title: "🎁 Teste o UniTV Pro Grátis por 3 Dias — Instalação Rápida" },
      {
        name: "description",
        content:
          "Teste o UniTV Pro grátis por 3 dias! Passo a passo simples e rápido para instalar na sua Smart TV Android, TV Box, Celular ou Projetor.",
      },
    ],
  }),
  component: InstalarPage,
});

// LISTA DE POSTERS PARA O MARQUEE INFINITO DE FUNDO
const CATALOG_2026_POSTERS = [
  "/7GV5rrUJf0BRUhoh2cyFoeNthlQ.jpg",
  "/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg",
  "/360qdtu2hLnqMu8SVHMywn420w1.jpg",
  "/cWAVzTWm9xdc8skHH7h1vreUtcD.jpg",
  "/gVZgjKIsXZOT3cNZm5PJZBtQRaG.jpg",
  "/1C2qbfUW3lTzb8vpZeG8pjYzW3Q.jpg",
  "/zm0KAbOjlt9eR5y7vDiL2dEOwMl.jpg",
  "/rpU5DGrTVdqcygZBB9npt1WMFch.jpg",
  "/pmff1wjKrgJi92PPr346lAifzlg.jpg",
  "/yihdXomYb5kTeSivtFndMy5iDmf.jpg",
  "/uRxrNXQWkHoENm3nwVOZDYSCx2F.jpg",
  "/e0WaDBrrBAMcq2stAXCR7rXEsiw.jpg",
  "/kNxRgcTeqeU5jauBackTERoO2De.jpg",
  "/qEl4BDBTGnhLiadZx0c9nHM8vBF.jpg",
  "/rB495nxugPfNlBmFDUjN5kaTy90.jpg",
  "/fn5QNtG3LLXC3e7ZTQDYP92kFYc.jpg",
  "/fI6XBw8k5CWNwxLEYZwpjA89TPg.jpg",
  "/lH8k9uCWYn2b2gsYleqYBDPbWa8.jpg",
  "/psEJSjQr6I9GSJTdW28CKC4Kffs.jpg",
  "/v0Ljeti537c6cNKweuEN0iaU3x4.jpg",
  "/40nHGUfypLhlr7gJx8At1IbYkaK.jpg",
  "/p3epSUdF9qSWWHTBlA3mJ0w2i2Y.jpg",
  "/xfmnUz6C5WRboIMQZD0j3SNDT7v.jpg",
  "/temIXpcua7j5v4FipOxmzTfrB06.jpg",
  "/12H82Xrr2ijDF0lJWUarqGFV7bC.jpg",
  "/skwydfnpaQdRQZfXMroh59FMJyY.jpg",
  "/2jME1L29XGE3T4f0zUHgpiKsPrV.jpg",
  "/7LbrEQvturE05hljvTCWST7rLQL.jpg",
  "/f3yLlUrJDdDL8d4nxywyotN45SL.jpg",
  "/fbkUfzmVzEBFSt6p7VigknREIJT.jpg",
];

const linha1 = CATALOG_2026_POSTERS.slice(0, 10);
const linha2 = CATALOG_2026_POSTERS.slice(10, 20);
const linha3 = CATALOG_2026_POSTERS.slice(20, 30);

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

// RETÂNGULO DO CÓDIGO - EXTREMAMENTE DESTACADO E GRANDE
function CodeCopyBox({ code = "9884830" }: { code?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative overflow-hidden my-3 rounded-2xl p-4 sm:p-5 border-2 border-emerald-400 bg-gradient-to-b from-emerald-950/80 via-zinc-900 to-zinc-950 shadow-[0_0_40px_rgba(16,185,129,0.3)] max-w-md mx-auto text-center">
      <div className="pointer-events-none absolute -right-10 -bottom-10 size-40 rounded-full bg-emerald-500/20 blur-2xl" />
      <div className="flex flex-col items-center justify-center gap-2.5 relative z-10 w-full text-center">
        <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
          🔑 CÓDIGO DO DOWNLOADER
        </span>

        <div className="font-mono font-black text-4xl sm:text-5xl tracking-widest text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] my-1 select-all">
          {code}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className={`w-full sm:w-auto min-w-[200px] h-12 inline-flex items-center justify-center gap-2 rounded-xl px-6 text-sm font-black tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-lg active:scale-95 ${
            copied
              ? "bg-white text-black border border-white"
              : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white border border-emerald-400/50 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
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
    </div>
  );
}

function InstalarPage() {
  const [deviceTab, setDeviceTab] = useState<"tv" | "mobile">("tv");
  const [planTab, setPlanTab] = useState<"mensal" | "trimestral" | "anual">("mensal");
  const [isTikTokUser, setIsTikTokUser] = useState(false);
  const [copiedMediaFire, setCopiedMediaFire] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<PlanDetails | null>(null);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  const handleOpenPlanModal = (tab: "mensal" | "trimestral" | "anual") => {
    let planData: PlanDetails;
    if (tab === "mensal") {
      planData = {
        nome: "Plano Mensal",
        preco: "R$34,99",
        periodo: "mês",
        dias: "30 dias",
        telas: "1 tela simultânea",
        link: "https://pay.braip.co/ref?pl=plajge84&ck=che7eo0g&af=afixjm3pn2",
      };
    } else if (tab === "trimestral") {
      planData = {
        nome: "Plano Trimestral",
        preco: "R$99,99",
        periodo: "3 meses",
        dias: "90 dias",
        telas: "1 tela simultânea",
        link: "https://pay.braip.co/ref?pl=pla1qqq6&ck=che7eo0g&af=afixjm3pn2",
      };
    } else {
      planData = {
        nome: "Plano Anual VIP",
        preco: "R$179,99",
        periodo: "ano",
        dias: "365 dias",
        telas: "2 telas simultâneas",
        link: "https://pay.braip.co/ref?pl=pla6lllo&ck=che7eo0g&af=afixjm3pn2",
      };
    }
    setSelectedPlanForModal(planData);
    setIsPlanModalOpen(true);
  };

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
      {/* FUNDO ANIMADO COM MARQUEES INFINITOS */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-25 select-none">
        <div className="flex flex-col gap-3.5 -rotate-6 scale-125 -translate-y-16">
          <div className="flex overflow-hidden">
            <div className="animate-marquee-slow flex shrink-0 items-center gap-3.5 pr-3.5">
              {[...linha1, ...linha1, ...linha1].map((p, idx) => (
                <img key={p + idx} src={img(p, "w342")} alt="" aria-hidden="true" decoding="async" className="h-36 sm:h-48 w-auto aspect-[2/3] rounded-xl object-cover shadow-[0_4px_20px_rgba(0,0,0,0.6)] border border-white/10" />
              ))}
            </div>
          </div>
          <div className="flex overflow-hidden">
            <div className="animate-marquee-reverse-slow flex shrink-0 items-center gap-3.5 pr-3.5">
              {[...linha2, ...linha2, ...linha2].map((p, idx) => (
                <img key={p + idx} src={img(p, "w342")} alt="" aria-hidden="true" decoding="async" className="h-36 sm:h-48 w-auto aspect-[2/3] rounded-xl object-cover shadow-[0_4px_20px_rgba(0,0,0,0.6)] border border-white/10" />
              ))}
            </div>
          </div>
          <div className="flex overflow-hidden">
            <div className="animate-marquee-slow flex shrink-0 items-center gap-3.5 pr-3.5">
              {[...linha3, ...linha3, ...linha3].map((p, idx) => (
                <img key={p + idx} src={img(p, "w342")} alt="" aria-hidden="true" decoding="async" className="h-36 sm:h-48 w-auto aspect-[2/3] rounded-xl object-cover shadow-[0_4px_20px_rgba(0,0,0,0.6)] border border-white/10" />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606]/85 via-[#060606]/75 to-[#060606]/90" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* LUZES AMBIENTAIS */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-red-600/15 blur-[180px] z-0 animate-pulse" />

      {/* HEADER VIDRO MINIMALISTA - SEM MENUS QUE DISTRAIAM O USUÁRIO */}
      <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
        <div className="mx-auto mt-3 sm:mt-4 flex w-[94%] max-w-5xl items-center justify-between rounded-full px-5 py-2.5 border border-white/15 backdrop-blur-2xl bg-black/70 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <span className="relative flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 via-rose-700 to-red-900 shadow-[0_0_15px_rgba(220,38,38,0.7)] border border-white/20 shrink-0">
              <svg className="size-4 fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="font-display text-base font-black tracking-wider text-white">
              UniTV <span className="text-red-500">Pro</span>
            </span>
          </Link>

          <a
            href="#plano-mensal"
            className="btn-cta px-4 sm:px-5 py-1.5 sm:py-2 text-xs font-black tracking-wider uppercase rounded-full shadow-[0_0_15px_rgba(220,38,38,0.6)] flex items-center justify-center shrink-0 hover:scale-105 transition-all"
          >
            <span>VER PLANOS</span>
          </a>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL DE CONVERSÃO INSTAGRAM */}
      <main className="relative z-10 mx-auto w-[92%] max-w-3xl pt-20 sm:pt-24 pb-20 space-y-6 sm:space-y-7">

        {/* 1. NOVO TOPO DA PÁGINA */}
        <div className="text-center space-y-3.5 pt-2 sm:pt-4">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-red-500/40 bg-red-950/40 px-3.5 py-1 text-xs font-black tracking-wider text-red-400 uppercase backdrop-blur-xl shadow-md">
            <Sparkles className="size-3.5 text-red-400" />
            <span>TESTE GRÁTIS DE 3 DIAS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] max-w-xl mx-auto leading-tight">
            Teste o UniTV Pro <span className="text-red-500">grátis por 3 dias</span>
          </h1>

          <p className="text-sm sm:text-base text-white/90 max-w-md mx-auto leading-relaxed font-semibold">
            Escolha onde você vai assistir e siga os passos abaixo para liberar seu acesso.
          </p>

          {/* 3 PEQUENOS BENEFÍCIOS EM CARDS DISCRETOS EM LINHA */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-extrabold text-white/90 pt-1 pb-1">
            <span className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-1.5 backdrop-blur-md">
              <Film className="size-3.5 text-red-500" /> Filmes e séries
            </span>
            <span className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-1.5 backdrop-blur-md">
              <Tv2 className="size-3.5 text-red-500" /> Canais ao vivo
            </span>
            <span className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-1.5 backdrop-blur-md">
              <Clapperboard className="size-3.5 text-red-500" /> Lançamentos e conteúdos exclusivos
            </span>
          </div>

          {/* 7. LINK DISCRETO PARA CONHECER MELHOR A PLATAFORMA */}
          <div className="pt-0.5">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white/90 transition-colors underline underline-offset-4 decoration-white/20 font-medium"
            >
              Quer conhecer melhor antes de testar? Veja tudo que você encontra na plataforma <ChevronRight className="size-3" />
            </Link>
          </div>
        </div>

        {/* 2. ESCOLHA DO DISPOSITIVO */}
        <div className="pt-2 space-y-3 text-center">
          <h2 className="text-lg sm:text-2xl font-black text-white tracking-tight">
            Onde você quer assistir?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
            <button
              type="button"
              onClick={() => setDeviceTab("tv")}
              className={`flex items-center justify-center gap-3 rounded-2xl p-4 sm:p-5 text-sm sm:text-base font-black transition-all cursor-pointer backdrop-blur-md leading-tight min-h-[64px] border ${
                deviceTab === "tv"
                  ? "bg-red-600 text-white shadow-[0_0_25px_rgba(220,38,38,0.7)] border-white/40 scale-[1.02]"
                  : "bg-white/[0.06] text-white/80 hover:text-white hover:bg-white/15 border-white/15"
              }`}
            >
              <Tv className="size-6 text-white shrink-0" />
              <span>Smart TV / TV Box / Projetor Android</span>
            </button>

            <button
              type="button"
              onClick={() => setDeviceTab("mobile")}
              className={`flex items-center justify-center gap-3 rounded-2xl p-4 sm:p-5 text-sm sm:text-base font-black transition-all cursor-pointer backdrop-blur-md leading-tight min-h-[64px] border ${
                deviceTab === "mobile"
                  ? "bg-red-600 text-white shadow-[0_0_25px_rgba(220,38,38,0.7)] border-white/40 scale-[1.02]"
                  : "bg-white/[0.06] text-white/80 hover:text-white hover:bg-white/15 border-white/15"
              }`}
            >
              <Smartphone className="size-6 text-emerald-400 shrink-0" />
              <span>Celular / Tablet Android</span>
            </button>
          </div>
        </div>

        {/* 3. INSTALAÇÃO EM APENAS 3 PASSOS */}
        <div className="rounded-3xl border border-white/20 bg-white/[0.05] backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden p-6 sm:p-8 space-y-6">
          {deviceTab === "tv" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-white/15">
                <DownloaderAppIcon className="size-11" />
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    Instalação na Smart TV, TV Box ou Projetor Android
                  </h3>
                  <p className="text-xs text-white/60 font-medium">Siga os 3 passos simples abaixo:</p>
                </div>
              </div>

              <div className="space-y-5">
                {/* PASSO 1 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="shrink-0 flex size-8 items-center justify-center rounded-xl bg-red-600 text-white font-mono text-sm font-black shadow-md border border-white/20">
                    1
                  </span>
                  <div className="space-y-1 pt-0.5">
                    <h4 className="text-sm sm:text-base font-black text-white">
                      Passo 1: Abra a Play Store e instale o aplicativo Downloader.
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed font-medium">
                      Procure por "Downloader" na loja da sua TV e clique em instalar.
                    </p>
                  </div>
                </div>

                {/* PASSO 2 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30">
                  <span className="shrink-0 flex size-8 items-center justify-center rounded-xl bg-emerald-600 text-white font-mono text-sm font-black shadow-md border border-white/20">
                    2
                  </span>
                  <div className="space-y-2 pt-0.5 w-full">
                    <h4 className="text-sm sm:text-base font-black text-white">
                      Passo 2: Abra o Downloader e digite o código:
                    </h4>
                    <CodeCopyBox code="9884830" />
                  </div>
                </div>

                {/* PASSO 3 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="shrink-0 flex size-8 items-center justify-center rounded-xl bg-red-600 text-white font-mono text-sm font-black shadow-md border border-white/20">
                    3
                  </span>
                  <div className="space-y-1 pt-0.5">
                    <h4 className="text-sm sm:text-base font-black text-white">
                      Passo 3: Baixe o aplicativo, instale e abra.
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-400 leading-relaxed font-black">
                      Depois disso, o teste grátis estará disponível no aplicativo.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. VÍDEO DO TUTORIAL (POSICIONADO APÓS OS 3 PASSOS) */}
              <div className="mt-8 pt-6 border-t border-white/15 space-y-3">
                <div className="text-center space-y-1">
                  <h4 className="text-base sm:text-lg font-black text-white">
                    Prefere assistir ao passo a passo?
                  </h4>
                  <p className="text-xs text-white/60 font-medium">
                    Veja o tutorial completo de instalação.
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/20 bg-zinc-900 shadow-md max-w-xl mx-auto">
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
              </div>
            </div>
          )}

          {deviceTab === "mobile" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-white/15">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-black font-bold shadow-md">
                  <Smartphone className="size-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    Instalação no Celular ou Tablet Android
                  </h3>
                  <p className="text-xs text-white/60 font-medium">Siga os passos rápidos abaixo:</p>
                </div>
              </div>

              <div className="space-y-5">
                {/* PASSO 1 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="shrink-0 flex size-8 items-center justify-center rounded-xl bg-red-600 text-white font-mono text-sm font-black shadow-md border border-white/20">
                    1
                  </span>
                  <div className="space-y-2 pt-0.5 w-full">
                    <h4 className="text-sm sm:text-base font-black text-white">
                      Passo 1: Baixe o aplicativo oficial UniTV Pro
                    </h4>
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
                      <a
                        href={APK_MEDIAFIRE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 my-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-3.5 text-sm font-black text-white transition-all shadow-md border border-emerald-400/30 cursor-pointer active:scale-95"
                      >
                        <Download className="size-4 animate-bounce" />
                        BAIXAR APK UNITV PRO (DIRETO)
                      </a>
                    )}
                  </div>
                </div>

                {/* PASSO 2 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="shrink-0 flex size-8 items-center justify-center rounded-xl bg-red-600 text-white font-mono text-sm font-black shadow-md border border-white/20">
                    2
                  </span>
                  <div className="space-y-1 pt-0.5">
                    <h4 className="text-sm sm:text-base font-black text-white">
                      Passo 2: Abra o arquivo baixado e confirme a instalação.
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed font-medium">
                      Caso o celular solicite permissão para fontes desconhecidas, clique em permitir.
                    </p>
                  </div>
                </div>

                {/* PASSO 3 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="shrink-0 flex size-8 items-center justify-center rounded-xl bg-emerald-600 text-white font-mono text-sm font-black shadow-md border border-white/20">
                    3
                  </span>
                  <div className="space-y-2 pt-0.5 w-full">
                    <h4 className="text-sm sm:text-base font-black text-white">
                      Passo 3: Ou use o Downloader com o código:
                    </h4>
                    <CodeCopyBox code="9884830" />
                    <p className="text-xs sm:text-sm text-emerald-400 leading-relaxed font-black">
                      Depois disso, o teste grátis estará disponível no aplicativo.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. VÍDEO DO TUTORIAL (POSICIONADO APÓS OS PASSOS) */}
              <div className="mt-8 pt-6 border-t border-white/15 space-y-3">
                <div className="text-center space-y-1">
                  <h4 className="text-base sm:text-lg font-black text-white">
                    Prefere assistir ao passo a passo?
                  </h4>
                  <p className="text-xs text-white/60 font-medium">
                    Veja o tutorial completo de instalação.
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/20 bg-zinc-900 shadow-md max-w-xl mx-auto">
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
              </div>
            </div>
          )}
        </div>

        {/* 5. CTA APÓS A INSTALAÇÃO */}
        <div className="rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-emerald-950/60 via-zinc-900/90 to-zinc-950 p-6 sm:p-8 text-center space-y-3 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
          <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-1">
            <CheckCircle2 className="size-6" />
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Já instalou o aplicativo?
          </h3>

          <p className="text-sm sm:text-base text-emerald-300 font-extrabold max-w-md mx-auto leading-relaxed">
            Abra o app e aproveite seu teste grátis por 3 dias.
          </p>
        </div>

        {/* 6. PLANOS */}
        <div id="plano-mensal" className="rounded-3xl border border-white/20 bg-white/[0.05] backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="p-6 sm:p-10 text-center space-y-5">
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-black text-emerald-400 uppercase tracking-wider block bg-emerald-500/10 py-1.5 px-4 rounded-full border border-emerald-500/30 max-w-lg mx-auto">
                Gostou da experiência? Continue assistindo sem interrupções.
              </span>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight pt-1">
                Faça parte da família <span className="text-red-500">UniTV Pro</span> hoje mesmo.
              </h2>
              <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto leading-relaxed font-medium">
                Planos pré-pagos e sem fidelidade com 7 dias de garantia de reembolso.
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
                  ? "2 Telas simultâneas"
                  : "1 Tela simultânea",
                "Milhares de Filmes & Séries",
                "Lançamentos semanais e produções exclusivas",
                "Canais Ao Vivo & Esportes sem travar (4K & Full HD)",
                "Animes, Doramas & Novelas Turcas atualizadas",
                "Programação Infantil & Desenhos Dublados",
                "Guia de Programação EPG & Replay de 7 dias",
                "Garantia incondicional de reembolso por 7 dias",
                "Sem fidelidade ou multa (Cancele quando quiser)",
              ].map((f, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-white/90 font-medium leading-relaxed">{f}</span>
                </div>
              ))}
            </div>

            {/* BOTÃO ASSINATURA DINÂMICO */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => handleOpenPlanModal(planTab)}
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
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-center text-xs sm:text-sm font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 rounded-xl p-3.5 max-w-lg mx-auto shadow-sm">
              <CheckCircle2 className="size-4.5 shrink-0 text-emerald-400" />
              <span>Assim que o pagamento for confirmado, você recebe no seu e-mail o código de recarga ou os dados de acesso à sua conta.</span>
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
          <div className="p-4 sm:p-8 bg-white/[0.02] border-t border-white/15 backdrop-blur-xl text-center">
            <div className="mb-4 sm:mb-6">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-extrabold tracking-wider sm:tracking-widest text-emerald-400 uppercase backdrop-blur-md shadow-sm">
                <ShieldCheck className="size-3 sm:size-3.5" /> Compra 100% Segura &amp; Protegida
              </span>
              <h3 className="mt-1.5 sm:mt-2 text-sm sm:text-xl font-black text-white">
                Ambiente seguro com <span className="text-emerald-400">garantia total</span>
              </h3>
            </div>

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
                  <div className={`flex size-7 sm:size-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-white/[0.06] border border-white/10 ${c.color} shadow-inner transition-transform group-hover:scale-110 mb-0.5`}>
                    <c.icon className="size-3.5 sm:size-4.5" />
                  </div>
                  <p className="text-[11px] sm:text-xs font-black text-white leading-tight break-words w-full">{c.title}</p>
                  <p className="text-[9.5px] sm:text-[10px] text-white/50 leading-tight font-medium break-words w-full">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>

      <PlanPurchaseModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
        plan={selectedPlanForModal}
      />
    </div>
  );
}
