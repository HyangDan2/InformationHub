/**
 * Channels are the shelves of the hub. The first one is live; the grid is built to
 * take the next desk without a layout change — add an entry here and a folder of
 * posts under src/posts/ carrying its `permalink` base.
 */
export default [
  {
    id: "china-ai",
    index: "01",
    flag: "🇨🇳",
    name: "China AI",
    nameKo: "차이나 AI",
    status: "live",
    url: "/china-ai/",
    cadence: "Daily 08:35 Pre-Market & 17:25 Close",
    cadenceKo: "매일 08:35 개장 전 · 17:25 장 마감",
    blurb:
      "Eleven China AI semiconductor names — chips, foundry, optics, memory — read before the open and after the close.",
    blurbKo: "AI 칩·파운드리·광모듈·메모리 11개 종목을 개장 전과 장 마감 후에 정리합니다.",
    topics: "AI Chips · Foundry · Optics · Memory",
    cover: "11-Stock Watchlist",
  },
  {
    id: "next-desk",
    index: "02",
    flag: "＋",
    name: "Next desk",
    nameKo: "다음 채널",
    status: "planned",
    url: "",
    cadence: "Being prepared",
    cadenceKo: "준비 중",
    blurb: "A second desk is being prepared. The shelf is built to hold it without a redesign.",
    blurbKo: "두 번째 채널을 준비하고 있습니다. 같은 구조로 바로 얹을 수 있게 만들어 두었습니다.",
    topics: "Room for the next channel",
    cover: "Open slot",
  },
];
