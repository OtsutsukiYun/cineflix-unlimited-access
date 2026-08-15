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
  Heart,
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
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Activity,
  ListOrdered,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PromoBanner } from "@/components/PromoBanner";
import { Faq } from "@/components/Faq";
import { Torii, WhatsAppIcon } from "@/components/icons";
import { SocialProof } from "@/components/SocialProof";
import {
  animes,
  heroSlides,
  img,
  series,
  terror,
} from "@/data/catalog";

const TESTE_GRATIS_POSTERS = [
  "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg", // Evil Dead Rise
  "/r013C8Me2bZ0pUi0OWJRh0h7MzT.jpg", // Obsessão
  "/atpb7NKSyM4bJSUY8vQTunzK4Na.jpg", // He-Man
  "/sssrBhdvDcczgMQYDc8oCoSuFEJ.jpg", // Toy Story 5
  "/rB495nxugPfNlBmFDUjN5kaTy90.jpg", // Omukade
  "/xQNMM3u6srkhM8bdTCKVTFzyCF1.jpg", // Pengabdi Setan 2
  "/mL4vGghS5XtgeNIPjhoTg8Tv5cJ.jpg", // O Lamento
  "/dqZENchTd7lp5zht7BdlqM7RBhD.jpg", // Frieren
  "/8vtnPZXxCvX8iIbFoglGxwHjapq.jpg", // Chainsaw Man (Makima)
  "/fHpKWq9ayzSk8nSwqRuaAUemRKh.jpg", // Jujutsu Kaisen
  "/4RuJf3ufe8DgQVycdyMZrJHGK1s.jpg", // Demon Slayer
  "/hazWZ75ml5Er3MQsFetIzoeWs99.jpg", // O Segredo de Widow's Bay
  "/pRtJagIxpfODzzb0T0NAvZSzErC.jpg", // FROM (Origem)
  "/oCutmhFznao1Pzy6wM1C32kxAEu.jpg", // Channel Zero
];

// ── INSTAGRAM POPUP ─────────────────────────────────────────────────────────
function InstagramPopup({ onOpenChange }: { onOpenChange?: (open: boolean) => void }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("ig_popup_seen")) {
      const t = setTimeout(() => {
        setOpen(true);
        onOpenChange?.(true);
      }, 900);
      return () => clearTimeout(t);
    }
  }, [onOpenChange]);

  function close() {
    sessionStorage.setItem("ig_popup_seen", "1");
    setOpen(false);
    onOpenChange?.(false);
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 backdrop-blur-md bg-black/80" role="dialog" aria-modal="true">
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
          <Gift className="size-4 text-amber-300" />
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
          "Todos os streamings reunidos: filmes recém-saídos do cinema, séries completas, animes, doramas, esportes ao vivo e o maior acervo de terror em 4K.",
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
      { title: "Michael", poster: "/zm0KAbOjlt9eR5y7vDiL2dEOwMl.jpg", year: "2026", tag: "🔥 Biografia 2026" },
      { title: "Socorro! (Send Help)", poster: "/rpU5DGrTVdqcygZBB9npt1WMFch.jpg", year: "2026", tag: "🔥 Lançamento 2026" },
      { title: "A Boca do Diabo", poster: "/lH8k9uCWYn2b2gsYleqYBDPbWa8.jpg", year: "2026", tag: "🔥 Terror 2026" },
      { title: "Dia D (Disclosure Day)", poster: "/pmff1wjKrgJi92PPr346lAifzlg.jpg", year: "2026", tag: "🔥 Sci-Fi 2026" },
      { title: "A Última Casa", poster: "/AqOwuZ4X0Ssi3LIsYqXNw52IIvW.jpg", year: "2026", tag: "🔥 Exclusivo 2026" },
      { title: "He-Man: Mestres do Universo", poster: "/atpb7NKSyM4bJSUY8vQTunzK4Na.jpg", year: "2026", tag: "🔥 Lançamento 2026" },
      { title: "Homem-Aranha: Um Novo Dia", poster: "/x0nvYzQpyJc5pdT9lMnkMuYAg0O.jpg", year: "2026", tag: "Super-herói" },
      { title: "Todo Mundo em Pânico 6", poster: "/y9yJd2qIIwhZcllHeKHsz5eRvNr.jpg", year: "2026", tag: "Comédia 2026" },
      { title: "Toy Story 5", poster: "/sssrBhdvDcczgMQYDc8oCoSuFEJ.jpg", year: "2026", tag: "🔥 Lançamento 2026" },
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
      { title: "Another", poster: "/c8VVGuc3lnPXCBStcKQWrOlBCSA.jpg", year: "2012", tag: "Terror Japonês" },
      { title: "Whispering Corridors: Wishing Stairs", poster: "/hX1CdiS8hJJxY8TuAmMoExYXKfn.jpg", year: "2003", tag: "Terror Coreano" },
      { title: "Eu Vi o Diabo", poster: "/zp5NrmYp80axIGiEiYPmm1CW6uH.jpg", year: "2010", tag: "Terror Coreano" },
    ],
  },
  {
    id: "series",
    label: "📺 Séries",
    items: [
      { title: "O Segredo de Widow's Bay", poster: "/hazWZ75ml5Er3MQsFetIzoeWs99.jpg", year: "2026", tag: "🔥 Lançamento 2026" },
      { title: "Revenant (O Diabo)", poster: "/o2Sk7VEZpR5WOCjtjO6ClGBKSji.jpg", year: "2023", tag: "🔥 Dorama de Terror" },
      { title: "FROM (Origem)", poster: "/eK9ZDIq7gPFRJ0GGaWvgrXLZgXX.jpg", year: "Série", tag: "🔥 Terror & Mistério" },
      { title: "Gannibal", poster: "/AvjCytHUq6AN6rYOFQFATrWbGSR.jpg", year: "Série", tag: "🔥 Terror Japonês" },
      { title: "IT: Bem-Vindos a Derry", poster: "/gMTfrLvrDaD0zrhpLZ7zXIIpKfJ.jpg", year: "2025", tag: "HBO Max" },
      { title: "Silo", poster: "/cxB16Cc7xZuqWgNDo7QlqLMlinu.jpg", year: "Série", tag: "Apple TV+" },
      { title: "Cabo do Medo", poster: "/3ZLy3cfQa9prahoRq1teMmr5pvW.jpg", year: "2026", tag: "🔥 Estreia 2026" },
      { title: "Yellowjackets", poster: "/xRnGrn7Z7SC0KIBodocoU1QgDZF.jpg", year: "Série", tag: "Terror & Drama" },
      { title: "Channel Zero", poster: "/oCutmhFznao1Pzy6wM1C32kxAEu.jpg", year: "Série", tag: "Terror & Antologia" },
      { title: "The Terror", poster: "/fUVn5mScv83FfwrRUUR694yA7bd.jpg", year: "Série", tag: "🔥 Terror & Mistério" },
    ],
  },
  {
    id: "animes",
    label: "⚔️ Animes em Alta",
    items: [
      { title: "Frieren e a Jornada Para o Fim", poster: "/dqZENchTd7lp5zht7BdlqM7RBhD.jpg", year: "2023", tag: "🔥 #1 Em Alta" },
      { title: "Chainsaw Man", poster: "/npdB6eFzizki0WaZ1OvKcJrWe97.jpg", year: "Série", tag: "🔥 Sucesso" },
      { title: "Shiki", poster: "/zsWbTnNwNjqWvgZ9gqTcK9WLoWy.jpg", year: "2010", tag: "🔥 Terror & Vampiros" },
      { title: "Mirai Nikki", poster: "/rQScQD92q6CYAGL0DWQQNxjuVVh.jpg", year: "2011", tag: "🔥 Thriller Psicológico" },
      { title: "Demon Slayer", poster: "/4RuJf3ufe8DgQVycdyMZrJHGK1s.jpg", year: "Série", tag: "Em alta" },
      { title: "Solo Leveling", poster: "/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg", year: "Série", tag: "Lançamento" },
      { title: "Jujutsu Kaisen", poster: "/fHpKWq9ayzSk8nSwqRuaAUemRKh.jpg", year: "Série", tag: "Em alta" },
      { title: "Attack on Titan", poster: "/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg", year: "Série", tag: "Ação" },
      { title: "Monster", poster: "/n5XNKXnoXpoXyfiCtXHOf8q8PFM.jpg", year: "2004", tag: "⭐ Clássico" },
      { title: "One Piece", poster: "/9ltisibeD4gzqjM1AzmQwCdyirQ.jpg", year: "Série", tag: "Clássico" },
    ],
  },
  {
    id: "proximos",
    label: "🚀 Próximos Lançamentos (2026)",
    items: [
      { title: "Sobrenatural: Além do Mais Além", poster: "/4tTrW9dXCByS5wt2pXVWb58zNjz.jpg", year: "2026", tag: "🔥 Estreia Ago/2026" },
      { title: "Other Mommy (A Outra Mãe)", poster: "/kNxRgcTeqeU5jauBackTERoO2De.jpg", year: "2026", tag: "🔥 Estreia Out/2026" },
      { title: "Resident Evil: O Retorno", poster: "/zP83bIkBViw5b1s9bDemYJ3AAgX.jpg", year: "2026", tag: "🔥 Estreia Set/2026" },
      { title: "O Sorveteiro", poster: "/c987gxFjXqYOxZEZKcTkS1ONTWH.jpg", year: "2026", tag: "🔥 Estreia Ago/2026" },
      { title: "Werwulf (O Lobisomem)", poster: "/imnkSt4PSQpxIuyiRpJCiLk3SZz.jpg", year: "2026", tag: "🔥 Estreia Dez/2026" },
      { title: "The Rope Curse 4: Kuntilanak", poster: "/6u8F23BammMeCWLvWITbFM2Nwbe.jpg", year: "2026", tag: "🔥 Estreia Ago/2026" },
      { title: "Cuidado com Boiúna", poster: "/tENVMxKvOkslv8kagVNdIEQ13RT.jpg", year: "2026", tag: "🔥 Estreia Out/2026" },
      { title: "Clayface: Rituais das Sombras", poster: "/5jCpQnWPikggmQZoDp1eAi6BI6w.jpg", year: "2026", tag: "🔥 Estreia Out/2026" },
      { title: "O Fim da Rua", poster: "/6JU7E8Vv2M11egkctWVOScxWR75.jpg", year: "2026", tag: "🔥 Estreia Ago/2026" },
    ],
  },
];

// ── BANNER DE SLIDESHOW ROTATIVO DE ALTA PERFORMANCE 60FPS (SEM TRAVAMENTOS) ────────
function SlideshowBanner({
  banners,
  alt,
  objectPosition = "object-cover",
  delayMs = 0,
}: {
  banners: string[];
  alt: string;
  objectPosition?: string;
  delayMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    if (!banners || banners.length <= 1) return;
    let timer: ReturnType<typeof setInterval>;
    const startDelay = setTimeout(() => {
      timer = setInterval(() => {
        setIndex((prev) => {
          setPrevIndex(prev);
          return (prev + 1) % banners.length;
        });
      }, 4500);
    }, delayMs);

    return () => {
      clearTimeout(startDelay);
      if (timer) clearInterval(timer);
    };
  }, [banners, delayMs]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0404] pointer-events-none transform-gpu">
      {banners.map((banner, i) => {
        const isActive = i === index;
        const isPrev = i === prevIndex;
        return (
          <img
            key={banner}
            src={banner.startsWith("http") ? banner : img(banner, "w780")}
            alt={alt}
            className={`absolute inset-0 size-full ${objectPosition} transform-gpu transition-opacity duration-1000 ease-in-out will-change-[opacity] ${
              isActive
                ? "opacity-100 z-10"
                : isPrev
                ? "opacity-100 z-0"
                : "opacity-0 -z-10 pointer-events-none"
            }`}
          />
        );
      })}
    </div>
  );
}

// ── MAIN PAGE ────────────────────────────────────────────────────────────────
function Index() {
  const [slide, setSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("em-alta");
  const [isMobile, setIsMobile] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [expandedTabs, setExpandedTabs] = useState<Record<string, boolean>>({});
  const catalogScrollRef = useRef<HTMLDivElement>(null);

  const scrollCatalog = (dir: "left" | "right") => {
    if (catalogScrollRef.current) {
      const scrollAmount = catalogScrollRef.current.clientWidth * 0.7;
      catalogScrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isPopupOpen) return;
    const timer = setInterval(() => setSlide((prev) => (prev + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, [isPopupOpen]);

  const currentTabObj = CATALOG_TABS.find((t) => t.id === activeTab) || CATALOG_TABS[0];

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen bg-[#080808] font-sans text-foreground antialiased selection:bg-red-600 selection:text-white">
      <InstagramPopup onOpenChange={setIsPopupOpen} />

      {/* FUNDO CINEMÁTICO — gradiente vermelho/preto limpo de alta legibilidade */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden [transform:translateZ(0)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/50 via-[#080808] to-[#030303]" />
        <div className="animate-aurora-1 absolute -top-[15%] -left-[10%] w-[100vw] h-[100vw] sm:w-[70vw] sm:h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tr from-red-900/30 via-red-800/20 to-red-950/15 blur-[110px]" />
        <div className="animate-aurora-2 absolute top-[25%] -right-[15%] w-[90vw] h-[90vw] sm:w-[65vw] sm:h-[65vw] max-w-[750px] max-h-[750px] rounded-full bg-gradient-to-br from-red-900/25 via-red-950/20 to-red-950/15 blur-[110px]" />
        <div className="animate-aurora-3 absolute -bottom-[15%] -left-[10%] w-[100vw] h-[100vw] sm:w-[80vw] sm:h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-t from-red-950/30 to-red-950/20 blur-[130px]" />
      </div>

      {/* NAVBAR */}
      <div className="fixed inset-x-0 top-0 z-50 flex flex-col [transform:translateZ(0)]">
        <div className="z-[60]"><PromoBanner /></div>
        <header className="z-50">
          <div className="glass mx-auto mt-2 flex w-[94%] max-w-6xl items-center justify-between rounded-full px-4 sm:px-6 py-2.5 sm:py-3 border border-white/15 bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <SmoothLink href="#" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 via-rose-600 to-red-800 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]">
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
              objectPosition: isMobile && s.objectPositionMobile ? s.objectPositionMobile : (s.objectPosition ?? "center 20%"),
              filter: s.brightness ? `${s.brightness} brightness(0.52)` : "brightness(0.52)",
            }}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-[#080808]/50" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />

        <div className="relative z-10 mx-auto w-[94%] max-w-3xl pt-28 pb-10 sm:pt-32 sm:pb-12">
          <p className="mb-3 text-xs font-extrabold tracking-[0.25em] text-red-400 uppercase">
            🔥 Todos os Streamings Reunidos
          </p>

          <h1 className="font-display text-2xl font-black sm:text-4xl md:text-5xl leading-[1.12] text-white tracking-tight drop-shadow-xl">
            O maior acervo dos streamings e{" "}
            <span className="text-red-500">filmes e séries de terror.</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-white/70 max-w-lg mx-auto leading-relaxed">
            Mais de <strong className="text-white">100.000 conteúdos</strong> em até 4K — lançamentos do cinema, produções exclusivas, animes, doramas e esportes ao vivo.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Cta>QUERO ASSINAR</Cta>
            <Link to="/instalar" className="btn-ghost">
              <Gift className="size-4 text-red-400" /> Teste grátis 3 dias
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
      <section id="catalogo" className="relative z-10 py-6 sm:py-8">
        <div className="mx-auto w-[94%] max-w-5xl">
          <Reveal>
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-3.5 py-1.5 text-xs font-bold tracking-wider text-red-400 uppercase mb-3">
                <Film className="size-3.5" /> Destaques do Acervo
              </span>
              <h2 className="text-2xl font-extrabold sm:text-4xl text-white">
                O que você quer assistir <span className="text-red-500">hoje?</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-white/60 font-medium max-w-lg mx-auto transition-all">
                {
                  {
                    "filmes": "Filmes, séries, doramas, animes e esportes ao vivo em um só aplicativo.",
                    "terror-raro": "Descubra produções incríveis da Coreia, Japão, Tailândia e muito mais.",
                    "series": "Descubra séries incríveis, sucessos imperdíveis e títulos que você não encontra nos streamings tradicionais.",
                    "animes": "Animes populares com episódios semanais e dublagem em português.",
                    "proximos": "Confira os novos filmes e produções de terror confirmados para estrear a partir de agosto de 2026.",
                  }[activeTab] || "Filmes, séries, doramas, animes e esportes ao vivo em um só aplicativo."
                }
              </p>
            </div>
          </Reveal>

          {/* Abas para alternar sem rolar a página infinitamente */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mb-7">
            {CATALOG_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all backdrop-blur-md ${
                  activeTab === tab.id
                    ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.6)] scale-105"
                    : "bg-zinc-900/70 border border-white/20 text-white/80 hover:bg-zinc-800/90 hover:border-white/35 hover:text-white shadow-sm"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* CATÁLOGO NO MOBILE: Grade limpa de 2 colunas */}
          {/* CATÁLOGO NO PC: Carrossel interativo estilo Netflix com setas */}
          <SmoothCardReveal key={activeTab}>
            {/* VERSÃO MOBILE: Grade limpa em colunas com limite inicial (6 itens) e botão Exibir mais */}
            <div className="sm:hidden space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {(expandedTabs[activeTab]
                  ? currentTabObj.items
                  : currentTabObj.items.slice(0, 6)
                ).map((item) => (
                  <PosterCard key={item.title} item={item} />
                ))}
              </div>

              {currentTabObj.items.length > 6 && (
                <div className="text-center pt-2">
                  <button
                    onClick={() =>
                      setExpandedTabs((prev) => ({
                        ...prev,
                        [activeTab]: !prev[activeTab],
                      }))
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-zinc-900/80 backdrop-blur-md px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-zinc-800 transition-all active:scale-95 cursor-pointer"
                  >
                    {expandedTabs[activeTab] ? (
                      <>
                        <ChevronUp className="size-4 text-red-400" />
                        Exibir menos
                      </>
                    ) : (
                      <>
                        <ChevronDown className="size-4 text-red-400" />
                        Exibir mais
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* VERSÃO PC: Carrossel horizontal com navegação por setas */}
            <div className="relative group/carousel hidden sm:block">
              {/* Botão Anterior (Esquerda) */}
              <button
                onClick={() => scrollCatalog("left")}
                aria-label="Voltar filmes"
                className="absolute -left-5 top-1/2 z-30 -translate-y-1/2 flex size-11 items-center justify-center rounded-full border border-white/25 bg-zinc-900/85 text-white shadow-[0_0_25px_rgba(0,0,0,0.9)] backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-red-600 hover:border-red-500 hover:scale-110 cursor-pointer"
              >
                <ChevronLeft className="size-6" />
              </button>

              {/* Botão Próximo (Direita) */}
              <button
                onClick={() => scrollCatalog("right")}
                aria-label="Avançar filmes"
                className="absolute -right-5 top-1/2 z-30 -translate-y-1/2 flex size-11 items-center justify-center rounded-full border border-white/25 bg-zinc-900/85 text-white shadow-[0_0_25px_rgba(0,0,0,0.9)] backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-red-600 hover:border-red-500 hover:scale-110 cursor-pointer"
              >
                <ChevronRight className="size-6" />
              </button>

              {/* Trilho de filmes com scroll horizontal no PC */}
              <div
                ref={catalogScrollRef}
                className="flex gap-3.5 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 px-1 scroll-smooth"
              >
                {currentTabObj.items.map((item) => (
                  <div key={item.title} className="w-[165px] md:w-[185px] shrink-0 snap-start">
                    <PosterCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          </SmoothCardReveal>
        </div>
      </section>



      {/* CATEGORIAS DO CATÁLOGO DE CONTEÚDO */}
      <section id="categorias" className="relative z-10 mx-auto w-[94%] max-w-6xl py-6 sm:py-8">
        <SmoothCardReveal>
          <div className="text-center mb-4 sm:mb-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/40 px-4 py-2 text-xs font-extrabold tracking-wider text-red-400 uppercase mb-3">
              <Sparkles className="size-3.5" /> Variedade Imbatível
            </span>
            <h2 className="text-3xl font-black sm:text-5xl tracking-tight text-white">
              Todas as suas produções favoritas<br /><span className="text-red-500">em um só aplicativo</span>
            </h2>
          </div>
        </SmoothCardReveal>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Film,
              banners: [
                "/by8z9Fe8y7p4jo2YlW2SZDnptyT.jpg", // Deadpool & Wolverine
                "/eZ239CUp1d6OryZEBPnO2n87gMG.jpg", // Dune Part Two
                "/wjwMC7u3xWKkrronolBqsIy4L0L.jpg", // Backrooms
              ],
              objectPosition: "object-cover",
              gradient: "from-red-600 via-orange-600 to-amber-600",
              glow: "shadow-[0_0_22px_rgba(239,68,68,0.85)] border-red-400/80",
              corBorda: "border border-red-500/40 hover:border-red-400",
              corGlow: "shadow-[0_0_30px_rgba(239,68,68,0.2)] hover:shadow-[0_0_50px_rgba(239,68,68,0.55)]",
              bgOverlay: "bg-gradient-to-t from-black/90 via-black/60 to-black/20",
              titleHover: "group-hover:text-red-300",
              t: "Filmes incríveis",
              qtd: "+50.000 Filmes",
              d: "+50.000 filmes incluindo lançamentos recém-saídos do cinema e superproduções em até 4K.",
              tabId: "filmes",
            },
            {
              icon: Tv,
              banners: [
                "/q8eejQcg1bAqImEV8jh8RtBD4uH.jpg", // Fallout
                "/n6vVs6z8obNbExdD3QHTr4Utu1Z.jpg", // The Boys
                "/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg", // Wandinha (Wednesday)
              ],
              objectPosition: "object-cover",
              gradient: "from-red-600 via-rose-600 to-red-800",
              glow: "shadow-[0_0_22px_rgba(225,29,72,0.85)] border-rose-400/80",
              corBorda: "border border-rose-500/40 hover:border-rose-300",
              corGlow: "shadow-[0_0_30px_rgba(225,29,72,0.2)] hover:shadow-[0_0_50px_rgba(225,29,72,0.55)]",
              bgOverlay: "bg-gradient-to-t from-black/90 via-black/60 to-black/20",
              titleHover: "group-hover:text-rose-200",
              t: "Séries imperdíveis",
              qtd: "+30.000 Séries",
              d: "+30.000 séries das maiores plataformas mundiais com temporadas completas dubladas e legendadas.",
              tabId: "series",
            },
            {
              icon: Heart,
              banners: [
                "/wcP3FsRLog4GNEs9PFrDKKQdcof.jpg", // Rainha das Lágrimas (Queen of Tears)
                "/3yEHM2HT2vrUtO93YzTJNgEfiZG.jpg", // Pousando no Amor (Crash Landing on You)
                "/AjwoDj77HLlqcpwEGqsnvMXm5my.jpg", // A Lição (The Glory)
              ],
              objectPosition: "object-cover",
              gradient: "from-pink-600 via-rose-600 to-red-700",
              glow: "shadow-[0_0_22px_rgba(244,63,94,0.85)] border-pink-300/80",
              corBorda: "border border-pink-500/40 hover:border-pink-300",
              corGlow: "shadow-[0_0_30px_rgba(244,63,94,0.2)] hover:shadow-[0_0_50px_rgba(244,63,94,0.55)]",
              bgOverlay: "bg-gradient-to-t from-black/90 via-black/60 to-black/20",
              titleHover: "group-hover:text-pink-200",
              t: "Doramas & Produções Asiáticas",
              qtd: "+2.500 Doramas & K-Dramas",
              d: "+2.500 doramas como Rainha das Lágrimas, Pousando no Amor, A Lição e os maiores sucessos asiáticos dublados.",
              tabId: "terror-raro",
            },
            {
              icon: Flame,
              banners: [
                "/xMNH87maNLt9n2bMDYeI6db5VFm.jpg", // Solo Leveling
                "/1RgPyOhN4DRs225BGTlHJqCudII.jpg", // Demon Slayer
                "/lthkKBLe1rX6iThgVFg22O02sJw.jpg", // Jujutsu Kaisen
              ],
              objectPosition: "object-cover",
              gradient: "from-amber-500 via-orange-600 to-red-600",
              glow: "shadow-[0_0_22px_rgba(245,158,11,0.85)] border-amber-300/80",
              corBorda: "border border-amber-500/40 hover:border-amber-300",
              corGlow: "shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_50px_rgba(245,158,11,0.55)]",
              bgOverlay: "bg-gradient-to-t from-black/90 via-black/60 to-black/20",
              titleHover: "group-hover:text-amber-200",
              t: "Animes atualizados",
              qtd: "Centenas de Animes",
              d: "Centenas de animes com simulcast semanal, dublagem em português e áudio original.",
              tabId: "animes",
            },
            {
              icon: Baby,
              banners: [
                "/vYqt6kb4lcF8wwqsMMaULkP9OEn.jpg", // Moana 2
                "/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg", // Divertida Mente 2
                "/twsxsfao6ZOVvT8LfudH603MMi6.jpg", // Meu Malvado Favorito 4
              ],
              objectPosition: "object-cover",
              gradient: "from-blue-500 via-sky-500 to-indigo-600",
              glow: "shadow-[0_0_22px_rgba(14,165,233,0.85)] border-sky-300/80",
              corBorda: "border border-sky-500/40 hover:border-sky-300",
              corGlow: "shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:shadow-[0_0_50px_rgba(14,165,233,0.55)]",
              bgOverlay: "bg-gradient-to-t from-black/90 via-black/60 to-black/20",
              titleHover: "group-hover:text-sky-200",
              t: "Conteúdos infantis",
              qtd: "Milhares de Conteúdos Infantis",
              d: "Milhares de conteúdos infantis, filmes, desenhos e canais 24h para a diversão de toda a família.",
              tabId: "filmes",
            },
            {
              icon: Trophy,
              banners: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Erling_Haaland_France_v_Norway_26_June_26-008.jpg/1280px-Erling_Haaland_France_v_Norway_26_June_26-008.jpg", // Haaland
                "https://upload.wikimedia.org/wikipedia/commons/9/95/Kylian_Mbappe_France_v_Senegal_16_June_2026-391_%28cropped%29.jpg", // Mbappe 2026
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Harry_Kane_England_v_Ghana_23_June_2026-219_%28cropped%29.jpg/1280px-Harry_Kane_England_v_Ghana_23_June_2026-219_%28cropped%29.jpg", // Harry Kane
              ],
              objectPosition: "object-cover object-[center_20%]",
              gradient: "from-emerald-500 via-green-600 to-teal-600",
              glow: "shadow-[0_0_22px_rgba(16,185,129,0.85)] border-emerald-300/80",
              corBorda: "border border-emerald-500/40 hover:border-emerald-300",
              corGlow: "shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_50px_rgba(16,185,129,0.55)]",
              bgOverlay: "bg-gradient-to-t from-black/90 via-black/60 to-black/20",
              titleHover: "group-hover:text-emerald-200",
              t: "Esportes ao vivo",
              qtd: "Centenas de Canais de Esporte",
              d: "Centenas de canais de esportes ao vivo (Brasileirão, Champions League, Premier League, UFC e F1 sem travamentos).",
              tabId: "series",
            },
          ].map((f, i) => (
            <SmoothCardReveal key={f.t} delay={100 + i * 80}>
              <div
                onClick={() => {
                  if (f.tabId) {
                    setActiveTab(f.tabId);
                    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`glass group relative h-full min-h-[220px] sm:min-h-[240px] overflow-hidden rounded-3xl p-6 sm:p-7 ${f.corBorda} ${f.corGlow} transition-all duration-500 hover:-translate-y-2 bg-zinc-950/60 backdrop-blur-2xl cursor-pointer`}
              >
                {/* IMAGEM BANNER ILUSTRATIVA DE FUNDO COM SLIDESHOW */}
                <SlideshowBanner banners={f.banners} alt={`Ilustração ${f.t}`} objectPosition={f.objectPosition} delayMs={i * 600} />
                {/* SOBREPOSIÇÃO DE GRADIENTE ESCURO PROFUNDO EM Z-20 PARA CONTRASTE PERFEITO SEM VAZAR IMAGEM DO FUNDO */}
                <div className={`absolute inset-0 z-20 ${f.bgOverlay} opacity-85 transition-opacity duration-500 group-hover:opacity-90 pointer-events-none`} />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none" />

                <div className="relative z-30 flex flex-col justify-between h-full">
                  {/* ÍCONE RELUZENTE E BADGE DE QUANTIDADE */}
                  <div className="relative mb-6 shrink-0 flex items-center justify-between">
                    <div
                      style={{ animationDelay: `${i * 0.4}s` }}
                      className={`animate-levitate relative flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.gradient} p-0.5 border ${f.glow} transform-gpu transition-all duration-300 group-hover:scale-110 shadow-lg`}
                    >
                      <div className="relative flex size-full items-center justify-center rounded-[14px] bg-black/30 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-90" />
                        <f.icon className="size-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] relative z-10" />
                      </div>
                    </div>

                    {/* BADGE DE QUANTIDADE EM ESTILO VIDRO LIQUIDO (GLASSMORPHISM) */}
                    <span className="glass inline-flex items-center gap-1.5 rounded-full border border-white/35 bg-white/10 backdrop-blur-xl px-3.5 py-1 text-xs font-black text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:bg-white/20 transition-all">
                      {f.qtd}
                    </span>
                  </div>

                  <div>
                    <h3 className={`mb-2 text-xl font-black text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] transition-colors duration-300 ${f.titleHover}`}>{f.t}</h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-white/95 font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                      {f.d}
                    </p>
                  </div>
                </div>
              </div>
            </SmoothCardReveal>
          ))}
        </div>
      </section>

      {/* RECURSOS EXCLUSIVOS DA PLATAFORMA (EFEITO VIDRO LIQUIDO PREMIUM) */}
      <section className="relative z-10 mx-auto w-[94%] max-w-5xl py-5 sm:py-7">
        <SmoothCardReveal>
          <div className="glass rounded-3xl border border-white/20 bg-zinc-900/40 p-6 sm:p-9 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative overflow-hidden">
            {/* LUZ DE FUNDO EM DEGRADÊ DE VIDRO */}
            <div className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-red-600/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-rose-600/15 blur-3xl" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-white/15">
              <div className="flex items-center gap-3.5">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 via-rose-600 to-red-800 text-white shadow-[0_0_20px_rgba(220,38,38,0.6)]">
                  <Zap className="size-5 fill-current" />
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Recursos Exclusivos da Plataforma
                  </h2>
                  <p className="text-xs text-white/70 font-medium">
                    Tecnologia e ferramentas avançadas para sua melhor transmissão
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 border border-white/20 px-4 py-1.5 text-[11px] font-extrabold text-red-300 uppercase tracking-wider shrink-0 backdrop-blur-md shadow-md">
                ⭐ 100% Incluído no Acesso
              </span>
            </div>

            {/* GRADE EM 2 COLUNAS COM EFEITO VIDRO TRANSLÚCIDO NO HOVER */}
            <div className="relative z-10 grid gap-4 sm:gap-6 sm:grid-cols-2">
              {[
                {
                  icon: RotateCcw,
                  badgeColor: "text-red-400 bg-red-500/20 border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.3)]",
                  title: "Volte 7 Dias na Grade",
                  desc: "Perdeu o jogo, novela ou programa? Use o Playback para retomar a programação dos últimos 7 dias.",
                },
                {
                  icon: Activity,
                  badgeColor: "text-amber-400 bg-amber-500/20 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.3)]",
                  title: "Sinal P2P Estável",
                  desc: "A rede peer-to-peer espalha o conteúdo de forma inteligente, mantendo a transmissão fluida sem travar.",
                },
                {
                  icon: Lock,
                  badgeColor: "text-emerald-400 bg-emerald-500/20 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]",
                  title: "Bloqueio Por Perfil",
                  desc: "Trave conteúdos adultos com senha para garantir que as crianças vejam só o que é apropriado.",
                },
                {
                  icon: ListOrdered,
                  badgeColor: "text-blue-400 bg-blue-500/20 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.3)]",
                  title: "Programação Completa",
                  desc: "O guia EPG mostra o que passa em cada canal, com horário, sinopse e ordem por categoria.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group/item flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4.5 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:shadow-lg"
                >
                  <div className={`mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-2xl border ${item.badgeColor} backdrop-blur-md transition-transform duration-300 group-hover/item:scale-110`}>
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white mb-1 group-hover/item:text-red-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SmoothCardReveal>
      </section>

      {/* PLANOS */}
      <section id="planos" className="relative z-10 mx-auto w-[94%] max-w-6xl py-6 sm:py-8">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-red-800/15 blur-[180px]" />

        <Reveal className="relative z-10 text-center mb-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/30 px-4 py-2 text-xs font-extrabold tracking-wider text-red-400 uppercase mb-3">
            <Sparkles className="size-3.5 animate-spin" /> Oferta por Tempo Limitado
          </span>
          <h2 className="text-3xl font-black sm:text-5xl tracking-tight text-white mb-2">
            Escolha seu <span className="text-red-500">plano</span>
          </h2>
          <p className="text-sm text-white/55 max-w-md mx-auto">
            Sem fidelidade. Cancele quando quiser. Garantia de reembolso de 7 dias em todos os planos.
          </p>
        </Reveal>

        <div className="relative z-10 grid items-stretch gap-6 lg:grid-cols-3 pt-1">
          {[
            {
              id: "mensal",
              nome: "Plano Mensal",
              icon: Calendar,
              iconColor: "text-red-400 drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]",
              titleGradient: "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-300 font-black",
              precoAntigo: "R$50",
              preco: "R$34,99",
              periodo: "mês",
              dias: "30 dias",
              telas: "1 tela",
              destaque: false,
              selo: null as string | null,
              badge: "⭐ Sem Fidelidade",
              badgeStyle: "bg-red-500/20 text-red-300 border-red-500/40 shadow-[0_0_12px_rgba(239,68,68,0.3)]",
              cardStyle: "border border-red-500/35 bg-gradient-to-b from-red-950/25 via-zinc-950/90 to-black hover:border-red-500/60 shadow-[0_0_30px_rgba(220,38,38,0.2)] hover:shadow-[0_0_40px_rgba(220,38,38,0.35)]",
              btnStyle: "bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white font-black py-3.5 px-4 rounded-xl shadow-[0_0_25px_rgba(220,38,38,0.6)] hover:scale-[1.02] border border-red-400/50 transition-all",
              btnText: "ASSINAR PLANO MENSAL",
              link: "https://pay.braip.co/ref?pl=plajge84&ck=che7eo0g&af=afixjm3pn2",
              features: [
                "1 Tela simultânea",
                "Acervo completo (+100.000 títulos em até 4K)",
                "Assista a milhares de filmes e séries que não estão em nenhum outro serviço de streaming no Brasil",
                "Esportes & Canais Ao Vivo HD/4K",
                "Smart TV Android, TV Box, Mi Stick, FireTV",
                "Celular Android e Tablet Android",
                "Suporte 7 dias via WhatsApp",
                "Garantia de reembolso de 7 dias",
                "Sem fidelidade (Cancele quando quiser)",
              ],
            },
            {
              id: "anual",
              nome: "Plano Anual VIP",
              icon: Crown,
              iconColor: "text-yellow-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.9)]",
              titleGradient: "text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 font-black",
              precoAntigo: "R$250",
              preco: "R$179,99",
              periodo: "ano",
              dias: "365 dias",
              telas: "2 telas",
              destaque: true,
              selo: "👑 MAIS COMPLETO • MELHOR CUSTO-BENEFÍCIO (2 TELAS)",
              badge: "🔥 RECOMENDADO VIP",
              badgeStyle: "bg-gradient-to-r from-amber-500/30 to-yellow-500/30 text-amber-200 border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.4)]",
              cardStyle: "border-2 border-amber-400 bg-gradient-to-b from-amber-950/70 via-zinc-950 to-black shadow-[0_0_60px_rgba(245,158,11,0.45)] z-20 hover:border-yellow-300 hover:shadow-[0_0_75px_rgba(245,158,11,0.65)]",
              btnStyle: "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-yellow-300 text-black font-black py-3.5 px-4 rounded-xl shadow-[0_0_30px_rgba(245,158,11,0.8)] hover:scale-[1.03] border border-amber-300 transition-all",
              btnText: "QUERO O PLANO ANUAL VIP",
              link: "https://pay.braip.co/ref?pl=pla6lllo&ck=che7eo0g&af=afixjm3pn2",
              features: [
                "2 Telas simultâneas em 4K",
                "365 dias de acesso sem mensalidades",
                "Acervo completo (+100.000 títulos em até 4K)",
                "Assista a milhares de filmes e séries que não estão em nenhum outro serviço de streaming no Brasil",
                "Todos os canais ao vivo HD/4K",
                "Smart TV Android, TV Box, Mi Stick, FireTV",
                "Celular Android e Tablet Android",
                "Suporte 7 dias via WhatsApp",
                "Garantia de reembolso de 7 dias",
              ],
            },
            {
              id: "trimestral",
              nome: "Plano Trimestral",
              icon: Sparkles,
              iconColor: "text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.7)]",
              titleGradient: "text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-emerald-300 font-black",
              precoAntigo: "R$149",
              preco: "R$99,99",
              periodo: "3 meses",
              dias: "90 dias",
              telas: "1 tela",
              destaque: false,
              selo: null as string | null,
              badge: "⚡ 90 Dias de Acesso",
              badgeStyle: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.3)]",
              cardStyle: "border border-emerald-500/35 bg-gradient-to-b from-emerald-950/25 via-zinc-950/90 to-black hover:border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]",
              btnStyle: "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-black py-3.5 px-4 rounded-xl shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-[1.02] border border-emerald-400/50 transition-all",
              btnText: "ASSINAR TRIMESTRAL",
              link: "https://pay.braip.co/ref?pl=pla1qqq6&ck=che7eo0g&af=afixjm3pn2",
              features: [
                "1 Tela simultânea",
                "90 dias sem mensalidades",
                "Acervo completo (+100.000 títulos em até 4K)",
                "Assista a milhares de filmes e séries que não estão em nenhum outro serviço de streaming no Brasil",
                "Esportes & Canais Ao Vivo HD/4K",
                "Smart TV Android, TV Box, Mi Stick, FireTV",
                "Celular Android e Tablet Android",
                "Suporte 7 dias via WhatsApp",
                "Garantia de reembolso de 7 dias",
              ],
            },
          ].map((p, i) => (
            <SmoothCardReveal key={p.nome} delay={100 + i * 120} className="h-full">
              <div className={`glass group relative flex flex-col justify-between h-full rounded-3xl p-6 sm:p-7 transition-all duration-300 ${p.cardStyle}`}>
                {p.selo && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 px-4 py-1 text-[10px] sm:text-[11px] font-black tracking-wider text-black uppercase shadow-[0_0_25px_rgba(245,158,11,0.9)] whitespace-nowrap">
                    <Crown className="size-3.5 fill-black text-black" />
                    {p.selo}
                  </span>
                )}

                <div>
                  <div className="border-b border-white/10 pb-4 h-[72px] flex flex-col justify-between">
                    <div className="flex items-center gap-2">
                      <p.icon className={`size-5.5 shrink-0 ${p.iconColor}`} />
                      <h3 className={`font-display font-black tracking-tight uppercase text-xl sm:text-2xl ${p.titleGradient}`}>
                        {p.nome}
                      </h3>
                    </div>
                    <div>
                      <span className={`inline-block rounded-full px-3 py-0.5 text-[11px] font-black uppercase tracking-wider border ${p.badgeStyle}`}>
                        {p.badge}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 min-h-[92px] flex flex-col justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-white/40 line-through">{p.precoAntigo}</span>
                      <span className="font-display font-black text-4xl sm:text-5xl text-white">
                        {p.preco}
                      </span>
                      <span className={`text-xs font-bold ${p.destaque ? "text-amber-300 font-extrabold" : "text-white/50"}`}>/{p.periodo}</span>
                    </div>
                    <div className="mt-2.5 flex gap-2 flex-wrap">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${p.destaque ? "bg-amber-500/20 border-amber-400/40 text-amber-200" : "bg-white/8 border-white/10 text-white/70"}`}>
                        <Calendar className="size-3.5 text-red-400" /> {p.dias}
                      </span>
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${p.destaque ? "bg-amber-500/20 border-amber-400/40 text-amber-200" : "bg-white/8 border-white/10 text-white/70"}`}>
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
                    <Zap className={p.destaque ? "size-5 fill-black text-black" : "size-4"} />
                    {p.btnText}
                  </a>

                  <div className={`my-5 h-px w-full ${p.destaque ? "bg-amber-400/40" : "bg-white/10"}`} />

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
                  <CreditCard className="size-3" /> Cartão de Crédito
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
      <section className="relative z-10 border-t border-white/5 bg-black/30 py-5">
        <div className="mx-auto w-[94%] max-w-2xl text-center">
          <p className="text-sm text-white/50 mb-4">Precisa de ajuda? Fale com o nosso WhatsApp abaixo no site — atendimento 7 dias por semana.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/5561984016006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-colors"
            >
              <WhatsAppIcon className="size-4.5 fill-current" /> WhatsApp (61) 9 8401-6006
            </a>
            <a
              href="https://wa.me/5561982743140"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-900/80 border border-green-700/50 px-5 py-3 text-sm font-bold text-white hover:bg-zinc-800 transition-colors"
            >
              <WhatsAppIcon className="size-4.5 text-green-400 fill-current" /> WhatsApp (61) 9 8274-3140
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
