import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Check,
  Clapperboard,
  Flame,
  Ghost,
  Baby,
  Trophy,
  Tv,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Rail } from "@/components/Rail";
import { Faq } from "@/components/Faq";
import { TrustSection } from "@/components/TrustSection";
import { Torii } from "@/components/icons";
import { BrandLogo } from "@/components/BrandLogo";
import { SocialProof } from "@/components/SocialProof";
import futebol from "@/assets/futebol.jpg";
import {
  animes,
  heroSlides,
  img,
  infantil,
  plataformas,
  series,
  terror,
} from "@/data/catalog";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cineflix — Streaming ilimitado por R$20/mês" },
      {
        name: "description",
        content:
          "Mais de 60.000 filmes, séries, animes, infantil e futebol ao vivo em um só app. Lançamentos de terror, Netflix, Disney+, HBO Max e mais por R$20/mês.",
      },
      { property: "og:title", content: "Cineflix — Streaming ilimitado por R$20/mês" },
      {
        property: "og:description",
        content:
          "Todos os streamings em uma única plataforma. Lançamentos de terror, animes, infantil e esportes ao vivo em 4K.",
      },
    ],
  }),
  component: Index,
});

const CTA_HREF = "#planos";

function smoothTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const el = document.querySelector(href);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", href);
}

function SmoothLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={className ?? ""}
      onClick={(e) => smoothTo(e, href)}
    >
      {children}
    </a>
  );
}

function Cta({ children = "ADQUIRA O SEU AGORA" }: { children?: string }) {
  return (
    <SmoothLink href={CTA_HREF} className="btn-cta animate-pulse-ring">
      <Zap className="size-4" />
      {children}
    </SmoothLink>
  );
}




function Index() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setSlide((s) => (s + 1) % heroSlides.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  const current = heroSlides[slide]!;

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="glass mx-auto mt-4 flex w-[94%] max-w-6xl items-center justify-between rounded-full px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="bg-hot flex size-8 items-center justify-center rounded-full">
              <Play className="size-4 fill-current text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-extrabold tracking-tight">
              CINE<span className="text-hot">FLIX</span>
            </span>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {[
              { h: "#catalogo", l: "Catálogo" },
              { h: "#esportes", l: "Esportes" },
              { h: "#economia", l: "Economia" },
              { h: "#planos", l: "Planos" },
            ].map((n) => (
              <SmoothLink
                key={n.h}
                href={n.h}
                className="transition-colors hover:text-foreground"
              >
                {n.l}
              </SmoothLink>
            ))}
          </nav>
          <SmoothLink href={CTA_HREF} className="btn-cta px-5 py-2.5 text-xs">
            Assinar
          </SmoothLink>

        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        {heroSlides.map((s, i) => (
          <img
            key={s.title}
            src={img(s.backdrop, "w1280")}
            alt={`Cena do filme ${s.title}`}
            className="absolute inset-0 size-full object-cover transition-all duration-[2200ms] ease-out"
            style={{
              opacity: i === slide ? 1 : 0,
              transform: i === slide ? "scale(1.06)" : "scale(1)",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/70" />

        <div className="animate-rise relative z-10 mx-auto w-[94%] max-w-6xl pt-28 pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="size-3.5 text-accent" />
                Lançamentos de terror toda semana
              </span>
              <h1 className="text-5xl leading-[0.95] font-extrabold md:text-7xl">
                Conteúdo ilimitado
                <br />
                <span className="text-hot">por um preço que cabe no bolso</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Mais de 2 mil canais e 60.000 conteúdos — Netflix, Disney+, HBO
                Max, Prime Video, Apple TV+ e muito mais em um único app. Com
                qualidade 4K, estabilidade e suporte dedicado.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Cta />
                <SmoothLink href="#catalogo" className="btn-ghost">
                  <Clapperboard className="size-4" /> Ver catálogo
                </SmoothLink>

              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Star className="size-4 fill-accent text-accent" /> 4.9 de
                  satisfação
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-accent" /> Cancele quando
                  quiser
                </span>
              </div>
            </div>

            <div className="hidden justify-end lg:flex">
              <div className="animate-float relative w-[280px]">
                <img
                  key={current.poster}
                  src={img(current.poster, "w500")}
                  alt={`Pôster de ${current.title}`}
                  className="w-full rounded-4xl border border-border shadow-[var(--shadow-neon)]"
                />
                <div className="glass absolute -bottom-6 -left-8 rounded-2xl px-4 py-3">
                  <p className="text-xs text-muted-foreground">
                    Em destaque agora
                  </p>
                  <p className="font-display text-sm font-bold">
                    {current.title}
                  </p>
                  <p className="text-xs text-accent">
                    {current.genre} · {current.year}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex gap-2">
            {heroSlides.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setSlide(i)}
                aria-label={`Ver ${s.title}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === slide ? "bg-hot w-14" : "w-6 bg-muted hover:bg-surface-2"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE PLATAFORMAS */}
      <section className="border-y border-border bg-surface/40 py-8">
        <p className="mb-6 text-center text-xs tracking-[0.25em] text-muted-foreground uppercase">
          Todos os streamings em um só lugar
        </p>
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-14 pr-14">
            {[...plataformas, ...plataformas].map((p, i) => (
              <div
                key={p.nome + i}
                className="opacity-70 transition-opacity duration-300 hover:opacity-100"
              >
                <BrandLogo
                  nome={p.nome}
                  logo={p.logo}
                  invert={p.invert === true}
                  escala={p.escala ?? 1}
                  cor={p.cor}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CATÁLOGO */}
      <section id="catalogo" className="py-16">
        <Reveal className="mx-auto mb-4 w-[94%] max-w-6xl text-center">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Os mais assistidos <span className="text-hot">agora</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Seus filmes, séries e animes favoritos com a experiência que você
            merece — em alta definição, sem antena e sem decodificador.
          </p>
        </Reveal>

        <Rail
          icon={Flame}
          title="Terror — lançamentos e clássicos"
          subtitle="Obsessão, Backrooms, Undertone, Maldição da Múmia, Hokum, Passageiro do Mal e dezenas de outros"
          items={terror}
        />
        <Rail
          icon={Ghost}
          title="Séries de terror para você maratonar"
          subtitle="Cabo do Medo, IT: Bem-Vindos a Derry, From, A Maldição da Residência Hill e muito mais"
          items={series}
        />
        <Rail
          icon={Torii}
          title="Animes Crunchyroll"
          subtitle="Demon Slayer, Jujutsu Kaisen, Solo Leveling, Dan Da Dan e todos os simulcasts em HD"
          items={animes}
        />
        <Rail
          icon={Baby}
          title="Canais e desenhos infantis"
          subtitle="Bluey, Patrulha Canina, Bob Esponja, Disney+ e muito mais para a criançada"
          items={infantil}
        />

      </section>

      {/* FEATURES */}
      <section className="mx-auto w-[94%] max-w-6xl py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Clapperboard,
              t: "Filmes incríveis",
              d: "Clássicos, lançamentos e grandes produções premiadas em alta definição.",
            },
            {
              icon: Tv,
              t: "Séries imperdíveis",
              d: "Temporadas completas dos sucessos do momento para maratonar sem limites.",
            },
            {
              icon: Torii,
              t: "Animes atualizados",
              d: "Lista enorme com todos os animes do momento, sempre em dia e em HD.",
            },
            {
              icon: Baby,
              t: "Canais infantis",
              d: "Toda a lista para a criançada, incluindo Disney+ e muito mais.",
            },
            {
              icon: ShieldCheck,
              t: "Canais adultos",
              d: "Opcional e protegido por senha, para a segurança das crianças.",
            },
            {
              icon: Trophy,
              t: "Esportes ao vivo",
              d: "Futebol, artes marciais e todos os canais esportivos ao vivo.",
            },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 80}>
              <div className="glass card-lift h-full rounded-3xl p-7">
                <div className="bg-hot mb-5 flex size-11 items-center justify-center rounded-2xl">
                  <f.icon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{f.t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ESPORTES */}
      <section id="esportes" className="relative my-10 overflow-hidden">
        <div className="relative mx-auto w-[94%] max-w-6xl overflow-hidden rounded-4xl border border-border">
          <img
            src={futebol}
            alt="Torcida em estádio de futebol lotado à noite"
            loading="lazy"
            width={1280}
            height={720}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent" />
          <Reveal className="relative p-8 md:p-16">
            <span className="glass mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase">
              <Trophy className="size-3.5 text-accent" /> Esportes ao vivo
            </span>
            <h2 className="max-w-lg text-4xl font-extrabold md:text-5xl">
              Para quem é <span className="text-hot">fanático por futebol</span>
            </h2>
            <p className="mt-5 max-w-lg text-muted-foreground">
              Acompanhe os maiores campeonatos do Brasil e do mundo, além de
              lutas, NBA, NFL e tudo que você ama — sem travar, em 4K.
            </p>
            <div className="mt-8">
              <Cta />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ECONOMIA */}
      <section id="economia" className="mx-auto w-[94%] max-w-6xl py-20">
        <Reveal className="text-center">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Isso é o que você pagaria
            <br />
            <span className="text-hot">assinando tudo separado</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {plataformas.map((p, i) => (
            <Reveal key={p.nome} delay={i * 45}>
              <div className="glass card-lift flex h-full flex-col items-center justify-center gap-3 rounded-3xl px-4 py-7">
                <div className="flex h-7 items-center">
                  <BrandLogo
                    nome={p.nome}
                    logo={p.logo}
                    invert={p.invert === true}
                    escala={p.escala ?? 1}
                    cor={p.cor}
                    className="h-6"
                  />
                </div>

                {p.logo && (
                  <p className="text-xs text-muted-foreground">{p.nome}</p>
                )}


                <p className="font-display text-lg font-bold line-through decoration-primary decoration-2">
                  {p.preco}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="glass rounded-4xl p-8 text-center md:p-12">
            <p className="text-muted-foreground">
              Ao todo você pagaria{" "}
              <span className="font-bold text-foreground line-through">
                R$ 514,85
              </span>{" "}
              por mês
            </p>
            <p className="font-display mt-4 text-4xl font-extrabold md:text-6xl">
              Com a Cineflix você paga{" "}
              <span className="text-hot">apenas R$20/mês</span>
            </p>
            <div className="mt-9">
              <Cta />
            </div>
          </div>
        </Reveal>
      </section>

      {/* PLANOS */}
      <section id="planos" className="mx-auto w-[94%] max-w-6xl py-16">
        <Reveal className="text-center">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Aproveite e <span className="text-hot">assine já</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cancele quando quiser. Ativação imediata e suporte dedicado.
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-6 lg:grid-cols-3">
          {[
            {
              nome: "Plano START",
              preco: "R$20",
              periodo: "mensal",
              telas: "Use 2 telas simultaneamente",
              extra: "Plano Mensal",
              destaque: false,
              selo: null as string | null,
              link: "https://ev.braip.com/ref?pl=plazg9wz&ck=che7qk0o&af=afi07p3351",
            },
            {
              nome: "Plano PRIME",
              preco: "R$97",
              periodo: "1 ano",
              telas: "Use 4 telas simultaneamente",
              extra: "1 ano de acesso · sem mensalidade",
              destaque: true,
              selo: "Mais escolhido",
              link: "https://ev.braip.com/ref?pl=plaoxjy8&ck=che7qk0o&af=afi07p3351",
            },
            {
              nome: "Plano PRO",
              preco: "R$69,90",
              periodo: "semestral",
              telas: "Use 2 telas simultaneamente",
              extra: "Plano Semestral",
              destaque: false,
              selo: null as string | null,
              link: "https://ev.braip.com/ref?pl=pla0zq40&ck=che7qk0o&af=afi07p3351",
            },
          ].map((p, i) => (
            <Reveal key={p.nome} delay={i * 100}>
              <div
                className={`card-lift relative h-full rounded-4xl p-8 ${
                  p.destaque
                    ? "border-2 border-primary bg-surface shadow-[var(--shadow-glow)] lg:scale-[1.06]"
                    : "glass"
                }`}
              >
                {p.selo && (
                  <span className="bg-hot absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wide text-primary-foreground uppercase">
                    {p.selo}
                  </span>
                )}
                <h3 className="font-display text-sm font-bold tracking-[0.18em] text-accent uppercase">
                  {p.nome}
                </h3>
                <div className="mt-4 flex items-end gap-2">
                  <span
                    className={`font-display text-5xl font-extrabold ${
                      p.destaque ? "text-hot" : ""
                    }`}
                  >
                    {p.preco}
                  </span>
                  <span className="pb-2 text-sm text-muted-foreground">
                    /{p.periodo}
                  </span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Acesso ilimitado a todos os conteúdos, a diversão é garantida.
                </p>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta mt-7 w-full"
                >
                  Comprar agora
                </a>

                <ul className="mt-8 space-y-3 text-sm">
                  {[
                    p.extra,
                    p.telas,
                    "Mais de 60.000 conteúdos",
                    "Qualidade SD/HD/FHD/4K",
                    "Guia de Programação [EPG]",
                    "Smartphone / Tablet",
                    "TV Box / Chromecast",
                    "Smart TV e Computador",
                    "Programação Adultos [Opcional]",
                    "Pacote Filmes e Séries",
                  ].map((v) => (
                    <li key={v} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span className="text-muted-foreground">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PAGAMENTO E SEGURANÇA */}
      <TrustSection />

      {/* FAQ */}
      <Faq>
        <SmoothLink href={CTA_HREF} className="btn-cta">
          <Zap className="size-4" />
          VER PLANOS DISPONÍVEIS
        </SmoothLink>
      </Faq>

      {/* FOOTER */}
      <footer className="mt-10 border-t border-border py-12">
        <div className="mx-auto flex w-[94%] max-w-6xl flex-col items-center gap-5 text-center">
          <span className="font-display text-xl font-extrabold">
            CINE<span className="text-hot">FLIX</span>
          </span>
          <p className="max-w-xl text-sm text-muted-foreground">
            A televisão do futuro é pela internet — sem antenas, sem
            decodificadores. Assista quando e onde quiser.
          </p>
          <Cta />
          <Link
            to="/suporte"
            className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Precisa de ajuda? Fale com o suporte
          </Link>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cineflix. Imagens de divulgação dos
            respectivos estúdios (fonte: TMDB).
          </p>
        </div>
      </footer>

      <SocialProof />

    </div>
  );
}

