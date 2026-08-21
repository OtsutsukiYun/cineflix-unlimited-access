import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Search,
  X,
  Play,
  Sparkles,
  Info,
  Layers,
  Star,
  Film,
  Download,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { img, Title } from "@/data/catalog";
import { PromoBanner } from "@/components/PromoBanner";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo de Terror Completo — UniTV Pro" },
      {
        name: "description",
        content:
          "Explore todo o catálogo de terror da UniTV Pro: lançamentos 2026, terror coreano, japonês, indonésio, clássicos e os mais assistidos em alta qualidade.",
      },
    ],
  }),
  component: CatalogoPage,
});

/**
 * Catálogo completo unificado de filmes de terror (6 por linha no desktop).
 * A ordem inicial exata solicitada:
 * 1º: Obsessão
 * 2º: Evil Dead Burn
 * 3º: Leviticus
 * Seguido por terror coreano, japonês, indonésio, em alta e clássicos.
 */
const CATALOGO_UNIFICADO: Title[] = [
  // 1º, 2º e 3º solicitados exatamente pelo usuário
  { title: "Obsessão", poster: "/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg", year: "2026", tag: "🔥 Top 1", rating: "5.0" },
  { title: "Evil Dead Burn: A Morte do Demônio", poster: "/uRxrNXQWkHoENm3nwVOZDYSCx2F.jpg", year: "2026", tag: "🔥 Top 2", rating: "5.0" },
  { title: "Leviticus", poster: "/5M2dI8TJeRNY3Aeidhp3Ujrb3aI.jpg", year: "2026", tag: "🔥 Top 3", rating: "4.9" },

  // Filmes em Alta e Lançamentos Recentes / Asiáticos
  { title: "Other Mommy (A Outra Mãe)", poster: "/kNxRgcTeqeU5jauBackTERoO2De.jpg", year: "2026", tag: "Terror Sobrenatural", rating: "4.9" },
  { title: "Salmokji", poster: "/bOl0rJ86WWxVYlQlGttHhHuYiPQ.jpg", year: "2026", tag: "Terror Coreano", rating: "4.7" },
  { title: "Pemandi Jenazah", poster: "/1ZTrQWpuhxMr32uC1fQBRnkVYlf.jpg", year: "2024", tag: "Terror Indonésio", rating: "4.8" },
  
  { title: "Dia Bukan Ibu", poster: "/ojWSVt7O92ZLtEUyQs8u5pRI40b.jpg", year: "2025", tag: "Terror Indonésio", rating: "4.6" },
  { title: "Dark Water: Água Negra", poster: "/iSq6J55RFLfwcceDKxYtMjOr1sz.jpg", year: "2002", tag: "Clássico Japonês", rating: "4.9" },
  { title: "Killer Toon", poster: "/9ojbUahh8McTbR92Qf69ocWnggE.jpg", year: "2013", tag: "Terror Coreano", rating: "4.8" },
  { title: "Cure (A Cura)", poster: "/xNVJr9q6AtSbjosS6Ed9YirOkSo.jpg", year: "1997", tag: "Clássico Japonês", rating: "4.9" },
  { title: "Another", poster: "/c8VVGuc3lnPXCBStcKQWrOlBCSA.jpg", year: "2012", tag: "Terror Japonês", rating: "4.8" },
  { title: "Whispering Corridors: Wishing Stairs", poster: "/hX1CdiS8hJJxY8TuAmMoExYXKfn.jpg", year: "2003", tag: "Terror Coreano", rating: "4.7" },

  { title: "Eu Vi o Diabo", poster: "/zp5NrmYp80axIGiEiYPmm1CW6uH.jpg", year: "2010", tag: "Terror Coreano", rating: "4.9" },
  { title: "O Lamento (The Wailing)", poster: "/mL4vGghS5XtgeNIPjhoTg8Tv5cJ.jpg", year: "2016", tag: "Terror Coreano", rating: "4.9" },
  { title: "Backrooms: Um Não-Lugar", poster: "/qEl4BDBTGnhLiadZx0c9nHM8vBF.jpg", year: "2026", tag: "🔥 Lançamento 2026", rating: "4.9" },
  { title: "Omukade", poster: "/rB495nxugPfNlBmFDUjN5kaTy90.jpg", year: "2026", tag: "Terror Asiático 2026", rating: "4.8" },
  { title: "Hokum", poster: "/fn5QNtG3LLXC3e7ZTQDYP92kFYc.jpg", year: "2026", tag: "Lançamento 2026", rating: "4.7" },
  { title: "A Maldição da Múmia", poster: "/fI6XBw8k5CWNwxLEYZwpjA89TPg.jpg", year: "2026", tag: "Lançamento", rating: "4.7" },

  { title: "A Boca do Diabo", poster: "/lH8k9uCWYn2b2gsYleqYBDPbWa8.jpg", year: "2026", tag: "Novo", rating: "4.5" },
  { title: "Passageiro do Mal", poster: "/2sOEJzhPzjTkZSlPbGxOJ7xgIyS.jpg", year: "2025", tag: "Em alta", rating: "4.6" },
  { title: "A Hora do Mal", poster: "/psEJSjQr6I9GSJTdW28CKC4Kffs.jpg", year: "2025", tag: "Em alta", rating: "4.7" },
  { title: "Pecadores", poster: "/v0Ljeti537c6cNKweuEN0iaU3x4.jpg", year: "2025", tag: "Em alta", rating: "4.8" },
  { title: "Invocação do Mal 4: O Último Ritual", poster: "/40nHGUfypLhlr7gJx8At1IbYkaK.jpg", year: "2025", tag: "Em alta", rating: "4.9" },
  { title: "O Telefone Preto 2", poster: "/p3epSUdF9qSWWHTBlA3mJ0w2i2Y.jpg", year: "2025", tag: "Em alta", rating: "4.8" },

  { title: "Faça Ela Voltar", poster: "/xfmnUz6C5WRboIMQZD0j3SNDT7v.jpg", year: "2025", tag: "Novo", rating: "4.6" },
  { title: "Premonição 6: Laços de Sangue", poster: "/temIXpcua7j5v4FipOxmzTfrB06.jpg", year: "2025", tag: "Em alta", rating: "4.8" },
  { title: "Five Nights at Freddy's 2", poster: "/12H82Xrr2ijDF0lJWUarqGFV7bC.jpg", year: "2025", tag: "Em alta", rating: "4.7" },
  { title: "Rua do Medo: Rainha do Baile", poster: "/skwydfnpaQdRQZfXMroh59FMJyY.jpg", year: "2025", tag: "Em alta", rating: "4.6" },
  { title: "O Macaco", poster: "/2jME1L29XGE3T4f0zUHgpiKsPrV.jpg", year: "2025", tag: "Novo", rating: "4.7" },
  { title: "Acompanhante Perfeita", poster: "/7LbrEQvturE05hljvTCWST7rLQL.jpg", year: "2025", tag: "Novo", rating: "4.6" },

  { title: "Predador: Terras Selvagens", poster: "/f3yLlUrJDdDL8d4nxywyotN45SL.jpg", year: "2025", tag: "Sci-Fi Horror", rating: "4.8" },
  { title: "Nosferatu", poster: "/fbkUfzmVzEBFSt6p7VigknREIJT.jpg", year: "2024", tag: "Sucesso", rating: "4.9" },
  { title: "Herege", poster: "/j5e2YS1PRUVC1YgSool0JJyNLxJ.jpg", year: "2024", tag: "Terror Psicológico", rating: "4.8" },
  { title: "A Substância", poster: "/vWeOgzlhnP1sS23H3rzctGHB9Nb.jpg", year: "2024", tag: "Body Horror", rating: "4.9" },
  { title: "Terrifier 3", poster: "/3HeKb5H89HjzWTkVkAqomu9mek.jpg", year: "2024", tag: "Gore", rating: "4.8" },
  { title: "Sorria 2", poster: "/ypHiYvSJmHIyRDRiosZuE595uir.jpg", year: "2024", tag: "Sucesso", rating: "4.8" },

  { title: "Longlegs - Vínculo Mortal", poster: "/uURBOrqLFyU8iKODcI3t2Xkbhqs.jpg", year: "2024", tag: "Suspense", rating: "4.7" },
  { title: "Abigail", poster: "/5gKKSoD3iezjoL7YqZONjmyAiRA.jpg", year: "2024", tag: "Vampiros", rating: "4.6" },
  { title: "Imaculada", poster: "/6EYfWxIGPc23m1GFs9Gt3kzTl5O.jpg", year: "2024", tag: "Terror Religioso", rating: "4.5" },
  { title: "A Primeira Profecia", poster: "/zppeHKLHljU2uI7NBJ1JyDNpn6L.jpg", year: "2024", tag: "Terror Religioso", rating: "4.7" },
  { title: "Alien: Romulus", poster: "/jB0W9tn4w07MFn7sTfqRTBLVytF.jpg", year: "2024", tag: "Sci-Fi Horror", rating: "4.9" },
  { title: "Um Lugar Silencioso: Dia Um", poster: "/pN9BtzUeqPIKybAu9baihz6YzyO.jpg", year: "2024", tag: "Suspense", rating: "4.8" },

  { title: "Evil Dead Rise: A Ascensão", poster: "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg", year: "2023", tag: "Gore", rating: "4.9" },
  { title: "Sobrenatural: A Porta Vermelha", poster: "/6lp4uDxLqLEw1CzW1SUOYJ3zdKD.jpg", year: "2023", tag: "Sobrenatural", rating: "4.6" },
  { title: "O Exorcista do Papa", poster: "/hqIIoGsKKGWK7HjpgCSvV6mgKyT.jpg", year: "2023", tag: "Exorcismo", rating: "4.7" },
  { title: "A Freira 2", poster: "/omV2IW2OlFTSw6Hih13hz6lFdvP.jpg", year: "2023", tag: "Sobrenatural", rating: "4.6" },
  { title: "Terrifier 2", poster: "/nocx1g4AwO4HyyuWF5gnM5WjGJL.jpg", year: "2022", tag: "Gore", rating: "4.7" },
  { title: "O Telefone Preto", poster: "/aAdnNifQo2qxDYnuDD3blsxinH1.jpg", year: "2022", tag: "Suspense", rating: "4.8" },

  { title: "Sorria", poster: "/3LfJ1kQZv6OX687rJMOAMzFJlc9.jpg", year: "2022", tag: "Terror Psicológico", rating: "4.8" },
  { title: "Noites Brutais", poster: "/mXsvEjsWLvco0hLfhe5FgwmY3qg.jpg", year: "2022", tag: "Suspense", rating: "4.8" },
  { title: "Não! Não Olhe!", poster: "/eyOw2kAOad2MNVsjMFmfzavB51h.jpg", year: "2022", tag: "Sci-Fi Horror", rating: "4.7" },
  { title: "Halloween Ends", poster: "/3uDwqxbr0j34rJVJMOW6o8Upw5W.jpg", year: "2022", tag: "Slasher", rating: "4.5" },
  { title: "A Casa Sombria", poster: "/sDbo3qnxxMnC1f4RMfmUlcKNNST.jpg", year: "2021", tag: "Mistério", rating: "4.6" },
  { title: "Midsommar: O Mal Não Espera", poster: "/hR4dXPlWq5Nekwjqbp3gFGeiiZS.jpg", year: "2019", tag: "Terror Psicológico", rating: "4.9" },

  { title: "Hereditário", poster: "/wonYMeHauhrxSi5UTOtj5L479mS.jpg", year: "2018", tag: "Obra-Prima", rating: "5.0" },
  { title: "Corra!", poster: "/A0RoSZh8PEYJgDMgM2EV7Ycz3dR.jpg", year: "2017", tag: "Suspense", rating: "4.9" },
  { title: "Atividade Paranormal", poster: "/jV5eAsOTf7zsL4glY51gTW6Vb05.jpg", year: "2007", tag: "Found Footage", rating: "4.7" },
  { title: "[REC]", poster: "/nfbO00NKXSzBIzcN3KbUMdPT1EU.jpg", year: "2007", tag: "Found Footage", rating: "4.8" },
  { title: "O Chamado", poster: "/4skN151KEKtJQSLJ7zkWSDGE0DJ.jpg", year: "2002", tag: "Clássico Anos 2000", rating: "4.9" },
  { title: "Jogos Mortais", poster: "/jByGeGsJtoghNFHF5TgVvcSJ4Oc.jpg", year: "2004", tag: "Clássico Anos 2000", rating: "5.0" },

  { title: "O Grito", poster: "/A0VKYaw1rs6VTn48ijhTWN8P1pi.jpg", year: "2004", tag: "Clássico Anos 2000", rating: "4.8" },
  { title: "Premonição", poster: "/b5ERChzoI1aLzeYdmwWUtutwm8c.jpg", year: "2000", tag: "Clássico Anos 2000", rating: "4.7" },
  { title: "Madrugada dos Mortos", poster: "/ttquyxStEEctzghtA2f4PUGprDr.jpg", year: "2004", tag: "Clássico Anos 2000", rating: "4.9" },
  { title: "Extermínio", poster: "/sQckQRt17VaWbo39GIu0TMOiszq.jpg", year: "2002", tag: "Clássico Anos 2000", rating: "4.8" },
  { title: "Silent Hill", poster: "/r0bEDWO2w4a43K2xTNSF284qOsc.jpg", year: "2006", tag: "Clássico Anos 2000", rating: "4.8" },
  { title: "O Albergue", poster: "/dDrtuWUKhgUGp12kgUWuP0NpTdF.jpg", year: "2005", tag: "Clássico Anos 2000", rating: "4.7" },

  { title: "Arraste-me para o Inferno", poster: "/fdyejM5Zd6dsa0YyWa02ZAKwQzK.jpg", year: "2009", tag: "Clássico Anos 2000", rating: "4.7" },
  { title: "Olhos Famintos", poster: "/g410Y1U1ELbmJG14Zru3UAimm1G.jpg", year: "2001", tag: "Clássico Anos 2000", rating: "4.6" },
  { title: "A Bruxa de Blair", poster: "/jAKX4midH0vSm2XT54g5TWluQqw.jpg", year: "1999", tag: "Found Footage", rating: "4.8" },
  { title: "Martyrs: Mártires", poster: "/sT5ITTlTcnPOeFzHEu5j0hTZUvD.jpg", year: "2008", tag: "Terror Extremo", rating: "5.0" },
  { title: "Shiki", poster: "/zsWbTnNwNjqWvgZ9gqTcK9WLoWy.jpg", year: "2010", tag: "Anime Terror", rating: "4.8" },
  { title: "Mirai Nikki (The Future Diary)", poster: "/rQScQD92q6CYAGL0DWQQNxjuVVh.jpg", year: "2011", tag: "Anime Thriller", rating: "4.8" },
];

function MoviePoster({ movie }: { movie: Title }) {
  const [error, setError] = useState(false);

  if (error || !movie.poster) {
    return (
      <div className="relative aspect-[2/3] w-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-b from-neutral-800 via-neutral-900 to-black border border-white/10 overflow-hidden">
        <Film className="size-8 text-red-500 mb-2 opacity-80" />
        <span className="text-[11px] font-black text-white leading-tight line-clamp-3">{movie.title}</span>
        <span className="text-[10px] font-bold text-red-400 mt-2 bg-red-950/60 border border-red-500/30 px-2 py-0.5 rounded">
          {movie.year}
        </span>
      </div>
    );
  }

  return (
    <img
      src={img(movie.poster, "w500")}
      alt={movie.title}
      loading="lazy"
      onError={() => setError(true)}
      className="size-full object-cover transition-all duration-500 group-hover:scale-110"
    />
  );
}

function CatalogoPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("todos");
  const [selectedMovie, setSelectedMovie] = useState<Title | null>(null);

  // Filtragem dinâmica do catálogo
  const filteredCatalog = useMemo(() => {
    return CATALOGO_UNIFICADO.filter((movie) => {
      const matchQuery =
        !search ||
        movie.title.toLowerCase().includes(search.toLowerCase()) ||
        movie.year.includes(search) ||
        (movie.tag && movie.tag.toLowerCase().includes(search.toLowerCase()));

      if (!matchQuery) return false;

      if (activeFilter === "alta") {
        return movie.year === "2026" || movie.year === "2025" || (movie.tag && movie.tag.includes("Top"));
      }
      if (activeFilter === "asiatico") {
        return (
          (movie.tag &&
            (movie.tag.includes("Coreano") ||
              movie.tag.includes("Japonês") ||
              movie.tag.includes("Indonésio") ||
              movie.tag.includes("Asiático") ||
              movie.tag.includes("Anime"))) ||
          movie.title.includes("Pemandi") ||
          movie.title.includes("Salmokji") ||
          movie.title.includes("Dia Bukan")
        );
      }
      if (activeFilter === "coreano") {
        return movie.tag && movie.tag.includes("Coreano");
      }
      if (activeFilter === "japones") {
        return movie.tag && (movie.tag.includes("Japonês") || movie.tag.includes("Anime"));
      }
      if (activeFilter === "indonesio") {
        return (movie.tag && movie.tag.includes("Indonésio")) || movie.title.includes("Pemandi") || movie.title.includes("Dia Bukan");
      }
      if (activeFilter === "classicos") {
        return (movie.tag && movie.tag.includes("Anos 2000")) || parseInt(movie.year) < 2015;
      }

      return true;
    });
  }, [search, activeFilter]);

  return (
    <div className="relative min-h-screen bg-[#090708] text-white selection:bg-red-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* GLOWS AMBIENTAIS VERMELHOS E SUTIS */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-red-600/10 blur-[170px] z-0" />
      <div className="pointer-events-none fixed bottom-10 right-10 size-[500px] rounded-full bg-rose-800/10 blur-[150px] z-0" />

      {/* BARRA PROMOCIONAL DO TOPO */}
      <div className="fixed inset-x-0 top-0 z-[60]">
        <PromoBanner />
      </div>

      {/* HEADER COMPACTO VIDRO COM BLUR PREMIUM */}
      <header className="fixed inset-x-0 top-8 z-50 transition-all duration-300 [transform:translateZ(0)]">
        <div className="glass mx-auto mt-2 flex w-[94%] max-w-6xl items-center justify-between rounded-full px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.8)] border border-white/15 backdrop-blur-2xl bg-black/60">
          <Link to="/" className="flex items-center gap-3">
            <span className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 via-rose-700 to-red-900 shadow-[0_0_20px_rgba(220,38,38,0.7)]">
              <svg className="size-5 fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="font-display text-lg font-black tracking-wider text-white">
                UniTV <span className="text-red-500">Pro</span>
              </span>
            </div>
          </Link>

          {/* MENU DE NAVEGAÇÃO */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-white/80">
            <Link to="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <Link to="/catalogo" className="text-red-500 font-extrabold flex items-center gap-1.5">
              <Sparkles className="size-3.5" />
              Catálogo
            </Link>
            <Link to="/instalar" className="hover:text-white transition-colors">
              Como Instalar
            </Link>
            <Link to="/suporte" className="hover:text-white transition-colors">
              Suporte
            </Link>
          </nav>

          <a
            href="/#planos"
            className="btn-cta px-4 py-1.5 text-[11px] font-extrabold tracking-wide uppercase shadow-md"
          >
            TESTE GRÁTIS
          </a>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 mx-auto w-[94%] max-w-7xl pt-36 sm:pt-40 pb-20">
        {/* CABEÇALHO DA PÁGINA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-white/10 pb-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/40 px-3.5 py-1 text-xs font-extrabold tracking-wider text-red-400 uppercase mb-3">
              <Film className="size-3.5" /> Catálogo Unificado • {CATALOGO_UNIFICADO.length} Títulos
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Catálogo de <span className="text-red-500">Filmes de Terror</span>
            </h1>
            <p className="text-xs sm:text-sm text-white/70 mt-2 max-w-2xl leading-relaxed">
              Todos os maiores sucessos de terror, lançamentos 2026, terror coreano, japonês, indonésio e clássicos em alta qualidade.
            </p>
          </div>

          {/* BUSCA DE TÍTULOS */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-white/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar filme, ano ou estilo..."
              className="w-full rounded-2xl border border-white/15 bg-white/[0.05] py-2.5 pl-10 pr-9 text-xs sm:text-sm text-white placeholder-white/40 outline-none backdrop-blur-xl transition-all focus:border-red-500 focus:bg-black/80 shadow-lg"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
        </div>

        {/* FILTROS DE CATEGORIA EM BOTÕES SLIDER */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {[
            { id: "todos", label: "🎬 Todos os Filmes", count: CATALOGO_UNIFICADO.length },
            { id: "alta", label: "🔥 Em Alta (2026/2025)" },
            { id: "asiatico", label: "🎎 Terror Asiático" },
            { id: "coreano", label: "🇰🇷 Terror Coreano" },
            { id: "japones", label: "🇯🇵 Terror Japonês" },
            { id: "indonesio", label: "🇮🇩 Terror Indonésio" },
            { id: "classicos", label: "💀 Clássicos de Terror" },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`shrink-0 rounded-xl px-4 py-2 text-xs font-black transition-all cursor-pointer border ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-red-600 to-rose-700 text-white border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                  : "bg-white/[0.04] text-white/70 border-white/10 hover:border-white/25 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* ── GRADE UNIFICADA DE FILMES: EXATAMENTE 6 POR LINHA NO DESKTOP ──────── */}
        {filteredCatalog.length === 0 ? (
          <div className="py-20 text-center rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
            <Info className="mx-auto size-12 text-red-500/60 mb-3" />
            <h3 className="text-xl font-bold text-white">Nenhum filme encontrado</h3>
            <p className="text-xs text-white/60 mt-1">Tente buscar por outro termo ou selecione o filtro "Todos os Filmes".</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveFilter("todos");
              }}
              className="mt-5 rounded-xl bg-red-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-red-700 transition-colors shadow-lg"
            >
              Limpar Filtros e Busca
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4.5">
            {filteredCatalog.map((movie, index) => (
              <div
                key={`${movie.title}-${index}`}
                onClick={() => setSelectedMovie(movie)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 transition-all duration-300 hover:scale-105 hover:z-30 hover:shadow-[0_15px_35px_rgba(0,0,0,0.9)] hover:border-red-500/80 flex flex-col justify-between"
              >
                {/* SELOS DE DESTAQUE */}
                {movie.tag && (
                  <div className="absolute top-2 left-2 z-20 rounded-lg bg-red-600/90 px-2 py-0.5 text-[10px] font-black text-white shadow-md backdrop-blur-md uppercase tracking-wider">
                    {movie.tag}
                  </div>
                )}

                {/* NOTA RATING */}
                {movie.rating && (
                  <div className="absolute top-2 right-2 z-20 flex items-center gap-1 rounded-lg bg-black/80 px-2 py-0.5 text-[10px] font-black text-amber-400 border border-amber-400/30 backdrop-blur-md">
                    <Star className="size-2.5 fill-amber-400" />
                    {movie.rating}
                  </div>
                )}

                {/* IMAGEM DO POSTER COM FALLBACK ELEGANTE */}
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-neutral-900">
                  <MoviePoster movie={movie} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* ÍCONE DE PLAY NO HOVER */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <div className="flex size-12 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_0_25px_rgba(220,38,38,0.8)] scale-75 group-hover:scale-100 transition-transform">
                      <Play className="size-6 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* INFORMAÇÕES DO FILME */}
                <div className="p-3 bg-[#0e0c0d] flex flex-col justify-between grow">
                  <h3 className="text-xs sm:text-sm font-extrabold text-white leading-tight line-clamp-2 group-hover:text-red-400 transition-colors">
                    {movie.title}
                  </h3>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-white/50 font-medium">
                    <span>{movie.year}</span>
                    <span className="text-[10px] text-emerald-400 font-bold">Ultra HD 4K</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BANNER CTA DE TESTE GRÁTIS NO FINAL */}
        <div className="mt-16 rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-950/60 via-[#160c0e] to-red-950/60 p-8 sm:p-12 text-center backdrop-blur-xl shadow-[0_0_50px_rgba(220,38,38,0.2)]">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-600/20 px-4 py-1.5 text-xs font-black tracking-wider text-red-300 uppercase mb-4">
            <Sparkles className="size-4" /> Assista a Todos Esses Filmes no Seu Aparelho
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white max-w-2xl mx-auto leading-tight mb-3">
            Gostou do catálogo? <span className="text-red-500">Teste grátis por 3 dias!</span>
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Instale o UniTV Pro na sua Smart TV Android, TV Box, Mi Stick Xiaomi, FireTV, Celular Android ou Tablet e libere o acesso imediato.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/instalar"
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 px-8 py-4 text-xs sm:text-sm font-black text-white shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <Download className="size-5" />
              VER PASSO A PASSO DE INSTALAÇÃO
            </Link>
            <a
              href="https://wa.me/5561984016006?text=Quero%20testar%20o%20cat%C3%A1logo%20de%20terror%20por%203%20dias!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-8 py-4 text-xs sm:text-sm font-black text-white hover:bg-emerald-500 transition-all w-full sm:w-auto"
            >
              <ShieldCheck className="size-5" />
              FALAR NO WHATSAPP
            </a>
          </div>
        </div>
      </div>

      {/* MODAL AO CLICAR EM UM FILME */}
      {selectedMovie && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedMovie(null)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl border border-white/15 bg-[#120f11] p-6 sm:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.9)] text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-all cursor-pointer"
            >
              <X className="size-4" />
            </button>

            <div className="flex gap-4 items-start mb-5">
              <img
                src={img(selectedMovie.poster, "w342")}
                alt={selectedMovie.title}
                className="w-24 h-36 rounded-xl object-cover shadow-lg border border-white/10 shrink-0"
              />
              <div>
                {selectedMovie.tag && (
                  <span className="inline-block rounded-md bg-red-600/30 border border-red-500/40 px-2 py-0.5 text-[10px] font-black text-red-400 uppercase mb-2">
                    {selectedMovie.tag}
                  </span>
                )}
                <h3 className="text-lg font-black text-white leading-tight">{selectedMovie.title}</h3>
                <p className="text-xs text-white/60 mt-1 font-medium">Lançamento • {selectedMovie.year}</p>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                  <Star className="size-3.5 fill-amber-400" />
                  <span>{selectedMovie.rating || "4.9"} / 5.0 (Avaliação dos usuários)</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 mb-6">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold mb-1">
                <CheckCircle2 className="size-4" />
                <span>Disponível no UniTV Pro em 4K Ultra HD</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Este título faz parte do catálogo completo do UniTV Pro. Baixe o app e teste por 3 dias grátis sem compromisso.
              </p>
            </div>

            <div className="space-y-3">
              <Link
                to="/instalar"
                onClick={() => setSelectedMovie(null)}
                className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 py-3.5 text-xs font-black text-white shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:scale-[1.02] transition-transform"
              >
                <Download className="size-4" />
                BAIXAR APP E ASSISTIR GRÁTIS
              </Link>
              <a
                href={`https://wa.me/5561984016006?text=Quero%20assistir%20ao%20filme%20${encodeURIComponent(
                  selectedMovie.title
                )}%20no%20UniTV%20Pro`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 py-3 text-xs font-bold text-white hover:bg-white/20 transition-colors"
              >
                Pedir Teste no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
