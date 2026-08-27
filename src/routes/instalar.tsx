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
  ArrowRight,
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
          "Passo a passo simples e rápido para instalar o UniTV Pro e ativar seus 3 dias de teste grátis no seu aparelho Android, TV Box, FireTV, Celular ou Computador.",
      },
    ],
  }),
  component: InstalarPage,
});

// EXCLUSIVAMENTE FILMES LANÇAMENTOS 2026 DE TERROR (MARTYRS, TERRIFIER 3, SMILE 2, ALIEN, SUBSTANCE, NOSFERATU, HERETIC)
const HORROR_2026_POSTERS = [
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

const DOWNLOADER_PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=com.esaba.downloader";
const NTDOWN_PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=link.ntdev.ntdw";
const LDPLAYER_WEBSITE_URL = "https://pt.ldplayer.net/";
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

function AndroidIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 18c0 .55.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h4v3c0 .55.45 1 1 1s1-.45 1-1v-3h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
    </svg>
  );
}

// 🌟 RETÂNGULO DO CÓDIGO MINIMALISTA E ELEGANTE
function CodeCopyBox({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative overflow-hidden my-3 rounded-2xl p-4 border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 font-mono font-black text-xl">
            <Hash className="size-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/90 block">
              Código de Instalação
            </span>
            <div className="font-mono font-black text-2xl sm:text-3xl tracking-widest text-white leading-tight">
              {code}
            </div>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer ${
            copied
              ? "bg-emerald-400 text-black font-extrabold"
              : "bg-emerald-600 hover:bg-emerald-500 text-white"
          }`}
        >
          {copied ? (
            <>
              <Check className="size-4 stroke-[3]" /> Copiado!
            </>
          ) : (
            <>
              <Copy className="size-4" /> Copiar Código
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
    /* 🔴 GRADIENTE ELEGANTE DE VERMELHO RUBI PARA PRETO OBSIDIANA NO FUNDO */
    <div className="relative min-h-screen bg-gradient-to-b from-[#34040a] via-[#120205] to-[#070707] text-white overflow-x-hidden">
      {/* LUZES AMBIENTAIS SUAVES */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-red-600/15 blur-[160px] z-0" />
      <div className="pointer-events-none fixed bottom-1/4 right-10 size-[500px] rounded-full bg-rose-900/10 blur-[140px] z-0" />

      {/* BARRA PROMOCIONAL DO TOPO */}
      <div className="fixed inset-x-0 top-0 z-[60]">
        <PromoBanner />
      </div>

      {/* HEADER COMPACTO E MINIMALISTA */}
      <header className="fixed inset-x-0 top-8 z-50 transition-all duration-300">
        <div className="glass mx-auto mt-2 flex w-[92%] max-w-5xl items-center justify-between rounded-full px-5 py-2.5 border border-white/10 backdrop-blur-xl bg-black/80">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="relative flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-rose-700 shadow-md">
              <svg className="size-4 fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="font-display text-base font-black tracking-wider text-white">
              UniTV <span className="text-red-500">Pro</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-white/70">
            <Link to="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <Link to="/catalogo" className="hover:text-white transition-colors">
              Catálogo
            </Link>
            <Link to="/instalar" className="text-red-500 font-bold">
              Teste Grátis
            </Link>
            <Link to="/suporte" className="hover:text-white transition-colors">
              Suporte
            </Link>
          </nav>

          <a
            href="#plano-mensal"
            className="btn-cta px-3.5 py-1.5 text-[11px] font-bold tracking-wide uppercase shadow-sm"
          >
            Assinar
          </a>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL MINIMALISTA */}
      <main className="relative z-10 mx-auto w-[92%] max-w-3xl pt-32 sm:pt-36 pb-20 space-y-8">

        {/* HERO TITLE MINIMALISTA */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/40 px-4 py-1.5 text-xs font-bold tracking-wider text-red-400 uppercase backdrop-blur-md">
            <Gift className="size-3.5 text-red-400" />
            <span>3 Dias de Teste Grátis</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md">
            Como instalar o <span className="text-red-500">UniTV Pro</span>
          </h1>
          <p className="text-xs sm:text-base text-white/70 max-w-md mx-auto leading-relaxed font-normal">
            Escolha seu dispositivo abaixo para ver o passo a passo de ativação.
          </p>
        </div>

        {/* CONTAINER PRINCIPAL MINIMALISTA DE INSTALAÇÃO */}
        <div className="rounded-3xl border border-white/10 bg-[#0e0e0e]/95 backdrop-blur-xl shadow-2xl overflow-hidden">

          {/* ABAS DE DISPOSITIVO CLEAN */}
          <div className="p-3 sm:p-4 bg-black/40 border-b border-white/10">
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setDeviceTab("tv")}
                className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  deviceTab === "tv"
                    ? "bg-red-600 text-white shadow-md"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Tv className="size-4" />
                <span>TV / Box</span>
              </button>

              <button
                onClick={() => setDeviceTab("mobile")}
                className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  deviceTab === "mobile"
                    ? "bg-red-600 text-white shadow-md"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Smartphone className="size-4" />
                <span>Celular</span>
              </button>

              <button
                onClick={() => setDeviceTab("pc")}
                className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  deviceTab === "pc"
                    ? "bg-red-600 text-white shadow-md"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Monitor className="size-4" />
                <span>Computador</span>
              </button>
            </div>
          </div>

          {/* PASSOS TUTORIAL CLEAN */}
          <div className="p-6 sm:p-8 space-y-6">

            {deviceTab === "tv" && (
              <>
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <DownloaderAppIcon />
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-white">Smart TV &amp; TV Box</h2>
                    <p className="text-xs text-white/50">Android TV, FireTV Stick, Xiaomi Mi Stick</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    <div className="flex items-center gap-2">
                      <Play className="size-3.5 text-red-500 fill-red-500" />
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

                <ol className="space-y-4 pt-1">
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600/20 text-red-400 font-mono text-xs font-bold">
                      01
                    </span>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed pt-0.5">
                      Abra a loja de aplicativos da Smart TV (Play Store) e instale o app{" "}
                      <a href={DOWNLOADER_PLAYSTORE_URL} target="_blank" rel="noopener noreferrer" className="text-red-400 font-bold underline">
                        Downloader <ExternalLink className="inline size-3" />
                      </a>.
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600/20 text-red-400 font-mono text-xs font-bold">
                      02
                    </span>
                    <div className="text-xs sm:text-sm text-white/80 leading-relaxed pt-0.5 w-full">
                      Abra o app <strong>Downloader</strong> e digite o código de instalação:
                      <CodeCopyBox code="1089401" />
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600/20 text-red-400 font-mono text-xs font-bold">
                      03
                    </span>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed pt-0.5">
                      Clique em <strong>"Go"</strong> para baixar e toque em instalar quando concluir.
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600/20 text-red-400 font-mono text-xs font-bold">
                      04
                    </span>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed pt-0.5">
                      Permita a instalação e abra o UniTV Pro para aproveitar seus 3 dias grátis!
                    </p>
                  </li>
                </ol>
              </>
            )}

            {deviceTab === "mobile" && (
              <>
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600/20 text-emerald-400 font-bold">
                    <AndroidIcon className="size-5" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-white">Celular Android</h2>
                    <p className="text-xs text-white/50">Download direto do APK oficial</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs font-bold text-white/80">
                    <div className="flex items-center gap-2">
                      <Play className="size-3.5 text-red-500 fill-red-500" />
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

                <ol className="space-y-4 pt-1">
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600/20 text-red-400 font-mono text-xs font-bold">
                      01
                    </span>
                    <div className="text-xs sm:text-sm text-white/80 leading-relaxed pt-0.5 w-full">
                      Toque no botão abaixo para baixar o instalador oficial:
                      <a
                        href={APK_MEDIAFIRE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 my-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-3 text-xs font-bold text-white transition-colors"
                      >
                        <Download className="size-4 animate-bounce" />
                        BAIXAR APK UNITV PRO (DIRETO)
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600/20 text-red-400 font-mono text-xs font-bold">
                      02
                    </span>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed pt-0.5">
                      Abra a pasta <strong>Downloads</strong> e toque no arquivo <strong>unitv_RS-NPWN.apk</strong>.
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600/20 text-red-400 font-mono text-xs font-bold">
                      03
                    </span>
                    <div className="text-xs sm:text-sm text-white/80 leading-relaxed pt-0.5 w-full">
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
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 font-black text-xs">
                    LD
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-white">Computador / PC</h2>
                    <p className="text-xs text-white/50">Via emulador Android leve (LDPlayer)</p>
                  </div>
                </div>

                <ol className="space-y-4 pt-1">
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600/20 text-red-400 font-mono text-xs font-bold">
                      01
                    </span>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed pt-0.5">
                      Baixe o emulador{" "}
                      <a href={LDPLAYER_WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="text-red-400 font-bold underline">
                        LDPlayer <ExternalLink className="inline size-3" />
                      </a>{" "}
                      no seu computador e faça a instalação.
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="shrink-0 flex size-6 items-center justify-center rounded-full bg-red-600/20 text-red-400 font-mono text-xs font-bold">
                      02
                    </span>
                    <div className="text-xs sm:text-sm text-white/80 leading-relaxed pt-0.5 w-full">
                      Abra o Downloader no emulador e coloque o código:
                      <CodeCopyBox code="1089401" />
                    </div>
                  </li>
                </ol>
              </>
            )}

          </div>

          {/* RIBBON VERDE CLEAN */}
          <div className="bg-emerald-950/40 p-3.5 border-t border-emerald-500/20 text-center flex items-center justify-center gap-2">
            <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
            <span className="text-xs font-bold text-white/90">
              Seu teste grátis de 3 dias está liberado 🎉
            </span>
          </div>

          {/* SEÇÃO DE COMPRA MINIMALISTA "GOSTOU DO QUE VIU?" */}
          <div id="plano-mensal" className="p-6 sm:p-10 border-t border-white/10 bg-[#0a0a0a] text-center space-y-6">

            <div className="space-y-2">
              <span className="text-[11px] font-bold text-red-400 uppercase tracking-widest block">
                Plano Mensal • Acesso Ilimitado
              </span>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Gostou do que viu?
              </h2>
              <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                Continue assistindo a todos os seus filmes, séries, esportes e canais ao vivo no UniTV Pro sem interrupções!
              </p>
            </div>

            {/* 🎬 ESTEIRA HORIZONTAL DE CAPINHAS DE TERROR 2026 COM FADE SUAVE NAS BORDAS */}
            <div className="relative overflow-hidden py-2 my-2 max-w-xl mx-auto rounded-2xl">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

              <div className="flex w-max gap-3 animate-marquee">
                {HORROR_2026_POSTERS.concat(HORROR_2026_POSTERS).map((p, i) => (
                  <img
                    key={`p-marquee-${i}`}
                    src={img(p, "w185")}
                    alt=""
                    className="h-28 w-19 rounded-xl object-cover shadow-lg border border-white/15 shrink-0 transition-transform hover:scale-105"
                  />
                ))}
              </div>
            </div>

            {/* PREÇO EXIBIDO DE FORMA LIMPA */}
            <div className="py-1">
              <div className="flex items-baseline justify-center gap-2 flex-nowrap whitespace-nowrap">
                <span className="text-xs font-medium text-white/60">Apenas</span>
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  R$ 34,99
                </span>
                <span className="text-xs font-medium text-white/70">/mês</span>
              </div>
            </div>

            {/* LISTA DE BENEFÍCIOS CLEAN */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left max-w-md mx-auto py-2 border-t border-white/10">
              {[
                "1 Tela simultânea",
                "Catálogo de filmes e séries 2026",
                "Lançamentos semanais de terror",
                "Canais Ao Vivo & Esportes 4K",
                "Sem fidelidade (Cancele quando quiser)",
                "Garantia de reembolso de 7 dias",
              ].map((f, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-white/80">{f}</span>
                </div>
              ))}
            </div>

            {/* BOTÃO ASSINATURA MINIMALISTA */}
            <div className="pt-2">
              <a
                href="https://pay.braip.co/ref?pl=plajge84&ck=che7eo0g&af=afixjm3pn2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 px-8 py-4 text-xs sm:text-sm font-black text-white shadow-lg transition-all hover:scale-105 cursor-pointer w-full sm:w-auto"
              >
                <Zap className="size-4 fill-current" />
                <span>QUERO CONTINUAR COM O ACESSO</span>
                <ArrowRight className="size-4" />
              </a>
            </div>

            {/* BADGES SEGURANÇA */}
            <div className="flex items-center justify-center gap-4 text-[11px] font-medium text-white/60 pt-2 border-t border-white/10">
              <span className="flex items-center gap-1">
                <ShieldCheck className="size-3.5 text-emerald-400" /> Garantia 7 dias
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CreditCard className="size-3.5 text-blue-400" /> Pix ou cartão
              </span>
            </div>

          </div>

          {/* SUPORTE RODAPÉ CLEAN */}
          <div className="p-4 bg-black/40 border-t border-white/10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <HelpCircle className="size-4 text-emerald-400 shrink-0" />
              <p className="text-xs text-white/70">Dúvidas na instalação? Fale com nosso suporte via WhatsApp.</p>
            </div>
            <a
              href="https://wa.me/5561984016006?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20para%20instalar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition-colors shrink-0"
            >
              <WhatsAppIcon className="size-3.5 fill-current" />
              SUPORTE WHATSAPP
            </a>
          </div>

        </div>

      </main>
    </div>
  );
}
