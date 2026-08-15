import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowLeft, Clock, Headset, MessageCircleQuestion, Wrench } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { img, series, terror } from "@/data/catalog";
import { handleWhatsAppClick } from "@/utils/whatsapp";

function SmoothCardReveal({ children }: { children: React.ReactNode; delay?: number }) {
  return <div>{children}</div>;
}

export const Route = createFileRoute("/suporte")({
  head: () => ({
    meta: [
      { title: "Suporte UniTV PRO — Atendimento por WhatsApp" },
      {
        name: "description",
        content:
          "Fale com o suporte da UniTV PRO pelo WhatsApp: ajuda com instalação, problemas no app e dúvidas sobre planos e pagamentos.",
      },
      { property: "og:title", content: "Suporte UniTV PRO — Atendimento por WhatsApp" },
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
    gradient: "from-orange-500 via-orange-500 to-amber-500",
    glow: "shadow-[0_12px_35px_rgba(249,115,22,0.6)]",
    titulo: "Iniciar instalação",
    desc: "Passo a passo completo para ativar na sua Smart TV, TV Box, celular ou PC.",
    phone: "5519981875907",
    mensagem: "INICIAR INSTALAÇÃO UNITV PRO",
    url: "https://wa.me/5519981875907?text=INICIAR%20INSTALA%C3%87%C3%83O%20UNITV%20PRO",
  },
  {
    icon: Headset,
    badge3d: "🎧",
    gradient: "from-orange-600 via-orange-500 to-amber-500",
    glow: "shadow-[0_12px_35px_rgba(249,115,22,0.6)]",
    titulo: "Desejo renovar",
    desc: "Renove sua assinatura rapidamente sem perder suas configurações.",
    phone: "5519981875907",
    mensagem: "Olá, quero renovar o meu plano",
    url: "https://wa.me/5519981875907?text=Ol%C3%A1%2C%20quero%20renovar%20o%20meu%20plano",
  },
  {
    icon: MessageCircleQuestion,
    badge3d: "💬",
    gradient: "from-amber-500 via-orange-500 to-orange-600",
    glow: "shadow-[0_12px_35px_rgba(249,115,22,0.6)]",
    titulo: "Falar com o suporte",
    desc: "Tire dúvidas técnicas, receba auxílio com seu login ou ajuste de conta.",
    phone: "5519981875907",
    mensagem: "Olá, preciso de suporte",
    url: "https://wa.me/5519981875907?text=Ol%C3%A1%2C%20preciso%20de%20suporte",
  },
];

function Suporte() {
  const linha1 = terror.slice(0, 18);
  const linha2 = terror.slice(18, 36);
  const linha3 = terror.slice(36, 54);
  const linha4 = series.slice(0, 18);
  const linha5 = series.slice(18, 36);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* PAREDE ANIMADA DE PÔSTERES DE FILMES E SÉRIES FAMOSAS */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-50 brightness-75">
        <div className="flex flex-col gap-4 -mt-12 -rotate-2 scale-110 md:scale-125">
          {/* LINHA 1 - MARQUEE DA ESQUERDA PARA A DIREITA (ULTRA LENTO) */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-slow flex shrink-0 items-center gap-3.5 pr-3.5">
              {[...linha1, ...linha1].map((t, idx) => (
                <img
                  key={t.title + idx}
                  src={img(t.poster, "w342")}
                  alt=""
                  aria-hidden="true"
                  decoding="async"
                  className="h-42 sm:h-54 w-auto aspect-[2/3] rounded-xl object-cover shadow-[0_4px_20px_rgba(0,0,0,0.6)] border border-white/20"
                />
              ))}
            </div>
          </div>

          {/* LINHA 2 - MARQUEE DA DIREITA PARA A ESQUERDA (ULTRA LENTO) */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-reverse-slow flex shrink-0 items-center gap-3.5 pr-3.5">
              {[...linha2, ...linha2].map((t, idx) => (
                <img
                  key={t.title + idx}
                  src={img(t.poster, "w342")}
                  alt=""
                  aria-hidden="true"
                  decoding="async"
                  className="h-42 sm:h-54 w-auto aspect-[2/3] rounded-xl object-cover shadow-[0_4px_20px_rgba(0,0,0,0.6)] border border-white/20"
                />
              ))}
            </div>
          </div>

          {/* LINHA 3 - MARQUEE DA ESQUERDA PARA A DIREITA (ULTRA LENTO) */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-slow flex shrink-0 items-center gap-3.5 pr-3.5">
              {[...linha3, ...linha3].map((t, idx) => (
                <img
                  key={t.title + idx}
                  src={img(t.poster, "w342")}
                  alt=""
                  aria-hidden="true"
                  decoding="async"
                  className="h-42 sm:h-54 w-auto aspect-[2/3] rounded-xl object-cover shadow-[0_4px_20px_rgba(0,0,0,0.6)] border border-white/20"
                />
              ))}
            </div>
          </div>

          {/* LINHA 4 - MARQUEE DA DIREITA PARA A ESQUERDA (ULTRA LENTO) */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-reverse-slow flex shrink-0 items-center gap-3.5 pr-3.5">
              {[...linha4, ...linha4].map((t, idx) => (
                <img
                  key={t.title + idx}
                  src={img(t.poster, "w342")}
                  alt=""
                  aria-hidden="true"
                  decoding="async"
                  className="h-42 sm:h-54 w-auto aspect-[2/3] rounded-xl object-cover shadow-[0_4px_20px_rgba(0,0,0,0.6)] border border-white/20"
                />
              ))}
            </div>
          </div>

          {/* LINHA 5 - MARQUEE DA ESQUERDA PARA A DIREITA (ULTRA LENTO) */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-slow flex shrink-0 items-center gap-3.5 pr-3.5">
              {[...linha5, ...linha5].map((t, idx) => (
                <img
                  key={t.title + idx}
                  src={img(t.poster, "w342")}
                  alt=""
                  aria-hidden="true"
                  decoding="async"
                  className="h-42 sm:h-54 w-auto aspect-[2/3] rounded-xl object-cover shadow-[0_4px_20px_rgba(0,0,0,0.6)] border border-white/20"
                />
              ))}
            </div>
          </div>
        </div>

        {/* VINHETA CINEMATOGRÁFICA EQUILIBRADA */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-black/80 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-black/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,transparent_35%,rgba(0,0,0,0.78)_100%)]" />
        <div className="absolute inset-0 bg-black/52" />
      </div>


      <div className="relative z-10 mx-auto w-[94%] max-w-3xl px-1 py-16 sm:py-20">
        <SmoothCardReveal delay={0}>
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-blue-300/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" /> Voltar para o início
          </Link>
        </SmoothCardReveal>

        <SmoothCardReveal delay={60}>
          <div className="text-center">
            <span className="glass mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-surface/90 px-4 py-2 text-xs font-bold tracking-wide uppercase text-accent shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              <Clock className="size-3.5 fill-current" /> Atendimento humano 7 dias por semana
            </span>
            <h1 className="text-4xl font-extrabold md:text-6xl">
              Central de <span className="text-hot">Suporte</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Escolha o atendimento desejado abaixo. A conversa abrirá diretamente no seu WhatsApp com a mensagem pronta.
            </p>
          </div>
        </SmoothCardReveal>

        {/* CARDS COM ÍCONES 3D RELUZENTES */}
        <div className="mt-10 space-y-4">
          {BOTOES.map((b, i) => (
            <SmoothCardReveal key={b.titulo} delay={120 + i * 100}>
              <a
                href={b.url}
                onClick={(e) => handleWhatsAppClick(e, b.phone, b.mensagem)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex w-full items-center gap-6 rounded-4xl p-6 md:p-7 border border-blue-500/30 bg-gradient-to-b from-[#0a1428]/90 via-[#060e1f]/90 to-[#050b18]/90 backdrop-blur-xl shadow-[0_0_35px_rgba(249,115,22,0.2)] transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_55px_rgba(249,115,22,0.5)] hover:-translate-y-1.5"
              >
                {/* ÍCONE 3D COM ANIMAÇÃO FLUTUANTE */}
                <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <div className={`relative flex size-15 sm:size-16 items-center justify-center rounded-2xl bg-gradient-to-br ${b.gradient} p-0.5 border border-white/40 ${b.glow} transition-all duration-300`}>
                    <div className="relative flex size-full items-center justify-center rounded-[14px] bg-black/25 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-90" />
                      <b.icon className="size-7 sm:size-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] relative z-10 animate-[float_3s_ease-in-out_infinite]" />
                    </div>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-lg sm:text-xl font-extrabold text-white group-hover:text-blue-200 transition-colors">
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
            </SmoothCardReveal>
          ))}
        </div>

        {/* BADGES 3D DE GARANTIA E CONFIANÇA ABAIXO */}
        <SmoothCardReveal delay={450}>
          <div className="grid grid-cols-3 gap-3 mt-10">
            {[
              { icon: "⚡", title: "Atendimento Rápido", desc: "Resposta imediata" },
              { icon: "🛡️", title: "Suporte 100% Seguro", desc: "Equipe oficial" },
              { icon: "🚀", title: "Ativação Imediata", desc: "Acesso na mesma hora" },
            ].map((f) => (
              <div
                key={f.title}
                className="flex flex-col items-center gap-1.5 rounded-3xl border border-blue-500/30 bg-blue-950/40 p-4 text-center backdrop-blur-md transition-all duration-300 hover:border-blue-400/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.3)] hover:-translate-y-1"
              >
                <span className="text-2xl sm:text-3xl drop-shadow-[0_4px_12px_rgba(249,115,22,0.6)] animate-bounce">{f.icon}</span>
                <p className="text-xs font-bold text-white">{f.title}</p>
                <p className="text-[10px] text-blue-200/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </SmoothCardReveal>

        <SmoothCardReveal delay={550}>
          <div className="mt-10 text-center">
            <Link to="/" hash="planos" className="btn-cta">
              Ver planos disponíveis
            </Link>
          </div>
        </SmoothCardReveal>
      </div>
    </div>
  );
}
