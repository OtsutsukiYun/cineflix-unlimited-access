import netflixLogo from "@/assets/logos/netflix.svg";
import primeLogo from "@/assets/logos/primevideo.svg";
import disneyLogo from "@/assets/logos/disneyplus.svg";
import hboLogo from "@/assets/logos/hbomax.svg";
import globoplayLogo from "@/assets/logos/globoplay.svg";
import paramountLogo from "@/assets/logos/paramountplus.svg";
import appletvLogo from "@/assets/logos/appletv.svg";
import crunchyrollLogo from "@/assets/logos/crunchyroll.svg";
import daznLogo from "@/assets/logos/dazn.svg";
import starLogo from "@/assets/logos/starplus.svg";
import telecineLogo from "@/assets/logos/telecine.svg";
import premiereLogo from "@/assets/logos/premiere.svg";
import claroLogo from "@/assets/logos/clarotv.svg";
import combateLogo from "@/assets/logos/combate.svg";

export const img = (path: string, size = "w500") =>
  `https://image.tmdb.org/t/p/${size}${path}`;

export type HeroSlide = {
  title: string;
  year: string;
  genre: string;
  tagline: string;
  backdrop: string;
  poster: string;
  objectPosition?: string;
  objectPositionMobile?: string;
  brightness?: string;
};

export type Title = {
  title: string;
  poster: string;
  year: string;
  tag?: string;
  rating?: string;
};

/** Destaques do carrossel de fundo (lançamentos de terror reais - TMDB) */
export const heroSlides: HeroSlide[] = [
  {
    title: "Obsessão",
    year: "2026",
    genre: "Terror / Suspense",
    tagline: "Quando o desejo se torna um pesadelo sem saída.",
    backdrop: "/r013C8Me2bZ0pUi0OWJRh0h7MzT.jpg",
    poster: "/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg",
    objectPosition: "center 18%",
    objectPositionMobile: "50% 12%",
    brightness: "brightness(1.15)",
  },
  {
    title: "Undertone",
    year: "2026",
    genre: "Terror Psicológico",
    tagline: "Existe um som que não deveria ser ouvido.",
    backdrop: "/6SDxrzyfGyCQvDwTfNbcajzrSwh.jpg",
    poster: "/2PFgFMnrdCPXWiZl1PUvky7Mo9D.jpg",
    objectPosition: "center 25%",
    objectPositionMobile: "50% 20%",
  },
  {
    title: "Passageiro do Mal",
    year: "2026",
    genre: "Terror / Suspense",
    tagline: "Depois de um acidente na estrada, uma força maligna não os deixará em paz.",
    backdrop: "/3pDfu71mrzSuFYyIfnKEjt8z4BC.jpg",
    poster: "/2sOEJzhPzjTkZSlPbGxOJ7xgIyS.jpg",
    objectPosition: "center 20%",
    objectPositionMobile: "63% 15%",
  },
  {
    title: "Hokum",
    year: "2026",
    genre: "Terror / Sobrenatural",
    tagline: "Segredos sombrios despertam na hospedaria amaldiçoada.",
    backdrop: "/qY7zVZ7liULhfRoXg4c9Xl83LcR.jpg",
    poster: "/x6rHcQFiYcczLQPrmxXPAicm54E.jpg",
    objectPosition: "center 15%",
    objectPositionMobile: "50% 12%",
  },
  {
    title: "Origem (FROM)",
    year: "Série",
    genre: "Série de Terror / Mistério",
    tagline: "Uma cidade sem saída onde o mal se esconde na noite.",
    backdrop: "/xLdw1xdHocKYFFvx7w41NchXMfJ.jpg",
    poster: "/pRtJagIxpfODzzb0T0NAvZSzErC.jpg",
    objectPosition: "center 20%",
    objectPositionMobile: "50% 15%",
    brightness: "brightness(0.72)",
  },
  {
    title: "Backrooms: Um Não-Lugar",
    year: "2026",
    genre: "Terror / Mistério",
    tagline: "O labirinto infinito além dos limites da realidade.",
    backdrop: "/wjwMC7u3xWKkrronolBqsIy4L0L.jpg",
    poster: "/qEl4BDBTGnhLiadZx0c9nHM8vBF.jpg",
    objectPosition: "45% 20%",
    objectPositionMobile: "45% 15%",
  },
  {
    title: "Channel Zero",
    year: "Série",
    genre: "Série de Terror Psicológico",
    tagline: "O medo ganha vida a cada episódio macabro.",
    backdrop: "/cVQXO6EpAaYLp14037tXyqfsSy3.jpg",
    poster: "/oCutmhFznao1Pzy6wM1C32kxAEu.jpg",
    objectPosition: "center 20%",
    objectPositionMobile: "50% 15%",
  },
  {
    title: "O Segredo de Widow's Bay",
    year: "2026",
    genre: "Série de Terror / Mistério",
    tagline: "Uma cidade amaldiçoada onde os segredos do passado voltam à tona.",
    backdrop: "/u6XtMg9Ai9siEbEs0UudPS3EaZY.jpg",
    poster: "/vKq8XEJKxQTHd2Bm5zZMFPUrke7.jpg",
    objectPosition: "center 20%",
    objectPositionMobile: "50% 15%",
  },
];

export const terror: Title[] = [
  { title: "Obsessão", poster: "/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg", year: "2026", tag: "🔥 Mais assistido", rating: "5.0" },
  { title: "Backrooms: Um Não-Lugar", poster: "/qEl4BDBTGnhLiadZx0c9nHM8vBF.jpg", year: "2026", tag: "Lançamento 2026", rating: "4.9" },
  { title: "Undertone", poster: "/2PFgFMnrdCPXWiZl1PUvky7Mo9D.jpg", year: "2026", tag: "Novo", rating: "4.8" },
  { title: "Hokum", poster: "/fn5QNtG3LLXC3e7ZTQDYP92kFYc.jpg", year: "2026", tag: "Lançamento 2026", rating: "4.7" },
  { title: "A Maldição da Múmia", poster: "/fI6XBw8k5CWNwxLEYZwpjA89TPg.jpg", year: "2026", tag: "Lançamento", rating: "4.7" },
  { title: "A Boca do Diabo", poster: "/lH8k9uCWYn2b2gsYleqYBDPbWa8.jpg", year: "2026", tag: "Novo", rating: "4.5" },
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
  { title: "O Chamado", poster: "/AeRpUynJKDpJveklBJipOYrVxCS.jpg", year: "2002", tag: "Clássico Anos 2000" },
  { title: "Jogos Mortais", poster: "/rLNSOudrayDBo1uqXjrhxcjODIC.jpg", year: "2004", tag: "Clássico Anos 2000" },
  { title: "O Grito", poster: "/7vPAVPKYexQVmvC578wPLn2CGCL.jpg", year: "2004", tag: "Clássico Anos 2000" },
  { title: "Premonição", poster: "/1mXhlQMnlfvJ2frxTjZSQNnA9Vp.jpg", year: "2000", tag: "Clássico Anos 2000" },
  { title: "Madrugada dos Mortos", poster: "/ttquyxStEEctzghtA2f4PUGprDr.jpg", year: "2004", tag: "Clássico Anos 2000" },
  { title: "Extermínio", poster: "/sQckQRt17VaWbo39GIu0TMOiszq.jpg", year: "2002", tag: "Clássico Anos 2000" },
  { title: "Silent Hill", poster: "/r0bEDWO2w4a43K2xTNSF284qOsc.jpg", year: "2006", tag: "Clássico Anos 2000" },
  { title: "O Albergue", poster: "/dDrtuWUKhgUGp12kgUWuP0NpTdF.jpg", year: "2005", tag: "Clássico Anos 2000" },
  { title: "Arraste-me para o Inferno", poster: "/fdyejM5Zd6dsa0YyWa02ZAKwQzK.jpg", year: "2009", tag: "Clássico Anos 2000" },
  { title: "Olhos Famintos", poster: "/g410Y1U1ELbmJG14Zru3UAimm1G.jpg", year: "2001", tag: "Clássico Anos 2000" },
  { title: "A Bruxa de Blair", poster: "/jAKX4midH0vSm2XT54g5TWluQqw.jpg", year: "1999" },
];

export const series: Title[] = [
  { title: "Cabo do Medo", poster: "/2gi4vszQOpVsB33FDgt000VIQMo.jpg", year: "2026", tag: "Lançamento" },
  { title: "O Segredo de Widow's Bay", poster: "/hazWZ75ml5Er3MQsFetIzoeWs99.jpg", year: "2026", tag: "Novo" },
  { title: "Origem (From)", poster: "/eK9ZDIq7gPFRJ0GGaWvgrXLZgXX.jpg", year: "Série" },
  { title: "IT: Bem-Vindos a Derry", poster: "/gMTfrLvrDaD0zrhpLZ7zXIIpKfJ.jpg", year: "2025", tag: "Em alta" },
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
  { title: "Frieren e a Jornada para o Além", poster: "/dqZENchTd7lp5zht7BdlqM7RBhD.jpg", year: "Série", tag: "Em alta" },
  { title: "Jujutsu Kaisen", poster: "/8R1mMSC1gX1cg5ed7ns49JOEqw3.jpg", year: "Série" },
  { title: "Solo Leveling", poster: "/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg", year: "Série" },
  { title: "One Piece", poster: "/9ltisibeD4gzqjM1AzmQwCdyirQ.jpg", year: "Série", rating: "5.0" },
  { title: "One-Punch Man", poster: "/dT10AxJIXVvRwFAew4tt2RhzJrD.jpg", year: "Série" },
  { title: "Attack on Titan", poster: "/8aMqmB5xSblsZc7bLMEhE28yHa2.jpg", year: "Série" },
  { title: "Chainsaw Man", poster: "/iFM1dyFi0rByvEomEkmm7NpQeeb.jpg", year: "Série" },
  { title: "Dan Da Dan", poster: "/vtQug1eOyeU2VXIpNoDF1lTlcH4.jpg", year: "Série" },
  { title: "Sakamoto Days", poster: "/wRpCqsJFyKNuh5FMegNPrhzp2NF.jpg", year: "Série" },
  { title: "Kaiju No. 8", poster: "/bJxGs0w5RAhaX4fIUQu511rvm0S.jpg", year: "Série" },
  { title: "Spy x Family", poster: "/7NAvPYPAu7MeHwP8E9sn81PqsRh.jpg", year: "Série" },
  { title: "My Hero Academia", poster: "/cfESQ8y8oNAeLuRbs7NkW7Qjwhy.jpg", year: "Série" },
  { title: "Blue Lock", poster: "/fcKH1NQzoTXiYO1OrhaFFwTKhBp.jpg", year: "Série" },
  { title: "Dragon Ball Daima", poster: "/qlLJvJO8rsltmnWWbKgT13hP90I.jpg", year: "Série" },
  { title: "Tokyo Revengers", poster: "/XbjlgUJknGCv7cNuinxdaFUFNt.jpg", year: "Série" },
  { title: "Naruto Shippuden", poster: "/nRJmByfK9XdtOY73VArcN8KpKVs.jpg", year: "Série" },
  { title: "Bleach", poster: "/dx28DE7EgLy0FatOvnaUg0k9j92.jpg", year: "Série" },
  { title: "Hunter x Hunter", poster: "/eobAuhCJA8oRp814V67WhezVXtQ.jpg", year: "Série" },
  { title: "Death Note", poster: "/tCZFfYTIwrR7n94J6G14Y4hAFU6.jpg", year: "Série" },
];

export const infantil: Title[] = [
  { title: "Bluey", poster: "/9p4pNoGcuyCfHcGWKNrTopqMWtq.jpg", year: "Série" },
  { title: "Patrulha Canina", poster: "/pQ0bBHR9Q3wurjNMjnqal0gJaYo.jpg", year: "Série" },
  { title: "Divertida Mente 2", poster: "/lHKNS35r4RTa9GO72vdadMLxoiV.jpg", year: "2024" },
  { title: "Moana 2", poster: "/dnqgkKoIGf6hErzRm6VtaK1OJrD.jpg", year: "2024" },
  { title: "Zootopia 2", poster: "/sOgzzmyHJ3uWjEU509AwrcXoE71.jpg", year: "2025", tag: "Novo" },
  { title: "Mufasa: O Rei Leão", poster: "/iMVuv6Gz5fj7vZ51IjRF3AiW87y.jpg", year: "2024" },
  { title: "Meu Malvado Favorito 4", poster: "/s8BefU3RIJrfipTpsDtOiatlp8j.jpg", year: "2024" },
  { title: "Sonic 3: O Filme", poster: "/tfM1T6tAivjvy0sLwt6Y9WvlmzB.jpg", year: "2024" },
  { title: "Toy Story 4", poster: "/csiyO6q8rR74pfgJDjwINzhoick.jpg", year: "2019" },
  { title: "Vida de Inseto", poster: "/vvlbdBCuLt7nkQG7anNE6xHNbAO.jpg", year: "1998" },
  { title: "Bob Esponja", poster: "/yXrtQINkVRyNmfUQFyVG2LuoTqm.jpg", year: "Série" },
  { title: "Peppa Pig", poster: "/iVaiv0S34JnRKHnYkEiObOI15k5.jpg", year: "Série" },
  { title: "Masha e o Urso", poster: "/ze2ocNwb3d2R3DLmzdL7kNFrx50.jpg", year: "Série" },
  { title: "A Casa do Mickey Mouse", poster: "/4vNQVFa4icNSphODjw1wFXTfDcJ.jpg", year: "Série" },
  { title: "Turma da Mônica", poster: "/jsI9PztwfMBE9LyJqPkWJOAvHD6.jpg", year: "Série" },
  { title: "Miraculous: Ladybug", poster: "/24wf3O8SJeUSJJvDowQR5FDgHGO.jpg", year: "Série" },
  { title: "Octonautas", poster: "/iYUhUSKWKpSBahaWLUQIPckAy8p.jpg", year: "Série" },
  { title: "Pocoyo", poster: "/1fmaC3t96Napg7TR9SsfOX8q11X.jpg", year: "Série" },
  { title: "Gravity Falls", poster: "/21WVSbe9BB3GYnlxr4UF9H4DmO6.jpg", year: "Série" },
];

export type Plataforma = {
  nome: string;
  logo: string;
  cor: string;
  preco: string;
  glowColor: string;
};

export const plataformas: Plataforma[] = [
  { nome: "Netflix", logo: netflixLogo, cor: "#E50914", preco: "R$ 20,90", glowColor: "rgba(229, 9, 20, 0.45)" },
  { nome: "Disney+", logo: disneyLogo, cor: "#38BDF8", preco: "R$ 20,90", glowColor: "rgba(56, 189, 248, 0.45)" },
  { nome: "HBO Max", logo: hboLogo, cor: "#A855F7", preco: "R$ 22,90", glowColor: "rgba(168, 85, 247, 0.45)" },
  { nome: "Prime Video", logo: primeLogo, cor: "#00A8E1", preco: "R$ 19,90", glowColor: "rgba(0, 168, 225, 0.45)" },
  { nome: "Apple TV+", logo: appletvLogo, cor: "#FFFFFF", preco: "R$ 29,90", glowColor: "rgba(255, 255, 255, 0.35)" },
  { nome: "Paramount+", logo: paramountLogo, cor: "#0064FF", preco: "R$ 34,90", glowColor: "rgba(0, 100, 255, 0.45)" },
  { nome: "Premiere", logo: premiereLogo, cor: "#00E676", preco: "R$ 29,90", glowColor: "rgba(0, 230, 118, 0.45)" },
  { nome: "Crunchyroll", logo: crunchyrollLogo, cor: "#F47521", preco: "R$ 19,90", glowColor: "rgba(244, 117, 33, 0.45)" },
  { nome: "Claro TV+", logo: claroLogo, cor: "#E50914", preco: "R$ 99,90", glowColor: "rgba(229, 9, 20, 0.45)" },
  { nome: "Combate", logo: combateLogo, cor: "#FF2D55", preco: "R$ 34,90", glowColor: "rgba(255, 45, 85, 0.45)" },
  { nome: "Globoplay", logo: globoplayLogo, cor: "#FF5C5C", preco: "R$ 22,90", glowColor: "rgba(255, 92, 92, 0.45)" },
  { nome: "Telecine", logo: telecineLogo, cor: "#00E5FF", preco: "R$ 29,90", glowColor: "rgba(0, 229, 255, 0.45)" },
];

export const icon = (slug: string) => `https://cdn.simpleicons.org/${slug}/white`;
