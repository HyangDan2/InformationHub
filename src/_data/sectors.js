/**
 * The five supply-chain groups the eleven names sit in.
 * The order and grouping follow the China AI desk's own mapping; the sector map on
 * every daily report is built from this list, so a new stock only needs its code
 * added here and in _data/stocks.js.
 *
 * Labels are per language: `nameKo` / `nameEn` for the group, `noteKo` / `noteEn`
 * for the one-line description. Templates read them with
 * `{{ sector | pick("name", lang) }}`.
 */
export default [
  {
    id: "ai-chip",
    index: "01",
    nameKo: "AI 칩·DCU",
    nameEn: "AI chips & DCU",
    noteKo: "학습·추론 가속기",
    noteEn: "Training & inference accelerators",
    codes: ["688256", "688041"],
  },
  {
    id: "foundry",
    index: "02",
    nameKo: "파운드리",
    nameEn: "Foundry",
    noteKo: "첨단 공정 위탁생산",
    noteEn: "Leading-edge contract manufacturing",
    codes: ["688981"],
  },
  {
    id: "optics",
    index: "03",
    nameKo: "광모듈·소재",
    nameEn: "Optics & materials",
    noteKo: "800G·1.6T 트랜시버, CCL",
    noteEn: "800G · 1.6T transceivers, CCL",
    codes: ["300308", "300502", "600183"],
  },
  {
    id: "equipment",
    index: "04",
    nameKo: "반도체 장비",
    nameEn: "Equipment",
    noteKo: "증착·전공정",
    noteEn: "Deposition & front-end",
    codes: ["688072"],
  },
  {
    id: "memory",
    index: "05",
    nameKo: "메모리·인터커넥트·IP",
    nameEn: "Memory, interconnect & IP",
    noteKo: "DRAM·RCD·칩렛 IP",
    noteEn: "DRAM · RCD · chiplet IP",
    codes: ["603986", "688008", "688521", "688825"],
  },
];
