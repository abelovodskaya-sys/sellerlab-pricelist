"use client";

import { useEffect } from "react";
import type { Lang } from "@/lib/i18n";
import { LANG_HTML_LANG } from "@/lib/i18n";

export function HtmlLangUpdater({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = LANG_HTML_LANG[lang];
  }, [lang]);
  return null;
}
