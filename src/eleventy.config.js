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

/** 17:25 */
function timeLabel(value) {
  const p = parts(value);
  return p ? `${p.hour}:${p.minute}` : "";
}

function readingTime(html = "") {
  const text = String(html).replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 350));
}

function neighbors(posts = [], url) {
  const index = posts.findIndex((post) => post.url === url);
  return {
    newer: index > 0 ? posts[index - 1] : null,
    older: index >= 0 && index < posts.length - 1 ? posts[index + 1] : null,
  };
}

/** [{code, name, en, zh, ko, field}] → the stocks named in one briefing. */
function mentionedStocks(tickers = [], stocks = []) {
  if (!Array.isArray(tickers) || !tickers.length) return [];
  return tickers.map((code) => stocks.find((stock) => stock.code === code)).filter(Boolean);
}

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ assets: "assets" });
  eleventyConfig.addPassthroughCopy({ "og-image.png": "og-image.png" });
  eleventyConfig.addWatchTarget("./assets/");

  eleventyConfig.setLibrary("md", md);
  eleventyConfig.amendLibrary("md", (lib) => {
    lib.renderer.rules.table_open = () => '<div class="table-wrap"><table>';
    lib.renderer.rules.table_close = () => "</table></div>";
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
  eleventyConfig.addFilter("timeLabel", timeLabel);
  eleventyConfig.addFilter("readingTime", readingTime);
  eleventyConfig.addFilter("neighbors", neighbors);
  eleventyConfig.addFilter("mentionedStocks", mentionedStocks);
  eleventyConfig.addFilter("where", (array = [], key, value) => array.filter((item) => item && item[key] === value));
  eleventyConfig.addFilter("limit", (array = [], count = array.length) => array.slice(0, count));

  const postGlob = "./posts/*.md";

  eleventyConfig.addCollection("briefings", (collectionApi) =>
    collectionApi.getFilteredByGlob(postGlob).sort((a, b) => b.date - a.date),
  );

  /** One group per day, newest first — the daily archive on the channel page. */
  eleventyConfig.addCollection("briefingDays", (collectionApi) => {
    const posts = collectionApi.getFilteredByGlob(postGlob).sort((a, b) => b.date - a.date);
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
  });

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
