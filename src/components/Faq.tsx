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
        if (entry?.isIntersecting) {
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
    q: "O que é o UniTV Pro?",
    a: "O UniTV Pro é uma plataforma digital de streaming que oferece uma ampla variedade de conteúdos, incluindo filmes, séries, documentários, programas de TV ao vivo e muito mais. Com uma interface intuitiva e uma vasta biblioteca de opções, o UniTV Pro se destaca como uma escolha popular entre os consumidores que buscam entretenimento de alta qualidade a qualquer hora e em qualquer lugar.",
  },
  {
    q: "O app é compatível com quais aparelhos?",
    a: "O UniTV Pro é compatível com Smart TV Android, TV Box, Mi Stick Xiaomi, FireTV Amazon, celular Android, tablets e projetores Android. Para assistir no computador ou notebook Windows, é necessário utilizar um emulador Android — recomendamos o LDPlayer por ser leve e rápido (evite o BlueStacks).",
  },
  {
    q: "Posso assistir em vários aparelhos ao mesmo tempo?",
    a: "Você pode fazer login em até dois aparelhos com o mesmo acesso, caso escolha o Plano Anual (2 telas). Os planos Mensal e Trimestral permitem 1 tela simultânea.",
  },
  {
    q: "Onde recebo o meu código de acesso UniTV Pro?",
    a: "O código de recarga ou conta e senha é enviado de maneira imediata após a confirmação de pagamento. Caso não receba, entre em contato pelo e-mail unitvpro.oficial2026@gmail.com ou pelo nosso WhatsApp.",
  },
  {
    q: "Como utilizar o período de teste grátis?",
    a: "Para realizar um teste grátis, basta instalar o aplicativo em seu dispositivo Android! Os testes são disponibilizados automaticamente através do dispositivo e da conta, podendo ser realizados uma única vez por aparelho/usuário.",
  },
  {
    q: "Como instalar o UniTV Pro na Smart TV ou TV Stick?",
    a: "MÉTODO 1 (Downloader): Baixe o app Downloader na loja de aplicativos, abra-o e digite o código 1089401. Siga as instruções na tela. — MÉTODO 2 (NtDown): Baixe o app NtDown na Play Store e coloque o código 94596.",
  },
  {
    q: "Como fazer uma recarga UniTV Pro?",
    a: "Você pode fazer sua recarga UniTV Pro via Cartão de Crédito ou PIX diretamente em nosso site. Selecione o plano desejado e conclua a compra de forma rápida e segura. Seu código ou acesso será liberado com aprovação imediata.",
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
        <div className="glass border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden rounded-2xl transition-all duration-300 hover:border-primary/40 shadow-sm">
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
    <section id="faq" className="mx-auto w-[94%] max-w-6xl py-4 sm:py-6">
      <SmoothCardReveal delay={50}>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-surface/60 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-wider text-accent uppercase shadow-sm mb-4">
            <HelpCircle className="size-3.5 text-accent" /> Central de Ajuda
          </span>
          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl tracking-tight text-white">
            Perguntas <span className="text-hot">frequentes</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
            Tire todas as suas dúvidas sobre o UniTV Pro.
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
