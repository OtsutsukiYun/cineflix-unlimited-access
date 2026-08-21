import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Search,
  X,
  Play,
  Sparkles,
  Info,
  Film,
  Download,
  ShieldCheck,
  CheckCircle2,
  Star,
} from "lucide-react";
import { img, Title } from "@/data/catalog";
import { PromoBanner } from "@/components/PromoBanner";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo Completo — UniTV Pro" },
      {
        name: "description",
        content:
          "Catálogo completo de filmes de terror do UniTV Pro: lançamentos 2026 em primeiro, terror asiático (Japão, Indonésia, Coreia, Taiwan), filmes turcos (Siccin, Dabbe), New French Extremity e clássicos.",
      },
    ],
  }),
  component: CatalogoPage,
});

/**
 * Catálogo unificado de terror do UniTV Pro (6 por linha no desktop).
 * Floating navbar glass pill padrão do UniTV Pro.
 * Fundo escuro premium (#0d090b) com glow vermelho.
 * Sem botões de categorias.
 * Sem selo 4k.
 * Sem animes.
 * Lançamentos 2026/2025 no topo!
 * Filmes turcos, japoneses, indonésios e New French Extremity intercalados naturalmente.
 */
const CATALOGO_UNIFICADO: Title[] = [
  // ── LANÇAMENTOS 2026 / 2025 EM PRIMEIRO ─────────────────────────────────
  { title: "Obsessão", poster: "/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg", year: "2026", tag: "🔥 Top 1", rating: "5.0" },
  { title: "Evil Dead Burn: A Morte do Demônio", poster: "/uRxrNXQWkHoENm3nwVOZDYSCx2F.jpg", year: "2026", tag: "🔥 Top 2", rating: "5.0" },
  { title: "Leviticus", poster: "/5M2dI8TJeRNY3Aeidhp3Ujrb3aI.jpg", year: "2026", tag: "🔥 Top 3", rating: "4.9" },
  { title: "Colony (A Colônia)", poster: "/tN799oUR0f1gUKDYdMNrDaY7I51.jpg", year: "2026", tag: "🔥 Lançamento 2026", rating: "4.9" },
  { title: "The Queen of Black Magic", poster: "/tQOBVQjXiBGstCGYvzmgm97EkMF.jpg", year: "2019", tag: "Terror Indonésio", rating: "4.8" },
  { title: "House of Sayuri (A Casa de Sayuri)", poster: "/b3ZlT121rjvwtUfmyF83hZ5n6te.jpg", year: "2024", tag: "Terror Japonês 2024", rating: "4.9" },

  { title: "Hokum", poster: "/fn5QNtG3LLXC3e7ZTQDYP92kFYc.jpg", year: "2026", tag: "Lançamento 2026", rating: "4.7" },
  { title: "A Maldição da Múmia", poster: "/fI6XBw8k5CWNwxLEYZwpjA89TPg.jpg", year: "2026", tag: "Lançamento 2026", rating: "4.7" },
  { title: "A Boca do Diabo", poster: "/lH8k9uCWYn2b2gsYleqYBDPbWa8.jpg", year: "2026", tag: "Novo 2026", rating: "4.5" },
  { title: "Omukade", poster: "/rB495nxugPfNlBmFDUjN5kaTy90.jpg", year: "2026", tag: "Terror Asiático 2026", rating: "4.8" },
  { title: "Salmokji", poster: "/bOl0rJ86WWxVYlQlGttHhHuYiPQ.jpg", year: "2026", tag: "Terror Coreano 2026", rating: "4.7" },
  { title: "Best Wishes to All (Felicidade a Todos)", poster: "/vwWYIcVkDb8twv0unOCcriYCSrD.jpg", year: "2024", tag: "Terror Japonês 2024", rating: "4.8" },

  // ── MISTURA FLUIDA DE ASIÁTICOS, TURCOS, FRENCH EXTREME E HOLLYWOOD ─────
  { title: "Exhuma: A Cura do Mal", poster: "/tw0i3kkmOTjDjGFZTLHKhoeXVvA.jpg", year: "2024", tag: "Terror Coreano", rating: "4.9" },
  { title: "Dabbe: A Noiva Possuída", poster: "/j537aN6h9w06VipRHqFHnuFB1Ef.jpg", year: "2013", tag: "Terror Turco", rating: "5.0" },
  { title: "Marcas da Maldição (Incantation)", poster: "/cWz28oGV3cSajWdziVQbqrYCmnX.jpg", year: "2022", tag: "Terror Taiwanês", rating: "4.9" },
  { title: "Fale Comigo (Talk to Me)", poster: "/7U3lC4YnHD8zpeoxbY6Hsj9jyeu.jpg", year: "2023", tag: "🔥 Em Alta", rating: "4.9" },
  { title: "Mártires (Martyrs)", poster: "/969mH6AnksRNWMHhGxVbFa6l9qj.jpg", year: "2008", tag: "New French Extremity", rating: "5.0" },
  { title: "Howling Village (A Vila Uivante)", poster: "/doM8q4gqgLSFDbajjvJTlng4ZkN.jpg", year: "2020", tag: "Terror Japonês", rating: "4.8" },

  { title: "Pemandi Jenazah", poster: "/1ZTrQWpuhxMr32uC1fQBRnkVYlf.jpg", year: "2024", tag: "Terror Indonésio", rating: "4.8" },
  { title: "Siccîn", poster: "/fYbhwSIVl42JA4f6rs3MeE2wR4s.jpg", year: "2014", tag: "Terror Turco", rating: "4.9" },
  { title: "A Casa Profunda (The Deep House)", poster: "/8ht7owVO2s5nvdWO5OlDxGapAiM.jpg", year: "2021", tag: "Terror Aquático", rating: "4.8" },
  { title: "Gonjiam: Manicômio Assombrado", poster: "/cHzyFneiUCBT0FWYFqna5XE3lsj.jpg", year: "2018", tag: "Terror Coreano", rating: "4.9" },
  { title: "A Tristeza (The Sadness)", poster: "/qu7leaIvLWzwoHUEFHZj4vfut7N.jpg", year: "2021", tag: "Terror Extremo", rating: "4.8" },
  { title: "Alta Tensão (Haute Tension)", poster: "/vKeFa7CqSxmWsQDjHP6SJXKoDbj.jpg", year: "2003", tag: "New French Extremity", rating: "4.9" },

  { title: "Satan's Slaves 2: Comunhão", poster: "/xQNMM3u6srkhM8bdTCKVTFzyCF1.jpg", year: "2022", tag: "Terror Indonésio", rating: "4.8" },
  { title: "Satan's Slaves (Os Escravos de Satanás)", poster: "/k16xOaI9x5fqepxVwBwUJAozsW8.jpg", year: "2017", tag: "Terror Indonésio", rating: "4.9" },
  { title: "Siccîn 2", poster: "/92HBT46woySCuwROxD0P1C1m0Af.jpg", year: "2015", tag: "Terror Turco", rating: "4.8" },
  { title: "Entrevista com o Demônio", poster: "/blckaGzdEJ4PdG5RxZPcb77VYFV.jpg", year: "2024", tag: "🔥 Em Alta", rating: "4.9" },
  { title: "Impetigore (Pele de Pecado)", poster: "/dku2KnAPALsi69MnvTV7cXrylWm.jpg", year: "2019", tag: "Terror Indonésio", rating: "4.9" },
  { title: "A Invasora (À l'intérieur)", poster: "/7gPOYKxoBzhfC8cLNMU3CKgURcm.jpg", year: "2007", tag: "New French Extremity", rating: "4.9" },
  { title: "Noroi: A Lenda de Kagutaba", poster: "/5H6bfU24aiYKF0KVTSoGt3MyAX.jpg", year: "2005", tag: "Terror Japonês", rating: "4.9" },

  { title: "Backrooms: Um Não-Lugar", poster: "/qEl4BDBTGnhLiadZx0c9nHM8vBF.jpg", year: "2026", tag: "🔥 Lançamento 2026", rating: "4.9" },
  { title: "Baskin", poster: "/oNiinNDzPUH0I3K4puCwrJa7Hn1.jpg", year: "2015", tag: "Terror Turco", rating: "4.8" },
  { title: "Noites Brutais (Barbarian)", poster: "/mXsvEjsWLvco0hLfhe5FgwmY3qg.jpg", year: "2022", tag: "🔥 Em Alta", rating: "4.9" },
  { title: "(A) Fronteira (Frontière(s))", poster: "/qiJK2iJUifpO7eU8V6t4YWXAEEg.jpg", year: "2007", tag: "New French Extremity", rating: "4.8" },
  { title: "Projeto Caça ao Lobo", poster: "/uM0wcqCNbKfVowUKko7fvzOSSdf.jpg", year: "2022", tag: "Terror Coreano", rating: "4.8" },

  { title: "Dia Bukan Ibu", poster: "/ojWSVt7O92ZLtEUyQs8u5pRI40b.jpg", year: "2025", tag: "Terror Indonésio", rating: "4.6" },
  { title: "Siccîn 3: Cürmü Aşk", poster: "/kUZJoSDQ42ccWUjNU9k69c56aMg.jpg", year: "2016", tag: "Terror Turco", rating: "4.8" },
  { title: "A Substância", poster: "/vWeOgzlhnP1sS23H3rzctGHB9Nb.jpg", year: "2024", tag: "Body Horror", rating: "4.9" },
  { title: "Pulse (Kairo)", poster: "/9ePdNzKVvGHsMMphfS3HeoMvuEX.jpg", year: "2001", tag: "Terror Japonês", rating: "4.8" },
  { title: "Grave (Raw)", poster: "/kc8jT1MAiKM0iwdjAwC5lQrTNry.jpg", year: "2016", tag: "New French Extremity", rating: "4.8" },
  { title: "Herege", poster: "/j5e2YS1PRUVC1YgSool0JJyNLxJ.jpg", year: "2024", tag: "Em Alta", rating: "4.8" },

  { title: "Dark Water: Água Negra", poster: "/iSq6J55RFLfwcceDKxYtMjOr1sz.jpg", year: "2002", tag: "Clássico Japonês", rating: "4.9" },
  { title: "Nosferatu", poster: "/fbkUfzmVzEBFSt6p7VigknREIJT.jpg", year: "2024", tag: "Em Alta", rating: "4.9" },
  { title: "Killer Toon", poster: "/9ojbUahh8McTbR92Qf69ocWnggE.jpg", year: "2013", tag: "Terror Coreano", rating: "4.8" },
  { title: "Titane", poster: "/y93w5MGC9fbXjy1qfN6rUpSbBti.jpg", year: "2021", tag: "New French Extremity", rating: "4.7" },
  { title: "Cure (A Cura)", poster: "/xNVJr9q6AtSbjosS6Ed9YirOkSo.jpg", year: "1997", tag: "Clássico Japonês", rating: "4.9" },
  { title: "Sorria 2", poster: "/ypHiYvSJmHIyRDRiosZuE595uir.jpg", year: "2024", tag: "Em Alta", rating: "4.8" },

  { title: "Another", poster: "/c8VVGuc3lnPXCBStcKQWrOlBCSA.jpg", year: "2012", tag: "Terror Japonês", rating: "4.8" },
  { title: "Calvário (Calvaire)", poster: "/opcj7nv96MwCjC25VJMgAxrYDOk.jpg", year: "2005", tag: "New French Extremity", rating: "4.6" },
  { title: "Terrifier 3", poster: "/3HeKb5H89HjzWTkVkAqomu9mek.jpg", year: "2024", tag: "Gore", rating: "4.8" },
  { title: "Whispering Corridors: Wishing Stairs", poster: "/hX1CdiS8hJJxY8TuAmMoExYXKfn.jpg", year: "2003", tag: "Terror Coreano", rating: "4.7" },
  { title: "Irreversível", poster: "/zp6q1MQ9qEJuJj3zvQ5HJuutvQb.jpg", year: "2002", tag: "New French Extremity", rating: "4.9" },
  { title: "Eu Vi o Diabo", poster: "/zp5NrmYp80axIGiEiYPmm1CW6uH.jpg", year: "2010", tag: "Terror Coreano", rating: "4.9" },

  { title: "Longlegs - Vínculo Mortal", poster: "/uURBOrqLFyU8iKODcI3t2Xkbhqs.jpg", year: "2024", tag: "Suspense", rating: "4.7" },
  { title: "Satã (Sheitan)", poster: "/rYdoMFMBbG7tzurtHrYNc1zcqQz.jpg", year: "2006", tag: "New French Extremity", rating: "4.5" },
  { title: "O Lamento (The Wailing)", poster: "/mL4vGghS5XtgeNIPjhoTg8Tv5cJ.jpg", year: "2016", tag: "Terror Coreano", rating: "4.9" },
  { title: "MaXXXine", poster: "/dmi277uSdCavkSLTVNBUMlyDYy0.jpg", year: "2024", tag: "Slasher", rating: "4.8" },
  { title: "Pearl: Uma História de Origem", poster: "/cTgLkhIMmzwH1NAaq7NDbFN20zi.jpg", year: "2022", tag: "Slasher", rating: "4.9" },
  { title: "X: A Marca da Morte", poster: "/4BarWJRYFB5fN7LsJI9U2ul79hB.jpg", year: "2022", tag: "Slasher", rating: "4.8" },

  { title: "Armadilha (Trap)", poster: "/fskXjlVKppUtAgbfqt4wIsNkCaI.jpg", year: "2024", tag: "Suspense", rating: "4.7" },
  { title: "Oddity: Objetos Obscuros", poster: "/zwphX6D0pFzb6SI95wwVkIQzxZJ.jpg", year: "2024", tag: "Sobrenatural", rating: "4.8" },
  { title: "Cuckoo: O Medo Chama", poster: "/w7Z0x9Mw3lsjnEANC3BffQfx021.jpg", year: "2024", tag: "Suspense", rating: "4.6" },
  { title: "Pisque Duas Vezes", poster: "/1BCZ1rOI41cGkae6RZgLVVmYczE.jpg", year: "2024", tag: "Suspense", rating: "4.7" },
  { title: "Não Fale o Mal", poster: "/tjj473rnrNzPwWgLFNF0gsPXmU.jpg", year: "2024", tag: "Suspense", rating: "4.8" },
  { title: "A Primeira Profecia", poster: "/zppeHKLHljU2uI7NBJ1JyDNpn6L.jpg", year: "2024", tag: "Terror Religioso", rating: "4.7" },

  { title: "Alien: Romulus", poster: "/jB0W9tn4w07MFn7sTfqRTBLVytF.jpg", year: "2024", tag: "Sci-Fi Horror", rating: "4.9" },
  { title: "Um Lugar Silencioso: Dia Um", poster: "/pN9BtzUeqPIKybAu9baihz6YzyO.jpg", year: "2024", tag: "Suspense", rating: "4.8" },
  { title: "Deadstream", poster: "/dC38JMmb17geWFIjIBgNoKRMFnL.jpg", year: "2022", tag: "Found Footage", rating: "4.7" },

  // FRANQUIA PREMONIÇÃO (FINAL DESTINATION) - CAPINHAS OFICIAIS VERIFICADAS
  { title: "Premonição", poster: "/b5ERChzoI1aLzeYdmwWUtutwm8c.jpg", year: "2000", tag: "Clássico", rating: "4.9" },
  { title: "Premonição 2", poster: "/v1HSfT3BjDRGfHji30VvHeCBJHu.jpg", year: "2003", tag: "Clássico", rating: "4.8" },
  { title: "Premonição 3", poster: "/zdW7TWFc9DOG8gCElBBsj5pvpuK.jpg", year: "2006", tag: "Clássico", rating: "4.8" },
  { title: "Premonição 4", poster: "/sIDOFaipvpSM0R2uZNcDMLvTbhM.jpg", year: "2009", tag: "Clássico", rating: "4.6" },
  { title: "Premonição 5", poster: "/A0C3juaReSw8vQD3aWEZnOgolFL.jpg", year: "2011", tag: "Clássico", rating: "4.7" },
  { title: "Premonição 6: Laços de Sangue", poster: "/x3J781PsdMrjenzQKM5eJXqK5Nd.jpg", year: "2025", tag: "Em Alta", rating: "4.8" },

  // OUTROS FILMES DE TERROR E FRANQUIAS CLÁSSICAS
  { title: "Jogos Mortais", poster: "/jByGeGsJtoghNFHF5TgVvcSJ4Oc.jpg", year: "2004", tag: "Clássico Anos 2000", rating: "5.0" },
  { title: "O Chamado", poster: "/4skN151KEKtJQSLJ7zkWSDGE0DJ.jpg", year: "2002", tag: "Clássico Anos 2000", rating: "4.9" },
  { title: "O Grito", poster: "/A0VKYaw1rs6VTn48ijhTWN8P1pi.jpg", year: "2004", tag: "Clássico Anos 2000", rating: "4.8" },
  { title: "Madrugada dos Mortos", poster: "/ttquyxStEEctzghtA2f4PUGprDr.jpg", year: "2004", tag: "Clássico Anos 2000", rating: "4.9" },
  { title: "Extermínio", poster: "/sQckQRt17VaWbo39GIu0TMOiszq.jpg", year: "2002", tag: "Clássico Anos 2000", rating: "4.8" },
  { title: "Silent Hill", poster: "/r0bEDWO2w4a43K2xTNSF284qOsc.jpg", year: "2006", tag: "Clássico Anos 2000", rating: "4.8" },
  { title: "O Albergue", poster: "/dDrtuWUKhgUGp12kgUWuP0NpTdF.jpg", year: "2005", tag: "Clássico Anos 2000", rating: "4.7" },
  { title: "Arraste-me para o Inferno", poster: "/fdyejM5Zd6dsa0YyWa02ZAKwQzK.jpg", year: "2009", tag: "Clássico Anos 2000", rating: "4.7" },
  { title: "Olhos Famintos", poster: "/g410Y1U1ELbmJG14Zru3UAimm1G.jpg", year: "2001", tag: "Clássico Anos 2000", rating: "4.6" },
  { title: "A Bruxa de Blair", poster: "/jAKX4midH0vSm2XT54g5TWluQqw.jpg", year: "1999", tag: "Found Footage", rating: "4.8" },
  { title: "Passageiro do Mal", poster: "/2sOEJzhPzjTkZSlPbGxOJ7xgIyS.jpg", year: "2025", tag: "Em alta", rating: "4.6" },
  { title: "A Hora do Mal", poster: "/psEJSjQr6I9GSJTdW28CKC4Kffs.jpg", year: "2025", tag: "Em alta", rating: "4.7" },
  { title: "Pecadores", poster: "/v0Ljeti537c6cNKweuEN0iaU3x4.jpg", year: "2025", tag: "Em alta", rating: "4.8" },
  { title: "Invocação do Mal 4: O Último Ritual", poster: "/40nHGUfypLhlr7gJx8At1IbYkaK.jpg", year: "2025", tag: "Em alta", rating: "4.9" },
  { title: "O Telefone Preto 2", poster: "/p3epSUdF9qSWWHTBlA3mJ0w2i2Y.jpg", year: "2025", tag: "Em alta", rating: "4.8" },
  { title: "Faça Ela Voltar", poster: "/xfmnUz6C5WRboIMQZD0j3SNDT7v.jpg", year: "2025", tag: "Novo", rating: "4.6" },
  { title: "Five Nights at Freddy's 2", poster: "/12H82Xrr2ijDF0lJWUarqGFV7bC.jpg", year: "2025", tag: "Em alta", rating: "4.7" },
  { title: "Rua do Medo: Rainha do Baile", poster: "/skwydfnpaQdRQZfXMroh59FMJyY.jpg", year: "2025", tag: "Em alta", rating: "4.6" },
  { title: "O Macaco", poster: "/2jME1L29XGE3T4f0zUHgpiKsPrV.jpg", year: "2025", tag: "Novo", rating: "4.7" },
  { title: "Acompanhante Perfeita", poster: "/7LbrEQvturE05hljvTCWST7rLQL.jpg", year: "2025", tag: "Novo", rating: "4.6" },
  { title: "Predador: Terras Selvagens", poster: "/f3yLlUrJDdDL8d4nxywyotN45SL.jpg", year: "2025", tag: "Sci-Fi Horror", rating: "4.8" },
  { title: "Evil Dead Rise: A Ascensão", poster: "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg", year: "2023", tag: "Gore", rating: "4.9" },
  { title: "Sobrenatural: A Porta Vermelha", poster: "/6lp4uDxLqLEw1CzW1SUOYJ3zdKD.jpg", year: "2023", tag: "Sobrenatural", rating: "4.6" },
  { title: "O Exorcista do Papa", poster: "/hqIIoGsKKGWK7HjpgCSvV6mgKyT.jpg", year: "2023", tag: "Exorcismo", rating: "4.7" },
  { title: "A Freira 2", poster: "/omV2IW2OlFTSw6Hih13hz6lFdvP.jpg", year: "2023", tag: "Sobrenatural", rating: "4.6" },
  { title: "Terrifier 2", poster: "/nocx1g4AwO4HyyuWF5gnM5WjGJL.jpg", year: "2022", tag: "Gore", rating: "4.7" },
  { title: "Aterrorizante (Terrifier 1)", poster: "/z0m2BK6eCmaSJCDwS8JbkqDSg9P.jpg", year: "2016", tag: "Gore", rating: "4.7" },
  { title: "O Telefone Preto", poster: "/aAdnNifQo2qxDYnuDD3blsxinH1.jpg", year: "2022", tag: "Suspense", rating: "4.8" },
  { title: "Sorria", poster: "/3LfJ1kQZv6OX687rJMOAMzFJlc9.jpg", year: "2022", tag: "Terror Psicológico", rating: "4.8" },
  { title: "Não! Não Olhe!", poster: "/eyOw2kAOad2MNVsjMFmfzavB51h.jpg", year: "2022", tag: "Sci-Fi Horror", rating: "4.7" },
  { title: "Halloween Ends", poster: "/3uDwqxbr0j34rJVJMOW6o8Upw5W.jpg", year: "2022", tag: "Slasher", rating: "4.5" },
  { title: "A Casa Sombria", poster: "/sDbo3qnxxMnC1f4RMfmUlcKNNST.jpg", year: "2021", tag: "Mistério", rating: "4.6" },
  { title: "Midsommar: O Mal Não Espera", poster: "/hR4dXPlWq5Nekwjqbp3gFGeiiZS.jpg", year: "2019", tag: "Terror Psicológico", rating: "4.9" },
  { title: "Hereditário", poster: "/wonYMeHauhrxSi5UTOtj5L479mS.jpg", year: "2018", tag: "Obra-Prima", rating: "5.0" },
  { title: "Corra!", poster: "/A0RoSZh8PEYJgDMgM2EV7Ycz3dR.jpg", year: "2017", tag: "Suspense", rating: "4.9" },
  { title: "Atividade Paranormal", poster: "/jV5eAsOTf7zsL4glY51gTW6Vb05.jpg", year: "2007", tag: "Found Footage", rating: "4.7" },
  { title: "[REC]", poster: "/nfbO00NKXSzBIzcN3KbUMdPT1EU.jpg", year: "2007", tag: "Found Footage", rating: "4.8" },
  { title: "Hellraiser: Renascido do Inferno", poster: "/77Jj3lwYCnI16yNPheHx6LwbKqZ.jpg", year: "1987", tag: "Clássico", rating: "4.8" },
];

function MoviePoster({ movie }: { movie: Title }) {
  const [error, setError] = useState(false);

  if (error || !movie.poster) {
    return (
      <div className="relative aspect-[2/3] w-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-b from-neutral-900 via-black to-[#18080a] border border-white/10 overflow-hidden">
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
  const [selectedMovie, setSelectedMovie] = useState<Title | null>(null);

  // Filtragem rápida por termo de busca
  const filteredCatalog = useMemo(() => {
    if (!search.trim()) return CATALOGO_UNIFICADO;
    const q = search.toLowerCase();
    return CATALOGO_UNIFICADO.filter(
      (movie) =>
        movie.title.toLowerCase().includes(q) ||
        movie.year.includes(q) ||
        (movie.tag && movie.tag.toLowerCase().includes(q))
    );
  }, [search]);

  return (
    <div className="relative min-h-screen bg-[#0d090b] text-white selection:bg-red-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* LUZ AMBIENTAL VERMELHOS UNITV PRO */}
      <div className="pointer-events-none fixed top-1/4 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-red-600/15 blur-[160px] z-0" />
      <div className="pointer-events-none fixed bottom-20 right-10 size-[500px] rounded-full bg-rose-700/15 blur-[140px] z-0" />

      {/* BARRA PROMOCIONAL DO TOPO + HEADER FLUTUANTE DE VIDRO */}
      <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
        <div className="z-[60]">
          <PromoBanner />
        </div>
        <header>
          <div className="glass mx-auto mt-2 flex w-[94%] max-w-6xl items-center justify-between rounded-full px-4 sm:px-6 py-2.5 sm:py-3 border border-white/15 bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 via-rose-600 to-red-800 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                <Play className="size-4 fill-current ml-0.5" />
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                UniTV<span className="text-red-500"> Pro</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
              <Link to="/" className="text-white/80 transition-colors hover:text-white">
                Início
              </Link>
              <Link to="/catalogo" className="text-red-500 font-extrabold flex items-center gap-1.5">
                <Sparkles className="size-3.5" /> Catálogo
              </Link>
              <Link to="/instalar" className="text-white/80 transition-colors hover:text-white">
                Como Instalar
              </Link>
              <Link to="/suporte" className="text-white/80 transition-colors hover:text-white">
                Suporte
              </Link>
            </nav>

            <a
              href="https://wa.me/5561984016006?text=Quero%20meu%20teste%20gr%C3%A1tis%20de%203%20dias!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta px-3.5 py-1.5 text-[11px] font-extrabold tracking-wide"
            >
              TESTE GRÁTIS
            </a>
          </div>
        </header>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 mx-auto w-[94%] max-w-6xl pt-32 sm:pt-36 pb-20">
        {/* CABEÇALHO DA PÁGINA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-white/10 pb-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-red-600/20 border border-red-500/40 px-3 py-1 text-xs font-black tracking-wider text-red-400 uppercase mb-3">
              <Film className="size-3.5 text-red-500" /> Grade Completa • {CATALOGO_UNIFICADO.length} Filmes
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white">
              Catálogo de <span className="text-red-500">Terror</span>
            </h1>
            <p className="text-xs sm:text-sm text-white/60 mt-2 max-w-2xl leading-relaxed">
              Grade completa com 6 filmes por linha. Lançamentos 2026 no topo, terror japonês, indonésio, coreano, filmes turcos e New French Extremity intercalados.
            </p>
          </div>

          {/* BUSCA DE TÍTULOS */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-white/50" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar filme, ano ou subgênero..."
              className="w-full rounded-2xl border border-white/15 bg-white/[0.05] py-2.5 pl-10 pr-9 text-xs sm:text-sm text-white placeholder-white/40 outline-none transition-all focus:border-red-500 focus:bg-black/60 shadow-md backdrop-blur-md"
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

        {/* ── GRADE UNIFICADA DE FILMES: EXATAMENTE 6 POR LINHA NO DESKTOP ──────── */}
        {filteredCatalog.length === 0 ? (
          <div className="py-20 text-center rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
            <Info className="mx-auto size-12 text-red-500/60 mb-3" />
            <h3 className="text-xl font-bold text-white">Nenhum filme encontrado</h3>
            <p className="text-xs text-white/60 mt-1">Tente buscar por outro termo ou limpe o campo de busca.</p>
            <button
              onClick={() => setSearch("")}
              className="mt-5 btn-cta px-5 py-2.5 text-xs font-bold text-white shadow-lg cursor-pointer"
            >
              Limpar Busca
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
                {/* SELOS DE DESTAQUE UNITV PRO */}
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
                <div className="p-3 bg-black/40 flex flex-col justify-between grow border-t border-white/5">
                  <h3 className="text-xs sm:text-sm font-extrabold text-white leading-tight line-clamp-2 group-hover:text-red-400 transition-colors">
                    {movie.title}
                  </h3>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-white/50 font-medium">
                    <span>{movie.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BANNER CTA DE TESTE GRÁTIS NO FINAL */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 sm:p-12 text-center shadow-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-600/20 border border-red-500/40 px-4 py-1.5 text-xs font-black tracking-wider text-red-400 uppercase mb-4">
            <Sparkles className="size-4 text-red-500" /> Assista a Todos Esses Filmes no Seu Aparelho
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-white max-w-2xl mx-auto leading-tight mb-3">
            Gostou do catálogo? <span className="text-red-500">Teste grátis por 3 dias!</span>
          </h2>
          <p className="text-xs sm:text-sm text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
            Instale o UniTV Pro na sua Smart TV Android, TV Box, Mi Stick Xiaomi, FireTV, Celular Android ou Tablet e libere o acesso imediato.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/instalar"
              className="btn-cta inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-black text-white shadow-md transition-all hover:scale-[1.02] w-full sm:w-auto uppercase tracking-wide cursor-pointer"
            >
              <Download className="size-5" />
              VER PASSO A PASSO DE INSTALAÇÃO
            </Link>
            <a
              href="https://wa.me/5561984016006?text=Quero%20testar%20o%20cat%C3%A1logo%20de%20terror%20por%203%20dias!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 border border-white/15 px-8 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition-all w-full sm:w-auto uppercase tracking-wide cursor-pointer"
            >
              <ShieldCheck className="size-5 text-emerald-400" />
              FALAR NO WHATSAPP
            </a>
          </div>
        </div>
      </div>

      {/* MODAL AO CLICAR EM UM FILME */}
      {selectedMovie && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedMovie(null)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl border border-white/15 bg-[#0e0e0e] p-6 sm:p-8 shadow-2xl text-left"
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
                  <span className="inline-block rounded-lg bg-red-600 px-2 py-0.5 text-[10px] font-black text-white uppercase tracking-widest mb-2">
                    {selectedMovie.tag}
                  </span>
                )}
                <h3 className="font-display text-lg font-black text-white leading-tight">{selectedMovie.title}</h3>
                <p className="text-xs text-white/60 mt-1 font-medium">Lançamento • {selectedMovie.year}</p>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                  <Star className="size-3.5 fill-amber-400" />
                  <span>{selectedMovie.rating || "4.9"} / 5.0 (Avaliação dos usuários)</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 mb-6">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1">
                <CheckCircle2 className="size-4" />
                <span>Disponível no UniTV Pro</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                Este título faz parte do catálogo do UniTV Pro. Baixe o app e teste por 3 dias grátis sem compromisso.
              </p>
            </div>

            <div className="space-y-3">
              <Link
                to="/instalar"
                onClick={() => setSelectedMovie(null)}
                className="btn-cta flex w-full items-center justify-center gap-2.5 py-3.5 text-xs font-black text-white uppercase tracking-wide cursor-pointer"
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
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/15 py-3 text-xs font-bold text-white hover:bg-white/20 transition-colors cursor-pointer"
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
