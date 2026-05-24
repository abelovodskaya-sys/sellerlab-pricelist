import Link from "next/link";
import { UI, TELEGRAM_URL, type Lang } from "@/lib/i18n";
import { LangSwitcher } from "./LangSwitcher";

export function Header({ lang }: { lang: Lang }) {
  const ui = UI[lang];
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-soft)] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6 sm:px-8">
        <Link href={`/${lang}/`} className="flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sellerlab.jpg"
            alt="SellerLab"
            style={{ height: 38, width: "auto", display: "block", mixBlendMode: "multiply" }}
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener"
            aria-label={ui.telegramLabel}
            className="inline-flex items-center gap-1.5 rounded-[57.6px] bg-[#2AABEE] px-3.5 py-2 text-[13px] font-semibold text-white shadow-[0_4px_16px_0_rgb(42_171_238_/_0.32)] transition-shadow hover:shadow-[0_8px_24px_0_rgb(42_171_238_/_0.45)] sm:px-4 sm:py-2.5"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.13.58-.47.72-.95.45l-2.62-1.93-1.27 1.22c-.14.14-.26.26-.53.26l.19-2.71 4.93-4.46c.21-.19-.05-.3-.33-.11L8.15 15.4l-2.57-.8c-.56-.17-.57-.56.12-.83l10.02-3.86c.47-.17.88.11.92.89z" />
            </svg>
            <span className="hidden sm:inline">{ui.telegramLabel}</span>
          </a>
          <a
            href={ui.contactCtaUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-[57.6px] bg-[var(--color-navy)] px-4 py-2 text-[13px] font-semibold text-white shadow-[0_4px_16px_0_rgb(10_36_99_/_0.22)] transition-shadow hover:shadow-[0_8px_28px_0_rgb(10_36_99_/_0.32)] sm:px-5 sm:py-2.5"
          >
            {ui.contactCta}
          </a>
          <LangSwitcher current={lang} />
        </div>
      </div>
    </header>
  );
}
