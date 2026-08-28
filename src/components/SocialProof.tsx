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
  "Marcelo Ribeiro",
  "Renata Vasconcelos",
  "Gabriel Monteiro",
  "Vanessa Pires",
  "André Silveira",
  "Carolina Mendonça",
  "Felipe Castro",
  "Isabela Farias",
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
  "Maranhão",
  "Distrito Federal",
  "Mato Grosso",
  "Amazonas",
];

const PLANOS = ["Plano Mensal", "Plano Trimestral", "Plano Anual VIP"];

const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)]!;

type Notif = { id: number; nome: string; estado: string; plano: string };

function getDailySales() {
  const now = new Date();
  const minutesToday = now.getHours() * 60 + now.getMinutes();
  const morningBase = 18 + (now.getDate() % 10);
  const salesThroughoutDay = Math.floor(minutesToday / 20);
  return morningBase + salesThroughoutDay;
}

interface SocialProofProps {
  showCounter?: boolean;
  fastCycle?: boolean;
}

export function SocialProof({ showCounter = true, fastCycle = false }: SocialProofProps) {
  const [notif, setNotif] = useState<Notif | null>(null);
  const [vendas, setVendas] = useState(0);

  useEffect(() => {
    setVendas(getDailySales());

    let hideTimer: ReturnType<typeof setTimeout>;
    let nextTimer: ReturnType<typeof setTimeout>;
    let id = 0;

    const show = () => {
      id += 1;
      setNotif({
        id,
        nome: pick(NOMES),
        estado: pick(ESTADOS),
        plano: pick(PLANOS),
      });

      setVendas((prev) => prev + 1);

      // Permanece visível por 4 segundos
      hideTimer = setTimeout(() => setNotif(null), 4000);
    };

    const scheduleNext = () => {
      // Se for fastCycle (página de teste/instalação), as notificações passam a cada 10s a 18s
      const minDelay = fastCycle ? 10000 : 45000;
      const maxDelay = fastCycle ? 18000 : 80000;
      const delay = Math.floor(Math.random() * (maxDelay - minDelay) + minDelay);

      nextTimer = setTimeout(() => {
        show();
        scheduleNext();
      }, delay);
    };

    // Primeira notificação de assinante aparece após 4s em fastCycle ou 15s na home
    const initialDelay = fastCycle ? 4000 : 15000;
    const first = setTimeout(() => {
      show();
      scheduleNext();
    }, initialDelay);

    return () => {
      clearTimeout(first);
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [fastCycle]);

  return (
    <>
      {/* Contador de assinaturas do dia (Exibido apenas quando showCounter for true) */}
      {showCounter && (
        <div className="pointer-events-none fixed bottom-4 left-4 z-40 md:bottom-6 md:left-6">
          <div className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold border border-white/10 bg-black/60 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.5)] text-white">
            <TrendingUp className="size-3.5 text-red-500 shrink-0" />
            <span className="whitespace-nowrap">
              <span className="text-red-400 font-extrabold">{vendas}</span> pessoas assinaram hoje
            </span>
          </div>
        </div>
      )}

      {/* Notificação de compra recente com nome do assinante — no canto esquerdo, elevado para não colidir com suporte no direito */}
      <div
        aria-live="polite"
        className="pointer-events-none fixed bottom-20 left-4 z-40 sm:bottom-6 sm:left-6"
      >
        {notif && (
          <div
            key={notif.id}
            className="toast-in flex max-w-[240px] min-[380px]:max-w-[280px] sm:max-w-[320px] items-center gap-2.5 sm:gap-3 rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 border border-red-500/40 bg-[#0c0c0c]/95 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.9)] text-white border-l-4 border-l-red-500"
          >
            <div className="bg-gradient-to-br from-red-600 to-rose-700 flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-full shadow-[0_0_12px_rgba(220,38,38,0.5)]">
              <BadgeCheck className="size-4 sm:size-5 text-white" />
            </div>
            <div className="text-left min-w-0">
              <p className="text-[11px] sm:text-xs leading-tight font-bold truncate text-white">
                {notif.nome}, <span className="text-red-400 font-medium">de {notif.estado}</span>
              </p>
              <p className="text-[10px] sm:text-[11px] text-white/75 truncate mt-0.5">
                acabou de assinar o <strong className="text-white font-bold">{notif.plano}</strong>.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
