/**
 * /search.json — what the client-side search reads on the landing page.
 * One entry per briefing: the card's own words plus the stock names it covers,
 * so a ticker like 688256 or 캠브리콘 finds the briefings that mention it.
 */
const KST = "Asia/Seoul";

const label = (value) =>
  new Intl.DateTimeFormat("en-US", { timeZone: KST, month: "short", day: "numeric", year: "numeric" }).format(new Date(value));

const iso = (value) =>
  new Intl.DateTimeFormat("en-CA", { timeZone: KST, year: "numeric", month: "2-digit", day: "2-digit" })
    .format(new Date(value));

export default class {
  data() {
    return { permalink: "/search.json", eleventyExcludeFromCollections: true };
  }

  render({ collections, stocks = [] }) {
    const posts = collections.briefings || [];
    const watchlist = stocks;
    const items = posts.map((post) => {
      const data = post.data;
      const named = (data.tickers || [])
        .map((code) => watchlist.find((stock) => stock.code === code))
        .filter(Boolean);
      return {
        url: post.url,
        title: data.title,
        summary: data.summary || "",
        date: iso(post.date),
        dateLabel: label(post.date),
        session: data.session,
        sessionLabel: data.session === "open" ? "Pre-market" : "Close",
        sessionKorean: data.session === "open" ? "개장 전" : "장 마감",
        channel: "China AI",
        tickers: (data.tickers || []).map((code) => {
          const stock = watchlist.find((entry) => entry.code === code);
          return stock ? `${code} ${stock.en} ${stock.ko}` : code;
        }),
        text: named.map((stock) => `${stock.en} ${stock.ko} ${stock.zh}`).join(" "),
      };
    });

    return JSON.stringify(
      {
        generated: new Date().toISOString(),
        channels: ["China AI"],
        count: items.length,
        items,
      },
      null,
      0,
    );
  }
}
