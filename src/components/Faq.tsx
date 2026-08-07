import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const PERGUNTAS = [
  {
    q: "Como funciona a Cineflix?",
    a: "É um aplicativo de streaming por internet: você recebe seu acesso e assiste filmes, séries, animes, canais ao vivo e esportes em qualquer aparelho conectado. Sem antena, sem decodificador e sem fidelidade.",
  },
  {
    q: "Em quais aparelhos eu posso assistir?",
    a: "Smart TV, TV Box, Chromecast, celular Android e iPhone, tablet, notebook e computador. Basta ter internet.",
  },
  {
    q: "Quanto tempo leva para liberar meu acesso?",
    a: "A ativação é imediata após a confirmação do pagamento. Você recebe os dados de acesso e o passo a passo de instalação na hora.",
  },
  {
    q: "Posso usar em mais de uma tela ao mesmo tempo?",
    a: "Sim. Os planos START e PRO permitem 2 telas simultâneas e o plano PRIME permite 4 telas simultâneas.",
  },
  {
    q: "Qual velocidade de internet eu preciso?",
    a: "A partir de 10 Mbps você assiste em HD com estabilidade. Para 4K recomendamos 25 Mbps ou mais.",
  },
  {
    q: "Tem conteúdo adulto? É seguro para crianças?",
    a: "O pacote adulto é totalmente opcional e fica protegido por senha, então a criançada navega apenas pelos canais infantis com segurança.",
  },
  {
    q: "Preciso pagar mensalidade nos planos anuais?",
    a: "Não. Nos planos PRIME e PRO você paga uma única vez e usa durante todo o período contratado, sem mensalidade.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Cartão de crédito (com parcelamento) e PIX. O checkout é criptografado e processado por plataforma segura.",
  },
  {
    q: "E se eu tiver algum problema?",
    a: "Nosso suporte atende por WhatsApp todos os dias, ajudando na instalação, na troca de aparelho e em qualquer dúvida técnica.",
  },
];

export function Faq({ children }: { children?: React.ReactNode }) {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto w-[94%] max-w-3xl py-20">
      <Reveal className="text-center">
        <span className="glass mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase">
          <HelpCircle className="size-3.5 text-accent" /> Dúvidas frequentes
        </span>
        <h2 className="text-4xl font-extrabold md:text-5xl">
          Perguntas <span className="text-hot">frequentes</span>
        </h2>
      </Reveal>

      <div className="mt-10 space-y-3">
        {PERGUNTAS.map((p, i) => {
          const open = aberta === i;
          return (
            <Reveal key={p.q} delay={Math.min(i, 6) * 60}>
              <div className="glass overflow-hidden rounded-3xl">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setAberta(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold">{p.q}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-accent transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-400 ease-out"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                      {p.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {children && <Reveal className="mt-10 flex justify-center">{children}</Reveal>}
    </section>
  );
}
