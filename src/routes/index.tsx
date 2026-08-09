import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, Fragment } from "react";




function SlideshowBanner({ banners, alt, objectPosition = "object-cover" }: { banners: string[]; alt: string; objectPosition?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <>
      {banners.map((banner, i) => (
        <img
          key={banner}
          src={banner}
          alt={alt}
          className={`absolute inset-0 size-full ${objectPosition} transition-opacity duration-[1500ms] ease-in-out group-hover:scale-110 ${
            i === index ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        />
      ))}
    </>
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
  Crown,
  CreditCard,
  Lock,
  QrCode,
  Barcode,
  RefreshCcw,
  DollarSign,
  Film,
  MonitorPlay,
  Download,
  Cpu,
  Users,
  Headphones,
  Rocket,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PromoBanner } from "@/components/PromoBanner";
import { Rail, Top10Rail } from "@/components/Rail";
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
  top10Hoje,
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
          "Todos os streamings em uma única plataforma. Lançamentos do cinema, animes, infantil e esportes ao vivo em até 4K.",
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
    <h1 className="font-display text-3xl font-extrabold sm:text-6xl md:text-7xl leading-[1.08] sm:leading-[1.04] text-white tracking-tight drop-shadow-xl">
      Todos os{" "}
      <span className="relative inline text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-300 via-purple-400 to-amber-300 animate-text-shine font-black drop-shadow-[0_4px_20px_rgba(168,85,247,0.45)]">
        filmes, séries e esportes
      </span>{" "}
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
    <div className="relative w-full overflow-x-hidden min-h-screen bg-[#070110] font-sans text-foreground antialiased selection:bg-accent selection:text-white">
      {/* BACKGROUND CINEMÁTICO ALTO IMPACTO: CYBER GRID + AURORA DRIFT + BEAM SPOTLIGHT */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden [transform:translateZ(0)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-[#070110] to-[#030006]" />
        
        {/* TEXTURA CYBER GRID MODERNA EM 3D */}
        <div className="bg-cyber-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />

        {/* HAROSH / RAIO DE LUZ DE HOLOFOTE DE CINEMA */}
        <div className="animate-beam-sweep absolute -top-[30%] left-[10%] w-[80vw] h-[1000px] bg-gradient-to-b from-purple-500/20 via-primary/10 to-transparent blur-[80px] pointer-events-none" />

        {/* BLOBO 1: PURPLE NEON DRIFT */}
        <div className="animate-aurora-1 absolute -top-[15%] -left-[10%] w-[100vw] h-[100vw] sm:w-[70vw] sm:h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tr from-purple-600/35 via-fuchsia-600/25 to-indigo-600/20 blur-[110px]" />
        
        {/* BLOBO 2: MAGENTA / ELECTRIC CYAN DRIFT */}
        <div className="animate-aurora-2 absolute top-[25%] -right-[15%] w-[90vw] h-[90vw] sm:w-[65vw] sm:h-[65vw] max-w-[750px] max-h-[750px] rounded-full bg-gradient-to-br from-pink-500/30 via-purple-700/25 to-cyan-400/20 blur-[110px]" />
        
        {/* BLOBO 3: INDIGO DEEP NEBULA */}
        <div className="animate-aurora-3 absolute -bottom-[15%] -left-[10%] w-[100vw] h-[100vw] sm:w-[80vw] sm:h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-t from-indigo-700/35 to-purple-800/25 blur-[130px]" />
      </div>
      {/* BARRA PROMOCIONAL + NAV — empilhados para mobile funcionar */}
      <div className="fixed inset-x-0 top-0 z-50 flex flex-col [transform:translateZ(0)]">
        <div className="z-[60]">
          <PromoBanner />
        </div>
        <header className="z-50">
          <div className="glass mx-auto mt-2 flex w-[94%] max-w-6xl items-center justify-between rounded-full px-4 sm:px-6 py-2.5 sm:py-3 border border-white/25 bg-surface/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <SmoothLink href="#" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-tr from-primary/80 via-primary to-accent text-white shadow-glow">
                <Play className="size-4 fill-current ml-0.5" />
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                Cine<span className="text-hot">flix</span>
              </span>
            </SmoothLink>

            <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
              <SmoothLink
                href="#catalogo"
                className="text-white/80 transition-colors hover:text-white"
              >
                Catálogo
              </SmoothLink>
              <SmoothLink
                href="#planos"
                className="text-white/80 transition-colors hover:text-white"
              >
                Planos
              </SmoothLink>
              <SmoothLink
                href="#faq"
                className="text-white/80 transition-colors hover:text-white"
              >
                FAQ
              </SmoothLink>
              <Link
                to="/suporte"
                className="text-purple-300 transition-colors hover:text-white font-semibold"
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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent md:via-background/50 md:to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 sm:h-64 bg-gradient-to-t from-background to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.7)_100%)]" />

        <div className="relative z-10 mx-auto w-[94%] max-w-6xl pt-40 pb-10 sm:pt-48 sm:pb-12 md:pt-56 md:pb-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>

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
      <div className="relative bg-gradient-to-b from-transparent via-purple-900/15 to-transparent">
        {/* TEXT MARQUEE ELEGANTE */}
        <div className="relative z-20 w-full overflow-hidden border-b border-white/5 py-4 sm:py-5 bg-black/20 backdrop-blur-sm">
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex shrink-0 items-center gap-8 sm:gap-16 pr-8 sm:pr-16 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
              {Array.from({ length: 4 }).fill(0).map((_, i) => (
                <Fragment key={i}>
                  <span className="flex items-center gap-2 text-purple-200"><Sparkles className="size-3.5 text-accent" /> Qualidade em até 4K</span>
                  <span className="flex items-center gap-2"><Film className="size-3.5 text-accent" /> Todos os Streamings</span>
                  <span className="flex items-center gap-2 text-pink-200"><Tv className="size-3.5 text-accent" /> +2000 Canais VIP</span>
                  <span className="flex items-center gap-2"><MonitorPlay className="size-3.5 text-accent" /> Múltiplas Telas</span>
                  <span className="flex items-center gap-2 text-emerald-200"><RefreshCcw className="size-3.5 text-accent" /> Lançamentos Semanais</span>
                  <span className="flex items-center gap-2"><Zap className="size-3.5 text-accent" /> Ativação Imediata</span>
                  <span className="flex items-center gap-2 text-rose-200"><ShieldCheck className="size-3.5 text-accent" /> Sem Fidelidade</span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* CATÁLOGO E SELETOR DE RITMO */}
        <section id="catalogo" className="relative z-10 py-4 sm:py-6 overflow-hidden">
          <Reveal className="relative z-10 mx-auto mb-0 sm:mb-2 w-[94%] max-w-6xl px-2 sm:px-4 flex flex-col sm:flex-row sm:items-end justify-between gap-1 sm:gap-4">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-surface/60 backdrop-blur-md px-3 py-1.5 text-[10px] font-extrabold tracking-[0.2em] text-accent uppercase shadow-sm mb-2 sm:mb-4">
                <Film className="size-3.5 text-accent" /> Acervo Premium
              </span>
              <h2 className="text-2xl font-black sm:text-4xl md:text-5xl tracking-tight text-white drop-shadow-md text-balance">
                Explore o que está <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">em alta</span>
              </h2>
            </div>
            <p className="max-w-xs text-xs sm:text-sm text-muted-foreground font-semibold leading-relaxed sm:text-right">
              Mais de 60.000 títulos em qualidade até 4K atualizados toda semana.
            </p>
          </Reveal>

          <div className="relative space-y-6 mt-6">
            {/* TRILHO DE DESTAQUE TOP 10 BRASIL ESTILO NETFLIX */}
            <Reveal>
              <Top10Rail items={top10Hoje} />
            </Reveal>

            <Reveal>
              <Rail
                icon={Flame}
                title="Filmes — Lançamentos e Sucessos 2026"
                subtitle="Títulos recém-saídos do cinema"
                items={terror}
              />
            </Reveal>
            <SmoothCardReveal delay={100}>
              <Rail
                icon={Tv}
                title="Séries em alta para maratonar"
                subtitle="Temporadas completas com áudio dublado e legendado"
                items={series}
              />
            </SmoothCardReveal>
            <SmoothCardReveal delay={200}>
              <Rail
                icon={Torii}
                title="Animes — Simulcasts e Clássicos"
                subtitle="Episódios atualizados semanalmente"
                items={animes}
              />
            </SmoothCardReveal>
          </div>
        </section>

        {/* FEATURES */}
        <section className="relative z-10 mx-auto w-[94%] max-w-6xl py-4 sm:py-6">
          <SmoothCardReveal delay={0}>
            <div className="text-center mb-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-surface/60 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-wider text-accent uppercase shadow-sm mb-4">
                <Sparkles className="size-3.5 text-accent" /> Diferenciais da plataforma
              </span>
              <h2 className="text-2xl font-extrabold sm:text-4xl md:text-5xl tracking-tight text-white flex flex-col items-center sm:block text-center">
                <span>Por que escolher a</span>
                <span className="text-hot mt-0.5 sm:mt-0 sm:ml-2">Cineflix</span>
              </h2>
            </div>
          </SmoothCardReveal>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Clapperboard,
                banners: [
                  img("/yQIdU11DYQQp0neGtGtGxbGfRer.jpg", "w780"), // He-Man
                  img("/neeNHeXjMF5fXoCJRsOmkNGC7q.jpg", "w780"), // Oppenheimer
                  img("/7I6VUdPj6tQECNHdviJkUHD2u89.jpg", "w780") // John Wick 4
                ],
                objectPosition: "object-cover",
                gradient: "from-orange-500 via-amber-500 to-yellow-500",
                glow: "shadow-[0_0_22px_rgba(245,158,11,0.85)] border-orange-300/80",
                corBorda: "border border-orange-500/40 hover:border-orange-300",
                corGlow: "shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_50px_rgba(245,158,11,0.55)]",
                bgOverlay: "bg-gradient-to-t from-[#0d0212] via-[#0d0212]/75 to-[#0d0212]/20",
                titleHover: "group-hover:text-orange-200",
                t: "Filmes incríveis",
                d: "He-Man, grandes lançamentos do cinema e superproduções premiadas em até 4K.",
              },
              {
                icon: Tv,
                banners: [
                  img("/uTWhbLc7Bj4qNSdW3ZvZKL8cOHv.jpg", "w780"), // Silo
                  img("/5aE1kxWg6RhgQxJTXTxifv4uq7P.jpg", "w780"), // Squid Game
                  img("/lY2DhbA7Hy44fAKddr06UrXWWaQ.jpg", "w780") // The Last of Us
                ],
                objectPosition: "object-cover",
                gradient: "from-teal-500 via-cyan-500 to-blue-500",
                glow: "shadow-[0_0_22px_rgba(6,182,212,0.85)] border-teal-300/80",
                corBorda: "border border-teal-500/40 hover:border-teal-300",
                corGlow: "shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:shadow-[0_0_50px_rgba(6,182,212,0.55)]",
                bgOverlay: "bg-gradient-to-t from-[#0b0314] via-[#0b0314]/75 to-[#0b0314]/20",
                titleHover: "group-hover:text-teal-200",
                t: "Séries imperdíveis",
                d: "Silo, Squid Game e todos os sucessos globais para maratonar sem limites.",
              },
              {
                icon: Torii,
                banners: [
                  img("/oUmWLyeko3kYdUr8DBLIsxwcugl.jpg", "w780"), // DAIMA
                  img("/1RgPyOhN4DRs225BGTlHJqCudII.jpg", "w780"), // Demon Slayer
                  img("/gtKglOSEq3d4MgQE4VsrT1sRkd0.jpg", "w780") // Jujutsu Kaisen
                ],
                objectPosition: "object-cover",
                gradient: "from-fuchsia-600 via-purple-600 to-pink-500",
                glow: "shadow-[0_0_22px_rgba(217,70,239,0.85)] border-fuchsia-300/80",
                corBorda: "border border-fuchsia-500/40 hover:border-fuchsia-300",
                corGlow: "shadow-[0_0_30px_rgba(217,70,239,0.2)] hover:shadow-[0_0_50px_rgba(217,70,239,0.55)]",
                bgOverlay: "bg-gradient-to-t from-[#0e0214] via-[#0e0214]/75 to-[#0e0214]/20",
                titleHover: "group-hover:text-fuchsia-200",
                t: "Animes atualizados",
                d: "Dragon Ball DAIMA, Demon Slayer e todos os animes do momento em HD.",
              },
              {
                icon: Baby,
                banners: [
                  img("/vYqt6kb4lcF8wwqsMMaULkP9OEn.jpg", "w780"), // Moana 2
                  img("/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg", "w780"), // Inside Out 2
                  img("/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", "w780") // Super Mario
                ],
                objectPosition: "object-cover",
                gradient: "from-cyan-400 via-blue-500 to-indigo-500",
                glow: "shadow-[0_0_22px_rgba(6,182,212,0.85)] border-cyan-300/80",
                corBorda: "border border-cyan-500/40 hover:border-cyan-300",
                corGlow: "shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:shadow-[0_0_50px_rgba(6,182,212,0.55)]",
                bgOverlay: "bg-gradient-to-t from-[#020814] via-[#020814]/75 to-[#020814]/20",
                titleHover: "group-hover:text-cyan-200",
                t: "Canais infantis",
                d: "Moana 2, Disney+ e toda a programação para a criançada.",
              },
              {
                icon: Trophy,
                banners: [
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Erling_Haaland_France_v_Norway_26_June_26-008.jpg/1280px-Erling_Haaland_France_v_Norway_26_June_26-008.jpg", // Haaland
                  "https://upload.wikimedia.org/wikipedia/commons/9/95/Kylian_Mbappe_France_v_Senegal_16_June_2026-391_%28cropped%29.jpg", // Mbappe 2026
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Harry_Kane_England_v_Ghana_23_June_2026-219_%28cropped%29.jpg/1280px-Harry_Kane_England_v_Ghana_23_June_2026-219_%28cropped%29.jpg" // Harry Kane
                ],
                objectPosition: "object-cover object-[center_20%]", // Keep faces in view without stretching
                gradient: "from-green-500 via-emerald-600 to-teal-500",
                glow: "shadow-[0_0_22px_rgba(34,197,94,0.85)] border-green-300/80",
                corBorda: "border border-green-500/40 hover:border-green-300",
                corGlow: "shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:shadow-[0_0_50px_rgba(34,197,94,0.55)]",
                bgOverlay: "bg-gradient-to-t from-[#030e17] via-[#030e17]/75 to-[#030e17]/20",
                titleHover: "group-hover:text-green-200",
                t: "Esportes ao vivo",
                d: "Brasileirão, Champions League, Premier League e todos os campeonatos ao vivo.",
              },
              {
                icon: Lock,
                banners: [
                  img("/7FRraud59N3s10bbf9bfYjvwx3v.jpg", "w780"), // Basic Instinct
                  img("/rpsHpJj7FgnNBXhaO2KFthPwqH6.jpg", "w780"), // Love (2015)
                  img("/xqIstzB0ELbYyfzKcYaSwLb4Whs.jpg", "w780") // Emmanuelle
                ],
                objectPosition: "object-cover",
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
                  className={`group relative h-full min-h-[200px] sm:min-h-[220px] overflow-hidden rounded-2xl p-5 sm:p-7 ${f.corBorda} ${f.corGlow} transition-all duration-500 hover:-translate-y-2.5 animate-float`}
                >
                  {/* IMAGEM BANNER ILUSTRATIVA DE FUNDO (SEM DESFOQUE) COM SLIDESHOW */}
                  <SlideshowBanner banners={f.banners} alt={`Ilustração ${f.t}`} objectPosition={f.objectPosition} />
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

        {/* QUEBRA DE OBJEÇÕES E COMO FUNCIONA */}
        <section className="relative z-10 mx-auto w-[94%] max-w-6xl py-8 sm:py-12">
          <SmoothCardReveal delay={0}>
            <div className="text-center mb-8 sm:mb-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-surface/60 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-wider text-accent uppercase shadow-sm mb-3">
                <ShieldCheck className="size-3.5 text-accent" /> Sem Burocracia &amp; Sem Risco
              </span>
              <h2 className="text-2xl font-extrabold sm:text-4xl md:text-5xl tracking-tight text-white">
                Tudo o que você precisa saber <span className="text-hot">antes de assinar</span>
              </h2>
            </div>
          </SmoothCardReveal>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Cpu,
                badge: "Rota Dedicada",
                title: "Tecnologia Anti-Trava 4K",
                desc: "Servidores otimizados com rota direta no Brasil. Assista a jogos decisivos e filmes sem congelamentos ou travamentos.",
                color: "text-amber-400 bg-amber-400/10 border-amber-400/30",
                glow: "shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:border-amber-400/60",
                link: null,
              },
              {
                icon: Users,
                badge: "Sem Bloqueio de IP",
                title: "Até 4 Telas Simultâneas",
                desc: "Toda a sua família assiste ao mesmo tempo em aparelhos diferentes, sem restrições de IP ou localidade.",
                color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
                glow: "shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400/60",
                link: null,
              },
              {
                icon: Headphones,
                badge: "Atendimento Humano",
                title: "Suporte VIP no WhatsApp",
                desc: "Equipe especializada pronta para te guiar passo a passo na instalação em qualquer aparelho, 7 dias por semana.",
                color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
                glow: "shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-400/60",
                link: "/suporte",
              },
              {
                icon: Rocket,
                badge: "Sem Fidelidade",
                title: "Ativação Imediata & Cancelamento Livre",
                desc: "Receba seus dados na hora no e-mail. Teste à vontade e cancele com 1 clique a qualquer momento sem pegadinhas.",
                color: "text-fuchsia-400 bg-fuchsia-400/10 border-fuchsia-400/30",
                glow: "shadow-[0_0_20px_rgba(217,70,239,0.15)] hover:border-fuchsia-400/60",
                link: null,
              },
            ].map((item, i) => {
              const CardInner = (
                <div className={`glass flex flex-col justify-between rounded-2xl p-6 bg-surface/50 h-full border border-white/15 transition-all duration-300 hover:-translate-y-1.5 ${item.glow} ${item.link ? 'hover:border-emerald-400/90 cursor-pointer' : ''}`}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex size-11 items-center justify-center rounded-xl border ${item.color}`}>
                        <item.icon className="size-5" />
                      </div>
                      <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white/80">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-white mb-2 tracking-tight flex items-center justify-between">
                      <span>{item.title}</span>
                      {item.link && <span className="text-xs text-emerald-400 font-bold underline ml-2">Falar no WhatsApp &rarr;</span>}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              );

              return (
                <SmoothCardReveal key={item.title} delay={50 + i * 80}>
                  {item.link ? (
                    <Link to={item.link} className="block h-full">
                      {CardInner}
                    </Link>
                  ) : (
                    CardInner
                  )}
                </SmoothCardReveal>
              );
            })}
          </div>
        </section>

        {/* PLANOS */}
        <section id="planos" className="relative z-10 mx-auto w-[94%] max-w-6xl py-8 sm:py-12">
          {/* GLOW AMBIENTE DOS PLANOS */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-primary/20 blur-[180px]" />

          <Reveal className="relative z-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-surface-2/70 backdrop-blur-md px-4 py-2 text-xs font-extrabold tracking-wider text-accent uppercase shadow-glow mb-4">
              <Sparkles className="size-3.5 text-accent animate-spin" /> Oferta Especial por Tempo Limitado
            </span>
            <h2 className="text-3xl font-black sm:text-5xl md:text-6xl tracking-tight text-white flex flex-wrap items-center justify-center gap-x-2">
              <span>Escolha o plano ideal para</span>
              <span className="bg-gradient-to-r from-rose-500 via-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent animate-text-shine drop-shadow-[0_0_30px_rgba(244,63,94,0.6)]">
                você e sua família
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto font-medium leading-relaxed">
              Substitua Netflix, Disney+, Max, Prime Video e Globoplay por um único valor acessível.
            </p>

            {/* ELEVADO & FLUTUANTE — SEM RETÂNGULO OU GRADIENTE POLUÍDO AO REDOR */}
            <div className="mx-auto mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
              {/* SELO DE ECONOMIA */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-4 py-2 text-xs sm:text-sm font-extrabold text-emerald-300 shadow-lg backdrop-blur-sm">
                <Check className="size-4 text-emerald-400 shrink-0" />
                Economize mais de <strong className="text-white font-black ml-1 text-sm sm:text-base">R$ 360,00/mês</strong>
              </div>

              {/* LADO DIREITO: ÍCONES REAIS DAS PLATAFORMAS (RECORTADOS POR CLIP-PATH CIRCLE PARA NUNCA MOSTRAR QUADRADOS) */}
              <div className="flex items-center justify-center gap-2.5 sm:gap-4 overflow-x-auto no-scrollbar py-2">
                <span className="text-[11px] font-bold text-emerald-200/90 uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
                  Substitua:
                </span>
                {plataformas.slice(0, 6).map((p) => (
                  <div
                    key={p.nome}
                    className="group relative flex size-12 sm:size-14 shrink-0 items-center justify-center transition-transform duration-300 hover:scale-115"
                    title={p.nome}
                  >
                    {/* BRIHO NÉON 100% RADIAL (CIRCULAR) */}
                    <div
                      className="absolute -inset-1 rounded-full opacity-60 blur-sm transition-opacity duration-300 group-hover:opacity-100 -z-10"
                      style={{
                        background: `radial-gradient(circle at center, ${p.cor} 0%, transparent 70%)`,
                      }}
                    />

                    {/* MEDALHÃO CIRCULAR COM CLIP-PATH SUBPIXEL (ZERO CONTORNO QUADRADO) */}
                    <div
                      className={`relative flex size-full items-center justify-center rounded-full border-2 border-white/40 bg-gradient-to-b ${p.bgGradient} p-2 sm:p-2.5 transition-colors duration-300 group-hover:border-white/90`}
                      style={{
                        clipPath: "circle(49.5% at 50% 50%)",
                      }}
                    >
                      <img
                        src={p.logo}
                        alt={p.nome}
                        className={`size-7 sm:size-8.5 object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] transition-transform ${p.logoScale || 'scale-100'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        <div className="relative z-10 mt-6 sm:mt-8 pt-3 grid items-stretch gap-6 lg:gap-6 lg:grid-cols-3">
          {[
            {
              id: "start",
              nome: "Plano START",
              icon: Zap,
              iconColor: "text-purple-400",
              titleGradient: "text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300 drop-shadow-[0_2px_12px_rgba(168,85,247,0.5)]",
              preco: "R$ 20",
              periodo: "mensal",
              sub: "Renovação mensal · Cancele a qualquer momento",
              destaque: false,
              selo: null as string | null,
              badge: "Sem Fidelidade",
              btnStyle: "bg-gradient-to-r from-purple-600 via-primary to-purple-600 hover:from-purple-500 hover:to-primary text-white font-black py-4 px-4 rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:scale-[1.02]",
              btnText: "ASSINAR PLANO START",
              link: "https://ev.braip.com/ref?pl=plazg9wz&ck=che7qk0o&af=afi07p3351",
              features: [
                "2 Telas simultâneas",
                "Acervo completo (+60.000 títulos)",
                "Esportes & Canais Ao Vivo em HD/4K",
                "Smart TV, Celular, TV Box e PC",
                "Sem fidelidade — cancelamento livre",
                "Suporte 7 dias via WhatsApp",
              ],
            },
            {
              id: "prime",
              nome: "Plano PRIME",
              icon: Crown,
              iconColor: "text-amber-300 drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]",
              titleGradient: "text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-fuchsia-300 drop-shadow-[0_2px_18px_rgba(236,72,153,0.75)]",
              preco: "R$ 97",
              periodo: "1 ano",
              sub: "⚡ Equivale a apenas R$ 8,08/mês · 1 ano sem mensalidades",
              destaque: true,
              selo: "🔥 MAIS POPULAR — ECONOMIZE 60%",
              badge: "⭐ Recomendado",
              btnStyle: "btn-cta bg-gradient-to-r from-purple-500 via-primary to-accent text-white shadow-[0_0_40px_rgba(168,85,247,0.9)] hover:scale-[1.04] font-black py-4 px-6 text-sm sm:text-base",
              btnText: "QUERO ASSINAR AGORA",
              link: "https://ev.braip.com/ref?pl=plaoxjy8&ck=che7qk0o&af=afi07p3351",
              features: [
                "4 Telas simultâneas (Para a família toda)",
                "1 Ano completo de acesso sem mensalidades",
                "Economize mais de R$ 140/ano",
                "Acervo completo em alta qualidade até 4K",
                "Todos os canais VIP & Esportes Ao Vivo",
                "Suporte VIP prioritário 24/7",
              ],
            },
            {
              id: "pro",
              nome: "Plano PRO",
              icon: Sparkles,
              iconColor: "text-fuchsia-400",
              titleGradient: "text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300 drop-shadow-[0_2px_12px_rgba(168,85,247,0.5)]",
              preco: "R$ 69,90",
              periodo: "semestral",
              sub: "Equivale a R$ 11,65/mês · 6 meses de acesso",
              destaque: false,
              selo: null as string | null,
              badge: "Economia 42%",
              btnStyle: "bg-gradient-to-r from-purple-600 via-primary to-purple-600 hover:from-purple-500 hover:to-primary text-white font-black py-4 px-4 rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:scale-[1.02]",
              btnText: "ASSINAR PLANO PRO",
              link: "https://ev.braip.com/ref?pl=pla0zq40&ck=che7qk0o&af=afi07p3351",
              features: [
                "2 Telas simultâneas",
                "6 Meses de acesso sem mensalidades",
                "Acervo completo (+60.000 títulos)",
                "Esportes & Canais Ao Vivo em HD/4K",
                "Smart TV, Celular, TV Box e PC",
                "Ativação imediata sem burocracia",
              ],
            },
          ].map((p, i) => (
            <SmoothCardReveal key={p.nome} delay={100 + i * 120}>
              <div
                className={`glass group relative flex flex-col justify-between h-full rounded-3xl transition-all duration-500 ${
                  p.destaque
                    ? "border-2 border-purple-400 bg-gradient-to-b from-purple-900/70 via-surface/90 to-purple-950/80 p-7 sm:p-9 shadow-[0_0_55px_rgba(168,85,247,0.45)] lg:-translate-y-3 lg:scale-[1.04] z-20 hover:border-accent hover:shadow-[0_0_70px_rgba(168,85,247,0.65)]"
                    : "border border-white/20 bg-surface/60 p-6 sm:p-8 hover:border-white/35 hover:bg-surface/80 shadow-xl"
                }`}
              >
                {p.selo && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-600 via-primary to-accent px-5 py-1.5 text-xs font-black tracking-wider text-white uppercase shadow-[0_0_20px_rgba(168,85,247,0.8)]">
                    <Sparkles className="size-3.5 fill-current" />
                    {p.selo}
                  </span>
                )}

                <div>
                  {/* CABEÇALHO DO PLANO */}
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2.5">
                      <p.icon className={`size-6 sm:size-7 shrink-0 ${p.iconColor}`} />
                      <h3 className={`font-display font-black tracking-tight uppercase ${p.titleGradient} ${p.destaque ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
                        {p.nome}
                      </h3>
                    </div>
                    <span className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider border ${
                      p.destaque
                        ? "bg-gradient-to-r from-amber-500/30 to-purple-600/30 text-amber-200 border-amber-400/50 shadow-[0_0_12px_rgba(245,158,11,0.4)]"
                        : "bg-white/10 text-purple-200 border-white/20"
                    }`}>
                      {p.badge}
                    </span>
                  </div>

                  {/* BLOCO DE PREÇO IMPACTANTE E PERFEITAMENTE UNIFORME */}
                  <div className="mt-5 flex items-baseline gap-1.5 whitespace-nowrap">
                    <span
                      className={`font-display font-black whitespace-nowrap ${
                        p.destaque
                          ? "text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-white to-fuchsia-300 drop-shadow-[0_4px_25px_rgba(236,72,153,0.85)]"
                          : "text-4xl sm:text-5xl lg:text-[2.75rem] text-white drop-shadow-[0_2px_15px_rgba(168,85,247,0.6)]"
                      }`}
                    >
                      {p.preco}
                    </span>
                    <span className={`font-extrabold shrink-0 whitespace-nowrap ${p.destaque ? "text-amber-200 text-sm sm:text-base" : "text-xs sm:text-sm text-purple-200"}`}>
                      /{p.periodo}
                    </span>
                  </div>

                  <p className={`mt-2.5 text-xs font-semibold leading-relaxed ${p.destaque ? "text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20" : "text-muted-foreground"}`}>
                    {p.sub}
                  </p>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 w-full flex items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 ${p.btnStyle}`}
                  >
                    <Zap className={p.destaque ? "size-5 fill-amber-300 text-amber-300 animate-pulse" : "size-4 text-purple-200"} />
                    {p.btnText}
                  </a>

                  <div className={`my-6 h-px w-full ${p.destaque ? "bg-purple-400/30" : "bg-white/15"}`} />

                  <ul className="space-y-3.5 text-xs sm:text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check className={`mt-0.5 size-4 shrink-0 ${p.destaque ? "text-accent font-bold" : "text-primary"}`} />
                        <span className={p.destaque ? "text-white font-semibold" : "text-foreground/90 font-medium"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SmoothCardReveal>
          ))}
        </div>

        {/* PAINEL COMPACTO DE GARANTIA E PAGAMENTO */}
        <SmoothCardReveal delay={150}>
          <div className="glass mx-auto max-w-5xl rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 border border-white/10 bg-surface/80 shadow-[0_8px_30px_rgb(0,0,0,0.5)] mt-10 sm:mt-16 relative overflow-hidden">
            {/* Brilho de topo sutil para dar acabamento premium sem parecer um plano */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="relative z-10 grid gap-5 sm:gap-8 md:grid-cols-2 md:items-center md:divide-x md:divide-white/10">
              {/* LADO ESQUERDO: GARANTIA DE 7 DIAS */}
              <div className="flex flex-row items-center gap-4 sm:gap-6">
                <div className="flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-accent shadow-sm">
                  <ShieldCheck className="size-6 sm:size-7" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-purple-300">Garantia</span>
                    <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-[9px] font-extrabold tracking-wider text-purple-200 uppercase">7 Dias Sem Risco</span>
                  </div>
                  <h4 className="font-display text-sm sm:text-lg font-bold text-white drop-shadow-md leading-tight">
                    Experimente sem compromisso
                  </h4>
                  <p className="mt-0.5 text-xs text-muted-foreground font-medium">
                    Satisfação garantida ou seu dinheiro de volta em até 7 dias.
                  </p>
                </div>
              </div>

              {/* LADO DIREITO: FORMAS DE PAGAMENTO */}
              <div className="flex flex-col justify-center gap-2 md:pl-8">
                <div className="flex items-center gap-2">
                  <Lock className="size-3.5 text-emerald-400" />
                  <span className="text-xs font-bold text-white">Pagamento 100% Seguro &amp; Encriptado</span>
                </div>
                <p className="text-[11px] text-muted-foreground font-medium">
                  Aceitamos Pix (aprovação imediata) e cartão de crédito em até 12x.
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-950/40 px-2.5 py-1 text-[10px] sm:text-xs font-bold text-purple-100 transition-all hover:border-purple-400/60">
                    <QrCode className="size-3.5 text-emerald-400" /> Pix Instantâneo
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-950/40 px-2.5 py-1 text-[10px] sm:text-xs font-bold text-purple-100 transition-all hover:border-purple-400/60">
                    <CreditCard className="size-3.5 text-purple-300" /> Cartão até 12x
                  </span>
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
      <section className="border-t border-white/5 bg-black/20 py-4 sm:py-6 backdrop-blur-xl">
        <div className="mx-auto w-[94%] max-w-6xl">
          <p className="mb-8 text-center text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
            Segurança &amp; Certificados de Garantia
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { icon: Lock, title: "Pagamento Seguro", desc: "SSL 256-bit", link: null },
              { icon: Zap, title: "Ativação Imediata", desc: "Acesso na hora", link: null },
              { icon: CreditCard, title: "Parcelamento", desc: "Até 12x no cartão", link: null },
              { icon: ShieldCheck, title: "Suporte 7 dias", desc: "Via WhatsApp", link: "/suporte" },
              { icon: RefreshCcw, title: "Sem Fidelidade", desc: "Cancele quando quiser", link: null },
              { icon: Star, title: "+10 mil clientes", desc: "Satisfação garantida", link: null },
            ].map((c, i) => {
              const BadgeInner = (
                <div className={`glass flex flex-col items-center gap-2 rounded-2xl p-4 text-center transition-all duration-300 hover:border-primary/50 hover:scale-105 ${c.link ? 'hover:border-emerald-400 cursor-pointer' : ''}`}>
                  <c.icon className={`size-6 mb-1 ${c.link ? 'text-emerald-400' : 'text-accent'}`} />
                  <p className="text-xs font-bold text-white">{c.title}</p>
                  <p className="text-[10px] text-muted-foreground">{c.desc}</p>
                </div>
              );

              return (
                <SmoothCardReveal key={c.title} delay={60 + i * 40}>
                  {c.link ? (
                    <Link to={c.link} className="block h-full">
                      {BadgeInner}
                    </Link>
                  ) : (
                    BadgeInner
                  )}
                </SmoothCardReveal>
              );
            })}
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

