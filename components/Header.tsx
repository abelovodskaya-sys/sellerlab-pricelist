import Link from "next/link";
import { UI, type Lang } from "@/lib/i18n";
import { LangSwitcher } from "./LangSwitcher";

export function Header({ lang }: { lang: Lang }) {
  const ui = UI[lang];
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-soft)] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6 sm:px-8">
        <Link href={`/${lang}/`} className="flex items-center gap-2.5">
          <span className="flex items-center justify-center rounded-xl bg-[var(--color-navy)] px-2.5 py-1.5 text-[13px] font-bold uppercase tracking-wider text-white">
            SellerLab
          </span>
          <span className="hidden text-sm font-medium text-[var(--color-muted)] sm:inline">
            {ui.siteTitle}
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href={ui.contactCtaUrl}
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-1.5 rounded-[57.6px] bg-[var(--color-navy)] px-5 py-2.5 text-sm font-semibold text-white transition-shadow hover:shadow-[0_8px_28px_0_rgb(10_36_99_/_0.32)] sm:inline-flex"
          >
            {ui.contactCta}
          </a>
          <LangSwitcher current={lang} />
        </div>
      </div>
    </header>
  );
}
