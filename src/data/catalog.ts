export const img = (path: string, size = "w500") =>
  `https://image.tmdb.org/t/p/${size}${path}`;

export type Title = {
  title: string;
  poster: string;
  year: string;
  tag?: string;
};

/** Destaques do carrossel de fundo (lançamentos de terror reais - TMDB) */
export const heroSlides = [
  {
    title: "Obsessão",
    year: "2026",
    genre: "Terror / Suspense",
    backdrop: "/rZfmzpixLKLR3Hg2u0WgC7XLFl8.jpg",
    poster: "/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg",
  },
  {
    title: "Backrooms: Um Não-Lugar",
    year: "2026",
    genre: "Terror / Mistério",
    backdrop: "/dqmMWNWfLnExDRpMtIMqI97GQFR.jpg",
    poster: "/qEl4BDBTGnhLiadZx0c9nHM8vBF.jpg",
  },
  {
    title: "Undertone",
    year: "2026",
    genre: "Terror Psicológico",
    backdrop: "/4BSJVRQ3EsHMIVZSiKz1l58jDhg.jpg",
    poster: "/2PFgFMnrdCPXWiZl1PUvky7Mo9D.jpg",
  },
  {
    title: "Maldição da Múmia",
    year: "2026",
    genre: "Terror / Sobrenatural",
    backdrop: "/xugEpZk9YQ0DIz1aFvH5HGkqpZK.jpg",
    poster: "/fI6XBw8k5CWNwxLEYZwpjA89TPg.jpg",
  },
  {
    title: "Mestres do Universo",
    year: "2026",
    genre: "Ação / Aventura",
    backdrop: "/yQIdU11DYQQp0neGtGtGxbGfRer.jpg",
    poster: "/atpb7NKSyM4bJSUY8vQTunzK4Na.jpg",
  },
];

export const terror: Title[] = [
  { title: "Obsessão", poster: "/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg", year: "2026", tag: "Lançamento" },
  { title: "Backrooms: Um Não-Lugar", poster: "/qEl4BDBTGnhLiadZx0c9nHM8vBF.jpg", year: "2026", tag: "Lançamento" },
  { title: "Undertone", poster: "/2PFgFMnrdCPXWiZl1PUvky7Mo9D.jpg", year: "2026", tag: "Novo" },
  { title: "Maldição da Múmia", poster: "/fI6XBw8k5CWNwxLEYZwpjA89TPg.jpg", year: "2026", tag: "Lançamento" },
  { title: "Mestres do Universo", poster: "/atpb7NKSyM4bJSUY8vQTunzK4Na.jpg", year: "2026", tag: "Novo" },
  { title: "O Telefone Preto 2", poster: "/p3epSUdF9qSWWHTBlA3mJ0w2i2Y.jpg", year: "2025", tag: "Em alta" },
  { title: "A Substância", poster: "/vWeOgzlhnP1sS23H3rzctGHB9Nb.jpg", year: "2024" },
  { title: "Premonição 6: Laços de Sangue", poster: "/x3J781PsdMrjenzQKM5eJXqK5Nd.jpg", year: "2025" },
  { title: "Terrifier 3", poster: "/3HeKb5H89HjzWTkVkAqomu9mek.jpg", year: "2024" },
  { title: "Sorria 2", poster: "/ypHiYvSJmHIyRDRiosZuE595uir.jpg", year: "2024" },
  { title: "Faça Ela Voltar", poster: "/xfmnUz6C5WRboIMQZD0j3SNDT7v.jpg", year: "2025" },
];

export const animes: Title[] = [
  { title: "Demon Slayer: Castelo Infinito", poster: "/41XdjOXGQoH0HTDNqEfwKGvGgwm.jpg", year: "2025", tag: "#1 mais assistido" },
  { title: "Jujutsu Kaisen", poster: "/8R1mMSC1gX1cg5ed7ns49JOEqw3.jpg", year: "Série" },
  { title: "One Piece", poster: "/9ltisibeD4gzqjM1AzmQwCdyirQ.jpg", year: "Série" },
  { title: "Demon Slayer: Mugen Train", poster: "/q9Vmd2FmDoiPWsBymwweDkwM4md.jpg", year: "Filme" },
];

export const infantil: Title[] = [
  { title: "Bluey", poster: "/9p4pNoGcuyCfHcGWKNrTopqMWtq.jpg", year: "Série" },
  { title: "Patrulha Canina", poster: "/pQ0bBHR9Q3wurjNMjnqal0gJaYo.jpg", year: "Série" },
  { title: "Divertida Mente 2", poster: "/lHKNS35r4RTa9GO72vdadMLxoiV.jpg", year: "2024" },
  { title: "Moana 2", poster: "/dnqgkKoIGf6hErzRm6VtaK1OJrD.jpg", year: "2024" },
];

export const plataformas = [
  { nome: "Netflix", slug: "netflix", cor: "#E50914", preco: "R$ 59,90" },
  { nome: "Disney+", slug: "disneyplus", cor: "#0063E5", preco: "R$ 55,90" },
  { nome: "HBO Max", slug: "hbo", cor: "#8A2BE2", preco: "R$ 62,90" },
  { nome: "Prime Video", slug: "primevideo", cor: "#00A8E1", preco: "R$ 19,90" },
  { nome: "Apple TV+", slug: "appletv", cor: "#FFFFFF", preco: "R$ 21,90" },
  { nome: "Paramount+", slug: "paramountplus", cor: "#0064FF", preco: "R$ 19,90" },
  { nome: "Crunchyroll", slug: "crunchyroll", cor: "#F47521", preco: "R$ 29,90" },
  { nome: "Globoplay", slug: "globo", cor: "#FF4D4D", preco: "R$ 34,90" },
  { nome: "DAZN", slug: "dazn", cor: "#F8FF13", preco: "R$ 34,90" },
  { nome: "Star+", slug: "star", cor: "#FF6B00", preco: "R$ 39,90" },
  { nome: "Telecine", slug: "telecine", cor: "#00E0B8", preco: "R$ 44,95" },
  { nome: "Premiere", slug: "premiere", cor: "#00C853", preco: "R$ 89,90" },
];

export const icon = (slug: string) => `https://cdn.simpleicons.org/${slug}/white`;
