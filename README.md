# SellerLab Pricelist

Публичный прайс-лист SellerLab — `pricelist.sellerlab.uz`.

Статический сайт на Next.js 16 с табами по 4 группам услуг и переключением языков
(RU / UZ / EN / ZH).

## Источник данных

Мастер-таблица — Google Sheets:
[1HKIde4MGi-goKM8VMofAQbUZZAbcktQhpASJabOx69M](https://docs.google.com/spreadsheets/d/1HKIde4MGi-goKM8VMofAQbUZZAbcktQhpASJabOx69M).

Из таблицы используются 4 вкладки:

| Вкладка                            | Файл данных                |
| ---------------------------------- | -------------------------- |
| Фулфилмент                         | `data/fulfillment.ru.json` |
| Возвраты с МП                      | `data/returns.ru.json`     |
| Карточки, инфографика, фото        | `data/cards.ru.json`       |
| Ведение магазинов и Буст в топ     | `data/shop-boost.ru.json`  |

Сырые CSV-снимки лежат в `data/_raw/` — обновляются вручную через GViz endpoint
(см. ниже), чтобы видеть в git-диффе, что изменилось в мастер-таблице.

### Обновление данных

```sh
SHEET=1HKIde4MGi-goKM8VMofAQbUZZAbcktQhpASJabOx69M
curl -sL -o data/_raw/fulfillment.csv \
  "https://docs.google.com/spreadsheets/d/$SHEET/gviz/tq?tqx=out:csv&sheet=%D0%A4%D1%83%D0%BB%D1%84%D0%B8%D0%BB%D0%BC%D0%B5%D0%BD%D1%82"
# (аналогично для returns, cards, shop-boost — см. историю коммитов)
```

После обновления CSV — синхронизировать соответствующий `*.ru.json` руками
(структура каждого таба своя, универсального маппинга нет).

## Стек

- Next.js 16.2 (App Router, static export)
- React 19.2
- Tailwind CSS 4 (CSS-first config в `app/globals.css`)
- TypeScript 5

## Локально

```sh
npm install
npm run dev          # http://localhost:3000
npm run build        # static export в out/
```

## Деплой

Static export → Vercel (`output: 'export'` в `next.config.ts`). Push в `main`
триггерит автодеплой.

## Структура

```
app/
  layout.tsx          корневой layout, шрифт Inter
  page.tsx            redirect / → /ru/
  [lang]/page.tsx     основная страница, generateStaticParams для 4 локалей
components/
  Header.tsx          sticky header с lang switcher
  Footer.tsx
  PricelistShell.tsx  client-компонент с табами (URL-state через ?tab=)
  tabs/*.tsx          по компоненту на каждый таб
data/
  *.ru.json           данные (RU мастер; UZ/EN/ZH добавляются по мере перевода)
  _raw/*.csv          сырые снимки Google Sheets
lib/
  i18n.ts             словарь UI-строк, типы Lang/TabKey
  types.ts            TypeScript-типы для данных табов
  data.ts             loader с fallback на RU для непереведённых локалей
```
