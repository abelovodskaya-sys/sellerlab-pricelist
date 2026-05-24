// Shared data shapes for each tab. Each tab has its own structure —
// these are NOT a universal schema, by design.

export type Price = string; // e.g. "1 500", "от 500", "по запросу", "" for empty

// ── Фулфилмент ──────────────────────────────────────────────────────────
export type FulfillmentMatrixColumn = {
  label: string;       // "до 0,6 л."
  category?: string;   // "Категория 1"
};

export type FulfillmentMatrixRow = {
  tier: string;        // "от 100 шт на баркод"
  prices: Price[];     // length matches columns
};

export type FulfillmentMatrixGroup = {
  service: string;     // "Базовая услуга обработки"
  description?: string;
  rows: FulfillmentMatrixRow[];
};

export type FulfillmentMatrix = {
  title: string;
  columns: FulfillmentMatrixColumn[];
  groups: FulfillmentMatrixGroup[];
};

export type SupplyTable = {
  title: string;
  platforms: string[];                              // ["UZUM", "WILDBERRIES", "YANDEX"]
  rows: { type: string; prices: Price[] }[];        // [{ type: "Короб", prices: [...] }]
};

export type SimpleListItem = {
  label: string;
  description?: string;
  price: Price;
};

export type SimpleList = {
  title: string;
  items: SimpleListItem[];
};

export type FbsTable = {
  title: string;
  description?: string;
  columns: FulfillmentMatrixColumn[];
  rows: { label: string; description?: string; prices: Price[] }[];
};

export type FulfillmentData = {
  intro?: { note?: string };
  matrix: FulfillmentMatrix;
  fbs: FbsTable;
  supply: SupplyTable;
  storage: SimpleList;
  extras: SimpleList;
};

// ── Возвраты с МП ────────────────────────────────────────────────────────
export type ReturnsTransport = {
  title: string;
  note?: string;
  columns: string[];                                // ["Лабо (до 2,5 м.куб.)", "Газель (до 8 палет)"]
  rows: { warehouse: string; prices: Price[] }[];
};

export type ReturnsData = {
  transport: ReturnsTransport;
  services: SimpleList;
};

// ── Карточки, инфографика, фото ─────────────────────────────────────────
export type CardsGroup = {
  title: string;
  subtitle?: string;
  items: SimpleListItem[];
};

export type CardsData = {
  groups: CardsGroup[];
};

// ── Ведение магазинов и Буст в топ ──────────────────────────────────────
export type PackageItem = {
  title: string;
  description?: string;
  bullets?: string[];
  price: Price;            // "299 000" or "по запросу"
  ctaLabel?: string;
  ctaUrl?: string;
  bonus?: string;
};

export type PackageGroup = {
  title: string;
  intro?: string;
  packages: PackageItem[];
};

export type ShopBoostData = {
  groups: PackageGroup[];
};
