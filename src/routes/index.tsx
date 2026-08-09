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
  CreditCard,
  Lock,
  QrCode,
  Barcode,
  RefreshCcw,
  DollarSign,
  Film,
  MonitorPlay,
  Download,
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
      {/* BACKGROUND AURORA MESH — OTIMIZADO SEM MIX-BLEND-SCREEN PARA EVITAR FLICKER */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden [transform:translateZ(0)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#070110] to-[#030006]" />
        <div className="absolute -top-[15%] -left-[10%] w-[100vw] h-[100vw] sm:w-[70vw] sm:h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-purple-600/20 blur-[100px] opacity-70" />
        <div className="absolute top-[25%] -right-[15%] w-[90vw] h-[90vw] sm:w-[60vw] sm:h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-pink-500/15 blur-[100px] opacity-60" />
        <div className="absolute -bottom-[15%] -left-[10%] w-[100vw] h-[100vw] sm:w-[80vw] sm:h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-indigo-700/20 blur-[120px] opacity-60" />
      </div>
      {/* BARRA PROMOCIONAL + NAV — empilhados para mobile funcionar */}
      <div className="fixed inset-x-0 top-0 z-50 flex flex-col [transform:translateZ(0)]">
        <div className="z-[60]">
          <PromoBanner />
        </div>
        <header className="z-50">
          <div className="mx-auto mt-2 flex w-[94%] max-w-6xl items-center justify-between rounded-full px-4 sm:px-5 py-2.5 sm:py-3 border border-white/10 bg-[#0c0418]/90 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.5)] [transform:translateZ(0)]">
            <SmoothLink href="#" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-tr from-primary/80 via-primary to-accent text-white shadow-glow">
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

        {/* CATÁLOGO */}
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

          <div className="relative">
            <Reveal>
              <Rail
                icon={Flame}
                title="Filmes — Lançamentos e Sucessos"
                items={terror}
              />
            </Reveal>
            <SmoothCardReveal delay={150}>
              <Rail
                icon={Tv}
                title="Séries em alta para maratonar"
                items={series}
              />
            </SmoothCardReveal>
            <SmoothCardReveal delay={300}>
              <Rail
                icon={Torii}
                title="Animes — Simulcasts e Clássicos"
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

        {/* COMPARATIVO DE PREÇOS DE PLATAFORMAS */}
        <section id="comparativo" className="relative z-10 mx-auto w-[94%] max-w-6xl py-6 sm:py-10">
          <SmoothCardReveal delay={0}>
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-surface/60 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-wider text-accent uppercase shadow-sm mb-4">
                <DollarSign className="size-3.5 text-accent" /> Economia Real
              </span>
              <h2 className="text-2xl font-extrabold sm:text-4xl md:text-5xl tracking-tight text-white flex flex-col items-center sm:block text-center">
                <span>Por que pagar caro em</span>{" "}
                <span className="text-hot mt-0.5 sm:mt-0 sm:ml-2">várias assinaturas?</span>
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
                Veja o valor mensal das principais plataformas se contratadas individualmente:
              </p>
            </div>
          </SmoothCardReveal>

          {/* GRID DE PLATAFORMAS */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {plataformas.map((p, i) => (
              <SmoothCardReveal key={p.nome} delay={40 + i * 30}>
                <div className="glass flex flex-col items-center justify-between rounded-2xl p-4 text-center border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:scale-105 h-full">
                  <div className="flex h-10 items-center justify-center mb-2">
                    {p.logo ? (
                      <img
                        src={p.logo}
                        alt={p.nome}
                        className={`max-h-7 max-w-[90px] object-contain ${p.invert ? "brightness-0 invert" : ""}`}
                      />
                    ) : (
                      <span className="font-extrabold text-sm text-white" style={{ color: p.cor }}>
                        {p.nome}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground mb-0.5">{p.nome}</p>
                    <p className="text-xs font-black text-rose-400 font-mono">{p.preco}/mês</p>
                  </div>
                </div>
              </SmoothCardReveal>
            ))}
          </div>

          {/* BANNER DE COMPARATIVO DE ECONOMIA */}
          <SmoothCardReveal delay={200}>
            <div className="mt-6 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/50 via-[#0a1f18] to-purple-950/50 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_45px_rgba(16,185,129,0.15)] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-900/40 px-3 py-1 text-[11px] font-bold text-emerald-300 mb-3">
                  <Check className="size-3.5 text-emerald-400" /> Economize mais de R$ 360,00/mês
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Total individual: <span className="line-through text-rose-400">R$ 380,00/mês</span>
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Na <strong className="text-white">Cineflix</strong>, você assiste a <strong className="text-emerald-400">TUDO</strong> isso por apenas <strong className="text-accent text-sm sm:text-base">R$ 20,00/mês</strong>!
                </p>
              </div>

              <SmoothLink href="#planos" className="btn-cta text-xs sm:text-sm px-6 py-3 shrink-0">
                <Zap className="size-4" /> QUERO ECONOMIZAR AGORA
              </SmoothLink>
            </div>
          </SmoothCardReveal>
        </section>

        {/* PLANOS */}
        <section id="planos" className="relative z-10 mx-auto w-[94%] max-w-6xl py-4 sm:py-6">
          {/* GLOW AMBIENTE DOS PLANOS */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-primary/20 blur-[180px]" />

          <Reveal className="relative z-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-surface-2/70 backdrop-blur-md px-4 py-2 text-xs font-extrabold tracking-wider text-accent uppercase shadow-glow mb-5">
              <Sparkles className="size-3.5 text-accent animate-spin" /> Oferta por tempo limitado
            </span>
            <h2 className="text-3xl font-black sm:text-5xl md:text-6xl tracking-tight text-white flex flex-wrap items-center justify-center gap-x-2">
              <span>Aproveite e</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="bg-gradient-to-r from-rose-500 via-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent animate-text-shine drop-shadow-[0_0_30px_rgba(244,63,94,0.6)]">
                  assine já
                </span>
                <Zap className="size-6 sm:size-9 text-amber-400 animate-bounce drop-shadow-[0_0_15px_rgba(251,191,36,0.9)]" />
              </span>
            </h2>
            <p className="mt-0.5 sm:mt-1 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto font-medium leading-relaxed">
              Cancele quando quiser, com ativação imediata e suporte 24/7.
            </p>
          </Reveal>

        <div className="relative z-10 mt-6 sm:mt-7 pt-5 sm:pt-6 grid items-start gap-8 lg:gap-6 lg:grid-cols-3">
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
                className={`group relative h-full rounded-2xl [transform:translateZ(0)] [backface-visibility:hidden] transition-[transform,border-color,box-shadow] duration-300 ${p.corBorda} ${p.corGlow} ${p.bgCard} ${
                  p.destaque
                    ? "pt-9 pb-8 px-6 sm:px-9 lg:scale-[1.04] z-20 hover:scale-[1.06]"
                    : "p-6 sm:p-9 hover:-translate-y-2"
                }`}
              >
                {/* BRILHO REFLEXIVO DE VIDRO 3D NO CARD */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-4xl [transform:translateZ(0)] [isolation:isolate]">
                  <div className="pointer-events-none absolute -top-24 -left-24 size-48 rounded-full bg-white/10 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-white/15" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-80" />
                </div>

                {p.selo && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-600 via-primary to-accent px-5 py-1.5 text-xs font-black tracking-wider text-white uppercase shadow-[0_0_25px_rgba(168,85,247,0.85)]">
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
                  className={`mt-7 w-full flex items-center justify-center gap-2 rounded-full py-4 text-sm font-extrabold uppercase tracking-wide transition-all duration-300 animate-float ${p.btnStyle}`}
                >
                  Comprar agora
                </a>

                <ul className="mt-8 space-y-3 text-sm">
                  {[
                    p.extra,
                    p.telas,
                    "Mais de 60.000 conteúdos",
                    "Qualidade até 4K (SD/HD/FHD/4K)",
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
          <div className="mx-auto max-w-5xl rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] mt-10 sm:mt-16 relative overflow-hidden">
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
                  <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground leading-relaxed max-w-[280px]">
                    Se não gostar, devolvemos 100% do valor.
                  </p>
                </div>
              </div>

              {/* LADO DIREITO: FORMAS DE PAGAMENTO ACEITAS */}
              <div className="flex flex-row items-center gap-4 sm:gap-6 md:pl-10">
                <div className="flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-accent shadow-sm">
                  <CreditCard className="size-6 sm:size-7" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-purple-300">Pagamento</span>
                    <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-[9px] font-extrabold tracking-wider text-purple-200 uppercase">Seguro</span>
                  </div>
                  <h4 className="font-display text-sm sm:text-lg font-bold text-white drop-shadow-md leading-tight">
                    Ativação Imediata
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-950/40 px-2.5 py-1 text-[10px] sm:text-xs font-bold text-purple-100 backdrop-blur-md transition-all hover:border-purple-400/60">
                      <QrCode className="size-3.5 text-purple-400" /> PIX
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-950/40 px-2.5 py-1 text-[10px] sm:text-xs font-bold text-purple-100 backdrop-blur-md transition-all hover:border-purple-400/60">
                      <CreditCard className="size-3.5 text-purple-400" /> Cartão 12x
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
      <section className="border-t border-white/5 bg-black/20 py-4 sm:py-6 backdrop-blur-xl">
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

