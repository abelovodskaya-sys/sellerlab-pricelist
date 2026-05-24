import type {
  FulfillmentData,
  ReturnsData,
  CardsData,
  ShopBoostData,
} from "./types";
import type { Lang } from "./i18n";

import fulfillmentRu from "@/data/fulfillment.ru.json";
import fulfillmentUz from "@/data/fulfillment.uz.json";
import fulfillmentEn from "@/data/fulfillment.en.json";
import fulfillmentZh from "@/data/fulfillment.zh.json";

import returnsRu from "@/data/returns.ru.json";
import returnsUz from "@/data/returns.uz.json";
import returnsEn from "@/data/returns.en.json";
import returnsZh from "@/data/returns.zh.json";

import cardsRu from "@/data/cards.ru.json";
import cardsUz from "@/data/cards.uz.json";
import cardsEn from "@/data/cards.en.json";
import cardsZh from "@/data/cards.zh.json";

import shopBoostRu from "@/data/shop-boost.ru.json";
import shopBoostUz from "@/data/shop-boost.uz.json";
import shopBoostEn from "@/data/shop-boost.en.json";
import shopBoostZh from "@/data/shop-boost.zh.json";

const FULFILLMENT: Record<Lang, FulfillmentData> = {
  ru: fulfillmentRu as FulfillmentData,
  uz: fulfillmentUz as FulfillmentData,
  en: fulfillmentEn as FulfillmentData,
  zh: fulfillmentZh as FulfillmentData,
};

const RETURNS: Record<Lang, ReturnsData> = {
  ru: returnsRu as ReturnsData,
  uz: returnsUz as ReturnsData,
  en: returnsEn as ReturnsData,
  zh: returnsZh as ReturnsData,
};

const CARDS: Record<Lang, CardsData> = {
  ru: cardsRu as CardsData,
  uz: cardsUz as CardsData,
  en: cardsEn as CardsData,
  zh: cardsZh as CardsData,
};

const SHOP_BOOST: Record<Lang, ShopBoostData> = {
  ru: shopBoostRu as ShopBoostData,
  uz: shopBoostUz as ShopBoostData,
  en: shopBoostEn as ShopBoostData,
  zh: shopBoostZh as ShopBoostData,
};

export function getAllTabData(lang: Lang) {
  return {
    fulfillment: FULFILLMENT[lang],
    returns: RETURNS[lang],
    cards: CARDS[lang],
    shopBoost: SHOP_BOOST[lang],
  };
}
