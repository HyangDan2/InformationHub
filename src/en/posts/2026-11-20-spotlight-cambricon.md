---
title: "China AI Spotlight · Cambricon — the chain behind the 500,000-unit target"
date: 2026-11-20T20:00:00+09:00
reportKind: "spotlight"
summary: "Third-quarter revenue rose 104% to a record, and nine-month profit already beats all of 2025. Yet operating cash flow was negative and inventory stands at CNY 11.66bn. Here is how Cambricon's growth and its bottlenecks hang on the same chain."
tickers: ["688256"]
spotlight:
  snapshot:
    - { label: "Close", value: "CNY 920.00", note: "−1.50% · 7th by A-share turnover", tone: "down" }
    - { label: "Q3 2026 revenue", value: "CNY 3.531bn", note: "+104.47% YoY · record quarter" }
    - { label: "Q3 2026 net profit", value: "CNY 1.404bn", note: "+147.74% YoY" }
    - { label: "Nine-month revenue", value: "CNY 9.526bn", note: "+106.76% YoY" }
  charts:
    - title: "Quarterly revenue, 2026"
      unit: "CNY 100m"
      caption: "Source: company quarterly results, as compiled by Jon Peddie Research. Q2 is derived by subtracting Q1 and Q3 from the nine-month total. Growth slowed from 160% to 104% as the base rose."
      rows:
        - { label: "Q1", value: 28.90, digits: 2, note: "+160%" }
        - { label: "Q2", value: 31.05, digits: 2 }
        - { label: "Q3", value: 35.31, digits: 2, note: "+104.5%", subject: true }
    - title: "Nine months 2026 vs. full-year 2025"
      unit: "CNY 100m"
      caption: "Nine-month revenue is 1.47 times all of 2025. 2025 was the first profitable year since the company was founded in 2016."
      rows:
        - { label: "2026 9M revenue", value: 95.26, digits: 2, note: "+106.8%", subject: true }
        - { label: "2025 revenue", value: 65.00, digits: 2 }
        - { label: "2026 9M net profit", value: 37.15, digits: 2, note: "+131.5%", subject: true }
        - { label: "2025 net profit", value: 20.60, digits: 2 }
    - title: "AI accelerator shipment target"
      unit: "10k cards"
      caption: "Source: Jon Peddie Research. 2025 is an estimate; 2026 is the company's target. The 2026–2028 target calls for cumulative revenue of at least CNY 100bn."
      rows:
        - { label: "2025 (est.)", value: 11.6, digits: 1 }
        - { label: "2026 (target)", value: 50.0, digits: 1, note: "4.3×", subject: true }
    - title: "China AI accelerator shipments (2025)"
      unit: "10k cards"
      caption: "Source: IDC. The market was about 4m cards; domestic vendors took 41%. Cambricon's 2.9% puts it in the second tier behind Huawei."
      rows:
        - { label: "Nvidia", value: 220, digits: 0, note: "55%" }
        - { label: "Huawei", value: 81.2, digits: 1, note: "20.3%" }
        - { label: "Alibaba T-Head", value: 26.5, digits: 1, note: "6.6%" }
        - { label: "Cambricon", value: 11.6, digits: 1, note: "2.9%", subject: true }
        - { label: "Baidu Kunlunxin", value: 11.6, digits: 1, note: "2.9%" }
        - { label: "Hygon", value: 8.25, digits: 2, note: "2.1%" }
        - { label: "MetaX", value: 6.6, digits: 1, note: "1.7%" }
watchItems:
  - tag: "Shipments"
    tone: "next"
    title: "Where the 500,000-unit target can actually be checked"
    detail: "The company discloses neither unit volumes nor unit prices, so the only route is to back them out of quarterly revenue, inventory turns and receivables. Dividing 2025 revenue by an estimated 116,000 units gives about CNY 56,000 per accelerator, but that number rests on an estimate and carries a wide error bar."
    when: "Q4 results (Jan–Feb 2027)"
  - tag: "Supply"
    tone: "down"
    title: "SMIC's 7nm-class yield and HBM supply"
    detail: "The 500,000-unit target depends on SMIC's 7nm-class capacity, where reported yields run near 20%. HBM supply and cost are the other constraint on commercialising new chips. If any one link in the chain binds, shipments are capped regardless of demand."
    when: "Every quarter"
  - tag: "Financials"
    tone: "down"
    title: "Negative operating cash flow and CNY 11.66bn of inventory"
    detail: "Third-quarter operating cash flow was −CNY 83.68m, inventory at end-September was CNY 11.66bn and total liabilities reached CNY 7.236bn, up 56% from end-June. That may be wafers and HBM being stocked ahead of a launch, but if the inventory does not turn into fourth-quarter revenue, the quality of the profit becomes the issue."
    when: "Q4 report"
  - tag: "Customers"
    tone: "event"
    title: "Top five customers 94%, largest about 80%"
    detail: "In the first half of 2025 the top five customers supplied 94% of revenue and one supplied about 80%. Chinese media identify ByteDance as the dominant buyer, and Caixin reported pre-orders of roughly 200,000 Siyuan 590 chips; Alibaba is also expected to become a significant buyer. One customer's order timing can swing a whole quarter."
    when: "Quarterly results and trade press"
  - tag: "Policy"
    tone: "next"
    title: "The government procurement list and BIS enforcement"
    detail: "Cambricon and Huawei are on China's government-approved AI hardware procurement list and Nvidia is not. The BIS rules that took effect on Nov 19, which license remote access to AI chips from overseas data centres, leave room for the domestic share of procurement to rise further — while narrowing the routes for overseas collaboration."
    when: "Weeks after implementation"
  - tag: "Targets"
    tone: "next"
    title: "CNY 100bn of cumulative revenue, 2026–2028"
    detail: "If 2026 revenue lands around CNY 14bn, the company needs more than CNY 40bn a year in 2027 and 2028 — more than three times the third-quarter run rate, repeated eight times over. It is a target rather than guidance, but it is hard to explain without both better yields and a wider customer base."
    when: "2027–2028"
sources:
  - label: "Jon Peddie Research — Cambricon doubles revenue on domestic AI demand"
    url: "https://www.jonpeddie.com/news/cambricon-doubles-revenue-on-domestic-ai-demand/"
  - label: "Investing.com — Chinese chip stocks as the US tightens access (procurement list)"
    url: "https://www.investing.com/news/stock-market-news/watch-these-chinese-chip-stocks-as-us-tightens-access-to-nvidia-hardware-93CH-5031673"
  - label: "Xinhua Finance — STAR Market close, Nov 20 (Cambricon turnover)"
    url: "https://www.cnfin.com/gs-lb/detail/20261120/4498145_1.html"
  - label: "Jiemian — STAR chips slide; comments on domestic compute"
    url: "https://www.jiemian.com/article/15354670.html"
---

## The company and its place in the chain

Cambricon Technologies (寒武纪, `688256.SH`) is a fabless designer spun out of the Chinese Academy of Sciences' Institute of Computing Technology on March 15, 2016. It listed on the STAR Market on July 20, 2020, raising about CNY 2.58bn. Huawei put it on the map: its first processor design, `Cambricon 1A`, shipped in 2016 and was adopted in Huawei's Kirin 970 in 2017. From there the business pivoted to cloud accelerators — the MLU100 in May 2018 and mass production of the training chip Siyuan 290 in January 2021.

Today the core product line is the `Siyuan` family of cloud AI training and inference accelerators. Siyuan 590 was reported to be in volume production on SMIC's N+2 process from the third quarter of 2024. On the software side the company has built its own toolchains, Neuware and MagicMind, to compete with Nvidia's CUDA. On raw performance the consensus is that its chips trail Nvidia's Blackwell generation by several generations. What creates real demand is that domestic buyers have nowhere else to go: the harder it becomes to move models and code across borders, the more supply security outranks switching cost.

In the value chain, Cambricon sits in **AI accelerators (compute)**. Upstream are SMIC's 7nm-class foundry capacity and HBM supply; downstream is a handful of hyperscale customers. Jon Peddie Research describes the structure as a three-link chain: customer concentration, foundry yield and memory supply each carry their own risk, and a break at any one link caps shipments regardless of demand. Understanding that chain is the starting point for reading this company.

## Recent results and key metrics

Third-quarter revenue was **CNY 3.531bn** (about USD 530m), up **104.47%** year on year, with net profit attributable to shareholders of **CNY 1.404bn** (about USD 210.6m, +147.74%). Both are quarterly records since the 2020 listing. The sequence has been Q1 CNY 2.89bn (+160%, net profit around CNY 1bn, +185%), Q2 about CNY 3.105bn and Q3 CNY 3.531bn, so revenue climbed a step every quarter. Growth slowing from 160% to 104% reflects a rising base rather than a stall.

For the nine months, revenue was **CNY 9.526bn** (+106.76%) and net profit **CNY 3.715bn** (+131.49%). Full-year 2025 revenue was CNY 6.5bn, so nine months already equal **1.47 times** last year. The CNY 2.06bn net profit of 2025 was the company's first profitable year since it was founded; as recently as early 2024 it was loss-making and had lost Huawei as a key customer. In two years it has become a different company.

Research and development spending was **CNY 1.225bn** in the nine months (+45.35%), equal to **12.86%** of revenue. That the R&D ratio fell to the low teens in a year when revenue more than doubled means revenue grew faster than spending. The company says gross margins remain at a relatively high and stable level.

The number that draws the eye is elsewhere: **third-quarter operating cash flow was −CNY 83.68m**. Inventory at end-September was **CNY 11.66bn** and total liabilities were **CNY 7.236bn**, up 56% from end-June. Revenue and profit raced ahead while cash fell behind, and inventory and debt moved with it. If that is wafers and HBM being bought ahead of shipments, it is natural. Whether it converts into fourth-quarter revenue or stays on the balance sheet is what will decide the quality of these earnings.

The shipment target is ambitious: an estimated **116,000 units in 2025** and a **500,000-unit target for 2026**, more than four times as many. On top of that sits a target of at least **CNY 100bn** of cumulative revenue for 2026–2028. Because the company discloses neither volumes nor prices, all of these are outside estimates — but dividing 2025 revenue by 116,000 units gives about CNY 56,000 per accelerator, a useful scale reference.

## Today's issue and the competitive picture

On Nov 19, Jon Peddie Research published its review of the third-quarter results and the supply chain, and attention came back to the name. The stock rose to **CNY 940.00** early, fell to **CNY 893.01** as semiconductors sold off in the afternoon, and closed at **CNY 920.00 (−1.50%)**. A loss in the low single digits on a day the STAR Composite fell 5.23% and the semiconductor sector 6.85% is unusual resilience. Turnover of **CNY 9.472bn** ranked seventh across the A-share market.

The competitive numbers are clearer. On IDC figures, China shipped about 4m AI accelerator cards in 2025: Nvidia 2.2m (55%) and domestic vendors 1.65m combined (41%). Within the domestic group Huawei dominates with 812,000, followed by Alibaba T-Head at 265,000, **Cambricon and Baidu Kunlunxin at 116,000 each (2.9%)**, Hygon at 82,500 and MetaX at 66,000. Nvidia's China share has fallen from about 95% before sanctions to below 60%, and Bernstein projects it could reach 8%.

That table should not be read too literally. Nvidia is still first, and the leading domestic vendor is Huawei, not Cambricon. Cambricon's edge is not share but **profitability and growth**. In the first half of 2026 its revenue of CNY 5.996bn trailed Hygon's CNY 9.099bn, yet its net profit of CNY 2.311bn beat Hygon's CNY 1.798bn, a gap created by a gross margin of about 55.25%.

The live argument is not about hardware performance but about **whether capex lasts**. One leg of today's A-share selloff was Alibaba saying its 20GW data-centre target and capex plan could be adjusted. In the same breath, though, Alibaba said investment in domestic chips and its own supply chain would be more aggressive. If the total falls while the domestic share rises, that can be a tailwind for Cambricon; if both fall together, the 500,000-unit target goes wrong at the first step.

## What to watch and the risks

<!-- This list is rendered as cards from watchItems in the frontmatter. -->

## Sources

- [Jon Peddie Research — Cambricon doubles revenue on domestic AI demand](https://www.jonpeddie.com/news/cambricon-doubles-revenue-on-domestic-ai-demand/)
- [Investing.com — Chinese chip stocks as the US tightens access (procurement list)](https://www.investing.com/news/stock-market-news/watch-these-chinese-chip-stocks-as-us-tightens-access-to-nvidia-hardware-93CH-5031673)
- [Xinhua Finance — STAR Market close, Nov 20](https://www.cnfin.com/gs-lb/detail/20261120/4498145_1.html)
- [Jiemian — STAR chips slide; comments on domestic compute](https://www.jiemian.com/article/15354670.html)
