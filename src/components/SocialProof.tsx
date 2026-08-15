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

function getDailySales() {
  const now = new Date();
  const dateKey = `sales_count_${now.getFullYear()}_${now.getMonth() + 1}_${now.getDate()}`;
  
  // Minutos decorridos no dia (0 a 1439)
  const minutesToday = now.getHours() * 60 + now.getMinutes();
  
  // Base inicial da manhã (variando entre 18 e 32)
  const morningBase = 18 + ((now.getDate() * 7 + now.getMonth() * 13) % 15);
  
  // Crescimento contínuo ao longo das horas do dia (~1 venda a cada 12 min)
  const salesThroughoutDay = Math.floor(minutesToday / 12);
  const calculatedBase = morningBase + salesThroughoutDay;
  
  try {
    const stored = localStorage.getItem(dateKey);
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed) && parsed >= calculatedBase) {
        return parsed;
      }
    }
  } catch (e) {
    // Fallback silencioso se localStorage estiver desativado
  }

  return calculatedBase;
}

export function SocialProof() {
  const [notif, setNotif] = useState<Notif | null>(null);
  const [vendas, setVendas] = useState(0);

  useEffect(() => {
    const initialSales = getDailySales();
    setVendas(initialSales);

    const now = new Date();
    const dateKey = `sales_count_${now.getFullYear()}_${now.getMonth() + 1}_${now.getDate()}`;

    const inc = setInterval(() => {
      setVendas((prev) => {
        const next = prev + 1;
        try {
          localStorage.setItem(dateKey, String(next));
        } catch (e) {}
        return next;
      });
    }, 45000); // Incrementa +1 a cada 45 segundos e salva no localStorage

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
      {/* Contador de assinaturas do dia — canto inferior esquerdo */}
      <div className="pointer-events-none fixed bottom-4 left-4 z-40 md:bottom-6 md:left-6">
        <div className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold border border-white/10 bg-black/60 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.5)] text-white">
          <TrendingUp className="size-3.5 text-accent shrink-0" />
          <span className="whitespace-nowrap">
            <span className="text-hot font-extrabold">{vendas}</span> pessoas assinaram hoje
          </span>
        </div>
      </div>

      {/* Notificação de compra recente — canto inferior direito (no mobile fica acima a bottom-16 para NUNCA colidir) */}
      <div
        aria-live="polite"
        className="pointer-events-none fixed bottom-16 right-4 z-40 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6"
      >
        {notif && (
          <div
            key={notif.id}
            className="toast-in flex max-w-[280px] sm:max-w-[320px] items-center gap-3 rounded-2xl px-4 py-3 border border-white/10 bg-black/60 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.5)] text-white"
          >
            <div className="bg-hot flex size-9 shrink-0 items-center justify-center rounded-full">
              <BadgeCheck className="size-4 text-primary-foreground" />
            </div>
            <div className="text-left min-w-0">
              <p className="text-sm leading-snug font-semibold truncate text-white">
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
