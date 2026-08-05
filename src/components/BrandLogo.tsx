import { icon } from "@/data/catalog";

export function BrandLogo({
  nome,
  slug,
  cor,
  className = "h-7",
}: {
  nome: string;
  slug: string | null;
  cor: string;
  className?: string;
}) {
  if (slug) {
    return (
      <img
        src={icon(slug)}
        alt={nome}
        loading="lazy"
        className={`${className} w-auto`}
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
