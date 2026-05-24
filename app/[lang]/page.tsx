import { Suspense } from "react";
import { notFound } from "next/navigation";
import { LANGS, type Lang, UI } from "@/lib/i18n";
import { getAllTabData } from "@/lib/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PricelistShell } from "@/components/PricelistShell";
import { HtmlLangUpdater } from "@/components/HtmlLangUpdater";
import { StickyTelegram } from "@/components/StickyTelegram";
import type { Metadata } from "next";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!(LANGS as readonly string[]).includes(lang)) return {};
  const ui = UI[lang as Lang];
  return {
    title: `${ui.siteTitle} — SellerLab`,
    description: ui.tagline,
    alternates: {
      canonical: `https://pricelist.sellerlab.uz/${lang}/`,
      languages: Object.fromEntries(
        LANGS.map((l) => [l, `https://pricelist.sellerlab.uz/${l}/`])
      ),
    },
  };
}

export default async function LangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!(LANGS as readonly string[]).includes(lang)) notFound();
  const typed = lang as Lang;
  const data = getAllTabData(typed);

  return (
    <>
      <HtmlLangUpdater lang={typed} />
      <Header lang={typed} />
      <Suspense fallback={<div className="flex-1" />}>
        <PricelistShell lang={typed} data={data} />
      </Suspense>
      <Footer lang={typed} />
      <StickyTelegram lang={typed} />
    </>
  );
}
