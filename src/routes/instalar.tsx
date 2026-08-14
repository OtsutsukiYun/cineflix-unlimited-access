import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Smartphone, Hash, Sparkles, ArrowLeft, ShieldCheck, Zap, ExternalLink } from "lucide-react";
import { img } from "@/data/catalog";

export const Route = createFileRoute("/instalar")({
  head: () => ({
    meta: [
      { title: "Como Instalar UniTV Pro & Ativar Teste Grátis de 3 Dias" },
      {
        name: "description",
        content:
          "Passo a passo para instalar o UniTV Pro na sua Smart TV Android, TV Box, Mi Stick Xiaomi, FireTV Amazon, projetor Android, celular ou tablet e ativar 3 dias grátis.",
      },
    ],
  }),
  component: InstalarPage,
});

const BACKDROP = "/o0jkkpcN81QqSl8DMLScBCXyUH9.jpg";

function DownloaderAppIcon({ className = "size-16 sm:size-20" }: { className?: string }) {
  return (
    <div className={`relative flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#f97316] via-[#ea580c] to-[#c2410c] p-3 shadow-[0_10px_30px_rgba(249,115,22,0.5)] border-2 border-orange-400/60 ${className}`}>
      <div className="flex flex-col items-center justify-center text-white text-center">
        <Download className="size-8 sm:size-10 stroke-[2.8] text-white drop-shadow-md" />
        <span className="text-[9px] sm:text-[10px] font-black tracking-tighter uppercase mt-1 text-white leading-none">DOWNLOADER</span>
      </div>
    </div>
  );
}

function NtDownAppIcon({ className = "size-16 sm:size-20" }: { className?: string }) {
  return (
    <div className={`relative flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#0284c7] via-[#0369a1] to-[#075985] p-3 shadow-[0_10px_30px_rgba(2,132,199,0.5)] border-2 border-sky-400/60 ${className}`}>
      <div className="flex flex-col items-center justify-center text-white text-center">
        <Download className="size-8 sm:size-10 stroke-[2.8] text-white drop-shadow-md" />
        <span className="text-[9px] sm:text-[10px] font-black tracking-tighter uppercase mt-1 text-white leading-none">NTDOWN</span>
      </div>
    </div>
  );
}

export function InstalarPage() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-white overflow-x-hidden">
      {/* FUNDO CINEMATOGRÁFICO COM BRILHO VERDE ESMERALDA */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <img
          src={img(BACKDROP, "w1280")}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-12 blur-[3px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/75 via-[#080808]/88 to-[#080808]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto w-[94%] max-w-3xl py-10 sm:py-16">
        {/* Topo Navegação */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-white/70 hover:text-white transition-colors bg-white/5 border border-white/10 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="size-3.5" /> Voltar ao site
          </Link>
          <a
            href="/#planos"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-300 hover:text-emerald-200 transition-colors bg-emerald-950/50 border border-emerald-500/40 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.2)]"
          >
            <Zap className="size-3.5" /> Ver Planos & Assinar
          </a>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/50 px-4 py-2 text-xs font-extrabold tracking-wider text-emerald-300 uppercase mb-4 shadow-sm">
            <Download className="size-3.5 text-emerald-400" /> Guia Simples de Instalação
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-3">
            Como instalar o <span className="text-emerald-400">UniTV Pro</span>
          </h1>
          <p className="text-sm sm:text-base text-white/75 max-w-lg mx-auto leading-relaxed font-medium">
            Siga os passos abaixo no seu aparelho Android e libere <strong className="text-emerald-300">3 dias de teste grátis</strong> sem precisar cadastrar cartão!
          </p>
          <p className="mt-2 text-xs text-white/40">
            ✅ Compatível com Smart TV Android, TV Box, Mi Stick Xiaomi, FireTV Amazon, Celular Android e Tablet Android.
          </p>
        </div>

        {/* CARD INFORMATIVO ESMERALDA DO TESTE GRÁTIS */}
        <div className="mb-8 rounded-3xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/50 via-black/80 to-emerald-950/30 p-6 sm:p-7 backdrop-blur-sm text-center shadow-[0_0_30px_rgba(16,185,129,0.15)]">
          <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 mb-3">
            <Sparkles className="size-6 text-emerald-400" />
          </div>
          <h2 className="text-xl font-black text-white mb-2">🎁 Como funciona o Teste Grátis de 3 Dias?</h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl mx-auto font-medium">
            Assim que você instalar e abrir o app pela primeira vez no seu dispositivo Android, os <strong className="text-emerald-300 font-bold">3 dias de teste grátis são liberados automaticamente</strong> na tela. Não precisa informar cartão nem dados bancários!
          </p>
        </div>

        {/* MÉTODOS DE INSTALAÇÃO */}
        <div className="space-y-6">
          {/* MÉTODO 1 — DOWNLOADER */}
          <div className="rounded-3xl border border-white/12 bg-white/4 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            <div className="flex items-center justify-between gap-4 mb-7 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <DownloaderAppIcon className="size-14 sm:size-16" />
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    Método 1: App Downloader
                  </h2>
                  <p className="text-xs text-white/50 mt-0.5">Para Smart TV Android, TV Box, Mi Stick e FireTV</p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-orange-500/15 border border-orange-500/30 px-3 py-1.5 text-[11px] font-extrabold text-orange-300 shrink-0">
                🍊 App Laranja
              </span>
            </div>

            <ol className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-black">
                  1
                </div>
                <div className="text-sm text-white/80 leading-relaxed pt-0.5 w-full">
                  Vá na loja de aplicativos da sua TV ou TV Box e procure pelo aplicativo{" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.esaba.downloader&hl=pt_BR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-orange-400 font-black underline underline-offset-2 hover:text-orange-300 transition-colors"
                  >
                    Downloader <ExternalLink className="size-3" />
                  </a>.
                  
                  {/* CARD GRANDE DO ÍCONE DO APLICATIVO PARA NÃO CONFUNDIR */}
                  <div className="mt-3 flex items-center gap-4 sm:gap-5 rounded-2xl border-2 border-orange-500/40 bg-orange-950/30 p-4 sm:p-5 shadow-[0_0_25px_rgba(249,115,22,0.2)]">
                    <DownloaderAppIcon className="size-16 sm:size-20" />
                    <div>
                      <span className="inline-block text-[10px] font-black uppercase tracking-wider text-orange-400 bg-orange-500/20 border border-orange-500/40 px-2 py-0.5 rounded-md mb-1">
                        🎯 ATENÇÃO AO ÍCONE
                      </span>
                      <h4 className="font-black text-white text-sm sm:text-base">Procure exatamente por este ícone laranja</h4>
                      <p className="text-xs text-white/60 mt-0.5">Nome na loja: <strong>Downloader by AFTVnews</strong></p>
                    </div>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-black">
                  2
                </div>
                <div className="text-sm text-white/80 leading-relaxed pt-0.5">
                  Abra o <strong className="text-white">Downloader</strong> e na barra de endereço inicial digite este código:
                  <div className="mt-3 flex items-center gap-3">
                    <div className="inline-flex items-center gap-2 rounded-2xl bg-emerald-950/80 border-2 border-emerald-400/60 px-5 py-2.5 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                      <Hash className="size-5 text-emerald-400" />
                      <span className="font-mono font-black text-emerald-300 text-2xl tracking-widest">291561</span>
                    </div>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-black">
                  3
                </div>
                <div className="text-sm text-white/80 leading-relaxed pt-0.5">
                  Clique em <strong className="text-white">"Go"</strong>, aguarde o download e depois selecione <strong className="text-white">"Instalar"</strong>. Pronto! Abra o UniTV Pro e aproveite seus 3 dias grátis.
                </div>
              </li>
            </ol>
          </div>

          {/* MÉTODO 2 — NTDOWN */}
          <div className="rounded-3xl border border-white/12 bg-white/4 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            <div className="flex items-center justify-between gap-4 mb-7 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <NtDownAppIcon className="size-14 sm:size-16" />
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    Método 2: App ntDown
                  </h2>
                  <p className="text-xs text-white/50 mt-0.5">Via Play Store (celular e tablet Android)</p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-sky-500/15 border border-sky-500/30 px-3 py-1.5 text-[11px] font-extrabold text-sky-300 shrink-0">
                🔹 App ntDown
              </span>
            </div>

            <ol className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-black">
                  1
                </div>
                <div className="text-sm text-white/80 leading-relaxed pt-0.5 w-full">
                  Abra a <strong className="text-white">Play Store</strong> no seu celular ou tablet Android e procure por <strong className="text-sky-300 font-bold">"ntDown"</strong>.
                  
                  {/* CARD GRANDE DO ÍCONE DO APLICATIVO PARA NÃO CONFUNDIR */}
                  <div className="mt-3 flex items-center gap-4 sm:gap-5 rounded-2xl border-2 border-sky-500/40 bg-sky-950/30 p-4 sm:p-5 shadow-[0_0_25px_rgba(2,132,199,0.2)]">
                    <NtDownAppIcon className="size-16 sm:size-20" />
                    <div>
                      <span className="inline-block text-[10px] font-black uppercase tracking-wider text-sky-300 bg-sky-500/20 border border-sky-500/40 px-2 py-0.5 rounded-md mb-1">
                        🎯 ATENÇÃO AO ÍCONE
                      </span>
                      <h4 className="font-black text-white text-sm sm:text-base">Procure exatamente por este ícone azul</h4>
                      <p className="text-xs text-white/60 mt-0.5">Nome na loja: <strong>ntDown</strong></p>
                    </div>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-black">
                  2
                </div>
                <div className="text-sm text-white/80 leading-relaxed pt-0.5">
                  Abra o aplicativo <strong className="text-white">ntDown</strong> e insira o código:
                  <div className="mt-3 flex items-center gap-3">
                    <div className="inline-flex items-center gap-2 rounded-2xl bg-emerald-950/80 border-2 border-emerald-400/60 px-5 py-2.5 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                      <Hash className="size-5 text-emerald-400" />
                      <span className="font-mono font-black text-emerald-300 text-2xl tracking-widest">96919</span>
                    </div>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-black">
                  3
                </div>
                <div className="text-sm text-white/80 leading-relaxed pt-0.5">
                  Conclua a instalação e comece a assistir imediatamente.
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* BLOCO DE ASSINATURA DE PLANOS */}
        <div className="mt-10 rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/40 via-black to-emerald-950/30 p-8 text-center shadow-[0_0_40px_rgba(16,185,129,0.15)]">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3.5 py-1 text-xs font-black text-emerald-300 uppercase tracking-wider mb-3">
            <Zap className="size-3.5 text-emerald-400" /> Recarga Definitiva
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">Já testou ou quer contratar direto?</h3>
          <p className="text-sm text-white/70 max-w-md mx-auto mb-6 font-medium">
            Confira nossos planos de recarga Mensal, Trimestral e Anual com garantia de 7 dias e ativação imediata.
          </p>
          <a
            href="/#planos"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-sm font-black text-white shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:scale-[1.03] transition-all"
          >
            <ShieldCheck className="size-5" />
            VER PLANOS DE RECARGA
          </a>
        </div>

        {/* CTA SUPORTE */}
        <div className="mt-8 rounded-2xl border border-green-800/40 bg-green-950/20 p-6 text-center">
          <p className="text-sm text-white/70 mb-4 font-medium">
            Precisa de ajuda para instalar? Nosso suporte te orienta no WhatsApp:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/5561984016006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 text-sm font-bold text-white hover:bg-green-600 transition-colors"
            >
              <Smartphone className="size-4" />
              (61) 9 8401-6006
            </a>
            <a
              href="https://wa.me/5561982743140"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-800/50 border border-green-700/40 px-6 py-3 text-sm font-bold text-white hover:bg-green-700/50 transition-colors"
            >
              <Smartphone className="size-4" />
              (61) 9 8274-3140
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
