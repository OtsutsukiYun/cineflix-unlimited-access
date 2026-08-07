import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Clock, Headset, MessageCircleQuestion, Wrench } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons";
import { img, terror } from "@/data/catalog";
import { handleWhatsAppClick } from "@/utils/whatsapp";

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
    badge3d: "🛠️",
    gradient: "from-purple-600 via-primary to-accent",
    glow: "shadow-[0_12px_35px_rgba(168,85,247,0.6)]",
    titulo: "Iniciar instalação",
    desc: "Passo a passo completo para ativar na sua Smart TV, TV Box, celular ou PC.",
    phone: "5519981875907",
    mensagem: "INICIAR INSTALAÇÃO CINEFLIX",
    url: "https://wa.me/5519981875907?text=INICIAR%20INSTALA%C3%87%C3%83O%20CINEFLIX",
  },
  {
    icon: Headset,
    badge3d: "🎧",
    gradient: "from-fuchsia-600 via-purple-600 to-primary",
    glow: "shadow-[0_12px_35px_rgba(217,70,239,0.6)]",
    titulo: "Desejo renovar",
    desc: "Renove sua assinatura rapidamente sem perder suas configurações.",
    phone: "5519981875907",
    mensagem: "Olá, quero renovar o meu plano",
    url: "https://wa.me/5519981875907?text=Ol%C3%A1%2C%20quero%20renovar%20o%20meu%20plano",
  },
  {
    icon: MessageCircleQuestion,
    badge3d: "💬",
    gradient: "from-violet-600 via-primary to-fuchsia-500",
    glow: "shadow-[0_12px_35px_rgba(139,92,246,0.6)]",
    titulo: "Falar com o suporte",
    desc: "Tire dúvidas técnicas, receba auxílio com seu login ou ajuste de conta.",
    phone: "5519981875907",
    mensagem: "Olá, preciso de suporte",
    url: "https://wa.me/5519981875907?text=Ol%C3%A1%2C%20preciso%20de%20suporte",
  },
];

function Suporte() {
  // Pôsteres recentes de terror para o collage de fundo (Obsessão, Boca do Diabo, Undertone, Hokum, etc)
  const fundo = terror.slice(0, 18);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* IMAGEM DE FUNDO PRINCIPAL — OBSESSÃO (2026) E FILMES DE TERROR RECENTES */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={img("/r013C8Me2bZ0pUi0OWJRh0h7MzT.jpg", "w1280")}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-top opacity-30 brightness-[0.6] filter blur-[2px]"
        />
        {/* GRID DE PÔSTERES DOS LANÇAMENTOS RECENTES EM SOBREPOSIÇÃO SUAVE */}
        <div className="absolute inset-0 grid grid-cols-3 gap-3 opacity-20 sm:grid-cols-4 lg:grid-cols-6 p-4">
          {fundo.map((t) => (
            <img
              key={t.title}
              src={img(t.poster, "w342")}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="aspect-2/3 w-full rounded-2xl object-cover shadow-2xl"
            />
          ))}
        </div>
        {/* GRADIENTE AMBIENTE ROXO ESCURO E VINHETA */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-[94%] max-w-3xl px-1 py-16 sm:py-20">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-purple-300/80 transition-colors hover:text-white"
        >
          <ArrowLeft className="size-4" /> Voltar para o início
        </Link>

        <Reveal className="text-center">
          <span className="glass mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-surface/90 px-4 py-2 text-xs font-bold tracking-wide uppercase text-accent shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <Clock className="size-3.5 fill-current" /> Atendimento humano 7 dias por semana
          </span>
          <h1 className="text-4xl font-extrabold md:text-6xl">
            Central de <span className="text-hot">Suporte</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Escolha o atendimento desejado abaixo. A conversa abrirá diretamente no seu WhatsApp com a mensagem pronta.
          </p>
        </Reveal>

        {/* CARDS COM ÍCONES 3D RELUZENTES */}
        <div className="mt-10 space-y-4">
          {BOTOES.map((b, i) => (
            <Reveal key={b.titulo} delay={i * 110}>
              <a
                href={b.url}
                onClick={(e) => handleWhatsAppClick(e, b.phone, b.mensagem)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex w-full items-center gap-6 rounded-4xl p-6 md:p-7 border border-purple-500/30 bg-gradient-to-b from-[#1c0830]/90 via-[#120522]/90 to-[#0b0316]/90 backdrop-blur-xl shadow-[0_0_35px_rgba(168,85,247,0.2)] transition-all duration-500 hover:border-purple-400 hover:shadow-[0_0_55px_rgba(168,85,247,0.5)] hover:-translate-y-1.5"
              >
                {/* ÍCONE 3D NÍTIDO COM BRILHO NEON VIVO */}
                <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <div className={`relative flex size-15 sm:size-16 items-center justify-center rounded-2xl bg-gradient-to-br ${b.gradient} p-0.5 border border-white/40 ${b.glow} transition-all duration-300`}>
                    <div className="relative flex size-full items-center justify-center rounded-[14px] bg-black/25 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-90" />
                      <b.icon className="size-7 sm:size-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] relative z-10" />
                    </div>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-lg sm:text-xl font-extrabold text-white group-hover:text-purple-200 transition-colors">
                      {b.titulo}
                    </p>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {b.desc}
                  </p>
                </div>

                <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(16,185,129,0.7)]">
                  <WhatsAppIcon className="size-6 shrink-0" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* BADGES 3D DE GARANTIA E CONFIANÇA ABAIXO */}
        <Reveal delay={350} className="mt-10">
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: "⚡", title: "Atendimento Rápido", desc: "Resposta imediata" },
              { icon: "🛡️", title: "Suporte 100% Seguro", desc: "Equipe oficial" },
              { icon: "🚀", title: "Ativação Imediata", desc: "Acesso na mesma hora" },
            ].map((f) => (
              <div
                key={f.title}
                className="flex flex-col items-center gap-1.5 rounded-3xl border border-purple-500/30 bg-purple-950/40 p-4 text-center backdrop-blur-md transition-all duration-300 hover:border-purple-400/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:-translate-y-1"
              >
                <span className="text-2xl sm:text-3xl drop-shadow-[0_4px_12px_rgba(168,85,247,0.6)] animate-bounce">{f.icon}</span>
                <p className="text-xs font-bold text-white">{f.title}</p>
                <p className="text-[10px] text-purple-200/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <Link to="/" hash="planos" className="btn-cta">
            Ver planos disponíveis
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
