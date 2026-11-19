import markdownIt from "markdown-it";

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: false,
});

const KST = "Asia/Seoul";

function parts(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: KST,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const out = {};
  fmt.forEach((p) => { if (p.type !== "literal") out[p.type] = p.value; });
  return out;
}

/** 2026-11-19 */
function isoDate(value) {
  const p = parts(value);
  return p ? `${p.year}-${p.month}-${p.day}` : "";
}

/** Nov 19, 2026 — the English chrome around every page. */
function displayDate(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    timeZone: KST,
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

/** 2026년 11월 19일 (목) — Korean body copy. */
function koreanDate(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: KST,
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(date);
}

/** Thursday */
function weekday(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", { timeZone: KST, weekday: "long" }).format(date);
}

/** 2026. 11. 19. (ko) / Nov 19, 2026 (en) — the compact stamp on cards and archives. */
function shortDate(value, lang = "ko") {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  if (lang === "en") return displayDate(date);
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: KST,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

/** 목 (ko) / Thursday (en) */
function weekdayName(value, lang = "ko") {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(lang === "en" ? "en-US" : "ko-KR", {
    timeZone: KST,
    weekday: lang === "en" ? "long" : "short",
  }).format(date);
}

/** 17:25 */
function timeLabel(value) {
  const p = parts(value);
  return p ? `${p.hour}:${p.minute}` : "";
}

function readingTime(html = "", wpm = 350) {
  const text = String(html).replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / (Number(wpm) || 350)));
}

function neighbors(posts = [], url) {
  const index = posts.findIndex((post) => post.url === url);
  return {
    newer: index > 0 ? posts[index - 1] : null,
    older: index >= 0 && index < posts.length - 1 ? posts[index + 1] : null,
  };
}

/** [{code, nameEn, zh, nameKo, fieldEn, fieldKo}] → the stocks named in one briefing. */
function mentionedStocks(tickers = [], stocks = []) {
  if (!Array.isArray(tickers) || !tickers.length) return [];
  return tickers.map((code) => stocks.find((stock) => stock.code === code)).filter(Boolean);
}

/* ---------- report scaffolding (heading ids + section split) ---------- */

/** A ticker heading gets a stable anchor; everything else gets a Korean-safe slug. */
function headingId(text = "") {
  const code = String(text).match(/\b(\d{6})\b/);
  if (code) return `stock-${code[1]}`;
  return String(text)
    .toLowerCase()
    .replace(/[()[\]{}·:：,.'"`~!?<>/\\|+&*%^$#@]/g, " ")
    .trim()
    .replace(/\s+/g, "-");
}

/* Korean and English section names both have to land on the same role, in this
   order — "Market Overview" must not be caught by the watchlist test. */
const ROLE_TESTS = [
  [/시황|장세|market/i, "market"],
  [/항목별|종목별|watchlist|stock/i, "stocks"],
  [/추후|체크|참고|checkpoint|what to watch|watch ?next|risks/i, "watch"],
  [/출처|sources?/i, "sources"],
];

/**
 * Split a rendered report into its `##` sections so the layout can drop the
 * visual blocks in the right place. Returns the intro (anything before the first
 * h2) and one entry per section, each keeping its rendered heading.
 */
function reportSections(html = "") {
  /* A lookahead split cannot cut at index 0, so mark each h2 first. */
  const marked = String(html).replace(/<h2([\s>])/gi, "\u0000<h2$1");
  const chunks = marked.split("\u0000");
  const intro = (chunks.shift() || "").replace(/^\u0000/, "");
  const sections = chunks.map((chunk) => {
    const match = chunk.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    const heading = match ? match[0] : "";
    const title = match ? match[1].replace(/<[^>]+>/g, "").trim() : "";
    const body = chunk.slice(heading.length).trim();
    const role = (ROLE_TESTS.find(([test]) => test.test(title)) || [null, "other"])[1];
    return { title, heading, html: body, role };
  });
  return { intro, sections };
}

/** 3577.62 → 3,577.62 */
function num(value, digits = 2) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "";
  return n.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

/** 1.83 → +1.83% */
function signedPct(value, digits = 2) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "";
  const sign = n > 0 ? "+" : n < 0 ? "−" : "";
  return `${sign}${Math.abs(n).toFixed(digits)}%`;
}

/** The widest absolute number in a set — the scale for a bar chart. */
function spread(items = [], key = "pct") {  const values = items.map((item) => Math.abs(Number(item[key]) || 0));
  return Math.max(...values, 0.01);
}

function barWidth(value, max) {
  const v = Math.abs(Number(value) || 0);
  return `${Math.min(100, (v / (max || 1)) * 100).toFixed(1)}%`;
}

/** stocks | findByCode("688041") */
function findByCode(list = [], code) {
  return (list || []).find((item) => item && item.code === code) || null;
}

/** watchlistStatus | statusOf("688041") → that ticker's row, or a quiet fallback. */
function statusOf(list = [], code) {
  const found = (list || []).find((item) => item && item.code === code);
  return found || { code, status: "—", tone: "flat", note: "", pct: null, close: null };
}

/** 3 → 03 */
function pad2(value) {
  const n = Number(value);
  return Number.isFinite(n) ? String(n).padStart(2, "0") : "";
}

/** "+3.05%" / "−1.58%" for a row's own sign. */
function pctTone(value) {
  const n = Number(value);
  if (!Number.isFinite(n) || n === 0) return "flat";
  return n > 0 ? "up" : "down";
}

/** posts | firstWith("data.market") → the newest briefing that carries that data. */
function firstWith(list = [], path = "") {
  const keys = String(path).split(".");
  return (
    (list || []).find((item) => {
      let value = item;
      for (const key of keys) {
        if (!value) return false;
        value = value[key];
      }
      return Boolean(value);
    }) || null
  );
}

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ assets: "assets" });
  eleventyConfig.addPassthroughCopy({ "og-image.png": "og-image.png" });
  eleventyConfig.addWatchTarget("./assets/");

  eleventyConfig.setLibrary("md", md);
  eleventyConfig.amendLibrary("md", (lib) => {
    lib.renderer.rules.table_open = () => '<div class="table-wrap"><table>';
    lib.renderer.rules.table_close = () => "</table></div>";
    /* Every heading gets an id: ticker headings become stock-688041 so the sector
       map can jump straight to that name; Korean headings become readable slugs. */
    lib.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
      const inline = tokens[idx + 1];
      const text = inline && inline.type === "inline" ? inline.content : "";
      tokens[idx].attrSet("id", headingId(text.replace(/[*_`]/g, "")));
      return self.renderToken(tokens, idx, options);
    };
    lib.renderer.rules.footnote_block_open = lib.renderer.rules.footnote_block_open || null;
    const defaultLinkOpen = lib.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));
    lib.renderer.rules.link_open = (tokens, idx, options, env, self) => {
      const href = tokens[idx].attrGet("href") || "";
      if (/^https?:/i.test(href)) {
        tokens[idx].attrSet("target", "_blank");
        tokens[idx].attrSet("rel", "noopener noreferrer");
        tokens[idx].attrJoin("class", "external-link");
      }
      return defaultLinkOpen(tokens, idx, options, env, self);
    };
  });

  /** https://www.nbd.com.cn/a/b -> www.nbd.com.cn */
  eleventyConfig.addFilter("host", (value = "") => {
    try {
      return new URL(String(value)).host.replace(/^www\./, "");
    } catch {
      return "";
    }
  });
  /** ./posts/2026-11-19-chinaai-close.md -> 2026-11-19-chinaai-close */
  eleventyConfig.addFilter("postSlug", (inputPath = "") =>
    String(inputPath).split("/").pop().replace(/\.md$/, ""),
  );
  /** / -> home, /china-ai/ -> china-ai, /posts/x/ -> post */
  eleventyConfig.addFilter("pageClass", (url = "/") => {
    if (url === "/") return "home";
    if (url.startsWith("/posts/")) return "post";
    return String(url).replace(/^\/+|\/+$/g, "").replace(/\//g, "-") || "home";
  });
  eleventyConfig.addFilter("canonical", (base = "", url = "/") => {
    const root = String(base).replace(/\/+$/, "");
    const path = String(url).replace(/^\/+/, "");
    return path ? `${root}/${path}` : `${root}/`;
  });
  eleventyConfig.addFilter("isoDate", isoDate);
  eleventyConfig.addFilter("displayDate", displayDate);
  eleventyConfig.addFilter("koreanDate", koreanDate);
  eleventyConfig.addFilter("weekday", weekday);
  eleventyConfig.addFilter("shortDate", shortDate);
  eleventyConfig.addFilter("weekdayName", weekdayName);
  eleventyConfig.addFilter("timeLabel", timeLabel);
  eleventyConfig.addFilter("readingTime", readingTime);
  eleventyConfig.addFilter("neighbors", neighbors);
  eleventyConfig.addFilter("mentionedStocks", mentionedStocks);
  eleventyConfig.addFilter("reportSections", reportSections);
  eleventyConfig.addFilter("headingId", headingId);
  eleventyConfig.addFilter("num", num);
  eleventyConfig.addFilter("signedPct", signedPct);
  eleventyConfig.addFilter("spread", spread);
  eleventyConfig.addFilter("barWidth", barWidth);
  eleventyConfig.addFilter("findByCode", findByCode);
  eleventyConfig.addFilter("statusOf", statusOf);
  eleventyConfig.addFilter("pad2", pad2);
  eleventyConfig.addFilter("pctTone", pctTone);
  eleventyConfig.addFilter("firstWith", firstWith);
  eleventyConfig.addFilter("where", (array = [], key, value) => array.filter((item) => item && item[key] === value));
  eleventyConfig.addFilter("limit", (array = [], count = array.length) => array.slice(0, count));

  /* ---------- bilingual helpers ---------- */

  /** stocks | pick("name", "en") → stock.nameEn (falls back to the bare key). */
  eleventyConfig.addFilter("pick", (item, key, lang = "ko") => {
    if (!item) return "";
    const suffix = lang === "en" ? "En" : "Ko";
    const value = item[`${key}${suffix}`];
    return value == null ? (item[key] ?? "") : value;
  });

  /** "리포트 %s%편" | fmt(3) → "리포트 3편" (one placeholder per argument, in order). */
  eleventyConfig.addFilter("fmt", (text = "", ...values) => {
    let index = 0;
    return String(text).replace(/%s%/g, () => String(values[index++] ?? ""));
  });

  /**
   * The counterpart page in the other language.
   *   /                  ↔ /en/
   *   /china-ai/         ↔ /en/china-ai/
   *   /posts/<slug>/     ↔ /en/posts/<slug>/
   */
  eleventyConfig.addFilter("alternateUrl", (url = "/") => {
    const path = String(url || "/");
    if (path === "/en/") return "/";
    if (path.startsWith("/en/")) return path.slice(3) || "/";
    if (path === "/" || path === "") return "/en/";
    return `/en${path}`;
  });

  /** "ko" → "en", "en" → "ko" */
  eleventyConfig.addFilter("otherLang", (lang = "ko") => (lang === "en" ? "ko" : "en"));

  /* Each language is its own shelf: a Korean page must never list an English
     report, and the pager inside a report must stay in that report's language. */
  const postGlobKo = "./posts/*.md";
  const postGlobEn = "./en/posts/*.md";

  const newestFirst = (posts) => posts.sort((a, b) => b.date - a.date);
  const ofKind = (posts, kind) => posts.filter((post) => (post.data.reportKind || "daily") === kind);

  /** One group per day, newest first — the archive on the channel page. */
  const byDay = (posts) => {
    const days = new Map();
    posts.forEach((post) => {
      const key = isoDate(post.date);
      if (!days.has(key)) days.set(key, { key, date: post.date, posts: [] });
      days.get(key).posts.push(post);
    });
    return [...days.values()].map((day) => ({
      ...day,
      posts: day.posts.sort((a, b) => a.date - b.date),
    }));
  };

  const register = (suffix, glob) => {
    eleventyConfig.addCollection(`briefings${suffix}`, (collectionApi) =>
      newestFirst(collectionApi.getFilteredByGlob(glob)),
    );
    eleventyConfig.addCollection(`dailies${suffix}`, (collectionApi) =>
      newestFirst(ofKind(collectionApi.getFilteredByGlob(glob), "daily")),
    );
    eleventyConfig.addCollection(`spotlights${suffix}`, (collectionApi) =>
      newestFirst(ofKind(collectionApi.getFilteredByGlob(glob), "spotlight")),
    );
    eleventyConfig.addCollection(`briefingDays${suffix}`, (collectionApi) =>
      byDay(newestFirst(collectionApi.getFilteredByGlob(glob))),
    );
  };

  register("Ko", postGlobKo);
  register("En", postGlobEn);

  /** Both editions together — used only where a combined list is the point. */
  eleventyConfig.addCollection("briefings", (collectionApi) =>
    newestFirst(collectionApi.getFilteredByGlob([postGlobKo, postGlobEn])),
  );

  return {
    pathPrefix: "/InformationHub/",
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html", "11ty.js"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
