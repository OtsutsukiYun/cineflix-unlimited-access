import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";




function CascadeGrid({
  children,
  className = "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
}: {
  children: (visible: boolean) => React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.01 }
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

function SmoothCardReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
        }
      },
      { threshold: 0.05, rootMargin: "60px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: "650ms",
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all duration-700 ${
        shown
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-7 scale-[0.98]"
      }`}
    >
      {children}
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
  CreditCard,
  Lock,
  QrCode,
  Barcode,
  RefreshCcw,
  DollarSign,
  Film,
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
          "Mais de 60.000 filmes, séries, animes, infantil e futebol ao vivo em um só app. Lançamentos do cinema, Netflix, Disney+, HBO Max e mais por R$20/mês.",
      },
      { property: "og:title", content: "Cineflix — Streaming ilimitado por R$20/mês" },
      {
        property: "og:description",
        content:
          "Todos os streamings em uma única plataforma. Lançamentos do cinema, animes, infantil e esportes ao vivo em 4K.",
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
      {children}
    </SmoothLink>
  );
}



function HeroHeading() {
  return (
    <h1 className="font-display text-4xl font-extrabold sm:text-6xl md:text-7xl leading-[1.04] text-white tracking-tight drop-shadow-xl">
      Todos os{" "}
      <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-300 via-purple-400 to-amber-300 animate-text-shine font-black drop-shadow-[0_4px_20px_rgba(168,85,247,0.45)]">
        filmes, séries e esportes
      </span>
      <br />
      em um só lugar.
    </h1>
  );
}



function Index() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-accent selection:text-white">
      {/* BARRA PROMOCIONAL + NAV — empilhados para mobile funcionar */}
      <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
        <div className="z-[60]">
          <PromoBanner />
        </div>
        <header className="z-50">
          <div className="glass mx-auto mt-2 flex w-[94%] max-w-6xl items-center justify-between rounded-full px-5 py-3 border border-white/10 bg-black/60 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
            <SmoothLink href="#" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-primary to-accent text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                <Play className="size-4 fill-current ml-0.5" />
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                Cine<span className="text-hot">flix</span>
              </span>
            </SmoothLink>

            <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
              <SmoothLink
                href="#catalogo"
                className="text-muted-foreground transition-colors hover:text-white"
              >
                Catálogo
              </SmoothLink>
              <SmoothLink
                href="#comparativo"
                className="text-muted-foreground transition-colors hover:text-white"
              >
                Comparativo
              </SmoothLink>
              <SmoothLink
                href="#planos"
                className="text-muted-foreground transition-colors hover:text-white"
              >
                Planos
              </SmoothLink>
              <SmoothLink
                href="#faq"
                className="text-muted-foreground transition-colors hover:text-white"
              >
                FAQ
              </SmoothLink>
              <Link
                to="/suporte"
                className="text-purple-300 transition-colors hover:text-white"
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
      <section className="relative flex items-center overflow-hidden">
        {heroSlides.map((s, i) => (
          <img
            key={s.title}
            src={img(s.backdrop, "w1280")}
            alt={`Cena do filme ${s.title}`}
            className="absolute inset-0 size-full object-cover transition-all duration-[2200ms] ease-out"
            style={{
              opacity: i === slide ? 1 : 0,
              transform: i === slide ? "scale(1.02)" : "scale(1)",
              objectPosition: s.objectPositionMobile ?? s.objectPosition ?? "center 15%",
              filter: s.brightness ? `${s.brightness} brightness(0.93)` : "brightness(0.93)",
            }}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/75 via-background/50 to-transparent md:via-background/55 md:to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/35" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.65)_100%)]" />

        <div className="relative z-10 mx-auto w-[94%] max-w-6xl pt-28 pb-10 sm:pt-36 sm:pb-12 md:pt-40 md:pb-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-md px-4 py-2 text-[11px] sm:text-xs font-bold tracking-wider text-white uppercase shadow-[0_4px_25px_rgba(0,0,0,0.5)] mb-4 sm:mb-6 [transform:translateZ(0)] [isolation:isolate]">
                <Sparkles className="size-3.5 text-accent animate-pulse" />
                <span>Os principais lançamentos do cinema e streaming</span>
              </div>

              <HeroHeading />

              <p className="mt-3 sm:mt-5 max-w-lg text-sm sm:text-base md:text-lg font-medium text-foreground/90 drop-shadow-md">
                Todas as plataformas de streaming e mais de 2.000 canais por <span className="font-extrabold text-white">apenas R$20/mês</span>.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Cta />
                <SmoothLink href="#catalogo" className="btn-ghost">
                  <Clapperboard className="size-4" /> Ver catálogo
                </SmoothLink>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Star className="size-4 fill-accent text-accent" /> 4.9 de
                  satisfação
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-accent" /> Cancele quando
                  quiser
                </span>
              </div>

              {/* TAG DO SLIDE ATUAL — ULTRA COMPACTA */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xs px-3.5 py-1 text-xs">
                <span className="font-bold text-white">{heroSlides[slide]?.title}</span>
                <span className="text-white/40">•</span>
                <span className="text-muted-foreground">{heroSlides[slide]?.genre} ({heroSlides[slide]?.year})</span>
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
                  className="transition-transform duration-200 hover:scale-110"
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
        <section id="catalogo" className="relative z-10 pt-10 pb-4">
          <Reveal className="mx-auto mb-6 w-[94%] max-w-6xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-950/60 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-wider text-purple-200 uppercase shadow-[0_0_20px_rgba(168,85,247,0.25)] mb-4">
              <Film className="size-3.5 text-accent" /> Catálogo em alta definição
            </span>
            <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl tracking-tight text-white">
              Tudo o que você ama em <span className="text-hot font-black">um só lugar</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
              Filmes, séries de sucesso e animes em alta definição — assista quando e onde quiser, sem complicações.
            </p>
          </Reveal>

          <Rail
            icon={Flame}
            title="Filmes — lançamentos e grandes sucessos"
            items={terror}
          />
          <Rail
            icon={Film}
            title="Séries em alta para maratonar"
            items={series}
          />
          <Rail
            icon={Torii}
            title="Animes Crunchyroll"
            items={animes}
          />
        </section>

        {/* FEATURES */}
        <section className="relative z-10 mx-auto w-[94%] max-w-6xl py-6 sm:py-8">
          <SmoothCardReveal delay={0}>
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-950/60 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-wider text-purple-200 uppercase shadow-[0_0_20px_rgba(168,85,247,0.25)] mb-4">
                <Sparkles className="size-3.5 text-accent" /> Diferenciais da plataforma
              </span>
              <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl tracking-tight text-white">
                Por que escolher a <span className="text-hot">Cineflix</span>
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
                Qualidade 4K sem travamentos, suporte humano 7 dias por semana e compatível com todos os seus aparelhos.
              </p>
            </div>
          </SmoothCardReveal>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Clapperboard,
                banner: img("/neeNHeXjMF5fXoCJRsOmkNGC7q.jpg", "w780"),
                gradient: "from-rose-600 via-primary to-purple-600",
                glow: "shadow-[0_0_22px_rgba(225,29,72,0.85)] border-rose-300/80",
                corBorda: "border border-rose-500/40 hover:border-rose-300",
                corGlow: "shadow-[0_0_30px_rgba(225,29,72,0.2)] hover:shadow-[0_0_50px_rgba(225,29,72,0.55)]",
                bgOverlay: "bg-gradient-to-t from-[#0d0212] via-[#0d0212]/75 to-[#0d0212]/20",
                titleHover: "group-hover:text-rose-200",
                t: "Filmes incríveis",
                d: "Clássicos, lançamentos do cinema e superproduções premiadas em 4K.",
              },
              {
                icon: Tv,
                banner: img("/2meX1nMdScFOoV4370rqHWKmXhY.jpg", "w780"),
                gradient: "from-purple-600 via-primary to-accent",
                glow: "shadow-[0_0_22px_rgba(168,85,247,0.85)] border-purple-300/80",
                corBorda: "border border-purple-500/40 hover:border-purple-300",
                corGlow: "shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:shadow-[0_0_50px_rgba(168,85,247,0.55)]",
                bgOverlay: "bg-gradient-to-t from-[#0b0314] via-[#0b0314]/75 to-[#0b0314]/20",
                titleHover: "group-hover:text-purple-200",
                t: "Séries imperdíveis",
                d: "Temporadas completas dos sucessos globais para maratonar sem limites.",
              },
              {
                icon: Torii,
                banner: img("/3GQKYh6Trm8pxd2AypovoYQf4Ay.jpg", "w780"),
                gradient: "from-fuchsia-600 via-purple-600 to-pink-500",
                glow: "shadow-[0_0_22px_rgba(217,70,239,0.85)] border-fuchsia-300/80",
                corBorda: "border border-fuchsia-500/40 hover:border-fuchsia-300",
                corGlow: "shadow-[0_0_30px_rgba(217,70,239,0.2)] hover:shadow-[0_0_50px_rgba(217,70,239,0.55)]",
                bgOverlay: "bg-gradient-to-t from-[#0e0214] via-[#0e0214]/75 to-[#0e0214]/20",
                titleHover: "group-hover:text-fuchsia-200",
                t: "Animes atualizados",
                d: "Acervo completo com os animes mais populares do momento em HD.",
              },
              {
                icon: Baby,
                banner: img("/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg", "w780"),
                gradient: "from-amber-500 via-orange-500 to-rose-500",
                glow: "shadow-[0_0_22px_rgba(245,158,11,0.85)] border-amber-300/80",
                corBorda: "border border-amber-500/40 hover:border-amber-300",
                corGlow: "shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_50px_rgba(245,158,11,0.55)]",
                bgOverlay: "bg-gradient-to-t from-[#140802] via-[#140802]/75 to-[#140802]/20",
                titleHover: "group-hover:text-amber-200",
                t: "Canais infantis",
                d: "Desenhos, filmes animados e toda a programação para a criançada.",
              },
              {
                icon: Trophy,
                banner: img("/hpuWR2rfcjRMni6HLtxPet4o4P4.jpg", "w780"),
                gradient: "from-cyan-500 via-teal-600 to-emerald-500",
                glow: "shadow-[0_0_22px_rgba(6,182,212,0.85)] border-cyan-300/80",
                corBorda: "border border-cyan-500/40 hover:border-cyan-300",
                corGlow: "shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:shadow-[0_0_50px_rgba(6,182,212,0.55)]",
                bgOverlay: "bg-gradient-to-t from-[#030e17] via-[#030e17]/75 to-[#030e17]/20",
                titleHover: "group-hover:text-cyan-200",
                t: "Esportes ao vivo",
                d: "Futebol, artes marciais, basquete e grandes campeonatos ao vivo.",
              },
              {
                icon: Lock,
                banner: img("/7IGKrY1f1KfwMipx9wZC4NRgIdF.jpg", "w780"),
                gradient: "from-rose-600 via-red-600 to-pink-600",
                glow: "shadow-[0_0_22px_rgba(225,29,72,0.85)] border-rose-300/80",
                corBorda: "border border-rose-500/40 hover:border-rose-300",
                corGlow: "shadow-[0_0_30px_rgba(225,29,72,0.2)] hover:shadow-[0_0_50px_rgba(225,29,72,0.55)]",
                bgOverlay: "bg-gradient-to-t from-[#12020a] via-[#12020a]/75 to-[#12020a]/20",
                titleHover: "group-hover:text-rose-200",
                t: "Canais adultos",
                d: "Conteúdo exclusivo opcional e totalmente protegido por senha.",
              },
            ].map((f, i) => (
              <SmoothCardReveal key={f.t} delay={100 + i * 80}>
                <div
                  className={`group relative h-full min-h-[220px] overflow-hidden rounded-4xl p-7 ${f.corBorda} ${f.corGlow} transition-all duration-500 hover:-translate-y-2.5`}
                >
                  {/* IMAGEM BANNER ILUSTRATIVA DE FUNDO (SEM DESFOQUE) */}
                  <img
                    src={f.banner}
                    alt={`Ilustração ${f.t}`}
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* SOBREPOSIÇÃO DE GRADIENTE ESCURO LÍMPIDO */}
                  <div className={`absolute inset-0 ${f.bgOverlay} transition-opacity duration-500 group-hover:opacity-85`} />

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    {/* ÍCONE 3D RELUZENTE E FLUTUANTE */}
                    <div className="relative mb-6 shrink-0">
                      <div className={`animate-icon-float-3d relative flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.gradient} p-0.5 border ${f.glow} transform-gpu transition-all duration-300 group-hover:scale-110`}>
                        <div className="relative flex size-full items-center justify-center rounded-[14px] bg-black/25 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-90" />
                          <f.icon className="size-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] relative z-10" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className={`mb-2 text-xl font-black text-white tracking-tight transition-colors duration-300 ${f.titleHover}`}>{f.t}</h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground/90 font-medium drop-shadow-md">
                        {f.d}
                      </p>
                    </div>
                  </div>
                </div>
              </SmoothCardReveal>
            ))}
          </div>
        </section>


        {/* ESPORTES */}
        <section id="esportes" className="relative z-10 my-4 sm:my-6 overflow-hidden">
          <SmoothCardReveal delay={100}>
            <div className="relative mx-auto w-[94%] max-w-6xl overflow-hidden rounded-4xl border border-border/80 shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-black">
              <img
                src={futebol}
                alt="Torcida em estádio de futebol lotado à noite"
                decoding="async"
                width={1280}
                height={720}
                className="absolute inset-0 size-full object-cover animate-kenburns"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
              <div className="relative p-8 md:p-16">
                <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-950/60 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-wider text-purple-200 uppercase shadow-[0_0_20px_rgba(168,85,247,0.25)] mb-5">
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
              </div>
            </div>
          </SmoothCardReveal>
        </section>


        {/* ECONOMIA */}
        <section id="economia" className="relative z-10 mx-auto w-[94%] max-w-6xl py-8 sm:py-10">
          <div className="relative overflow-hidden rounded-4xl border border-purple-500/30 bg-gradient-to-b from-[#18082c]/90 via-[#100420]/95 to-[#070210]/98 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_60px_rgba(168,85,247,0.22)]">
            {/* LUZES E GLOW DE VIDRO DE FUNDO */}
            <div className="pointer-events-none absolute -top-32 -left-32 size-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />

            {/* TÍTULO DO PAINEL */}
            <SmoothCardReveal delay={50}>
              <div className="relative z-10 text-center mb-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-950/60 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-wider text-purple-200 uppercase shadow-[0_0_20px_rgba(168,85,247,0.25)] mb-4">
                  <DollarSign className="size-3.5 text-accent" /> Comparativo de preços
                </span>
                <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
                  Quanto você economiza <span className="text-hot">assinando a Cineflix</span>
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
                  Valor mensal de cada serviço assinado individualmente:
                </p>
              </div>
            </SmoothCardReveal>

            {/* GRID DOS 12 CARDS DE STREAMING */}
            <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-2.5 sm:grid-cols-4 lg:grid-cols-6">
              {plataformas.map((p, i) => (
                <SmoothCardReveal key={p.nome} delay={80 + i * 35}>
                  <div
                    className="relative group flex flex-col items-center justify-center gap-2 rounded-2xl px-2 py-3 sm:py-3.5 border border-white/12 bg-white/5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-purple-400/60 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] overflow-hidden"
                  >
                    {/* BRILHO REFLEXIVO DE VIDRO 3D */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-80" />

                    <div className="flex h-7 sm:h-8 w-full items-center justify-center px-1 overflow-hidden">
                      <BrandLogo
                        nome={p.nome}
                        logo={p.logo}
                        invert={p.invert === true}
                        escala={p.escala ?? 1}
                        cor={p.cor}
                      />
                    </div>
                    <span className="font-display text-xs font-black tracking-tight text-white/90 drop-shadow-sm">
                      {p.preco}
                    </span>
                  </div>
                </SmoothCardReveal>
              ))}
            </div>

            {/* LINHA DIVISÓRIA COM GLOW NEON */}
            <div className="relative z-10 my-4 sm:my-5 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

            {/* RESUMO DE ECONOMIA UNIFICADO NO PAINEL COM ANIMAÇÃO */}
            <SmoothCardReveal delay={250}>
              <div className="relative z-10 mx-auto max-w-2xl rounded-3xl border border-purple-500/40 bg-gradient-to-b from-purple-950/60 via-[#18092f]/95 to-[#0c0318]/98 p-4 sm:p-7 text-center backdrop-blur-xl shadow-[0_0_35px_rgba(168,85,247,0.35)]">
                <p className="text-muted-foreground text-xs sm:text-base font-semibold">
                  Ao todo você pagaria{" "}
                  <span className="font-bold text-foreground">
                    R$ 386,80
                  </span>{" "}
                  por mês
                </p>

                <div className="mt-1.5 sm:mt-3 flex flex-col items-center justify-center text-center">
                  <span className="font-display text-base sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    Com a Cineflix você paga
                  </span>
                  <span className="font-display mt-0.5 inline-flex items-center justify-center gap-1.5 text-xl sm:text-4xl md:text-5xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-rose-500 via-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent animate-text-shine drop-shadow-[0_0_25px_rgba(244,63,94,0.7)]">
                      apenas R$20/mês
                    </span>
                    <Flame className="size-5 sm:size-8 text-rose-500 animate-bounce shrink-0 drop-shadow-[0_0_12px_rgba(244,63,94,0.9)]" />
                  </span>
                </div>

                <div className="mt-4 sm:mt-6">
                  <Cta />
                </div>
              </div>
            </SmoothCardReveal>
          </div>
        </section>


        {/* PLANOS */}
        <section id="planos" className="relative z-10 mx-auto w-[94%] max-w-6xl py-8 sm:py-10">
          {/* GLOW AMBIENTE PULSANTE DINÂMICO DOS PLANOS */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-primary/20 blur-[180px] animate-pulse" />

          <Reveal className="relative z-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/50 bg-purple-950/70 backdrop-blur-md px-4 py-2 text-xs font-extrabold tracking-wider text-purple-200 uppercase shadow-[0_0_25px_rgba(168,85,247,0.4)] mb-5 animate-pulse">
              <Sparkles className="size-3.5 text-accent animate-spin" /> Oferta por tempo limitado
            </span>
            <h2 className="text-4xl font-black sm:text-5xl md:text-6xl tracking-tight text-white">
              Aproveite e{" "}
              <span className="relative inline-flex items-center gap-1.5">
                <span className="bg-gradient-to-r from-rose-500 via-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent animate-text-shine drop-shadow-[0_0_30px_rgba(244,63,94,0.6)]">
                  assine já
                </span>
                <Zap className="size-8 sm:size-10 text-amber-400 animate-bounce drop-shadow-[0_0_15px_rgba(251,191,36,0.9)]" />
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto font-medium leading-relaxed">
              Cancele quando quiser, com ativação imediata e suporte 24/7.
            </p>
          </Reveal>

        <div className="relative z-10 mt-12 grid items-center gap-6 lg:grid-cols-3">
          {[
            {
              id: "start",
              nome: "Plano START",
              preco: "R$20",
              periodo: "mensal",
              telas: "Use 2 telas simultaneamente",
              extra: "Plano Mensal Sem Fidelidade",
              destaque: false,
              selo: null as string | null,
              badge: "Sem Fidelidade",
              corBorda: "border border-cyan-500/40 hover:border-cyan-300",
              corGlow: "shadow-[0_0_35px_rgba(6,182,212,0.35)] hover:shadow-[0_0_55px_rgba(6,182,212,0.65)]",
              bgCard: "bg-gradient-to-b from-cyan-950/40 via-[#0a1828]/90 to-[#060e1a]/98 backdrop-blur-2xl",
              badgeStyle: "bg-cyan-900/60 text-cyan-200 border-cyan-400/50 shadow-[0_0_12px_rgba(6,182,212,0.35)]",
              btnStyle: "bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 text-white shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:shadow-[0_0_45px_rgba(6,182,212,0.9)] hover:scale-[1.03]",
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
              selo: "🔥 Mais escolhido — 60% OFF",
              badge: "Máxima Economia",
              corBorda: "border-2 border-purple-300 shadow-[0_0_55px_rgba(168,85,247,0.65)]",
              corGlow: "shadow-[0_0_80px_rgba(168,85,247,0.75)] hover:shadow-[0_0_100px_rgba(168,85,247,1)]",
              bgCard: "bg-gradient-to-b from-purple-900/90 via-[#3c0c61]/95 to-[#1a042e] backdrop-blur-2xl",
              badgeStyle: "bg-primary text-white border-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.8)] font-black",
              btnStyle: "animate-vibrate bg-gradient-to-r from-purple-500 via-primary to-accent text-white shadow-[0_0_35px_rgba(168,85,247,0.85)] hover:shadow-[0_0_55px_rgba(168,85,247,1)] hover:scale-[1.04]",
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
              selo: null as string | null,
              badge: "Economize 42%",
              corBorda: "border border-amber-500/40 hover:border-amber-300",
              corGlow: "shadow-[0_0_35px_rgba(245,158,11,0.35)] hover:shadow-[0_0_55px_rgba(245,158,11,0.65)]",
              bgCard: "bg-gradient-to-b from-amber-950/30 via-[#180e24]/90 to-[#0b0314]/98 backdrop-blur-2xl",
              badgeStyle: "bg-amber-950/80 text-amber-300 border-amber-400/50 shadow-[0_0_12px_rgba(245,158,11,0.35)]",
              btnStyle: "bg-gradient-to-r from-amber-600 via-amber-700 to-purple-800 text-white shadow-[0_0_25px_rgba(245,158,11,0.55)] hover:shadow-[0_0_45px_rgba(245,158,11,0.85)] hover:scale-[1.03]",
              link: "https://ev.braip.com/ref?pl=pla0zq40&ck=che7qk0o&af=afi07p3351",
            },
          ].map((p, i) => (
            <SmoothCardReveal key={p.nome} delay={100 + i * 120}>
              <div
                className={`group relative h-full rounded-4xl [transform:translateZ(0)] [backface-visibility:hidden] transition-[transform,border-color,box-shadow] duration-300 ${p.corBorda} ${p.corGlow} ${p.bgCard} ${
                  p.destaque
                    ? "pt-10 pb-9 px-8 sm:px-9 lg:scale-[1.06] z-20 hover:scale-[1.08]"
                    : "p-8 sm:p-9 hover:-translate-y-2"
                }`}
              >
                {/* BRILHO REFLEXIVO DE VIDRO 3D NO CARD */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-4xl [transform:translateZ(0)] [isolation:isolate]">
                  <div className="pointer-events-none absolute -top-24 -left-24 size-48 rounded-full bg-white/10 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-white/15" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-80" />
                </div>

                {p.selo && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-600 via-primary to-accent px-5 py-1.5 text-xs font-black tracking-wider text-white uppercase shadow-[0_0_25px_rgba(168,85,247,0.85)] animate-pulse">
                    <Sparkles className="size-3.5 fill-current" />
                    {p.selo}
                  </span>
                )}

                <div className="flex flex-wrap items-center justify-between gap-2">
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
            </SmoothCardReveal>
          ))}
        </div>

        {/* PAINEL COMPACTO DE GARANTIA E PAGAMENTO */}
        <SmoothCardReveal delay={150}>
          <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 bg-black/50 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] mt-10">
            <div className="grid gap-6 md:grid-cols-2 md:items-center md:divide-x md:divide-white/10">
              {/* LADO ESQUERDO: GARANTIA DE 7 DIAS COMPACTA */}
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                  <ShieldCheck className="size-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Garantia 7 Dias</span>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-extrabold text-emerald-300">Sem Riscos</span>
                  </div>
                  <h4 className="font-display text-base sm:text-lg font-extrabold text-white">
                    Experimente sem compromisso por 7 dias
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    Se dentro de 7 dias você decidir não continuar por qualquer motivo, devolveremos 100% do seu dinheiro sem perguntas.
                  </p>
                </div>
              </div>

              {/* LADO DIREITO: FORMAS DE PAGAMENTO ACEITAS */}
              <div className="flex items-center gap-4 md:pl-6">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-purple-500/15 border border-purple-400/30 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                  <CreditCard className="size-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-300">Pagamento Seguro</span>
                    <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-[10px] font-extrabold text-purple-200">Ativação Imediata</span>
                  </div>
                  <h4 className="font-display text-base sm:text-lg font-extrabold text-white">
                    Formas de Pagamento Aceitas
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-[11px] font-bold text-emerald-300">
                      <QrCode className="size-3.5 text-emerald-400" /> PIX Instantâneo
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 text-[11px] font-bold text-purple-200">
                      <CreditCard className="size-3.5 text-purple-400" /> Cartão (até 12x)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SmoothCardReveal>
      </section>


      {/* FAQ */}
      <Faq>
        <SmoothLink href={CTA_HREF} className="btn-cta">
          <Zap className="size-4" />
          VER PLANOS DISPONÍVEIS
        </SmoothLink>
      </Faq>

      {/* SEGURANÇA E CERTIFICADOS BEM EMBAIXO DA PÁGINA */}
      <section className="border-t border-border/70 bg-surface/30 py-12">
        <div className="mx-auto w-[94%] max-w-6xl">
          <p className="mb-8 text-center text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
            Segurança &amp; Certificados de Garantia
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { icon: Lock, title: "Pagamento Seguro", desc: "SSL 256-bit" },
              { icon: Zap, title: "Ativação Imediata", desc: "Acesso na hora" },
              { icon: CreditCard, title: "Parcelamento", desc: "Até 12x no cartão" },
              { icon: ShieldCheck, title: "Suporte 7 dias", desc: "Via WhatsApp" },
              { icon: RefreshCcw, title: "Sem Fidelidade", desc: "Cancele quando quiser" },
              { icon: Star, title: "+10 mil clientes", desc: "Satisfação garantida" },
            ].map((c, i) => (
              <SmoothCardReveal key={c.title} delay={60 + i * 40}>
                <div className="glass flex flex-col items-center gap-2 rounded-2xl p-4 text-center transition-all duration-300 hover:border-primary/50 hover:scale-105">
                  <c.icon className="size-6 text-accent mb-1" />
                  <p className="text-xs font-bold text-white">{c.title}</p>
                  <p className="text-[10px] text-muted-foreground">{c.desc}</p>
                </div>
              </SmoothCardReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Reveal>
        <footer className="border-t border-border py-12">
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

