import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Прайс-лист SellerLab — фулфилмент, контент, ведение магазинов",
  description:
    "Актуальные тарифы SellerLab: фулфилмент, возвраты с маркетплейсов, создание карточек и инфографики, ведение магазинов и Буст в топ.",
  icons: { icon: "/favicon.png" },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[var(--color-canvas)]">{children}</body>
    </html>
  );
}
