import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { img, type Title } from "@/data/catalog";

export function FeaturedCarousel({
  items,
  title,
  subtitle,
}: {
  items: Title[];
  title: string;
  subtitle: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pausado, setPausado] = useState(false);

  const passo = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const largura = card ? card.offsetWidth + 20 : 260;
    const max = el.scrollWidth - el.clientWidth - 4;
    if (dir > 0 && el.scrollLeft >= max) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    el.scrollBy({ left: dir * largura, behavior: "smooth" });
  };

  useEffect(() => {
    if (pausado) return;
    const id = setInterval(() => passo(1), 3800);
    return () => clearInterval(id);
  }, [pausado]);

  return (
    <Reveal className="py-10">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <h2 className="text-2xl font-extrabold md:text-4xl">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              {subtitle}
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => passo(-1)}
              aria-label="Ver títulos anteriores"
              className="glass flex size-10 items-center justify-center rounded-full transition-colors hover:text-accent"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => passo(1)}
              aria-label="Ver próximos títulos"
              className="glass flex size-10 items-center justify-center rounded-full transition-colors hover:text-accent"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        onPointerDown={() => setPausado(true)}
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
        className="no-scrollbar mx-auto flex w-full snap-x snap-mandatory gap-5 overflow-x-auto px-[4vw] pb-4 lg:px-[max(4vw,calc((100vw-72rem)/2))]"
      >
        {items.map((t) => (
          <article
            key={t.title}
            className="card-lift group relative w-[62vw] shrink-0 snap-center overflow-hidden rounded-3xl border border-border bg-surface sm:w-[300px]"
          >
            <img
              src={img(t.poster, "w500")}
              alt={`Capa de ${t.title}`}
              loading="lazy"
              width={500}
              height={750}
              className="aspect-2/3 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background via-background/15 to-transparent" />
            {t.tag && (
              <span className="bg-hot absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold tracking-wide text-primary-foreground uppercase">
                {t.tag}
              </span>
            )}
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="truncate text-base font-bold">{t.title}</p>
              <p className="text-sm text-muted-foreground">{t.year}</p>
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
