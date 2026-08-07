import { useRef, type ComponentType } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { img, type Title } from "@/data/catalog";

function Poster({ item }: { item: Title }) {
  return (
    <div className="card-lift group relative shrink-0 overflow-hidden rounded-3xl border border-border bg-surface w-[150px] sm:w-[175px]">
      <img
        src={img(item.poster)}
        alt={`Pôster de ${item.title}`}
        loading="lazy"
        className="aspect-2/3 w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background via-background/10 to-transparent opacity-90" />
      {item.tag && (
        <span className="bg-hot absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] font-bold tracking-wide text-primary-foreground uppercase">
          {item.tag}
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-3">
        <p className="truncate text-sm font-bold">{item.title}</p>
        <p className="text-xs text-muted-foreground">{item.year}</p>
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
  subtitle: string;
  items: Title[];
  icon: ComponentType<{ className?: string }>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.8, 240), behavior: "smooth" });
  };

  return (
    <Reveal className="py-8">
      <div className="mx-auto w-[94%] max-w-6xl">
        <div className="mb-5 flex items-end justify-between gap-4 px-2 sm:px-4">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <Icon className="size-5 text-accent" />
              <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
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
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 sm:px-4 pb-4 scroll-px-2 sm:scroll-px-4"
        >
          {items.map((t, i) => (
            <Reveal
              key={t.title}
              delay={Math.min(i, 6) * 70}
              className="shrink-0 snap-start"
            >
              <Poster item={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
