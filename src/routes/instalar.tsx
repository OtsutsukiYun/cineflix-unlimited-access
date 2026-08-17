import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Download,
  Smartphone,
  Hash,
  ArrowLeft,
  ExternalLink,
  Tv,
  Monitor,
  Copy,
  Check,
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

// CAPINHAS 100% VERIFICADAS DO CATÁLOGO DO SITE (ZERO FALHAS OU ERROS DE IMAGEM)
const ROW_1_POSTERS = [
  "/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg", // Obsessão
  "/uRxrNXQWkHoENm3nwVOZDYSCx2F.jpg", // Evil Dead Burn
  "/kNxRgcTeqeU5jauBackTERoO2De.jpg", // Other Mommy
  "/2PFgFMnrdCPXWiZl1PUvky7Mo9D.jpg", // Undertone
  "/2sOEJzhPzjTkZSlPbGxOJ7xgIyS.jpg", // Passageiro do Mal
  "/x6rHcQFiYcczLQPrmxXPAicm54E.jpg", // Hokum
  "/pRtJagIxpfODzzb0T0NAvZSzErC.jpg", // Origem
  "/qEl4BDBTGnhLiadZx0c9nHM8vBF.jpg", // Backrooms
  "/oCutmhFznao1Pzy6wM1C32kxAEu.jpg", // Channel Zero
  "/vKq8XEJKxQTHd2Bm5zZMFPUrke7.jpg", // Widow's Bay
  "/iSq6J55RFLfwcceDKxYtMjOr1sz.jpg", // Dark Water
  "/zm0KAbOjlt9eR5y7vDiL2dEOwMl.jpg", // Michael
];

const ROW_2_POSTERS = [
  "/rpU5DGrTVdqcygZBB9npt1WMFch.jpg", // Socorro!
  "/pmff1wjKrgJi92PPr346lAifzlg.jpg", // Dia D
  "/yihdXomYb5kTeSivtFndMy5iDmf.jpg", // Devoradores de Estrelas
  "/yH2sGLdQejqf3Zk8KDuoDa5gr6E.jpg", // The Eyes
  "/xNVJr9q6AtSbjosS6Ed9YirOkSo.jpg", // Cure
  "/zp5NrmYp80axIGiEiYPmm1CW6uH.jpg", // Eu Vi o Diabo
  "/mL4vGghS5XtgeNIPjhoTg8Tv5cJ.jpg", // O Lamento
  "/1ZTrQWpuhxMr32uC1fQBRnkVYlf.jpg", // Pemandi Jenazah
  "/bOl0rJ86WWxVYlQlGttHhHuYiPQ.jpg", // Salmokji
  "/ojWSVt7O92ZLtEUyQs8u5pRI40b.jpg", // Dia Bukan Ibu
  "/fn5QNtG3LLXC3e7ZTQDYP92kFYc.jpg", // Hokum 2
  "/fI6XBw8k5CWNwxLEYZwpjA89TPg.jpg", // A Maldição da Múmia
];

const ROW_3_POSTERS = [
  "/v0Ljeti537c6cNKweuEN0iaU3x4.jpg", // Pecadores
  "/40nHGUfypLhlr7gJx8At1IbYkaK.jpg", // Invocação do Mal 4
  "/p3epSUdF9qSWWHTBlA3mJ0w2i2Y.jpg", // O Telefone Preto 2
  "/xfmnUz6C5WRboIMQZD0j3SNDT7v.jpg", // Faça Ela Voltar
  "/temIXpcua7j5v4FipOxmzTfrB06.jpg", // Premonição 6
  "/12H82Xrr2ijDF0lJWUarqGFV7bC.jpg", // FNAF 2
  "/skwydfnpaQdRQZfXMroh59FMJyY.jpg", // Rua do Medo
  "/2jME1L29XGE3T4f0zUHgpiKsPrV.jpg", // O Macaco
  "/fbkUfzmVzEBFSt6p7VigknREIJT.jpg", // Nosferatu
  "/j5e2YS1PRUVC1YgSool0JJyNLxJ.jpg", // Herege
  "/vWeOgzlhnP1sS23H3rzctGHB9Nb.jpg", // A Substância
  "/3HeKb5H89HjzWTkVkAqomu9mek.jpg", // Terrifier 3
];

const ROW_4_POSTERS = [
  "/ypHiYvSJmHIyRDRiosZuE595uir.jpg", // Sorria 2
  "/uURBOrqLFyU8iKODcI3t2Xkbhqs.jpg", // Longlegs
  "/5gKKSoD3iezjoL7YqZONjmyAiRA.jpg", // Abigail
  "/6EYfWxIGPc23m1GFs9Gt3kzTl5O.jpg", // Imaculada
  "/zppeHKLHljU2uI7NBJ1JyDNpn6L.jpg", // A Primeira Profecia
  "/jB0W9tn4w07MFn7sTfqRTBLVytF.jpg", // Alien: Romulus
  "/pN9BtzUeqPIKybAu9baihz6YzyO.jpg", // Um Lugar Silencioso: Dia Um
  "/6lp4uDxLqLEw1CzW1SUOYJ3zdKD.jpg", // Sobrenatural: A Porta Vermelha
  "/hqIIoGsKKGWK7HjpgCSvV6mgKyT.jpg", // O Exorcista do Papa
  "/omV2IW2OlFTSw6Hih13hz6lFdvP.jpg", // A Freira 2
  "/nocx1g4AwO4HyyuWF5gnM5WjGJL.jpg", // Terrifier 2
  "/aAdnNifQo2qxDYnuDD3blsxinH1.jpg", // O Telefone Preto
];

const DOWNLOADER_PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=com.esaba.downloader";
const NTDOWN_PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=link.ntdev.ntdw";
const LDPLAYER_WEBSITE_URL = "https://pt.ldplayer.net/";

function DownloaderAppIcon({ className = "size-12 sm:size-14" }: { className?: string }) {
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

function NtDownAppIcon({ className = "size-12 sm:size-14" }: { className?: string }) {
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

function LdPlayerAppIcon({ className = "size-12 sm:size-14" }: { className?: string }) {
  return (
    <div
      title="LDPlayer Official Icon"
      className={`group/icon relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 border border-amber-300/70 shadow-[0_4px_20px_rgba(245,158,11,0.4)] transition-all duration-300 ${className}`}
    >
      <div className="flex flex-col items-center justify-center text-black font-black select-none">
        <span className="text-xl sm:text-2xl font-black tracking-tighter leading-none text-black drop-shadow-sm flex items-center gap-0.5">
          LD<span className="text-amber-950 font-black text-xs">►</span>
        </span>
        <span className="text-[8px] font-black tracking-tighter uppercase text-black/90 leading-none mt-0.5">PLAYER</span>
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
    <div className="mt-2.5 flex items-center justify-between gap-3 rounded-2xl p-3.5 sm:p-4 border border-white/15 bg-black/80 shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-xl bg-red-600/20 text-red-400 border border-red-500/30">
          <Hash className="size-5" />
        </div>
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground block">
            Código de Instalação
          </span>
          <div className="font-mono font-black text-2xl sm:text-3xl tracking-widest leading-none mt-0.5 text-white">
            {code}
          </div>
        </div>
      </div>

      <button
        onClick={handleCopy}
        className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
          copied
            ? "bg-emerald-600 text-white shadow-md"
            : "bg-red-600 text-white hover:bg-red-500 shadow-md hover:scale-[1.02]"
        }`}
      >
        {copied ? (
          <>
            <Check className="size-3.5 text-white" /> COPIADO
          </>
        ) : (
          <>
            <Copy className="size-3.5" /> COPIAR CÓDIGO
          </>
        )}
      </button>
    </div>
  );
}

function DownloaderMethodCard({ methodNumber = 1, subtitle = "Ideal para Smart TV, TV Box, FireTV e Mi Stick" }: { methodNumber?: number; subtitle?: string }) {
  return (
    <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
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
            Abra o <strong>Downloader</strong> e digite o código de instalação:
            <CodeCopyBox code="1089401" />
          </div>
        </li>

        <li className="flex items-start gap-3.5">
          <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-black">
            3
          </div>
          <div className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5 w-full">
            Clique em <strong>"Go"</strong>. Se o download não iniciar automático, toque no botão azul{" "}
            <span className="inline-block whitespace-nowrap rounded-md bg-blue-600 border border-blue-400/60 px-2 py-0.5 text-xs font-black text-white shadow-sm align-baseline">
              unitv_RS-NPWN
            </span>{" "}
            e instale o aplicativo.
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
    <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
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
            Toque no botão azul{" "}
            <span className="inline-block whitespace-nowrap rounded-md bg-blue-600 border border-blue-400/60 px-2 py-0.5 text-xs font-black text-white shadow-sm align-baseline">
              unitv_RS-NPWN
            </span>{" "}
            para baixar, conclua a instalação e abra o <strong>UniTV Pro</strong>.
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
    <div className="relative min-h-screen bg-[#0d090b] text-white overflow-x-hidden">
      {/* LUZ AMBIENTAL VERMELHA SUAVE */}
      <div className="pointer-events-none fixed top-1/4 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-red-600/15 blur-[160px] z-0" />
      <div className="pointer-events-none fixed bottom-20 right-10 size-[500px] rounded-full bg-rose-700/15 blur-[140px] z-0" />

      {/* BARRA PROMOCIONAL DO TOPO */}
      <div className="fixed inset-x-0 top-0 z-[60]">
        <PromoBanner />
      </div>

      {/* HEADER COMPACTO VIDRO COM BLUR PREMIUM */}
      <header className="fixed inset-x-0 top-8 z-50 transition-all duration-300 [transform:translateZ(0)]">
        <div className="glass mx-auto mt-2 flex w-[94%] max-w-6xl items-center justify-between rounded-full px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.8)] border border-white/15 backdrop-blur-2xl bg-black/60">
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

          <a
            href="/#planos"
            className="btn-cta px-4 py-1.5 text-[11px] font-extrabold tracking-wide uppercase shadow-md"
          >
            QUERO ASSINAR
          </a>
        </div>
      </header>

      {/* GRADE DE CAPINHAS DE FILMES DE FUNDO (FIXO NO VIEWPORT - NUNCA ACABA AO ROLAR) */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-35">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d090b]/85 via-[#0d090b]/65 to-[#0d090b]/90 z-10" />
        <div className="flex flex-col gap-4 pt-16 scale-105 blur-[1px]">
          <div className="flex w-max gap-4 animate-marquee">
            {ROW_1_POSTERS.concat(ROW_1_POSTERS).concat(ROW_1_POSTERS).map((p, i) => (
              <img key={`r1-${i}`} src={img(p, "w342")} alt="" className="h-40 w-28 rounded-xl object-cover shadow-md" />
            ))}
          </div>
          <div className="flex w-max gap-4 animate-marquee-reverse">
            {ROW_2_POSTERS.concat(ROW_2_POSTERS).concat(ROW_2_POSTERS).map((p, i) => (
              <img key={`r2-${i}`} src={img(p, "w342")} alt="" className="h-40 w-28 rounded-xl object-cover shadow-md" />
            ))}
          </div>
          <div className="flex w-max gap-4 animate-marquee">
            {ROW_3_POSTERS.concat(ROW_3_POSTERS).concat(ROW_3_POSTERS).map((p, i) => (
              <img key={`r3-${i}`} src={img(p, "w342")} alt="" className="h-40 w-28 rounded-xl object-cover shadow-md" />
            ))}
          </div>
          <div className="flex w-max gap-4 animate-marquee-reverse">
            {ROW_4_POSTERS.concat(ROW_4_POSTERS).concat(ROW_4_POSTERS).map((p, i) => (
              <img key={`r4-${i}`} src={img(p, "w342")} alt="" className="h-40 w-28 rounded-xl object-cover shadow-md" />
            ))}
          </div>
          <div className="flex w-max gap-4 animate-marquee">
            {ROW_1_POSTERS.concat(ROW_2_POSTERS).concat(ROW_1_POSTERS).map((p, i) => (
              <img key={`r5-${i}`} src={img(p, "w342")} alt="" className="h-40 w-28 rounded-xl object-cover shadow-md" />
            ))}
          </div>
          <div className="flex w-max gap-4 animate-marquee-reverse">
            {ROW_3_POSTERS.concat(ROW_4_POSTERS).concat(ROW_3_POSTERS).map((p, i) => (
              <img key={`r6-${i}`} src={img(p, "w342")} alt="" className="h-40 w-28 rounded-xl object-cover shadow-md" />
            ))}
          </div>
          <div className="flex w-max gap-4 animate-marquee">
            {ROW_2_POSTERS.concat(ROW_4_POSTERS).concat(ROW_1_POSTERS).map((p, i) => (
              <img key={`r7-${i}`} src={img(p, "w342")} alt="" className="h-40 w-28 rounded-xl object-cover shadow-md" />
            ))}
          </div>
          <div className="flex w-max gap-4 animate-marquee-reverse">
            {ROW_1_POSTERS.concat(ROW_3_POSTERS).concat(ROW_2_POSTERS).map((p, i) => (
              <img key={`r8-${i}`} src={img(p, "w342")} alt="" className="h-40 w-28 rounded-xl object-cover shadow-md" />
            ))}
          </div>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL (ESPAÇAMENTO TOP ADEQUADO PARA NÃO CONFLITAR COM O HEADER FLUTUANTE) */}
      <div className="relative z-10 mx-auto w-[94%] max-w-3xl pt-36 sm:pt-40 pb-16">
        <div className="text-center mb-5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-950/40 px-3.5 py-1 text-xs font-bold tracking-wider text-red-400 uppercase mb-2">
            <Download className="size-3.5" /> Guia Rápido de Instalação
          </span>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight mb-1.5">
            Como instalar o <span className="text-red-500">UniTV Pro</span>
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto leading-normal">
            Passo a passo simples para Smart TV Android, TV Box, FireTV, Celular, Tablet ou PC.
          </p>
        </div>

        {/* NAVEGAÇÃO DE DISPOSITIVOS EM ESTILO VIDRO */}
        <div className="mb-4">
          <div className="grid grid-cols-2 gap-2.5 rounded-2xl glass p-1.5 border border-white/10 backdrop-blur-2xl shadow-xl">
            <button
              onClick={() => setActiveTab("android")}
              className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === "android"
                  ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)] border border-red-500/50"
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
              className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === "pc"
                  ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)] border border-red-500/50"
                  : "bg-transparent text-muted-foreground hover:text-white"
              }`}
            >
              <Monitor className="size-4" />
              <span>Computador &amp; Notebook</span>
            </button>
          </div>
        </div>

        {/* MÉTODOS EM CARDS DE VIDRO */}
        <div className="space-y-4">
          {activeTab === "android" && (
            <>
              <DownloaderMethodCard methodNumber={1} subtitle="Recomendado para Smart TV, TV Box, FireTV Stick, Mi Stick e Tablet" />
              <NtDownMethodCard methodNumber={2} subtitle="Opção via Play Store para Celular Android e Tablet" />
            </>
          )}

          {activeTab === "pc" && (
            <div className="space-y-6">
              <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
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

        {/* CTA ATENDIMENTO E AJUDA VIA WHATSAPP EM CARD DE VIDRO */}
        <div className="mt-10 glass p-7 text-center rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-xl">
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
