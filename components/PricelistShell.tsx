"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TABS, UI, calculatorUrl, type TabKey, type Lang } from "@/lib/i18n";
import type { CardsData, FulfillmentData, ReturnsData, ShopBoostData } from "@/lib/types";
import { FulfillmentTab } from "./tabs/FulfillmentTab";
import { ReturnsTab } from "./tabs/ReturnsTab";
import { CardsTab } from "./tabs/CardsTab";
import { ShopBoostTab } from "./tabs/ShopBoostTab";

type Props = {
  lang: Lang;
  data: {
    fulfillment: FulfillmentData;
    returns: ReturnsData;
    cards: CardsData;
    shopBoost: ShopBoostData;
  };
};

function isTabKey(s: string | null): s is TabKey {
  return s !== null && (TABS as readonly string[]).includes(s);
}

export function PricelistShell({ lang, data }: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const initial = isTabKey(params.get("tab")) ? (params.get("tab") as TabKey) : "fulfillment";
  const [active, setActive] = useState<TabKey>(initial);
  const ui = UI[lang];

  useEffect(() => {
    const url = active === "fulfillment" ? `/${lang}/` : `/${lang}/?tab=${active}`;
    router.replace(url, { scroll: false });
  }, [active, lang, router]);

  return (
    <div className="flex-1">
      {/* Compact hero — single row with title + tagline */}
      <section className="bg-[var(--color-navy)] px-6 py-6 text-white sm:px-8 sm:py-7">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
          <h1 className="text-[clamp(1.35rem,2.2vw,1.75rem)] font-bold leading-tight tracking-tight">
            {ui.siteTitle}
          </h1>
          <p className="text-[13px] text-white/65 sm:text-sm">{ui.tagline}</p>
        </div>
      </section>

      {/* Tabs nav */}
      <nav className="sticky top-[72px] z-30 border-b border-[var(--color-soft)] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center gap-1 overflow-x-auto px-3 sm:px-8">
          {TABS.map((tab) => {
            const isActive = active === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                className={`relative whitespace-nowrap px-4 py-4 text-[13px] font-semibold transition-colors sm:text-sm ${
                  isActive
                    ? "text-[var(--color-navy)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                }`}
              >
                {ui.tabs[tab]}
                {isActive && (
                  <span className="absolute inset-x-3 bottom-0 h-[2.5px] rounded-t bg-[var(--color-navy)]" />
                )}
              </button>
            );
          })}
          <a
            href={calculatorUrl(lang)}
            target="_blank"
            rel="noopener"
            className="ml-auto hidden flex-shrink-0 items-center gap-1.5 whitespace-nowrap px-3 py-4 text-[13px] font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-navy)] sm:inline-flex sm:text-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <line x1="8" y1="6" x2="16" y2="6" />
              <line x1="8" y1="10" x2="10" y2="10" />
              <line x1="14" y1="10" x2="16" y2="10" />
              <line x1="8" y1="14" x2="10" y2="14" />
              <line x1="14" y1="14" x2="16" y2="14" />
              <line x1="8" y1="18" x2="10" y2="18" />
              <line x1="14" y1="18" x2="16" y2="18" />
            </svg>
            <span>{ui.calculatorLabel}</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="opacity-60">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Content */}
      <section className="mx-auto max-w-[1200px] px-4 py-6 sm:px-8 sm:py-10">
        <div className="mb-5 flex items-start justify-between gap-3">
          <p className="flex-1 text-[12px] italic leading-relaxed text-[var(--color-muted)]">
            {ui.notice}
          </p>
          {/* Mobile-only Calculator CTA — desktop has it in tabs nav */}
          <a
            href={calculatorUrl(lang)}
            target="_blank"
            rel="noopener"
            className="inline-flex flex-shrink-0 items-center gap-1.5 self-start whitespace-nowrap rounded-[57.6px] border border-[var(--color-soft)] bg-white px-3 py-1.5 text-[12px] font-semibold text-[var(--color-navy)] sm:hidden"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <line x1="8" y1="6" x2="16" y2="6" />
              <line x1="8" y1="10" x2="10" y2="10" />
              <line x1="14" y1="10" x2="16" y2="10" />
              <line x1="8" y1="14" x2="10" y2="14" />
              <line x1="14" y1="14" x2="16" y2="14" />
            </svg>
            <span>{ui.calculatorLabel}</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="opacity-60">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
        {active === "fulfillment" && <FulfillmentTab data={data.fulfillment} lang={lang} />}
        {active === "returns" && <ReturnsTab data={data.returns} lang={lang} />}
        {active === "cards" && <CardsTab data={data.cards} />}
        {active === "shop-boost" && <ShopBoostTab data={data.shopBoost} lang={lang} />}
      </section>
    </div>
  );
}
