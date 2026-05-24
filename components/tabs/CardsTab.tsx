import type { CardsData } from "@/lib/types";

export function CardsTab({ data }: { data: CardsData }) {
  return (
    <div className="space-y-10">
      {data.groups.map((g, i) => (
        <div key={i}>
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-ink)] sm:text-2xl">
            {g.title}
          </h2>
          {g.subtitle && (
            <p className="mt-1 text-sm text-[var(--color-muted)]">{g.subtitle}</p>
          )}
          <div className="mt-5 rounded-[24px] border border-[var(--color-soft)] bg-white p-6">
            <ul className="divide-y divide-[var(--color-soft)]">
              {g.items.map((it, j) => (
                <li key={j} className="flex items-baseline gap-4 py-3.5">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-[var(--color-ink)]">{it.label}</div>
                    {it.description && (
                      <div className="mt-0.5 text-xs text-[var(--color-muted)]">{it.description}</div>
                    )}
                  </div>
                  <div className="whitespace-nowrap text-sm font-semibold tabular-nums text-[var(--color-navy)]">
                    {it.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
