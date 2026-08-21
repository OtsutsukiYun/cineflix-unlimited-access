import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Film,
  Search,
  Star,
  Play,
  X,
  Flame,
  Sparkles,
  Info,
  Layers,
  Check,
  Plus,
} from "lucide-react";
import { horrorCatalog, imgUrl, type HorrorMovie } from "@/data/horrorCatalog";
import { heroSlides, img } from "@/data/catalog";
import { WhatsAppIcon } from "@/components/icons";

export const Route = createFileRoute("/")({
  component: NetflixHorrorCatalogPage,
});

function NetflixHorrorCatalogPage() {
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<HorrorMovie | null>(null);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  // Filtragem dinâmica por termo de busca
  const filteredMovies = useMemo(() => {
    if (!search.trim()) return horrorCatalog;
    const q = search.toLowerCase().trim();
    return horrorCatalog.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        (m.originalTitle && m.originalTitle.toLowerCase().includes(q)) ||
        m.genre.toLowerCase().includes(q) ||
        m.year.includes(q) ||
        (m.country && m.country.toLowerCase().includes(q))
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-[#141414] text-white selection:bg-[#E50914] selection:text-white font-sans antialiased">
      {/* ── HEADER NAVBAR (ESTILO NETFLIX) ────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[#222222] bg-[#141414]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-6">
            <span className="text-2xl sm:text-3xl font-black tracking-tighter text-[#E50914]">
              NETFLIX <span className="text-xs font-bold uppercase tracking-widest text-white/80 bg-[#E50914]/20 border border-[#E50914]/40 px-2 py-0.5 rounded ml-1">HORROR</span>
            </span>

            <nav className="hidden md:flex items-center gap-5 text-xs font-bold text-[#AAAAAA]">
              <Link to="/" className="text-white">Início</Link>
              <Link to="/catalogo" className="hover:text-white transition-colors flex items-center gap-1.5 text-red-400">
                <Sparkles className="size-3.5 text-[#E50914]" /> Catálogo Completo
              </Link>
              <Link to="/instalar" className="hover:text-white transition-colors">Como Instalar</Link>
              <Link to="/suporte" className="hover:text-white transition-colors">Suporte</Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#222222] px-3.5 py-1 text-xs font-medium text-[#AAAAAA]">
              <Layers className="size-3.5 text-[#E50914]" />
              {horrorCatalog.length} Títulos
            </span>

            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20testar%20o%20cat%C3%A1logo%20de%20terror%20estilo%20Netflix"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded bg-[#E50914] px-4 py-2 text-xs font-bold text-white shadow-md transition-all hover:bg-[#b80710] active:scale-95"
            >
              <WhatsAppIcon className="size-4" />
              <span>TESTAR AGORA</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO BANNER SLIDER (ESTILO NETFLIX HERO) ────────────────────── */}
      <section className="relative overflow-hidden bg-[#141414] pb-6 pt-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {heroSlides[activeHeroIndex] && (
            <div className="relative overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#181818] shadow-2xl transition-all duration-500">
              <div className="relative aspect-[16/9] max-h-[440px] w-full overflow-hidden md:aspect-[21/9]">
                <img
                  src={img(heroSlides[activeHeroIndex]!.backdrop, "original")}
                  alt={heroSlides[activeHeroIndex]!.title}
                  className="h-full w-full object-cover opacity-60 transition-all duration-700 hover:scale-105"
                  style={{
                    objectPosition: heroSlides[activeHeroIndex]!.objectPosition || "center",
                    filter: heroSlides[activeHeroIndex]!.brightness || "brightness(0.9)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#181818] via-[#181818]/60 to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-6 md:p-10 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 rounded bg-[#E50914] px-2.5 py-0.5 text-xs font-black text-white uppercase tracking-wider">
                      <Sparkles className="size-3" /> NETFLIX ORIGINAL {heroSlides[activeHeroIndex]!.year}
                    </span>
                    <span className="rounded bg-[#2a2a2a] px-2.5 py-0.5 text-xs font-semibold text-gray-300">
                      {heroSlides[activeHeroIndex]!.genre}
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-md">
                    {heroSlides[activeHeroIndex]!.title}
                  </h1>

                  <p className="mt-2 max-w-2xl text-xs sm:text-sm md:text-base text-gray-300 line-clamp-2">
                    {heroSlides[activeHeroIndex]!.tagline}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() => {
                        const m = horrorCatalog.find((x) => x.title.includes(heroSlides[activeHeroIndex]!.title)) || horrorCatalog[0];
                        setSelectedMovie(m || null);
                      }}
                      className="flex items-center gap-2 rounded bg-white px-5 py-2.5 text-sm font-bold text-black hover:bg-white/80 transition-colors shadow-md"
                    >
                      <Play className="size-4 fill-black" />
                      Assistir
                    </button>
                    <button
                      onClick={() => {
                        const m = horrorCatalog.find((x) => x.title.includes(heroSlides[activeHeroIndex]!.title)) || horrorCatalog[0];
                        setSelectedMovie(m || null);
                      }}
                      className="flex items-center gap-2 rounded bg-[#333333]/80 px-5 py-2.5 text-sm font-bold text-white hover:bg-[#444444] transition-colors"
                    >
                      <Info className="size-4" />
                      Mais Informações
                    </button>
                  </div>
                </div>
              </div>

              {/* Indicadores de slides */}
              <div className="flex justify-center gap-2 py-2.5 bg-[#181818] border-t border-[#262626]">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setActiveHeroIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === activeHeroIndex
                        ? "w-7 bg-[#E50914]"
                        : "w-2 bg-[#444444] hover:bg-[#666666]"
                    }`}
                    aria-label={`Ver slide ${slide.title}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── BARRA DE PESQUISA & CONTROLE ────────────────────────────────── */}
      <section className="sticky top-[61px] z-40 bg-[#141414]/95 backdrop-blur-md py-4 border-b border-[#222222]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Film className="size-5 text-[#E50914]" />
                Catálogo Geral de Terror
              </h2>
              <p className="text-xs text-[#AAAAAA] mt-0.5">
                {filteredMovies.length} títulos listados continuamente (6 filmes por linha)
              </p>
            </div>

            {/* BARRA DE PESQUISA ESTILO NETFLIX */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#888888]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Titulos, anos ou país (ex: Indonésia, Coréia)..."
                className="w-full rounded border border-[#333333] bg-[#000000]/60 py-2 pl-10 pr-9 text-sm text-white placeholder-[#777777] outline-none transition-all focus:border-[#E50914] focus:bg-black/90"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── GRADE PRINCIPAL DE FILMES (NETFLIX GRID: 6 POR LINHA) ──────── */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        {filteredMovies.length === 0 ? (
          <div className="py-20 text-center bg-[#181818] rounded-xl border border-[#2a2a2a]">
            <Info className="mx-auto size-12 text-[#E50914]/60 mb-3" />
            <h3 className="text-xl font-bold text-white">Nenhum título encontrado</h3>
            <p className="text-sm text-[#AAAAAA] mt-1">Tente buscar outro termo ou ano</p>
            <button
              onClick={() => setSearch("")}
              className="mt-4 rounded bg-[#E50914] px-4 py-2 text-xs font-bold text-white hover:bg-[#b80710]"
            >
              Limpar Busca
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4.5">
            {filteredMovies.map((movie, index) => (
              <div
                key={movie.id}
                onClick={() => setSelectedMovie(movie)}
                className="group relative cursor-pointer overflow-hidden rounded bg-[#181818] border border-[#262626] transition-all duration-300 hover:scale-105 hover:z-30 hover:shadow-[0_10px_25px_rgba(0,0,0,0.9)] hover:border-[#E50914]"
              >
                {/* Selo NETFLIX TOP 1 a TOP 5 para os primeiros */}
                {index < 5 && !search && (
                  <div className="absolute top-0 right-0 z-30 bg-[#E50914] text-[10px] font-black text-white px-2 py-0.5 rounded-bl shadow uppercase tracking-widest">
                    TOP {index + 1}
                  </div>
                )}

                {/* POSTER IMAGE */}
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#111111]">
                  <img
                    src={imgUrl(movie.poster, "w500")}
                    alt={movie.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />

                  {/* OVERLAY NETFLIX PLAY BUTTON */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/50">
                    <div className="flex size-11 items-center justify-center rounded-full bg-white text-black shadow-lg transform scale-90 transition-transform duration-300 group-hover:scale-100">
                      <Play className="size-5 ml-0.5 fill-black text-black" />
                    </div>
                  </div>

                  {/* GRADIENTE INFERIOR */}
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#181818] via-[#181818]/20 to-transparent" />

                  {/* TAG NETFLIX */}
                  {movie.tag && (
                    <span className="absolute top-2 left-2 z-20 max-w-[85%] truncate rounded bg-black/80 border border-[#444444] px-1.5 py-0.5 text-[9px] font-bold text-white uppercase">
                      {movie.tag}
                    </span>
                  )}
                </div>

                {/* CARD METADATA */}
                <div className="p-2.5 bg-[#181818]">
                  <h3 className="truncate text-xs font-bold text-white group-hover:text-[#E50914] transition-colors">
                    {movie.title}
                  </h3>
                  <div className="mt-1 flex items-center justify-between text-[10px] font-semibold text-[#AAAAAA]">
                    <span>{movie.year}</span>
                    <span className="flex items-center gap-0.5 text-amber-400 font-bold">
                      <Star className="size-2.5 fill-amber-400 text-amber-400" /> {movie.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* ── NETFLIX STYLE MOVIE DETAILS MODAL ───────────────────────────── */}
      {selectedMovie && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-lg border border-[#333333] bg-[#181818] shadow-2xl transition-all">
            {/* FECHAR */}
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-3.5 right-3.5 z-30 flex size-8 items-center justify-center rounded-full bg-[#181818]/80 text-white hover:bg-[#E50914] transition-colors"
            >
              <X className="size-4" />
            </button>

            {/* BACKDROP */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#111111]">
              <img
                src={imgUrl(selectedMovie.backdrop || selectedMovie.poster, "w780")}
                alt={selectedMovie.title}
                className="h-full w-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/40 to-transparent" />

              <div className="absolute bottom-4 left-6 right-6">
                <span className="inline-block rounded bg-[#E50914] px-2 py-0.5 text-[10px] font-black text-white uppercase mb-1">
                  {selectedMovie.genre}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white drop-shadow">
                  {selectedMovie.title}
                </h2>
              </div>
            </div>

            {/* BODY */}
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold text-[#AAAAAA] mb-4">
                <span className="flex items-center gap-1 text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                  <Star className="size-3 fill-amber-400" /> {selectedMovie.rating} / 5.0
                </span>
                <span className="rounded bg-[#2a2a2a] px-2 py-0.5 text-white">{selectedMovie.year}</span>
                {selectedMovie.country && (
                  <span className="rounded bg-[#2a2a2a] px-2 py-0.5 text-gray-300">
                    {selectedMovie.country}
                  </span>
                )}
                {selectedMovie.tag && (
                  <span className="rounded bg-[#E50914]/20 border border-[#E50914]/40 px-2 py-0.5 font-bold text-[#E50914]">
                    {selectedMovie.tag}
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {selectedMovie.synopsis}
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-[#2a2a2a]">
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20assistir%20ao%20filme%20de%20terror%20"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded bg-[#E50914] px-6 py-3 text-sm font-bold text-white hover:bg-[#b80710] transition-colors shadow-md"
                >
                  <Play className="size-4 fill-white" />
                  Assistir Agora
                </a>
                <button
                  onClick={() => setSelectedMovie(null)}
                  className="rounded bg-[#333333] px-5 py-3 text-sm font-bold text-gray-200 hover:bg-[#444444] transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── FOOTER ESTILO NETFLIX ───────────────────────────────────────── */}
      <footer className="border-t border-[#222222] bg-[#101010] py-10 text-center text-xs text-[#777777]">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-base font-black text-[#E50914] mb-2">NETFLIX HORROR COLLECTION</p>
          <p className="max-w-md mx-auto mb-4 text-gray-400">
            Catálogo completo de terror em alta definição, lançamentos recentes, terror asiático (Indonésia, Coréia, Japão, Tailândia, Taiwan) e muito mais.
          </p>
          <p>© 2026 Netflix Horror Edition. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
