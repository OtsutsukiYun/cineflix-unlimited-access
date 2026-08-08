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
            className="group relative w-[68vw] shrink-0 snap-center overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-purple-950/60 via-[#140828]/95 to-[#0b0316] sm:w-[325px] transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/80 hover:shadow-[0_12px_40px_rgba(168,85,247,0.45)]"
          >
            {/* SHINE GLOW EFFECT ON HOVER */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <img
              src={img(t.poster, "w500")}
              alt={`Capa de ${t.title}`}
              decoding="async"
              width={500}
              height={750}
              className="aspect-2/3 w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090312] via-[#090312]/35 via-45% to-transparent opacity-95 group-hover:opacity-90 transition-opacity" />

            {t.tag && (
              <span className="absolute top-3.5 left-3.5 z-20 max-w-[88%] truncate inline-flex items-center gap-1 rounded-full border border-purple-300/40 bg-purple-950/85 backdrop-blur-md px-3 py-1 text-[10px] font-extrabold tracking-wider text-purple-200 uppercase shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                {t.tag}
              </span>
            )}

            <div className="absolute inset-x-0 bottom-0 z-20 p-5">
              <p className="truncate text-lg font-black text-white drop-shadow-md transition-colors group-hover:text-purple-300 sm:text-xl">{t.title}</p>
              <p className="text-sm font-semibold text-purple-200/80 mt-1">{t.year}</p>
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
