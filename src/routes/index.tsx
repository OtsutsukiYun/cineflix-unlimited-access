import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, Fragment } from "react";

function SmoothCardReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setShown(true); }, { threshold: 0.05, rootMargin: "60px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDuration: "650ms", transitionDelay: `${delay}ms`, transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      className={`transition-all duration-700 ${shown ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-7 scale-[0.98]"} ${className}`}
    >
      {children}
    </div>
  );
}

import {
  Check,
  Clapperboard,
  Flame,
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
  RefreshCcw,
  Film,
  MonitorPlay,
  Smartphone,
  Gift,
  X,
  Calendar,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PromoBanner } from "@/components/PromoBanner";
import { Faq } from "@/components/Faq";
import { Torii } from "@/components/icons";
import { SocialProof } from "@/components/SocialProof";
import {
  animes,
  heroSlides,
  img,
  series,
  terror,
} from "@/data/catalog";

// ── INSTAGRAM POPUP ─────────────────────────────────────────────────────────
function InstagramPopup() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!sessionStorage.getItem("ig_popup_seen")) {
      const t = setTimeout(() => setOpen(true), 900);
      return () => clearTimeout(t);
    }
  }, []);
  function close() { sessionStorage.setItem("ig_popup_seen", "1"); setOpen(false); }
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 overflow-hidden">
        <img src={img("/o0jkkpcN81QqSl8DMLScBCXyUH9.jpg", "w1280")} alt="" className="size-full object-cover opacity-20 scale-105 blur-sm" />
        <div className="absolute inset-0 bg-black/82" />
      </div>
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-[#0e0e0e] p-7 sm:p-9 shadow-[0_40px_80px_rgba(0,0,0,0.95)] text-center">
        <button onClick={close} aria-label="Fechar" className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-all">
          <X className="size-4" />
        </button>
        <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-900 shadow-[0_0_30px_rgba(220,38,38,0.6)]">
          <Gift className="size-8 text-white" />
        </div>
        <p className="mb-1 text-xs font-extrabold tracking-[0.2em] text-red-400 uppercase">Exclusivo Instagram · CinePesadelo</p>
        <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
          🎁 Teste Grátis<br /><span className="text-red-400">por 3 dias!</span>
        </h2>
        <p className="text-sm text-white/70 leading-relaxed mb-6">
          Você veio pelo Instagram do <strong className="text-white">CinePesadelo</strong> e por isso está ganhando{" "}
          <strong className="text-red-300">3 dias de teste grátis</strong> no UniTV Pro — todos os filmes, séries e o maior catálogo de terror.
        </p>
        <Link
          to="/instalar"
          onClick={close}
          className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3.5 text-sm font-black text-white shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(220,38,38,0.7)] mb-3"
        >
          <Smartphone className="size-4" />
          QUERO MEU TESTE GRÁTIS
        </Link>
        <button onClick={close} className="text-xs text-white/40 hover:text-white/70 transition-colors underline underline-offset-2">
          Agora não, quero só ver o catálogo
        </button>
      </div>
    </div>
  );
}

// ── ROUTE ────────────────────────────────────────────────────────────────────
export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "UniTV Pro — Filmes, Séries, Esportes e Terror em 4K" },
      {
        name: "description",
        content:
          "Todos os streamings em um só lugar: filmes recém-saídos do cinema, séries completas, esportes ao vivo e o maior acervo de terror por R$34,99/mês.",
      },
      { property: "og:title", content: "UniTV Pro — Filmes, Séries, Esportes e Terror em 4K" },
      {
        property: "og:description",
        content:
          "Filmes, séries de sucesso, esportes ao vivo e o maior catálogo de terror em até 4K.",
      },
    ],
  }),
  component: Index,
} as any));

const CTA_HREF = "#planos";
const WA_LINK = "https://wa.me/5561984016006";

function smoothTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const el = document.querySelector(href);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", href);
}

function SmoothLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <a href={href} className={className ?? ""} onClick={(e) => smoothTo(e, href)}>
      {children}
    </a>
  );
}

function Cta({ children = "QUERO ASSINAR" }: { children?: string }) {
  return (
    <SmoothLink href={CTA_HREF} className="btn-cta animate-pulse-ring">
      {children}
    </SmoothLink>
  );
}

// ── POSTER CARD ─────────────────────────────────────────────────────────────
function PosterCard({ item }: { item: { title: string; poster: string; year: string; tag?: string } }) {
  return (
    <div className="group relative overflow-hidden rounded-xl aspect-[2/3] bg-surface cursor-pointer">
      <img
        src={img(item.poster, "w342")}
        alt={item.title}
        loading="lazy"
        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 inset-x-0 p-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-[11px] font-bold text-white leading-tight line-clamp-2">{item.title}</p>
        <p className="text-[10px] text-white/60 mt-0.5">{item.year}</p>
      </div>
      {item.tag && (
        <span className="absolute top-2 left-2 rounded-full bg-red-600 px-2 py-0.5 text-[9px] font-black text-white uppercase tracking-wide">
          {item.tag}
        </span>
      )}
    </div>
  );
}

// ── COMPACT TABBED CATALOG DATA ─────────────────────────────────────────────
const CATALOG_TABS = [
  {
    id: "em-alta",
    label: "🔥 Em Alta",
    items: [
      { title: "Obsessão", poster: "/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg", year: "2026", tag: "🔥 Top 1" },
      { title: "A Morte do Demônio: Em Chamas", poster: "/fteLdvfRnltfLjAEnsl5E3vImnW.jpg", year: "2026", tag: "🔥 Top 2" },
      { title: "Todo Mundo em Pânico 6", poster: "/y9yJd2qIIwhZcllHeKHsz5eRvNr.jpg", year: "2026", tag: "Comédia 2026" },
      { title: "Leviticus", poster: "/5M2dI8TJeRNY3Aeidhp3Ujrb3aI.jpg", year: "2026", tag: "🔥 Terror 2026" },
      { title: "The Eyes", poster: "/yH2sGLdQejqf3Zk8KDuoDa5gr6E.jpg", year: "2026", tag: "Terror 2026" },
      { title: "Silo", poster: "/cxB16Cc7xZuqWgNDo7QlqLMlinu.jpg", year: "Série", tag: "Em alta" },
    ],
  },
  {
    id: "filmes",
    label: "🎬 Filmes & Lançamentos",
    items: [
      { title: "A Última Casa", poster: "/AqOwuZ4X0Ssi3LIsYqXNw52IIvW.jpg", year: "2026", tag: "🔥 Exclusivo 2026" },
      { title: "He-Man: Mestres do Universo", poster: "/atpb7NKSyM4bJSUY8vQTunzK4Na.jpg", year: "2026", tag: "🔥 Lançamento 2026" },
      { title: "Homem-Aranha: Um Novo Dia", poster: "/x0nvYzQpyJc5pdT9lMnkMuYAg0O.jpg", year: "2026", tag: "Super-herói" },
      { title: "Todo Mundo em Pânico 6", poster: "/y9yJd2qIIwhZcllHeKHsz5eRvNr.jpg", year: "2026", tag: "Comédia 2026" },
      { title: "Leviticus", poster: "/5M2dI8TJeRNY3Aeidhp3Ujrb3aI.jpg", year: "2026", tag: "Terror 2026" },
      { title: "The Eyes", poster: "/yH2sGLdQejqf3Zk8KDuoDa5gr6E.jpg", year: "2026", tag: "Suspense" },
    ],
  },
  {
    id: "terror-raro",
    label: "👻 Terror & Asiáticos Raros",
    items: [
      { title: "Pengabdi Setan 2: Communion", poster: "/xQNMM3u6srkhM8bdTCKVTFzyCF1.jpg", year: "2022", tag: "🔥 Indonésia" },
      { title: "O Lamento", poster: "/mL4vGghS5XtgeNIPjhoTg8Tv5cJ.jpg", year: "2016", tag: "🔥 Coreia" },
      { title: "Zona Zero", poster: "/hWT5fHzVcxq06SuLfAWYVCrue7P.jpg", year: "2026", tag: "Terror Coreano" },
      { title: "Omukade", poster: "/rB495nxugPfNlBmFDUjN5kaTy90.jpg", year: "2026", tag: "Terror Asiático 2026" },
      { title: "Pemandi Jenazah", poster: "/1ZTrQWpuhxMr32uC1fQBRnkVYlf.jpg", year: "2024", tag: "Indonésia" },
      { title: "Salmokji", poster: "/bOl0rJ86WWxVYlQlGttHhHuYiPQ.jpg", year: "2026", tag: "Coreia" },
      { title: "Dia Bukan Ibu", poster: "/ojWSVt7O92ZLtEUyQs8u5pRI40b.jpg", year: "2025", tag: "Exclusivo" },
      { title: "The Eyes", poster: "/yH2sGLdQejqf3Zk8KDuoDa5gr6E.jpg", year: "2026", tag: "Suspense" },
    ],
  },
  {
    id: "series",
    label: "📺 Séries",
    items: [
      { title: "Silo", poster: "/cxB16Cc7xZuqWgNDo7QlqLMlinu.jpg", year: "Série", tag: "Apple TV+" },
      { title: "Origem (From)", poster: "/eK9ZDIq7gPFRJ0GGaWvgrXLZgXX.jpg", year: "Série", tag: "Mistério" },
      { title: "Wandinha", poster: "/7rxiQrZjrer0RB9qNA8rHYFo53R.jpg", year: "Série", tag: "Netflix" },
      { title: "IT: Bem-Vindos a Derry", poster: "/gMTfrLvrDaD0zrhpLZ7zXIIpKfJ.jpg", year: "2025", tag: "Lançamento" },
      { title: "Stranger Things", poster: "/twfKp60THrcOIep9sjHODOOfO8d.jpg", year: "Série", tag: "Popular" },
      { title: "Yellowjackets", poster: "/xRnGrn7Z7SC0KIBodocoU1QgDZF.jpg", year: "Série", tag: "Drama" },
    ],
  },
  {
    id: "animes-kids",
    label: "🎌 Animes & Infantil",
    items: [
      { title: "Demon Slayer", poster: "/4RuJf3ufe8DgQVycdyMZrJHGK1s.jpg", year: "2025", tag: "Animes" },
      { title: "Solo Leveling", poster: "/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg", year: "Série", tag: "Em alta" },
      { title: "One Piece", poster: "/9ltisibeD4gzqjM1AzmQwCdyirQ.jpg", year: "Série", tag: "Clássico" },
      { title: "Moana 2", poster: "/xGvz7nlGQeePcVOpAzOcHsC7kRt.jpg", year: "2024", tag: "Infantil" },
      { title: "Bluey", poster: "/9p4pNoGcuyCfHcGWKNrTopqMWtq.jpg", year: "Série", tag: "Kids" },
      { title: "Sonic 3: O Filme", poster: "/tfM1T6tAivjvy0sLwt6Y9WvlmzB.jpg", year: "2024", tag: "Cinema" },
    ],
  },
];

// ── MAIN PAGE ────────────────────────────────────────────────────────────────
function Index() {
  const [slide, setSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("em-alta");

  useEffect(() => {
    const timer = setInterval(() => setSlide((prev) => (prev + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const currentTabObj = CATALOG_TABS.find((t) => t.id === activeTab) || CATALOG_TABS[0];

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen bg-[#080808] font-sans text-foreground antialiased selection:bg-red-600 selection:text-white">
      <InstagramPopup />

      {/* FUNDO CINEMÁTICO — vermelho/preto */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden [transform:translateZ(0)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/50 via-[#080808] to-[#030303]" />
        <div className="animate-aurora-1 absolute -top-[15%] -left-[10%] w-[100vw] h-[100vw] sm:w-[70vw] sm:h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tr from-red-900/30 via-red-800/20 to-blue-950/15 blur-[110px]" />
        <div className="animate-aurora-2 absolute top-[25%] -right-[15%] w-[90vw] h-[90vw] sm:w-[65vw] sm:h-[65vw] max-w-[750px] max-h-[750px] rounded-full bg-gradient-to-br from-red-900/25 via-red-950/20 to-blue-900/15 blur-[110px]" />
        <div className="animate-aurora-3 absolute -bottom-[15%] -left-[10%] w-[100vw] h-[100vw] sm:w-[80vw] sm:h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-t from-blue-950/30 to-red-950/20 blur-[130px]" />
      </div>

      {/* NAVBAR */}
      <div className="fixed inset-x-0 top-0 z-50 flex flex-col [transform:translateZ(0)]">
        <div className="z-[60]"><PromoBanner /></div>
        <header className="z-50">
          <div className="glass mx-auto mt-2 flex w-[94%] max-w-6xl items-center justify-between rounded-full px-4 sm:px-6 py-2.5 sm:py-3 border border-white/15 bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <SmoothLink href="#" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-blue-800 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                <Play className="size-4 fill-current ml-0.5" />
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                UniTV<span className="text-red-500"> Pro</span>
              </span>
            </SmoothLink>

            <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
              <SmoothLink href="#catalogo" className="text-white/80 transition-colors hover:text-white">Catálogo</SmoothLink>
              <SmoothLink href="#planos" className="text-white/80 transition-colors hover:text-white">Planos</SmoothLink>
              <SmoothLink href="#faq" className="text-white/80 transition-colors hover:text-white">FAQ</SmoothLink>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-green-400 transition-colors hover:text-green-300 font-semibold">Suporte</a>
            </nav>

            <Link to="/instalar" className="btn-cta px-5 py-2.5 text-xs">
              Teste Grátis
            </Link>
          </div>
        </header>
      </div>

      {/* HERO — centralizado, texto super enxuto e equilibrado */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden text-center">
        {heroSlides.map((s, i) => (
          <img
            key={s.title}
            src={img(s.backdrop, "w1280")}
            alt={`Cena de ${s.title}`}
            className="absolute inset-0 size-full object-cover transition-all duration-[2200ms] ease-out"
            style={{
              opacity: i === slide ? 1 : 0,
              transform: i === slide ? "scale(1.02)" : "scale(1)",
              objectPosition: s.objectPosition ?? "center 20%",
              filter: s.brightness ? `${s.brightness} brightness(0.52)` : "brightness(0.52)",
            }}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-[#080808]/50" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />

        <div className="relative z-10 mx-auto w-[94%] max-w-3xl pt-36 pb-14 sm:pt-40 sm:pb-16">
          <p className="mb-3 text-xs font-extrabold tracking-[0.25em] text-red-400 uppercase">
            🔥 Todos os Streamings em Um Só Lugar
          </p>

          <h1 className="font-display text-3xl font-black sm:text-5xl md:text-6xl leading-[1.08] text-white tracking-tight drop-shadow-xl">
            Filmes, séries, doramas, esportes e o{" "}
            <span className="text-red-500">maior acervo de terror.</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-white/70 max-w-lg mx-auto leading-relaxed">
            Mais de <strong className="text-white">100.000 conteúdos</strong> (filmes, séries, doramas, canais e esportes) em até 4K por apenas <strong className="text-red-400">R$34,99/mês</strong>.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Cta>QUERO ASSINAR</Cta>
            <Link to="/instalar" className="btn-ghost">
              <Smartphone className="size-4" /> Teste grátis 3 dias
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-5 text-xs text-white/50">
            <span className="flex items-center gap-1.5"><Star className="size-3.5 fill-red-500 text-red-500" /> 4.9 de satisfação</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="size-3.5 text-red-500" /> Garantia de 7 dias</span>
            <span className="flex items-center gap-1.5"><Zap className="size-3.5 text-red-500" /> Ativação imediata</span>
          </div>

          <div className="mt-7 flex justify-center gap-2">
            {heroSlides.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setSlide(i)}
                aria-label={`Ver ${s.title}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === slide ? "w-10 bg-red-500" : "w-3 bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative z-20 w-full overflow-hidden border-y border-white/5 py-3 bg-black/40 backdrop-blur-sm">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-8 sm:gap-16 pr-8 sm:pr-16 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
            {Array.from({ length: 4 }).fill(0).map((_, i) => (
              <Fragment key={i}>
                <span className="flex items-center gap-2 text-red-400"><Sparkles className="size-3.5" /> Qualidade em até 4K</span>
                <span className="flex items-center gap-2"><Film className="size-3.5 text-red-500" /> Cinema & Lançamentos</span>
                <span className="flex items-center gap-2 text-blue-300"><Tv className="size-3.5 text-blue-400" /> +100.000 Conteúdos</span>
                <span className="flex items-center gap-2"><MonitorPlay className="size-3.5 text-red-500" /> Smart TV & TV Box</span>
                <span className="flex items-center gap-2 text-red-300"><RefreshCcw className="size-3.5 text-red-500" /> Atualizações Semanais</span>
                <span className="flex items-center gap-2"><Zap className="size-3.5 text-red-500" /> Ativação Imediata</span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* CATÁLOGO COMPACTO E DINÂMICO COM ABAS (NÃO CANSATIVO) */}
      <section id="catalogo" className="relative z-10 py-10 sm:py-14">
        <div className="mx-auto w-[94%] max-w-5xl">
          <Reveal>
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-3.5 py-1.5 text-xs font-bold tracking-wider text-red-400 uppercase mb-3">
                <Film className="size-3.5" /> Destaques do Acervo
              </span>
              <h2 className="text-2xl font-extrabold sm:text-4xl text-white">
                O que você quer assistir <span className="text-red-500">hoje?</span>
              </h2>
            </div>
          </Reveal>

          {/* Abas para alternar sem rolar a página infinitamente */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mb-7">
            {CATALOG_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)] scale-105"
                    : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grade enxuta de 6 pôsteres (rápida de ler e visualmente limpa) */}
          <SmoothCardReveal key={activeTab}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {currentTabObj.items.map((item) => (
                <PosterCard key={item.title} item={item} />
              ))}
            </div>
          </SmoothCardReveal>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative z-10 mx-auto w-[94%] max-w-6xl py-10 sm:py-14">
        <SmoothCardReveal>
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2 text-xs font-bold tracking-wider text-red-400 uppercase mb-4">
              <Sparkles className="size-3.5" /> Por que escolher o UniTV Pro?
            </span>
            <h2 className="text-2xl font-extrabold sm:text-4xl tracking-tight text-white">
              Tudo o que você precisa,<br /><span className="text-red-500">em um só lugar</span>
            </h2>
          </div>
        </SmoothCardReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "📺",
              title: "TV ao Vivo em Alta",
              desc: "Centenas de canais HD e UHD: esportes, notícias, infantis, variedades e filmes — todos num só lugar.",
            },
            {
              icon: "🎬",
              title: "Cinema e Séries",
              desc: "Acervo robusto para maratonar quando bater vontade. Tudo incluso na recarga, sem cobrança avulsa.",
            },
            {
              icon: "⏪",
              title: "Volte 7 Dias na Grade",
              desc: "Perdeu o jogo, novela ou programa? Use o Playback para retomar a programação dos últimos 7 dias.",
            },
            {
              icon: "📡",
              title: "Sinal P2P Estável",
              desc: "A rede peer-to-peer espalha o conteúdo de forma inteligente, mantendo a transmissão fluida sem travar.",
            },
            {
              icon: "🔒",
              title: "Bloqueio Por Perfil",
              desc: "Trave canais com senha para garantir que as crianças vejam só o que é apropriado.",
            },
            {
              icon: "📋",
              title: "Guia EPG Completo",
              desc: "O guia de programação mostra o que passa em cada canal, com horário, sinopse e ordem por categoria.",
            },
          ].map((f, i) => (
            <SmoothCardReveal key={f.title} delay={60 + i * 70}>
              <div className="glass flex gap-4 rounded-2xl p-5 border border-white/10 bg-white/4 hover:border-red-500/30 transition-all duration-300">
                <span className="text-2xl shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-white mb-1 text-sm">{f.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </SmoothCardReveal>
          ))}
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="relative z-10 mx-auto w-[94%] max-w-6xl py-10 sm:py-14">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-red-800/15 blur-[180px]" />

        <Reveal className="relative z-10 text-center mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/30 px-4 py-2 text-xs font-extrabold tracking-wider text-red-400 uppercase mb-4">
            <Sparkles className="size-3.5 animate-spin" /> Oferta por Tempo Limitado
          </span>
          <h2 className="text-3xl font-black sm:text-5xl tracking-tight text-white mb-2">
            Escolha seu <span className="text-red-500">plano</span>
          </h2>
          <p className="text-sm text-white/55 max-w-md mx-auto">
            Sem fidelidade. Cancele quando quiser. Garantia de reembolso de 7 dias em todos os planos.
          </p>
        </Reveal>

        <div className="relative z-10 grid items-stretch gap-6 lg:grid-cols-3">
          {[
            {
              id: "mensal",
              nome: "Plano Mensal",
              icon: Calendar,
              iconColor: "text-red-400",
              titleGradient: "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-300",
              precoAntigo: "R$50",
              preco: "R$34,99",
              periodo: "mês",
              dias: "30 dias",
              telas: "1 tela",
              destaque: false,
              selo: null as string | null,
              badge: "Sem Fidelidade",
              btnStyle: "bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-black py-3.5 px-4 rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:scale-[1.02]",
              btnText: "ASSINAR PLANO MENSAL",
              link: "#planos",
              features: [
                "1 Tela simultânea",
                "Acervo completo (+100.000 títulos)",
                "Esportes & Canais Ao Vivo HD/4K",
                "Smart TV Android, TV Box, Mi Stick, FireTV",
                "Celular Android e Tablet Android",
                "Suporte 7 dias via WhatsApp",
                "Garantia de reembolso de 7 dias",
              ],
            },
            {
              id: "anual",
              nome: "Plano Anual",
              icon: Crown,
              iconColor: "text-amber-300 drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]",
              titleGradient: "text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-red-300",
              precoAntigo: "R$250",
              preco: "R$179,99",
              periodo: "ano",
              dias: "365 dias",
              telas: "2 telas",
              destaque: true,
              selo: "🔥 MAIS POPULAR • MELHOR CUSTO-BENEFÍCIO",
              badge: "⭐ Recomendado",
              btnStyle: "bg-gradient-to-r from-red-600 via-red-500 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-[0_0_35px_rgba(220,38,38,0.8)] hover:scale-[1.02] font-black py-3.5 px-4 rounded-xl",
              btnText: "QUERO ASSINAR AGORA",
              link: "#planos",
              features: [
                "2 Telas simultâneas",
                "365 dias de acesso sem mensalidades",
                "Acervo completo (+100.000 títulos em 4K)",
                "Todos os canais ao vivo HD/4K",
                "Smart TV Android, TV Box, Mi Stick, FireTV",
                "Celular Android e Tablet Android",
                "Suporte VIP prioritário via WhatsApp",
                "Garantia de reembolso de 7 dias",
              ],
            },
            {
              id: "trimestral",
              nome: "Plano Trimestral",
              icon: Sparkles,
              iconColor: "text-blue-400",
              titleGradient: "text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300",
              precoAntigo: "R$149",
              preco: "R$99,99",
              periodo: "3 meses",
              dias: "90 dias",
              telas: "1 tela",
              destaque: false,
              selo: null as string | null,
              badge: "Economia 33%",
              btnStyle: "bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-black py-3.5 px-4 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-[1.02]",
              btnText: "ASSINAR TRIMESTRAL",
              link: "#planos",
              features: [
                "1 Tela simultânea",
                "90 dias sem mensalidades",
                "Acervo completo (+100.000 títulos)",
                "Esportes & Canais Ao Vivo HD/4K",
                "Smart TV Android, TV Box, Mi Stick, FireTV",
                "Celular Android e Tablet Android",
                "Suporte 7 dias via WhatsApp",
                "Garantia de reembolso de 7 dias",
              ],
            },
          ].map((p, i) => (
            <SmoothCardReveal key={p.nome} delay={100 + i * 120} className="h-full">
              <div
                className={`glass group relative flex flex-col justify-between h-full rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                  p.destaque
                    ? "border-2 border-red-500 bg-gradient-to-b from-red-950/80 via-[#0f0a0a] to-black/95 shadow-[0_0_40px_rgba(220,38,38,0.4)] hover:border-red-400 hover:shadow-[0_0_55px_rgba(220,38,38,0.6)] z-20"
                    : "border border-white/15 bg-black/70 hover:border-white/30 hover:bg-white/5 shadow-xl"
                }`}
              >
                {p.selo && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 px-4 py-1 text-[10px] sm:text-[11px] font-black tracking-wider text-white uppercase shadow-[0_0_20px_rgba(220,38,38,0.8)] whitespace-nowrap">
                    <Sparkles className="size-3 fill-current" />
                    {p.selo}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2.5">
                      <p.icon className={`size-6 shrink-0 ${p.iconColor}`} />
                      <h3 className={`font-display font-black tracking-tight uppercase text-xl sm:text-2xl ${p.titleGradient}`}>
                        {p.nome}
                      </h3>
                    </div>
                    <span className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider border ${
                      p.destaque
                        ? "bg-gradient-to-r from-red-700/30 to-red-600/30 text-red-200 border-red-500/50"
                        : "bg-white/10 text-white/70 border-white/20"
                    }`}>
                      {p.badge}
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-white/40 line-through">{p.precoAntigo}</span>
                      <span className="font-display font-black text-4xl sm:text-5xl text-white">
                        {p.preco}
                      </span>
                      <span className={`text-xs font-bold ${p.destaque ? "text-red-300" : "text-white/50"}`}>/{p.periodo}</span>
                    </div>
                    <div className="mt-2.5 flex gap-2 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/8 border border-white/10 px-3 py-1 text-xs font-bold text-white/70">
                        <Calendar className="size-3.5 text-red-400" /> {p.dias}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/8 border border-white/10 px-3 py-1 text-xs font-bold text-white/70">
                        <MonitorPlay className="size-3.5 text-red-400" /> {p.telas}
                      </span>
                    </div>
                  </div>

                  <a
                    href={p.link}
                    target={p.link.startsWith("http") ? "_blank" : undefined}
                    rel={p.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={p.link === "#planos" ? (e) => { e.preventDefault(); } : undefined}
                    className={`mt-6 w-full flex items-center justify-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 ${p.btnStyle}`}
                  >
                    <Zap className={p.destaque ? "size-5 fill-white text-white" : "size-4"} />
                    {p.btnText}
                  </a>

                  <div className={`my-5 h-px w-full ${p.destaque ? "bg-red-500/30" : "bg-white/10"}`} />

                  <ul className="space-y-3 text-xs sm:text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check className={`mt-0.5 size-4 shrink-0 ${p.destaque ? "text-red-400" : "text-red-500/80"}`} />
                        <span className={p.destaque ? "text-white font-semibold" : "text-white/85 font-medium"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SmoothCardReveal>
          ))}
        </div>

        {/* Garantia e pagamento */}
        <SmoothCardReveal delay={200}>
          <div className="glass mx-auto max-w-4xl rounded-2xl p-5 sm:p-7 border border-white/10 bg-black/60 mt-8 grid gap-5 sm:grid-cols-2 items-center">
            <div className="flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20 text-red-400">
                <ShieldCheck className="size-6" />
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-red-400">Garantia</p>
                <h4 className="font-bold text-white text-sm">7 Dias sem risco</h4>
                <p className="text-xs text-white/50">Satisfação garantida ou seu dinheiro de volta.</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:border-l sm:border-white/10 sm:pl-6">
              <div className="flex items-center gap-1.5">
                <Lock className="size-3.5 text-green-400" />
                <span className="text-xs font-bold text-white">Pagamento 100% Seguro</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-bold text-white/70">
                  <QrCode className="size-3" /> Pix Instantâneo
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-bold text-white/70">
                  <CreditCard className="size-3" /> Cartão até 12x
                </span>
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

      {/* SUPORTE / CONTATO */}
      <section className="relative z-10 border-t border-white/5 bg-black/30 py-8">
        <div className="mx-auto w-[94%] max-w-2xl text-center">
          <p className="text-sm text-white/50 mb-4">Precisa de ajuda? Nosso suporte atende 7 dias por semana.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/5561984016006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-5 py-3 text-sm font-bold text-white hover:bg-green-600 transition-colors"
            >
              <Smartphone className="size-4" /> WhatsApp (61) 9 8401-6006
            </a>
            <a
              href="https://wa.me/5561982743140"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-800/60 border border-green-700/40 px-5 py-3 text-sm font-bold text-white hover:bg-green-700/60 transition-colors"
            >
              <Smartphone className="size-4" /> WhatsApp (61) 9 8274-3140
            </a>
          </div>
          <p className="mt-3 text-xs text-white/30">
            ou por e-mail: <a href="mailto:unitvpro.oficial2026@gmail.com" className="text-white/50 hover:text-white transition-colors underline">unitvpro.oficial2026@gmail.com</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <Reveal>
        <footer className="border-t border-white/5 py-10">
          <div className="mx-auto flex w-[94%] max-w-6xl flex-col items-center gap-4 text-center">
            <span className="font-display text-xl font-extrabold">
              UniTV<span className="text-red-500"> Pro</span>
            </span>
            <p className="max-w-md text-sm text-white/40">
              A televisão do futuro é pela internet — sem antenas, sem decodificadores. Assista quando e onde quiser.
            </p>
            <Cta />
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} UniTV Pro. Imagens de divulgação dos respectivos estúdios (fonte: TMDB).
            </p>
          </div>
        </footer>
      </Reveal>

      <SocialProof />
    </div>
  );
}
