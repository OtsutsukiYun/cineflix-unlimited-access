import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Smartphone, Hash, Sparkles, ArrowLeft, ShieldCheck, Zap } from "lucide-react";
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

const BACKDROP = "/o0jkkpcN81QqSl8DMLScBCXyUH9.jpg"; // Evil Dead Burn

function InstalarPage() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-white overflow-x-hidden">
      {/* FUNDO CINEMATOGRÁFICO */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <img
          src={img(BACKDROP, "w1280")}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-15 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-[#080808]/85 to-[#080808]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.18)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto w-[94%] max-w-3xl py-12 sm:py-20">
        {/* Voltar ao site */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-white/60 hover:text-white transition-colors bg-white/5 border border-white/10 px-3.5 py-2 rounded-full"
          >
            <ArrowLeft className="size-3.5" /> Voltar ao site
          </Link>
          <a
            href="/#planos"
            className="inline-flex items-center gap-1.5 text-xs font-black text-red-400 hover:text-red-300 transition-colors bg-red-950/40 border border-red-500/30 px-3.5 py-2 rounded-full"
          >
            <Zap className="size-3.5" /> Ver Planos & Assinar
          </a>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/40 px-4 py-2 text-xs font-bold tracking-wider text-red-400 uppercase mb-4">
            <Download className="size-3.5" /> Guia de Instalação & Teste Grátis
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Como instalar o{" "}
            <span className="text-red-500">UniTV Pro</span>
          </h1>
          <p className="text-sm sm:text-base text-white/65 max-w-lg mx-auto leading-relaxed">
            Siga os passos abaixo no seu dispositivo Android para liberar <strong className="text-red-400">3 dias de teste grátis</strong> sem cartão de crédito!
          </p>
          <p className="mt-2 text-xs text-white/35">
            ⚠️ Compatível com Smart TV Android, TV Box, Mi Stick, FireTV, Celular Android e Tablet Android.
          </p>
        </div>

        {/* CARD INFORMATIVO DO TESTE GRÁTIS */}
        <div className="mb-8 rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-950/50 via-black/80 to-red-950/30 p-6 sm:p-7 backdrop-blur-sm text-center">
          <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-red-600/20 border border-red-500/40 text-red-400 mb-3">
            <Sparkles className="size-6" />
          </div>
          <h2 className="text-xl font-black text-white mb-2">🎁 Como funciona o Teste Grátis de 3 Dias?</h2>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-xl mx-auto">
            Ao instalar o aplicativo no seu aparelho Android e abri-lo pela primeira vez, os <strong className="text-white">3 dias de teste grátis são liberados automaticamente</strong> na tela inicial. Não precisa cadastrar cartão de crédito!
          </p>
        </div>

        {/* MÉTODOS DE INSTALAÇÃO */}
        <div className="space-y-6">
          {/* MÉTODO 1 */}
          <div className="rounded-3xl border border-white/10 bg-white/4 p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-7">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-800 font-black text-xl text-white shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                1
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black">Método 1: App Downloader</h2>
                <p className="text-xs text-white/45 mt-0.5">Para Smart TV Android, TV Box, FireTV e TV Stick</p>
              </div>
            </div>

            <ol className="space-y-5">
              {[
                {
                  n: "1",
                  content: (
                    <>
                      Vá na loja de aplicativos da sua TV ou TV Box e baixe o aplicativo <strong className="text-white">"Downloader"</strong> (ícone laranja).
                    </>
                  ),
                },
                {
                  n: "2",
                  content: (
                    <>
                      Abra o <strong className="text-white">Downloader</strong> e na barra de pesquisa inicial digite o código:
                      <span className="mt-2 flex items-center gap-2">
                        <span className="inline-flex items-center gap-2 rounded-xl bg-red-600/20 border border-red-500/40 px-4 py-2 font-black text-red-300 text-xl tracking-widest">
                          <Hash className="size-5" /> 291561
                        </span>
                      </span>
                    </>
                  ),
                },
                {
                  n: "3",
                  content: "Aguarde o download e clique em 'Instalar'. Abra o UniTV Pro e aproveite seus 3 dias de teste grátis!",
                },
              ].map((step) => (
                <li key={step.n} className="flex items-start gap-4">
                  <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-red-600/15 border border-red-500/25 text-red-400 text-xs font-black">
                    {step.n}
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed pt-0.5">{step.content}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* MÉTODO 2 */}
          <div className="rounded-3xl border border-white/10 bg-white/4 p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-7">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 font-black text-xl text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                2
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black">Método 2: App NtDown</h2>
                <p className="text-xs text-white/45 mt-0.5">Via Play Store (celular e tablet Android)</p>
              </div>
            </div>

            <ol className="space-y-5">
              {[
                {
                  n: "1",
                  content: (
                    <>
                      Abra a <strong className="text-white">Play Store</strong> no seu celular ou tablet e baixe o aplicativo <strong className="text-white">NtDown</strong>.
                    </>
                  ),
                },
                {
                  n: "2",
                  content: (
                    <>
                      Abra o NtDown e insira o código:
                      <span className="mt-2 flex items-center gap-2">
                        <span className="inline-flex items-center gap-2 rounded-xl bg-blue-700/20 border border-blue-600/40 px-4 py-2 font-black text-blue-300 text-xl tracking-widest">
                          <Hash className="size-5" /> 96919
                        </span>
                      </span>
                    </>
                  ),
                },
                {
                  n: "3",
                  content: "Conclua a instalação e abra o app para começar a assistir imediatamente.",
                },
              ].map((step) => (
                <li key={step.n} className="flex items-start gap-4">
                  <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-700/15 border border-blue-600/25 text-blue-400 text-xs font-black">
                    {step.n}
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed pt-0.5">{step.content}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* BLOCO DE ASSINATURA DE PLANOS */}
        <div className="mt-10 rounded-3xl border border-red-500/40 bg-gradient-to-br from-red-950/60 via-black to-red-950/40 p-8 text-center shadow-[0_0_40px_rgba(220,38,38,0.2)]">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600/20 border border-red-500/40 px-3.5 py-1 text-xs font-black text-red-400 uppercase tracking-wider mb-3">
            <Zap className="size-3.5" /> Recarga Definitiva
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">Já testou ou quer contratar direto?</h3>
          <p className="text-sm text-white/65 max-w-md mx-auto mb-6">
            Confira nossos planos de recarga Mensal, Trimestral e Anual com garantia de 7 dias e ativação imediata.
          </p>
          <a
            href="/#planos"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 text-sm font-black text-white shadow-[0_0_25px_rgba(220,38,38,0.6)] hover:scale-[1.03] transition-all"
          >
            <ShieldCheck className="size-5" />
            VER PLANOS DE RECARGA
          </a>
        </div>

        {/* CTA SUPORTE */}
        <div className="mt-8 rounded-2xl border border-green-800/40 bg-green-950/20 p-6 text-center">
          <p className="text-sm text-white/60 mb-4">
            Precisa de ajuda para instalar? Fale com nosso suporte no WhatsApp:
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
