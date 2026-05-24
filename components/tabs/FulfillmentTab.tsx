import type { FulfillmentData } from "@/lib/types";
import { UI, type Lang } from "@/lib/i18n";

export function FulfillmentTab({ data, lang }: { data: FulfillmentData; lang: Lang }) {
  const ui = UI[lang];
  return (
    <div className="space-y-12">
      {/* Main matrix */}
      <Section title={data.matrix.title} description={data.intro?.note}>
        <div className="overflow-x-auto rounded-[20px] border border-[var(--color-soft)]">
          <table className="w-full min-w-[760px] border-collapse text-[13px]">
            <thead>
              <tr className="text-left">
                <th className="sticky top-[124px] z-20 bg-[var(--color-smoke)] px-4 py-3 text-left font-semibold text-[var(--color-ink)]" rowSpan={2}>
                  {ui.th.service}
                </th>
                <th className="sticky top-[124px] z-20 bg-[var(--color-smoke)] px-4 py-3 text-left font-semibold text-[var(--color-ink)]" rowSpan={2}>
                  {ui.th.tier}
                </th>
                {data.matrix.columns.map((c) => (
                  <th key={c.label} className="sticky top-[124px] z-20 bg-[var(--color-smoke)] px-3 py-2 text-center align-bottom">
                    {c.category && (
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted)]">
                        {c.category}
                      </div>
                    )}
                    <div className="font-semibold text-[var(--color-navy)]">{c.label}</div>
                  </th>
                ))}
              </tr>
              <tr aria-hidden />
            </thead>
            <tbody>
              {data.matrix.groups.map((g, gi) => (
                <RowGroup key={gi} group={g} colCount={data.matrix.columns.length} />
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* FBS */}
      <Section title={data.fbs.title} description={data.fbs.description}>
        <div className="overflow-x-auto rounded-[20px] border border-[var(--color-soft)]">
          <table className="w-full min-w-[680px] border-collapse text-[13px]">
            <thead>
              <tr className="text-left">
                <th className="sticky top-[124px] z-20 bg-[var(--color-smoke)] px-4 py-3 text-left font-semibold text-[var(--color-ink)]">{ui.th.service}</th>
                {data.fbs.columns.map((c) => (
                  <th key={c.label} className="sticky top-[124px] z-20 bg-[var(--color-smoke)] px-3 py-3 text-center">
                    {c.category && (
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted)]">
                        {c.category}
                      </div>
                    )}
                    <div className="font-semibold text-[var(--color-navy)]">{c.label}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.fbs.rows.map((r, i) => (
                <tr key={i} className="border-t border-[var(--color-soft)]">
                  <td className="px-4 py-3 align-top">
                    <div className="font-medium text-[var(--color-ink)]">{r.label}</div>
                    {r.description && (
                      <div className="mt-1 text-xs text-[var(--color-muted)]">{r.description}</div>
                    )}
                  </td>
                  {r.prices.map((p, j) => (
                    <td key={j} className="px-3 py-3 text-center text-[var(--color-ink)] tabular-nums">
                      {p === "—" || p === "" ? <span className="text-[var(--color-muted)]">—</span> : p}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Supply (platforms grid) */}
      <Section title={data.supply.title}>
        <div className="overflow-x-auto rounded-[20px] border border-[var(--color-soft)]">
          <table className="w-full min-w-[480px] border-collapse text-[13px]">
            <thead>
              <tr className="text-left">
                <th className="sticky top-[124px] z-20 bg-[var(--color-smoke)] px-4 py-3 text-left font-semibold text-[var(--color-ink)]">{ui.th.type}</th>
                {data.supply.platforms.map((p) => (
                  <th key={p} className="sticky top-[124px] z-20 bg-[var(--color-smoke)] px-4 py-3 text-center font-semibold text-[var(--color-navy)]">
                    {p}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.supply.rows.map((r, i) => (
                <tr key={i} className="border-t border-[var(--color-soft)]">
                  <td className="px-4 py-3 font-medium">{r.type}</td>
                  {r.prices.map((p, j) => (
                    <td key={j} className="px-4 py-3 text-center tabular-nums">{p}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Storage + Extras as 2-col cards */}
      <div className="grid gap-8 lg:grid-cols-2">
        <SimpleListBlock title={data.storage.title} items={data.storage.items} />
        <SimpleListBlock title={data.extras.title} items={data.extras.items} />
      </div>
    </div>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-1 text-[22px] font-bold tracking-tight text-[var(--color-ink)] sm:text-2xl">
        {title}
      </h2>
      {description && (
        <p className="mb-4 max-w-[760px] text-sm text-[var(--color-muted)]">{description}</p>
      )}
      <div className="mt-4">{children}</div>
    </div>
  );
}

function RowGroup({
  group,
  colCount,
}: {
  group: FulfillmentData["matrix"]["groups"][number];
  colCount: number;
}) {
  return (
    <>
      {group.rows.map((row, i) => (
        <tr key={i} className="border-t border-[var(--color-soft)]">
          {i === 0 ? (
            <td className="px-4 py-3 align-top" rowSpan={group.rows.length}>
              <div className="font-semibold text-[var(--color-ink)]">{group.service}</div>
              {group.description && (
                <div className="mt-1 max-w-[260px] text-xs text-[var(--color-muted)]">
                  {group.description}
                </div>
              )}
            </td>
          ) : null}
          <td className="px-4 py-2 text-[12px] text-[var(--color-muted)]">{row.tier}</td>
          {row.prices.map((p, j) => (
            <td
              key={j}
              className={`px-3 py-2 text-center tabular-nums ${
                p === "—" || p === "" ? "text-[var(--color-muted)]" : "text-[var(--color-ink)]"
              }`}
            >
              {p === "—" || p === "" ? "—" : p}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

function SimpleListBlock({
  title,
  items,
}: {
  title: string;
  items: { label: string; description?: string; price: string }[];
}) {
  return (
    <div className="rounded-[24px] border border-[var(--color-soft)] bg-white p-6">
      <h3 className="mb-4 text-lg font-bold text-[var(--color-ink)]">{title}</h3>
      <ul className="divide-y divide-[var(--color-soft)]">
        {items.map((it, i) => (
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
  );
}
