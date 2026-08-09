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
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/LG_smart_TV.jpg/1280px-LG_smart_TV.jpg",
    alt: "Smart TV LG com tela de alta definição",
  },
  {
    icon: Flame,
    title: "TV Box & Aparelhos Android",
    subtitle: "TV Box Android, Chromecast e Mi Box",
    desc: "Transforme qualquer televisão antiga em uma Smart TV moderna. Instalação rápida em menos de 2 minutos.",
    badgeColor: "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-300",
    tags: ["TV Box Android", "Chromecast", "Mi TV Box", "Sistemas Android"],
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Xiaomi_Mi_Box_S.jpg/1280px-Xiaomi_Mi_Box_S.jpg",
    alt: "Xiaomi Mi Box S Android TV Box real",
  },
  {
    icon: Smartphone,
    title: "Celulares & Tablets",
    subtitle: "iOS (iPhone/iPad) e Android",
    desc: "Leve seus filmes, séries e jogos de futebol ao vivo para onde quiser. Baixe seus episódios favoritos e assista offline.",
    badgeColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300",
    tags: ["iPhone (iOS)", "iPad", "Android Phones", "Tablets Android"],
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/IPhone_15_Pro.jpeg/960px-IPhone_15_Pro.jpeg",
    alt: "Smartphone iPhone real",
  },
  {
    icon: Monitor,
    title: "Computadores & Notebooks",
    subtitle: "Windows, Mac e todos os navegadores",
    desc: "Acesse pelo Chrome, Edge, Safari ou Firefox sem precisar instalar nada extra. Interface web fluida e ultra-rápida.",
    badgeColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300",
    tags: ["Windows 10 / 11", "macOS", "Google Chrome", "Safari & Edge"],
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/MacBook_Pro_and_SurfaceBook.jpg/1280px-MacBook_Pro_and_SurfaceBook.jpg",
    alt: "Notebook MacBook Pro real",
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

      {/* CARDS DE DISPOSITIVOS COM IMAGENS REAIS DE HARDWARE */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {DEVICES_LIST.map((d) => (
          <Reveal key={d.title}>
            <div className="group relative flex flex-col justify-between overflow-hidden h-full rounded-3xl border border-white/10 bg-gradient-to-b from-surface/90 via-surface/50 to-surface/80 p-6 sm:p-7 transition-all duration-300 hover:border-purple-400/60 hover:shadow-[0_16px_50px_rgba(168,85,247,0.25)]">
              <div>
                {/* CONTAINER DA IMAGEM REAL */}
                <div className="relative mb-5 h-48 sm:h-52 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                  <img
                    src={d.imagem}
                    alt={d.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
                  
                  {/* BADGE DE COMPATIBILIDADE */}
                  <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-950/80 backdrop-blur-md px-3 py-1 text-[10px] sm:text-xs font-extrabold text-emerald-300 uppercase tracking-wider shadow-md">
                    <CheckCircle2 className="size-3" /> 100% Compatível
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <div className={`flex size-10 items-center justify-center rounded-xl bg-gradient-to-br ${d.badgeColor} border shadow-sm`}>
                    <d.icon className="size-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-none">
                      {d.title}
                    </h3>
                    <p className="text-xs font-semibold text-purple-300/90 mt-1">
                      {d.subtitle}
                    </p>
                  </div>
                </div>

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
