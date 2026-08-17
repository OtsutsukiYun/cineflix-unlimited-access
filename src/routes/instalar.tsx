import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Download,
  Smartphone,
  Hash,
  ArrowLeft,
  ShieldCheck,
  ExternalLink,
  Tv,
  Monitor,
  Copy,
  Check,
  MessageCircle,
} from "lucide-react";
import { img } from "@/data/catalog";
import { PromoBanner } from "@/components/PromoBanner";
import { WhatsAppIcon } from "@/components/icons";

export const Route = createFileRoute("/instalar")({
  head: () => ({
    meta: [
      { title: "Como Instalar UniTV Pro — Smart TV, TV Box, TV Stick, Projetor Android e Celular" },
      {
        name: "description",
        content:
          "Passo a passo simples para instalar o UniTV Pro na sua Smart TV Android, TV Box, Mi Stick Xiaomi, FireTV Amazon, projetor Android, celular Android ou tablet.",
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
  "/c1KyQx8mHwxQHTQgJDra84RfTYx.jpg", // Marebito (2004)
  "/okrZ7VAfgLGMNK8XdIapSlXQhLY.jpg", // Carved: Kuchisake-onna (2007)
  "/lFAnm6625uMUZ1Xkg1XxwlXBEE.jpg", // Reincarnation / Rinne (2005)
];

const POSTERS_ROW_ASIA = [
  "/vNVFt6dtcqnI7hqa6LFBUibuFiw.jpg", // Train to Busan / Invasão Zumbi (2016)
  "/fNqlsmu2tiI1bXcpU31yjHPkiJz.jpg", // Gonjiam: Hospital Maldito (2018)
  "/lWE9ih9qgjx8HatYboP7fG0nri.jpg", // The Wailing / O Lamento (2016)
  "/cWz28oGV3cSajWdziVQbqrYCmnX.jpg", // Incantation (2022)
  "/zUyaVtyugDaDHtOC6kCMJhbZsWu.jpg", // Shutter / Espíritos (2004)
  "/6dasJ58GGFcC62H9KuukAryltUp.jpg", // Exhuma / A Decomposição (2024)
  "/l3exwhwyGE0NnHJ3lFQ7eXoBSkH.jpg", // A Tale of Two Sisters / Medo (2003)
  "/zp5NrmYp80axIGiEiYPmm1CW6uH.jpg", // I Saw the Devil (2010)
  "/wOJbWVMqdKIerkvOegeHfORxWqV.jpg", // The Medium (2021)
  "/sBnFQwOcmL3dAIYfiQ9nLvLSW7B.jpg", // Thirst (2009)
];

const POSTERS_ROW_2000S = [
  "/rLNSOudrayDBo1uqXjrhxcjODIC.jpg", // Saw / Jogos Mortais (2004)
  "/1mXhlQMnlfvJ2frxTjZSQNnA9Vp.jpg", // Final Destination / Premonição (2000)
  "/sQckQRt17VaWbo39GIu0TMOiszq.jpg", // 28 Days Later / Extermínio (2002)
  "/r0bEDWO2w4a43K2xTNSF284qOsc.jpg", // Silent Hill / Terror em Silent Hill (2006)
  "/dDrtuWUKhgUGp12kgUWuP0NpTdF.jpg", // Hostel / O Albergue (2005)
  "/fdyejM5Zd6dsa0YyWa02ZAKwQzK.jpg", // Drag Me to Hell (2009)
  "/mxFPI4KYBk5ri9cPteIS8jiDFgj.jpg", // The Descent / Abismo do Medo (2005)
  "/781px1eOtfVt1RdIsL4Dt1s3x7R.jpg", // Texas Chainsaw Massacre (2003)
  "/g410Y1U1ELbmJG14Zru3UAimm1G.jpg", // Jeepers Creepers / Olhos Famintos (2001)
  "/tmclkEpjeo4Zu564gf3KrwIOuKw.jpg", // Paranormal Activity / Atividade Paranormal (2007)
];

const DOWNLOADER_PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=com.esaba.downloader";
const NTDOWN_PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=link.ntdev.ntdw";
const LDPLAYER_WEBSITE_URL = "https://pt.ldplayer.net/";

function DownloaderAppIcon({ className = "size-14 sm:size-16" }: { className?: string }) {
  return (
    <div
      title="Downloader App Icon"
      className={`group/icon relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/20 shadow-md transition-all duration-300 ${className}`}
    >
      <img
        src="/apps/downloader.png"
        alt="Downloader Official App Icon"
        className="size-full object-cover transition-transform duration-300 group-hover/icon:scale-105"
      />
    </div>
  );
}

function NtDownAppIcon({ className = "size-14 sm:size-16" }: { className?: string }) {
  return (
    <div
      title="ntDown App Icon"
      className={`group/icon relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/20 shadow-md transition-all duration-300 ${className}`}
    >
      <img
        src="/apps/ntdown.png"
        alt="ntDown Official App Icon"
        className="size-full object-cover transition-transform duration-300 group-hover/icon:scale-105"
      />
    </div>
  );
}

function LdPlayerAppIcon({ className = "size-14 sm:size-16" }: { className?: string }) {
  return (
    <div
      title="LDPlayer Official Icon"
      className={`group/icon relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-zinc-900 shadow-md transition-all duration-300 ${className}`}
    >
      <div className="flex flex-col items-center justify-center text-white p-1 text-center select-none">
        <Monitor className="size-6 sm:size-7 text-red-500" />
        <span className="text-[9px] font-black uppercase text-white/80 mt-0.5 leading-none">LDPlayer</span>
      </div>
    </div>
  );
}

function CodeCopyBox({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl p-4 border border-white/10 bg-black/60 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/15 text-red-400 border border-red-500/30">
          <Hash className="size-5" />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
            Código de Instalação
          </span>
          <div className="font-mono font-black text-2xl sm:text-3xl tracking-widest leading-none mt-0.5 text-white">
            {code}
          </div>
        </div>
      </div>

      <button
        onClick={handleCopy}
        className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
          copied
            ? "bg-emerald-600 text-white shadow-md"
            : "bg-red-600/20 text-red-200 hover:bg-red-600/35 border border-red-500/40 hover:scale-[1.02]"
        }`}
      >
        {copied ? (
          <>
            <Check className="size-4 text-white" /> COPIADO!
          </>
        ) : (
          <>
            <Copy className="size-4" /> COPIAR CÓDIGO
          </>
        )}
      </button>
    </div>
  );
}

function DownloaderMethodCard({ methodNumber = 1, subtitle = "Ideal para Smart TV, TV Box, FireTV e Mi Stick" }: { methodNumber?: number; subtitle?: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3.5">
          <a
            href={DOWNLOADER_PLAYSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Abrir Downloader na Play Store"
            className="hover:scale-105 transition-transform shrink-0"
          >
            <DownloaderAppIcon className="size-12 sm:size-14" />
          </a>
          <div>
            <a
              href={DOWNLOADER_PLAYSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/title inline-flex items-center gap-2 hover:text-red-400 transition-colors"
            >
              <h2 className="text-lg sm:text-xl font-black text-white group-hover/title:text-red-400 flex items-center gap-2">
                Método {methodNumber}: Downloader <ExternalLink className="size-4 text-muted-foreground opacity-70 group-hover/title:opacity-100" />
              </h2>
            </a>
            <p className="text-xs text-muted-foreground font-medium mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      <ol className="space-y-5">
        <li className="flex items-start gap-3.5">
          <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-black">
            1
          </div>
          <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            Abra a loja do seu aparelho Android (Play Store ou TV Store) e instale o app{" "}
            <a
              href={DOWNLOADER_PLAYSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-red-400 font-bold underline underline-offset-2 hover:text-red-300"
            >
              Downloader <ExternalLink className="size-3" />
            </a>.
          </div>
        </li>

        <li className="flex items-start gap-3.5">
          <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-black">
            2
          </div>
          <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            Abra o <strong>Downloader</strong> e digite este código na barra de busca:
            <CodeCopyBox code="1089401" />
          </div>
        </li>

        <li className="flex items-start gap-3.5">
          <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-black">
            3
          </div>
          <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            Clique em <strong>"Go"</strong> (se necessário toque no botão azul <strong>unitv_RS-NPWN</strong>) e instale o aplicativo.
          </div>
        </li>

        <li className="flex items-start gap-3.5">
          <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-black">
            4
          </div>
          <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            Se o Android pedir permissão para instalação de APKs, selecione <strong>"Permitir Fontes Desconhecidas"</strong> (ou <strong>"Instalar mesmo assim"</strong>) e abra o UniTV Pro!
          </div>
        </li>
      </ol>
    </div>
  );
}

function NtDownMethodCard({ methodNumber = 2, subtitle = "Ideal para Smartphone Android e Tablet" }: { methodNumber?: number; subtitle?: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3.5">
          <a
            href={NTDOWN_PLAYSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Abrir ntDown na Play Store"
            className="hover:scale-105 transition-transform shrink-0"
          >
            <NtDownAppIcon className="size-12 sm:size-14" />
          </a>
          <div>
            <a
              href={NTDOWN_PLAYSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/title inline-flex items-center gap-2 hover:text-red-400 transition-colors"
            >
              <h2 className="text-lg sm:text-xl font-black text-white group-hover/title:text-red-400 flex items-center gap-2">
                Método {methodNumber}: NTDown <ExternalLink className="size-4 text-muted-foreground opacity-70 group-hover/title:opacity-100" />
              </h2>
            </a>
            <p className="text-xs text-muted-foreground font-medium mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      <ol className="space-y-5">
        <li className="flex items-start gap-3.5">
          <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-black">
            1
          </div>
          <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            Abra a <strong>Play Store</strong> no celular ou tablet e instale o app{" "}
            <a
              href={NTDOWN_PLAYSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-red-400 font-bold underline underline-offset-2 hover:text-red-300"
            >
              ntDown <ExternalLink className="size-3" />
            </a>.
          </div>
        </li>

        <li className="flex items-start gap-3.5">
          <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-black">
            2
          </div>
          <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            Abra o <strong>ntDown</strong> e coloque o código:
            <CodeCopyBox code="94596" />
          </div>
        </li>

        <li className="flex items-start gap-3.5">
          <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-black">
            3
          </div>
          <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            Clique no botão de download, conclua a instalação e abra o <strong>UniTV Pro</strong>.
          </div>
        </li>

        <li className="flex items-start gap-3.5">
          <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-black">
            4
          </div>
          <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            Se o Android solicitar autorização para instalar o APK, confirme clicando em <strong>"Permitir Fontes Desconhecidas"</strong> (ou <strong>"Instalar mesmo assim"</strong>).
          </div>
        </li>
      </ol>
    </div>
  );
}

function InstalarPage() {
  const [activeTab, setActiveTab] = useState<"android" | "pc">("android");

  return (
    <div className="relative min-h-screen bg-[#0f090b] text-white overflow-x-hidden">
      {/* LUZ AMBIENTE AMBIENTAL NO FUNDO */}
      <div className="pointer-events-none fixed top-1/4 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-red-600/15 blur-[160px] z-0" />
      <div className="pointer-events-none fixed bottom-20 right-10 size-[450px] rounded-full bg-rose-700/15 blur-[140px] z-0" />

      {/* BARRA PROMOCIONAL DO TOPO */}
      <div className="fixed inset-x-0 top-0 z-[60]">
        <PromoBanner />
      </div>

      {/* HEADER COMPACTO */}
      <header className="fixed inset-x-0 top-8 z-50 transition-all duration-300">
        <div className="glass mx-auto mt-2 flex w-[94%] max-w-6xl items-center justify-between rounded-full px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.8)] border border-white/10">
          <Link to="/" className="flex items-center gap-3">
            <span className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 via-rose-700 to-red-900 shadow-[0_0_20px_rgba(220,38,38,0.7)]">
              <svg className="size-5 fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="font-display text-lg font-black tracking-wider text-white">
                UniTV <span className="text-red-500">Pro</span>
              </span>
            </div>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-white/20 transition-all"
          >
            <ArrowLeft className="size-3.5" /> Voltar ao Início
          </Link>
        </div>
      </header>

      {/* CARROSSEL DE POSTERS DE FUNDO (MAIS VISÍVEL E VIBRANTE) */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-45">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f090b]/75 via-[#0f090b]/55 to-[#0f090b]/85 z-10" />
        <div className="flex flex-col gap-6 pt-20 scale-105 blur-[1px]">
          <div className="flex w-max gap-4 animate-marquee">
            {POSTERS_ROW_JAPAN.concat(POSTERS_ROW_JAPAN).map((p, i) => (
              <img
                key={`row1-${i}`}
                src={img(p, "w342")}
                alt=""
                className="h-44 w-32 rounded-xl object-cover"
              />
            ))}
          </div>
          <div className="flex w-max gap-4 animate-marquee-reverse">
            {POSTERS_ROW_ASIA.concat(POSTERS_ROW_ASIA).map((p, i) => (
              <img
                key={`row2-${i}`}
                src={img(p, "w342")}
                alt=""
                className="h-44 w-32 rounded-xl object-cover"
              />
            ))}
          </div>
          <div className="flex w-max gap-4 animate-marquee">
            {POSTERS_ROW_2000S.concat(POSTERS_ROW_2000S).map((p, i) => (
              <img
                key={`row3-${i}`}
                src={img(p, "w342")}
                alt=""
                className="h-44 w-32 rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 mx-auto w-[94%] max-w-3xl pt-32 pb-20">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-950/40 px-3.5 py-1 text-xs font-bold tracking-wider text-red-400 uppercase mb-4">
            <Download className="size-3.5" /> Guia Rápido de Instalação
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-3">
            Como instalar o <span className="text-red-500">UniTV Pro</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Passo a passo simples para Smart TV Android, TV Box, FireTV, Celular, Tablet ou PC.
          </p>
        </div>

        {/* NAVEGAÇÃO DE DISPOSITIVOS */}
        <div className="mb-8">
          <div className="grid grid-cols-2 gap-3 rounded-2xl bg-zinc-950/90 p-2 border border-white/10 backdrop-blur-md shadow-lg">
            <button
              onClick={() => setActiveTab("android")}
              className={`flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === "android"
                  ? "bg-red-600 text-white shadow-md border border-red-500/50"
                  : "bg-transparent text-muted-foreground hover:text-white"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Tv className="size-4" />
                <Smartphone className="size-4" />
              </div>
              <span>TV, Box, Stick &amp; Celular</span>
            </button>

            <button
              onClick={() => setActiveTab("pc")}
              className={`flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === "pc"
                  ? "bg-red-600 text-white shadow-md border border-red-500/50"
                  : "bg-transparent text-muted-foreground hover:text-white"
              }`}
            >
              <Monitor className="size-4" />
              <span>Computador &amp; Notebook</span>
            </button>
          </div>
        </div>

        {/* MÉTODOS */}
        <div className="space-y-6">
          {activeTab === "android" && (
            <>
              <DownloaderMethodCard methodNumber={1} subtitle="Recomendado para Smart TV, TV Box, FireTV Stick, Mi Stick e Tablet" />
              <NtDownMethodCard methodNumber={2} subtitle="Opção via Play Store para Celular Android e Tablet" />
            </>
          )}

          {activeTab === "pc" && (
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3.5">
                    <a
                      href={LDPLAYER_WEBSITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Baixar LDPlayer no site oficial"
                      className="hover:scale-105 transition-transform shrink-0"
                    >
                      <LdPlayerAppIcon className="size-12 sm:size-14" />
                    </a>
                    <div>
                      <a
                        href={LDPLAYER_WEBSITE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/title inline-flex items-center gap-2 hover:text-red-400 transition-colors"
                      >
                        <h3 className="font-black text-white text-lg sm:text-xl group-hover/title:text-red-400 flex items-center gap-2">
                          LDPlayer (Emulador PC) <ExternalLink className="size-4 text-muted-foreground opacity-70 group-hover/title:opacity-100" />
                        </h3>
                      </a>
                      <p className="text-xs text-muted-foreground font-medium mt-0.5">
                        Emulador leve e grátis para Windows &amp; Mac
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-4">
                  Para assistir no PC ou Notebook, instale o emulador grátis{" "}
                  <a
                    href={LDPLAYER_WEBSITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 font-bold underline underline-offset-2"
                  >
                    LDPlayer <ExternalLink className="inline size-3" />
                  </a>. Depois abra o app Downloader dentro dele e coloque o código <strong>1089401</strong>.
                </p>
              </div>

              <DownloaderMethodCard methodNumber={1} subtitle="Método via Downloader no emulador PC" />
            </div>
          )}
        </div>

        {/* CTA ATENDIMENTO E AJUDA VIA WHATSAPP */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-zinc-950/90 p-7 text-center backdrop-blur-xl shadow-xl">
          <div className="mx-auto flex size-11 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mb-3">
            <WhatsAppIcon className="size-5 fill-current" />
          </div>
          <h3 className="text-lg font-black text-white mb-1">Precisa de ajuda para instalar?</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-5 max-w-md mx-auto">
            Nossa equipe de suporte técnico está no WhatsApp para tirar suas dúvidas e te ajudar a instalar!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/5561984016006?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20para%20instalar%20o%20UniTV%20Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-3 text-xs sm:text-sm font-extrabold text-white shadow-md transition-all"
            >
              <WhatsAppIcon className="size-4 fill-current" />
              Falar com o Suporte Técnico
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
