import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Clock, Headset, MessageCircleQuestion, Wrench } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons";
import { img, terror } from "@/data/catalog";

export const Route = createFileRoute("/suporte")({
  head: () => ({
    meta: [
      { title: "Suporte Cineflix — Atendimento por WhatsApp" },
      {
        name: "description",
        content:
          "Fale com o suporte da Cineflix pelo WhatsApp: ajuda com instalação, problemas no app e dúvidas sobre planos e pagamentos.",
      },
      { property: "og:title", content: "Suporte Cineflix — Atendimento por WhatsApp" },
      {
        property: "og:description",
        content:
          "Atendimento humano todos os dias para instalação, suporte técnico e dúvidas de assinatura.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Suporte,
});

const BOTOES = [
  {
    icon: Wrench,
    titulo: "Iniciar instalação",
    desc: "Passo a passo completo para ativar na sua Smart TV, TV Box, celular ou PC.",
    url: "https://wa.me/5519981875907?text=INICIAR%20INSTALA%C3%87%C3%83O%20CINEFLIX",
  },
  {
    icon: Headset,
    titulo: "Desejo renovar",
    desc: "Renove sua assinatura rapidamente sem perder suas configurações.",
    url: "https://wa.me/5519981875907?text=Ol%C3%A1%2C%20quero%20renovar%20o%20meu%20plano",
  },
  {
    icon: MessageCircleQuestion,
    titulo: "Falar com o suporte",
    desc: "Tire dúvidas técnicas, receba auxílio com seu login ou ajuste de conta.",
    url: "https://wa.me/5519981875907?text=Ol%C3%A1%2C%20preciso%20de%20suporte",
  },
];

function Suporte() {
  const fundo = terror.slice(0, 18);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* fundo com pôsteres reais */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-3 gap-2 opacity-25 sm:grid-cols-4 lg:grid-cols-6">
        {fundo.map((t) => (
          <img
            key={t.title}
            src={img(t.poster, "w342")}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="aspect-2/3 w-full object-cover"
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background/85 via-background/95 to-background" />

      <div className="relative mx-auto w-[94%] max-w-3xl px-1 py-24">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Voltar para o início
        </Link>

        <Reveal className="text-center">
          <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase">
            <Clock className="size-3.5 text-accent" /> Atendimento todos os dias
          </span>
          <h1 className="text-4xl font-extrabold md:text-6xl">
            Suporte <span className="text-hot">Cineflix</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Escolha o assunto abaixo e fale agora com um atendente no WhatsApp.
            A mensagem já vai preenchida para agilizar seu atendimento.
          </p>
        </Reveal>

        <div className="mt-12 space-y-4">
          {BOTOES.map((b, i) => (
            <Reveal key={b.titulo} delay={i * 110}>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass card-lift flex w-full items-center gap-5 rounded-4xl p-6 md:p-7"
              >
                <div className="bg-hot flex size-12 shrink-0 items-center justify-center rounded-2xl">
                  <b.icon className="size-5 text-primary-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-lg font-bold">{b.titulo}</p>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
                <WhatsAppIcon className="size-7 shrink-0 text-accent" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link to="/" hash="planos" className="btn-cta">
            Ver planos disponíveis
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
