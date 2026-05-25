import type { ReturnsData } from "@/lib/types";
import { UI, type Lang } from "@/lib/i18n";

export function ReturnsTab({ data, lang }: { data: ReturnsData; lang: Lang }) {
  const ui = UI[lang];
  return (
    <div className="space-y-12">
      <div>
        <h2 className="mb-1 text-[22px] font-bold tracking-tight text-[var(--color-ink)] sm:text-2xl">
          {data.transport.title}
        </h2>
        {data.transport.note && (
          <p className="mb-4 max-w-[760px] text-sm text-[var(--color-muted)]">
            {data.transport.note}
          </p>
        )}
        <div className="w-max max-w-full rounded-[20px] border border-[var(--color-soft)] sm:w-auto">
          <table className="w-full min-w-[520px] border-collapse text-[13px]">
            <thead>
              <tr className="text-left">
                <th className="sticky top-[124px] z-20 bg-[var(--color-smoke)] px-4 py-3 text-left font-semibold text-[var(--color-ink)]">{ui.th.warehouse}</th>
                {data.transport.columns.map((c) => (
                  <th key={c} className="sticky top-[124px] z-20 bg-[var(--color-smoke)] px-4 py-3 text-center font-semibold text-[var(--color-navy)]">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.transport.rows.map((r, i) => (
                <tr key={i} className="border-t border-[var(--color-soft)]">
                  <td className="px-4 py-3 font-medium">{r.warehouse}</td>
                  {r.prices.map((p, j) => (
                    <td key={j} className="px-4 py-3 text-center tabular-nums">{p}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-[22px] font-bold tracking-tight text-[var(--color-ink)] sm:text-2xl">
          {data.services.title}
        </h2>
        <div className="rounded-[24px] border border-[var(--color-soft)] bg-white p-6">
          <ul className="divide-y divide-[var(--color-soft)]">
            {data.services.items.map((it, i) => (
              <li key={i} className="flex items-baseline gap-4 py-3">
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
    </div>
  );
}
