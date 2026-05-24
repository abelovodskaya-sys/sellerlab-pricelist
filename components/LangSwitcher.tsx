"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LANGS, LANG_LABELS, type Lang } from "@/lib/i18n";

export function LangSwitcher({ current }: { current: Lang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-[57.6px] border border-[var(--color-soft)] bg-white px-3 py-2 text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-navy)] transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{LANG_LABELS[current]}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
          <path d="M2.5 4l2.5 2.5L7.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-[calc(100%+6px)] z-50 min-w-[120px] overflow-hidden rounded-2xl border border-[var(--color-soft)] bg-white shadow-[0_8px_48px_0_rgb(0_0_0_/_0.08)]"
        >
          {LANGS.map((l) => (
            <li key={l}>
              <Link
                href={`/${l}/`}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 text-sm transition-colors ${
                  l === current
                    ? "bg-[var(--color-smoke)] font-semibold text-[var(--color-navy)]"
                    : "text-[var(--color-ink)] hover:bg-[var(--color-smoke)]"
                }`}
              >
                {LANG_LABELS[l]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
