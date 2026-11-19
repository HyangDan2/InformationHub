---
title: "US Markets Spotlight · AMD — a record quarter, and a 7.72% drop in a day"
date: 2026-11-20T06:50:00+09:00
channel: "us-markets"
navSection: "us-markets"
reportKind: "spotlight"
summary: "Revenue of $13.38bn, data center of $8.5bn (+97%), guidance of $17bn — AMD accelerated. The stock fell 7.72% anyway, on a Hunterbrook short report aimed not at the results but at 22.4% of revenue billed in China and Hong Kong, a tenth from Singapore, and the Chinese partner that finishes most of its chips."
tickers: ["AMD", "NVDA", "AVGO", "TSM", "MU"]
spotlight:
  snapshot:
    - { label: "Close", value: "$489.19", note: "-7.72% · low $470.56", tone: "down" }
    - { label: "Market cap", value: "$833bn" }
    - { label: "Q3 revenue", value: "$13.38bn", note: "+45% · record" }
    - { label: "Data center", value: "$8.5bn", note: "64% of revenue · +97%" }
    - { label: "Q4 guidance", value: "$17bn", note: "±3% · +66%" }
    - { label: "2027 revenue", value: "+80% or more", note: "Twice the prior model" }
    - { label: "China + Hong Kong", value: "22.4%", note: "$7.75bn in FY2025", tone: "down" }
    - { label: "52-week range", value: "$188.22–658.52", note: "26% below the high" }
  charts:
    - title: "Quarterly revenue"
      unit: "USD bn"
      caption: "Q4 2026 is the midpoint of the company's $17bn ±3% guidance. Q3 grew 45% year over year and 16% sequentially."
      rows:
        - { label: "Q3 2025", sub: "Year-ago quarter", value: 9.25, digits: 2, note: "actual" }
        - { label: "Q2 2026", sub: "Prior quarter", value: 11.54, digits: 2, note: "actual" }
        - { label: "Q3 2026", sub: "This quarter", value: 13.38, digits: 2, note: "actual", subject: true }
        - { label: "Q4 2026", sub: "Guidance midpoint", value: 17.0, digits: 1, note: "guided" }
    - title: "Data center revenue"
      unit: "USD bn"
      caption: "Nearly doubled in a year. For Q4 the company guides the segment alone up about 50% sequentially."
      rows:
        - { label: "Q3 2025", sub: "Year-ago quarter", value: 4.31, digits: 2, note: "actual" }
        - { label: "Q2 2026", sub: "Prior quarter", value: 6.69, digits: 2, note: "actual" }
        - { label: "Q3 2026", sub: "This quarter", value: 8.5, digits: 1, note: "+97%", subject: true }
    - title: "Q3 revenue mix"
      unit: "USD bn"
      caption: "Data center is 64% of revenue, up from 47% a year ago. Client and gaming fell 8% on weak game console demand."
      rows:
        - { label: "Data center", sub: "EPYC and Instinct", value: 8.5, digits: 1, note: "64%", subject: true }
        - { label: "Client & gaming", sub: "Ryzen, consoles", value: 3.7, digits: 1, note: "28%" }
        - { label: "Embedded", sub: "Industrial, auto", value: 1.1, digits: 1, note: "8%" }
watchItems:
  - tag: "Rules"
    tone: "down"
    title: "January 10 — the 50% ownership rule returns"
    detail: "A rule extending controls to foreign firms at least half-owned by blacklisted entities is suspended, and the suspension lapses on January 10, 2027. Put together with the five-country licence rule in force this week, it forces a reset of AMD's Asia revenue estimates. That calendar, not the quarter, is what the short report is really about."
    when: "January 10, 2027"
  - tag: "Policy"
    tone: "event"
    title: "Licences for Singapore, Malaysia and three more"
    detail: "The interim final rule requires licences for advanced AI chips shipped to Singapore, Malaysia, Indonesia, Thailand and Brazil. AMD billed $4.28bn to Singapore customers in fiscal 2025, more than 10% of total sales."
    when: "In force this week"
  - tag: "Demand"
    tone: "next"
    title: "Can data center grow 50% in Q4"
    detail: "The company expects data center up about 50% sequentially in Q4, 2027 revenue up more than 80%, and data center above 80% of revenue. That needs Helios rackscale shipments to spread through HPE, Dell, Lenovo, Supermicro and other ODM partners. The first real check is supply-chain commentary around CES in early January."
    when: "January 2027"
  - tag: "Risk"
    tone: "down"
    title: "Customer warrants and the funding structure"
    detail: "AMD booked a $1.1bn non-cash charge in Q3 from the fair value of warrants issued under customer agreements, and says the quarterly amounts will grow. A business whose revenue is partly supported by equity and loans means sales and mark-to-market losses move together if customers slow capex. That is the 'AI funding squeeze' the short report is aiming at."
    when: "Every quarter"
  - tag: "Price"
    tone: "flat"
    title: "The $470 floor and the $658.52 high"
    detail: "Thursday's intraday low was $470.56. A break opens the early-November lows; a company rebuttal that holds, plus any delay in the rule calendar, tends to produce a fast recovery in this name. Watch the first sessions of next week and the volume with them."
    when: "This week"
sources:
  - label: "CNBC — AMD stock dives on short-seller report of alleged China exposure"
    url: "https://www.cnbc.com/2026/11/19/amd-falls-on-short-seller-report-of-alleged-china-exposure.html"
  - label: "Reuters (Investing) — Short seller Hunterbrook shorts AMD citing concerns over China exports"
    url: "https://www.investing.com/news/stock-market-news/short-seller-hunterbrook-shorts-amd-citing-concerns-over-china-exports-5039475"
  - label: "Business Insider — AMD stock falls after short-seller says it has a China problem"
    url: "https://www.businessinsider.com/amd-stock-short-seller-hunterbrook-china-nvda-2026-11"
  - label: "Yahoo Finance — AMD stock drops after Hunterbrook Media raises export control concerns"
    url: "https://finance.yahoo.com/technology/article/amd-stock-drops-after-hunterbrook-media-raises-export-control-concerns-171508145.html"
  - label: "TipRanks — AMD stock plunges after short-seller report"
    url: "https://www.tipranks.com/news/amd-stock-plunges-after-short-seller-report-alleges-that-the-chipmaker-has-its-own-china-problem"
  - label: "Kiplinger — Dow Drops 1,100 Points as Anthropic Pops 17% (Hunterbrook thesis, AMD price action)"
    url: "https://www.kiplinger.com/investing/stocks/dow-drops-1-100-points-as-anthropic-pops-17-percent-stock-market-today"
  - label: "AMD — AMD Reports Third Quarter 2026 Financial Results"
    url: "https://ir.amd.com/news-events/press-releases/detail/1303/amd-reports-third-quarter-2026-financial-results"
  - label: "AMD — Third Quarter 2026 Financial Results Prepared Remarks"
    url: "https://newsroom.amd.com/documents/2026/11/84f4476b-f064-4f0f-957c-fe484853e178.pdf"
  - label: "Reuters (Investing) — AMD forecast eases AI spending fears as data-center sales surge"
    url: "https://www.investing.com/news/stock-market-news/amd-forecasts-quarterly-revenue-above-estimates-as-datacenter-growth-accelerates-4996502"
  - label: "CNBC — AMD Q3 2026 earnings report"
    url: "https://www.cnbc.com/amp/2026/11/03/amd-amd-q3-earnings-report-2026-.html"
  - label: "Blockchain.News — Semiconductor price table"
    url: "https://blockchain.news/stocks/sector/semiconductors"
---

By the numbers, the third quarter was the best AMD has ever had: revenue of <strong>$13.38bn</strong> (+45%), data center of <strong>$8.5bn</strong> (+97%), fourth-quarter guidance of <strong>$17bn</strong> (+66%). The stock fell <strong>7.72% to $489.19</strong> and traded down 11% at the low. Nothing in the quarter changed; one report about the shape of AMD's China business removed nearly $70bn of market value.

## Company overview — from a CPU challenger to an AI systems supplier

AMD used to be the cheaper alternative to Intel. That is no longer the whole story. EPYC took server share, and Instinct made the company the second source for AI accelerators. Data center was 64% of third-quarter revenue, up from 47% a year earlier: two thirds of the business now comes from servers and AI.

AMD designs; it does not fabricate. Wafers come from TSMC. Assembly, test and packaging come mostly from two joint ventures that Tongfu Microelectronics owns 85% of — AMD holds the other 15% and has lent one of them $100m. Then there is software, down to the server start-up firmware that a third party needs to put an AMD chip in a rack. Who that file reaches is where the short report starts.

## The quarter — record numbers and a bigger guide

Revenue was <strong>$13.377bn</strong>, up 45% from $9.246bn a year earlier and above the top of guidance. Data center brought in <strong>$8.5bn</strong> (+97%), 64% of revenue, with segment operating income of $2.9bn (+168%) and a 34% margin. Non-GAAP EPS was <strong>$2.09</strong>, up 74%.

Client and gaming fell 8% to $3.7bn: client was $2.9bn, up 7% on Ryzen mobile, while gaming dropped 40% to $773m on lower console and graphics sales. Embedded rose 29% to $1.1bn. AI is now large enough to cover the rest.

The guide is more aggressive. Fourth-quarter revenue of <strong>$17bn (±3%)</strong> is up 66% year over year and 27% sequentially, with data center up about 50% and client and gaming down more than 20%. Lisa Su told investors 2027 revenue should grow more than 80% and data center should be over 80% of the total, an upgrade from the 70% server growth the company outlined 90 days earlier.

One number deserves attention. GAAP EPS of $1.46 includes a <strong>$1.1bn</strong> non-cash charge from the fair value of warrants issued under customer agreements, and management expects that charge to grow each quarter. It does not touch non-GAAP results or free cash flow, but a business model that hands customers equity to generate revenue is exactly the structure the short report is attacking.

## The short report — China exposure, and a competition story that flipped

On Thursday Hunterbrook Capital disclosed a short position alongside a report titled "AMD has its own China problem". AMD answered immediately: "The claims misrepresent AMD's business practices and relationships. AMD complies with applicable US export control laws and regulations and maintains rigorous processes to ensure compliance across our global operations." CNBC and Reuters both said they could not independently verify the report. Claims and facts should be read separately.

**What the report alleges.** IEIT Systems, a Chinese server maker, went on the Commerce Department's Entity List in March 2025. Since then, AMD server start-up firmware has shipped inside IEIT products at least six times, most recently on October 19, 2026. Hunterbrook says three companies tied to IEIT — Aivres, Kaytus and Maginfra — use near-identical firmware. Aivres was formerly Inspur Systems and counted as an IEIT subsidiary in IEIT's 2022 annual report; Kaytus's audited accounts name IEIT as ultimate parent. AMD itself lists Aivres among partners building servers on Instinct. How the firmware got there, and whether a licence covered it, the report could not establish.

**What the filings show.** AMD billed <strong>$7.75bn</strong> to customers in China and Hong Kong in fiscal 2025 — <strong>22.4%</strong> of sales. Singapore alone was $4.28bn, more than 10%. Hunterbrook traced $67m of 2025 licensing income to two Chinese chip ventures blacklisted in 2019. And in April 2025, restrictions on the MI308 cost about $800m in inventory charges. Those are AMD's own numbers, not the report's.

**The rule calendar.** The interim final rule in force this week requires licences for advanced AI chips shipped to Singapore, Malaysia, Indonesia, Thailand and Brazil. A separate rule extending restrictions to foreign companies at least 50% owned by blacklisted entities is suspended until January 10, 2027. Hunterbrook's conclusion: AMD is "no less at risk" from China restrictions than Nvidia, despite the recent positive coverage.

**The competition trade flipped.** Until this week the market read Nvidia's China trouble as AMD's opportunity — on Wednesday AMD rose 5.31% while Nvidia fell 2.89%. The report attacked that logic directly, and on Thursday AMD fell 7.72% against Nvidia's 3.30%, with Broadcom -2.09%, Micron -2.10% and TSMC -2.90% in a weaker but shallower semiconductor tape.

The bear case is about funding, not demand. "If Nvidia is the Central Bank of AI, then AMD is more like the Silicon Valley Bank of AI," the report's author wrote: the financials look solid until the customers whose growth AMD helps finance pull back. The $1.1bn warrant charge is the visible trace of that structure in the accounts.

## What to check next

First, **the calendar**. The January 10 lapse and the five-country licence rule land in the same window. Management says China is an important market and that it will comply fully with export controls; the question is how tightly the rules are actually drawn.

Second, **execution on data center +50%**. Helios racks are running at Anthropic, Meta, Microsoft, OpenAI and Oracle Cloud, and the ramp now depends on MI455X volume reaching HPE, Dell, Lenovo, Supermicro and other partners. The $17bn guide leaves little room for a slip there.

Third, **client and gaming**. A segment falling more than 20% means data center has to grow 50% just to deliver 27% total growth. A small miss in AI sales moves the whole quarter.

Fourth, **the price**. The 52-week range is $188.22–658.52, and the close is 26% below the high. Thursday's $470.56 is the first support. A bounce makes the short report a one-day event; a break opens the early-November lows.

## Sources

- [CNBC — AMD stock dives on short-seller report of alleged China exposure](https://www.cnbc.com/2026/11/19/amd-falls-on-short-seller-report-of-alleged-china-exposure.html)
- [Reuters (Investing) — Short seller Hunterbrook shorts AMD citing concerns over China exports](https://www.investing.com/news/stock-market-news/short-seller-hunterbrook-shorts-amd-citing-concerns-over-china-exports-5039475)
- [Business Insider — AMD stock falls after short-seller says it has a China problem](https://www.businessinsider.com/amd-stock-short-seller-hunterbrook-china-nvda-2026-11)
- [Yahoo Finance — AMD stock drops after Hunterbrook Media raises export control concerns](https://finance.yahoo.com/technology/article/amd-stock-drops-after-hunterbrook-media-raises-export-control-concerns-171508145.html)
- [TipRanks — AMD stock plunges after short-seller report](https://www.tipranks.com/news/amd-stock-plunges-after-short-seller-report-alleges-that-the-chipmaker-has-its-own-china-problem)
- [Kiplinger — Dow Drops 1,100 Points as Anthropic Pops 17%](https://www.kiplinger.com/investing/stocks/dow-drops-1-100-points-as-anthropic-pops-17-percent-stock-market-today)
- [AMD — AMD Reports Third Quarter 2026 Financial Results](https://ir.amd.com/news-events/press-releases/detail/1303/amd-reports-third-quarter-2026-financial-results)
- [AMD — Third Quarter 2026 Financial Results Prepared Remarks](https://newsroom.amd.com/documents/2026/11/84f4476b-f064-4f0f-957c-fe484853e178.pdf)
- [Reuters (Investing) — AMD forecast eases AI spending fears as data-center sales surge](https://www.investing.com/news/stock-market-news/amd-forecasts-quarterly-revenue-above-estimates-as-datacenter-growth-accelerates-4996502)
- [CNBC — AMD Q3 2026 earnings report](https://www.cnbc.com/amp/2026/11/03/amd-amd-q3-earnings-report-2026-.html)
- [Blockchain.News — Semiconductor price table](https://blockchain.news/stocks/sector/semiconductors)
