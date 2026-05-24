import type { ShopBoostData } from "@/lib/types";

export function ShopBoostTab({ data }: { data: ShopBoostData }) {
  return (
    <div className="space-y-12">
      {data.groups.map((g, i) => (
        <div key={i}>
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-ink)] sm:text-2xl">
            {g.title}
          </h2>
          {g.intro && (
            <p className="mt-2 max-w-[760px] text-sm text-[var(--color-muted)]">{g.intro}</p>
          )}
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {g.packages.map((p, j) => (
              <article
                key={j}
                className="flex flex-col rounded-[24px] border border-[var(--color-soft)] bg-white p-6 transition-shadow hover:shadow-[0_8px_48px_0_rgb(0_0_0_/_0.06)]"
              >
                <h3 className="text-base font-bold text-[var(--color-ink)]">{p.title}</h3>
                {p.description && (
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {p.description}
                  </p>
                )}
                {p.bullets && p.bullets.length > 0 && (
                  <ul className="mt-3 space-y-1.5 text-sm text-[var(--color-ink)]">
                    {p.bullets.map((b, k) => (
                      <li key={k} className="flex items-start gap-2">
                        <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-navy)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {p.bonus && (
                  <div className="mt-4 rounded-xl bg-[var(--color-yellow)]/30 px-3 py-2 text-xs font-medium text-[var(--color-ink)]">
                    Бонус: {p.bonus}
                  </div>
                )}
                <div className="mt-5 flex items-end justify-between gap-3 border-t border-[var(--color-soft)] pt-4">
                  <div className="text-xl font-bold tabular-nums text-[var(--color-navy)]">
                    {p.price}
                  </div>
                  {p.ctaLabel && p.ctaUrl && (
                    <a
                      href={p.ctaUrl}
                      target="_blank"
                      rel="noopener"
                      className="rounded-[57.6px] bg-[var(--color-navy)] px-4 py-2 text-xs font-semibold text-white transition-shadow hover:shadow-[0_4px_16px_0_rgb(10_36_99_/_0.32)]"
                    >
                      {p.ctaLabel}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
