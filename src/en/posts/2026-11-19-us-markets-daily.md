---
title: "US Markets Daily Report · November 19"
date: 2026-11-19T06:35:00+09:00
channel: "us-markets"
navSection: "us-markets"
reportKind: "daily"
summary: "A fifth straight decline for the S&P 500 (-0.23%) while the Nasdaq added 0.42%. Nvidia fell 2.89% on a beat-and-raise, the Dow lost 1.11% as UnitedHealth sank 10.2%, and the Fed minutes plus Anthropic's record IPO set the tone."
tickers: ["NVDA", "MSFT", "AAPL", "GOOGL", "META", "AMZN", "TSLA", "AVGO", "AMD", "MU", "TSM", "UNH", "DIS"]
market:
  indices:
    - name: "S&P 500"
      value: 7323.63
      change: -16.90
      pct: -0.23
    - name: "NASDAQ"
      value: 24429.89
      change: 101.50
      pct: 0.42
    - name: "DOW"
      value: 50198.17
      change: -561.25
      pct: -1.11
    - name: "SOX"
      value: 9652.80
      change: 9.92
      pct: 0.10
    - name: "Russell 2000"
      value: 2714.31
      change: 12.44
      pct: 0.46
    - name: "US 10Y"
      value: 5.065
      digits: 3
      pct: -0.71
    - name: "VIX"
      value: 24.56
      change: -0.90
      pct: -3.53
    - name: "WTI"
      value: 83.26
      change: -2.75
      pct: -3.20
watchlistStatus:
  - code: "NVDA"
    status: "Faded"
    tone: "down"
    pct: -2.89
    close: 150.96
    note: "Up 2.7% intraday, closed lower; -24% in November"
  - code: "MSFT"
    status: "Flat"
    tone: "flat"
    pct: 0.40
    close: 508.29
    note: "Hyperscalers split either side of flat"
  - code: "AAPL"
    status: "Flat"
    tone: "flat"
    pct: 0.15
    close: 352.45
    note: "No company news, narrow range"
  - code: "GOOGL"
    status: "Firm"
    tone: "flat"
    pct: 0.80
    close: 282.44
    note: "Communication services +0.39%"
  - code: "META"
    status: "Soft"
    tone: "down"
    pct: -0.40
    close: 616.38
    note: "Second-weakest of the M7"
  - code: "AMZN"
    status: "Strong"
    tone: "up"
    pct: 3.82
    close: 267.74
    note: "Third-best Dow name, consumer discretionary led"
  - code: "TSLA"
    status: "Firm"
    tone: "flat"
    pct: 0.95
    close: 383.72
    note: "Rode the Nasdaq rebound"
  - code: "AVGO"
    status: "Strong"
    tone: "up"
    pct: 3.64
    close: 354.05
    note: "Custom-ASIC bid, +$12.45"
  - code: "AMD"
    status: "Surge"
    tone: "up"
    pct: 5.31
    close: 530.14
    note: "Best large-cap semi, +$26.73"
  - code: "MU"
    status: "Soft"
    tone: "down"
    pct: -1.00
    close: 705.27
    note: "Memory left behind, -$7.15"
  - code: "TSM"
    status: "Firm"
    tone: "flat"
    pct: 0.81
    close: 362.62
    note: "Foundry demand worry limited"
  - code: "UNH"
    status: "Plunge"
    tone: "down"
    pct: -10.21
    close: 349.91
    note: "CMS CRUSH proposal, -15% over two days"
  - code: "DIS"
    status: "Strong"
    tone: "up"
    pct: 4.63
    close: 122.36
    note: "FQ4 beat and savings plan, 52-week high"
watchItems:
  - tag: "Event"
    tone: "event"
    title: "Anthropic (ANT) starts trading"
    detail: "Priced at $83 on 980m shares for $81.3bn, the largest IPO on record, at a $1.5tn fully diluted valuation. Its first close becomes the new reference point for AI valuations: a big premium adds profit-taking pressure on other AI names, a break below the offer price does the opposite."
    when: "November 19, US session"
  - tag: "Rates"
    tone: "down"
    title: "December 8–9 FOMC — 25bp or 50bp"
    detail: "The October minutes showed almost every participant judged further hikes appropriate, with two raising the possibility of a larger move in December. Futures fully price a quarter-point and low odds of a half-point. If 50bp becomes the base case, long-duration mega-caps take it first."
    when: "December 8–9"
  - tag: "Risk"
    tone: "down"
    title: "Nvidia's CEO succession clock"
    detail: "The board chair ruled out bringing Jensen Huang back but gave no timeline for a successor. With the leadership question, not demand, capping the stock, a named candidate and roadmap is the first plausible turning point."
    when: "Ongoing · filings"
  - tag: "Policy"
    tone: "event"
    title: "The China rental ban and intermediary licensing"
    detail: "Commerce moved to stop Nvidia chips being rented to Chinese companies altogether, and new licensing applies to shipments via Singapore and Malaysia. Guidance already assumes zero China data-center revenue, but the rules can slow neocloud build-outs."
    when: "Implementing rules"
  - tag: "Regulation"
    tone: "next"
    title: "Where the CMS CRUSH rule lands"
    detail: "The proposal extrapolates Medicare Advantage audit findings back to payment year 2018. Comments run to January 19, 2027, and a similar 2025 framework was vacated on procedural grounds, so litigation is likely. Insurers re-rate only on a softer final rule or a legal delay."
    when: "Comments close January 19, 2027"
  - tag: "Calendar"
    tone: "flat"
    title: "Thanksgiving and thinner liquidity"
    detail: "US markets are closed November 26 and close early on November 27. Volume drops around the holiday, so index moves can overshoot; next month's inflation and jobs data are the last inputs before the December FOMC."
    when: "November 26–27"
sources:
  - label: "AP — How major US stock indexes fared Wednesday 11/18/2026"
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-990749d3d269f7ef05b9f6c089713a58"
  - label: "Xinhua — U.S. stocks close mixed"
    url: "https://english.news.cn/20261119/037e127c9b0449f2bd598c7c4c5b4c6d/c.html"
  - label: "Reuters (NST) — Wall Street ends mixed after Nvidia earnings, Fed minutes"
    url: "https://www.nst.com.my/business/corporate/2026/11/1580938/wall-street-ends-mixed-after-nvidia-earnings-fed-minutes"
  - label: "Investing.com — U.S. stocks mixed at close; Dow down 1.11%"
    url: "https://www.investing.com/news/stock-market-news/us-stocks-mixed-at-close-of-trade-dow-jones-industrial-average-down-111-5037118"
  - label: "Yahoo Finance — Stock market today: Dow, S&P 500 slip ahead of Anthropic IPO"
    url: "https://finance.yahoo.com/markets/live/stock-market-today-wednesday-november-18-dow-sp-500-nasdaq-nvidia-earnings-anthropic-ipo-143530588.html"
  - label: "CNBC — Nvidia Q3 FY2027 earnings report"
    url: "https://www.cnbc.com/2026/11/17/nvidia-nvda-earnings-report-q3-2027.html"
  - label: "CNBC — Nvidia sinks after earnings, dragging down neoclouds"
    url: "https://www.cnbc.com/2026/11/18/nvidia-stock-earnings.html"
  - label: "Yahoo Finance — Nvidia stock erases earnings pop as investors face life after Jensen Huang"
    url: "https://finance.yahoo.com/markets/stocks/article/nvidia-stock-erases-earnings-pop-as-investors-face-life-after-jensen-huang-173547783.html"
  - label: "CNBC — Fed minutes October 2026"
    url: "https://www.cnbc.com/2026/11/18/fed-minutes-october-2026.html"
  - label: "CNBC — Waller says the Fed may need to 'shock people' with a half-point hike"
    url: "https://www.cnbc.com/2026/11/18/federal-reserve-governor-christopher-waller.html"
  - label: "CNBC — Treasury yields: traders weigh Waller comments, Fed minutes"
    url: "https://www.cnbc.com/2026/11/18/treasury-yields-bonds-fed.html"
  - label: "Morningstar/Dow Jones — 10-Year Treasury Yield Falls to 5.065%"
    url: "https://www.morningstar.com/news/dow-jones/202611187117/10-year-treasury-yield-falls-to-5065-data-talk"
  - label: "Anthropic — Anthropic prices initial public offering"
    url: "https://www.anthropic.com/news/anthropic-prices-initial-public-offering"
  - label: "Reuters (Investing) — Anthropic valued at $1.5 trillion as IPO raises record $81 billion"
    url: "https://www.investing.com/news/stock-market-news/anthropic-prices-blockbuster-ipo-at-83-a-share-source-says-5037110"
  - label: "CNBC — Anthropic IPO raises over $81 billion in largest offering on record"
    url: "https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html"
  - label: "Reuters — Oil prices settle lower as traders weigh surplus supply outlook"
    url: "https://live.euronext.com/en/financial-news/oil-prices-settle-lower-traders-weigh-surplus-supply-outlook"
  - label: "Xinhua — Crude futures settle lower"
    url: "https://english.news.cn/20261119/5a7d7a64504745f3a881c2b5700b2ece/c.html"
  - label: "The Edge — Commodities Wrap 18 November"
    url: "https://edgeconsultancykw.com/commodities-wrap-18-november-2026/"
  - label: "Reuters — Stocks slip with eyes on Anthropic and Nvidia, oil prices slide"
    url: "https://live.euronext.com/en/financial-news/stocks-slip-eyes-anthropic-and-nvidia-oil-prices-slide"
  - label: "Yahoo Finance — UnitedHealth and other insurers drag down the Dow after CMS proposes new anti-fraud rule"
    url: "https://finance.yahoo.com/healthcare/article/unitedhealth-and-other-insurance-stocks-drag-down-the-dow-after-cms-proposes-new-anti-fraud-rule-173851810.html"
  - label: "Beinsure — Healthcare stocks fall as Medicare rules trigger a selloff"
    url: "https://beinsure.com/news/healthcare-stocks-fall-as-medicare-rules-trigger-a-selloff/"
  - label: "CNBC — Disney beats fourth-quarter estimates, targets $3 billion in savings"
    url: "https://www.cnbc.com/2026/11/17/disney-dis-earnings-q-2026.html"
  - label: "Yahoo Finance — Disney rises as 10 analysts raise targets on earnings beat"
    url: "https://finance.yahoo.com/markets/stocks/articles/disney-rises-5-10-analysts-214330033.html"
  - label: "Financial News — New York close: semiconductor names"
    url: "https://en.fnnews.com/news/202611190621290509"
  - label: "Blockchain.News — Semiconductor price table"
    url: "https://blockchain.news/stocks/sector/semiconductors"
  - label: "Hyperdash — Close Market Overview November 18, 2026"
    url: "https://hyperdash.com/news/stocks-split-as-oil-and-gold-tumble-fed-minutes-flag-inflation-unease"
---

## The US session and the macro tape

The S&P 500 closed at <strong>7,323.63 (-0.23%)</strong>, a fifth straight decline and its longest losing streak since June. The Dow fell <strong>561.25 points (-1.11%)</strong> to <strong>50,198.17</strong>, a three-month low, while the Nasdaq added <strong>101.50 points (+0.42%)</strong> to <strong>24,429.89</strong> and snapped a two-day slide. The Russell 2000 rose to <strong>2,714.31 (+0.46%)</strong> and the Philadelphia Semiconductor Index (SOX) closed at <strong>9,652.80 (+0.10%)</strong>.

Breadth was worse than the tape. Decliners led advancers 1,641 to 1,205 on the NYSE and 1,876 to 1,583 on the Nasdaq. Six of the eleven S&P 500 sectors fell, with energy (-3.51%) and health care (-2.18%) leading the losses and only consumer discretionary (+2.24%) and communication services (+0.39%) higher.

Three things made the day. **Nvidia's results**: revenue of $115.84bn (more than double the $57bn of a year earlier) and adjusted EPS of $2.68 beat the $109.10bn and $2.48 consensus, and fourth-quarter guidance of about $130bn topped the $125.1bn estimate. The stock still closed at <strong>$150.96 (-2.89%)</strong> after rising as much as 2.7%. The price is discounting succession risk after Jensen Huang's resignation, not demand.

**The Fed**: the October minutes showed almost every participant judged further hikes "would likely be appropriate", and officials flagged AI demand as "a material source of inflation risk". Governor Christopher Waller told CNBC the Fed may need to "shock people" with a half-point move at the December 8–9 meeting. Futures fully price a quarter-point hike and low odds of a half-point.

**Anthropic's IPO**: priced at $83 a share (above the $70–78 range) on 980m shares, raising $81.3bn — the largest IPO on record — at a $1.5tn fully diluted valuation. It begins trading on the Nasdaq on November 19 under "ANT".

Rates eased along the long end: the 10-year fell to 5.065% (-3.6bp), the 30-year to 5.408% (down more than 5bp), while the 2-year held at 4.80% (+1bp). Commodities slid: WTI for December settled at <strong>$83.26 (-3.20%)</strong>, the lowest since August 26, after larger-than-expected US crude and gasoline builds; Brent for January settled at $91.95 (-1.28%). Gold for December settled at $3,741.90 (-3.16%) and silver lost 4.85%. The dollar index hit a 19-month high at 103.77 and the VIX closed at 24.56 (-3.53%).

## Mega-caps, semis and single-name movers

### NVDA · Nvidia

<strong>$150.96 (-2.89%)</strong>. Fiscal third-quarter revenue was <strong>$115.84bn</strong> against $57bn a year earlier, data-center revenue was <strong>$107.6bn</strong> versus the $101.87bn estimate, fourth-quarter guidance was $127.4–132.6bn and the fiscal 2028 growth outlook rose to 75% from 70%. None of the guidance assumes China data-center compute revenue.

The stock is down 24% in November, has fallen six straight weeks (the longest streak since 2012) and sits at its lowest since July 2025. Its 52-week range is $148.80–243.37, so the close is almost on the low. The board chair ruled out rehiring Huang but gave no timetable for a successor. The quarter was won; the leadership seat is still empty.

### MSFT · Microsoft

<strong>$508.29 (+0.40%)</strong>. The quietest of the hyperscalers. There was no fresh company news, and the Fed's warnings about AI capital spending capped the upside.

### AAPL · Apple

<strong>$352.45 (+0.15%)</strong>. No company news, a narrow range, and a defensive role on a down day for the index.

### GOOGL · Alphabet

<strong>$282.44 (+0.80%)</strong>. Communication services held up at +0.39% and Alphabet led the group. With Anthropic's IPO pricing, the market now has a public reference price for an AI model developer, which resets the comparison for every mega-cap that owns its own models.

### META · Meta Platforms

<strong>$616.38 (-0.40%)</strong>. Second-weakest of the M7 after Nvidia. This is not an advertising problem but a valuation one: names funding their own model build-out are hit first when AI sentiment wobbles.

### AMZN · Amazon

<strong>$267.74 (+3.82%)</strong>, the third-best move in the Dow, as consumer discretionary led all sectors at +2.24%. There was no company disclosure; what stood out is the cash flow to absorb AI capital spending while the consumer holds.

### TSLA · Tesla

<strong>$383.72 (+0.95%)</strong>. It rode the Nasdaq rebound and is still down 14.7% year to date.

### AVGO · Broadcom

<strong>$354.05 (+3.64%, +$12.45)</strong>. Custom ASIC and networking demand came back into favour as Nvidia's raised guidance was read as confirmation that AI infrastructure spending continues, with Broadcom as the alternative-silicon play.

### AMD · Advanced Micro Devices

<strong>$530.14 (+5.31%, +$26.73)</strong>, the strongest large-cap semiconductor of the session, as the "second source" bid for AI accelerators met buying after the recent pullback.

### MU · Micron

<strong>$705.27 (-1.00%, -$7.15)</strong>. Memory was the one part of the complex left behind. HBM demand is intact, but the absence of China data-center revenue in Nvidia's guidance weighs on memory demand estimates.

### TSM · TSMC

<strong>$362.62 (+0.81%)</strong>. Foundry demand concerns stayed contained: higher Nvidia guidance means more leading-edge wafer orders, which keeps the foundry relatively insulated into earnings season.

### UNH · UnitedHealth

<strong>$349.91 (-10.21%, -$39.77)</strong>. A double-digit drop after CMS proposed the "CRUSH" rule on November 16: Medicare Advantage risk-adjustment audit findings would be extrapolated across whole contracts back to payment year 2018, without the fee-for-service adjuster. CMS estimates about $9bn of recoveries per payment year and nearly $90bn of savings over ten years. Humana fell 12.98%, CVS 5.2%, Cigna 2.96% and Elevance 7.63%; UnitedHealth has lost about 15% in two sessions.

### DIS · Walt Disney

<strong>$122.36 (+4.63%, +$5.42)</strong>, a fresh 52-week high. Fiscal fourth-quarter adjusted EPS of $1.77 beat the $1.68 consensus on revenue of $25.95bn (+16%), led by streaming and parks. Management paired it with a $3bn cost-savings plan through fiscal 2029 and a $2 annual dividend (+33%). At least ten houses raised targets to $130–143.

## What to check next

<!-- Rendered from the watchItems in the frontmatter. -->

## Sources

- [AP — How major US stock indexes fared Wednesday 11/18/2026](https://apnews.com/article/wall-street-stocks-dow-nasdaq-990749d3d269f7ef05b9f6c089713a58)
- [Xinhua — U.S. stocks close mixed](https://english.news.cn/20261119/037e127c9b0449f2bd598c7c4c5b4c6d/c.html)
- [Reuters (NST) — Wall Street ends mixed after Nvidia earnings, Fed minutes](https://www.nst.com.my/business/corporate/2026/11/1580938/wall-street-ends-mixed-after-nvidia-earnings-fed-minutes)
- [Investing.com — U.S. stocks mixed at close; Dow down 1.11%](https://www.investing.com/news/stock-market-news/us-stocks-mixed-at-close-of-trade-dow-jones-industrial-average-down-111-5037118)
- [Yahoo Finance — Stock market today: Dow, S&P 500 slip ahead of Anthropic IPO](https://finance.yahoo.com/markets/live/stock-market-today-wednesday-november-18-dow-sp-500-nasdaq-nvidia-earnings-anthropic-ipo-143530588.html)
- [CNBC — Nvidia Q3 FY2027 earnings report](https://www.cnbc.com/2026/11/17/nvidia-nvda-earnings-report-q3-2027.html)
- [CNBC — Nvidia sinks after earnings, dragging down neoclouds](https://www.cnbc.com/2026/11/18/nvidia-stock-earnings.html)
- [Yahoo Finance — Nvidia stock erases earnings pop as investors face life after Jensen Huang](https://finance.yahoo.com/markets/stocks/article/nvidia-stock-erases-earnings-pop-as-investors-face-life-after-jensen-huang-173547783.html)
- [CNBC — Fed minutes October 2026](https://www.cnbc.com/2026/11/18/fed-minutes-october-2026.html)
- [CNBC — Waller says the Fed may need to 'shock people' with a half-point hike](https://www.cnbc.com/2026/11/18/federal-reserve-governor-christopher-waller.html)
- [CNBC — Treasury yields: traders weigh Waller comments, Fed minutes](https://www.cnbc.com/2026/11/18/treasury-yields-bonds-fed.html)
- [Morningstar/Dow Jones — 10-Year Treasury Yield Falls to 5.065%](https://www.morningstar.com/news/dow-jones/202611187117/10-year-treasury-yield-falls-to-5065-data-talk)
- [Anthropic — Anthropic prices initial public offering](https://www.anthropic.com/news/anthropic-prices-initial-public-offering)
- [Reuters (Investing) — Anthropic valued at $1.5 trillion as IPO raises record $81 billion](https://www.investing.com/news/stock-market-news/anthropic-prices-blockbuster-ipo-at-83-a-share-source-says-5037110)
- [CNBC — Anthropic IPO raises over $81 billion in largest offering on record](https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html)
- [Reuters — Oil prices settle lower as traders weigh surplus supply outlook](https://live.euronext.com/en/financial-news/oil-prices-settle-lower-traders-weigh-surplus-supply-outlook)
- [Xinhua — Crude futures settle lower](https://english.news.cn/20261119/5a7d7a64504745f3a881c2b5700b2ece/c.html)
- [The Edge — Commodities Wrap 18 November](https://edgeconsultancykw.com/commodities-wrap-18-november-2026/)
- [Reuters — Stocks slip with eyes on Anthropic and Nvidia, oil prices slide](https://live.euronext.com/en/financial-news/stocks-slip-eyes-anthropic-and-nvidia-oil-prices-slide)
- [Yahoo Finance — UnitedHealth and other insurers drag down the Dow after CMS proposes new anti-fraud rule](https://finance.yahoo.com/healthcare/article/unitedhealth-and-other-insurance-stocks-drag-down-the-dow-after-cms-proposes-new-anti-fraud-rule-173851810.html)
- [Beinsure — Healthcare stocks fall as Medicare rules trigger a selloff](https://beinsure.com/news/healthcare-stocks-fall-as-medicare-rules-trigger-a-selloff/)
- [CNBC — Disney beats fourth-quarter estimates, targets $3 billion in savings](https://www.cnbc.com/2026/11/17/disney-dis-earnings-q-2026.html)
- [Yahoo Finance — Disney rises as 10 analysts raise targets on earnings beat](https://finance.yahoo.com/markets/stocks/articles/disney-rises-5-10-analysts-214330033.html)
- [Financial News — New York close: semiconductor names](https://en.fnnews.com/news/202611190621290509)
- [Blockchain.News — Semiconductor price table](https://blockchain.news/stocks/sector/semiconductors)
- [Hyperdash — Close Market Overview November 18, 2026](https://hyperdash.com/news/stocks-split-as-oil-and-gold-tumble-fed-minutes-flag-inflation-unease)
