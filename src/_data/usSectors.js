/**
 * US Markets desk — how the watchlist is grouped on the status map.
 *
 * The three groups are the ones the desk reports on: the mega-cap buyers of AI
 * compute, the companies that sell it, and the single names that moved the tape
 * without belonging to either. Cards link to `#stock-<ticker>` in the report.
 */
export default [
  {
    id: "mega",
    index: "01",
    nameKo: "빅테크 M7",
    nameEn: "Magnificent 7",
    noteKo: "AI 컴퓨팅을 사 쓰는 수요처",
    noteEn: "The end customers of AI",
    codes: ["NVDA", "MSFT", "AAPL", "GOOGL", "META", "AMZN", "TSLA"],
  },
  {
    id: "semis",
    index: "02",
    nameKo: "AI 반도체",
    nameEn: "AI Semiconductors",
    noteKo: "가속기 · 메모리 · 파운드리",
    noteEn: "Accelerators · memory · foundry",
    codes: ["AVGO", "AMD", "MU", "TSM"],
  },
  {
    id: "movers",
    index: "03",
    nameKo: "오늘의 특징주",
    nameEn: "Session movers",
    noteKo: "지수와 따로 크게 움직인 종목",
    noteEn: "Names that moved off-index",
    codes: ["UNH", "DIS"],
  },
];
