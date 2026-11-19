# InformationHub

Daily briefings for HD2Lab, kept in one calm place — channel by channel, before the open and after the close.

**Live:** https://hyangdan2.github.io/InformationHub/

The first (and currently only) channel is **China AI**, which reads eleven China AI semiconductor names twice every trading day:

- **08:35 KST — Pre-Market:** what is waiting for the session.
- **17:25 KST — Close:** what actually moved, and why.

The watchlist, in list order: Cambricon (`688256`), Hygon (`688041`), Zhongji Innolight (`300308`), Eoptolink (`300502`), SMIC (`688981`), Shengyi Technology (`600183`), Piotech (`688072`), GigaDevice (`603986`), Montage Technology (`688008`), VeriSilicon (`688521`), CXMT (`688825`).

## Pages

| URL | What it is |
| --- | --- |
| `/InformationHub/` | Landing page: channel shelf, latest briefings across every channel, client-side search (`search.json`) |
| `/InformationHub/china-ai/` | Channel page: the 11-stock watchlist, Pre-market / Close filters, day-by-day archive |
| `/InformationHub/posts/<date>-chinaai-<session>/` | One briefing: Korean body, English chrome, newer/older navigation, source links |

## Stack

Eleventy 3 for the source, a single `build.mjs` for publishing.

```
src/                  Eleventy source (input)
  _data/              site, channels, stocks
  _includes/          base.njk (head, header, drawer, footer), post.njk, parts/
  posts/              one Markdown file per briefing
  assets/             style.css, shared hd2-theme.css/js, nav + search scripts
  search.11ty.js      -> /search.json
  og-image.png        -> /og-image.png (1200×630)

build.mjs             Eleventy -> src/_site -> repository root
index.html            generated (do not edit)
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

### Add a briefing

Drop a Markdown file into `src/posts/`:

```yaml
---
title: "ChinaAI 11종목 장 마감 브리핑 (11/20)"
date: 2026-11-20T17:25:00+09:00
session: close          # open | close
summary: "한 줄 요약."
tickers: ["688256", "688041"]
sources:
  - label: "Source name — what it covers"
    url: "https://example.com/article"
---
```

Then `npm run build` and commit the source plus the regenerated root files. The URL is `/posts/<file name without .md>/`.

### Add a channel

1. Add an entry to `src/_data/channels.js` (`status: "live"` renders the card as a link).
2. Add a page like `src/china-ai.njk` and a directory of posts with its own `posts.11tydata.js`.
3. Add the channel to the `Info` dropdown and drawer in `src/_includes/base.njk`.

## Design

The hub follows the HD2Lab family standard, taken from `HyangDan2/diary` and `HyangDan2/HyangDan2.github.io`:

- Soft Iris light theme and Navy & Lavender dark theme, one floating 44px icon toggle (`localStorage['hd2-theme']`), applied before first paint.
- The same header, six hub tabs (`Web-HQ · Apps · Play · Tech · Diary · Info`), hover dropdowns on desktop and the right-unfolding drawer on mobile. `Info` opens `China AI` and lands on this hub.
- The HD²Lab dual-skew mark, and the same pink-free violet accent set.
- English interface copy; Korean briefing bodies (`html[lang="ko"]` on posts and the channel page).

## Initial seed

The first three briefings are the ones actually delivered on 2026-11-18 and 2026-11-19, written up from the reports as sent — no numbers were added or rephrased:

- `2026-11-18-chinaai-close.md` — 11/18 close
- `2026-11-19-chinaai-open.md` — 11/19 pre-market
- `2026-11-19-chinaai-close.md` — 11/19 close
