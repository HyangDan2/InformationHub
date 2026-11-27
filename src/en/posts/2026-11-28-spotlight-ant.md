---
title: "US Markets Spotlight · ANT — Anthropic retakes its IPO price in three sessions"
date: 2026-11-28T06:50:00+09:00
channel: "us-markets"
navSection: "us-markets"
reportKind: "spotlight"
summary: "Four sessions into its life as a public company, Anthropic fell below its offer price. On Friday it rose 10.98% to $91.88 and closed above $83 for the first time since Monday. Third-quarter revenue was $16.96 billion, up 47% on the prior quarter and 1,127% from a year earlier, and the October run rate was $81 billion. The same quarter returned an operating loss of $567 million as compute costs climbed back to 58% of revenue. Committed compute spend is $900.9 billion, of which $70.7 billion is due within twelve months. Market capitalisation is about $1.2 trillion on outstanding shares and about $1.7 trillion fully diluted."
tickers: ["ANT", "GOOGL", "AMZN", "MSFT", "NVDA", "META", "SPCX"]
spotlight:
  snapshot:
    - { label: "Close", value: "$91.88", note: "+10.98% · best day since listing", tone: "up" }
    - { label: "Market cap", value: "About $1.2T", note: "$1.7T fully diluted" }
    - { label: "IPO", value: "$83 a share", note: "980M shares · $81.3B raised" }
    - { label: "Q3 revenue", value: "$16.96B", note: "+47% QoQ · +1,127% YoY", tone: "up" }
    - { label: "Q3 operating income", value: "-$567M", note: "+$2.46B adjusted", tone: "down" }
    - { label: "Run-rate revenue", value: "$81B", note: "At October 31 · up $10B in a month" }
    - { label: "Nine-month revenue", value: "$33.24B", note: "Up about 1,200% year over year" }
    - { label: "Committed compute", value: "$900.9B", note: "$70.7B due within 12 months", tone: "down" }
    - { label: "Customers over $100k", value: "11,900", note: "From the 1,500s at the end of 2025" }
    - { label: "Net revenue retention", value: "About 900%", note: "As of September 30" }
    - { label: "Analyst targets", value: "$105-155", note: "All five new initiations at buy" }
  charts:
    - title: "Quarterly revenue"
      unit: "$bn"
      caption: "Revenue went from $1.38 billion a year earlier to $16.96 billion. The sequential rate, though, has fallen from 132% in Q1 and 144% in Q2 to 47% in Q3, as the base grew."
      rows:
        - { label: "Q1 2025", sub: "reported", value: 0.38, digits: 2, note: "reported" }
        - { label: "Q2 2025", sub: "reported", value: 0.79, digits: 2, note: "reported" }
        - { label: "Q3 2025", sub: "reported", value: 1.38, digits: 2, note: "reported" }
        - { label: "Q4 2025", sub: "reported", value: 2.04, digits: 2, note: "reported" }
        - { label: "Q1 2026", sub: "reported", value: 4.73, digits: 2, note: "+132% QoQ" }
        - { label: "Q2 2026", sub: "reported", value: 11.56, digits: 2, note: "+144% QoQ" }
        - { label: "Q3 2026", sub: "reported", value: 16.96, digits: 2, note: "+47% QoQ", subject: true }
    - title: "Compute and infrastructure cost"
      unit: "% of revenue"
      caption: "Through 2025 the company spent more than twice its revenue on compute. That fell to 48% in Q2, which produced its first operating profit, then rose back to 58% in Q3 — the direct cause of the return to an operating loss. Profit here is the gap between revenue growth and the cost of compute."
      rows:
        - { label: "Q1 2025", sub: "reported", value: 251, digits: 0, note: "reported" }
        - { label: "Q2 2025", sub: "reported", value: 177, digits: 0, note: "reported" }
        - { label: "Q3 2025", sub: "reported", value: 148, digits: 0, note: "reported" }
        - { label: "Q4 2025", sub: "reported", value: 144, digits: 0, note: "reported" }
        - { label: "Q1 2026", sub: "reported", value: 72, digits: 0, note: "reported" }
        - { label: "Q2 2026", sub: "reported", value: 48, digits: 0, note: "first operating profit" }
        - { label: "Q3 2026", sub: "reported", value: 58, digits: 0, note: "back up", subject: true }
    - title: "Operating margin"
      unit: "%"
      caption: "From -224% a year earlier to +8% in Q2 and back to -3% in Q3. Adjusted for stock compensation and the $1.5 billion copyright settlement, the margin was 19% in Q2 and 15% in Q3. The first test as a public company is holding that adjusted margin in cash terms."
      rows:
        - { label: "Q1 2025", sub: "reported", value: -249, digits: 0, note: "reported" }
        - { label: "Q2 2025", sub: "reported", value: -152, digits: 0, note: "reported" }
        - { label: "Q3 2025", sub: "reported", value: -224, digits: 0, note: "reported" }
        - { label: "Q4 2025", sub: "reported", value: -139, digits: 0, note: "reported" }
        - { label: "Q1 2026", sub: "reported", value: -35, digits: 0, note: "reported" }
        - { label: "Q2 2026", sub: "reported", value: 8, digits: 0, note: "first profit" }
        - { label: "Q3 2026", sub: "reported", value: -3, digits: 0, note: "15% adjusted", subject: true }
    - title: "Price since listing"
      unit: "$"
      caption: "It opened at $111.50 on the 19th and closed at $97.17, then fell to $81.91 within five sessions. Friday's $91.88 is the highest close since the debut but about 20% below the first-day high."
      rows:
        - { label: "Nov 19", sub: "debut", value: 97.17, digits: 2, note: "+17% over IPO" }
        - { label: "Nov 20", sub: "close", value: 88.91, digits: 2, note: "-8.50%" }
        - { label: "Nov 23", sub: "close", value: 87.64, digits: 2, note: "-1.43%" }
        - { label: "Nov 24", sub: "close", value: 81.91, digits: 2, note: "below IPO price" }
        - { label: "Nov 25", sub: "close", value: 82.79, digits: 2, note: "low of $73.85" }
        - { label: "Nov 27", sub: "close", value: 91.88, digits: 2, note: "+10.98%", subject: true }
watchItems:
  - tag: "Compute"
    tone: "down"
    title: "$900.9 billion committed — $70.7 billion of it in the next twelve months"
    detail: "Purchase commitments and leases total $900.9 billion, almost all of it compute and infrastructure. $451.6 billion is due by the end of 2030 and most of the rest between 2031 and 2045. The near-term burden is the $70.7 billion payable within twelve months. The company says much of this depends on its infrastructure partners — Amazon and Google among them — arranging financing and credit support, and warns that if that financing becomes unavailable or costlier, contracted capacity may be delayed, repriced, reduced or not delivered. Cash of $95.6 billion and short-term investments of $36.3 billion cover the first year comfortably; the fifth year is the question."
    when: "$451.6B to be spent by 2030"
  - tag: "Margin"
    tone: "down"
    title: "Back to an operating loss — revenue grew 47% and compute cost grew more than 100%"
    detail: "Revenue rose 47% in the third quarter and operating expenses rose faster, producing a $567 million operating loss. Compute and infrastructure cost went from 48% to 58% of revenue. Because compute is contracted 12-18 months before it becomes available, those costs are fixed in the near term: if revenue arrives later than planned, the margin absorbs it immediately. Adjusted operating income was still positive at $2.46 billion, a 15% margin, and $4.08 billion for the nine months. What the market is watching is whether that adjusted margin holds into 2027."
    when: "Q4 results · 2027 guidance"
  - tag: "Rates"
    tone: "down"
    title: "A 94-99% chance of a December 9 hike — the worst combination for a long-duration growth stock"
    detail: "A 25bp hike at the December 8-9 FOMC is priced at 94% on Kalshi and 98.9% on CME FedWatch, and Kalshi's January 27 contract puts another hike at 57%. For a stock trading at 8.5 times next year's sales, the discount rate is the price. New Street's Pierre Ferragu argued that $1.5 trillion is 8.5 times next year's revenue, \"a multiple that corresponds to a hyperscale, to a Microsoft, to a Google\" rather than to a Palantir or a Cloudflare, which limits downside. That arithmetic rests on the 2027 revenue forecast holding."
    when: "December 4 payrolls · December 9 FOMC"
  - tag: "Competition"
    tone: "flat"
    title: "Apple's own agent, and the answers from OpenAI and Google"
    detail: "One of the triggers for the first week's decline was Bloomberg's report that Apple is building its own autonomous AI agent. Anthropic's advantage is concentrated in coding and knowledge work, so an agent inside the operating system changes the route to that market. Competition runs on three levels: OpenAI in enterprise APIs and consumer apps, Google in Gemini and its own TPUs, Meta in open models and consumer agents. Google and Amazon are also Anthropic's largest compute suppliers and investors. Being a competitor and a supplier at once shapes both its cost base and its bargaining power."
    when: "Q4 results · rival product cycles"
  - tag: "Regulation"
    tone: "down"
    title: "A $1.5 billion copyright settlement, and tougher AI rules after the midterms"
    detail: "One of the items excluded from adjusted operating income is the $1.5 billion Bartz settlement that ended the authors' copyright class action. Excluding it from the adjusted measure does not stop the cash leaving. On top of that, expectations of tighter AI regulation after the Democrats' midterm win are now part of how the market prices rates. Anthropic was set up as a public benefit corporation, a structure that commits it to a public mission, but that structure does not exempt it from regulation. The company's own filing warns that rules on model safety and data use could raise costs."
    when: "Charged each quarter · legislative calendar"
  - tag: "Flows"
    tone: "down"
    title: "The greenshoe is used up, and the CEO sold stock the day after the IPO"
    detail: "The offering was six times oversubscribed and the greenshoe was exercised in full, leaving the underwriters with nothing to support the price. A filing on Monday disclosed that chief executive Dario Amodei sold 3.37 million shares, worth $280 million, the day after listing. Volume was 857 million shares on the first day and 400 million on the second. When the customary six-month lock-up expires, insider supply reaches the market. Much of the volatility of a newly listed stock is that calendar rather than the business."
    when: "First half of 2027 · lock-up expiry"
sources:
  - label: "Anthropic — S-1/A No. 3, filed November 17, 2026 (SEC)"
    url: "https://www.sec.gov/Archives/edgar/data/2130357/000162828026074338/anthropicpbc-sx1ax3.htm"
  - label: "CNBC — Anthropic releases amended IPO prospectus with Q3 financials"
    url: "https://www.cnbc.com/2026/11/02/anthropic-ant-s-1-quarter-financials.html"
  - label: "Reuters (Investing.com) — Anthropic valued at $1.5 trillion as IPO raises record $81 billion"
    url: "https://www.investing.com/news/stock-market-news/anthropic-valued-at-15-trillion-as-ipo-raises-record-81-billion-5037110"
  - label: "Reuters (Investing.com) — Anthropic's blockbuster debut tests Wall Street's faith in AI boom"
    url: "https://www.investing.com/news/stock-market-news/anthropics-blockbuster-debut-tests-wall-street-faith-in-ai-boom-5041688"
  - label: "CNBC — Anthropic IPO takeaways: ANT debuts with $1.8 trillion market cap"
    url: "https://www.cnbc.com/2026/11/19/anthropic-ipo-ant-live-updates.html"
  - label: "CNBC — Anthropic falls nearly 9% in first full day of trading"
    url: "https://www.cnbc.com/2026/11/20/anthropic-stock-ai-amd-nvidia.html"
  - label: "StockAnalysis — Anthropic jumps 11% to $91.88, back above its IPO price"
    url: "https://stockanalysis.com/news/anthropic-jumps-11-percent-back-above-ipo-price/"
  - label: "Forbes (Yahoo Finance) — Anthropic surges 11% in best day since IPO"
    url: "https://finance.yahoo.com/markets/stocks/articles/anthropic-surges-11-best-day-184457287.html"
  - label: "The AI Insider — Anthropic's S-1, dissected, part 3: business performance"
    url: "https://theaiinsider.tech/2026/11/26/anthropics-s-1-dissected-part-3-business-performance-so-far/"
  - label: "ppc.land — Anthropic's first profitable quarter came with a $66.3bn net loss"
    url: "https://ppc.land/anthropics-first-profitable-quarter-came-with-a-66-3bn-net-loss/"
  - label: "CNBC — Anthropic is ready for its IPO. Three analysts see huge gains"
    url: "https://www.cnbc.com/2026/11/19/anthropic-is-ready-for-its-ipo-three-analysts-see-huge-gains-for-the-stock.html"
  - label: "Reuters (Investing.com) — Anthropic draws bullish Wall Street calls ahead of Nasdaq debut"
    url: "https://www.investing.com/news/stock-market-news/anthropic-draws-bullish-wall-street-calls-ahead-of-nasdaq-debut-5039587"
  - label: "Yahoo Finance — Anthropic valuation is 8.5 times next year's sales"
    url: "https://finance.yahoo.com/markets/stocks/articles/anthropic-valuation-8-5-times-181612757.html"
  - label: "FinanceFeeds — ANT at $88.91: Friday's low came five cents above the IPO price"
    url: "https://financefeeds.com/anthropic-ant-stock-88-91-saturday-week-ahead-after-friday-low-tested-83-ipo-price-bull-97-bear-80/"
  - label: "RateSpike — November jobs report and the December Fed hike"
    url: "https://www.ratespike.com/articles/november-jobs-report-december-fed-hike-kalshi"
---

## The company, and where it sits in the chain

Anthropic was founded in 2021 as a US frontier AI research and development company. Its main products are the Claude models and Claude Code, a coding agent for developers, and revenue arrives two ways: usage-based fees from enterprises and developers, and subscriptions. It lists on Nasdaq as a public benefit corporation, a structure that obliges it to weigh a public mission alongside shareholder returns. That means two objectives rather than one.

In the value chain it buys chips, builds models and sells the output. It uses Nvidia's Blackwell, Google's TPUs and Amazon's training and inference silicon. It does not build data centres; it buys capacity on long-term contracts from cloud providers such as Google and Amazon. The $900.9 billion of compute commitments in the filing is the total of those contracts, spent over the next two decades.

On the selling side there are two kinds of customer. Individuals and small developers come through subscriptions and usage; large companies come through the API and Claude Code. Customers spending at least $100,000 a year reached 11,900 at the end of September, from the 1,500s at the end of last year. Net revenue retention of about 900% means existing customers spend nine times what they did a year earlier — a rate almost unheard of in enterprise software. It also comes from a young customer base, and more usage means more compute.

Competition runs on three levels. On models it competes with OpenAI, Google's Gemini and Meta's open models. On distribution it depends on the Microsoft and Amazon cloud marketplaces and on Apple's operating system. On cost, Google and Amazon are its suppliers. Being a competitor, a supplier and an investor at the same time works against its bargaining power.

## The quarter, and the numbers that matter

Third-quarter revenue was <strong>$16.96 billion</strong>, up 47% from $11.56 billion in the second quarter and <strong>1,127%</strong> from $1.38 billion a year earlier. Nine-month revenue was $33.24 billion, roughly twelve times the prior year. Run-rate revenue reached <strong>$81 billion</strong> at the end of October, up from $71 billion a month earlier.

Cost is the problem. Compute and infrastructure cost rose to <strong>58%</strong> of revenue from 48%. That lower figure is what produced <strong>$974 million</strong> of operating income in the second quarter, the company's first profitable quarter. In the third quarter it returned to a <strong>$567 million operating loss</strong>. Adjusted for stock compensation and the $1.5 billion copyright settlement, operating income was $2.46 billion in the third quarter, a 15% margin, and $2.24 billion, a 19% margin, in the second. Adjusted operating income for the nine months was $4.08 billion, against a $3.13 billion loss a year earlier.

The net loss is far larger. The third quarter lost <strong>$23.29 billion</strong> and the nine months <strong>$104 billion</strong>, mostly from changes in the fair value of convertible notes and derivative liabilities rather than cash. The company had raised $141.1 billion through September 30, and held $95.6 billion of cash and $36.3 billion of short-term investments.

The IPO changed the balance sheet in one step. It sold 980 million shares at <strong>$83</strong> to raise $81.3 billion, and added a $26 billion private placement for a total deal of $107.3 billion, the largest on record. The book was six times oversubscribed and the price was set above the $70-78 range. Fully diluted value at pricing was $1.5 trillion.

## What happened overnight, and the competitive picture

The stock closed at <strong>$91.88 (+10.98%)</strong> on Friday, its best day since listing, back above the $83 offer price after three sessions. It opened at $84.83 and traded as high as $93.11. On the debut it opened at $111.50 and closed at $97.17, then fell 8.5% on the 20th, 1.43% on the 23rd and 6.54% on the 24th to $81.91, and traded as low as $73.85 on the 25th. Friday's close is 24% above that low and 5.4% below the debut close.

There was no company-specific news behind Friday's move. It was a risk-on day: the Nasdaq rose 2.31% and the SOX 4.69%, and money went into the AI names that had been sold hardest this month, with Micron up 7.60% and Sandisk 15.96% in the same direction. Participants described the decline as being about price rather than the business. Robert Pavlik of Dakota Wealth said investors do not seem to think anything is fundamentally wrong with the company, its management or its business — "they are just sceptical about this market." David Miller of Catalyst Funds said investors "still believe in AI, but are becoming more selective about the price they are willing to pay for that growth."

Three things drove the first week's fall. Bloomberg reported that Apple is building its own AI agent. A broad selloff in AI shares followed reporting around Nvidia's accounting and export issues. And rate expectations kept rising. Positioning did the rest: the greenshoe was used in full, leaving no underwriter support, and a Monday filing showed the chief executive had sold 3.37 million shares, worth $280 million, the day after listing.

Wall Street is still constructive. All five new initiations are buy-rated: Melius at $155, Needham at $150, Wolfe at $135, Citizens at $125 and New Street at $105. Citizens models 2026 revenue of $52.5 billion, $137.0 billion in 2027 and $417.8 billion in 2029; Melius and Citizens both see revenue above $400 billion by 2029. The stock trades 12% below even the lowest of those targets.

## Checkpoints and risks

In one sentence: the revenue is proven and the cost is not. Through the third quarter the numbers show that demand is real. What remains open is whether the cost of serving that demand can grow more slowly than the revenue. In the third quarter the answer was briefly no, and the stock went below its offer price.

The first checkpoint is fourth-quarter and 2027 guidance. When the company reports for the first time, probably in the December-to-January window, the market will look at the direction of compute cost as a share of revenue before it looks at the growth rate. The second is how the $900.9 billion of commitments is financed; much of it leans on credit support from Google and Amazon, and the company itself warns that capacity can be delayed or repriced if that support fails. The third is the rate path beyond December, now that a hike is settled.

The fourth is how competition changes shape. If Apple puts an agent inside the operating system and Microsoft attaches OpenAI models to its own cloud, distribution decides revenue more than model quality does. Anthropic depends on Google and Amazon for that distribution. The fifth is the lock-up: 857 million shares traded on the first day, but insider supply is still locked.

Finally, the stock has become the barometer for the whole AI trade. It rose 17% on its first day while the index fell more than 2%, and AI shares fell together on the day it broke its offer price. As the first purely AI company to list, its price sets the discount rate that other AI names are measured against.

## Sources

- [Anthropic — S-1/A No. 3, filed November 17, 2026 (SEC)](https://www.sec.gov/Archives/edgar/data/2130357/000162828026074338/anthropicpbc-sx1ax3.htm)
- [CNBC — Anthropic releases amended IPO prospectus with Q3 financials](https://www.cnbc.com/2026/11/02/anthropic-ant-s-1-quarter-financials.html)
- [Reuters — Anthropic valued at $1.5 trillion as IPO raises record $81 billion](https://www.investing.com/news/stock-market-news/anthropic-valued-at-15-trillion-as-ipo-raises-record-81-billion-5037110)
- [Reuters — Anthropic's blockbuster debut tests Wall Street's faith in AI boom](https://www.investing.com/news/stock-market-news/anthropics-blockbuster-debut-tests-wall-street-faith-in-ai-boom-5041688)
- [CNBC — Anthropic IPO takeaways](https://www.cnbc.com/2026/11/19/anthropic-ipo-ant-live-updates.html)
- [CNBC — Anthropic falls nearly 9% in first full day of trading](https://www.cnbc.com/2026/11/20/anthropic-stock-ai-amd-nvidia.html)
- [StockAnalysis — Anthropic jumps 11% to $91.88](https://stockanalysis.com/news/anthropic-jumps-11-percent-back-above-ipo-price/)
- [Forbes (Yahoo Finance) — Anthropic surges 11% in best day since IPO](https://finance.yahoo.com/markets/stocks/articles/anthropic-surges-11-best-day-184457287.html)
- [The AI Insider — Anthropic's S-1, dissected, part 3](https://theaiinsider.tech/2026/11/26/anthropics-s-1-dissected-part-3-business-performance-so-far/)
- [ppc.land — Anthropic's first profitable quarter came with a $66.3bn net loss](https://ppc.land/anthropics-first-profitable-quarter-came-with-a-66-3bn-net-loss/)
- [CNBC — Anthropic is ready for its IPO. Three analysts see huge gains](https://www.cnbc.com/2026/11/19/anthropic-is-ready-for-its-ipo-three-analysts-see-huge-gains-for-the-stock.html)
- [Reuters — Anthropic draws bullish Wall Street calls](https://www.investing.com/news/stock-market-news/anthropic-draws-bullish-wall-street-calls-ahead-of-nasdaq-debut-5039587)
- [Yahoo Finance — Anthropic valuation is 8.5 times next year's sales](https://finance.yahoo.com/markets/stocks/articles/anthropic-valuation-8-5-times-181612757.html)
- [FinanceFeeds — ANT at $88.91](https://financefeeds.com/anthropic-ant-stock-88-91-saturday-week-ahead-after-friday-low-tested-83-ipo-price-bull-97-bear-80/)
- [RateSpike — November jobs report and the December Fed hike](https://www.ratespike.com/articles/november-jobs-report-december-fed-hike-kalshi)
