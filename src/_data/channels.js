/**
 * Channels are the shelves of the hub. The first one is live; the grid is built to
 * take the next desk without a layout change — add an entry here and a folder of
 * posts under src/posts/ carrying its `permalink` base.
 *
 * Labels are per language (`…Ko` / `…En`) and read with `{{ channel | pick("name", lang) }}`.
 */
export default [
  {
    id: "china-ai",
    index: "01",
    flag: "🇨🇳",
    status: "live",
    url: "china-ai/",
    nameKo: "China AI",
    nameEn: "China AI",
    cadenceKo: "월~금 19:00 KST 발행",
    cadenceEn: "Daily 19:00 KST · Mon–Fri",
    blurbKo: "AI 칩·파운드리·광모듈·메모리 11개 종목을 평일 저녁마다 한 편으로 정리합니다.",
    blurbEn:
      "Eleven China AI semiconductor names — chips, foundry, optics, memory — in one report every weekday evening.",
    topicsKo: "AI 칩 · 파운드리 · 광모듈 · 메모리",
    topicsEn: "AI Chips · Foundry · Optics · Memory",
    coverKo: "11종목 관심목록",
    coverEn: "11-Stock Watchlist",
  },
  {
    id: "us-markets",
    index: "02",
    flag: "🇺🇸",
    status: "live",
    url: "us-markets/",
    nameKo: "US Markets",
    nameEn: "US Markets",
    cadenceKo: "화~토 06:35 KST 발행",
    cadenceEn: "Tue–Sat 06:35 KST · Post-Close",
    blurbKo: "미국 정규장이 끝난 직후, 시황과 빅테크·반도체·특징주를 한 편으로 정리합니다.",
    blurbEn:
      "The US session, its mega-caps, semis and single-name movers — filed right after the close.",
    topicsKo: "지수 · 빅테크 · 반도체 · 매크로",
    topicsEn: "Indices · Mega-caps · Semis · Macro",
    coverKo: "13종목 관심목록",
    coverEn: "13-Stock Watchlist",
  },
  {
    id: "next-desk",
    index: "03",
    flag: "＋",
    status: "planned",
    url: "",
    nameKo: "다음 채널",
    nameEn: "Next desk",
    cadenceKo: "준비 중",
    cadenceEn: "Being prepared",
    blurbKo: "세 번째 채널도 같은 구조로 준비하고 있습니다.",
    blurbEn: "A third desk is being prepared. The shelf is built to hold it without a redesign.",
    topicsKo: "다음 채널 자리",
    topicsEn: "Room for the next channel",
    coverKo: "빈 자리",
    coverEn: "Open slot",
  },
];
