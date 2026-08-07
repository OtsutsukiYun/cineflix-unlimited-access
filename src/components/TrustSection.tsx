import { CreditCard, Lock, QrCode, Barcode, ShieldCheck, RefreshCcw } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function TrustSection() {
  return (
    <section className="mx-auto w-[94%] max-w-6xl py-6 sm:py-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="glass h-full rounded-4xl p-8">
            <h3 className="font-display mb-5 text-sm font-bold tracking-[0.18em] text-accent uppercase">
              Formas de pagamento
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: CreditCard, l: "Cartão de crédito" },
                { icon: QrCode, l: "PIX" },
              ].map((f) => (
                <span
                  key={f.l}
                  className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm"
                >
                  <f.icon className="size-4 text-accent" />
                  {f.l}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Parcelamento disponível no cartão e liberação imediata no PIX.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass h-full rounded-4xl p-8">
            <h3 className="font-display mb-5 text-sm font-bold tracking-[0.18em] text-accent uppercase">
              Site seguro
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: Lock, t: "SSL", d: "Conexão segura" },
                { icon: ShieldCheck, t: "Criptografado", d: "Dados protegidos" },
                { icon: RefreshCcw, t: "Compra garantida", d: "Suporte dedicado" },
              ].map((s, i) => (
                <Reveal key={s.t} delay={150 + i * 80}>
                  <div
                    className="flex flex-col items-center gap-1.5 rounded-2xl border border-border bg-surface px-3 py-5 text-center transition-all duration-300 hover:border-primary/40 hover:scale-105"
                  >
                    <s.icon className="size-5 text-accent" />
                    <p className="text-sm font-bold">{s.t}</p>
                    <p className="text-xs text-muted-foreground">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Checkout processado em ambiente criptografado, com seus dados
              protegidos do início ao fim.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
