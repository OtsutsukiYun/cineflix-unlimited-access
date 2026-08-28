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
  const total = morningBase + salesThroughoutDay;
  return Math.floor(total * 0.6);
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
          <div className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] text-white">
            <TrendingUp className="size-3.5 text-red-400 shrink-0 animate-pulse" />
            <span className="whitespace-nowrap">
              <span className="text-red-300 font-black">{vendas}</span> pessoas assinaram hoje
            </span>
          </div>
        </div>
      )}

      {/* Notificação de compra recente com nome do assinante — estilo vidro translúcido (Glassmorphism) */}
      <div
        aria-live="polite"
        className="pointer-events-none fixed bottom-20 left-4 z-40 sm:bottom-6 sm:left-6"
      >
        {notif && (
          <div
            key={notif.id}
            className="toast-in flex max-w-[240px] min-[380px]:max-w-[280px] sm:max-w-[340px] items-center gap-3 rounded-2xl px-3.5 py-3 sm:px-4 sm:py-3.5 border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(220,38,38,0.2)] text-white"
          >
            <div className="bg-gradient-to-br from-red-600 to-rose-700 flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-full shadow-[0_0_15px_rgba(220,38,38,0.6)] border border-white/30">
              <BadgeCheck className="size-4.5 sm:size-5 text-white" />
            </div>
            <div className="text-left min-w-0">
              <p className="text-[11px] sm:text-xs leading-tight font-extrabold truncate text-white">
                {notif.nome}, <span className="text-red-300 font-semibold">de {notif.estado}</span>
              </p>
              <p className="text-[10px] sm:text-[11px] text-white/80 truncate mt-0.5 font-medium">
                acabou de assinar o <strong className="text-white font-extrabold">{notif.plano}</strong>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
