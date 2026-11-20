---
title: "US Markets Daily Report · November 21"
date: 2026-11-21T06:35:00+09:00
channel: "us-markets"
navSection: "us-markets"
reportKind: "daily"
summary: "Anthropic's second day as a public company was the market's cue to sell AI. The S&P 500 fell 3.70% to 6,910.39 for a seventh straight loss and closed in correction, and the Dow joined it at 48,147.33. The Nasdaq dropped 5.28% and gave up its 2026 gain, the SOX lost 10.73%, and the VIX jumped 30.59% to 37.14 as an SEC accounting probe at Nvidia and a cut to Google's Broadcom orders landed together."
tickers: ["NVDA", "MSFT", "AAPL", "GOOGL", "META", "AMZN", "TSLA", "AVGO", "AMD", "MU", "TSM", "UNH", "DIS"]
market:
  indices:
    - name: "S&P 500"
      value: 6910.39
      change: -265.44
      pct: -3.70
    - name: "NASDAQ"
      value: 22617.73
      change: -1261.47
      pct: -5.28
    - name: "DOW"
      value: 48147.33
      change: -949.73
      pct: -1.93
    - name: "SOX"
      value: 8408.59
      change: -1011.13
      pct: -10.73
    - name: "US 10Y"
      value: 4.932
      digits: 3
      change: -0.114
      changeDigits: 3
      pct: -2.26
    - name: "VIX"
      value: 37.14
      change: 8.70
      pct: 30.59
    - name: "WTI"
      value: 83.98
      change: 0.77
      pct: 0.93
watchlistStatus:
  - code: "NVDA"
    status: "7 weeks down"
    tone: "down"
    pct: -14.01
    close: 125.53
    note: "SEC accounting report, longest slide since 2008"
  - code: "MSFT"
    status: "Soft"
    tone: "down"
    pct: -2.77
    close: 484.52
    note: "Lost $500, no company news"
  - code: "AAPL"
    status: "Defensive"
    tone: "flat"
    pct: -1.90
    close: 342.56
    note: "AI-agent report, still the smallest M7 loss"
  - code: "GOOGL"
    status: "Soft"
    tone: "down"
    pct: -2.70
    close: 265.29
    note: "Held up despite the TPU report"
  - code: "META"
    status: "Plunge"
    tone: "down"
    pct: -5.93
    close: 560.84
    note: "Lost $600 on AI spending worries"
  - code: "AMZN"
    status: "Plunge"
    tone: "down"
    pct: -4.10
    close: 246.82
    note: "Sold despite the Anthropic stake"
  - code: "TSLA"
    status: "Plunge"
    tone: "down"
    pct: -7.64
    close: 345.82
    note: "Followed the high-multiple de-rating"
  - code: "AVGO"
    status: "Plunge"
    tone: "down"
    pct: -12.19
    close: 304.41
    note: "Google said to cut TPU 8i orders 20%"
  - code: "AMD"
    status: "Plunge"
    tone: "down"
    pct: -13.25
    close: 424.39
    note: "Short report, day two"
  - code: "MU"
    status: "Plunge"
    tone: "down"
    pct: -13.89
    close: 594.51
    note: "50% below the June high"
  - code: "TSM"
    status: "Plunge"
    tone: "down"
    pct: -9.30
    close: 319.34
    note: "Taiwan market -17% on the week"
  - code: "INTC"
    status: "Plunge"
    tone: "down"
    pct: -7.97
    close: 51.28
    note: "Foundry funding worries return"
  - code: "ASML"
    status: "Plunge"
    tone: "down"
    pct: -6.63
    close: 1266.22
    note: "Selling reached the equipment names"
  - code: "ANT"
    status: "Weak"
    tone: "down"
    pct: -8.50
    close: 88.91
    note: "Closed just above the $83 IPO price"
  - code: "UNH"
    status: "Jump"
    tone: "up"
    pct: 2.90
    close: 340.08
    note: "TD Cowen upgrade, $455 target"
  - code: "DIS"
    status: "Soft"
    tone: "down"
    pct: -1.89
    close: 117.98
    note: "Drifted with the index"
watchItems:
  - tag: "Rates"
    tone: "down"
    title: "The only input left before December is PCE on the 25th"
    detail: "Futures put a quarter-point hike at 92–96% for the December 8–9 meeting. The open risk is Governor Christopher Waller's half-point suggestion; his line about needing to 'shock people' still stands, and the October minutes confirmed the Fed does not think inflation is contained. October PCE on the 25th is the last number that matters. November consumer sentiment came in at 51.5, up from 48.0 but still at recession-level readings."
    when: "PCE Nov 25 · FOMC Dec 8–9"
  - tag: "Earnings"
    tone: "event"
    title: "December 9 — Broadcom answers the Google question"
    detail: "Broadcom reports fiscal fourth-quarter results after the close on the 9th. Guidance is $34.8bn of revenue, $21.7bn of AI semiconductor revenue and a 66% non-GAAP operating margin. The test is whether management keeps the $115bn AI revenue outlook for fiscal 2027. Micron follows on December 17, with HPE and Analog Devices the week before."
    when: "December 9, after the close"
  - tag: "Regulation"
    tone: "down"
    title: "The Nvidia accounting probe — how far does it reach"
    detail: "Reuters reported that SEC enforcement staff are examining Nvidia's accounting, and the stock extended its loss from about 6% to 14%. The focus is the change in geographic revenue reporting made as Singapore sales approached half of the total. SEC enforcement chief David Woodcock said last month the agency is reviewing AI companies' disclosures. An investigation is not evidence of wrongdoing, but the same questions can be asked of every AI issuer."
    when: "Ongoing"
  - tag: "Funding"
    tone: "down"
    title: "Who pays Anthropic's $161.2bn of equipment rent"
    detail: "Anthropic's prospectus discloses $161.2bn of equipment rent excluding interest. Broadcom agreed in March to take up to $42bn of that rent in convertible notes, and on October 26 Bank of America, Blackstone, Citi and Morgan Stanley announced a $63bn SPV that will buy Broadcom accelerators and networking gear and lease it to Anthropic. Broadcom provides residual value support equal to the first-lien financing. Interest is 9%, rising to 13% with conversion at 85% of market if revenue thresholds are missed."
    when: "Every quarterly filing"
  - tag: "Technical"
    tone: "down"
    title: "Below the 200-day — what a bounce needs"
    detail: "All three indexes are under their 200-day moving averages. BTIG's Jonathan Krinsky notes that below that line the risk is to the downside, and that the last 30 years hold only three prior six-day losing streaks that closed within 3% of the average — all three bounced five days later, then fell further. A fade in volume and a lower VIX after the flush would be the first sign of a bottom."
    when: "This week"
  - tag: "Calendar"
    tone: "flat"
    title: "Thanksgiving week and thinner liquidity"
    detail: "Markets are closed November 26 and close early on November 27. AAA expects 73 million people to drive, with the national average for regular gasoline at $3.69 a gallon. Thinner volume makes index moves overshoot, and the last inflation and jobs data before the December FOMC land in this window."
    when: "November 26–27"
sources:
  - label: "Reuters — Nvidia's accounting is a focus of US SEC investigation, sources say"
    url: "https://www.reuters.com/5f374b32b07b/world/us-secs-nvidia-probe-is-examining-potential-accounting-issues-sources-say-2026-11-20/"
  - label: "CNBC — S&P 500 and Dow close in correction; Nasdaq erases 2026 gain as AI rout picks up steam"
    url: "https://www.cnbc.com/2026/11/19/stock-market-today-live-updates.html"
  - label: "CNBC — Nvidia stock plunges 14%, wraps up longest weekly losing streak since 2008"
    url: "https://www.cnbc.com/2026/11/20/nvidias-7-week-losing-streak-is-longest-since-2008-financial-crisis.html"
  - label: "Kiplinger — Nasdaq Dives 1,261 Points as Anthropic, AI Stocks Sink"
    url: "https://www.kiplinger.com/investing/stocks/nasdaq-dives-1-261-points-as-anthropic-ai-stocks-sink-stock-market-today"
  - label: "AP — S&P 500 sinks 3.7% and the Nasdaq composite goes negative for the year"
    url: "https://apnews.com/article/stock-markets-anthropic-ai-chips-boom-c4c3f4878b12989347f8a930ed813dad"
  - label: "Yahoo Finance — Nvidia drops 12%, Broadcom and AMD extend declines as the AI trade melts down"
    url: "https://finance.yahoo.com/markets/article/nvidia-amd-and-broadcom-lead-chip-stocks-lower-133658985.html"
  - label: "Yahoo Finance — Stock market today: Dow and S&P 500 enter correction, Nasdaq sinks 5%"
    url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-november-19-dow-sp-500-nasdaq-anthropic-nvidia-141644188.html"
  - label: "CNBC — Treasury yields move sharply lower as investors flee to safe havens"
    url: "https://www.cnbc.com/2026/11/20/treasury-yields-bonds-inflation.html"
  - label: "CNBC — Stocks making the biggest moves Friday: Nvidia, Anthropic, Micron, UnitedHealth and more"
    url: "https://www.cnbc.com/2026/11/20/stocks-moving-the-most-today-live-updates.html"
  - label: "Reuters — Tech stocks tumble, Treasury yields fall as traders seek refuge"
    url: "https://www.reuters.com/5f374b32b07b/world/china/global-markets-global-markets-2026-11-20/"
  - label: "CNBC (Reuters) — Gold's slide deepens as AI rout, rate hike bets hurt bullion"
    url: "https://www.cnbc.com/2026/11/20/gold-federal-reserve-price-dollar-metals.html"
  - label: "CoinDesk — Bitcoin plunges below $59,000 as rush to cash puts new bear-market lows back in play"
    url: "https://www.coindesk.com/markets/2026/11/20/bitcoin-plunges-below-usd59-000-as-rush-to-cash-puts-new-bear-market-lows-back-in-play"
  - label: "24/7 Wall St. — Micron stock plunges 13% as Barron's calls memory stocks 'agonizingly cheap'"
    url: "https://247wallst.com/investing/2026/11/20/micron-stock-plunges-13-as-barrons-calls-memory-stocks-agonizingly-cheap-western-digital-sandisk-and-seagate-sink-in-ai-chip-selloff/"
  - label: "StockAnalysis — Broadcom falls 11% after an analyst says Google cut 2027 orders for its TPU 8i chips by 20%"
    url: "https://stockanalysis.com/news/broadcom-falls-google-tpu-cut-mediatek/"
  - label: "24/7 Wall St. — Broadcom stock plunges 12% and loses $191 billion"
    url: "https://247wallst.com/investing/2026/11/20/broadcom-stock-plunges-12-and-loses-191-billion-after-a-report-that-google-cut-its-plans-for-broadcom-ai-chips/"
  - label: "CNBC — UnitedHealth has tumbled over the past three months. Why TD Cowen sees a recovery"
    url: "https://www.cnbc.com/2026/11/20/unitedhealth-td-cowen-upgrade-recovery.html"
  - label: "24/7 Wall St. — Taiwan stock market falls 6.2% to cap its worst week since 1991"
    url: "https://247wallst.com/investing/2026/11/20/taiwan-stock-market-falls-6-2-to-cap-its-worst-week-since-1991-as-kospi-closes-down-5-2-and-nikkei-225-drops-5-1-in-ai-chip-selloff/"
  - label: "Anthropic — IPO pricing prospectus (SEC, 2026-11-18)"
    url: "https://www.sec.gov/Archives/edgar/data/2130357/000162828026074937/anthropicpbc-fwppricing.htm"
---

## The session — three indexes entered correction on the same day

The S&P 500 fell <strong>265.44 points, or 3.70%, to 6,910.39</strong>. It was a seventh straight decline, the longest since February 2020, and it took the index 11.6% below the October 6 record close of 7,818.93 — a correction. The Dow lost <strong>949.73 points (-1.93%)</strong> to <strong>48,147.33</strong>, its lowest close in seven months, and joined it. The Nasdaq dropped <strong>5.28% (-1,261.47)</strong> to <strong>22,617.73</strong>, giving back every point it had gained this year (now -2.7% year to date), while the Nasdaq-100 traded more than 20% below its high and entered a bear market on an intraday basis. The Philadelphia Semiconductor Index fell <strong>10.73% (-1,011.13)</strong> to <strong>8,408.59</strong>, with most members down by double digits.

The week was worse than the day. The S&P 500 lost 8.6%, the Dow 8.0% and the Nasdaq 10.0%. For the S&P 500 that was the worst week since the tariff shock of April 2025; for the Dow, the worst since March 2020.

The trigger was Anthropic's listing. Priced at $83 on 980 million shares to raise $81.3bn, the stock had jumped 17% on its debut; on its second day it fell <strong>8.50% to $88.91</strong>, trading as low as $83.05 and sitting at $88 in after-hours trading. The disappointment was less about Anthropic than about everything around it. Money that wanted the new AI stock had to come from somewhere, and the selling started with the open. A debut that ended up 17% became the excuse to take profits a day later.

The second blow was Nvidia. Reuters reported that SEC enforcement staff are examining the company's accounting, and the stock went from down about 6% to down 14%. The focus is the change in geographic revenue reporting made as Singapore sales approached half of the total — a change that drew fresh scrutiny once the company's leadership crisis put its disclosures under a microscope. With the Justice Department also reviewing the Hugging Face deal and the wider question of how chipmakers finance their customers, the whole semiconductor complex reacted to two words: accounting and funding.

The third was the Fed. The October minutes confirmed officials are confident about a December hike and see AI as a material source of inflation risk. Governor Waller repeated that a half-point move may be needed, and futures price 25bp at 92–96%. November consumer sentiment rose to 51.5 from 48.0, but that is still a recession-level reading.

Money did not leave only equities. The 10-year Treasury yield fell to <strong>4.932% (-12bp)</strong>, the 2-year to 4.634% (-14bp) and the 30-year to 5.316% (-8bp). Gold fell <strong>2.8% to $3,518.50 an ounce</strong>, its lowest since September 2025 and down 9.5% on the week, its worst in eight months. Silver lost 3.8% to $41.12, 66% below January's record of $121.64. Bitcoin broke below $59,000 and about $1.5bn of leveraged crypto positions were liquidated in 24 hours. Crude was the exception: WTI settled at <strong>$83.98 (+0.93%)</strong>, though it lost 5.2% on the week.

Sector direction was unambiguous. Technology fell 7.1% and consumer discretionary 2.9%, while consumer staples and healthcare rose. Walmart (+1.5%), Costco (+0.8%), Johnson & Johnson and Procter & Gamble (each about +1%), General Mills (up 5% intraday) and McCormick (+4%) drew the money that wanted out of AI. Seventy-one of the 101 stocks in the Nasdaq-100 are now in bear markets, including all 20 semiconductor and memory names.

In Asia, Korea and Japan each fell more than 5% and Taiwan's Taiex lost 17% on the week, its worst since 1990; Samsung closed down about 7% and SK Hynix about 6%. The previous US session simply moved east.

The VIX jumped <strong>30.59% to 37.14</strong>, touching 40.03 during the session — the first time since late March it has traded well above 30. The won closed at <strong>1,345.92 per dollar (+0.89%)</strong>.

## Mega-caps, semis and single-name movers

### NVDA · Nvidia

<strong>$125.53 (-14.01%)</strong>, a seventh straight daily loss and a seventh straight weekly loss, the longest streak since the 2008 financial crisis. The stock is down 46% over those seven weeks, about $2.6tn of market value gone, and it is now the fourth-largest US company behind Apple, Microsoft and Alphabet. It is down 33% in November alone. Results beat last week and guidance for next fiscal year was raised to 75% growth, but the selling was never about the numbers: it is about the empty seat left by Jensen Huang and the SEC report. At 8.4 times forward earnings it trades at a third of AMD's 29 times. It rebounded to about $128 after hours.

### MSFT · Microsoft

<strong>$484.52 (-2.77%)</strong>. It lost the $500 line without any company news, caught between the Fed's warnings on AI capital spending and the portfolio reshuffle that followed Anthropic's listing. Reports that Microsoft and Meta are not cutting server CPU orders helped Intel's story, not its own share price.

### AAPL · Apple

<strong>$342.56 (-1.90%)</strong>, the smallest loss in the M7. Bloomberg reported that Apple is building an autonomous AI agent that can operate devices, apps, browsing and coding — read as a competitive threat rather than a catalyst. Being outside the AI capex argument meant less to sell.

### GOOGL · Alphabet

<strong>$265.29 (-2.70%)</strong>. The company at the centre of the chip report held up better than the sector, trading flat for part of the session. Alphabet is the largest buyer in the $26bn private placement that accompanied Anthropic's IPO, at $10bn, and it has a contract to buy Broadcom networking components through 2031. Moving some orders to MediaTek does not reduce total spending, which is how the market read it.

### META · Meta Platforms

<strong>$560.84 (-5.93%)</strong>, back below $600. This is a spending story: Broadcom begins high-volume shipments of Meta's MTIA inference chip in the December quarter, and the bill arrives with the silicon.

### AMZN · Amazon

<strong>$246.82 (-4.10%)</strong>. It owns Anthropic stock and has lent the company money, yet AWS capex weighed more on the day. It also participated in the private placement.

### TSLA · Tesla

<strong>$345.82 (-7.64%)</strong>. No company news; it simply followed the de-rating of high-multiple growth names.

### AVGO · Broadcom

<strong>$304.41 (-12.19%)</strong>, having traded as low as $301.72, with $191bn of market value gone in a session. TF International's Ming-Chi Kuo said Google had cut its 2027 plans for Broadcom-designed TPU 8i chips by about one million units, roughly 20%. Layered on top: Broadcom's exposure to Anthropic as a lender of up to $42bn and a buyer of $1bn of stock. The shares are 36% below the June 2 record close of $481.57. The detail is today's spotlight.

### AMD · Advanced Micro Devices

<strong>$424.39 (-13.25%)</strong>, a second double-digit loss after Thursday's 7.72% slide on a short-seller report. The company rejected the report immediately, but a rejection does not hold a price on a day when the entire sector is being sold. It was already down 7% before the opening bell.

### MU · Micron

<strong>$594.51 (-13.89%)</strong>, half the June 25 record close of $1,213.56. Barron's argued the stock trades at 3.8 times forward earnings and called memory "agonizingly cheap"; buyers did not appear. More than 75% of 2027 output is already committed, and the stock trades at 8 times the $75.28 of adjusted EPS booked over the last four quarters. Results are December 17. SanDisk fell 16.1% after its 8-for-1 split took effect and TrendForce said NAND contract prices will start falling in the first quarter of 2027.

### TSM · TSMC

<strong>$319.34 (-9.30%)</strong>. Taiwan's market lost 17% on the week, its worst since 1990. There was no news about foundry demand itself, but this is the first place a report about AI chip orders lands.

### INTC · Intel

<strong>$51.28 (-7.97%)</strong>, with an intraday low of $51.10. The funding burden of the foundry roadmap and the slow pace of landing outside customers came back into focus. Its 52-week range is $32.89 to $142.35, so two-thirds of the value from the high is gone.

### ASML · ASML

<strong>$1,266.22 (-6.63%)</strong>. Selling reached the equipment makers on concern that next year's capex plans will be trimmed.

### ANT · Anthropic

<strong>$88.91 (-8.50%)</strong>, barely above the $83 offer price after touching $83.05 during the session. The concurrent private placement drew $10bn each from Google and Nvidia, $2.5bn from AMD, $1bn each from Broadcom, Micron and Microsoft, and $500m from TSMC. Those Class N shares were not part of the offering and are not covered by the underwriters' lock-ups. Whether the offer price holds will set the direction for the stock and, with it, the flow into large AI names.

### CRWV · CoreWeave / NBIS · Nebius

CoreWeave and Nebius fell roughly 9–11% intraday. The neoclouds are sensitive to the cost of capital, and the money to buy Anthropic had to come from somewhere.

### UNH · UnitedHealth

<strong>$340.08 (+2.90%)</strong>. TD Cowen upgraded the stock to buy from hold, raised its target to $455 from $402 and named it a 2027 best idea, pointing to an Optum Health recovery and better Medicare Advantage margins on a path to mid-to-high-teens EPS growth through 2028. The stock had fallen 14% in three months, which gave the call room to work.

### WMT · Walmart

<strong>+1.5%</strong>, erasing Thursday's post-earnings drop. UBS highlighted steady share gains, better incremental margins and improving e-commerce economics. Costco added 0.8%.

### DIS · Walt Disney

<strong>$117.98 (-1.89%)</strong>. No company news; it drifted with the index a day after setting a 52-week high.

## What to check next

<!-- Rendered from the watchItems in the frontmatter. -->

## Sources

- [Reuters — Nvidia's accounting is a focus of US SEC investigation, sources say](https://www.reuters.com/5f374b32b07b/world/us-secs-nvidia-probe-is-examining-potential-accounting-issues-sources-say-2026-11-20/)
- [CNBC — S&P 500 and Dow close in correction; Nasdaq erases 2026 gain as AI rout picks up steam](https://www.cnbc.com/2026/11/19/stock-market-today-live-updates.html)
- [CNBC — Nvidia stock plunges 14%, wraps up longest weekly losing streak since 2008](https://www.cnbc.com/2026/11/20/nvidias-7-week-losing-streak-is-longest-since-2008-financial-crisis.html)
- [Kiplinger — Nasdaq Dives 1,261 Points as Anthropic, AI Stocks Sink](https://www.kiplinger.com/investing/stocks/nasdaq-dives-1-261-points-as-anthropic-ai-stocks-sink-stock-market-today)
- [AP — S&P 500 sinks 3.7% and the Nasdaq composite goes negative for the year](https://apnews.com/article/stock-markets-anthropic-ai-chips-boom-c4c3f4878b12989347f8a930ed813dad)
- [Yahoo Finance — Nvidia drops 12%, Broadcom and AMD extend declines as the AI trade melts down](https://finance.yahoo.com/markets/article/nvidia-amd-and-broadcom-lead-chip-stocks-lower-133658985.html)
- [Yahoo Finance — Stock market today: Dow and S&P 500 enter correction, Nasdaq sinks 5%](https://finance.yahoo.com/markets/live/stock-market-today-friday-november-19-dow-sp-500-nasdaq-anthropic-nvidia-141644188.html)
- [CNBC — Treasury yields move sharply lower as investors flee to safe havens](https://www.cnbc.com/2026/11/20/treasury-yields-bonds-inflation.html)
- [CNBC — Stocks making the biggest moves Friday: Nvidia, Anthropic, Micron, UnitedHealth and more](https://www.cnbc.com/2026/11/20/stocks-moving-the-most-today-live-updates.html)
- [Reuters — Tech stocks tumble, Treasury yields fall as traders seek refuge](https://www.reuters.com/5f374b32b07b/world/china/global-markets-global-markets-2026-11-20/)
- [CNBC (Reuters) — Gold's slide deepens as AI rout, rate hike bets hurt bullion](https://www.cnbc.com/2026/11/20/gold-federal-reserve-price-dollar-metals.html)
- [CoinDesk — Bitcoin plunges below $59,000 as rush to cash puts new bear-market lows back in play](https://www.coindesk.com/markets/2026/11/20/bitcoin-plunges-below-usd59-000-as-rush-to-cash-puts-new-bear-market-lows-back-in-play)
- [24/7 Wall St. — Micron stock plunges 13% as Barron's calls memory stocks 'agonizingly cheap'](https://247wallst.com/investing/2026/11/20/micron-stock-plunges-13-as-barrons-calls-memory-stocks-agonizingly-cheap-western-digital-sandisk-and-seagate-sink-in-ai-chip-selloff/)
- [StockAnalysis — Broadcom falls 11% after an analyst says Google cut 2027 orders for its TPU 8i chips by 20%](https://stockanalysis.com/news/broadcom-falls-google-tpu-cut-mediatek/)
- [24/7 Wall St. — Broadcom stock plunges 12% and loses $191 billion](https://247wallst.com/investing/2026/11/20/broadcom-stock-plunges-12-and-loses-191-billion-after-a-report-that-google-cut-its-plans-for-broadcom-ai-chips/)
- [CNBC — UnitedHealth has tumbled over the past three months. Why TD Cowen sees a recovery](https://www.cnbc.com/2026/11/20/unitedhealth-td-cowen-upgrade-recovery.html)
- [24/7 Wall St. — Taiwan stock market falls 6.2% to cap its worst week since 1991](https://247wallst.com/investing/2026/11/20/taiwan-stock-market-falls-6-2-to-cap-its-worst-week-since-1991-as-kospi-closes-down-5-2-and-nikkei-225-drops-5-1-in-ai-chip-selloff/)
- [Anthropic — IPO pricing prospectus (SEC, 2026-11-18)](https://www.sec.gov/Archives/edgar/data/2130357/000162828026074937/anthropicpbc-fwppricing.htm)
