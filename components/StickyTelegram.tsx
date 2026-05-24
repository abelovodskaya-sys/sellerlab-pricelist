import { TELEGRAM_URL, UI, type Lang } from "@/lib/i18n";

export function StickyTelegram({ lang }: { lang: Lang }) {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener"
      aria-label={UI[lang].telegramLabel}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#2AABEE] px-4 py-3 text-[13px] font-semibold text-white shadow-[0_8px_24px_0_rgb(42_171_238_/_0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_0_rgb(42_171_238_/_0.5)] sm:bottom-7 sm:right-7"
    >
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.13.58-.47.72-.95.45l-2.62-1.93-1.27 1.22c-.14.14-.26.26-.53.26l.19-2.71 4.93-4.46c.21-.19-.05-.3-.33-.11L8.15 15.4l-2.57-.8c-.56-.17-.57-.56.12-.83l10.02-3.86c.47-.17.88.11.92.89z" />
      </svg>
      <span className="hidden sm:inline">{UI[lang].telegramLabel}</span>
    </a>
  );
}
