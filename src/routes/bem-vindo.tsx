import { createFileRoute } from "@tanstack/react-router";
import {
  Download,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  ExternalLink,
  ChevronRight,
  HelpCircle,
  Play,
  Tv,
  ArrowDown,
  Info,
} from "lucide-react";
import { img } from "@/data/catalog";
import { WhatsAppIcon } from "@/components/icons";
import { DOMIntegrityShield } from "@/components/DOMIntegrityShield";

export const Route = createFileRoute("/bem-vindo")({
  head: () => ({
    meta: [
      { title: "🎉 Seja bem-vindo(a) à UniTV Pro — Baixe e Instale Agora" },
      {
        name: "description",
        content:
          "Parabéns! Você está a poucos passos de começar a assistir na UniTV Pro. Baixe o aplicativo e siga o passo a passo fácil de instalação.",
      },
    ],
  }),
  component: BemVindoPage,
});

const APK_DIRECT_URL = "https://www.mediafire.com/file/3g5ftk7ep3tq9ao/unitv_RS-NPWN.apk/file";
const WHATSAPP_SUPPORT_URL = "https://wa.me/5561984016006?text=Ol%C3%A1!%20Baixei%20o%20UniTV%20Pro%20pelo%20Downloader%20e%20preciso%20de%20ajuda%20na%20instala%C3%A7%C3%A3o.";

function BemVindoPage() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-white selection:bg-red-600 selection:text-white overflow-x-hidden font-sans pb-20">
      <DOMIntegrityShield />

      {/* BACKGROUND COM POSTERS BLUR E GRADIENTE DRAMÁTICO */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <img
          src={img("/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg", "w1280")}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-15 blur-md scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/90 via-[#080808]/95 to-[#080808]" />
      </div>

      <div className="relative z-10 mx-auto w-[94%] max-w-3xl pt-10 sm:pt-16">
        
        {/* LOGO SUPERIOR */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="relative flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 via-rose-700 to-red-900 shadow-[0_0_20px_rgba(220,38,38,0.7)] border border-white/20">
            <Play className="size-5 fill-white text-white ml-0.5" />
          </span>
          <span className="font-display text-2xl font-black tracking-wider text-white">
            UniTV <span className="text-red-500">Pro</span>
          </span>
        </div>

        {/* HERO CARD PRINCIPAL */}
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/[0.05] backdrop-blur-2xl p-6 sm:p-10 text-center shadow-[0_25px_80px_rgba(0,0,0,0.9)]">
          {/* BRILHOS EM DEGRADÊ DE VIDRO */}
          <div className="pointer-events-none absolute -top-24 -left-24 size-64 rounded-full bg-red-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 size-64 rounded-full bg-rose-600/20 blur-3xl" />

          {/* BADGE BEM-VINDO */}
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/60 px-4 py-2 text-xs sm:text-sm font-extrabold tracking-wide text-red-400 uppercase mb-5 backdrop-blur-md shadow-md">
            <Sparkles className="size-4 text-red-400" />
            Acesso Liberado no Downloader
          </div>

          {/* TÍTULO SOLICITADO PELO USUÁRIO */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4 drop-shadow-md">
            🎉 Parabéns! Seja bem-vindo(a) à <span className="text-red-500">UniTV Pro</span>
          </h1>

          {/* SUBTÍTULOS SOLICITADOS PELO USUÁRIO */}
          <p className="text-base sm:text-xl font-bold text-white/95 max-w-xl mx-auto leading-snug mb-3">
            Você está a poucos passos de começar a assistir.
          </p>

          <p className="text-xs sm:text-base text-white/75 max-w-lg mx-auto leading-relaxed mb-6">
            Agora é só baixar o aplicativo e seguir o passo a passo de instalação abaixo. Leva apenas alguns minutos.
          </p>

          {/* IMAGEM DE ONDE CLICAR NO MEDIAFIRE (ANTES DO BOTÃO DE DOWNLOAD) - MAIOR E MAIS CLARA */}
          <div className="my-6 max-w-xl mx-auto overflow-hidden rounded-3xl border border-blue-500/50 bg-[#070e1b] p-5 sm:p-7 shadow-[0_0_40px_rgba(37,99,235,0.3)] relative text-left backdrop-blur-xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-blue-400 uppercase mb-2.5">
              <ExternalLink className="size-4 shrink-0 text-blue-400" />
              <span>Onde clicar na tela a seguir (MediaFire):</span>
            </div>
            <p className="text-xs sm:text-sm text-white/90 mb-4 font-medium leading-relaxed">
              Ao clicar no <strong className="text-emerald-400 font-black">botão verde abaixo</strong>, você verá esta tela. Clique na <strong>barra azul grande</strong> para iniciar o download:
            </p>
            <div className="relative mx-auto overflow-hidden rounded-2xl border border-white/25 shadow-[0_0_35px_rgba(37,99,235,0.5)] bg-black/80 p-3 sm:p-4">
              <img
                src="/mediafire_tutorial.png"
                alt="Onde clicar no MediaFire para baixar o UniTV Pro"
                className="w-full object-contain max-h-[360px] sm:max-h-[420px] rounded-xl shadow-md"
              />
              <div className="mt-3 text-center text-xs sm:text-sm text-blue-200 font-extrabold bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 p-3 rounded-xl border border-blue-500/40 shadow-inner">
                👈 Clique na <strong>barra azul retangular grande</strong> (Download 37.17MB)
              </div>
            </div>
          </div>

          {/* BOTÃO PRINCIPAL SOLICITADO: ⬇️ INICIAR DOWNLOAD (VERDE CONVIDATIVO) */}
          <div className="max-w-md mx-auto mb-4">
            <a
              href={APK_DIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 px-8 py-5 text-lg sm:text-xl font-black text-white shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(16,185,129,0.9)] border border-white/25 active:scale-[0.98]"
            >
              <Download className="size-6 transition-transform group-hover:translate-y-1 animate-bounce text-white" />
              <span>⬇️ INICIAR DOWNLOAD</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-white/70">
            <span className="flex items-center gap-1.5"><ShieldCheck className="size-4 text-emerald-400" /> Versão Oficial Protegida</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-400" /> APK 100% Seguro</span>
          </div>
        </div>

        {/* GUIA DE INSTALAÇÃO PASSO A PASSO COM IMAGENS/ILUSTRAÇÕES */}
        <div className="mt-12 space-y-6">
          <div className="text-center mb-8">
            <span className="text-xs font-black tracking-[0.2em] text-emerald-400 uppercase block mb-1">
              Guia Visual de Instalação
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight">
              Passo a Passo de Instalação no Aparelho
            </h2>
          </div>

          {/* PASSO 1 */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 transition-all hover:border-white/25">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 font-black text-xl text-white shadow-[0_0_20px_rgba(16,185,129,0.6)] border border-white/20">
                01
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-lg sm:text-xl font-black text-white">
                  1. Clique no botão verde de Download
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Clique no botão verde <strong className="text-emerald-400 font-bold">"⬇️ INICIAR DOWNLOAD"</strong> acima. O navegador ou o Downloader abrirá a página e começará a baixar o arquivo <code className="rounded bg-white/10 px-2 py-0.5 text-xs text-emerald-300 font-mono">unitv_RS-NPWN.apk</code>.
                </p>
                <div className="mt-3 rounded-2xl border border-white/10 bg-black/40 p-4 flex items-center justify-between text-xs text-white/90">
                  <div className="flex items-center gap-2">
                    <Download className="size-4 text-red-400" />
                    <span>Arquivo: <strong>unitv_RS-NPWN.apk</strong></span>
                  </div>
                  <span className="text-emerald-400 font-bold text-[11px] bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    Pronto para instalar
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* PASSO 2 */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 transition-all hover:border-white/25">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-red-600 font-black text-xl text-white shadow-[0_0_20px_rgba(220,38,38,0.6)] border border-white/20">
                02
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-lg sm:text-xl font-black text-white">
                  2. Abra o arquivo baixado no seu dispositivo
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Assim que o download terminar, toque em <strong className="text-white">"Abrir"</strong> ou vá na aba de <strong className="text-white">"Downloads"</strong> do Downloader/dispositivo e selecione o arquivo.
                </p>

                {/* ILUSTRAÇÃO VISUAL DO PASSO 2 */}
                <div className="mt-4 rounded-2xl border border-white/15 bg-gradient-to-br from-zinc-900 to-black p-5 text-center shadow-inner">
                  <div className="mx-auto flex max-w-xs flex-col items-center gap-3 rounded-xl border border-red-500/40 bg-red-950/30 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-red-600 text-white font-bold">
                        <Tv className="size-5" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-black text-white">Deseja instalar este aplicativo?</p>
                        <p className="text-[10px] text-white/60">UniTV Pro Oficial</p>
                      </div>
                    </div>
                    <div className="flex w-full gap-2 pt-2">
                      <div className="w-1/2 rounded-lg bg-white/10 py-1.5 text-center text-xs font-bold text-white/60">Cancelar</div>
                      <div className="w-1/2 rounded-lg bg-red-600 py-1.5 text-center text-xs font-black text-white shadow-md animate-pulse">INSTALAR</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PASSO 3 (AVISO DE SEGURANÇA E PERMISSÃO) */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 transition-all hover:border-white/25">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500 font-black text-xl text-black shadow-[0_0_20px_rgba(245,158,11,0.6)] border border-white/20">
                03
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                  3. Permissão do Android (Fontes Desconhecidas)
                  <span className="text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2.5 py-0.5 rounded-full">
                    Importante 💡
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Caso o sistema Android exiba um aviso de que o aplicativo é de <strong className="text-white font-black">"fonte desconhecida"</strong>:
                </p>

                {/* CAIXA ILUSTRATIVA DA DICA DE PERMISSÃO */}
                <div className="rounded-2xl border border-amber-500/40 bg-amber-950/30 p-4 backdrop-blur-md space-y-2">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-amber-300">
                    <Info className="size-4 shrink-0" />
                    <span>Como autorizar a instalação em 1 clique:</span>
                  </div>
                  <p className="text-xs text-white/90 leading-relaxed">
                    Clique em <strong className="text-amber-300 underline font-black">"Configurações"</strong> ➔ ative <strong className="text-amber-300 underline font-black">"Permitir desta fonte"</strong> (ou toque em <strong className="text-amber-300 underline font-black">"Instalar assim mesmo"</strong>).
                  </p>
                  <p className="text-[11px] text-white/60 pt-1 border-t border-amber-500/20 font-medium">
                    🙂 Esse aviso é padrão do Android para qualquer app baixado fora da Play Store. O UniTV Pro é <strong>100% seguro</strong>!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PASSO 4 */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 transition-all hover:border-white/25">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 font-black text-xl text-black shadow-[0_0_20px_rgba(16,185,129,0.6)] border border-white/20">
                04
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-lg sm:text-xl font-black text-white">
                  4. Abra a UniTV Pro e Aproveite!
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Pronto! Abra o aplicativo no seu aparelho, faça seu login ou aproveite o <strong className="text-emerald-400">teste grátis liberado automaticamente</strong>!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SUPORTE CASO TENHA DÚVIDAS */}
        <div className="mt-12 text-center rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8">
          <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-2xl bg-green-600/20 text-green-400 border border-green-500/30">
            <WhatsAppIcon className="size-6 fill-current" />
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Precisa de Ajuda na Instalação?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto mb-5 leading-relaxed">
            Nosso suporte técnico está online para te ajudar a instalar passo a passo no seu dispositivo.
          </p>
          <a
            href={WHATSAPP_SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3.5 text-sm font-black text-white shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(34,197,94,0.6)]"
          >
            <WhatsAppIcon className="size-4 fill-current" />
            Falar com Suporte no WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
