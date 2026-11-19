# InformationHub

Daily reports for HD2Lab, kept in one calm place — channel by channel, one report a day.

**Live:** https://hyangdan2.github.io/InformationHub/

The first (and currently only) channel is **China AI**: one report on eleven China AI semiconductor names, published every weekday evening at **19:00 KST (Mon–Fri)**, after the close.

The watchlist, in list order: Cambricon (`688256`), Hygon (`688041`), Zhongji Innolight (`300308`), Eoptolink (`300502`), SMIC (`688981`), Shengyi Technology (`600183`), Piotech (`688072`), GigaDevice (`603986`), Montage Technology (`688008`), VeriSilicon (`688521`), CXMT (`688825`).

## Pages

| URL | What it is |
| --- | --- |
| `/InformationHub/` | 랜딩: 채널 선반, 최신 브리핑, 클라이언트 검색 (`search.json`) |
| `/InformationHub/en/` | Same landing page in English (`en/search.json`) |
| `/InformationHub/china-ai/` | 채널: 11종목 관심목록과 데일리 리포트 아카이브 |
| `/InformationHub/en/china-ai/` | The same channel page in English |
| `/InformationHub/posts/<date>-chinaai-daily/` | One report, Korean edition |
| `/InformationHub/en/posts/<date>-chinaai-daily/` | The same report, English edition |

## Languages

Korean is the default edition at the hub root; English sits one level down under `/en/`. Every page carries its counterpart in the other language, and the header's `KO | EN` toggle (plus the same toggle at the bottom of the mobile drawer) points at it. The toggle only **navigates and records the choice** in `localStorage['hd2-info-lang']`: a shared link always opens the language it names, and no visit is ever redirected.

- `src/_data/i18n.js` — every piece of UI copy for both editions (`ko`, `en`), including nav labels, filter names, KPI and chart titles, and post metadata. Counted phrases use a `%s%` token and the `fmt` filter (`"리포트 %s%편" | fmt(3)`), so word order stays right per language.
- `src/_data/stocks.js` / `sectors.js` / `channels.js` — labels per language (`nameKo` / `nameEn`, `noteKo` / `noteEn`, …), read in templates with `{{ stock | pick("name", lang) }}`.
- `src/` and `src/en/` — one page template set per edition (`index.njk`, `china-ai.njk`, `search.11ty.js`), sharing the bodies in `_includes/parts/home-body.njk` and `channel-body.njk`.
- `src/posts/` and `src/en/posts/` — report bodies. Collections are split (`briefingsKo` / `briefingsEn`, `dailies…`, `spotlights…`, `briefingDays…`) so neither edition lists or pages into the other.
- Every page emits `<link rel="alternate" hreflang="ko|en|x-default">` and its English/ Korean counterpart URL.

## Stack

Eleventy 3 for the source, a single `build.mjs` for publishing.

```
src/                  Eleventy source (input)
  _data/              site, channels, stocks, sectors, i18n
  _includes/          base.njk (head, header, drawer, footer), post.njk, parts/
  posts/              one Markdown file per daily report (Korean)
  en/                 the English edition: index.njk, china-ai.njk, search, posts/
  assets/             style.css, shared hd2-theme.css/js, nav + search + lang scripts
  search.11ty.js      -> /search.json
  og-image.png        -> /og-image.png (1200×630)

build.mjs             Eleventy -> src/_site -> repository root
index.html            generated (do not edit)
en/                   generated
china-ai/             generated
posts/                generated
assets/               generated
search.json           generated
.nojekyll             generated
```

The repository root is what GitHub Pages serves as `/InformationHub/`, so the generated files live next to the source, exactly like `HyangDan2/diary`.

### Build

```bash
npm run build        # or: node build.mjs
```

`build.mjs` installs `src/node_modules` on first run, runs Eleventy, then replaces the published files at the repository root. Generated files are never committed from `src/_site/`.

### Add a report

Drop a Markdown file into `src/posts/`, named `<date>-chinaai-daily.md`, and its English edition into `src/en/posts/` with the same file name:

```yaml
---
title: "China AI 데일리 리포트 · 11월 20일"
date: 2026-11-20T19:00:00+09:00
summary: "한 줄 요약."
tickers: ["688256", "688041", "300308", "300502", "688981", "600183", "688072", "603986", "688008", "688521", "688825"]
sources:
  - label: "Source name — what it covers"
    url: "https://example.com/article"
---
```

The body keeps four sections, in this order — the English edition uses the names in brackets:

1. `## 시황` [Market Overview] — the session: A-shares, STAR 50, semis and optics, and the policy or macro news that moved them.
2. `## China AI 항목별 리포트` [China AI Watchlist Report] — all eleven names, one `###` each; a name with nothing to report says so.
3. `## 추후 참고해야할 사항` [What to Watch Next] — schedules, risks, and what to keep watching.
4. `## 출처` [Sources] — the articles actually used.

`reportSections` recognises both sets, so the KPI strip, the value-chain map and the watch cards land in the same place in either language. The English file repeats the Korean numbers, dates and source URLs exactly.

Then `npm run build` and commit the source plus the regenerated root files. The URL is `/posts/<file name without .md>/`.

### Report visuals (frontmatter)

The charts are rendered from structured frontmatter, so the layout stays identical from day to day and no numbers are typed into the body twice. Every key is optional: a missing block simply renders nothing.

```yaml
reportKind: "daily"            # "daily" (default) or "spotlight"
market:
  indices:                     # KPI strip + diverging bar chart
    - { name: "상하이종합", value: 3577.62, change: -10.21, pct: -0.28 }
  turnover: "1조 3,146억 위안"
  turnoverChange: "전일 대비 -654억 위안"
  semisInflow: "30.51억 위안"  # optional summary card
turnoverTop:                   # proportional bars, 억 위안
  - { name: "중지이노라이트", code: "300308", value: 166.1 }
watchlistStatus:               # one row per ticker: close, move, one-line note
  - { code: "688041", status: "급락·반등", tone: "down", pct: -4.81, close: 180.00, note: "…" }
watchItems:                    # timeline cards under `## 추후 참고해야할 사항`
  - { tag: "정책", tone: "event", title: "…", detail: "…", when: "…" }
```

`tone` picks the colour of a badge or card: `up`, `down`, `flat`, `rebound`, `event` (badges); `up`, `down`, `event`, `next` (watch cards). The value map on the value-chain grid comes from `src/_data/sectors.js` plus each row of `watchlistStatus`; a card links to `#stock-<code>`, which is the id every `###` ticker heading receives automatically.

### Spotlights

A single-name feature is the same Markdown file with `reportKind: "spotlight"`, one entry in `tickers`, and a `spotlight:` block for its snapshot cards and bar charts:

```yaml
reportKind: "spotlight"
spotlight:
  snapshot:
    - { label: "종가", value: "180.00위안", note: "-4.81%", tone: "down" }
  charts:
    - title: "2026년 상반기 매출 비교"
      unit: "억 위안"
      rows:
        - { label: "하이광", value: 90.99, digits: 2, note: "+66.5%", subject: true }
```

Its five sections are 기업과 밸류체인 포지션 → 최근 실적·재무·핵심 동력 → 오늘의 이슈 & 경쟁 구도 → 추후 체크포인트 & 리스크 (`watchItems` cards) → 출처; the English edition mirrors them as Company & Value-Chain Position → Recent Results, Financials & Growth Drivers → Today's News & Competitive Landscape → Checkpoints & Risks → Sources. The archive, the landing feed and the search index mark the two kinds with a Daily / Spotlight badge (`데일리` / `스포트라이트` in Korean), and `/china-ai/` filters them.

### Add a channel

1. Add an entry to `src/_data/channels.js` (`status: "live"` renders the card as a link).
2. Add a page like `src/china-ai.njk` and a directory of posts with its own `posts.11tydata.js`.
3. Add the channel to the `Info` dropdown and drawer in `src/_includes/base.njk`.

## Design

The hub follows the HD2Lab family standard, taken from `HyangDan2/diary` and `HyangDan2/HyangDan2.github.io`:

- Soft Iris light theme and Navy & Lavender dark theme, one floating 44px icon toggle (`localStorage['hd2-theme']`), applied before first paint.
- The same header, six hub tabs (`Web-HQ · Apps · Play · Tech · Diary · Info`), hover dropdowns on desktop and the right-unfolding drawer on mobile. `Info` opens `China AI` and lands on this hub.
- The HD²Lab dual-skew mark, and the same pink-free violet accent set.
- English interface copy on `/en/`, Korean on the default edition (`html[lang="ko"]` / `html[lang="en"]`), one shared component set for both.

## Initial seed

Two daily reports, written from the briefings actually delivered on 2026-11-18 and 2026-11-19 — no numbers were added or rephrased:

- `2026-11-18-chinaai-daily.md` — 11/18 session
- `2026-11-19-chinaai-daily.md` — 11/19 session (pre-market and close material combined)
