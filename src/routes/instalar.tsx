import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Download,
  Smartphone,
  Hash,
  Sparkles,
  ArrowLeft,
  ShieldCheck,
  Zap,
  ExternalLink,
  Tv,
  Monitor,
  ShieldAlert,
  Copy,
  Check,
  MessageCircle,
  Gift,
  Play,
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

const DOWNLOADER_ICON_URL = "https://play-lh.googleusercontent.com/_zuxP30plNbEBOOre6Q4rVwGQslOX6NCsefA8tPxJFsFt2XLO35yK2YVaPqmFl0oGVnO9FZCJ6b2lhrSk3a0KA=s180-rw";
const NTDOWN_ICON_URL = "https://play-lh.googleusercontent.com/5Es3nwDA4eX2O2k1Y7y2cfYZETSVnVGNopu4X5U8_FpRzTdmaJS04-72QdVd88m7vo8hxYFyfpKUrhT373-H0Q=s180-rw";
const LDPLAYER_ICON_URL = "https://img.utdstc.com/icon/4f8/c1b/4f8c1be9afee0fee6e05b2deeaa68bde5d990c5ca903d753e4b765a427c32478:100";

function DownloaderAppIcon({ className = "size-14 sm:size-16" }: { className?: string }) {
  return (
    <a
      href={DOWNLOADER_PLAYSTORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      title="Abrir Downloader na Google Play Store"
      className={`group/icon relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-orange-400/60 shadow-[0_8px_25px_rgba(249,115,22,0.45)] transition-all duration-300 hover:scale-105 hover:border-orange-300 hover:shadow-[0_12px_35px_rgba(249,115,22,0.65)] ${className}`}
    >
      <img
        src={DOWNLOADER_ICON_URL}
        alt="Downloader App Icon"
        className="size-full object-cover transition-transform duration-300 group-hover/icon:scale-105"
      />
    </a>
  );
}

function NtDownAppIcon({ className = "size-14 sm:size-16" }: { className?: string }) {
  return (
    <a
      href={NTDOWN_PLAYSTORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      title="Abrir ntDown na Google Play Store"
      className={`group/icon relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-emerald-400/60 shadow-[0_8px_25px_rgba(16,185,129,0.45)] transition-all duration-300 hover:scale-105 hover:border-emerald-300 hover:shadow-[0_12px_35px_rgba(16,185,129,0.65)] ${className}`}
    >
      <img
        src={NTDOWN_ICON_URL}
        alt="ntDown App Icon"
        className="size-full object-cover transition-transform duration-300 group-hover/icon:scale-105"
      />
    </a>
  );
}

function LdPlayerAppIcon({ className = "size-14 sm:size-16" }: { className?: string }) {
  return (
    <a
      href={LDPLAYER_WEBSITE_URL}
      target="_blank"
      rel="noopener noreferrer"
      title="Baixar LDPlayer no site oficial"
      className={`group/icon relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-yellow-400/80 shadow-[0_8px_25px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105 hover:border-yellow-300 hover:shadow-[0_12px_35px_rgba(245,158,11,0.75)] ${className}`}
    >
      <img
        src={LDPLAYER_ICON_URL}
        alt="LDPlayer Official Icon"
        className="size-full object-cover transition-transform duration-300 group-hover/icon:scale-105"
      />
    </a>
  );
}

function CodeCopyBox({ code, color = "emerald" }: { code: string; color?: "orange" | "emerald" }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const isOrange = color === "orange";

  return (
    <div
      className={`mt-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl p-4 border-2 shadow-lg transition-all ${
        isOrange
          ? "bg-orange-950/60 border-orange-400/60 shadow-[0_0_20px_rgba(249,115,22,0.2)]"
          : "bg-emerald-950/60 border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex size-11 items-center justify-center rounded-xl font-black ${
            isOrange ? "bg-orange-500/20 text-orange-400 border border-orange-500/40" : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
          }`}
        >
          <Hash className="size-6" />
        </div>
        <div>
          <span
            className={`text-[10px] font-black uppercase tracking-wider block ${
              isOrange ? "text-orange-300" : "text-emerald-300"
            }`}
          >
            Código de Instalação
          </span>
          <div
            className={`font-mono font-black text-2xl sm:text-3xl tracking-widest leading-none mt-0.5 ${
              isOrange ? "text-orange-200" : "text-emerald-200"
            }`}
          >
            {code}
          </div>
        </div>
      </div>

      <button
        onClick={handleCopy}
        className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
          copied
            ? "bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]"
            : isOrange
            ? "bg-orange-500/25 text-orange-100 hover:bg-orange-500/40 border border-orange-400/50 shadow-sm hover:scale-[1.02]"
            : "bg-emerald-500/25 text-emerald-100 hover:bg-emerald-500/40 border border-emerald-400/50 shadow-sm hover:scale-[1.02]"
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

function DownloaderMethodCard({ methodNumber = 1, subtitle = "Ideal para Smart TV Android, TV Box, Mi Stick Xiaomi e FireTV Stick" }: { methodNumber?: number; subtitle?: string }) {
  return (
    <div className="rounded-3xl border-2 border-orange-500/50 bg-gradient-to-b from-orange-950/40 via-zinc-900/60 to-black/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(249,115,22,0.15)]">
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3.5">
          <DownloaderAppIcon className="size-14 sm:size-16" />
          <div>
            <a
              href={DOWNLOADER_PLAYSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/title inline-flex items-center gap-2 hover:text-orange-300 transition-colors"
            >
              <h2 className="text-xl sm:text-2xl font-black text-white group-hover/title:text-orange-300 flex items-center gap-2">
                Método {methodNumber}: Downloader <ExternalLink className="size-4 text-orange-400 opacity-80 group-hover/title:opacity-100" />
              </h2>
            </a>
            <p className="text-xs text-orange-300/90 font-semibold mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>
        <a
          href={DOWNLOADER_PLAYSTORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-orange-500/15 border border-orange-500/30 px-3 py-1.5 text-[11px] font-extrabold text-orange-300 shrink-0 hover:bg-orange-500/25 transition-all"
        >
          🍊 App Downloader <ExternalLink className="size-3" />
        </a>
      </div>

      <ol className="space-y-6">
        <li className="flex items-start gap-4">
          <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs font-black">
            1
          </div>
          <div className="text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            No seu aparelho Android, abra a loja de aplicativos (Play Store ou TV Store) e instale o aplicativo{" "}
            <a
              href={DOWNLOADER_PLAYSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-orange-400 font-black underline underline-offset-2 hover:text-orange-300 transition-colors"
            >
              Downloader <ExternalLink className="size-3" />
            </a>.
            
            {/* PREVIEW DO ÍCONE COM LINK PARA PLAY STORE */}
            <a
              href={DOWNLOADER_PLAYSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-4 rounded-2xl border border-orange-500/40 bg-orange-950/30 p-4 backdrop-blur-md shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-300 hover:border-orange-400/80 hover:bg-orange-950/50 hover:scale-[1.01] group/preview cursor-pointer"
            >
              <DownloaderAppIcon className="size-14 sm:size-16" />
              <div>
                <span className="inline-block text-[10px] font-black uppercase tracking-wider text-orange-400 bg-orange-500/20 border border-orange-500/40 px-2 py-0.5 rounded-md mb-1">
                  🎯 TOQUE PARA ABRIR NA PLAY STORE
                </span>
                <h4 className="font-black text-white text-sm sm:text-base group-hover/preview:text-orange-300 transition-colors flex items-center gap-1.5">
                  Downloader by AFTVnews <ExternalLink className="size-3.5 text-orange-400" />
                </h4>
                <p className="text-xs text-white/70">Ícone oficial Laranja na loja da TV ou Play Store</p>
              </div>
            </a>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs font-black">
            2
          </div>
          <div className="text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            Abra o aplicativo <strong className="text-white">Downloader</strong> e na barra de busca/endereço digite o código:
            <CodeCopyBox code="1089401" color="orange" />
          </div>
        </li>

        <li className="flex items-start gap-4">
          <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs font-black">
            3
          </div>
          <div className="text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            Clique em <strong className="text-white font-black text-orange-300">"Go"</strong>. Caso o download não comece automaticamente em alguns segundos, toque no botão azul grande escrito{" "}
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 border border-blue-400/60 px-2.5 py-0.5 text-xs sm:text-sm font-black text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] my-1">
              unitv_RS-NPWN
            </span>{" "}
            para baixar o aplicativo. Quando finalizar, selecione <strong className="text-white font-black text-orange-300">"Instalar"</strong>.
          </div>
        </li>

        {/* PASSO 4: PERMISSÃO DO ANDROID COMO ETAPA OFICIAL DO PASSO A PASSO */}
        <li className="flex items-start gap-4">
          <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-black shadow-[0_0_12px_rgba(245,158,11,0.3)]">
            4
          </div>
          <div className="text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            Caso o seu aparelho não permita a instalação e solicite a autorização de <strong className="text-amber-300">"Fontes Desconhecidas"</strong> ou aviso do <strong className="text-amber-300">"Play Protect"</strong>, confirme clicando em <strong className="text-white bg-amber-500/30 border border-amber-400/50 px-2 py-0.5 rounded-md font-black">"Permitir"</strong> ou <strong className="text-white bg-amber-500/30 border border-amber-400/50 px-2 py-0.5 rounded-md font-black">"Instalar mesmo assim"</strong>.
            
            <p className="mt-2.5 text-xs text-amber-200/90 bg-amber-950/40 border border-amber-500/30 rounded-xl p-3 leading-relaxed">
              💡 <strong>Por que isso acontece?</strong> O Android exibe esse aviso de segurança padrão sempre que um aplicativo é baixado diretamente via gerenciador (APK) fora da loja tradicional. O UniTV Pro é 100% oficial, verificado e seguro para o seu aparelho.
            </p>
          </div>
        </li>

        {/* PASSO 5: ABRIR O APP */}
        <li className="flex items-start gap-4">
          <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black">
            5
          </div>
          <div className="text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            Abra o <strong className="text-emerald-300 font-black">UniTV Pro</strong> e seu teste grátis de 3 dias já estará ativado para uso!
          </div>
        </li>
      </ol>
    </div>
  );
}

function NtDownMethodCard({ methodNumber = 1, subtitle = "Ideal para Smartphone Android e Tablet Android" }: { methodNumber?: number; subtitle?: string }) {
  return (
    <div className="rounded-3xl border-2 border-emerald-500/50 bg-gradient-to-b from-emerald-950/40 via-zinc-900/60 to-black/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(16,185,129,0.15)]">
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3.5">
          <NtDownAppIcon className="size-14 sm:size-16" />
          <div>
            <a
              href={NTDOWN_PLAYSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/title inline-flex items-center gap-2 hover:text-emerald-300 transition-colors"
            >
              <h2 className="text-xl sm:text-2xl font-black text-white group-hover/title:text-emerald-300 flex items-center gap-2">
                Método {methodNumber}: NTDown <ExternalLink className="size-4 text-emerald-400 opacity-80 group-hover/title:opacity-100" />
              </h2>
            </a>
            <p className="text-xs text-emerald-300/90 font-semibold mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>
        <a
          href={NTDOWN_PLAYSTORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 px-3 py-1.5 text-[11px] font-extrabold text-emerald-300 shrink-0 hover:bg-emerald-500/25 transition-all"
        >
          🟢 App ntDown <ExternalLink className="size-3" />
        </a>
      </div>

      <ol className="space-y-6">
        <li className="flex items-start gap-4">
          <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black">
            1
          </div>
          <div className="text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            Abra a <strong className="text-white">Google Play Store</strong> no seu dispositivo e instale o aplicativo{" "}
            <a
              href={NTDOWN_PLAYSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 font-black underline underline-offset-2 hover:text-emerald-300 transition-colors"
            >
              ntDown <ExternalLink className="size-3" />
            </a>.
            
            {/* PREVIEW DO ÍCONE COM LINK PARA PLAY STORE */}
            <a
              href={NTDOWN_PLAYSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-4 rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-4 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300 hover:border-emerald-400/80 hover:bg-emerald-950/50 hover:scale-[1.01] group/preview cursor-pointer"
            >
              <NtDownAppIcon className="size-14 sm:size-16" />
              <div>
                <span className="inline-block text-[10px] font-black uppercase tracking-wider text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 rounded-md mb-1">
                  🎯 TOQUE PARA ABRIR NA PLAY STORE
                </span>
                <h4 className="font-black text-white text-sm sm:text-base group-hover/preview:text-emerald-300 transition-colors flex items-center gap-1.5">
                  ntDown <ExternalLink className="size-3.5 text-emerald-400" />
                </h4>
                <p className="text-xs text-white/70">Ícone oficial Verde na Play Store</p>
              </div>
            </a>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black">
            2
          </div>
          <div className="text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            Abra o <strong className="text-white">ntDown</strong> e insira o código de download:
            <CodeCopyBox code="94596" color="emerald" />
          </div>
        </li>

        <li className="flex items-start gap-4">
          <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black">
            3
          </div>
          <div className="text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            Caso o download não comece automaticamente em alguns segundos, toque no botão azul grande escrito{" "}
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 border border-blue-400/60 px-2.5 py-0.5 text-xs sm:text-sm font-black text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] my-1">
              unitv_RS-NPWN
            </span>{" "}
            para baixar o aplicativo. Quando finalizar, selecione <strong className="text-white font-black text-emerald-300">"Instalar"</strong>.
          </div>
        </li>

        {/* PASSO 4: PERMISSÃO DO ANDROID COMO ETAPA OFICIAL DO PASSO A PASSO */}
        <li className="flex items-start gap-4">
          <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-black shadow-[0_0_12px_rgba(245,158,11,0.3)]">
            4
          </div>
          <div className="text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            Caso o seu aparelho não permita a instalação e solicite a autorização de <strong className="text-amber-300">"Fontes Desconhecidas"</strong> ou aviso do <strong className="text-amber-300">"Play Protect"</strong>, confirme clicando em <strong className="text-white bg-amber-500/30 border border-amber-400/50 px-2 py-0.5 rounded-md font-black">"Permitir"</strong> ou <strong className="text-white bg-amber-500/30 border border-amber-400/50 px-2 py-0.5 rounded-md font-black">"Instalar mesmo assim"</strong>.
            
            <p className="mt-2.5 text-xs text-amber-200/90 bg-amber-950/40 border border-amber-500/30 rounded-xl p-3 leading-relaxed">
              💡 <strong>Por que isso acontece?</strong> O Android exibe esse aviso de segurança padrão sempre que um aplicativo é baixado diretamente via gerenciador (APK) fora da loja tradicional. O UniTV Pro é 100% oficial, verificado e seguro para o seu aparelho.
            </p>
          </div>
        </li>

        {/* PASSO 5: ABRIR O APP */}
        <li className="flex items-start gap-4">
          <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black">
            5
          </div>
          <div className="text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            Abra o <strong className="text-emerald-300 font-black">UniTV Pro</strong> e aproveite a programação completa com 3 dias grátis!
          </div>
        </li>
      </ol>
    </div>
  );
}

const TRIAL_HORROR_SLIDES = [
  { title: "Exit 8 (Saída 8)", year: "2025", genre: "Terror / Mistério Japonês", backdrop: "/3cVrg7tzSf5AgEecYWDOSAzXAeX.jpg" },
  { title: "Killer Toon (Webtoon da Morte)", year: "2013", genre: "Terror Coreano", backdrop: "/wDPiwtmO0O0btc2gT3qtLKuei6s.jpg" },
  { title: "Cure (A Cura)", year: "1997", genre: "Terror / Crime Japonês", backdrop: "/1son1inSL9AHKYhYfOtOdENi0CH.jpg" },
  { title: "Evil Dead: A Ascensão", year: "2023", genre: "Terror / Gore", backdrop: "/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg" },
  { title: "Hereditário", year: "2018", genre: "Terror Psicológico", backdrop: "/jQv5SAPEQwV1vtPseuWsRN6cT5q.jpg" },
  { title: "Ringu: O Chamado", year: "1998", genre: "Terror J-Horror Clássico", backdrop: "/sGhbO6muh1Fnpa7nkxYCfvmgWCo.jpg" },
  { title: "Ju-On: O Grito", year: "2002", genre: "Terror Clássico Japonês", backdrop: "/jNGVlbH2tnZmVqEIvuoxvV78vBY.jpg" },
  { title: "Corra! (Get Out)", year: "2017", genre: "Suspense / Thriller", backdrop: "/bBQHALHRAaaORlPNXv7fNcRXYdx.jpg" },
  { title: "Ilha do Medo (Shutter Island)", year: "2010", genre: "Thriller Psicológico", backdrop: "/rbZvGN1A1QyZuoKzhCw8QPmf2q0.jpg" },
  { title: "O Exorcista", year: "1973", genre: "Terror Clássico", backdrop: "/xcjJ5khg2yzOa282mza39Lbrm7j.jpg" },
  { title: "O Silêncio dos Inocentes", year: "1991", genre: "Suspense / Crime", backdrop: "/aYcnDyLMnpKce1FOYUpZrXtgUye.jpg" },
  { title: "Garota Exemplar (Gone Girl)", year: "2014", genre: "Suspense / Thriller", backdrop: "/iWak7wT0j6ycCc8lKr4NBz9c7n5.jpg" },
  { title: "O Iluminado (The Shining)", year: "1980", genre: "Terror / Suspense", backdrop: "/mmd1HnuvAzFc4iuVJcnBrhDNEKr.jpg" },
];

export function InstalarPage() {
  const [activeTab, setActiveTab] = useState<"android" | "pc">("android");

  return (
    <div className="relative min-h-screen bg-[#080808] text-white overflow-x-hidden">
      {/* NAVBAR FLUTUANTE ESTILO PÁGINA INICIAL */}
      <div className="fixed inset-x-0 top-0 z-50 flex flex-col [transform:translateZ(0)]">
        <div className="z-[60]"><PromoBanner /></div>
        <header className="z-50">
          <div className="glass mx-auto mt-2 flex w-[94%] max-w-6xl items-center justify-between rounded-full px-4 sm:px-6 py-2.5 sm:py-3 border border-white/15 bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 via-rose-600 to-red-800 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                <Play className="size-4 fill-current ml-0.5" />
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                UniTV<span className="text-red-500"> Pro</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
              <Link to="/" className="text-white/80 transition-colors hover:text-white">Início</Link>
              <a href="/#catalogo" className="text-white/80 transition-colors hover:text-white">Catálogo</a>
              <a href="/#planos" className="text-white/80 transition-colors hover:text-white">Planos</a>
              <a href="/#faq" className="text-white/80 transition-colors hover:text-white">Dúvidas</a>
              <a href="/#suporte" className="text-green-400 transition-colors hover:text-green-300 font-semibold">Suporte</a>
            </nav>

            <a href="/#planos" className="btn-cta px-5 py-2.5 text-xs font-black">
              QUERO ASSINAR
            </a>
          </div>
        </header>
      </div>

      {/* PAREDE 3D SUAVE DE POSTERS DE TERROR NO FUNDO */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-30 [perspective:1200px]">
        <div className="size-full flex flex-col justify-center gap-4 [transform-style:preserve-3d] [transform:rotateX(14deg)_rotateY(-10deg)_rotateZ(-2deg)_scale(1.2)] origin-center">
          {/* LINHA 1 (TOP) */}
          <div className="flex w-max animate-marquee-cinematic gap-4">
            {[...POSTERS_ROW_JAPAN, ...POSTERS_ROW_JAPAN].map((p, idx) => (
              <div key={idx} className="w-32 sm:w-44 shrink-0 aspect-[2/3] overflow-hidden rounded-2xl border border-white/20 shadow-lg">
                <img src={img(p, "w342")} alt="" className="size-full object-cover" />
              </div>
            ))}
          </div>
          {/* LINHA 2 (MEIO) */}
          <div className="flex w-max animate-marquee-reverse-cinematic gap-4">
            {[...POSTERS_ROW_ASIA, ...POSTERS_ROW_ASIA].map((p, idx) => (
              <div key={idx} className="w-32 sm:w-44 shrink-0 aspect-[2/3] overflow-hidden rounded-2xl border border-white/20 shadow-lg">
                <img src={img(p, "w342")} alt="" className="size-full object-cover" />
              </div>
            ))}
          </div>
          {/* LINHA 3 (FIM) */}
          <div className="flex w-max animate-marquee-cinematic gap-4">
            {[...POSTERS_ROW_2000S, ...POSTERS_ROW_2000S].map((p, idx) => (
              <div key={idx} className="w-32 sm:w-44 shrink-0 aspect-[2/3] overflow-hidden rounded-2xl border border-white/20 shadow-lg">
                <img src={img(p, "w342")} alt="" className="size-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-[#080808]/50 via-[#080808]/70 to-[#080808]/85" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#080808_95%)]" />

      <div className="relative z-10 mx-auto w-[94%] max-w-3xl pt-28 sm:pt-36 pb-12">


        {/* HEADER DA PÁGINA LIMPO E DIRETO AO PONTO */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/60 px-4 py-1.5 text-xs font-extrabold tracking-wider text-emerald-300 uppercase mb-3 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md">
            <Gift className="size-4 text-emerald-400" /> TESTE GRÁTIS DE 3 DIAS LIBERADO 🎁
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-2 text-white">
            Como instalar o <span className="text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">UniTV Pro</span>
          </h1>
          <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto font-medium">
            Selecione seu aparelho abaixo. O teste de <strong className="text-emerald-300 font-bold">3 dias é ativado automaticamente</strong> na primeira vez que abrir o app!
          </p>
        </div>

        {/* NAVEGAÇÃO POR CATEGORIAS DE DISPOSITIVOS (DIRETO AO PONTO) */}
        <div className="mb-8">
          <div className="mb-3 text-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-white/70">
              Selecione o seu aparelho:
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 rounded-2xl bg-zinc-900/80 p-2 border border-white/15 backdrop-blur-md shadow-lg">
            <button
              onClick={() => setActiveTab("android")}
              className={`flex flex-col sm:flex-row items-center justify-center gap-2 rounded-xl py-3.5 px-3 text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeTab === "android"
                  ? "bg-gradient-to-r from-orange-600 via-amber-600 to-emerald-600 text-white shadow-[0_0_25px_rgba(249,115,22,0.4)] border border-orange-400/60 scale-[1.01]"
                  : "bg-stone-900/50 border border-white/10 text-white/80 backdrop-blur-md hover:bg-stone-800/80 hover:border-white/25 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-1">
                <Tv className="size-4 sm:size-5" />
                <Smartphone className="size-4 sm:size-5" />
              </div>
              <div className="text-center sm:text-left leading-tight">
                <span className="block font-black">Smart TV, TV Box, Stick, Projetor, Celular &amp; Tablet</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("pc")}
              className={`flex flex-col sm:flex-row items-center justify-center gap-2 rounded-xl py-3.5 px-3 text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeTab === "pc"
                  ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-[0_0_25px_rgba(220,38,38,0.4)] border border-red-400/60 scale-[1.01]"
                  : "bg-stone-900/50 border border-white/10 text-white/80 backdrop-blur-md hover:bg-stone-800/80 hover:border-white/25 hover:text-white"
              }`}
            >
              <Monitor className="size-4 sm:size-5" />
              <div className="text-center sm:text-left leading-tight">
                <span className="block font-black">Computador PC &amp; Notebook</span>
              </div>
            </button>
          </div>
        </div>

        {/* CONTEÚDO DAS 2 CATEGORIAS */}
        <div className="space-y-6">
          {/* CATEGORIA 1: SMART TV, TV BOX, STICK, CELULAR & TABLET */}
          {activeTab === "android" && (
            <>
              <DownloaderMethodCard methodNumber={1} subtitle="Recomendado para Smart TV Android, TV Box, Mi Stick Xiaomi, FireTV Stick, Projetor Android, Celular e Tablet" />
              <NtDownMethodCard methodNumber={2} subtitle="Opção via Play Store para Smartphone Android, Tablet, Projetor Android, Smart TV e TV Box" />
            </>
          )}

          {/* CATEGORIA 2: COMPUTADOR PC & NOTEBOOK */}
          {activeTab === "pc" && (
            <div className="space-y-6">
              <div className="rounded-3xl border-2 border-yellow-500/50 bg-gradient-to-b from-amber-950/20 via-zinc-900/70 to-black/90 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(245,158,11,0.15)]">
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3.5">
                    <LdPlayerAppIcon className="size-14 sm:size-16" />
                    <div>
                      <a
                        href={LDPLAYER_WEBSITE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/title inline-flex items-center gap-2 hover:text-yellow-300 transition-colors"
                      >
                        <h3 className="font-black text-white text-xl sm:text-2xl group-hover/title:text-yellow-300 flex items-center gap-2">
                          LDPlayer (Emulador PC) <ExternalLink className="size-4 text-yellow-400 opacity-80 group-hover/title:opacity-100" />
                        </h3>
                      </a>
                      <p className="text-xs text-yellow-300/90 font-semibold mt-0.5">
                        Emulador de Android super leve para Windows &amp; Mac
                      </p>
                    </div>
                  </div>
                  <a
                    href={LDPLAYER_WEBSITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-yellow-500/15 border border-yellow-500/30 px-3 py-1.5 text-[11px] font-extrabold text-yellow-300 shrink-0 hover:bg-yellow-500/25 transition-all"
                  >
                    ⚡ Baixar LDPlayer <ExternalLink className="size-3" />
                  </a>
                </div>

                <p className="text-sm text-white/90 leading-relaxed mb-4 font-medium">
                  Para assistir no Windows ou Mac, baixe o emulador oficial <strong className="text-yellow-300 font-black">LDPlayer</strong>. Ele é o emulador mais leve do mercado, ultra-rápido e otimizado para transmissões ao vivo.
                </p>

                {/* PREVIEW DO ÍCONE COM LINK PARA O SITE OFICIAL DO LDPLAYER */}
                <a
                  href={LDPLAYER_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 flex items-center gap-4 rounded-2xl border border-yellow-500/40 bg-yellow-950/30 p-4 backdrop-blur-md shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-all duration-300 hover:border-yellow-400/80 hover:bg-yellow-950/50 hover:scale-[1.01] group/preview cursor-pointer"
                >
                  <LdPlayerAppIcon className="size-14 sm:size-16" />
                  <div>
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider text-yellow-400 bg-yellow-500/20 border border-yellow-500/40 px-2 py-0.5 rounded-md mb-1">
                      🎯 TOQUE PARA ABRIR O SITE DO LDPLAYER
                    </span>
                    <h4 className="font-black text-white text-sm sm:text-base group-hover/preview:text-yellow-300 transition-colors flex items-center gap-1.5">
                      LDPlayer Oficial (pt.ldplayer.net) <ExternalLink className="size-3.5 text-yellow-400" />
                    </h4>
                    <p className="text-xs text-white/70">Download 100% Grátis, seguro e oficial para Computador &amp; Notebook</p>
                  </div>
                </a>

                <div className="rounded-2xl border border-amber-500/30 bg-black/60 p-4 text-xs text-amber-200 leading-relaxed backdrop-blur-md">
                  💡 <strong>Como usar no PC:</strong> Após instalar o LDPlayer, abra o aplicativo de download (Downloader ou Play Store) dentro dele e digite um dos 2 códigos de acesso abaixo!
                </div>
              </div>

              {/* MÉTODOS 1 E 2 NO PC TAMBÉM */}
              <DownloaderMethodCard methodNumber={1} subtitle="Método 1 via Downloader no emulador PC (Código 1089401)" />
              <NtDownMethodCard methodNumber={2} subtitle="Método 2 via ntDown no emulador PC (Código 94596)" />
            </div>
          )}
        </div>

        {/* BLOCO DE CONVERSÃO / ASSINATURA DE PLANOS (QUEM QUER COMPRAR DIRETO) */}
        <div className="mt-10 rounded-3xl border-2 border-red-500/50 bg-gradient-to-br from-red-950/60 via-zinc-900/70 to-black/85 p-8 sm:p-10 text-center shadow-[0_0_50px_rgba(220,38,38,0.25)] relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 size-40 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/20 border border-red-400/40 px-3.5 py-1 text-xs font-black text-red-300 uppercase tracking-wider mb-3">
            <Zap className="size-3.5 text-red-400" /> Recargas e Assinaturas
          </span>
          <h3 className="text-2xl sm:text-4xl font-black text-white mb-2">Pronto para garantir sua recarga?</h3>
          <p className="text-sm sm:text-base text-white/80 max-w-md mx-auto mb-7 font-medium leading-relaxed">
            Confira nossos planos Mensal, Trimestral e Anual com ativação imediata e 7 dias de garantia de reembolso!
          </p>
          <a
            href="/#planos"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-red-700 px-8 py-4 text-sm sm:text-base font-black text-white shadow-[0_0_35px_rgba(220,38,38,0.6)] hover:scale-[1.03] transition-all"
          >
            <ShieldCheck className="size-5" />
            VER PLANOS DE ASSINATURA
          </a>
        </div>

        {/* CTA ATENDIMENTO E AJUDA VIA WHATSAPP (SUPORTE TÉCNICO DIRETO) */}
        <div className="mt-8 rounded-3xl border-2 border-green-700/50 bg-gradient-to-b from-green-950/50 via-zinc-900/70 to-black/85 p-7 text-center backdrop-blur-xl shadow-xl">
          <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-green-500/20 border border-green-400/40 text-green-400 mb-3 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <WhatsAppIcon className="size-6 text-green-400 fill-current" />
          </div>
          <h3 className="text-xl font-black text-white mb-1">Precisa de ajuda para instalar?</h3>
          <p className="text-xs sm:text-sm text-white/80 mb-6 font-medium max-w-md mx-auto">
            Nossa equipe de suporte técnico está de plantão no WhatsApp para tirar suas dúvidas e te ajudar passo a passo!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/5561984016006?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20para%20instalar%20o%20UniTV%20Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3.5 text-xs sm:text-sm font-black text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-[1.02] transition-all"
            >
              <WhatsAppIcon className="size-4.5 fill-current" />
              Falar com o Suporte Técnico
            </a>
            <a
              href="https://wa.me/5561982743140?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20para%20instalar%20o%20UniTV%20Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-zinc-900/80 border border-green-700/50 px-6 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-md hover:bg-zinc-800 shadow-md transition-all"
            >
              <WhatsAppIcon className="size-4.5 text-green-400 fill-current" />
              Atendimento Secundário
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
