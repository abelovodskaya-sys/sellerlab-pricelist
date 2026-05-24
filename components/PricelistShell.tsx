"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TABS, UI, type TabKey, type Lang } from "@/lib/i18n";
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
      {/* Hero */}
      <section className="bg-[var(--color-navy)] px-6 pt-12 pb-10 text-white sm:px-8 sm:pt-16 sm:pb-14">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-3 inline-flex items-center rounded-[16px] bg-[var(--color-yellow)] px-3.5 py-1 text-xs font-semibold text-[var(--color-ink)]">
            {ui.updatedLabel}: 2026
          </div>
          <h1 className="text-[clamp(1.9rem,3.2vw,2.75rem)] font-bold leading-[1.1] tracking-tight">
            {ui.siteTitle}
          </h1>
          <p className="mt-3 max-w-[640px] text-[15px] text-white/70 sm:text-base">{ui.tagline}</p>
        </div>
      </section>

      {/* Tabs nav */}
      <nav className="sticky top-[72px] z-30 border-b border-[var(--color-soft)] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] gap-1 overflow-x-auto px-3 sm:px-8">
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
        </div>
      </nav>

      {/* Content */}
      <section className="mx-auto max-w-[1200px] px-6 py-10 sm:px-8 sm:py-14">
        <p className="mb-6 text-[13px] leading-relaxed text-[var(--color-muted)]">{ui.notice}</p>
        {active === "fulfillment" && <FulfillmentTab data={data.fulfillment} />}
        {active === "returns" && <ReturnsTab data={data.returns} />}
        {active === "cards" && <CardsTab data={data.cards} />}
        {active === "shop-boost" && <ShopBoostTab data={data.shopBoost} />}
      </section>
    </div>
  );
}
