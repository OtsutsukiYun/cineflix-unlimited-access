import { Headphones, ArrowDown } from "lucide-react";

export function FloatingSupportButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById("suporte") || document.getElementById("contatos");

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-[95]">
      <a
        href="#suporte"
        onClick={handleClick}
        aria-label="Ir para contatos e suporte ao cliente"
        className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-rose-700 px-3 py-2 sm:px-4 sm:py-2.5 text-[11px] sm:text-xs font-black text-white shadow-[0_0_20px_rgba(220,38,38,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.85)] border border-white/20 active:scale-95 cursor-pointer backdrop-blur-md"
      >
        <span className="flex size-5 sm:size-6 items-center justify-center rounded-full bg-white/20">
          <Headphones className="size-3 sm:size-3.5 text-white" />
        </span>
        <span className="uppercase tracking-wider font-extrabold">Suporte</span>
        <ArrowDown className="size-3 animate-bounce text-red-200" />
      </a>
    </div>
  );
}
