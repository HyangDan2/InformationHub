/**
 * /search.json — what the client-side search reads on the landing page.
 * One entry per Korean briefing: the card's own words plus the stock names it
 * covers, so a ticker like 688256 or 캠브리콘 finds the briefings that mention it.
 *
 * URLs stay relative to the hub root (post.url is "/posts/…/"), and the page
 * script joins them with window.INFO_HUB_BASE.
 */
const KST = "Asia/Seoul";

const iso = (value) =>
  new Intl.DateTimeFormat("en-CA", { timeZone: KST, year: "numeric", month: "2-digit", day: "2-digit" })
    .format(new Date(value));

const label = (value) =>
  new Intl.DateTimeFormat("ko-KR", { timeZone: KST, year: "numeric", month: "2-digit", day: "2-digit" }).format(
    new Date(value),
  );

export default class {
  data() {
    return { permalink: "/search.json", eleventyExcludeFromCollections: true };
  }

  render({ collections, stocks = [] }) {
    const posts = collections.briefingsKo || [];
    const watchlist = stocks;
    const items = posts.map((post) => {
      const data = post.data;
      const find = (code) => watchlist.find((stock) => stock.code === code);
      const named = (data.tickers || []).map(find).filter(Boolean);
      const kind = data.reportKind || "daily";
      return {
        url: post.url,
        title: data.title,
        summary: data.summary || "",
        date: iso(post.date),
        dateLabel: label(post.date),
        channel: "China AI",
        kind,
        kindLabel: kind === "spotlight" ? "스포트라이트" : "데일리",
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
        lang: "ko",
        channels: ["China AI"],
        count: items.length,
        items,
      },
      null,
      0,
    );
  }
}
