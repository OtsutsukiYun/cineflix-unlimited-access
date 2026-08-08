export function BrandLogo({
  nome,
  logo,
  invert = false,
  escala = 1,
  cor,
  className = "h-5 sm:h-6",
}: {
  nome: string;
  logo: string | null;
  invert?: boolean;
  escala?: number;
  cor: string;
  className?: string;
}) {
  if (logo) {
    return (
      <img
        src={logo}
        alt={`Logo ${nome}`}
        decoding="async"
        style={escala !== 1 ? { transform: `scale(${escala})` } : undefined}
        className={`${className} w-auto max-w-[85px] sm:max-w-[100px] max-h-7 object-contain ${
          invert ? "brightness-0 invert" : ""
        }`}
      />
    );
  }
  return (
    <span
      className="font-display flex items-center justify-center text-[11px] sm:text-xs font-black tracking-tight whitespace-nowrap drop-shadow-sm"
      style={{ color: cor }}
    >
      {nome}
    </span>
  );
}
