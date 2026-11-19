/**
 * US Markets desk — the names the channel follows.
 *
 * `code` is the ticker as it prints on a US exchange, and it is also the anchor a
 * report heading earns (`### NVDA · Nvidia` → `#stock-NVDA`), so the sector map
 * on the channel page can jump straight to that name's paragraph.
 *
 * Labels are per language (`nameKo`/`nameEn`, `fieldKo`/`fieldEn`) and read with
 * `{{ stock | pick("name", lang) }}`. `zh` is kept for the search index, which is
 * shared with the China AI desk; US names leave it empty.
 */
export default [
  {
    code: "NVDA",
    nameEn: "Nvidia",
    nameKo: "엔비디아",
    zh: "",
    fieldEn: "AI accelerators · GPUs",
    fieldKo: "AI 가속기 · GPU",
  },
  {
    code: "MSFT",
    nameEn: "Microsoft",
    nameKo: "마이크로소프트",
    zh: "",
    fieldEn: "Cloud · Copilot",
    fieldKo: "클라우드 · 코파일럿",
  },
  {
    code: "AAPL",
    nameEn: "Apple",
    nameKo: "애플",
    zh: "",
    fieldEn: "Devices · services",
    fieldKo: "디바이스 · 서비스",
  },
  {
    code: "GOOGL",
    nameEn: "Alphabet",
    nameKo: "알파벳",
    zh: "",
    fieldEn: "Search · Gemini · cloud",
    fieldKo: "검색 · 제미나이 · 클라우드",
  },
  {
    code: "META",
    nameEn: "Meta Platforms",
    nameKo: "메타",
    zh: "",
    fieldEn: "Advertising · models",
    fieldKo: "광고 · 자체 모델",
  },
  {
    code: "AMZN",
    nameEn: "Amazon",
    nameKo: "아마존",
    zh: "",
    fieldEn: "Retail · AWS",
    fieldKo: "리테일 · AWS",
  },
  {
    code: "TSLA",
    nameEn: "Tesla",
    nameKo: "테슬라",
    zh: "",
    fieldEn: "EVs · autonomy",
    fieldKo: "전기차 · 자율주행",
  },
  {
    code: "AVGO",
    nameEn: "Broadcom",
    nameKo: "브로드컴",
    zh: "",
    fieldEn: "Custom ASIC · networking",
    fieldKo: "커스텀 ASIC · 네트워킹",
  },
  {
    code: "AMD",
    nameEn: "AMD",
    nameKo: "AMD",
    zh: "",
    fieldEn: "CPUs · AI accelerators",
    fieldKo: "CPU · AI 가속기",
  },
  {
    code: "MU",
    nameEn: "Micron",
    nameKo: "마이크론",
    zh: "",
    fieldEn: "Memory · HBM",
    fieldKo: "메모리 · HBM",
  },
  {
    code: "TSM",
    nameEn: "TSMC",
    nameKo: "TSMC",
    zh: "",
    fieldEn: "Foundry",
    fieldKo: "파운드리",
  },
  {
    code: "UNH",
    nameEn: "UnitedHealth",
    nameKo: "유나이티드헬스",
    zh: "",
    fieldEn: "Health insurance",
    fieldKo: "건강보험",
  },
  {
    code: "DIS",
    nameEn: "Walt Disney",
    nameKo: "월트디즈니",
    zh: "",
    fieldEn: "Media · parks",
    fieldKo: "미디어 · 테마파크",
  },
];
