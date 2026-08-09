import { Star, CheckCircle2, Quote, UserCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const REVIEWS = [
  {
    nome: "Marcelo Andrade",
    cidade: "São Paulo, SP",
    plano: "Plano PRIME",
    foto: "MA",
    corAvatar: "from-purple-600 to-indigo-600",
    nota: "5.0",
    texto: "Cancelei a Netflix, Disney+ e Premiere. Economizo mais de R$ 320 por mês e a qualidade 4K não trava nem no jogo do meu time no domingo. Excelente!",
    destaque: "Economia de +R$ 320/mês",
  },
  {
    nome: "Camila Oliveira",
    cidade: "Curitiba, PR",
    plano: "Plano PRO",
    foto: "CO",
    corAvatar: "from-pink-600 to-purple-600",
    nota: "5.0",
    texto: "Instalei na Smart TV da sala e no quarto dos meus filhos. Rodando liso em 4 telas ao mesmo tempo. Suporte no WhatsApp me ajudou em 3 minutos!",
    destaque: "4 telas simultâneas sem travar",
  },
  {
    nome: "Rodrigo Mendes",
    cidade: "Belo Horizonte, MG",
    plano: "Plano START",
    foto: "RM",
    corAvatar: "from-emerald-600 to-teal-600",
    nota: "5.0",
    texto: "Estava receoso por ser pela internet, mas me surpreendeu demais. Lançamentos do cinema dublados chegam muito rápido. Nota 10!",
    destaque: "Lançamentos dublados rápidos",
  },
  {
    nome: "Fernanda Lima",
    cidade: "Rio de Janeiro, RJ",
    plano: "Plano PRIME",
    foto: "FL",
    corAvatar: "from-cyan-600 to-blue-600",
    nota: "5.0",
    texto: "Melhor investimento que fiz no ano. Não preciso mais ficar pagando 5 plataformas diferentes. Roda perfeito no meu Fire Stick.",
    destaque: "Perfeito no Fire Stick",
  },
  {
    nome: "Eduardo Santos",
    cidade: "Porto Alegre, RS",
    plano: "Plano PRO",
    foto: "ES",
    corAvatar: "from-amber-600 to-orange-600",
    nota: "5.0",
    texto: "Qualidade de imagem surreal nos jogos da Champions League e Brasileirão. Sem contar que o suporte responde muito rápido no WhatsApp!",
    destaque: "Futebol ao vivo em HD/4K",
  },
  {
    nome: "Juliana Costa",
    cidade: "Brasília, DF",
    plano: "Plano PRIME",
    foto: "JC",
    corAvatar: "from-fuchsia-600 to-rose-600",
    nota: "5.0",
    texto: "Comprei o plano anual e já estou usando há 4 meses sem nenhum problema. A variedade de filmes e animes é gigantesca!",
    destaque: "Catálogo gigantesco sem travamentos",
  },
];

export function Testimonials() {
  return (
    <section className="relative z-10 mx-auto w-[94%] max-w-6xl py-12 sm:py-16">
      <Reveal>
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-xs font-extrabold tracking-wider text-amber-300 uppercase shadow-[0_0_20px_rgba(245,158,11,0.2)] mb-4">
            <Star className="size-3.5 fill-amber-300 text-amber-300" /> 4.9 de 5.0 baseados em +10.000 clientes
          </span>
          <h2 className="text-3xl font-black sm:text-5xl tracking-tight text-white drop-shadow-md">
            Quem assinou, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 font-extrabold">recomenda</span>
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
            Veja o que nossos clientes dizem sobre a estabilidade dos canais, variedade de filmes e a economia mensal.
          </p>
        </div>
      </Reveal>

      {/* CARDS DE DEPOIMENTOS DE ALTO IMPACTO */}
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r) => (
          <Reveal key={r.nome}>
            <div className="group relative flex flex-col justify-between h-full rounded-3xl border border-white/15 bg-gradient-to-b from-surface/90 via-surface/60 to-surface/90 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/80 hover:shadow-[0_14px_45px_rgba(168,85,247,0.35)] shadow-xl">
              <Quote className="absolute top-5 right-5 size-8 text-white/5 group-hover:text-purple-400/20 transition-colors pointer-events-none" />

              <div>
                {/* CABEÇALHO DO CLIENTE */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className={`flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr ${r.corAvatar} font-black text-sm text-white shadow-md border border-white/30`}>
                    {r.foto}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="truncate text-sm font-extrabold text-white">{r.nome}</p>
                      <CheckCircle2 className="size-4 shrink-0 text-emerald-400 fill-emerald-400/20" title="Cliente Verificado" />
                    </div>
                    <p className="text-[11px] font-semibold text-muted-foreground">{r.cidade} • <span className="text-purple-300">{r.plano}</span></p>
                  </div>
                </div>

                {/* ESTRELAS E SELO VERIFICADO */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, st) => (
                      <Star key={st} className="size-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 text-xs font-black text-amber-300">{r.nota}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[9px] font-extrabold text-emerald-400 uppercase tracking-wider">
                    <UserCheck className="size-3" /> Verificado
                  </span>
                </div>

                {/* TEXTO DO DEPOIMENTO */}
                <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed italic">
                  "{r.texto}"
                </p>
              </div>

              {/* HIGHLIGHT DESTAQUE DO DEPOIMENTO */}
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-extrabold text-purple-300 uppercase tracking-wider">
                  ⚡ {r.destaque}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
