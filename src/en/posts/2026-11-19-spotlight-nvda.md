---
title: "US Markets Spotlight · NVDA — the quarter was won, the stock closed at its 52-week low"
date: 2026-11-19T06:50:00+09:00
channel: "us-markets"
navSection: "us-markets"
reportKind: "spotlight"
summary: "Revenue of $115.8bn, data center of $107.6bn, guidance of about $130bn — every number beat. The stock still fell 2.89% to sit on its 52-week low. What stands between the results and the price is CEO succession and China rules."
tickers: ["NVDA"]
spotlight:
  snapshot:
    - { label: "Close", value: "$150.96", note: "-2.89% · 52-week low $148.80", tone: "down" }
    - { label: "Market cap", value: "$3.75tn" }
    - { label: "Q3 revenue", value: "$115.84bn", note: "vs. $57bn a year ago" }
    - { label: "Data center", value: "$107.6bn", note: "Estimate $101.87bn" }
    - { label: "Q4 guidance", value: "$127.4–132.6bn", note: "Consensus $125.1bn" }
    - { label: "FY2028 growth", value: "75%", note: "Prior outlook 70%" }
    - { label: "November", value: "-24%", note: "Six straight weekly declines", tone: "down" }
    - { label: "Last 5 sessions", value: "-13.11%", tone: "down" }
  charts:
    - title: "Quarterly revenue"
      unit: "USD bn"
      caption: "FY2026 Q3 is the year-ago quarter; FY2027 Q4 is the midpoint of the company's $127.4–132.6bn guidance."
      rows:
        - { label: "FY26 Q3", sub: "Year-ago quarter", value: 57.0, digits: 1, note: "actual" }
        - { label: "FY27 Q3", sub: "This quarter", value: 115.84, digits: 2, note: "actual", subject: true }
        - { label: "FY27 Q4", sub: "Guidance midpoint", value: 130.0, digits: 1, note: "guided" }
    - title: "Q3 revenue mix"
      unit: "USD bn"
      caption: "$107.6bn from data center, $8.2bn from everything else: 93% of revenue comes from one segment."
      rows:
        - { label: "Data center", sub: "GPUs and systems", value: 107.6, digits: 1, note: "93%", subject: true }
        - { label: "Other", sub: "Gaming, auto and more", value: 8.24, digits: 2, note: "7%" }
watchItems:
  - tag: "Leadership"
    tone: "down"
    title: "When a successor is named"
    detail: "The board chair ruled out bringing Jensen Huang back but gave neither names nor a timeline — the direct reason the stock gave back its intraday gain. A named successor with a roadmap is where a re-rating starts."
    when: "Unset · board filings"
  - tag: "Policy"
    tone: "event"
    title: "How the China rental ban is implemented"
    detail: "Commerce has signalled a rule that would stop Nvidia chips being rented to Chinese companies. Guidance already assumes zero China data-center revenue and China was about 2% of this quarter, but new licensing for shipments via Singapore and Malaysia could slow neocloud build-outs."
    when: "Implementing rules"
  - tag: "Demand"
    tone: "next"
    title: "The quality of the Q4 guide"
    detail: "Fiscal Q4 holds an extra week, which Melius Research estimates accounts for $9–10bn of the sequential jump. The clean read on real orders comes in the next quarter's guidance, with that extra week out of the comparison."
    when: "FY2027 Q1 guidance"
  - tag: "Competition"
    tone: "event"
    title: "How Anthropic's listing moves the money"
    detail: "Anthropic, valued at $1.5tn, starts trading on November 19. A new large-cap way to own AI gives the marginal buyer an alternative, and some money can rotate out of the incumbent AI names in the short run."
    when: "November 19"
  - tag: "Valuation"
    tone: "flat"
    title: "The 52-week low at $148.80"
    detail: "The close sits right above the 52-week low. A break can bring technical selling; as long as results and guidance hold, earnings support the downside. Watch the streak of weekly declines and volume together."
    when: "This week"
sources:
  - label: "CNBC — Nvidia (NVDA) Q3 2027 earnings report"
    url: "https://www.cnbc.com/2026/11/17/nvidia-nvda-earnings-report-q3-2027.html"
  - label: "CNBC — Nvidia sinks after earnings, dragging down neoclouds"
    url: "https://www.cnbc.com/2026/11/18/nvidia-stock-earnings.html"
  - label: "Yahoo Finance — Nvidia stock erases earnings pop as investors face life after Jensen Huang"
    url: "https://finance.yahoo.com/markets/stocks/article/nvidia-stock-erases-earnings-pop-as-investors-face-life-after-jensen-huang-173547783.html"
  - label: "CNBC — Nvidia earnings beat, but analysts question who and what comes next"
    url: "https://www.cnbc.com/2026/11/18/nvidia-earnings-market-analysis.html"
  - label: "Reuters (Investing) — Nvidia beats estimates; won't take questions on resignation"
    url: "https://www.investing.com/news/stock-market-news/nvidia-earnings-beat-estimates-attention-turns-to-call-5034180"
  - label: "Reuters — Analysis: Nvidia's numbers impress but investors fret over CEO succession"
    url: "https://www.investing.com/news/stock-market-news/analysisnvidias-numbers-impress-but-investors-fret-over-ceo-succession-5035070"
  - label: "Blockchain.News — Semiconductor price table"
    url: "https://blockchain.news/stocks/sector/semiconductors"
  - label: "AP — How major US stock indexes fared Wednesday 11/18/2026"
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-990749d3d269f7ef05b9f6c089713a58"
  - label: "Anthropic — Anthropic prices initial public offering"
    url: "https://www.anthropic.com/news/anthropic-prices-initial-public-offering"
  - label: "Reuters (Investing) — Anthropic valued at $1.5 trillion as IPO raises record $81 billion"
    url: "https://www.investing.com/news/stock-market-news/anthropic-prices-blockbuster-ipo-at-83-a-share-source-says-5037110"
---

## In one line

Every number beat. Revenue of <strong>$115.84bn</strong>, adjusted EPS of <strong>$2.68</strong>, data center of <strong>$107.6bn</strong>, fourth-quarter guidance of <strong>$127.4–132.6bn</strong>. The stock still reversed from a 2.7% intraday gain to close at <strong>$150.96 (-2.89%)</strong>. The gap between the results and the price sits outside the numbers.

## The quarter, in numbers

Revenue for the fiscal third quarter ended October 25 was <strong>$115.84bn</strong>, double the $57bn of a year earlier and $6.7bn above the $109.1bn consensus. Adjusted EPS was $2.68 against $2.48 expected. Data-center revenue was <strong>$107.6bn</strong> versus a $101.87bn estimate, or 93% of the total.

Guidance was strong too: fourth-quarter revenue of $127.4–132.6bn topped the $125.1bn consensus, and the fiscal 2028 growth outlook rose to <strong>75%</strong> from 70% three months ago. None of it assumes any China data-center revenue. China was about 2% of sales this quarter.

One detail matters for quality: fiscal Q4 holds an extra week, which Melius Research estimates is worth $9–10bn of the sequential jump. The question for next quarter is not how much revenue grew but whether it still grows with that extra week stripped out.

## Why the price did not follow

First, **leadership**. After Jensen Huang stepped down last week, the board said it does not intend to bring him back but offered no timetable for a successor. Chair Harvey Jones showed no urgency on the call, and the market gave back the day's gain while it waited. Oppenheimer has pulled its price target, citing a leadership vacuum.

Second, **China rules**. Commerce has signalled it will stop Nvidia chips being rented to Chinese companies altogether. That is already in guidance, but new licensing for shipments via Singapore and Malaysia can slow neocloud expansion. CoreWeave closed -4.13% and IREN -3.61%; Nebius held at +0.87%.

Third, **where the money can go**. Anthropic, priced at a $1.5tn valuation, lists on the Nasdaq on November 19. For anyone who wants AI exposure, that is a new large-cap option, and some money can leave the incumbents first.

The stock is down 24% in November and has fallen six weeks in a row, the longest streak since 2012, at its lowest since July 2025. Its 52-week range is $148.80–243.37, so the close sits just above the low.

## What to check next

<!-- Rendered from the watchItems in the frontmatter. -->

## Sources

- [CNBC — Nvidia (NVDA) Q3 2027 earnings report](https://www.cnbc.com/2026/11/17/nvidia-nvda-earnings-report-q3-2027.html)
- [CNBC — Nvidia sinks after earnings, dragging down neoclouds](https://www.cnbc.com/2026/11/18/nvidia-stock-earnings.html)
- [Yahoo Finance — Nvidia stock erases earnings pop as investors face life after Jensen Huang](https://finance.yahoo.com/markets/stocks/article/nvidia-stock-erases-earnings-pop-as-investors-face-life-after-jensen-huang-173547783.html)
- [CNBC — Nvidia earnings beat, but analysts question who and what comes next](https://www.cnbc.com/2026/11/18/nvidia-earnings-market-analysis.html)
- [Reuters (Investing) — Nvidia beats estimates; won't take questions on resignation](https://www.investing.com/news/stock-market-news/nvidia-earnings-beat-estimates-attention-turns-to-call-5034180)
- [Reuters — Analysis: Nvidia's numbers impress but investors fret over CEO succession](https://www.investing.com/news/stock-market-news/analysisnvidias-numbers-impress-but-investors-fret-over-ceo-succession-5035070)
- [Blockchain.News — Semiconductor price table](https://blockchain.news/stocks/sector/semiconductors)
- [AP — How major US stock indexes fared Wednesday 11/18/2026](https://apnews.com/article/wall-street-stocks-dow-nasdaq-990749d3d269f7ef05b9f6c089713a58)
- [Anthropic — Anthropic prices initial public offering](https://www.anthropic.com/news/anthropic-prices-initial-public-offering)
- [Reuters (Investing) — Anthropic valued at $1.5 trillion as IPO raises record $81 billion](https://www.investing.com/news/stock-market-news/anthropic-prices-blockbuster-ipo-at-83-a-share-source-says-5037110)
