import type {
  FulfillmentData,
  ReturnsData,
  CardsData,
  ShopBoostData,
} from "./types";
import type { Lang } from "./i18n";

import fulfillmentRu from "@/data/fulfillment.ru.json";
import returnsRu from "@/data/returns.ru.json";
import cardsRu from "@/data/cards.ru.json";
import shopBoostRu from "@/data/shop-boost.ru.json";

// Per-lang resolvers. Today only RU exists; UZ/EN/ZH fall back to RU.
// When translated JSONs land, add them to the maps below.

const FULFILLMENT: Record<Lang, FulfillmentData> = {
  ru: fulfillmentRu as FulfillmentData,
  uz: fulfillmentRu as FulfillmentData,
  en: fulfillmentRu as FulfillmentData,
  zh: fulfillmentRu as FulfillmentData,
};

const RETURNS: Record<Lang, ReturnsData> = {
  ru: returnsRu as ReturnsData,
  uz: returnsRu as ReturnsData,
  en: returnsRu as ReturnsData,
  zh: returnsRu as ReturnsData,
};

const CARDS: Record<Lang, CardsData> = {
  ru: cardsRu as CardsData,
  uz: cardsRu as CardsData,
  en: cardsRu as CardsData,
  zh: cardsRu as CardsData,
};

const SHOP_BOOST: Record<Lang, ShopBoostData> = {
  ru: shopBoostRu as ShopBoostData,
  uz: shopBoostRu as ShopBoostData,
  en: shopBoostRu as ShopBoostData,
  zh: shopBoostRu as ShopBoostData,
};

export function getAllTabData(lang: Lang) {
  return {
    fulfillment: FULFILLMENT[lang],
    returns: RETURNS[lang],
    cards: CARDS[lang],
    shopBoost: SHOP_BOOST[lang],
  };
}
