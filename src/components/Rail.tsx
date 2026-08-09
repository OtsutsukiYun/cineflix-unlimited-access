import { useRef, type ComponentType } from "react";
import { ChevronLeft, ChevronRight, Star, Play } from "lucide-react";
import { img, type Title } from "@/data/catalog";

function PosterCard({ item }: { item: Title }) {
  return (
    <div className="group relative shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-surface/90 to-background w-[150px] sm:w-[172px] md:w-[185px] transition-all duration-500 ease-out hover:-translate-y-2.5 hover:scale-[1.04] hover:border-purple-400/90 hover:shadow-[0_14px_40px_rgba(168,85,247,0.45)] cursor-pointer">
      {/* SHINE GLOW EFFECT */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* POSTER IMAGE */}
      <img
        src={img(item.poster)}
        alt={`Pôster de ${item.title}`}
        decoding="async"
        className="aspect-[2/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
      />

      {/* OVERLAY PLAY BUTTON COM ANEL PULSANTE */}
      <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 bg-black/35 backdrop-blur-[2px]">
        <div className="relative flex size-12 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-accent text-white shadow-[0_0_30px_rgba(168,85,247,0.95)] transform scale-75 transition-transform duration-300 group-hover:scale-100 border border-white/40">
          <span className="absolute -inset-1 rounded-full bg-primary/40 animate-ping opacity-75" />
          <Play className="size-5 ml-0.5 fill-white relative z-10" />
        </div>
      </div>

      {/* OVERLAY GRADIENTE DE CONTRASTE */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#080212] via-[#080212]/40 to-transparent opacity-95" />

      {/* BADGE DE TAG */}
      {item.tag && (
        <span className="absolute top-2.5 left-2.5 z-40 max-w-[70%] truncate inline-flex items-center gap-1 rounded-full border border-purple-400/40 bg-purple-950/85 backdrop-blur-md px-2 py-0.5 text-[9px] font-extrabold tracking-wider text-purple-200 uppercase shadow-sm">
          {item.tag}
        </span>
      )}

      {/* TEXTO INFERIOR */}
      <div className="absolute inset-x-0 bottom-0 z-40 p-3 sm:p-4">
        <p className="truncate text-xs sm:text-sm font-black text-white drop-shadow-md transition-colors group-hover:text-purple-200">
          {item.title}
        </p>
        <div className="mt-1 flex items-center justify-between text-[11px] font-semibold text-muted-foreground/90">
          <span>{item.year}</span>
          <span className="flex items-center gap-0.5 text-amber-300 font-extrabold text-[10px] bg-amber-400/15 border border-amber-400/30 px-1.5 py-0.5 rounded-md shadow-xs">
            <Star className="size-2.5 fill-amber-400 text-amber-400" /> {item.rating ?? "4.9"}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Rail({
  title,
  subtitle,
  items,
  icon: Icon,
}: {
  title: string;
  subtitle?: string;
  items: Title[];
  icon: ComponentType<{ className?: string }>;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLElement>(".rail-card"));
    if (cards.length === 0) return;

    const gap = 14;
    const cardWidth = cards[0].offsetWidth;
    const step = cardWidth + gap;
    const visibleCards = Math.max(1, Math.floor((container.clientWidth + gap) / step));
    const pageStep = visibleCards * step;

    const currentScroll = container.scrollLeft;
    const currentPage = Math.round(currentScroll / pageStep);

    let targetPage = direction === "right" ? currentPage + 1 : currentPage - 1;
    const maxPage = Math.ceil(cards.length / visibleCards) - 1;
    targetPage = Math.max(0, Math.min(maxPage, targetPage));

    const targetScrollLeft = Math.min(targetPage * pageStep, container.scrollWidth - container.clientWidth);
    container.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
  };

  return (
    <section className="py-3 sm:py-4">
      <div className="mx-auto w-[94%] max-w-6xl">
        {/* HEADER DO TRILHO */}
        <div className="mb-3 flex items-end justify-between gap-4 px-1 sm:px-2">
          <div>
            <div className="flex items-center gap-2 sm:gap-2.5">
              <Icon className="size-5 sm:size-6 text-fuchsia-300 shrink-0 animate-pulse drop-shadow-[0_0_20px_rgba(232,121,249,0.9)]" />
              <h3 className="text-lg font-bold sm:text-xl md:text-2xl leading-none text-white">{title}</h3>
            </div>
            {subtitle && (
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-tight">{subtitle}</p>
            )}
          </div>
          
          <div className="hidden shrink-0 gap-2 md:flex">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label={`Rolar ${title} para a esquerda`}
              className="glass flex size-10 items-center justify-center rounded-full transition-all hover:bg-white/10 hover:text-accent active:scale-95"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label={`Rolar ${title} para a direita`}
              className="glass flex size-10 items-center justify-center rounded-full transition-all hover:bg-white/10 hover:text-accent active:scale-95"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* CONTÊINER COM CORTE MATEMÁTICO PERFEITO */}
        <div className="relative overflow-hidden rounded-2xl">
          <div
            ref={scrollRef}
            className="no-scrollbar flex gap-3.5 overflow-x-auto pb-4 scroll-smooth px-0"
          >
            {items.map((t) => (
              <div key={t.title} className="rail-card shrink-0">
                <PosterCard item={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
