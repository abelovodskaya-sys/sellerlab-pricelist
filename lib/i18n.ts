export const LANGS = ["ru", "uz", "en", "zh"] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_LABELS: Record<Lang, string> = {
  ru: "RU",
  uz: "UZ",
  en: "EN",
  zh: "中文",
};

export const LANG_HTML_LANG: Record<Lang, string> = {
  ru: "ru",
  uz: "uz",
  en: "en",
  zh: "zh-CN",
};

export type TabKey = "fulfillment" | "returns" | "cards" | "shop-boost";

export const TABS: TabKey[] = ["fulfillment", "returns", "cards", "shop-boost"];

export type UIStrings = {
  siteTitle: string;
  tagline: string;
  contactCta: string;
  contactCtaUrl: string;
  telegramLabel: string;
  calculatorLabel: string;
  tabs: Record<TabKey, string>;
  updatedLabel: string;
  notice: string;
  langSwitcherLabel: string;
};

export const TELEGRAM_URL = "https://t.me/sellerlabpacking";

export const calculatorUrl = (lang: Lang) => `https://calc.sellerlab.uz/?lang=${lang}`;

export const UI: Record<Lang, UIStrings> = {
  ru: {
    siteTitle: "Прайс-лист SellerLab",
    tagline: "Фулфилмент в Ташкенте, возвраты, контент, ведение магазинов на Uzum Market, WB, Yandex Market Go.",
    contactCta: "Обсудить проект",
    contactCtaUrl: "https://t.me/sellerlabuz",
    telegramLabel: "Telegram",
    calculatorLabel: "Калькулятор",
    tabs: {
      fulfillment: "Фулфилмент",
      returns: "Возвраты с МП",
      cards: "Карточки и контент",
      "shop-boost": "Ведение и Буст в топ",
    },
    updatedLabel: "Обновлено",
    notice:
      "Цены указаны в сумах. Финальная стоимость по конкретному товару — после расчёта менеджером.",
    langSwitcherLabel: "Язык",
  },
  uz: {
    siteTitle: "SellerLab narxlar ro'yxati",
    tagline: "Toshkentda fulfilment, qaytarishlar, kontent, Uzum Market, WB, Yandex Market Go do'konlarini boshqarish.",
    contactCta: "Loyihani muhokama qilish",
    contactCtaUrl: "https://t.me/sellerlabuz",
    telegramLabel: "Telegram",
    calculatorLabel: "Kalkulyator",
    tabs: {
      fulfillment: "Fulfilment",
      returns: "MPdan qaytarishlar",
      cards: "Kartochkalar va kontent",
      "shop-boost": "Boshqarish va Boost",
    },
    updatedLabel: "Yangilangan",
    notice:
      "Narxlar so'mda ko'rsatilgan. Aniq mahsulot bo'yicha yakuniy narx — menejer hisob-kitobidan keyin.",
    langSwitcherLabel: "Til",
  },
  en: {
    siteTitle: "SellerLab Pricelist",
    tagline: "Fulfillment in Tashkent, returns, content, shop management on Uzum Market, WB, Yandex Market Go.",
    contactCta: "Discuss your project",
    contactCtaUrl: "https://t.me/sellerlabuz",
    telegramLabel: "Telegram",
    calculatorLabel: "Calculator",
    tabs: {
      fulfillment: "Fulfillment",
      returns: "Marketplace returns",
      cards: "Product cards & content",
      "shop-boost": "Shop mgmt & Boost",
    },
    updatedLabel: "Updated",
    notice:
      "Prices are in UZS. Final pricing for a specific product — after a manager's calculation.",
    langSwitcherLabel: "Language",
  },
  zh: {
    siteTitle: "SellerLab 价目表",
    tagline: "塔什干履约、退货、内容、Uzum Market / WB / Yandex Market Go 店铺运营。",
    contactCta: "讨论项目",
    contactCtaUrl: "https://t.me/sellerlabuz",
    telegramLabel: "Telegram",
    calculatorLabel: "计算器",
    tabs: {
      fulfillment: "履约服务",
      returns: "电商平台退货",
      cards: "商品卡片与内容",
      "shop-boost": "店铺运营与推广",
    },
    updatedLabel: "更新于",
    notice: "价格以乌兹别克斯坦苏姆 (UZS) 计。具体商品的最终价格由客户经理核算后确定。",
    langSwitcherLabel: "语言",
  },
};

export const LAST_UPDATED_ISO = "2026-05-24";
