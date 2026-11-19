/**
 * The five supply-chain groups the eleven names sit in.
 * The order and grouping follow the China AI desk's own mapping; the sector map on
 * every daily report is built from this list, so a new stock only needs its code
 * added here and in _data/stocks.js.
 */
export default [
  {
    id: "ai-chip",
    index: "01",
    name: "AI 칩·DCU",
    en: "AI chips & DCU",
    note: "학습·추론 가속기",
    codes: ["688256", "688041"],
  },
  {
    id: "foundry",
    index: "02",
    name: "파운드리",
    en: "Foundry",
    note: "첨단 공정 위탁생산",
    codes: ["688981"],
  },
  {
    id: "optics",
    index: "03",
    name: "광모듈·소재",
    en: "Optics & materials",
    note: "800G·1.6T 트랜시버, CCL",
    codes: ["300308", "300502", "600183"],
  },
  {
    id: "equipment",
    index: "04",
    name: "반도체 장비",
    en: "Equipment",
    note: "증착·전공정",
    codes: ["688072"],
  },
  {
    id: "memory",
    index: "05",
    name: "메모리·인터커넥트·IP",
    en: "Memory, interconnect & IP",
    note: "DRAM·RCD·칩렛 IP",
    codes: ["603986", "688008", "688521", "688825"],
  },
];
