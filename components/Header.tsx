import Link from "next/link";
import { UI, type Lang } from "@/lib/i18n";
import { LangSwitcher } from "./LangSwitcher";

export function Header({ lang }: { lang: Lang }) {
  const ui = UI[lang];
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-soft)] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-3 px-4 sm:px-8">
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
            href={ui.contactCtaUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-[57.6px] bg-[var(--color-yellow)] px-3.5 py-2 text-[13px] font-semibold text-[var(--color-navy)] shadow-[0_4px_16px_0_rgb(254_222_87_/_0.45)] transition-shadow hover:shadow-[0_8px_28px_0_rgb(254_222_87_/_0.65)] sm:px-5 sm:py-2.5"
          >
            {ui.contactCta}
          </a>
          <LangSwitcher current={lang} />
        </div>
      </div>
    </header>
  );
}
