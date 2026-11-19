/**
 * /en/search.json — the English edition's search data.
 *
 * `url` is emitted relative to /InformationHub/en/ (the "/en" prefix is stripped)
 * because the page script always joins an entry with that edition's base:
 *   window.INFO_HUB_BASE + "posts/2026-11-19-chinaai-daily/"
 */
const KST = "Asia/Seoul";

const iso = (value) =>
  new Intl.DateTimeFormat("en-CA", { timeZone: KST, year: "numeric", month: "2-digit", day: "2-digit" })
    .format(new Date(value));

const label = (value) =>
  new Intl.DateTimeFormat("en-US", { timeZone: KST, month: "short", day: "numeric", year: "numeric" }).format(
    new Date(value),
  );

/** "/en/posts/x/" → "/posts/x/" */
const local = (url = "") => String(url).replace(/^\/en(?=\/)/, "");

export default class {
  data() {
    return { permalink: "/en/search.json", eleventyExcludeFromCollections: true };
  }

  render({ collections, stocks = [] }) {
    const posts = collections.briefingsEn || [];
    const watchlist = stocks;
    const items = posts.map((post) => {
      const data = post.data;
      const find = (code) => watchlist.find((stock) => stock.code === code);
      const named = (data.tickers || []).map(find).filter(Boolean);
      const kind = data.reportKind || "daily";
      return {
        url: local(post.url),
        title: data.title,
        summary: data.summary || "",
        date: iso(post.date),
        dateLabel: label(post.date),
        channel: "China AI",
        kind,
        kindLabel: kind === "spotlight" ? "Spotlight" : "Daily",
        sources: (data.sources || []).length,
        tickers: (data.tickers || []).map((code) => {
          const stock = find(code);
          return stock ? `${code} ${stock.nameEn} ${stock.nameKo}` : code;
        }),
        text: named.map((stock) => `${stock.nameEn} ${stock.nameKo} ${stock.zh}`).join(" "),
      };
    });

    return JSON.stringify(
      {
        generated: new Date().toISOString(),
        lang: "en",
        channels: ["China AI"],
        count: items.length,
        items,
      },
      null,
      0,
    );
  }
}
