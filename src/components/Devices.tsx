import { Tv, Smartphone, Monitor, Flame, CheckCircle2, Download, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const DEVICES_LIST = [
  {
    icon: Tv,
    title: "Smart TVs",
    subtitle: "Samsung, LG, Android TV, TCL e Roku",
    desc: "Baixe o aplicativo diretamente na loja oficial da sua TV. Assista em até 4K HDR com áudio dublado e legendado.",
    badgeColor: "from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-300",
    tags: ["Samsung Tizen", "LG webOS", "Android TV", "Roku TV", "TCL & Philips"],
  },
  {
    icon: Flame,
    title: "TV Box & Streaming Sticks",
    subtitle: "Fire TV Stick, Chromecast, Mi Box e Apple TV",
    desc: "Transforme qualquer televisão antiga em uma Smart TV moderna. Instalação rápida em menos de 2 minutos.",
    badgeColor: "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-300",
    tags: ["Fire TV Stick", "Chromecast", "Mi TV Box", "Apple TV 4K", "TV Box Android"],
  },
  {
    icon: Smartphone,
    title: "Celulares & Tablets",
    subtitle: "iOS (iPhone/iPad) e Android",
    desc: "Leve seus filmes, séries e jogos de futebol ao vivo para onde quiser. Baixe seus episódios favoritos e assista offline.",
    badgeColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300",
    tags: ["iPhone (iOS)", "iPad", "Android Phones", "Tablets Android"],
  },
  {
    icon: Monitor,
    title: "Computadores & Notebooks",
    subtitle: "Windows, Mac e todos os navegadores",
    desc: "Acesse pelo Chrome, Edge, Safari ou Firefox sem precisar instalar nada extra. Interface web fluida e ultra-rápida.",
    badgeColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300",
    tags: ["Windows 10 / 11", "macOS", "Google Chrome", "Safari & Edge"],
  },
];

export function Devices() {
  return (
    <section id="dispositivos" className="relative z-10 mx-auto w-[94%] max-w-6xl py-12 sm:py-16">
      <Reveal>
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-950/40 px-4 py-2 text-xs font-bold tracking-wider text-purple-300 uppercase shadow-sm mb-4">
            <Tv className="size-3.5 text-accent" /> Compatibilidade Total
          </span>
          <h2 className="text-3xl font-black sm:text-5xl tracking-tight text-white drop-shadow-md">
            Assista onde quiser, <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 font-extrabold">quando quiser</span>
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-xs sm:text-sm text-muted-foreground font-semibold leading-relaxed">
            Instale o aplicativo da Cineflix em poucos cliques em qualquer aparelho. Sem necessidade de cabos, antenas ou técnicos.
          </p>
        </div>
      </Reveal>

      {/* CARDS DE DISPOSITIVOS */}
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {DEVICES_LIST.map((d) => (
          <Reveal key={d.title}>
            <div className="group relative flex flex-col justify-between h-full rounded-3xl border border-white/10 bg-gradient-to-b from-surface/80 via-surface/40 to-surface/70 p-6 sm:p-8 transition-all duration-300 hover:border-purple-400/60 hover:shadow-[0_12px_40px_rgba(168,85,247,0.25)]">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className={`flex size-12 sm:size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${d.badgeColor} border shadow-md transition-transform duration-300 group-hover:scale-110`}>
                    <d.icon className="size-6 sm:size-7 text-white" />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] sm:text-xs font-extrabold text-emerald-400 uppercase tracking-wider">
                    <CheckCircle2 className="size-3" /> 100% Compatível
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {d.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-purple-300/90 mt-0.5">
                  {d.subtitle}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
                  {d.desc}
                </p>
              </div>

              {/* TAGS DOS APARELHOS */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {d.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-bold text-white/80 transition-colors group-hover:border-purple-400/30 group-hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* GUIA PASSO A PASSO SIMPLES */}
      <Reveal>
        <div className="mt-10 sm:mt-12 rounded-3xl border border-white/10 bg-surface/30 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-accent uppercase tracking-wider mb-1">
                <Zap className="size-3.5" /> Instalação ultra simples
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Pronto para assistir em menos de 3 minutos?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Ao assinar qualquer plano, você recebe o tutorial completo passo a passo direto no seu WhatsApp.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-2 rounded-2xl border border-purple-400/30 bg-purple-950/50 px-4 py-3 text-xs font-extrabold text-white shadow-md">
                <Download className="size-4 text-accent" />
                <span>Ativação Imediata</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
