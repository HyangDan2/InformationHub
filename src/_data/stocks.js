/**
 * The TradingView `ChinaAI` watchlist the China AI desk reports on.
 * Order, tickers, names and fields follow the list handed over on 2026-11-17.
 *
 * Every label is kept per language, so a template asks for one field with
 * `{{ stock | pick("name", lang) }}` and gets 캠브리콘 on /InformationHub/ and
 * Cambricon on /InformationHub/en/. `zh` is the same in both languages.
 */
export default [
  { code: "688256", nameKo: "캠브리콘", nameEn: "Cambricon", zh: "寒武纪", fieldKo: "AI 칩", fieldEn: "AI Chips" },
  { code: "688041", nameKo: "하이광", nameEn: "Hygon", zh: "海光信息", fieldKo: "DCU·서버 CPU", fieldEn: "DCU / Server CPU" },
  { code: "300308", nameKo: "중지이노라이트", nameEn: "Zhongji Innolight", zh: "中际旭创", fieldKo: "광트랜시버", fieldEn: "Optical Transceivers" },
  { code: "300502", nameKo: "이옵토링크", nameEn: "Eoptolink", zh: "新易盛", fieldKo: "광트랜시버", fieldEn: "Optical Transceivers" },
  { code: "688981", nameKo: "SMIC", nameEn: "SMIC", zh: "中芯国际", fieldKo: "파운드리", fieldEn: "Foundry" },
  { code: "600183", nameKo: "생익과기", nameEn: "Shengyi Technology", zh: "生益科技", fieldKo: "CCL·PCB 소재", fieldEn: "CCL / PCB Materials" },
  { code: "688072", nameKo: "파이오텍", nameEn: "Piotech", zh: "拓荆科技", fieldKo: "증착 장비", fieldEn: "Deposition Equipment" },
  { code: "603986", nameKo: "기가디바이스", nameEn: "GigaDevice", zh: "兆易创新", fieldKo: "메모리·MCU", fieldEn: "Memory / MCU" },
  { code: "688008", nameKo: "몬타지", nameEn: "Montage Technology", zh: "澜起科技", fieldKo: "메모리 인터페이스", fieldEn: "Memory Interface" },
  { code: "688521", nameKo: "베리실리콘", nameEn: "VeriSilicon", zh: "芯原股份", fieldKo: "칩렛·IP", fieldEn: "Chiplet / IP" },
  { code: "688825", nameKo: "창신메모리", nameEn: "CXMT", zh: "长鑫存储", fieldKo: "DRAM", fieldEn: "DRAM" },
];
