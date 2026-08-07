export function BrandLogo({
  nome,
  logo,
  invert = false,
  escala = 1,
  cor,
  className = "h-7",
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
        loading="lazy"
        style={escala !== 1 ? { transform: `scale(${escala})` } : undefined}
        className={`${className} w-auto max-w-[130px] object-contain ${
          invert ? "brightness-0 invert" : ""
        }`}
      />
    );
  }
  return (
    <span
      className={`font-display flex items-center text-base font-extrabold tracking-tight whitespace-nowrap ${className}`}
      style={{ color: cor }}
    >
      {nome}
    </span>
  );
}
