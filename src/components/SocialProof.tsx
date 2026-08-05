import { useEffect, useState } from "react";
import { BadgeCheck, TrendingUp } from "lucide-react";

const NOMES = [
  "Lucas Almeida",
  "Mariana Rocha",
  "Rafael Nogueira",
  "Julianaప",
  "Bruno Carvalho",
  "Camila Fernandes",
  "Thiago Barbosa",
  "Patrícia Menezes",
  "Eduardo Ramalho",
  "Fernanda Lopes",
  "Gustavo Teixeira",
  "Aline Cavalcanti",
  "Rodrigo Siqueira",
  "Beatriz Andrade",
  "Vinícius Moraes",
  "Larissa Duarte",
];

const ESTADOS = [
  "Minas Gerais",
  "São Paulo",
  "Rio de Janeiro",
  "Bahia",
  "Paraná",
  "Rio Grande do Sul",
  "Ceará",
  "Pernambuco",
  "Santa Catarina",
  "Goiás",
  "Pará",
  "Espírito Santo",
];

const PLANOS = ["Plano Mensal", "Plano Semestral", "Plano de 2 Anos"];

const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)]!;

type Notif = { id: number; nome: string; estado: string; plano: string };

export function SocialProof() {
  const [notif, setNotif] = useState<Notif | null>(null);
  const [vendas, setVendas] = useState(0);

  useEffect(() => {
    // contador do dia: base estável + incrementos suaves
    const hoje = new Date();
    const base =
      28 + ((hoje.getDate() * 7 + hoje.getMonth() * 13) % 22);
    setVendas(base);

    const inc = setInterval(
      () => setVendas((v) => v + 1),
      45000,
    );
    return () => clearInterval(inc);
  }, []);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    let id = 0;

    const show = () => {
      id += 1;
      setNotif({
        id,
        nome: pick(NOMES),
        estado: pick(ESTADOS),
        plano: pick(PLANOS),
      });
      hideTimer = setTimeout(() => setNotif(null), 5500);
    };

    const first = setTimeout(show, 6000);
    const loop = setInterval(show, 16000);
    return () => {
      clearTimeout(first);
      clearTimeout(hideTimer);
      clearInterval(loop);
    };
  }, []);

  return (
    <>
      {/* Contador de assinaturas do dia */}
      <div className="pointer-events-none fixed bottom-4 left-1/2 z-40 -translate-x-1/2 md:bottom-6 md:left-6 md:translate-x-0">
        <div className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow-[var(--shadow-glow)]">
          <TrendingUp className="size-3.5 text-accent" />
          <span>
            <span className="text-hot font-extrabold">{vendas}</span> pessoas
            assinaram hoje
          </span>
        </div>
      </div>

      {/* Notificação de compra recente */}
      <div
        aria-live="polite"
        className="pointer-events-none fixed inset-x-3 bottom-16 z-40 flex justify-center md:inset-x-auto md:right-6 md:bottom-6 md:justify-end"
      >
        {notif && (
          <div
            key={notif.id}
            className="glass toast-in flex max-w-[340px] items-center gap-3 rounded-2xl px-4 py-3 shadow-[var(--shadow-neon)]"
          >
            <div className="bg-hot flex size-9 shrink-0 items-center justify-center rounded-full">
              <BadgeCheck className="size-4 text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-sm leading-snug font-semibold">
                {notif.nome}, de {notif.estado}
              </p>
              <p className="text-xs text-muted-foreground">
                acabou de assinar o {notif.plano}.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
