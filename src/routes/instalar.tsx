import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Smartphone, Hash, Sparkles, ArrowLeft, ShieldCheck, Zap, ExternalLink, Tv, Monitor, ShieldAlert } from "lucide-react";
import { img } from "@/data/catalog";

export const Route = createFileRoute("/instalar")({
  head: () => ({
    meta: [
      { title: "Como Instalar UniTV Pro — Smart TV, TV Box, TV Stick e Celular Android" },
      {
        name: "description",
        content:
          "Passo a passo simples para instalar o UniTV Pro na sua Smart TV Android, TV Box, Mi Stick Xiaomi, FireTV Amazon, celular Android ou tablet.",
      },
    ],
  }),
  component: InstalarPage,
});

const POSTERS_ROW_JAPAN = [
  "/vA7uZSMx8VL6LIuNFPnymwkRPBV.jpg", // Noroi: The Curse (2005)
  "/1YINof6kN5yRdePEbcU5360ejoq.jpg", // Ringu / O Chamado (1998)
  "/6q1hlBC6rudc3mHwXsbMBR2xAT6.jpg", // Ju-On: O Grito (2002)
  "/c3zEimDraIyMSasPMGDaNOrhnzn.jpg", // Kairo / Pulse (2001)
  "/xNVJr9q6AtSbjosS6Ed9YirOkSo.jpg", // Cure (1997)
  "/iSq6J55RFLfwcceDKxYtMjOr1sz.jpg", // Dark Water / Água Escura (2002)
  "/8ujSEEePCVMyi7Mt1RQMXd6SWmy.jpg", // One Missed Call (2003)
];

const POSTERS_ROW_ASIA = [
  "/vNVFt6dtcqnI7hqa6LFBUibuFiw.jpg", // Train to Busan (2016)
  "/fNqlsmu2tiI1bXcpU31yjHPkiJz.jpg", // Gonjiam: Hospital Maldito (2018)
  "/lWE9ih9qgjx8HatYboP7fG0nri.jpg", // The Wailing / O Lamento (2016)
  "/cWz28oGV3cSajWdziVQbqrYCmnX.jpg", // Incantation (2022)
  "/zUyaVtyugDaDHtOC6kCMJhbZsWu.jpg", // Shutter (2004)
  "/6dasJ58GGFcC62H9KuukAryltUp.jpg", // Exhuma (2024)
];

const POSTERS_ROW_2000S = [
  "/rLNSOudrayDBo1uqXjrhxcjODIC.jpg", // Saw / Jogos Mortais (2004)
  "/1mXhlQMnlfvJ2frxTjZSQNnA9Vp.jpg", // Final Destination / Premonição (2000)
  "/sQckQRt17VaWbo39GIu0TMOiszq.jpg", // 28 Days Later / Extermínio (2002)
  "/r0bEDWO2w4a43K2xTNSF284qOsc.jpg", // Silent Hill / Terror em Silent Hill (2006)
  "/dDrtuWUKhgUGp12kgUWuP0NpTdF.jpg", // Hostel / O Albergue (2005)
  "/fdyejM5Zd6dsa0YyWa02ZAKwQzK.jpg", // Drag Me to Hell (2009)
  "/mxFPI4KYBk5ri9cPteIS8jiDFgj.jpg", // The Descent (2005)
  "/781px1eOtfVt1RdIsL4Dt1s3x7R.jpg", // Texas Chainsaw Massacre (2003)
];

function DownloaderAppIcon({ className = "size-14 sm:size-16" }: { className?: string }) {
  return (
    <div className={`relative flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#f97316] via-[#ea580c] to-[#c2410c] p-2.5 shadow-[0_8px_25px_rgba(249,115,22,0.45)] border-2 border-orange-400/60 ${className}`}>
      <div className="flex flex-col items-center justify-center text-white text-center">
        <Download className="size-7 sm:size-8 stroke-[2.8] text-white drop-shadow-md" />
        <span className="text-[8.5px] sm:text-[9.5px] font-black tracking-tighter uppercase mt-0.5 text-white leading-none">DOWNLOADER</span>
      </div>
    </div>
  );
}

function NtDownAppIcon({ className = "size-14 sm:size-16" }: { className?: string }) {
  return (
    <div className={`relative flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#10b981] via-[#16a34a] to-[#15803d] p-2.5 shadow-[0_8px_25px_rgba(22,163,74,0.45)] border-2 border-emerald-300/60 ${className}`}>
      <div className="flex flex-col items-center justify-center text-white text-center">
        <Download className="size-7 sm:size-8 stroke-[2.8] text-white drop-shadow-md" />
        <span className="text-[8.5px] sm:text-[9.5px] font-black tracking-tighter uppercase mt-0.5 text-white leading-none">NTDOWN</span>
      </div>
    </div>
  );
}

export function InstalarPage() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-white overflow-x-hidden">
      {/* PAREDE 3D COM 3 LINHAS 100% EXCLUSIVAS E SEM REPETIÇÃO DE FILMES */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-55 [perspective:1200px]">
        <div className="size-full flex flex-col justify-center gap-4 [transform-style:preserve-3d] [transform:rotateX(14deg)_rotateY(-10deg)_rotateZ(-2deg)_scale(1.2)] origin-center">
          {/* LINHA 1 (TOP) — CLÁSSICOS JAPONESES */}
          <div className="flex w-max animate-marquee-cinematic gap-4">
            {[...POSTERS_ROW_JAPAN, ...POSTERS_ROW_JAPAN].map((p, idx) => (
              <div key={idx} className="w-32 sm:w-44 shrink-0 aspect-[2/3] overflow-hidden rounded-2xl border border-white/20 shadow-[0_12px_35px_rgba(0,0,0,0.85)]">
                <img src={img(p, "w342")} alt="" className="size-full object-cover" />
              </div>
            ))}
          </div>
          {/* LINHA 2 (MEIO) — CLÁSSICOS COREANOS & ASIÁTICOS */}
          <div className="flex w-max animate-marquee-reverse-cinematic gap-4">
            {[...POSTERS_ROW_ASIA, ...POSTERS_ROW_ASIA].map((p, idx) => (
              <div key={idx} className="w-32 sm:w-44 shrink-0 aspect-[2/3] overflow-hidden rounded-2xl border border-white/20 shadow-[0_12px_35px_rgba(0,0,0,0.85)]">
                <img src={img(p, "w342")} alt="" className="size-full object-cover" />
              </div>
            ))}
          </div>
          {/* LINHA 3 (FIM) — CLÁSSICOS AMERICANOS DOS ANOS 2000 */}
          <div className="flex w-max animate-marquee-cinematic gap-4">
            {[...POSTERS_ROW_2000S, ...POSTERS_ROW_2000S].map((p, idx) => (
              <div key={idx} className="w-32 sm:w-44 shrink-0 aspect-[2/3] overflow-hidden rounded-2xl border border-white/20 shadow-[0_12px_35px_rgba(0,0,0,0.85)]">
                <img src={img(p, "w342")} alt="" className="size-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-[#080808]/60 via-[#080808]/75 to-[#080808]/60" />

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

        {/* Header — FOCO EM TV, TV BOX, STICK E CELULAR */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/50 px-4 py-2 text-xs font-extrabold tracking-wider text-emerald-300 uppercase mb-4 shadow-sm">
            <Tv className="size-3.5 text-emerald-400" /> Guia de Instalação no Aparelho
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-3">
            Como instalar o <span className="text-emerald-400">UniTV Pro</span>
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-lg mx-auto leading-relaxed font-medium">
            Siga o passo a passo para sua <strong className="text-white">Smart TV, TV Box, TV Stick ou Celular Android</strong> e libere <strong className="text-emerald-300">3 dias de teste grátis</strong> sem cartão!
          </p>
        </div>

        {/* CARD INFORMATIVO ESMERALDA DO TESTE GRÁTIS */}
        <div className="mb-8 rounded-3xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/50 via-black/80 to-emerald-950/30 p-6 sm:p-7 backdrop-blur-sm text-center shadow-[0_0_30px_rgba(16,185,129,0.15)]">
          <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 mb-3">
            <Sparkles className="size-6 text-emerald-400" />
          </div>
          <h2 className="text-xl font-black text-white mb-2">🎁 Como funciona o Teste Grátis de 3 Dias?</h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl mx-auto font-medium">
            Assim que você instalar e abrir o app pela primeira vez no seu dispositivo, os <strong className="text-emerald-300 font-bold">3 dias de teste grátis são liberados automaticamente</strong> na tela. Não precisa informar cartão nem dados bancários!
          </p>
        </div>

        {/* MÉTODOS DE INSTALAÇÃO — PRINCIPAIS (TV, TV BOX, STICK E CELULAR) */}
        <div className="space-y-6">
          {/* MÉTODO 1 — DOWNLOADER (TV, TV BOX, STICK) */}
          <div className="rounded-3xl border-2 border-orange-500/30 bg-gradient-to-b from-orange-950/20 via-black/60 to-black/80 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <DownloaderAppIcon className="size-14 sm:size-16" />
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    Método 1: Smart TV & TV Box
                  </h2>
                  <p className="text-xs text-orange-300/90 font-semibold mt-0.5">Para Smart TV Android, TV Box, Mi Stick Xiaomi e FireTV</p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-orange-500/15 border border-orange-500/30 px-3 py-1.5 text-[11px] font-extrabold text-orange-300 shrink-0">
                🍊 App Downloader
              </span>
            </div>

            <ol className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-black">
                  1
                </div>
                <div className="text-sm text-white/80 leading-relaxed pt-0.5 w-full">
                  Na sua TV ou TV Box, abra a loja de aplicativos e procure pelo aplicativo{" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.esaba.downloader&hl=pt_BR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-orange-400 font-black underline underline-offset-2 hover:text-orange-300 transition-colors"
                  >
                    Downloader <ExternalLink className="size-3" />
                  </a>.
                  
                  {/* PREVIEW DO ÍCONE */}
                  <div className="mt-3 flex items-center gap-4 rounded-2xl border border-orange-500/40 bg-orange-950/40 p-4 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                    <DownloaderAppIcon className="size-14 sm:size-16" />
                    <div>
                      <span className="inline-block text-[10px] font-black uppercase tracking-wider text-orange-400 bg-orange-500/20 border border-orange-500/40 px-2 py-0.5 rounded-md mb-1">
                        🎯 PROCURE POR ESTE ÍCONE
                      </span>
                      <h4 className="font-black text-white text-sm sm:text-base">Downloader by AFTVnews</h4>
                      <p className="text-xs text-white/60">Ícone Laranja oficial na loja da TV</p>
                    </div>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-black">
                  2
                </div>
                <div className="text-sm text-white/80 leading-relaxed pt-0.5">
                  Abra o <strong className="text-white">Downloader</strong> e na barra de endereço digite este código:
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
                  Clique em <strong className="text-white">"Go"</strong>, aguarde o download e selecione <strong className="text-white">"Instalar"</strong>. Abra o UniTV Pro e seu teste grátis estará pronto!
                </div>
              </li>
            </ol>

            {/* AVISO DE PERMISSÕES E SEGURANÇA DO ANDROID */}
            <div className="mt-6 rounded-2xl border border-amber-500/40 bg-amber-950/30 p-4.5 text-left">
              <div className="flex items-start gap-3">
                <ShieldAlert className="size-5 shrink-0 text-amber-400 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-amber-300 mb-1">
                    ⚠️ Aviso de Permissões e Segurança do Android
                  </h4>
                  <p className="text-xs text-white/90 leading-relaxed">
                    Quando o aplicativo pedir permissões de instalação no seu dispositivo, <strong className="text-amber-300">aceite e clique em "Instalar mesmo assim"</strong>.
                  </p>
                  <p className="text-xs text-white/75 leading-relaxed mt-1.5">
                    Se o sistema Android ou o Play Protect acusar como <em>"aplicativo nocivo ou desconhecido"</em>, pode ficar 100% tranquilo! Isso ocorre exclusivamente porque o app foi instalado diretamente fora da Google Play Store (via APK). O aplicativo é totalmente seguro, oficial e livre de riscos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MÉTODO 2 — CELULAR & TABLET (NTDOWN) */}
          <div className="rounded-3xl border-2 border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 via-black/60 to-black/80 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <NtDownAppIcon className="size-14 sm:size-16" />
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    Método 2: Celular & Tablet Android
                  </h2>
                  <p className="text-xs text-emerald-300/90 font-semibold mt-0.5">Para Celulares e Tablets com sistema Android</p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 px-3 py-1.5 text-[11px] font-extrabold text-emerald-300 shrink-0">
                🟢 App ntDown
              </span>
            </div>

            <ol className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-black">
                  1
                </div>
                <div className="text-sm text-white/80 leading-relaxed pt-0.5 w-full">
                  Abra a <strong className="text-white">Play Store</strong> no seu celular ou tablet e procure pelo aplicativo{" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=link.ntdev.ntdw&hl=pt_BR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-400 font-black underline underline-offset-2 hover:text-emerald-300 transition-colors"
                  >
                    ntDown <ExternalLink className="size-3" />
                  </a>.
                  
                  {/* PREVIEW DO ÍCONE */}
                  <div className="mt-3 flex items-center gap-4 rounded-2xl border border-emerald-500/40 bg-emerald-950/40 p-4 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <NtDownAppIcon className="size-14 sm:size-16" />
                    <div>
                      <span className="inline-block text-[10px] font-black uppercase tracking-wider text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 rounded-md mb-1">
                        🎯 PROCURE POR ESTE ÍCONE
                      </span>
                      <h4 className="font-black text-white text-sm sm:text-base">ntDown</h4>
                      <p className="text-xs text-white/60">Ícone Verde oficial na Play Store</p>
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

            {/* AVISO DE PERMISSÕES E SEGURANÇA DO ANDROID */}
            <div className="mt-6 rounded-2xl border border-amber-500/40 bg-amber-950/30 p-4.5 text-left">
              <div className="flex items-start gap-3">
                <ShieldAlert className="size-5 shrink-0 text-amber-400 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-amber-300 mb-1">
                    ⚠️ Aviso de Permissões e Segurança do Android
                  </h4>
                  <p className="text-xs text-white/90 leading-relaxed">
                    Quando o aplicativo pedir permissões de instalação no seu dispositivo, <strong className="text-amber-300">aceite e clique em "Instalar mesmo assim"</strong>.
                  </p>
                  <p className="text-xs text-white/75 leading-relaxed mt-1.5">
                    Se o sistema Android ou o Play Protect acusar como <em>"aplicativo nocivo ou desconhecido"</em>, pode ficar 100% tranquilo! Isso ocorre exclusivamente porque o app foi instalado diretamente fora da Google Play Store (via APK). O aplicativo é totalmente seguro, oficial e livre de riscos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DICA COMPACTA PARA PC / NOTEBOOK (OPCIONAL) */}
          <div className="rounded-2xl border border-white/10 bg-white/3 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <Monitor className="size-5 text-purple-400" />
              <h3 className="font-bold text-white text-sm sm:text-base">Quer assistir no Computador ou Notebook?</h3>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Basta baixar um emulador Android no PC. Recomendamos o <strong className="text-purple-300">LDPlayer</strong> (mais leve e rápido). <span className="text-amber-300 font-medium">Evite o BlueStacks</span> pois costuma travar a transmissão. No LDPlayer, baixe o ntDown ou Downloader e use os códigos acima.
            </p>
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
