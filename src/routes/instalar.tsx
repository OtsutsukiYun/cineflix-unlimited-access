import { createFileRoute } from "@tanstack/react-router";
import { Download, Smartphone, Hash, ChevronRight } from "lucide-react";
import { img } from "@/data/catalog";

export const Route = createFileRoute("/instalar")({
  head: () => ({
    meta: [
      { title: "Como Instalar UniTV Pro — Smart TV, TV Box e TV Stick" },
      {
        name: "description",
        content:
          "Passo a passo para instalar o UniTV Pro na sua Smart TV Android, TV Box, Mi Stick Xiaomi, FireTV Amazon, projetor Android, celular ou tablet.",
      },
    ],
  }),
  component: InstalarPage,
});

const BACKDROP = "/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg"; // Evil Dead Rise

function InstalarPage() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-white overflow-x-hidden">
      {/* FUNDO CINEMATOGRÁFICO */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <img
          src={img(BACKDROP, "w1280")}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-10 blur-[3px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-[#080808]/85 to-[#080808]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(153,27,27,0.15)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto w-[94%] max-w-3xl py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/40 px-4 py-2 text-xs font-bold tracking-wider text-red-400 uppercase mb-5">
            <Download className="size-3.5" /> Guia de Instalação
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Como instalar o{" "}
            <span className="text-red-500">UniTV Pro</span>
          </h1>
          <p className="text-sm sm:text-base text-white/55 max-w-lg mx-auto leading-relaxed">
            Compatível com <strong className="text-white/80">Smart TV Android</strong>, TV Box, Mi Stick Xiaomi, FireTV Amazon, projetores Android, celular Android e tablets.
          </p>
          <p className="mt-2 text-xs text-white/35">
            ⚠️ Não compatível com PC/Windows, iPhone ou iPad
          </p>
        </div>

        <div className="space-y-6">
          {/* MÉTODO 1 */}
          <div className="rounded-3xl border border-white/10 bg-white/4 p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-7">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-800 font-black text-xl text-white shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                1
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black">Método 1: Downloader</h2>
                <p className="text-xs text-white/45 mt-0.5">Para Smart TV Android e TV Stick (sem Play Store)</p>
              </div>
            </div>

            <ol className="space-y-5">
              {[
                {
                  n: "1",
                  content: (
                    <>
                      Baixe o aplicativo{" "}
                      <strong className="text-white">"Downloader"</strong> na loja de aplicativos da sua Smart TV Android, TV Stick, smartphone, tablet ou projetor com sistema Android.
                    </>
                  ),
                },
                {
                  n: "2",
                  content: (
                    <>
                      Abra o <strong className="text-white">Downloader</strong> e na tela inicial digite este código:
                      <span className="mt-2 flex items-center gap-2">
                        <span className="inline-flex items-center gap-2 rounded-xl bg-red-600/20 border border-red-500/40 px-4 py-2 font-black text-red-300 text-lg tracking-widest">
                          <Hash className="size-4" /> 291561
                        </span>
                      </span>
                    </>
                  ),
                },
                {
                  n: "3",
                  content: "Siga as instruções que aparecem na tela para concluir a instalação. Pronto — seu UniTV Pro está instalado!",
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
                <h2 className="text-xl sm:text-2xl font-black">Método 2: NTDown</h2>
                <p className="text-xs text-white/45 mt-0.5">Via Play Store (celular e tablet Android)</p>
              </div>
            </div>

            <ol className="space-y-5">
              {[
                {
                  n: "1",
                  content: (
                    <>
                      Vá na <strong className="text-white">Play Store</strong> e baixe o aplicativo{" "}
                      <strong className="text-white">NtDown</strong>.
                    </>
                  ),
                },
                {
                  n: "2",
                  content: (
                    <>
                      Depois de baixar, abra o NtDown e coloque o código:
                      <span className="mt-2 flex items-center gap-2">
                        <span className="inline-flex items-center gap-2 rounded-xl bg-blue-700/20 border border-blue-600/40 px-4 py-2 font-black text-blue-300 text-lg tracking-widest">
                          <Hash className="size-4" /> 96919
                        </span>
                      </span>
                    </>
                  ),
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

        {/* CTA suporte */}
        <div className="mt-12 rounded-2xl border border-green-800/40 bg-green-950/20 p-6 text-center">
          <p className="text-sm text-white/60 mb-4">
            Ficou com dúvidas na instalação? <br />
            Nosso suporte te ajuda passo a passo via WhatsApp.
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
