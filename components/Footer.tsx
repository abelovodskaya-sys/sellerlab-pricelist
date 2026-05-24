import { UI, type Lang, LAST_UPDATED_ISO } from "@/lib/i18n";

export function Footer({ lang }: { lang: Lang }) {
  const ui = UI[lang];
  const updated = new Date(LAST_UPDATED_ISO).toLocaleDateString(
    lang === "zh" ? "zh-CN" : lang === "en" ? "en-GB" : lang === "uz" ? "uz-Latn" : "ru-RU",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <footer className="mt-auto border-t border-[var(--color-soft)] bg-[var(--color-smoke)]">
      <div className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-[var(--color-navy)] px-2.5 py-1.5 text-[13px] font-bold uppercase tracking-wider text-white">
              SellerLab
            </div>
            <p className="text-sm text-[var(--color-muted)]">
              Фулфилмент и маркетплейсы Узбекистана.
            </p>
            <a
              href="https://www.sellerlab.uz/"
              target="_blank"
              rel="noopener"
              className="mt-3 inline-block text-sm font-medium text-[var(--color-navy)] hover:underline"
            >
              sellerlab.uz →
            </a>
          </div>
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
              Контакты
            </div>
            <ul className="space-y-1.5 text-sm text-[var(--color-ink)]">
              <li>
                <a href="tel:+998947021433" className="hover:text-[var(--color-navy)]">+998 94 702 14 33</a>
              </li>
              <li>
                <a href="tel:+998945224348" className="hover:text-[var(--color-navy)]">+998 94 522 43 48</a>
              </li>
              <li>
                <a href="https://t.me/sellerlabpacking" target="_blank" rel="noopener" className="hover:text-[var(--color-navy)]">@sellerlabpacking</a>
              </li>
              <li>
                <a href="https://t.me/sellerlabuz" target="_blank" rel="noopener" className="hover:text-[var(--color-navy)]">@sellerlabuz</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
              Адрес
            </div>
            <p className="text-sm text-[var(--color-ink)]">
              3-й проезд Нигоры, 37А<br />
              Яшнабадский район, Ташкент
            </p>
            <p className="mt-4 text-xs text-[var(--color-muted)]">
              {ui.updatedLabel}: {updated}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
