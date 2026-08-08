import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

function HeroHeading() {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-[0.95] font-extrabold drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
      <span>Conteúdo ilimitado</span>
      <br />
      <span className="text-hot drop-shadow-[0_0_35px_rgba(168,85,247,0.6)]">
        por um preço que cabe no bolso
      </span>
    </h1>
  );
}


function CascadeGrid({
  children,
  className = "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
}: {
  children: (visible: boolean) => React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children(visible)}
    </div>
  );
}
import {
  Check,
  Clapperboard,
  Flame,
  Ghost,
  Baby,
  Trophy,
  Tv,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PromoBanner } from "@/components/PromoBanner";
import { Rail } from "@/components/Rail";
import { Faq } from "@/components/Faq";
import { TrustSection } from "@/components/TrustSection";
import { Torii } from "@/components/icons";
import { BrandLogo } from "@/components/BrandLogo";
import { SocialProof } from "@/components/SocialProof";
import futebol from "@/assets/futebol.jpg";
import {
  animes,
  heroSlides,
  img,
  plataformas,
  series,
  terror,
} from "@/data/catalog";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cineflix — Streaming ilimitado por R$20/mês" },
      {
        name: "description",
        content:
          "Mais de 60.000 filmes, séries, animes, infantil e futebol ao vivo em um só app. Lançamentos de terror, Netflix, Disney+, HBO Max e mais por R$20/mês.",
      },
      { property: "og:title", content: "Cineflix — Streaming ilimitado por R$20/mês" },
      {
        property: "og:description",
        content:
          "Todos os streamings em uma única plataforma. Lançamentos de terror, animes, infantil e esportes ao vivo em 4K.",
      },
    ],
  }),
  component: Index,
});

const CTA_HREF = "#planos";

function smoothTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const el = document.querySelector(href);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", href);
}

function SmoothLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={className ?? ""}
      onClick={(e) => smoothTo(e, href)}
    >
      {children}
    </a>
  );
}

function Cta({ children = "ADQUIRA O SEU AGORA" }: { children?: string }) {
  return (
    <SmoothLink href={CTA_HREF} className="btn-cta animate-pulse-ring">
      <Zap className="size-4" />
      {children}
    </SmoothLink>
  );
}




function Index() {
  const [slide, setSlide] = useState(0);
  const [economiaTextDone, setEconomiaTextDone] = useState(false);

  useEffect(() => {
    const id = setInterval(
      () => setSlide((s) => (s + 1) % heroSlides.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* BARRA PROMOCIONAL + NAV — empilhados para mobile funcionar */}
      <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
        <div className="z-[60]">
          <PromoBanner />
        </div>
        <header>
          <div className="glass mx-auto mt-2 flex w-[94%] max-w-6xl items-center justify-between rounded-full px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="bg-hot flex size-8 items-center justify-center rounded-full">
              <Play className="size-4 fill-current text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-extrabold tracking-tight">
              CINE<span className="text-hot">FLIX</span>
            </span>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {[
              { h: "#catalogo", l: "Catálogo" },
              { h: "#esportes", l: "Esportes" },
              { h: "#economia", l: "Comparar Preços" },
              { h: "#planos", l: "Planos" },
              { h: "#faq", l: "Dúvidas Frequentes" },
            ].map((n) => (
              <SmoothLink
                key={n.h}
                href={n.h}
                className="transition-colors hover:text-foreground"
              >
                {n.l}
              </SmoothLink>
            ))}
            <Link
              to="/suporte"
              className="transition-colors hover:text-foreground"
            >
              Suporte
            </Link>
          </nav>

          <SmoothLink href={CTA_HREF} className="btn-cta px-5 py-2.5 text-xs">
            Assinar
          </SmoothLink>

        </div>
        </header>
      </div>

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        {heroSlides.map((s, i) => (
          <img
            key={s.title}
            src={img(s.backdrop, "original")}
            alt={`Cena do filme ${s.title}`}
            className="absolute inset-0 size-full object-cover transition-all duration-[2200ms] ease-out"
            style={{
              opacity: i === slide ? 1 : 0,
              transform: i === slide ? "scale(1.02)" : "scale(1)",
              objectPosition: s.objectPositionMobile ?? s.objectPosition ?? "center 15%",
              filter: s.brightness ?? "none",
            }}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/80 via-background/55 to-transparent md:via-background/60 md:to-background/10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        {/* VINHETA CINEMATOGRÁFICA (VIGNETTE) NAS BORDAS */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.85)_100%)]" />
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />

        <div className="relative z-10 mx-auto w-[94%] max-w-6xl pt-36 pb-12 sm:pt-44 md:pt-48 lg:pt-52">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-surface/90 px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-semibold tracking-wide uppercase shadow-[0_0_20px_rgba(168,85,247,0.3)] mb-4 sm:mb-6">
                <Sparkles className="size-3.5 text-accent" />
                Os principais lançamentos de terror
              </div>

              <HeroHeading />

              <p className="mt-3 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg font-medium text-foreground/90 drop-shadow-md">
                Mais de 2 mil canais e 60.000 conteúdos — Netflix, Disney+, HBO
                Max, Prime Video, Apple TV+ e muito mais em um único app. Com
                qualidade 4K, estabilidade e suporte dedicated.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Cta />
                <SmoothLink href="#catalogo" className="btn-ghost">
                  <Clapperboard className="size-4" /> Ver catálogo
                </SmoothLink>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Star className="size-4 fill-accent text-accent" /> 4.9 de
                  satisfação
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-accent" /> Cancele quando
                  quiser
                </span>
              </div>

              {/* OBSERVAÇÕES E SINOPSE DO FILME/SÉRIE */}
              <div className="mt-6 border-l-2 border-primary/80 pl-4 py-1 backdrop-blur-xs transition-all duration-500 max-w-xl">
                <p className="font-display text-sm font-bold tracking-wide text-foreground">
                  {heroSlides[slide]?.title}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {heroSlides[slide]?.genre} · {heroSlides[slide]?.year} — <span className="text-foreground/90 font-medium">{heroSlides[slide]?.tagline}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex gap-2">
            {heroSlides.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setSlide(i)}
                aria-label={`Ver ${s.title}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === slide ? "w-10 bg-primary" : "w-3 bg-muted-foreground/30"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO INFERIOR — GRADIENTE AMBIENTE ROXO VIBRANTE NO TOPO E ESCURO NOS PLANOS */}
      <div className="relative bg-gradient-to-b from-background via-[#1a092b] via-20% via-[#120520] via-65% to-[#06030c] overflow-hidden">
        {/* LUZES AMBIENTES FLUTUANTES VIBRANTES NO TOPO */}
        <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 size-[750px] rounded-full bg-primary/18 blur-[150px]" />
        <div className="pointer-events-none absolute top-[35%] right-0 size-[650px] rounded-full bg-primary/12 blur-[140px]" />
        <div className="pointer-events-none absolute top-[75%] left-0 size-[650px] rounded-full bg-primary/10 blur-[160px]" />

        {/* MARQUEE PLATAFORMAS */}
        <section className="relative z-10 border-y border-border/70 bg-background/40 backdrop-blur-md py-5 sm:py-6">
          <p className="mb-4 text-center text-xs tracking-[0.25em] text-muted-foreground uppercase font-semibold">
            Todos os streamings em um só lugar
          </p>
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex shrink-0 items-center gap-14 pr-14">
              {[...plataformas, ...plataformas].map((p, i) => (
                <div
                  key={p.nome + i}
                  className="opacity-75 transition-all duration-300 hover:opacity-100 hover:scale-110"
                >
                  <BrandLogo
                    nome={p.nome}
                    logo={p.logo}
                    invert={p.invert === true}
                    escala={p.escala ?? 1}
                    cor={p.cor}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATÁLOGO */}
        <section id="catalogo" className="relative z-10 pt-8 pb-4">
          <Reveal className="mx-auto mb-4 w-[94%] max-w-6xl text-center">
            <h2 className="text-4xl font-extrabold md:text-5xl">
              Os mais assistidos <span className="text-hot">agora</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Seus filmes, séries e animes favoritos com a experiência que você
              merece — em alta definição, sem antena e sem decodificador.
            </p>
          </Reveal>

          <Rail
            icon={Flame}
            title="Terror — lançamentos e clássicos"
            subtitle="Obsessão, Boca do Diabo, Undertone, Hokum, Passageiro do Mal e mais"
            items={terror}
          />
          <Rail
            icon={Ghost}
            title="Séries de terror para você maratonar"
            subtitle="Cabo do Medo, Origem (FROM), Channel Zero, O Segredo de Widow's Bay e mais"
            items={series}
          />
          <Rail
            icon={Torii}
            title="Animes Crunchyroll"
            subtitle="Demon Slayer, Frieren, Jujutsu Kaisen, Solo Leveling e mais"
            items={animes}
          />
        </section>

        {/* FEATURES */}
        <section className="relative z-10 mx-auto w-[94%] max-w-6xl py-8 sm:py-10">
          <CascadeGrid>
            {(visible) => (
              <div className="grid gap-5 md:grid-cols-3 col-span-full">
                {[
                  {
                    icon: Clapperboard,
                    gradient: "from-rose-600 via-primary to-purple-600",
                    glow: "shadow-[0_0_22px_rgba(225,29,72,0.85)] border-rose-300/80",
                    t: "Filmes incríveis",
                    d: "Clássicos, lançamentos e grandes produções premiadas em alta definição.",
                  },
                  {
                    icon: Tv,
                    gradient: "from-purple-600 via-primary to-accent",
                    glow: "shadow-[0_0_22px_rgba(168,85,247,0.85)] border-purple-300/80",
                    t: "Séries imperdíveis",
                    d: "Temporadas completas dos sucessos do momento para maratonar sem limites.",
                  },
                  {
                    icon: Torii,
                    gradient: "from-fuchsia-600 via-purple-600 to-pink-500",
                    glow: "shadow-[0_0_22px_rgba(217,70,239,0.85)] border-fuchsia-300/80",
                    t: "Animes atualizados",
                    d: "Lista enorme com todos os animes do momento, sempre em dia e em HD.",
                  },
                  {
                    icon: Baby,
                    gradient: "from-amber-500 via-orange-500 to-rose-500",
                    glow: "shadow-[0_0_22px_rgba(245,158,11,0.85)] border-amber-300/80",
                    t: "Canais infantis",
                    d: "Toda a lista para a criançada, incluindo Disney+ e muito mais.",
                  },
                  {
                    icon: ShieldCheck,
                    gradient: "from-violet-700 via-purple-800 to-indigo-900",
                    glow: "shadow-[0_0_22px_rgba(139,92,246,0.85)] border-violet-300/80",
                    t: "Canais adultos",
                    d: "Opcional e protegido por senha, para a segurança das crianças.",
                  },
                  {
                    icon: Trophy,
                    gradient: "from-emerald-500 via-teal-600 to-cyan-500",
                    glow: "shadow-[0_0_22px_rgba(16,185,129,0.85)] border-emerald-300/80",
                    t: "Esportes ao vivo",
                    d: "Futebol, artes marciais e todos os canais esportivos ao vivo.",
                  },
                ].map((f, i) => (
                  <div
                    key={f.t}
                    data-visible={visible}
                    style={{ transitionDelay: `${i * 90}ms` }}
                    className="reveal group relative h-full rounded-4xl p-7 border border-purple-500/30 bg-gradient-to-b from-[#1a082c]/90 via-[#110420]/90 to-[#0a0214]/90 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-purple-400/80 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] hover:-translate-y-2"
                  >
                    {/* ÍCONE 3D RELUZENTE E FLUTUANTE */}
                    <div className="relative mb-5 shrink-0">
                      <div className={`animate-icon-float-3d relative flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.gradient} p-0.5 border ${f.glow} transform-gpu transition-all duration-300 group-hover:scale-110`}>
                        <div className="relative flex size-full items-center justify-center rounded-[14px] bg-black/25 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-90" />
                          <f.icon className="size-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] relative z-10" />
                        </div>
                      </div>
                    </div>

                    <h3 className="mb-2 text-lg sm:text-xl font-extrabold text-white transition-colors duration-300 group-hover:text-purple-200">{f.t}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {f.d}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </CascadeGrid>
        </section>

        {/* ESPORTES */}
        <section id="esportes" className="relative z-10 my-6 sm:my-8 overflow-hidden">
          <div className="relative mx-auto w-[94%] max-w-6xl overflow-hidden rounded-4xl border border-border/80 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <img
              src={futebol}
              alt="Torcida em estádio de futebol lotado à noite"
              loading="lazy"
              width={1280}
              height={720}
              className="absolute inset-0 size-full object-cover animate-kenburns"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
            <Reveal className="relative p-8 md:p-16">
              <span className="glass mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase border border-primary/30 animate-pulse">
                <Trophy className="size-3.5 text-accent" /> Esportes ao vivo
              </span>
              <h2 className="max-w-lg text-4xl font-extrabold md:text-5xl">
                Para quem é <span className="text-hot">fanático por futebol</span>
              </h2>
              <p className="mt-5 max-w-lg text-muted-foreground">
                Acompanhe os maiores campeonatos do Brasil e do mundo, além de
                lutas, NBA, NFL e tudo que você ama — sem travar, em 4K.
              </p>
              <div className="mt-8">
                <Cta />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ECONOMIA */}
        <section id="economia" className="relative z-10 mx-auto w-[94%] max-w-6xl py-10 sm:py-12">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl border border-purple-500/30 bg-gradient-to-b from-[#18082c]/90 via-[#100420]/95 to-[#070210]/98 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_60px_rgba(168,85,247,0.22)]">
              {/* LUZES E GLOW DE VIDRO DE FUNDO */}
              <div className="pointer-events-none absolute -top-32 -left-32 size-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />

              {/* TÍTULO DO PAINEL */}
              <div className="relative z-10 text-center mb-8">
                <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
                  Isso é o que você pagaria{" "}
                  <span className="text-hot">assinando tudo separado</span>
                </h2>
              </div>

              {/* GRID DOS 12 CARDS DE STREAMING */}
              <CascadeGrid className="relative z-10 grid grid-cols-3 gap-2 sm:gap-2.5 sm:grid-cols-4 lg:grid-cols-6">
                {(visible) =>
                  plataformas.map((p, i) => (
                    <div
                      key={p.nome}
                      data-visible={visible}
                      style={{
                        transitionDelay: `${i * 40}ms`,
                      }}
                      className="reveal relative group flex flex-col items-center justify-center gap-1.5 rounded-2xl px-2.5 py-3.5 border border-white/12 bg-white/5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-purple-400/60 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] overflow-hidden"
                    >
                      {/* BRILHO REFLEXIVO DE VIDRO 3D */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-80" />

                      <div className="flex h-6 items-center">
                        <BrandLogo
                          nome={p.nome}
                          logo={p.logo}
                          invert={p.invert === true}
                          escala={p.escala ?? 1}
                          cor={p.cor}
                          className="h-5"
                        />
                      </div>

                      {p.logo && (
                        <p className="text-[10px] text-muted-foreground font-medium truncate max-w-full px-1">{p.nome}</p>
                      )}

                      <p className="font-display text-sm sm:text-base font-bold line-through decoration-primary decoration-2 text-white/95 drop-shadow-sm">
                        {p.preco}
                      </p>
                    </div>
                  ))
                }
              </CascadeGrid>

              {/* LINHA DIVISÓRIA COM GLOW NEON */}
              <div className="relative z-10 my-8 sm:my-10 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

              {/* RESUMO DE ECONOMIA UNIFICADO NO PAINEL */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <p className="text-muted-foreground text-sm sm:text-base">
                  Ao todo você pagaria{" "}
                  <span className="font-bold text-foreground line-through decoration-primary decoration-2">
                    R$ 386,80
                  </span>{" "}
                  por mês
                </p>

                <p className="font-display mt-3 text-2xl font-extrabold sm:text-4xl md:text-5xl">
                  Com a Cineflix você paga{" "}
                  <span className="text-hot">apenas R$20/mês</span>
                </p>

                <div className="mt-7">
                  <Cta />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

      {/* PLANOS */}
      <section id="planos" className="relative z-10 mx-auto w-[94%] max-w-6xl py-10 sm:py-12">
        {/* GLOW AMBIENTE PULSANTE DINÂMICO DOS PLANOS */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-primary/20 blur-[180px] animate-pulse" />

        <Reveal className="relative z-10 text-center">
          <span className="glass mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-surface/90 px-4 py-2 text-xs font-bold tracking-wide uppercase text-accent shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <Sparkles className="size-3.5 fill-current" /> Oferta por tempo limitado
          </span>
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Aproveite e <span className="text-hot">assine já</span>
          </h2>
          <p className="mt-2 text-muted-foreground">
            Cancele quando quiser. Ativação imediata e suporte dedicado 24/7.
          </p>
        </Reveal>

        <div className="relative z-10 mt-14 sm:mt-16 pt-4 grid items-center gap-6 lg:grid-cols-3">
          {[
            {
              id: "start",
              nome: "Plano START",
              preco: "R$20",
              periodo: "mensal",
              telas: "Use 2 telas simultaneamente",
              extra: "Plano Mensal Sem Fidelidade",
              destaque: false,
              selo: "Ideal para experimentar",
              badge: "Sem Fidelidade",
              corBorda: "border border-purple-500/40 hover:border-purple-300",
              corGlow: "shadow-[0_0_40px_rgba(168,85,247,0.25)] hover:shadow-[0_0_60px_rgba(168,85,247,0.55)]",
              bgCard: "bg-gradient-to-b from-purple-950/40 via-[#120522]/80 to-[#0b0316]/95 backdrop-blur-2xl",
              badgeStyle: "bg-purple-900/80 text-purple-200 border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.4)]",
              btnStyle: "animate-vibrate bg-gradient-to-r from-purple-600 via-primary to-purple-700 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.8)] hover:scale-[1.03]",
              link: "https://ev.braip.com/ref?pl=plazg9wz&ck=che7qk0o&af=afi07p3351",
            },
            {
              id: "prime",
              nome: "Plano PRIME",
              preco: "R$97",
              periodo: "1 ano",
              telas: "Use 4 telas simultaneamente",
              extra: "1 ano de acesso · sem mensalidade",
              destaque: true,
              selo: "Mais escolhido · 60% OFF",
              badge: "🔥 Máxima Economia",
              corBorda: "border-2 border-primary/90",
              corGlow: "shadow-[0_0_75px_rgba(168,85,247,0.7)] hover:shadow-[0_0_100px_rgba(168,85,247,0.95)]",
              bgCard: "bg-gradient-to-b from-purple-900/60 via-[#28073e]/90 to-[#12021c]/98 backdrop-blur-2xl",
              badgeStyle: "bg-primary/70 text-white border-purple-200/90 shadow-[0_0_20px_rgba(168,85,247,0.7)] font-black",
              btnStyle: "animate-vibrate bg-gradient-to-r from-purple-600 via-primary to-accent text-white shadow-[0_0_35px_rgba(168,85,247,0.8)] hover:shadow-[0_0_50px_rgba(168,85,247,1)] hover:scale-[1.04]",
              link: "https://ev.braip.com/ref?pl=plaoxjy8&ck=che7qk0o&af=afi07p3351",
            },
            {
              id: "pro",
              nome: "Plano PRO",
              preco: "R$69,90",
              periodo: "semestral",
              telas: "Use 2 telas simultaneamente",
              extra: "Plano Semestral Economia",
              destaque: false,
              selo: "Economize 42%",
              badge: "Semestral",
              corBorda: "border border-fuchsia-500/40 hover:border-fuchsia-300",
              corGlow: "shadow-[0_0_40px_rgba(217,70,239,0.25)] hover:shadow-[0_0_60px_rgba(217,70,239,0.55)]",
              bgCard: "bg-gradient-to-b from-fuchsia-950/40 via-[#1a0428]/80 to-[#0e0216]/95 backdrop-blur-2xl",
              badgeStyle: "bg-fuchsia-950/80 text-fuchsia-200 border-fuchsia-400/50 shadow-[0_0_15px_rgba(217,70,239,0.4)]",
              btnStyle: "animate-vibrate bg-gradient-to-r from-fuchsia-700 via-purple-600 to-primary text-white shadow-[0_0_20px_rgba(217,70,239,0.5)] hover:shadow-[0_0_35px_rgba(217,70,239,0.8)] hover:scale-[1.03]",
              link: "https://ev.braip.com/ref?pl=pla0zq40&ck=che7qk0o&af=afi07p3351",
            },
          ].map((p, i) => (
            <Reveal key={p.nome} delay={i * 120}>
              <div
                className={`group relative h-full rounded-4xl transition-all duration-500 ${p.corBorda} ${p.corGlow} ${p.bgCard} ${
                  p.destaque
                    ? "pt-10 pb-8 px-8 lg:scale-[1.08] z-20 hover:scale-[1.10]"
                    : "pt-10 pb-8 px-8 hover:-translate-y-2"
                }`}
              >
                {/* BRILHO REFLEXIVO DE VIDRO 3D NO CARD */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-4xl">
                  <div className="pointer-events-none absolute -top-24 -left-24 size-48 rounded-full bg-white/10 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-white/15" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-80" />
                </div>

                {p.selo && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-600 via-primary to-accent px-5 py-1.5 text-xs font-black tracking-wider text-white uppercase shadow-[0_0_25px_rgba(168,85,247,0.85)] animate-pulse">
                    <Sparkles className="size-3.5 fill-current" />
                    {p.selo}
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <h3 className={`font-display text-sm font-extrabold tracking-[0.18em] uppercase ${p.destaque ? "text-purple-200" : "text-accent"}`}>
                    {p.nome}
                  </h3>
                  <span className={`rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider border transition-all duration-300 ${p.badgeStyle}`}>
                    {p.badge}
                  </span>
                </div>

                <div className="mt-5 flex items-end gap-2">
                  <span
                    className={`font-display leading-none transition-transform duration-300 group-hover:scale-105 ${
                      p.destaque
                        ? "text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-fuchsia-300 drop-shadow-[0_2px_12px_rgba(168,85,247,0.8)]"
                        : "text-5xl font-extrabold text-white drop-shadow-md"
                    }`}
                  >
                    {p.preco}
                  </span>
                  <span className={`pb-2 text-sm ${p.destaque ? "text-purple-200/90 font-semibold" : "text-purple-300/80 font-medium"}`}>
                    /{p.periodo}
                  </span>
                </div>
                <p className={`mt-4 text-sm ${p.destaque ? "text-purple-100/90 font-medium" : "text-muted-foreground"}`}>
                  Acesso ilimitado a todos os conteúdos, a diversão é garantida.
                </p>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 w-full flex items-center justify-center gap-2 rounded-full py-4 text-sm font-extrabold uppercase tracking-wide transition-all duration-300 ${p.btnStyle}`}
                >
                  Comprar agora
                </a>

                <ul className="mt-8 space-y-3 text-sm">
                  {[
                    p.extra,
                    p.telas,
                    "Mais de 60.000 conteúdos",
                    "Qualidade SD/HD/FHD/4K",
                    "Guia de Programação [EPG]",
                    "Smartphone / Tablet",
                    "TV Box / Chromecast",
                    "Smart TV e Computador",
                    "Programação Adultos [Opcional]",
                    "Pacote Filmes e Séries",
                  ].map((v) => (
                    <li key={v} className="flex items-start gap-2.5">
                      <Check className={`mt-0.5 size-4 shrink-0 transition-transform duration-300 group-hover:scale-110 ${p.destaque ? "text-purple-300" : "text-accent"}`} />
                      <span className={p.destaque ? "text-foreground font-medium" : "text-muted-foreground"}>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <Faq>
        <SmoothLink href={CTA_HREF} className="btn-cta">
          <Zap className="size-4" />
          VER PLANOS DISPONÍVEIS
        </SmoothLink>
      </Faq>

      {/* PAGAMENTO E SEGURANÇA */}
      <Reveal>
        <TrustSection />
      </Reveal>

      {/* FOOTER */}
      <Reveal>
        <footer className="mt-10 border-t border-border py-12">
          <div className="mx-auto flex w-[94%] max-w-6xl flex-col items-center gap-5 text-center">
          <span className="font-display text-xl font-extrabold">
            CINE<span className="text-hot">FLIX</span>
          </span>
          <p className="max-w-xl text-sm text-muted-foreground">
            A televisão do futuro é pela internet — sem antenas, sem
            decodificadores. Assista quando e onde quiser.
          </p>
          <Cta />
          <Link
            to="/suporte"
            className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Precisa de ajuda? Fale com o suporte
          </Link>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cineflix. Imagens de divulgação dos
            respectivos estúdios (fonte: TMDB).
          </p>
        </div>
        </footer>
      </Reveal>

      <SocialProof />

      </div>
    </div>
  );
}

