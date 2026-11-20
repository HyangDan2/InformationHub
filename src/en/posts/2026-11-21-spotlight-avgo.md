---
title: "US Markets Spotlight · AVGO — the day Google cut its orders, Broadcom fell 12%"
date: 2026-11-21T06:50:00+09:00
channel: "us-markets"
navSection: "us-markets"
reportKind: "spotlight"
summary: "Revenue of $29.59bn (+86%), AI semiconductors of $16.7bn (+221%), guidance of $34.8bn — a record quarter. The stock fell 12.19% anyway, after TF International said Google had cut its 2027 TPU 8i orders by a fifth and investors re-priced Broadcom's role as Anthropic's lender of up to $42bn. Management gets to answer on December 9."
tickers: ["AVGO", "GOOGL", "NVDA", "AMD", "MU", "TSM"]
spotlight:
  snapshot:
    - { label: "Close", value: "$304.41", note: "-12.19% · low $301.72", tone: "down" }
    - { label: "Market cap", value: "$1.45tn", note: "$191bn lost in a session", tone: "down" }
    - { label: "Q3 revenue", value: "$29.59bn", note: "+86% · record" }
    - { label: "AI semiconductors", value: "$16.7bn", note: "56% of revenue · +221%" }
    - { label: "Q4 guidance", value: "$34.8bn", note: "AI $21.7bn · +93%" }
    - { label: "FY2027 AI revenue", value: "$115bn", note: "then $230bn in FY2028" }
    - { label: "Below the June high", value: "-36%", note: "$481.57 to $304.41", tone: "down" }
    - { label: "Anthropic exposure", value: "up to $42bn", note: "lending facility + $1bn equity", tone: "down" }
  charts:
    - title: "Quarterly revenue"
      unit: "USD bn"
      caption: "Q3 grew 86% year over year and 33% sequentially. Q4 is the company's $34.8bn guidance."
      rows:
        - { label: "Q3 2025", sub: "Year-ago quarter", value: 15.95, digits: 2, note: "actual" }
        - { label: "Q4 2025", sub: "Prior quarter", value: 18.02, digits: 2, note: "actual" }
        - { label: "Q1 2026", sub: "Fiscal Q1", value: 19.31, digits: 2, note: "actual" }
        - { label: "Q2 2026", sub: "Fiscal Q2", value: 22.19, digits: 2, note: "actual" }
        - { label: "Q3 2026", sub: "This quarter", value: 29.59, digits: 2, note: "actual", subject: true }
        - { label: "Q4 2026", sub: "Guidance", value: 34.80, digits: 2, note: "guided" }
    - title: "Annual AI semiconductor revenue"
      unit: "USD bn"
      caption: "The plan is to double three years running, from $20bn in fiscal 2025 to $230bn in fiscal 2028. Broadcom says it has secured the supply for 2027 and 2028."
      rows:
        - { label: "FY2025", sub: "Actual", value: 20.0, digits: 1, note: "+65%" }
        - { label: "FY2026", sub: "Guidance", value: 58.0, digits: 1, note: "+186%", subject: true }
        - { label: "FY2027", sub: "Outlook", value: 115.0, digits: 1, note: "double" }
        - { label: "FY2028", sub: "Outlook", value: 230.0, digits: 1, note: "double" }
    - title: "Q3 revenue mix"
      unit: "USD bn"
      caption: "AI is now 56% of revenue, up from 49% in Q2. The rest of semiconductors (broadband, wireless, server storage) were $4.1bn; infrastructure software was $8.8bn."
      rows:
        - { label: "AI semis", sub: "XPU and AI networking", value: 16.7, digits: 1, note: "56%", subject: true }
        - { label: "Non-AI semis", sub: "Broadband, wireless, storage", value: 4.1, digits: 1, note: "14%" }
        - { label: "Infrastructure software", sub: "VMware and more", value: 8.8, digits: 1, note: "30%" }
watchItems:
  - tag: "Earnings"
    tone: "next"
    title: "December 9 — Broadcom answers the Google question itself"
    detail: "Broadcom reports fiscal fourth-quarter results after the close on the 9th. Two things matter: whether management keeps the $115bn AI revenue outlook for fiscal 2027, and whether it confirms or rejects the cut in Google volume. The stock fell the day after three of the last four reports, including 13% in June; the average move across the last eight was 10%."
    when: "December 9, after the close"
  - tag: "Customers"
    tone: "down"
    title: "TPU 8i versus 8t — what a million chips means"
    detail: "In Kuo's survey, Google takes more of the training-focused 8t from MediaTek and trims the inference-focused 8i plan at Broadcom, with the cuts concentrated in the pricier Max part code-named Whalefish. Nothing is confirmed and neither company would comment. The checks are Google's next earnings call, TSMC's leading-edge packaging allocation and the timing of MediaTek's 8t shipments in the first half."
    when: "As 2027 volumes are fixed"
  - tag: "Financing"
    tone: "down"
    title: "The terms behind the $42bn Anthropic facility"
    detail: "Under the March agreement, Broadcom takes eligible quarterly rent in convertible notes: normally 9% with payment-in-kind interest, or 13% with conversion at 85% of market when revenue thresholds are missed. Maturities run 57 to 63 months, and no notes had been drawn as of September 30. In the $63bn SPV announced October 26, Broadcom provides residual value support equal to the first-lien financing. Revenue and financing now move together."
    when: "Every quarterly filing"
  - tag: "Accounting"
    tone: "down"
    title: "Revenue quality and the circular-financing argument"
    detail: "The SEC is examining Nvidia's accounting and its enforcement chief has said AI disclosures are under review. Broadcom sells chips to customers it also lends to, and those customers' spending becomes Broadcom's revenue. How much of the financing support management discloses on December 9 will shape the multiple the market is willing to pay."
    when: "December 9 · SEC review"
  - tag: "Price"
    tone: "flat"
    title: "The $291.53 low and the $481.57 high"
    detail: "Friday's intraday low was $301.72. The November 5 close of $291.53 is the lowest of the past year, and a break opens the gap below. Goldman Sachs ($460 target) and Redburn ($398) both sit 30–50% above the current price, even after cutting their numbers."
    when: "This week"
  - tag: "Supply"
    tone: "event"
    title: "Leading-edge wafers, substrates, HBM and power"
    detail: "The $115bn outlook assumes supply. Broadcom says it has secured leading-edge wafers, substrates and HBM, while conceding demand exceeds the plan — and Kuo attributed Google's reallocation to data-centre power constraints. If power and packaging are the bottleneck, orders are delayed rather than lost; if customers are reprioritising, the 2027 number changes."
    when: "2027 supply agreements"
sources:
  - label: "StockAnalysis — Broadcom falls 11% after an analyst says Google cut 2027 orders for its TPU 8i chips by 20%"
    url: "https://stockanalysis.com/news/broadcom-falls-google-tpu-cut-mediatek/"
  - label: "24/7 Wall St. — Broadcom stock plunges 12% and loses $191 billion"
    url: "https://247wallst.com/investing/2026/11/20/broadcom-stock-plunges-12-and-loses-191-billion-after-a-report-that-google-cut-its-plans-for-broadcom-ai-chips/"
  - label: "Investing.com — Why is Broadcom stock sliding today (Goldman target cut)"
    url: "https://www.investing.com/news/stock-market-news/why-is-broadcom-stock-sliding-today-93CH-5042272"
  - label: "TipRanks — Google cuts Broadcom AI chip orders by 20%, AVGO stock sinks"
    url: "https://www.tipranks.com/news/google-cuts-broadcom-ai-chip-orders-by-20-avgo-stock-sinks"
  - label: "Yahoo Finance — Nvidia drops 12%, Broadcom and AMD extend declines as the AI trade melts down"
    url: "https://finance.yahoo.com/markets/article/nvidia-amd-and-broadcom-lead-chip-stocks-lower-133658985.html"
  - label: "Broadcom — Third Quarter Fiscal Year 2026 Financial Results"
    url: "https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-third-quarter-fiscal-year-2026-financial"
  - label: "Broadcom — Q3 FY2026 earnings call transcript (Hock Tan, Amie Thuener)"
    url: "https://www.investing.com/news/transcripts/earnings-call-transcript-broadcom-tops-q3-2026-estimates-as-ai-sales-surge-93CH-4886849"
  - label: "Broadcom — Second Quarter Fiscal Year 2026 Financial Results"
    url: "https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-second-quarter-fiscal-year-2026-financial"
  - label: "Broadcom — Fourth Quarter and Fiscal Year 2025 Financial Results"
    url: "https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-fourth-quarter-and-fiscal-year-2025"
  - label: "CNBC — Broadcom (AVGO) Q3 2026 earnings report"
    url: "https://www.cnbc.com/2026/09/02/broadcom-avgo-q3-earnings-report-2026.html"
  - label: "l0g — Anthropic: supplier financing and AI contracts"
    url: "https://l0g.fr/en/analysis/anthropic-supplier-financing-ipo/"
  - label: "Fortune — Anthropic's IPO filing shows the risky financing needed to achieve its compute goals"
    url: "https://fortune.com/2026/11/04/dario-amodei-wants-a-country-of-geniuses-in-a-data-center-realizing-that-vision-requires-tricky-financial-mechanics-anthropics-ipo-filing-shows/"
  - label: "Reuters — Nvidia's accounting is a focus of US SEC investigation, sources say"
    url: "https://www.reuters.com/5f374b32b07b/world/us-secs-nvidia-probe-is-examining-potential-accounting-issues-sources-say-2026-11-20/"
  - label: "Anthropic — IPO pricing prospectus (SEC, 2026-11-18)"
    url: "https://www.sec.gov/Archives/edgar/data/2130357/000162828026074937/anthropicpbc-fwppricing.htm"
---

Broadcom lost 12% in a day. Revenue was $29.59bn, up 86% from a year earlier; AI semiconductors were $16.7bn, more than triple; guidance for the current quarter is $34.8bn. On the numbers alone this looks like an accident rather than a result. Two things did the damage. A report that Google cut its orders for next year, and a sudden re-pricing of the fact that Broadcom is also Anthropic's lender.

## The company, and where it sits in the chain

Broadcom stands on two legs. The first is semiconductors: $36.9bn of the $63.9bn booked in fiscal 2025, with infrastructure software contributing $27.0bn. Inside semiconductors the businesses are different animals. Custom AI accelerators (XPUs) and AI networking drive the growth; broadband, wireless and server storage provide the base. The second leg is software, mainly VMware Cloud Foundation, which bills enterprise customers by subscription. Having 30% of revenue on subscription is a cushion when the AI cycle wobbles.

In AI, Broadcom is not Nvidia. It does not sell a general-purpose GPU; it designs chips for a handful of very large customers. There are six XPU customers. Google's tensor processing units are the biggest, followed by Meta's MTIA inference chip, OpenAI's first custom part (Jalapeño) and Anthropic. XPU shipments tripled in the September quarter and were 73% of AI revenue; the rest is networking — the switches, optics and signal-processing parts that tie thousands of chips into one cluster. In the June quarter, networking was almost 40% of AI revenue.

In the supply chain, Broadcom does the design and TSMC does the manufacturing. Leading-edge wafers, substrates and HBM memory are sourced, packaged and assembled into racks by HPE, Dell, Lenovo and others. What Broadcom makes itself is the design, the software and the contracts.

A third role appeared in 2026: financier. Anthropic agreed in March to settle up to $42bn of rent with convertible notes sold to Broadcom, and Broadcom put $1bn into the private placement that accompanied Anthropic's IPO. On October 26, Bank of America, Blackstone, Citi and Morgan Stanley announced a $63bn special-purpose vehicle that will buy Broadcom accelerators and networking equipment and lease it to Anthropic, with Broadcom providing residual value support equal to the first-lien financing. Broadcom sells the chips, lends the money to buy them and stands behind the collateral.

## The quarter, and the numbers that matter

Fiscal third-quarter revenue (ended August 2) was <strong>$29.59bn</strong>, up 86% from $15.95bn a year earlier. AI semiconductors were <strong>$16.7bn</strong>, up 221% year over year and 54% sequentially, or 56% of revenue, from 49% in the June quarter. The semiconductor segment was $20.8bn (+127%) and infrastructure software $8.8bn.

Profit scaled with it. Non-GAAP operating income was $20.1bn, 67.9% of revenue, against $16.0bn on a GAAP basis. Non-GAAP diluted EPS was <strong>$3.32</strong> (+96%) and GAAP EPS $2.68. Operating cash flow of $14.2bn less $0.5bn of capex produced <strong>$13.7bn</strong> of free cash flow, 46% of revenue, with $24.0bn of cash on the balance sheet. The quarterly dividend is $0.65 a share, raised 10% last December and unchanged since.

Guidance for the fiscal fourth quarter is <strong>$34.8bn</strong> of revenue (+93%), <strong>$21.7bn</strong> of AI semiconductors (+236%) and a 66% non-GAAP operating margin. In the quarter, Ironwood shipments to Anthropic accelerate, TPU 8i ramps at Google, and both Jalapeño for OpenAI and MTIA for Meta ship. For the full year the company sees $58bn of AI revenue, then $115bn in fiscal 2027 and $230bn in fiscal 2028 — doubling twice — with more than $30 of EPS in 2028.

Two caveats. The outlook was given in September, before the report on Google's orders, and December 9 is the first scheduled chance to change it. And if you take the $30 of 2028 EPS at face value, the stock trades at about 10 times that number today. Goldman Sachs kept its earnings estimates and cut only the multiple, from 30 times to 25, taking its target to $460.

## What happened overnight, and the competitive picture

The proximate cause was a post from TF International's Ming-Chi Kuo. Citing his latest supply-chain survey, he said Google had cut its 2027 shipments of the Broadcom-designed TPU 8i by about one million units, or roughly 20%, with most of the reduction in the higher-priced 8i Max, code-named Whalefish. Google would take more of the MediaTek-designed 8t instead, he said, adding that the details are not final. Neither company commented. The numbers come from one analyst's survey, not from either company's disclosure.

What moved the stock was the direction rather than the arithmetic. The 8t is a training chip and the 8i is an inference chip. Kuo tied the shift to Google's stated priority that frontier model development gets first call on compute, with supply chains and data-centre power tight. If inference demand keeps growing, the 8i will be needed eventually; but a 20% hole in next year's plan and a reordering of the schedule are not the same thing.

The Google relationship is not over. In April the two companies agreed to keep developing future TPUs together, and Google agreed to buy networking components from Broadcom through 2031. On the September 2 call, CEO Hock Tan said "our engagement with Google has never been stronger" and noted that Broadcom shipped the 8i ahead of MediaTek's 8t even though MediaTek's project started earlier. Even if some orders move, the networking revenue and the development work stay.

Anthropic points the other way. The 8i in Kuo's report is the chip Broadcom is building for Anthropic, which Tan said is on track to become Broadcom's largest XPU customer in 2027 with 5 gigawatts of 8i deployed that year, and OpenAI the second-largest in 2028. A smaller Google plan can be offset by a larger Anthropic one. But Anthropic is now a public company whose stock fell 8.50% on its second day and sits barely above its $83 offer price — and the more Anthropic builds, the larger both Broadcom's revenue and its loan book become. The two companies' risks now point the same way.

The competitive picture compressed into one session: Nvidia -14.01%, AMD -13.25%, Micron -13.89%, Broadcom -12.19%, TSMC -9.30%, with Marvell, Arm and Arista down about 10% at their lows. In Taipei, MediaTek fell 10% — the supposed winner of the order shift was sold with the rest of the market, which fell more than 6% on the day.

Analysts had been trimming targets before Friday. Goldman Sachs cut Broadcom to $460 from $540 on Wednesday while keeping a buy rating; Rothschild & Co Redburn downgraded to neutral last week and cut its target to $398 from $595. Both sit 30–50% above Friday's close. Wedbush's Dan Ives called the selling "a panic-driven sell-off" and said Big Tech's capex next year, in the $1.5 trillion range, is not changing.

## Checkpoints and risks

<!-- Rendered from the watchItems in the frontmatter. -->

## Sources

- [StockAnalysis — Broadcom falls 11% after an analyst says Google cut 2027 orders for its TPU 8i chips by 20%](https://stockanalysis.com/news/broadcom-falls-google-tpu-cut-mediatek/)
- [24/7 Wall St. — Broadcom stock plunges 12% and loses $191 billion](https://247wallst.com/investing/2026/11/20/broadcom-stock-plunges-12-and-loses-191-billion-after-a-report-that-google-cut-its-plans-for-broadcom-ai-chips/)
- [Investing.com — Why is Broadcom stock sliding today](https://www.investing.com/news/stock-market-news/why-is-broadcom-stock-sliding-today-93CH-5042272)
- [TipRanks — Google cuts Broadcom AI chip orders by 20%, AVGO stock sinks](https://www.tipranks.com/news/google-cuts-broadcom-ai-chip-orders-by-20-avgo-stock-sinks)
- [Yahoo Finance — Nvidia drops 12%, Broadcom and AMD extend declines as the AI trade melts down](https://finance.yahoo.com/markets/article/nvidia-amd-and-broadcom-lead-chip-stocks-lower-133658985.html)
- [Broadcom — Third Quarter Fiscal Year 2026 Financial Results](https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-third-quarter-fiscal-year-2026-financial)
- [Broadcom — Q3 FY2026 earnings call transcript](https://www.investing.com/news/transcripts/earnings-call-transcript-broadcom-tops-q3-2026-estimates-as-ai-sales-surge-93CH-4886849)
- [Broadcom — Second Quarter Fiscal Year 2026 Financial Results](https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-second-quarter-fiscal-year-2026-financial)
- [Broadcom — Fourth Quarter and Fiscal Year 2025 Financial Results](https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-fourth-quarter-and-fiscal-year-2025)
- [CNBC — Broadcom (AVGO) Q3 2026 earnings report](https://www.cnbc.com/2026/09/02/broadcom-avgo-q3-earnings-report-2026.html)
- [l0g — Anthropic: supplier financing and AI contracts](https://l0g.fr/en/analysis/anthropic-supplier-financing-ipo/)
- [Fortune — Anthropic's IPO filing shows the risky financing needed to achieve its compute goals](https://fortune.com/2026/11/04/dario-amodei-wants-a-country-of-geniuses-in-a-data-center-realizing-that-vision-requires-tricky-financial-mechanics-anthropics-ipo-filing-shows/)
- [Reuters — Nvidia's accounting is a focus of US SEC investigation, sources say](https://www.reuters.com/5f374b32b07b/world/us-secs-nvidia-probe-is-examining-potential-accounting-issues-sources-say-2026-11-20/)
- [Anthropic — IPO pricing prospectus (SEC, 2026-11-18)](https://www.sec.gov/Archives/edgar/data/2130357/000162828026074937/anthropicpbc-fwppricing.htm)
