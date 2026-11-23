---
title: "US Markets Spotlight · MU — on the day Nvidia came back, memory had its best session ever"
date: 2026-11-24T06:50:00+09:00
channel: "us-markets"
navSection: "us-markets"
reportKind: "spotlight"
summary: "Fiscal Q4 revenue of $54.23 billion (+379%), gross margin of 87.0%, EPS of $33.42 — a sixth straight record, with guidance of $61.5 billion for the next quarter. The stock was still 41.7% below its June high, then rose 19.04% on Nov. 23. Nothing new came from the company. With Jensen Huang back at Nvidia, confidence in AI capex returned, and the most heavily sold corner of the market bounced hardest. The numbers that decide what follows arrive on Dec. 17."
tickers: ["MU", "NVDA", "AMD", "TSM"]
spotlight:
  snapshot:
    - { label: "Close", value: "$707.70", note: "+19.04% · high $719.43", tone: "up" }
    - { label: "Market value", value: "~$814B", note: "up about $130B on the day" }
    - { label: "FQ4 revenue", value: "$54.23B", note: "+379% · sixth straight record" }
    - { label: "FQ4 gross margin", value: "87.0%", note: "operating margin 82.3% (non-GAAP)" }
    - { label: "FQ1 guidance", value: "$61.5B", note: "EPS $38.15" }
    - { label: "CY2027 HBM", value: "Sold out", note: "prices well above last year" }
    - { label: "Backlog (RPO)", value: "~$150B", note: "26 take-or-pay agreements" }
    - { label: "FY27 P/E", value: "4.0x", note: "consensus EPS $176.50" }
    - { label: "From June high", value: "-41.7%", note: "$1,213.56 → $707.70", tone: "down" }
  charts:
    - title: "Quarterly revenue"
      unit: "USD billions"
      caption: "Revenue was $11.3 billion a year ago and has multiplied five times in six quarters. The $61.5 billion for FQ1 is company guidance."
      rows:
        - { label: "FQ4 2025", sub: "year-ago quarter", value: 11.32, digits: 2, note: "actual" }
        - { label: "FQ1 2026", sub: "December quarter", value: 13.64, digits: 2, note: "+21%" }
        - { label: "FQ2 2026", sub: "March quarter", value: 23.80, digits: 2, note: "+75%" }
        - { label: "FQ3 2026", sub: "June quarter", value: 41.46, digits: 2, note: "+74%" }
        - { label: "FQ4 2026", sub: "ended Sept. 3", value: 54.23, digits: 2, note: "+31%", subject: true }
        - { label: "FQ1 2027", sub: "guidance", value: 61.50, digits: 2, note: "outlook" }
    - title: "HBM market share"
      unit: "% · Q2 2026, by revenue"
      caption: "SK hynix holds half of high-bandwidth memory and Samsung a third. Micron is third at 18%, down three points from 21% in Q1."
      rows:
        - { label: "SK hynix", sub: "Q1 58%", value: 50, digits: 0, note: "No. 1" }
        - { label: "Samsung", sub: "Q1 21%", value: 33, digits: 0, note: "HBM4 first" }
        - { label: "Micron", sub: "Q1 21%", value: 18, digits: 0, note: "No. 3", subject: true }
    - title: "FQ4 revenue by business unit"
      unit: "USD billions"
      caption: "The two data-center units are 63% of revenue. A year earlier, cloud memory and core data center together were $6.1 billion."
      rows:
        - { label: "Core Data Center", sub: "GPU servers", value: 18.00, digits: 2, note: "33%" }
        - { label: "Cloud Memory", sub: "HBM · hyperscalers", value: 16.28, digits: 2, note: "30%" }
        - { label: "Mobile & Client", sub: "phones · PCs", value: 13.11, digits: 2, note: "24%" }
        - { label: "Auto & Embedded", sub: "vehicles · industry", value: 6.82, digits: 2, note: "13%" }
    - title: "Earnings per share"
      unit: "USD · non-GAAP"
      caption: "Consensus has EPS a little more than doubling from $75.52 in fiscal 2026 to $176.50 in fiscal 2027, then $207.76 in fiscal 2028."
      rows:
        - { label: "FY2025", sub: "actual", value: 8.29, digits: 2, note: "prior year" }
        - { label: "FY2026", sub: "actual", value: 75.52, digits: 2, note: "+811%", subject: true }
        - { label: "FY2027", sub: "consensus", value: 176.50, digits: 2, note: "+134%" }
        - { label: "FY2028", sub: "consensus", value: 207.76, digits: 2, note: "+18%" }
watchItems:
  - tag: "Earnings"
    tone: "next"
    title: "Dec. 17 — where the margin floor gets tested"
    detail: "Micron reports fiscal Q1 (ended Nov. 27) after the close on the 17th. Its own guide is $61.5 billion in revenue, give or take $1.5 billion, gross margin of 86.25% and EPS of $38.15, give or take a dollar. Consensus was around $57 billion and $35.40. The company said FQ1 would be the floor for gross margin in fiscal 2027. Whether the guide for the following quarter holds in the high 80s, or starts climbing from there, is the question."
    when: "Dec. 17, after the close"
  - tag: "Pricing"
    tone: "up"
    title: "Contract prices are still rising"
    detail: "TrendForce expects conventional DRAM contract prices to rise 10-15% in the fourth quarter, 5-10% in Q1 2027, 3-8% in Q2 and flat to 5% in the second half. In FQ4, Micron's DRAM ASPs rose in the high teens sequentially and NAND around 30%. Spot prices are the other side: NAND spot began slipping in October, and memory stocks have historically turned before prices actually fall. Watch the spread between contract and spot."
    when: "Monthly contract price releases"
  - tag: "Competition"
    tone: "down"
    title: "HBM4 — Samsung is ahead, China is behind but coming"
    detail: "Q2 HBM share was 50% SK hynix, 33% Samsung and 18% Micron. Samsung mass-produced HBM4 first worldwide and is estimated to hold 25-30% of Nvidia's Vera Rubin volume. Micron has shipped 36GB 12-layer HBM4 since March and is sampling a 48GB 16-layer part. China's CXMT has started limited HBM3E production, but yields of 20-30% against roughly 70% at SK hynix put it well behind. It is not today's threat; it is the variable for 2027 and beyond."
    when: "Quarterly share data"
  - tag: "Demand"
    tone: "down"
    title: "When memory gets expensive, buyers buy less"
    detail: "Apple called the cost of memory procurement unprecedented on its Nov. 3 call. DRAM at $1.90 a gigabit is pushing up bill-of-materials costs for phone and PC makers. Server and HBM demand is contracted, but fewer consumer devices means fewer bits overall. Mobile and client is 24% of Micron's revenue and automotive and embedded another 13%."
    when: "Device makers' December quarter"
  - tag: "Supply"
    tone: "event"
    title: "New fabs put first wafers out in mid-2027"
    detail: "Micron says its new Idaho fab will produce first wafers in mid-calendar 2027, with meaningful volume a few quarters later. Across the industry, major new fabs do not start until 2028. HBM uses about three times the wafer capacity of the same amount of conventional DRAM, and possibly four times for newer generations. That supports tight supply into 2028 — and sets up the next cycle's problem if capacity arrives just as these contracts roll off."
    when: "Mid-2027 onward"
  - tag: "Contracts"
    tone: "flat"
    title: "Contracted prices have a ceiling too"
    detail: "Micron has 26 long-term agreements and about $150 billion in remaining performance obligations. All are take-or-pay and carry a price band with a floor and a ceiling. A ceiling means less of a price spike is captured on contracted volume. With more than 35% of expected revenue through 2030 contracted, the downside is firm but the upside is capped by design. The Dec. 17 call is where the split between contracted and uncontracted volume, and how binding those ceilings are, becomes visible."
    when: "Dec. 17 earnings call"
sources:
  - label: "Micron — Fiscal Fourth Quarter and Full Year 2026 Results"
    url: "https://investors.micron.com/news/press-release/2026/Micron-Technology-Inc--Reports-Record-Fiscal-Fourth-Quarter-and-Full-Year-2026-Results/default.aspx"
  - label: "Micron — Q4 2026 earnings call transcript"
    url: "https://stockanalysis.com/stocks/mu/transcripts/699706-q4-2026/"
  - label: "Micron — To Report Fiscal First Quarter Results on December 17, 2026"
    url: "https://investors.micron.com/news/press-release/2026/Micron-Technology-to-Report-Fiscal-First-Quarter-Results-on-December-17-2026/default.aspx"
  - label: "Micron — Q1 2026 financial results"
    url: "https://investors.micron.com/news/press-release/2025/Micron-Technology-Inc--Reports-Results-for-the-First-Quarter-of-Fiscal-2026-12-17-2025/default.aspx"
  - label: "S&P Global Market Intelligence — Behind the Earnings Call: Micron Technology Q4 2026"
    url: "https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/10/behind-the-earnings-call-micron-technology-inc-q4-2026"
  - label: "CNBC — Micron (MU) Q4 earnings report 2026"
    url: "https://www.cnbc.com/2026/09/30/micron-mu-q4-earnings-report-2026.html"
  - label: "Electronics Weekly (Counterpoint) — Q3 DRAM revenue up 369% YoY"
    url: "https://www.electronicsweekly.com/news/business/q3-dram-revenue-up-369-yoy-2026-11/"
  - label: "The Register — Memory makers mint megabucks while buyers beg for mercy"
    url: "https://www.theregister.com/systems/2026/11/05/memory-makers-mint-megabucks-while-buyers-beg-for-mercy/5307846"
  - label: "Yonhap (Counterpoint) — Samsung narrows gap with SK hynix in HBM market in Q2"
    url: "https://en.yna.co.kr/view/AEN20260903010700320"
  - label: "Chosunbiz — Micron accelerates HBM expansion in Singapore and Taiwan"
    url: "https://biz.chosun.com/en/en-it/2026/11/24/QUHPICOVNRAN3APHG5LFNDOQUQ/"
  - label: "Yahoo Finance — Micron's president says memory has been tight across multiple years"
    url: "https://finance.yahoo.com/markets/stocks/articles/micron-president-says-memory-tight-134550601.html"
  - label: "Investing.com — SK hynix says memory demand beats supply through 2030"
    url: "https://www.investing.com/analysis/sk-hynix-says-memory-demand-beats-supply-through-2030what-it-means-for-micron-200690804"
  - label: "Investing.com — Apple's 'unprecedented' memory warning adds fuel to wobbly Micron, SK hynix trade"
    url: "https://www.investing.com/news/stock-market-news/apples-unprecedented-memory-warning-adds-fuel-to-wobbly-micron-sk-hynix-trade-4995638"
  - label: "Trefis — Micron stock at $733: why did memory stocks crash?"
    url: "https://www.trefis.com/stock/mu/articles/623897/micron-stock-at-733-why-did-memory-stocks-crash/2026-11-10"
  - label: "CNBC — Stocks making the biggest moves Monday"
    url: "https://www.cnbc.com/2026/11/23/stocks-moving-the-most-today-live-updates.html"
  - label: "CNBC — Dow soars 1,400 points; Nasdaq surges 6% as Jensen Huang returns to Nvidia"
    url: "https://www.cnbc.com/2026/11/22/stock-market-today-live-updates.html"
  - label: "Investopedia — Stock Market Today: Major Indexes Skyrocket as Nvidia Jumps 31%"
    url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-nasdaq-11232026-12274147"
---

Micron rose 19.04% in a single session, the biggest one-day gain memory has ever posted, with the Roundhill Memory ETF (DRAM) turning in its best day since listing in April. Nothing new came from the company. Nvidia's board put Jensen Huang back as chief executive, confidence in AI capex returned, and the corner of the market that had been sold hardest over the previous two months bounced hardest. Earnings had already set records for six straight quarters, and the stock was still 41.7% below its June high.

## The company, and where it sits in the chain

Micron is a memory maker based in Boise, Idaho. It designs and manufactures its own DRAM and NAND — a genuine integrated device manufacturer — and in fiscal 2026 it booked $133.19 billion in revenue, 75.6% of it DRAM and the rest NAND and other products. A company that used to swing between losses and profits with the cycle now keeps 87% of revenue as gross profit.

The business is split four ways by customer. Cloud Memory serves hyperscalers and HBM; Core Data Center serves GPU and enterprise servers. In FQ4 those two units were $16.28 billion and $18.00 billion, or 63% of revenue. Mobile and Client ($13.11 billion) covers phones and PCs, and Automotive and Embedded ($6.82 billion) covers vehicles and industrial gear.

Its position in the chain is different from Nvidia's. Micron does not design chips and hand them to a foundry; it owns the fabs, the deposition and etch tools, and the packaging lines. Upstream it depends on ASML's lithography and on Applied Materials, Lam Research and KLA for deposition, etch and inspection. Downstream it stacks DRAM dies vertically and mounts them on silicon interposers, which is what makes HBM for Nvidia and AMD accelerators possible. Micron and Nvidia are building the industry's first custom HBM4E, NV-HBM, for next-generation GPUs and NVLink Fusion platforms.

Competition comes down to three companies. In DRAM, Q3 revenue share was 38% Samsung, 29% SK hynix, 21% Micron and 9% China's CXMT. In HBM the order changes: SK hynix 50%, Samsung 33%, Micron 18%. Micron's HBM capacity is estimated near 100,000 wafers a month by year-end, double a year ago but roughly half of Samsung's and SK hynix's. It is installing packaging equipment in Singapore and Taiwan to close that gap.

## The quarter, and the numbers that matter

Fiscal Q4 revenue, for the period ended Sept. 3, was <strong>$54.23 billion</strong>, up 379% from $11.32 billion a year earlier, a sixth consecutive quarterly record and 31% higher sequentially. DRAM was $39.8 billion (+343%), or 73% of revenue; NAND was $14.1 billion (+526%), accounting for 26%. Bits shipped rose only mid-single digits in DRAM and about 10% in NAND. Prices did the rest: DRAM ASPs rose in the high teens sequentially and NAND around 30%.

Profit grew faster than revenue. Gross margin reached <strong>87.0%</strong> non-GAAP, up from 84.9% the previous quarter, and non-GAAP operating income was $44.6 billion, or 82.3% of revenue. Non-GAAP EPS was <strong>$33.42</strong> against $3.03 a year earlier, and operating cash flow alone was $44.0 billion. For fiscal 2026 the company reported $133.19 billion in revenue (+256%), an 81.1% gross margin and $75.52 in EPS.

Guidance for fiscal Q1 is <strong>$61.5 billion</strong> in revenue, give or take $1.5 billion, with an 86.25% gross margin and EPS of <strong>$38.15</strong>, give or take a dollar. Management said FQ1 would be the low point for gross margin in fiscal 2027. Two contract facts sit behind those numbers: 26 long-term agreements with about <strong>$150 billion</strong> in remaining performance obligations, all take-or-pay, covering more than 35% of expected revenue through 2030. Even at the floor prices in those contracts, the company says margins would exceed any previous cycle peak.

Against the estimates, the math gets simple. At the fiscal 2027 consensus EPS of $176.50 the stock trades at <strong>4.0x</strong>; at fiscal 2028's $207.76 it is 3.4x. That is what it means to say the market expects revenue to more than double and does not fully believe it.

## What happened overnight, and the competitive picture

What moved Micron was not Micron. AI stocks rallied on Huang's reinstatement, and memory led: Micron 19.04%, SK hynix's ADR 20.6%, Western Digital and Seagate 14%, SanDisk 11%. Marvell rose 18.37%, Arm about 16% and TSMC 14.01%, so the whole group ran — but memory outran it.

Behind the move is two months of losses. Micron closed at a record $1,213.56 on June 25 and then fell more than 40% into October for three reasons: CXMT's denser DRAM design raised oversupply fears, NAND spot prices weakened ahead of contract prices, and Apple's comment on procurement costs in early November put demand destruction on the table. When Nvidia's crisis then shook confidence in AI capex itself, memory was the first thing sold. This session reversed the third of those.

Company news did arrive, just earlier in the week. President Scott DeBoer said on the 18th that memory has been tight for multiple years, and TrendForce laid out a 2027 view the same day: conventional DRAM contract prices up 5-10% in Q1, 3-8% in Q2 and flat to up 5% after that. Since Micron's fiscal 2027 ends in early September, that forecast covers its whole year. On the 19th the company confirmed its FQ1 report for Dec. 17.

The important caveat is that this was sector beta. No new contract or customer was announced. The next judgment rests on two numbers: whether the December quarter meets guidance, and whether the contract price increases from the fourth quarter onward show up in actual invoices. The 19% is a bet that the premise holds, not a confirmation that it did.

## Checkpoints and risks

<!-- 이 목록은 frontmatter의 watchItems에서 카드로 렌더링됩니다. -->

## Sources

- [Micron — Fiscal Fourth Quarter and Full Year 2026 Results](https://investors.micron.com/news/press-release/2026/Micron-Technology-Inc--Reports-Record-Fiscal-Fourth-Quarter-and-Full-Year-2026-Results/default.aspx)
- [Micron — Q4 2026 earnings call transcript](https://stockanalysis.com/stocks/mu/transcripts/699706-q4-2026/)
- [Micron — To Report Fiscal First Quarter Results on December 17, 2026](https://investors.micron.com/news/press-release/2026/Micron-Technology-to-Report-Fiscal-First-Quarter-Results-on-December-17-2026/default.aspx)
- [Micron — Q1 2026 financial results](https://investors.micron.com/news/press-release/2025/Micron-Technology-Inc--Reports-Results-for-the-First-Quarter-of-Fiscal-2026-12-17-2025/default.aspx)
- [S&P Global Market Intelligence — Behind the Earnings Call: Micron Technology Q4 2026](https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/10/behind-the-earnings-call-micron-technology-inc-q4-2026)
- [CNBC — Micron (MU) Q4 earnings report 2026](https://www.cnbc.com/2026/09/30/micron-mu-q4-earnings-report-2026.html)
- [Electronics Weekly (Counterpoint) — Q3 DRAM revenue up 369% YoY](https://www.electronicsweekly.com/news/business/q3-dram-revenue-up-369-yoy-2026-11/)
- [The Register — Memory makers mint megabucks while buyers beg for mercy](https://www.theregister.com/systems/2026/11/05/memory-makers-mint-megabucks-while-buyers-beg-for-mercy/5307846)
- [Yonhap (Counterpoint) — Samsung narrows gap with SK hynix in HBM market in Q2](https://en.yna.co.kr/view/AEN20260903010700320)
- [Chosunbiz — Micron accelerates HBM expansion in Singapore and Taiwan](https://biz.chosun.com/en/en-it/2026/11/24/QUHPICOVNRAN3APHG5LFNDOQUQ/)
- [Yahoo Finance — Micron's president says memory has been tight across multiple years](https://finance.yahoo.com/markets/stocks/articles/micron-president-says-memory-tight-134550601.html)
- [Investing.com — SK hynix says memory demand beats supply through 2030](https://www.investing.com/analysis/sk-hynix-says-memory-demand-beats-supply-through-2030what-it-means-for-micron-200690804)
- [Investing.com — Apple's 'unprecedented' memory warning adds fuel to wobbly Micron, SK hynix trade](https://www.investing.com/news/stock-market-news/apples-unprecedented-memory-warning-adds-fuel-to-wobbly-micron-sk-hynix-trade-4995638)
- [Trefis — Micron stock at $733: why did memory stocks crash?](https://www.trefis.com/stock/mu/articles/623897/micron-stock-at-733-why-did-memory-stocks-crash/2026-11-10)
- [CNBC — Stocks making the biggest moves Monday](https://www.cnbc.com/2026/11/23/stocks-moving-the-most-today-live-updates.html)
- [CNBC — Dow soars 1,400 points; Nasdaq surges 6% as Jensen Huang returns to Nvidia](https://www.cnbc.com/2026/11/22/stock-market-today-live-updates.html)
- [Investopedia — Stock Market Today: Major Indexes Skyrocket as Nvidia Jumps 31%](https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-nasdaq-11232026-12274147)
