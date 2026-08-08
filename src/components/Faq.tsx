import { useState, useRef, useEffect } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

function SmoothCardReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
        }
      },
      { threshold: 0.05, rootMargin: "60px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: "650ms",
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all duration-700 ${
        shown
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-7 scale-[0.98]"
      }`}
    >
      {children}
    </div>
  );
}

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
  const col1 = PERGUNTAS.filter((_, i) => i % 2 === 0);
  const col2 = PERGUNTAS.filter((_, i) => i % 2 !== 0);

  const renderQuestion = (p: (typeof PERGUNTAS)[0], origIndex: number) => {
    const open = aberta === origIndex;
    return (
      <SmoothCardReveal key={p.q} delay={Math.min(origIndex, 6) * 70}>
        <div className="glass border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden rounded-3xl transition-all duration-300 hover:border-purple-400/40">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setAberta(open ? null : origIndex)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="font-semibold text-white">{p.q}</span>
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
      </SmoothCardReveal>
    );
  };

  return (
    <section id="faq" className="mx-auto w-[94%] max-w-6xl py-10 sm:py-12">
      <SmoothCardReveal delay={50}>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-950/60 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-wider text-purple-200 uppercase shadow-[0_0_20px_rgba(168,85,247,0.25)] mb-4">
            <HelpCircle className="size-3.5 text-accent" /> Central de Ajuda
          </span>
          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl tracking-tight text-white">
            Perguntas <span className="text-hot">frequentes</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
            Tire suas dúvidas sobre instalação, compatibilidade e funcionamento do serviço.
          </p>
        </div>
      </SmoothCardReveal>

      <div className="mt-8 grid items-start gap-3 md:grid-cols-2">
        <div className="space-y-3">
          {col1.map((p, i) => renderQuestion(p, i * 2))}
        </div>
        <div className="space-y-3">
          {col2.map((p, i) => renderQuestion(p, i * 2 + 1))}
        </div>
      </div>

      {children && (
        <SmoothCardReveal delay={300}>
          <div className="mt-10 flex justify-center">{children}</div>
        </SmoothCardReveal>
      )}
    </section>
  );
}
