import netflixLogo from "@/assets/logos/netflix.svg";
import primeLogo from "@/assets/logos/primevideo.svg";
import disneyLogo from "@/assets/logos/disneyplus.svg";
import hboLogo from "@/assets/logos/hbomax.svg";
import globoplayLogo from "@/assets/logos/globoplay.svg";
import paramountLogo from "@/assets/logos/paramountplus.svg";
import appletvLogo from "@/assets/logos/appletv.svg";
import crunchyrollLogo from "@/assets/logos/crunchyroll.svg";
import daznLogo from "@/assets/logos/dazn.svg";

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
    backdrop: "/4k99kV4R1bbbrsnjR205v91Xbin.jpg",
    poster: "/s0LjkFRyBNTXXkLbHrVLvUOtUMD.jpg",
  },
  {
    title: "Backrooms: Um Não-Lugar",
    year: "2026",
    genre: "Terror / Mistério",
    backdrop: "/dqmMWNWfLnExDRpMtIMqI97GQFR.jpg",
    poster: "/4jRhhI1fgYsGi1vB0iVgBfWLeV4.jpg",
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
    title: "Passageiro do Mal",
    year: "2025",
    genre: "Terror / Suspense",
    backdrop: "/3pDfu71mrzSuFYyIfnKEjt8z4BC.jpg",
    poster: "/2sOEJzhPzjTkZSlPbGxOJ7xgIyS.jpg",
  },
];

export const terror: Title[] = [
  { title: "Obsessão", poster: "/s0LjkFRyBNTXXkLbHrVLvUOtUMD.jpg", year: "2026", tag: "Lançamento" },
  { title: "Backrooms: Um Não-Lugar", poster: "/4jRhhI1fgYsGi1vB0iVgBfWLeV4.jpg", year: "2026", tag: "Lançamento" },
  { title: "Undertone", poster: "/2PFgFMnrdCPXWiZl1PUvky7Mo9D.jpg", year: "2026", tag: "Novo" },
  { title: "Maldição da Múmia", poster: "/fI6XBw8k5CWNwxLEYZwpjA89TPg.jpg", year: "2026", tag: "Lançamento" },
  { title: "Hokum: O Pesadelo da Bruxa", poster: "/fn5QNtG3LLXC3e7ZTQDYP92kFYc.jpg", year: "2026", tag: "Lançamento" },
  { title: "Passageiro do Mal", poster: "/2sOEJzhPzjTkZSlPbGxOJ7xgIyS.jpg", year: "2025", tag: "Novo" },
  { title: "A Hora do Mal", poster: "/psEJSjQr6I9GSJTdW28CKC4Kffs.jpg", year: "2025", tag: "Em alta" },
  { title: "Pecadores", poster: "/v0Ljeti537c6cNKweuEN0iaU3x4.jpg", year: "2025", tag: "Em alta" },
  { title: "Invocação do Mal 4: O Último Ritual", poster: "/40nHGUfypLhlr7gJx8At1IbYkaK.jpg", year: "2025" },
  { title: "O Telefone Preto 2", poster: "/p3epSUdF9qSWWHTBlA3mJ0w2i2Y.jpg", year: "2025" },
  { title: "Faça Ela Voltar", poster: "/xfmnUz6C5WRboIMQZD0j3SNDT7v.jpg", year: "2025" },
  { title: "Premonição 6: Laços de Sangue", poster: "/x3J781PsdMrjenzQKM5eJXqK5Nd.jpg", year: "2025" },
  { title: "Five Nights at Freddy's 2", poster: "/12H82Xrr2ijDF0lJWUarqGFV7bC.jpg", year: "2025" },
  { title: "Rua do Medo: Rainha do Baile", poster: "/skwydfnpaQdRQZfXMroh59FMJyY.jpg", year: "2025" },
  { title: "O Macaco", poster: "/2jME1L29XGE3T4f0zUHgpiKsPrV.jpg", year: "2025" },
  { title: "Acompanhante Perfeita", poster: "/7LbrEQvturE05hljvTCWST7rLQL.jpg", year: "2025" },
  { title: "Predador: Terras Selvagens", poster: "/f3yLlUrJDdDL8d4nxywyotN45SL.jpg", year: "2025" },
  { title: "A Morte de um Unicórnio", poster: "/yViLU5fnT4r6sGRMFfgQ0KrFYR8.jpg", year: "2025" },
  { title: "Nosferatu", poster: "/fbkUfzmVzEBFSt6p7VigknREIJT.jpg", year: "2024" },
  { title: "Herege", poster: "/j5e2YS1PRUVC1YgSool0JJyNLxJ.jpg", year: "2024" },
  { title: "A Substância", poster: "/vWeOgzlhnP1sS23H3rzctGHB9Nb.jpg", year: "2024" },
  { title: "Terrifier 3", poster: "/3HeKb5H89HjzWTkVkAqomu9mek.jpg", year: "2024" },
  { title: "Sorria 2", poster: "/ypHiYvSJmHIyRDRiosZuE595uir.jpg", year: "2024" },
  { title: "Longlegs - Vínculo Mortal", poster: "/uURBOrqLFyU8iKODcI3t2Xkbhqs.jpg", year: "2024" },
  { title: "Abigail", poster: "/5gKKSoD3iezjoL7YqZONjmyAiRA.jpg", year: "2024" },
  { title: "Imaculada", poster: "/6EYfWxIGPc23m1GFs9Gt3kzTl5O.jpg", year: "2024" },
  { title: "A Primeira Profecia", poster: "/zppeHKLHljU2uI7NBJ1JyDNpn6L.jpg", year: "2024" },
  { title: "Alien: Romulus", poster: "/jB0W9tn4w07MFn7sTfqRTBLVytF.jpg", year: "2024" },
  { title: "Um Lugar Silencioso: Dia Um", poster: "/pN9BtzUeqPIKybAu9baihz6YzyO.jpg", year: "2024" },
  { title: "Sobrenatural: A Porta Vermelha", poster: "/6lp4uDxLqLEw1CzW1SUOYJ3zdKD.jpg", year: "2023" },
  { title: "O Exorcista do Papa", poster: "/hqIIoGsKKGWK7HjpgCSvV6mgKyT.jpg", year: "2023" },
  { title: "A Freira 2", poster: "/omV2IW2OlFTSw6Hih13hz6lFdvP.jpg", year: "2023" },
  { title: "Terrifier 2", poster: "/nocx1g4AwO4HyyuWF5gnM5WjGJL.jpg", year: "2022" },
  { title: "O Telefone Preto", poster: "/aAdnNifQo2qxDYnuDD3blsxinH1.jpg", year: "2022" },
  { title: "Sorria", poster: "/3LfJ1kQZv6OX687rJMOAMzFJlc9.jpg", year: "2022" },
  { title: "Noites Brutais", poster: "/mXsvEjsWLvco0hLfhe5FgwmY3qg.jpg", year: "2022" },
  { title: "Não! Não Olhe!", poster: "/eyOw2kAOad2MNVsjMFmfzavB51h.jpg", year: "2022" },
  { title: "Halloween Ends", poster: "/3uDwqxbr0j34rJVJMOW6o8Upw5W.jpg", year: "2022" },
  { title: "A Casa Sombria", poster: "/sDbo3qnxxMnC1f4RMfmUlcKNNST.jpg", year: "2021" },
  { title: "Midsommar", poster: "/hR4dXPlWq5Nekwjqbp3gFGeiiZS.jpg", year: "2019" },
  { title: "Hereditário", poster: "/wonYMeHauhrxSi5UTOtj5L479mS.jpg", year: "2018" },
  { title: "A Maldição da Casa Winchester", poster: "/oMS8uz4DrQoP2OU0MHr7KGFdpww.jpg", year: "2018" },
  { title: "Corra!", poster: "/A0RoSZh8PEYJgDMgM2EV7Ycz3dR.jpg", year: "2017" },
  { title: "Atividade Paranormal", poster: "/jV5eAsOTf7zsL4glY51gTW6Vb05.jpg", year: "2007" },
  { title: "[REC]", poster: "/nfbO00NKXSzBIzcN3KbUMdPT1EU.jpg", year: "2007" },
  { title: "A Bruxa de Blair", poster: "/jAKX4midH0vSm2XT54g5TWluQqw.jpg", year: "1999" },
];

export const series: Title[] = [
  { title: "Cabo do Medo", poster: "/2gi4vszQOpVsB33FDgt000VIQMo.jpg", year: "2026", tag: "Lançamento" },
  { title: "IT: Bem-Vindos a Derry", poster: "/gMTfrLvrDaD0zrhpLZ7zXIIpKfJ.jpg", year: "2025", tag: "Em alta" },
  { title: "O Segredo de Widow's Bay", poster: "/hazWZ75ml5Er3MQsFetIzoeWs99.jpg", year: "2026", tag: "Novo" },
  { title: "Origem (From)", poster: "/eK9ZDIq7gPFRJ0GGaWvgrXLZgXX.jpg", year: "Série" },
  { title: "Channel Zero", poster: "/oCutmhFznao1Pzy6wM1C32kxAEu.jpg", year: "Série" },
  { title: "The Terror", poster: "/fUVn5mScv83FfwrRUUR694yA7bd.jpg", year: "Série" },
  { title: "A Maldição da Residência Hill", poster: "/mQQGdDgn4WpUL9PXssHecWkjfi1.jpg", year: "Série" },
  { title: "A Maldição da Mansão Bly", poster: "/V6Zy46oHLDSvL3ITh94NbL4OEo.jpg", year: "Série" },
  { title: "A Queda da Casa de Usher", poster: "/b5MzNAgs1baKi32ln3yQoaKIsgZ.jpg", year: "Série" },
  { title: "Missa da Meia-Noite", poster: "/rka8ibtD6HayiEJmb6rns47lyAL.jpg", year: "Série" },
  { title: "Marianne", poster: "/hpeaMzflHMEepUGiCjXld7lrnC2.jpg", year: "Série" },
  { title: "Evil: Contatos Sobrenaturais", poster: "/2gyQRudrRU276fvkXMq4JNq3hzB.jpg", year: "Série" },
  { title: "Yellowjackets", poster: "/xRnGrn7Z7SC0KIBodocoU1QgDZF.jpg", year: "Série" },
  { title: "American Horror Story", poster: "/x2c3AvZeTyNehRZXabTojAxfDuR.jpg", year: "Série" },
  { title: "Chucky", poster: "/sdCJbGkvnIsIKLxaFQrviriODVq.jpg", year: "Série" },
  { title: "Eles (Them)", poster: "/qo8fpes33rSCjaqbpo85lmFSqQj.jpg", year: "Série" },
  { title: "Castle Rock", poster: "/6dnUpv9ghx84pgxlMOb4uuJrWDs.jpg", year: "Série" },
  { title: "Servant", poster: "/aMLUWhLtpSo45ibaWvE7ws3iyy7.jpg", year: "Série" },
  { title: "Arquivo 81", poster: "/as0QIRSbRCOE1nr6CZyOJmqQ1z3.jpg", year: "Série" },
  { title: "O Gabinete de Curiosidades", poster: "/sxMMOIuV99LOwcJICx1Wy4O8fgi.jpg", year: "Série" },
  { title: "The Last of Us", poster: "/el1KQzwdIm17I3A6cYPfsVIWhfX.jpg", year: "Série" },
  { title: "Lovecraft Country", poster: "/fz7bdjxPColvEWCGr5Kiclzc86d.jpg", year: "Série" },
  { title: "Stranger Things", poster: "/twfKp60THrcOIep9sjHODOOfO8d.jpg", year: "Série" },
  { title: "The Walking Dead", poster: "/9lb02gTh4LLB17yAEXFd4C3R4JP.jpg", year: "Série" },
  { title: "Fear the Walking Dead", poster: "/lKIhibYjzmpr8KQTYNEcwtUne5S.jpg", year: "Série" },
  { title: "Wandinha", poster: "/7rxiQrZjrer0RB9qNA8rHYFo53R.jpg", year: "Série" },
  { title: "Round 6", poster: "/6gcHdboppvplmBWxvROc96NJnmm.jpg", year: "Série" },
  { title: "Motel Bates", poster: "/qlVLk28uGOwVHqxSZlakdRyGMdU.jpg", year: "Série" },
  { title: "Penny Dreadful", poster: "/hQSdrXBYTbLGHYDIseHkBOPXTgL.jpg", year: "Série" },
];

export const animes: Title[] = [
  { title: "Demon Slayer: Castelo Infinito", poster: "/41XdjOXGQoH0HTDNqEfwKGvGgwm.jpg", year: "2025", tag: "#1 mais assistido" },
  { title: "Jujutsu Kaisen", poster: "/8R1mMSC1gX1cg5ed7ns49JOEqw3.jpg", year: "Série" },
  { title: "One Piece", poster: "/9ltisibeD4gzqjM1AzmQwCdyirQ.jpg", year: "Série" },
  { title: "Demon Slayer: Mugen Train", poster: "/q9Vmd2FmDoiPWsBymwweDkwM4md.jpg", year: "Filme" },
  { title: "Attack on Titan", poster: "/8aMqmB5xSblsZc7bLMEhE28yHa2.jpg", year: "Série" },
  { title: "Chainsaw Man", poster: "/iFM1dyFi0rByvEomEkmm7NpQeeb.jpg", year: "Série" },
  { title: "Solo Leveling", poster: "/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg", year: "Série", tag: "Em alta" },
  { title: "Dan Da Dan", poster: "/vtQug1eOyeU2VXIpNoDF1lTlcH4.jpg", year: "Série" },
  { title: "Sakamoto Days", poster: "/wRpCqsJFyKNuh5FMegNPrhzp2NF.jpg", year: "Série" },
  { title: "Kaiju No. 8", poster: "/bJxGs0w5RAhaX4fIUQu511rvm0S.jpg", year: "Série" },
  { title: "Spy x Family", poster: "/7NAvPYPAu7MeHwP8E9sn81PqsRh.jpg", year: "Série" },
  { title: "My Hero Academia", poster: "/cfESQ8y8oNAeLuRbs7NkW7Qjwhy.jpg", year: "Série" },
  { title: "Blue Lock", poster: "/fcKH1NQzoTXiYO1OrhaFFwTKhBp.jpg", year: "Série" },
  { title: "Frieren e a Jornada para o Além", poster: "/d9IuDqPWoUYukwblQhqV00jlCzZ.jpg", year: "Série" },
  { title: "Dragon Ball Daima", poster: "/qlLJvJO8rsltmnWWbKgT13hP90I.jpg", year: "Série" },
  { title: "Tokyo Revengers", poster: "/XbjlgUJknGCv7cNuinxdaFUFNt.jpg", year: "Série" },
  { title: "Naruto Shippuden", poster: "/nRJmByfK9XdtOY73VArcN8KpKVs.jpg", year: "Série" },
  { title: "Bleach", poster: "/dx28DE7EgLy0FatOvnaUg0k9j92.jpg", year: "Série" },
  { title: "Hunter x Hunter", poster: "/eobAuhCJA8oRp814V67WhezVXtQ.jpg", year: "Série" },
  { title: "Death Note", poster: "/tCZFfYTIwrR7n94J6G14Y4hAFU6.jpg", year: "Série" },
];

export type Plataforma = {
  nome: string;
  logo: string | null;
  invert?: boolean;
  escala?: number;
  cor: string;
  preco: string;
};

export const plataformas: Plataforma[] = [
  { nome: "Netflix", logo: netflixLogo, cor: "#E50914", preco: "R$ 59,90" },
  { nome: "Disney+", logo: disneyLogo, invert: true, cor: "#4BA3FF", preco: "R$ 55,90" },
  { nome: "HBO Max", logo: hboLogo, cor: "#A855F7", preco: "R$ 62,90" },
  { nome: "Prime Video", logo: primeLogo, cor: "#38BDF8", preco: "R$ 19,90" },
  { nome: "Apple TV+", logo: appletvLogo, invert: true, cor: "#FFFFFF", preco: "R$ 21,90" },
  { nome: "Paramount+", logo: paramountLogo, cor: "#4C8DFF", preco: "R$ 19,90" },
  { nome: "Crunchyroll", logo: crunchyrollLogo, cor: "#F47521", preco: "R$ 29,90" },
  { nome: "Globoplay", logo: globoplayLogo, cor: "#FF5C5C", preco: "R$ 34,90" },
  { nome: "DAZN", logo: daznLogo, cor: "#F8FF13", preco: "R$ 34,90" },
  { nome: "Star+", logo: null, cor: "#FF8A3D", preco: "R$ 39,90" },
  { nome: "Telecine", logo: null, cor: "#2DE0C0", preco: "R$ 44,95" },
  { nome: "Premiere", logo: null, cor: "#4ADE80", preco: "R$ 89,90" },
];

export const icon = (slug: string) => `https://cdn.simpleicons.org/${slug}/white`;
