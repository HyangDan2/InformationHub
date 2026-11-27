---
title: "US Markets Daily Report · November 28"
date: 2026-11-28T06:35:00+09:00
channel: "us-markets"
navSection: "us-markets"
reportKind: "daily"
summary: "Back from Thanksgiving, the market bought beaten-down AI shares and sent the shortened session sharply higher. The S&P 500 rose 1.60% to 7,297.49, the Nasdaq 2.31% to 24,129.50 and the Dow 1.18% to 50,774.94, while the SOX jumped 4.69% to 9,186.71. For the week the S&P gained 5.6% and the Nasdaq 6.68%, their best weeks since April 2025, and the Dow 5.46%, its best since October 2022. Micron rose 7.60%, Sandisk 15.96%, Anthropic 10.98% and Tesla 5.22%, while Nvidia managed 0.80%. The 10-year yield rose 8.8bp to 4.936% and the VIX fell to 23.81."
tickers: ["NVDA", "MSFT", "AAPL", "GOOGL", "META", "AMZN", "TSLA", "AVGO", "AMD", "MU", "TSM", "ANT", "SNDK", "DELL", "ORCL", "PLTR"]
market:
  indices:
    - name: "S&P 500"
      value: 7297.49
      change: 114.71
      pct: 1.60
    - name: "NASDAQ"
      value: 24129.50
      change: 543.70
      pct: 2.31
    - name: "DOW"
      value: 50774.94
      change: 591.99
      pct: 1.18
    - name: "SOX"
      value: 9186.71
      change: 411.84
      pct: 4.69
    - name: "US 10Y"
      value: 4.936
      digits: 3
      change: 0.088
      changeDigits: 3
      pct: 1.82
    - name: "VIX"
      value: 23.81
      change: -2.99
      pct: -11.16
    - name: "WTI"
      value: 83.33
      change: -0.35
      pct: -0.42
watchlistStatus:
  - code: "NVDA"
    status: "Rises"
    tone: "up"
    pct: 0.80
    close: 150.49
    note: "Down 3% early, reversed late"
  - code: "MSFT"
    status: "Flat"
    tone: "flat"
    pct: 0.60
    close: 492.85
    note: "A third of the index gain"
  - code: "AAPL"
    status: "Rises"
    tone: "up"
    pct: 0.83
    close: 358.54
    note: "Sitting out the AI trade, again"
  - code: "GOOGL"
    status: "Flat"
    tone: "flat"
    pct: 0.68
    close: 274.96
    note: "No lift from Anthropic's 11%"
  - code: "META"
    status: "Surges"
    tone: "up"
    pct: 3.13
    close: 628.96
    note: "Second straight gain, back above $620"
  - code: "AMZN"
    status: "Rises"
    tone: "up"
    pct: 3.96
    close: 254.12
    note: "Top Dow contributor"
  - code: "TSLA"
    status: "Surges"
    tone: "up"
    pct: 5.22
    close: 400.00
    note: "Closed at exactly $400"
  - code: "AVGO"
    status: "Surges"
    tone: "up"
    pct: 3.82
    close: 312.34
    note: "Back above $310 before Dec 9"
  - code: "AMD"
    status: "Surges"
    tone: "up"
    pct: 4.56
    close: 424.54
    note: "Extending the week's rebound"
  - code: "MU"
    status: "Surges"
    tone: "up"
    pct: 7.60
    close: 646.95
    note: "$734B market cap, just under $650"
  - code: "TSM"
    status: "Rises"
    tone: "up"
    pct: 3.31
    close: 353.67
    note: "Higher with Taipei"
watchItems:
  - tag: "Rates"
    tone: "down"
    title: "December 9 is settled — the open question is the path after January"
    detail: "CME FedWatch put the odds of a 25bp hike at the December 8-9 meeting at 98.9% on the 27th, and the Kalshi contract prices 94% for 25bp and 97% for any move. The funds rate is 3.75-4.00% under Chair Kevin Warsh. The Fed entered its pre-meeting blackout on the 28th and will not speak publicly until December 10, which leaves the November employment report on December 4 as the next input. Consensus is 90,000 jobs, unemployment steady at 4.1% and average hourly earnings up 0.3%. Around 90,000 leaves December undisturbed; a print above 100,000 with wages re-accelerating to 0.4% revives talk of 50bp, and a print below 50,000 would force the market to reprice January 2027, where Kalshi prices a 57% chance of another hike."
    when: "December 4 payrolls · December 9 FOMC"
  - tag: "Regulation"
    tone: "down"
    title: "Bloomberg traced a GB300 rack to Shanghai — and Nvidia testifies on December 1"
    detail: "Bloomberg, working from loan documents filed with Chinese regulators, found Blackwell-generation hardware at the Yangtze River Delta Project data centre in Shanghai. Shanghai Shuoyao pledged a GB300 NVL72 rack as collateral for a 96 million yuan ($14 million) loan from Shanghai Innovation Bank, and a serial number in the November filing traced through a public warranty database to Gigabyte of Taiwan. The same filings list a GB200 server and 32 H200 servers at the site, and local media have said it could hold as many as 800,000 servers. Reuters identifies the site's president, Kang Wei, as Alice Huang's husband. US rules require a licence to ship Blackwell to China, and President Trump has said he does not want it going there for now. Jensen Huang appears behind closed doors before three House committees on December 1 and general counsel Tim Teter on December 2. Washington blacklisted Megaspeed this week, and the Justice Department is investigating suspected diversion."
    when: "December 1-2 House testimony"
  - tag: "Earnings"
    tone: "next"
    title: "Broadcom on December 9, Micron on December 17 — the two numbers that would confirm this rally"
    detail: "Broadcom reports fiscal fourth-quarter results on December 9, and part of Friday's 3.82% gain was positioning ahead of it. The quarter settles three arguments at once: Google's reported cut to TPU orders, Anthropic exposure, and the start of shipments for its own MTIA inference chip. Micron reports on December 17 and has to fill a $61.5 billion guide; at $646.95 the stock now also has to show that higher memory contract prices reach the margin. Dell, which reported $54.94 billion in revenue, $9.45 in EPS and a $202 billion annual outlook on the 25th, recovered most of the post-earnings drop with a 6.70% gain."
    when: "December 9 · December 17"
  - tag: "Consumer"
    tone: "event"
    title: "Black Friday online spending forecast at $12.9 billion — Cyber Monday is the next test"
    detail: "Adobe Analytics expects $47.5 billion of US online spending over the five days from Thanksgiving to Cyber Monday, up 7.4%, with Black Friday at $12.9 billion (up 9.2%) and Cyber Monday at $15.1 billion (up 6.2%), which would be the first single day above $15 billion. Online spending from November 1 to 22 was already $82.5 billion, up 9.1% year over year. All 11 S&P 500 sectors rose on Friday and consumer discretionary led. Amazon, however, faced strikes at 11 German warehouses and Teamsters rallies in Chicago and Los Angeles set for the 30th, part of a Make Amazon Pay campaign running in more than 20 countries."
    when: "November 30 Cyber Monday"
  - tag: "Flows"
    tone: "flat"
    title: "5.6% in a week — and half of it was leverage being unwound"
    detail: "The week began with Nvidia's announcement that Jensen Huang would return as CEO; the stock rose 31% that Monday and the S&P 500 and Nasdaq had their best days since April 2025. Three down days followed, then an intraday reversal on Wednesday and Friday's follow-through. Andrew Slimmon of Morgan Stanley Investment Management said so much fast money has deleveraged out of tech that it could be forced to chase back in next week. Jamie Cox of Harris Financial Group put it more simply: \"The market is so oversold that a bounce was inevitable.\" What the week does not fix is November. The S&P 500 and Nasdaq are headed for their worst November since 2008, and the S&P 500 is still 6.67% below its October 6 record of 7,818.93."
    when: "Last week of November · December 3 Tesla meeting"
  - tag: "Korea"
    tone: "event"
    title: "Kospi +4.34%, Kosdaq +8.13% — foreigners bought back 1.13 trillion won"
    detail: "The Kospi rose 204.47 points, or 4.34%, to close at 4,915.68, reclaiming 4,900 for the first time in three sessions, and the Kosdaq jumped 53.28 points, or 8.13%, to 708.99. Foreigners bought a net 1.13 trillion won of Kospi shares. The won closed onshore at 1,337.9 per dollar, down 4.8 won, after touching 1,347.1 in the morning. The buying mirrored the previous night's chip rebound in New York, and Friday's second leg higher gives Korea a friendlier open on Monday. The Kosdaq's 8% move was more a bounce in oversold names than a change in the index's character."
    when: "November 27 Korea session"
sources:
  - label: "CNBC — Dow rallies nearly 600 points to close out best week since 2022"
    url: "https://www.cnbc.com/2026/11/26/stock-market-today-live-updates.html"
  - label: "Reuters (Investing.com) — Wall Street ends higher as battered AI stocks gain in volatile week"
    url: "https://www.investing.com/news/stock-market-news/wall-st-futures-surge-as-investors-return-from-holiday-5053052"
  - label: "AP — Stocks jump to close out an erratic week that was also Wall Street's best in more than a year"
    url: "https://apnews.com/article/stock-markets-tariffs-ai-profits-energy-c7ef10c1dbc5fa09668bd4fe0729c613"
  - label: "Kiplinger — Dow Adds 592 Points on Black Friday as AI Fear Fades"
    url: "https://www.kiplinger.com/investing/stocks/dow-adds-592-points-on-black-friday-as-ai-fear-fades-stock-market-today"
  - label: "Sharecast — US close: Stocks rally as technology shares bounce back"
    url: "https://www.sharecast.com/news/market-report-us-close/us-stocks-djia-sp-500-nasdaq-tech-stocks-anthropic-vertex-pharmaceuticals--24310664.html"
  - label: "Yahoo Finance — Markets News, Nov. 27, 2026"
    url: "https://finance.yahoo.com/markets/stocks/articles/stock-market-today-major-indexes-140450439.html"
  - label: "CNBC — Treasury yields are higher as investors look ahead to payroll data"
    url: "https://www.cnbc.com/2026/11/27/treasury-yields-bonds-fed.html"
  - label: "TreasuryBonds.com — Bond Market Wrap-Up, November 27, 2026"
    url: "https://treasurybonds.com/news/2026-11-27-bond-market-wrap-up-treasuries-slide-on-friday-ending-the-holiday-week-with-losses/"
  - label: "Nasdaq — PHLX Semiconductor (SOX) history"
    url: "https://indexes.nasdaqomx.com/Index/History/SOX"
  - label: "Yahoo Finance — CBOE Volatility Index history"
    url: "https://finance.yahoo.com/quote/%5EVIX/history/"
  - label: "CNBC — Stocks making the biggest moves midday"
    url: "https://www.cnbc.com/2026/11/27/stocks-moving-the-most-today-live-updates.html"
  - label: "Investing.com — Why is Oracle stock rallying today?"
    url: "https://www.investing.com/news/stock-market-news/why-is-oracle-stock-rallying-today-93CH-5053726"
  - label: "StockAnalysis — Anthropic jumps 11% back above IPO price"
    url: "https://stockanalysis.com/news/anthropic-jumps-11-percent-back-above-ipo-price/"
  - label: "Bloomberg (StockAnalysis) — Nvidia Blackwell chips found at a Shanghai site tied to Alice Huang"
    url: "https://stockanalysis.com/news/nvidia-blackwell-chips-shanghai-site-alice-huang/"
  - label: "The Decoder — Banned Nvidia Blackwell chips turn up in a Shanghai data center"
    url: "https://the-decoder.com/banned-nvidia-blackwell-chips-turn-up-in-a-shanghai-data-center-linked-to-alice-huang-bloomberg-reports/"
  - label: "CNBC — Walmart sizzles while SpaceX struggles"
    url: "https://www.cnbc.com/2026/11/27/walmart-costco-valuations-ai-stocks.html"
  - label: "Adobe — 2026 holiday shopping trends and actuals"
    url: "https://business.adobe.com/resources/holiday-shopping-report.html"
  - label: "Engadget — Amazon workers plan strikes and protests on Black Friday and Cyber Monday"
    url: "https://www.engadget.com/2329231/amazon-workers-plan-protests-on-black-friday-and-cyber-monday/"
  - label: "RateSpike — November Jobs Report: What It Means for the December Fed Hike"
    url: "https://www.ratespike.com/articles/november-jobs-report-december-fed-hike-kalshi"
  - label: "Newsquawk — Week in Focus, Nov 30-Dec 4, 2026"
    url: "https://www.newsquawk.com/daily/5881-week-in-focus-nov-30th-dec-4th-2026-highlights-include-us-nfp-ism-pmis-nvda-hearings-and-the-spanish-election"
  - label: "Kiplinger — What to Look Out for in Economic Data This Week"
    url: "https://www.kiplinger.com/investing/economy/this-weeks-economic-calendar"
  - label: "StockCharts — MarketCarpet five-day movers"
    url: "https://stockcharts.com/marketcarpet/?period=fiveday"
  - label: "Yonhap — Kospi closes at 4,915.68, up 4.34%; Kosdaq up 8.13%"
    url: "https://www.yna.co.kr/view/AKR20261127120451008"
  - label: "Yonhap — Won closes at 1,337.9 per dollar"
    url: "https://www.yna.co.kr/view/AKR20261127127600002"
---

## The session — an early close that capped the best week of the year

The S&P 500 rose <strong>1.60% (114.71 points) to 7,297.49</strong>. The Nasdaq Composite gained <strong>2.31% (543.70 points) to 24,129.50</strong> and the Dow <strong>1.18% (591.99 points) to 50,774.94</strong>. The Russell 2000 did better than the large caps, up 1.71% to 2,750.30. The NYSE and Nasdaq closed at 1 p.m. ET and the bond market at 2 p.m. Volume was 10.97 billion shares, which is not thin even for a half session. Advancers outnumbered decliners 3.25 to 1 on the NYSE and 3.24 to 1 on the Nasdaq.

The weekly numbers matter more than the day. The S&P 500 gained <strong>5.6%</strong> on the week, its best since April 2025; the Nasdaq <strong>6.68%</strong>, its best since April; and the Dow <strong>5.46%</strong>, its best week since October 2022. Barron's called it the best Thanksgiving week since 2008. The month underneath is still bad. The S&P 500 and Nasdaq are headed for their worst November since 2008, and the S&P 500 remains <strong>6.67%</strong> below its October 6 record of 7,818.93. One good week has not erased one bad month.

The weight was in chips. The PHLX Semiconductor Index rose <strong>4.69% (411.84 points) to 9,186.71</strong>, having traded as low as 8,789.31 and as high as 9,213.64 — a day spent buying. Micron gained 7.60%, Marvell 7.3% and Sandisk <strong>15.96%</strong>, the best stock in the S&P 500 and its largest one-day gain since November 11, when it rose 14%. Seagate added 7.90%, Western Digital 7.22%, Lumentum 7.98% and Astera Labs 8.67%. The VanEck Semiconductor ETF rose 4.2%.

The character of the bounce was positioning. The week began with Nvidia's announcement that Jensen Huang would return as CEO; the stock rose more than 31% that Monday and the S&P 500 and Nasdaq had their best days since April 2025. Three sessions of losses followed, then a reversal late on Wednesday and Friday's follow-through. Andrew Slimmon of Morgan Stanley Investment Management said so much fast money has deleveraged out of tech that it could be forced to chase back in next week. Jamie Cox of Harris Financial Group said the market was so oversold that a bounce was inevitable. With New York desks empty for Thanksgiving on Thursday, European and Asian tech had already rallied in the preceding 24 hours. Jim Reid of Deutsche Bank called it "some signs that the tech selloff has stabilised for now, and that risk appetite is returning."

Macro went the other way. The 10-year yield rose <strong>8.8bp to 4.936%</strong>, the 2-year 6bp to 4.699% and the 30-year 8bp to 5.32%. Bonds selling off while stocks rally means risk appetite returned; it does not mean the rate burden eased. A 25bp hike on December 8-9 is priced at 98.9% by CME FedWatch and 94% by Kalshi. The Fed entered its blackout on the 28th, which leaves the November payroll report on December 4. Consensus is 90,000 jobs, unemployment at 4.1% and wages up 0.3%. At around 90,000 the December decision does not move; what the market will start pricing is 2027, where Kalshi's January 27 contract sits at 57% for another hike and March 17 at 53%.

Other assets reflected the same risk appetite. Gold futures rose more than 2% back into the $3,600s, silver jumped more than 7% into the $43s and copper added 3.3%. Oil went the other way: January WTI settled at <strong>$83.33</strong> a barrel, down 35 cents, even as Houthi attacks on Saudi energy infrastructure continued. The VIX fell <strong>2.99 points, or 11.16%, to 23.81</strong>, down more than a third from 35.89 last Friday and below the 25.64 of early November. The choice of Pablo Hernandez de Cos to lead the European Central Bank fed into European rates and the dollar.

Korea mirrored the previous night's reversal in New York. The Kospi rose <strong>4.34% (204.47 points) to 4,915.68</strong>, reclaiming 4,900 for the first time in three sessions, and the Kosdaq jumped <strong>8.13% (53.28 points) to 708.99</strong>. Foreigners bought a net <strong>1.13 trillion won</strong> of Kospi shares. The won closed onshore at <strong>1,337.9</strong> per dollar, 4.8 won stronger, after touching 1,347.1. Samsung Electronics dividend repatriation supported the dollar at the margin, but foreign equity buying was larger. The Nikkei rose 2.1%. With New York adding a second leg on Friday, Korea gets a friendlier open on Monday.

## US Markets stock by stock

### NVDA · Nvidia

<strong>$150.49 (+0.80%)</strong>. The stock was up more than 2% early, then down nearly 3%, then finished green — a session that changed direction three times. It sat mid-pack among Dow components. It is still <strong>37%</strong> below its early-October record, and it lagged badly on a day the SOX rose 4.69%. The heavier news was outside the company. Bloomberg traced a GB300 NVL72 rack — Blackwell generation, one of the most powerful systems Nvidia sells — to the Yangtze River Delta Project data centre in Shanghai, with a serial number that a warranty database tied to Gigabyte of Taiwan. Washington blacklisted Megaspeed this week. Jensen Huang testifies behind closed doors before three House committees on December 1, and general counsel Tim Teter on December 2. Those three items are likely to set the direction into early December.

### MSFT · Microsoft

<strong>$492.85 (+0.60%)</strong>. A third of the index gain. With cloud and its own models, Microsoft behaves defensively, which means it lags on days when risk appetite returns. Amazon rose 3.96% and Oracle 3.13%, so within cloud the money went to Amazon. If Broadcom's December 9 report reopens the argument over Google's TPU orders, Microsoft's lower exposure to custom silicon becomes a relative attraction again.

### AAPL · Apple

<strong>$358.54 (+0.83%)</strong>. Middle of the Magnificent Seven. Standing furthest from the AI capex argument helped all week. Holiday-season expectations are already in the index, so Black Friday itself was not a stock-specific catalyst. Memory procurement costs remain a drag, and they will show up in fourth-quarter margins at the device makers.

### GOOGL · Alphabet

<strong>$274.96 (+0.68%)</strong>. Alphabet barely moved on a day Anthropic rose 10.98%. Being one of Anthropic's largest investors helps on paper, but it also means sitting on the other side of the table as its biggest compute supplier. Much of Anthropic's $900.9 billion of compute commitments points at Alphabet and Amazon. Broadcom's December 9 report and the 2027 TPU order plan are the next checkpoints.

### META · Meta Platforms

<strong>$628.96 (+3.13%)</strong>. A second straight gain took the stock from the $610s back above $620. Wednesday's catalysts were the Amazon talks over its Muse shopping agent and the $4.5 billion Meta-backed data centre loan; Friday was that news being digested again. Advertising is the revenue line most directly exposed to the holiday season, and consumer discretionary led all 11 S&P sectors higher. The detail is in the November 26 spotlight.

### AMZN · Amazon

<strong>$254.12 (+3.96%)</strong>. The largest contributor to the Dow. Adobe Analytics projected Black Friday online spending at $12.9 billion, up 9.2% year over year, within $47.5 billion over the five days from Thanksgiving to Cyber Monday. Online spending of $82.5 billion from November 1 to 22, up 9.1%, was the evidence used against the consumer-slowdown argument. Against that, strikes hit 11 German warehouses on Friday and Teamsters rallies are set for Chicago and Los Angeles on the 30th. AWS grew 39% to $46.0 billion in the third quarter with a $578 billion backlog. The next check is whether the fourth-quarter guide of $240-247 billion is met.

### TSLA · Tesla

<strong>$400.00 (+5.22%)</strong>. It closed at exactly $400. The December 3 annual meeting is the next catalyst: the Financial Times reported this week that five directors from special committees formed by Tesla and SpaceX on October 20 are discussing an all-stock merger, with a goal of closing by year-end but no agreement close. SpaceX rose 4.8% on Friday. Elon Musk told Andrew Ross Sorkin on the 18th that the two companies "don't need" a merger, but answered "probably, yes" when asked whether they would be better together.

### AVGO · Broadcom

<strong>$312.34 (+3.82%)</strong>. Back above $310 from the $300 line. Buyers moved in 12 days before the December 9 fiscal fourth-quarter report, which will settle the argument over Google's TPU orders, Anthropic exposure and the start of MTIA shipments. The stock moved roughly in line with the 4.69% gain in the SOX, so sector flows and stock-specific anticipation pointed the same way. The detail is in the November 21 spotlight.

### AMD · Advanced Micro Devices

<strong>$424.54 (+4.56%)</strong>. One of the largest rebounds among the big chip names this week. It is recovering the ground lost after a November 19 short-seller report questioned its China dealings knocked the stock 8%. Against Micron's 7.60% and Broadcom's 3.82% it was mid-pack, but it remains well below last month's high.

### MU · Micron

<strong>$646.95 (+7.60%)</strong>. The best of the large chipmakers. It traded as high as $650.97 before closing, giving it a market capitalisation of <strong>$734.2 billion</strong>. It has now recovered almost all of the pullback that followed the 19% surge on November 24. The question is how the push for 25-45% higher memory contract prices settles between cost and margin; December 17's fiscal first-quarter report and the $61.5 billion guide are the test. Sandisk, Seagate and Western Digital all rising more than 7% shows money entering memory and storage as a group.

### TSM · TSMC

<strong>$353.67 (+3.31%)</strong>. Higher with Taipei. Nothing has emerged to show AI chip orders actually fell; this week's selling was risk reduction. The report that a Gigabyte-built Blackwell rack turned up in Shanghai is a more direct issue for Taiwan's server assemblers and their export controls than for the foundry.

### ANT · Anthropic

<strong>$91.88 (+10.98%)</strong>. Its best day since listing and a return above the $83 IPO price in three sessions. It opened at $84.83 and traded as high as $93.11. The stock had closed below the offer price on Tuesday and Wednesday and traded as low as $73.85 on Wednesday. Friday's close is the highest since the $97.17 debut close and 24% above that low. The move was risk appetite rather than company news, though the third quarter's $16.96 billion of revenue and an $81 billion October run rate sit underneath it. The detail is in this edition's spotlight.

### SNDK · Sandisk / STX · Seagate / WDC · Western Digital

Storage was the strongest group. Sandisk closed at <strong>$85.36 (+15.96%)</strong>, the best in the S&P 500; Seagate at <strong>$509.66 (+7.90%)</strong>; Western Digital added 7.22%. The expectation that AI data centre storage demand is feeding through into memory pricing lifted the whole group, and it also reversed part of an early-November slide. There was no company news, but the gains came on volume, which suggests this was not only short covering.

### DELL · Dell / ORCL · Oracle / CRWV · CoreWeave

Dell rose <strong>6.70%</strong>, recovering most of the 11.83% drop that followed its November 25 report of $54.94 billion in revenue, $9.45 in EPS and a $202 billion annual outlook. Oracle rose <strong>3.13%</strong>, bouncing off the 52-week low of $99.34 it set two days earlier, helped by its statement that a $20 billion raise split evenly between equity and senior notes fully funds its OpenAI data centre contract and by an upgrade the previous day. CoreWeave was up more than 4% early. The pattern repeats: the names where AI infrastructure debt worries were priced first are the ones that rally first when those worries ease.

### PLTR · Palantir / ALAB · Astera Labs / LITE · Lumentum

Palantir rose <strong>5.24% to $172.17</strong>, the standout in software. Astera Labs added 8.67% and Lumentum 7.98% on AI server connectivity and optics. Rocket Lab gained 8.21% and Generac 7.44%. What they share is a heavy November decline; Friday was a rebound in positioning, not in earnings.

### VRTX · Vertex / AMBA · Ambarella

Vertex Pharmaceuticals fell <strong>5.24% to $534.57</strong>, the worst in the S&P 500, after the FDA extended its review of the kidney drug povetacicept by up to three months to consider newly requested information. The target action date is now no later than February 28, 2027. Ambarella slipped again, failing to bounce from a 20% drop after third-quarter results and guidance both missed.

### Materials and energy — Newmont, Freeport-McMoRan

Miners rallied as gold, silver and copper rose together. Newmont gained <strong>5.4%</strong>, AngloGold Ashanti 4.7%, Coeur Mining 6.8%, Gold Fields 5.5% and Freeport-McMoRan 3.9%. Copper futures added 3.3% after an intraday move of 6.5% on Thursday, the largest since late January. Oil went the other way, with January WTI at $83.33. Gold and copper up while crude slips, on a day risk appetite returned, says money moved into AI and technology before cyclical assets.

## What to watch

<!-- This list renders as cards from the frontmatter's watchItems. -->

## Sources

- [CNBC — Dow rallies nearly 600 points to close out best week since 2022](https://www.cnbc.com/2026/11/26/stock-market-today-live-updates.html)
- [Reuters (Investing.com) — Wall Street ends higher as battered AI stocks gain in volatile week](https://www.investing.com/news/stock-market-news/wall-st-futures-surge-as-investors-return-from-holiday-5053052)
- [AP — Stocks jump to close out an erratic week](https://apnews.com/article/stock-markets-tariffs-ai-profits-energy-c7ef10c1dbc5fa09668bd4fe0729c613)
- [Kiplinger — Dow Adds 592 Points on Black Friday as AI Fear Fades](https://www.kiplinger.com/investing/stocks/dow-adds-592-points-on-black-friday-as-ai-fear-fades-stock-market-today)
- [Sharecast — US close: Stocks rally as technology shares bounce back](https://www.sharecast.com/news/market-report-us-close/us-stocks-djia-sp-500-nasdaq-tech-stocks-anthropic-vertex-pharmaceuticals--24310664.html)
- [Yahoo Finance — Markets News, Nov. 27, 2026](https://finance.yahoo.com/markets/stocks/articles/stock-market-today-major-indexes-140450439.html)
- [CNBC — Treasury yields are higher as investors look ahead to payroll data](https://www.cnbc.com/2026/11/27/treasury-yields-bonds-fed.html)
- [TreasuryBonds.com — Bond Market Wrap-Up, November 27, 2026](https://treasurybonds.com/news/2026-11-27-bond-market-wrap-up-treasuries-slide-on-friday-ending-the-holiday-week-with-losses/)
- [Nasdaq — PHLX Semiconductor (SOX) history](https://indexes.nasdaqomx.com/Index/History/SOX)
- [Yahoo Finance — CBOE Volatility Index history](https://finance.yahoo.com/quote/%5EVIX/history/)
- [CNBC — Stocks making the biggest moves midday](https://www.cnbc.com/2026/11/27/stocks-moving-the-most-today-live-updates.html)
- [Investing.com — Why is Oracle stock rallying today?](https://www.investing.com/news/stock-market-news/why-is-oracle-stock-rallying-today-93CH-5053726)
- [StockAnalysis — Anthropic jumps 11% back above IPO price](https://stockanalysis.com/news/anthropic-jumps-11-percent-back-above-ipo-price/)
- [Bloomberg (StockAnalysis) — Nvidia Blackwell chips found at a Shanghai site tied to Alice Huang](https://stockanalysis.com/news/nvidia-blackwell-chips-shanghai-site-alice-huang/)
- [The Decoder — Banned Nvidia Blackwell chips turn up in a Shanghai data center](https://the-decoder.com/banned-nvidia-blackwell-chips-turn-up-in-a-shanghai-data-center-linked-to-alice-huang-bloomberg-reports/)
- [CNBC — Walmart sizzles while SpaceX struggles](https://www.cnbc.com/2026/11/27/walmart-costco-valuations-ai-stocks.html)
- [Adobe — 2026 holiday shopping trends and actuals](https://business.adobe.com/resources/holiday-shopping-report.html)
- [Engadget — Amazon workers plan strikes on Black Friday and Cyber Monday](https://www.engadget.com/2329231/amazon-workers-plan-protests-on-black-friday-and-cyber-monday/)
- [RateSpike — November Jobs Report and the December Fed Hike](https://www.ratespike.com/articles/november-jobs-report-december-fed-hike-kalshi)
- [Newsquawk — Week in Focus, Nov 30-Dec 4, 2026](https://www.newsquawk.com/daily/5881-week-in-focus-nov-30th-dec-4th-2026-highlights-include-us-nfp-ism-pmis-nvda-hearings-and-the-spanish-election)
- [Kiplinger — What to Look Out for in Economic Data This Week](https://www.kiplinger.com/investing/economy/this-weeks-economic-calendar)
- [StockCharts — MarketCarpet five-day movers](https://stockcharts.com/marketcarpet/?period=fiveday)
- [Yonhap — Kospi closes at 4,915.68](https://www.yna.co.kr/view/AKR20261127120451008)
- [Yonhap — Won closes at 1,337.9 per dollar](https://www.yna.co.kr/view/AKR20261127127600002)
