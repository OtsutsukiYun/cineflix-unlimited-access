import { useRef, type ComponentType } from "react";
import { ChevronLeft, ChevronRight, Star, Play } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { img, type Title } from "@/data/catalog";

function Poster({ item }: { item: Title }) {
  return (
    <div className="group relative shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-background w-[130px] sm:w-[152px] md:w-[162px] transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:border-primary/60 hover:shadow-glow cursor-pointer">
      {/* SHINE GLOW EFFECT ON HOVER */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* POSTER IMAGE */}
      <img
        src={img(item.poster)}
        alt={`Pôster de ${item.title}`}
        decoding="async"
        className="aspect-[2/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* OVERLAY PLAY BUTTON ON HOVER */}
      <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:backdrop-blur-[2px] bg-black/10">
        <div className="flex size-12 items-center justify-center rounded-full bg-primary/80 text-white backdrop-blur-md shadow-md transform scale-50 transition-transform duration-500 group-hover:scale-100 border border-primary/50">
          <Play className="size-5 ml-0.5 fill-white" />
        </div>
      </div>

      {/* OVERLAY GRADIENTE DE LEITURA E CONTRASTE */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background via-background/40 via-50% to-transparent opacity-95 transition-opacity duration-300 group-hover:opacity-100" />

      {/* BADGE DE TAG (UNICA NO TOPO) */}
      {item.tag && (
        <span className="absolute top-2.5 left-2.5 z-40 max-w-[85%] truncate inline-flex items-center gap-1 rounded-full border border-primary/40 bg-surface/85 backdrop-blur-md px-2 py-0.5 text-[8.5px] font-extrabold tracking-wider text-accent uppercase shadow-sm">
          {item.tag}
        </span>
      )}

      {/* TEXTO INFERIOR */}
      <div className="absolute inset-x-0 bottom-0 z-40 p-3 sm:p-4">
        <p className="truncate text-xs sm:text-sm font-bold text-white drop-shadow-md transition-colors group-hover:text-accent">
          {item.title}
        </p>
        <div className="mt-1 flex items-center justify-between text-[11px] font-semibold text-muted-foreground">
          <span>{item.year}</span>
          <span className="flex items-center gap-0.5 text-amber-400 font-bold text-[10px] bg-amber-400/10 px-1.5 py-0.5 rounded-md">
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
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>(".rail-item"));
    if (cards.length === 0) return;

    const firstCard = cards[0];
    const style = window.getComputedStyle(el);
    const gap = parseFloat(style.columnGap || style.gap) || 14;
    const cardStep = firstCard.offsetWidth + gap;
    const currentScroll = el.scrollLeft;

    // Calcular o índice limpo da primeira capa visível
    const currentIndex = Math.round(currentScroll / cardStep);
    const visibleCards = Math.max(1, Math.floor((el.clientWidth + gap) / cardStep));

    let targetIndex = dir > 0 ? currentIndex + visibleCards : currentIndex - visibleCards;
    targetIndex = Math.max(0, Math.min(cards.length - 1, targetIndex));

    const targetScrollLeft = targetIndex * cardStep;
    el.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
  };

  return (
    <div className="py-2.5 sm:py-3.5">
      <div className="mx-auto w-[94%] max-w-6xl">
        <div className="mb-2 sm:mb-3 flex items-end justify-between gap-4 px-2 sm:px-4">
          <div>
            <div className="flex items-center gap-2 sm:gap-2.5">
              <Icon className="size-5 sm:size-6 text-fuchsia-300 shrink-0 animate-pulse drop-shadow-[0_0_20px_rgba(232,121,249,0.9)]" />
              <h3 className="text-lg font-bold sm:text-xl md:text-2xl leading-none text-white">{title}</h3>
            </div>
            {subtitle && (
              <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground leading-tight">{subtitle}</p>
            )}
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label={`Rolar ${title} para a esquerda`}
              className="glass flex size-10 items-center justify-center rounded-full transition-colors hover:text-accent"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label={`Rolar ${title} para a direita`}
              className="glass flex size-10 items-center justify-center rounded-full transition-colors hover:text-accent"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
        <div
          ref={ref}
          className="no-scrollbar flex gap-3 sm:gap-3.5 overflow-x-auto px-2 sm:px-4 pb-3 sm:pb-4 scroll-smooth"
        >
          {items.map((t) => (
            <div key={t.title} className="rail-item shrink-0">
              <Poster item={t} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
