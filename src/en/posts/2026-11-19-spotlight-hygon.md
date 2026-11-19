---
title: "China AI Spotlight · Hygon (688041) — three things a 17% intraday fall left behind"
date: 2026-11-19T20:00:00+09:00
reportKind: "spotlight"
summary: "Hygon was pushed to CNY 156.05 intraday by a Samsung foundry audit rumour and closed back at CNY 180.00 (−4.81%). A look at the domestic compute axis that owns both an x86 CPU and a DCU — through its numbers, share and competitive position."
tickers: ["688041"]
spotlight:
  snapshot:
    - { label: "Close", value: "CNY 180.00", note: "−4.81% · down 17% intraday", tone: "down" }
    - { label: "2026 3Q revenue", value: "CNY 5.856bn", note: "+45.46% YoY" }
    - { label: "2026 3Q net profit", value: "CNY 1.048bn", note: "+37.90% YoY" }
    - { label: "1–3Q revenue", value: "CNY 14.955bn", note: "+57.58% YoY" }
  charts:
    - title: "1H 2026 revenue comparison"
      unit: "CNY 100m"
      caption: "Source: both companies' 1H 2026 interim reports. Hygon grew 66.52%, Cambricon 108.13%."
      rows:
        - { label: "Hygon", sub: "688041 · CPU + DCU", value: 90.99, digits: 2, note: "+66.5%", subject: true }
        - { label: "Cambricon", sub: "688256 · AI accelerator", value: 59.96, digits: 2, note: "+108.1%" }
    - title: "1H 2026 net profit comparison"
      unit: "CNY 100m"
      caption: "Hygon has the larger revenue, Cambricon the higher margin: its 1H gross margin was about 55.25%."
      rows:
        - { label: "Hygon", sub: "Net profit", value: 17.98, digits: 2, note: "+49.7%", subject: true }
        - { label: "Cambricon", sub: "Net profit", value: 23.11, digits: 2, note: "+122.6%" }
    - title: "China AI accelerator card shipments (2025)"
      unit: "10k cards"
      caption: "Source: IDC, China Cloud AI Accelerator Market Report 2025. The total market is estimated at about 4 million cards: Nvidia 55%, Chinese vendors 41% combined."
      rows:
        - { label: "Nvidia", value: 220, digits: 0, note: "55%" }
        - { label: "Huawei", value: 81.2, digits: 1, note: "20.3%" }
        - { label: "Alibaba T-Head", value: 26.5, digits: 1, note: "6.6%" }
        - { label: "Cambricon", value: 11.6, digits: 1, note: "2.9%" }
        - { label: "Baidu Kunlunxin", value: 11.6, digits: 1, note: "2.9%" }
        - { label: "Hygon", value: 8.25, digits: 2, note: "2.1%", subject: true }
        - { label: "MetaX", value: 6.6, digits: 1, note: "1.7%" }
watchItems:
  - tag: "Risk"
    tone: "down"
    title: "Supply-chain rumours coming back"
    detail: "This selloff began with an unverified 'Samsung foundry audit' rumour. It circulated on the night of November 18, produced a 17% fall early on the 19th, and was found to be untrue after Shanghai Securities News checked with several foundries and design houses. The company also said that \"the relevant work and supply are stable\". The same kind of story can come round again, so read filings and company confirmations first."
    when: "At any time"
  - tag: "Product"
    tone: "next"
    title: "The schedule for ShinShan No.4 (next-generation DCU)"
    detail: "ShinShan No.3 went into customer evaluation in December 2025 and No.4 is in development. The timing and published performance of No.4 will be the first evidence for the forecast that DCU reaches 40% of revenue."
    when: "Quarterly reports and product launches"
  - tag: "Results"
    tone: "next"
    title: "Whether the DCU revenue mix is disclosed"
    detail: "The company does not report CPU and DCU revenue separately. The market expects the mix to flip to 60% CPU and 40% DCU in 2026. Whether fourth-quarter guidance confirms that split is the key valuation variable."
    when: "Fourth-quarter results"
  - tag: "Financials"
    tone: "down"
    title: "Operating cash flow turning negative"
    detail: "Operating cash flow in 1H 2026 was −CNY 428m, down from +CNY 2.177bn a year earlier. Alongside rapid revenue and profit growth, watch how much R&D (29.15% of revenue), inventories and receivables grew."
    when: "Third-quarter cash-flow statement"
  - tag: "Structure"
    tone: "event"
    title: "Customer concentration of 98%"
    detail: "At the end of 2024 the top five customers were 98.17% of revenue and the largest was 40.26%. An order adjustment at a single large server or internet customer goes straight into the numbers."
    when: "Annual report"
  - tag: "Policy"
    tone: "next"
    title: "The pace of CPU localisation"
    detail: "The domestic CPU replacement rate is expected to rise from 22% in 2026 to 45% by 2030 — about CNY 98bn cumulatively over five years. That is slower than GPUs and ASICs, and x86 compatibility is both this company's strength and the ecosystem wall around it."
    when: "2027–2030"
sources:
  - label: "NewsPim — China's big three chipmakers' third-quarter results (Hygon 3Q revenue and profit)"
    url: "https://www.newspim.com/news/view/20261020000223"
  - label: "NewsPim — [China's giants' supply chains] the AI accelerator DCU 'Hygon'"
    url: "https://newspim.com/news/view/20260917001031"
  - label: "NewsPim — [China's giants' supply chains] the domestic AI chip 'Cambricon' (interim results and ecosystem comparison)"
    url: "https://www.newspim.com/news/view/20260918000950"
  - label: "NewsPim (GAM) — Hygon's dual CPU and DCU growth (customer concentration, Xinchuang share)"
    url: "https://www.newspim.com/news/view/20260210001282"
  - label: "Money Today — China's AI chip market: Huawei and the four GPU dragons fill Nvidia's gap (IDC shipments)"
    url: "https://www.mt.co.kr/world/2026/09/13/2026091110370863114"
  - label: "Shanghai Securities News (21jingji) — 688041 rebounds sharply late in the session"
    url: "https://www.21jingji.com/article/20261119/herald/fc4bc3e2ad5f718a74ed49bf7f0e0bd7.html"
  - label: "Exa market library — 688041 quotes (Nov 18 and Nov 19 closes)"
    url: "https://exa.ai/library/markets/stocks/688041?exchange=XSHG"
---

## Company & Value-Chain Position

Hygon Information Technology (海光信息, Hygon, `688041.SH`) is fabless. It designs rather than manufactures, and hands production to a foundry. There are two product axes: an **x86 CPU** for servers and data centres, and a **DCU (Deep-learning Computing Unit)** for AI training and inference.

The CPU line began with an AMD licence and has continued through in-house generations. The current flagship, "Hygon No.4", is well known in government, party and industry Xinchuang (信创, information-technology application innovation) procurement and holds a leading position in finance and telecom, where ecosystem requirements are strict. x86 compatibility is the key: existing servers and software can stay in place with only the chip changing, which makes it a real option for domestic replacement in industries where switching costs are high.

The DCU carries its own software stack (**DTK, DAS, DAP**) as an answer to Nvidia's CUDA. Design of the first generation, "ShinShan No.1", began in October 2018; ShinShan No.3 has been in customer evaluation since December 2025 and No.4 is in development. According to the company it has adapted and optimised **365 generative AI models**, including DeepSeek V3, R1 and V4 (adapted on launch day), Alibaba's Qwen3, Tencent's Hunyuan and Zhipu AI's GLM, and DAS supports more than 2,000 operators and over 100 AI tools.

In the value chain it sits in the **AI chips and DCU** group — the domestic-substitution axis for compute accelerators. Domestic CPU share in Xinchuang procurement is already above 60%, and this company is the furthest forward within it. Its customer base, however, is narrow: at the end of 2024 the top five customers were **98.17%** of revenue and the largest was <strong>40.26%</strong>. Most revenue comes from a handful of large server and internet customers.

## Recent Results, Financials & Growth Drivers

The numbers are growing quickly. In 2025 the company reported revenue of **CNY 14.377bn** (+56.92%) and net profit attributable to shareholders of **CNY 2.545bn** (+31.79%). In 1H 2026 it accelerated to revenue of **CNY 9.099bn** (+66.52%) and net profit of **CNY 1.798bn** (+49.69%). R&D spending over the same period was **CNY 2.652bn**, or <strong>29.15%</strong> of revenue.

For the third quarter alone, revenue was **CNY 5.856bn** (+45.46%) and net profit **CNY 1.048bn** (+37.90%). For the first nine months, revenue was **CNY 14.955bn** (+57.58%) and net profit **CNY 2.847bn** (+45.12%) — more than last year's full-year revenue in three quarters. The company attributes the growth to AI industry expansion and China's shift to a market-led localisation of semiconductors.

The axis of growth is moving towards the DCU. The company does not report CPU and DCU revenue separately, but market estimates put 2025 at roughly CNY 9.85bn for CPU and CNY 4.527bn for DCU, with 2026 expected to move the CPU share from 68.5% to 60% and the DCU share from 31.5% to 40%. That is an estimate, not a disclosure, and should be read as such. On October 16 the company proposed a **CNY 500–800m buyback** for an employee share ownership and compensation plan.

The one thing to look at in the financials is cash flow. Operating cash flow in the first half was **−CNY 428m**, down from **+CNY 2.177bn** a year earlier. Revenue and profit have grown together, but inventories, receivables and R&D spending have run ahead of them.

## Today's News & Competitive Landscape

**Today's fall came from a rumour, not from the numbers.** On the night of November 18, word spread that "Samsung has begun a forensic audit (穿透严查) of foundry work for Chinese chip designers", and early on the 19th AI chips broke down as related posts circulated. Hygon opened at CNY 185.00 and fell to **CNY 156.05**, about **17%** below the previous close. In the afternoon, Shanghai Securities News checked with several foundries and design houses and was told "the market rumour is not accurate"; a company official added that "the relevant work and supply are stable and the geopolitical impact has not been large". The stock recovered more than 15% from the low to close at <strong>CNY 180.00 (−4.81%)</strong>. Turnover was **CNY 8.7bn**.

**The competitive picture is the second stage of 'replacing Nvidia'.** In IDC's 2025 China cloud AI accelerator market report (about 4 million cards shipped), Nvidia leads with 2.2 million cards (55%) and Chinese vendors together account for 1.65 million (41%). Within that, Huawei is dominant at 812,000, followed by Alibaba T-Head at 265,000, Cambricon and Baidu Kunlunxin at 116,000 each, **Hygon at 82,500** and MetaX at 66,000. Hygon is not yet in the top ranks of the accelerator card market, but it is the only axis selling both a CPU and a DCU.

The most direct comparison is Cambricon. On 1H 2026 revenue Hygon leads, **CNY 9.099bn** against **CNY 5.996bn**. On net profit it is the other way round, **CNY 1.798bn** against **CNY 2.311bn**, so Cambricon's margins are much higher (its 1H gross margin was about 55.25%). Cambricon is also growing faster, with revenue +108.13% and net profit +122.61%. Hygon's strengths are scale and the x86 ecosystem; Cambricon's are profitability and the pace of accelerator growth.

Competition in software ecosystems points the same way. Nvidia has CUDA, Cambricon has Neuware and MagicMind, Hygon has the DTK family. How quickly a new model can be made to run on a vendor's chips is the real competitive test, and Hygon has answered it by adapting DeepSeek V4 on launch day.

## Checkpoints & Risks

<!-- This list is rendered as cards from watchItems in the frontmatter. -->

## Sources

- [NewsPim — China's big three chipmakers' third-quarter results (Hygon 3Q revenue and profit)](https://www.newspim.com/news/view/20261020000223)
- [NewsPim — [China's giants' supply chains] the AI accelerator DCU 'Hygon'](https://newspim.com/news/view/20260917001031)
- [NewsPim — [China's giants' supply chains] the domestic AI chip 'Cambricon'](https://www.newspim.com/news/view/20260918000950)
- [NewsPim (GAM) — Hygon's dual CPU and DCU growth](https://www.newspim.com/news/view/20260210001282)
- [Money Today — China's AI chip market: Huawei and the four GPU dragons fill Nvidia's gap (IDC shipments)](https://www.mt.co.kr/world/2026/09/13/2026091110370863114)
- [Shanghai Securities News (21jingji) — 688041 rebounds sharply late in the session](https://www.21jingji.com/article/20261119/herald/fc4bc3e2ad5f718a74ed49bf7f0e0bd7.html)
- [Exa market library — 688041 quotes (Nov 18 and Nov 19 closes)](https://exa.ai/library/markets/stocks/688041?exchange=XSHG)
