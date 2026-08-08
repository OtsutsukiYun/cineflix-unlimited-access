import { useEffect, useState } from "react";
import { BadgeCheck, TrendingUp } from "lucide-react";

const NOMES = [
  "Lucas Almeida",
  "Mariana Rocha",
  "Rafael Nogueira",
  "Juliana Martins",
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
    <div
      aria-live="polite"
      className="pointer-events-none fixed bottom-6 left-6 z-30 hidden md:block"
    >
      {notif ? (
        <div
          key={notif.id}
          className="glass toast-in flex max-w-[320px] items-center gap-3 rounded-2xl px-4 py-3 shadow-[0_0_30px_rgba(168,85,247,0.35)] border border-purple-500/40 bg-purple-950/90 backdrop-blur-xl"
        >
          <div className="bg-hot flex size-9 shrink-0 items-center justify-center rounded-full">
            <BadgeCheck className="size-4 text-primary-foreground" />
          </div>
          <div className="text-left min-w-0">
            <p className="text-xs font-bold text-white truncate">
              {notif.nome}, de {notif.estado}
            </p>
            <p className="text-[11px] text-muted-foreground">
              acabou de assinar o <span className="text-purple-300 font-semibold">{notif.plano}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="glass flex items-center gap-2.5 rounded-full px-4 py-2.5 text-xs font-semibold shadow-[0_0_20px_rgba(168,85,247,0.3)] border border-purple-500/40 bg-purple-950/90 backdrop-blur-xl">
          <TrendingUp className="size-4 text-accent shrink-0" />
          <span className="whitespace-nowrap text-white">
            <span className="text-hot font-black text-sm">{vendas}</span> pessoas assinaram hoje
          </span>
        </div>
      )}
    </div>
  );
}
