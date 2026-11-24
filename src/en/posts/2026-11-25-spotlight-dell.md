---
title: "US Markets Spotlight · DELL — a $132.3 billion backlog, and a share price cut in half"
date: 2026-11-25T06:50:00+09:00
channel: "us-markets"
navSection: "us-markets"
reportKind: "spotlight"
summary: "Revenue of $54.94 billion (+103%) and adjusted EPS of $9.45 (+265%). AI server revenue rose 291% to $22 billion, $60.2 billion of new orders lifted the backlog to $132.3 billion, and guidance for the year went to $202 billion — the third raise this year. The stock still fell 11.83% the day before the print and could not hold a direction after it. The fourth-quarter guide lifts revenue 2.5% while cutting earnings per share by 11%."
tickers: ["DELL", "NVDA", "HPE", "HPQ", "MU", "INTC"]
spotlight:
  snapshot:
    - { label: "Close", value: "$295.28", note: "-11.83% · day before results", tone: "down" }
    - { label: "Market cap", value: "~$188B", note: "Up 124% in a year" }
    - { label: "Q3 revenue", value: "$54.94B", note: "+103% · third straight record" }
    - { label: "Q3 EPS", value: "$9.45", note: "Non-GAAP · +265%" }
    - { label: "AI server revenue", value: "$22.0B", note: "+291% · 40% of total" }
    - { label: "AI orders · backlog", value: "$60.2B · $132.3B", note: "Backlog up $37.3B in a quarter", tone: "up" }
    - { label: "Q4 guidance", value: "$56.3B", note: "EPS $8.40 · below Q3", tone: "down" }
    - { label: "FY27 revenue guide", value: "$202B", note: "Third raise · +78%" }
    - { label: "ISG operating margin", value: "17.0%", note: "From 12.4% a year ago, 15.0% in Q2", tone: "up" }
    - { label: "Forward P/E", value: "~10x", note: "On FY27 EPS of $29.68" }
    - { label: "From the high", value: "-50.4%", note: "$595.51 → $295.28", tone: "down" }
  charts:
    - title: "Quarterly revenue"
      unit: "$ billions"
      caption: "Revenue has doubled from $27.0 billion a year ago. The $56.3 billion fourth quarter is company guidance."
      rows:
        - { label: "FQ3 2026", sub: "year-ago quarter", value: 27.01, digits: 2, note: "actual" }
        - { label: "FQ4 2026", sub: "ended January", value: 33.32, digits: 2, note: "actual" }
        - { label: "FQ1 2027", sub: "ended May 1", value: 43.84, digits: 2, note: "+88%" }
        - { label: "FQ2 2027", sub: "ended July 31", value: 46.97, digits: 2, note: "+58%" }
        - { label: "FQ3 2027", sub: "ended October 30", value: 54.94, digits: 2, note: "+103%", subject: true }
        - { label: "FQ4 2027", sub: "guidance", value: 56.30, digits: 2, note: "outlook" }
    - title: "AI server revenue"
      unit: "$ billions"
      caption: "AI servers sat in the $16 billion range for two quarters, then jumped to $22.0 billion in the third. The first three quarters add up to $54.5 billion; the full-year guide is $78 billion."
      rows:
        - { label: "FQ2 2026", sub: "year-ago April quarter", value: 8.21, digits: 2, note: "actual" }
        - { label: "FQ3 2026", sub: "year-ago July quarter", value: 5.64, digits: 2, note: "actual" }
        - { label: "FQ4 2026", sub: "ended January", value: 8.95, digits: 2, note: "actual" }
        - { label: "FQ1 2027", sub: "ended May 1", value: 16.13, digits: 2, note: "+757%" }
        - { label: "FQ2 2027", sub: "ended July 31", value: 16.40, digits: 2, note: "+100%" }
        - { label: "FQ3 2027", sub: "ended October 30", value: 22.03, digits: 2, note: "+291%", subject: true }
    - title: "AI server backlog"
      unit: "$ billions · quarter end"
      caption: "Backlog went from $95.0 billion in the second quarter to $132.3 billion. Orders in those quarters were $24.4 billion, $60.9 billion and $60.2 billion."
      rows:
        - { label: "FQ1 2027", sub: "record at the time", value: 51.3, digits: 1, note: "orders $24.4B" }
        - { label: "FQ2 2027", sub: "record at the time", value: 95.0, digits: 1, note: "orders $60.9B" }
        - { label: "FQ3 2027", sub: "record", value: 132.3, digits: 1, note: "orders $60.2B", subject: true }
    - title: "Q3 revenue by business"
      unit: "$ billions"
      caption: "Infrastructure, which holds AI and traditional servers, is 76% of revenue. Client solutions, the PC business, grew 3% with operating income down 6%."
      rows:
        - { label: "AI servers", sub: "infrastructure", value: 22.03, digits: 2, note: "40%" }
        - { label: "Traditional servers & networking", sub: "infrastructure", value: 15.01, digits: 2, note: "27%" }
        - { label: "Storage", sub: "infrastructure", value: 4.93, digits: 2, note: "9%" }
        - { label: "Client solutions", sub: "PCs · monitors", value: 12.89, digits: 2, note: "23%" }
    - title: "Earnings per share"
      unit: "$ · non-GAAP"
      caption: "Quarterly profit went from $2.59 to $9.45. The fourth-quarter guide of $8.40 is a number where revenue rises and earnings fall."
      rows:
        - { label: "FQ3 2026", sub: "year-ago quarter", value: 2.59, digits: 2, note: "actual" }
        - { label: "FQ4 2026", sub: "ended January", value: 3.87, digits: 2, note: "actual" }
        - { label: "FQ1 2027", sub: "actual", value: 4.86, digits: 2, note: "+214%" }
        - { label: "FQ2 2027", sub: "actual", value: 7.04, digits: 2, note: "+203%" }
        - { label: "FQ3 2027", sub: "actual", value: 9.45, digits: 2, note: "+265%", subject: true }
        - { label: "FQ4 2027", sub: "guidance", value: 8.40, digits: 2, note: "outlook" }
watchItems:
  - tag: "Earnings"
    tone: "next"
    title: "Late February — does the margin return to 16%?"
    detail: "Dell guided the fourth quarter, which ends January 30, to $56.3 billion of revenue and $8.40 of adjusted EPS. Revenue rises $6.3 billion while earnings per share fall $1.05. With the third quarter's operating margin at 13.5% and the infrastructure segment at 17.0%, whether the fourth quarter holds that level is the most direct answer to how durable this company's profit is. The guidance implies roughly $23.5 billion of AI server revenue in the quarter."
    when: "Late February 2027 · Dell fourth-quarter results"
  - tag: "Costs"
    tone: "down"
    title: "Memory contracts up 25–45% — the force that lifts revenue and cuts profit"
    detail: "AI server suppliers are reported to be seeking 25–45% price increases on contracts already agreed. Dell said on its first-quarter call that demand exceeds supply and that memory is the primary constraint. Passing costs through raises the top line and squeezes the margin. That was exactly the argument Barclays used to downgrade the stock in October. How much Dell passes on and how much it absorbs decides the direction of margins in the fourth quarter and fiscal 2028."
    when: "Every quarter · fourth-quarter results"
  - tag: "Backlog"
    tone: "event"
    title: "What a $132.3 billion backlog is worth — credit, power and land"
    detail: "Management stresses that every order is vetted for customer credit, access to capital, land and power. That is a claim that the backlog is not padded with orders from shaky buyers. It also admits that conversion depends on customers' data-centre readiness. The neocloud share of the backlog and the deposit terms are the details to look for in the next filings."
    when: "Fourth-quarter results · 10-K"
  - tag: "PCs"
    tone: "down"
    title: "The PC business has already stopped growing"
    detail: "Client solutions revenue rose 3% with operating income down 6%. In the second quarter it grew 20%, so growth stalled within two quarters. Intel expects the 2026 PC market to shrink 12% with second-half units down more than 20% in its guidance, and Gartner put third-quarter global shipments down 22.4%. HP has AI PCs at 60% of shipments but saw operating margin fall to 5.3% from 6.6%. AI servers can carry a lot, but not indefinitely."
    when: "Fourth-quarter results · device makers' guidance"
  - tag: "Competition"
    tone: "flat"
    title: "Foxconn and 50% ODM direct — the brand share can erode"
    detail: "ODM direct vendors took 50.2% of server revenue in the first quarter of 2026, down from 64.1% a year earlier but still half the market. Dell is the largest branded vendor at 16.5%, and reached 46.7% of the OEM AI server market. GF Securities notes, though, that Dell lost part of SpaceX's VR200 volume to Foxconn. The more hyperscalers buy direct, the smaller the branded slice becomes."
    when: "Quarterly share data"
  - tag: "Flows"
    tone: "down"
    title: "$3.5 billion of insider selling, and a 200-day still overhead"
    detail: "Insider sales have topped $3.5 billion over the past year with no purchases. On October 15, Silver Lake affiliates disclosed selling heavily near the high. The stock trades below both its 50-day ($467) and 200-day ($349) averages. Fourteen of 21 analysts rate it a buy with an average target of $569, but Morgan Stanley cut its target to $403 and stays at Hold."
    when: "Quarterly filings · reclaiming the averages"
sources:
  - label: "Dell — Third Quarter Fiscal 2027 Financial Results"
    url: "https://www.businesswire.com/news/home/20261124456824/en/Dell-Technologies-Delivers-Third-Quarter-Fiscal-2027-Financial-Results"
  - label: "Reuters (Investing.com) — Dell lifts annual forecasts after record quarter on surging AI server demand"
    url: "https://www.investing.com/news/stock-market-news/dell-lifts-annual-forecasts-after-record-quarter-on-surging-ai-server-demand-5049024"
  - label: "Dell — Second Quarter Fiscal 2027 Financial Results"
    url: "https://investors.delltechnologies.com/news-events/press-releases/detail/1653/dell-technologies-delivers-second-quarter-fiscal-2027-financial-results"
  - label: "Dell — First Quarter Fiscal 2027 Financial Results"
    url: "https://investors.delltechnologies.com/news-events/press-releases/detail/428/dell-technologies-delivers-first-quarter-fiscal-2027-financial-results"
  - label: "Dell (Motley Fool) — Q2 2027 earnings call transcript"
    url: "https://www.fool.com/earnings/call-transcripts/2026/09/08/dell-dell-q2-2027-earnings-call-transcript/"
  - label: "Dell (Motley Fool) — Q1 2027 earnings call transcript"
    url: "https://www.fool.com/earnings/call-transcripts/2026/05/28/dell-dell-q1-2027-earnings-call-transcript/"
  - label: "TipRanks — Dell stock rises after Q3 EPS blows past estimates"
    url: "https://www.tipranks.com/news/dell-stock-rises-after-q3-eps-blows-past-estimates"
  - label: "Benzinga — Dell delivers Q3 double beat, raises FY27 outlook"
    url: "https://www.benzinga.com/markets/earnings/26/11/63609544/dell-delivers-q3-double-beat-raises-fy27-outlook-we-are-now-a-different-company"
  - label: "CNBC — Dell stock plunges 11%, leading data center sell-off as fears mount about 'enterprise AI timing'"
    url: "https://www.cnbc.com/2026/10/14/dell-stock-barclays-enterprise-ai.html"
  - label: "StreetInsider — Dell Technologies shares fall as analyst and sector concerns persist"
    url: "https://www.streetinsider.com/Investing/Dell+Technologies+shares+fall+as+analyst+and+sector+concerns+persist/27196643.html"
  - label: "Yahoo Finance — Why is Dell Technologies stock falling 5.9% today?"
    url: "https://finance.yahoo.com/markets/stocks/articles/why-dell-technologies-stock-falling-134017599.html"
  - label: "Yahoo Finance — GF Securities revamps Dell target ahead of earnings"
    url: "https://finance.yahoo.com/markets/stocks/articles/gf-securities-revamps-dell-target-191736044.html"
  - label: "TipRanks — Dell last-minute Q3 earnings alert"
    url: "https://www.tipranks.com/news/dell-last-minute-q3-earnings-alert-heres-what-wall-street-and-options-traders-expect"
  - label: "StockAnalysis — Dell Technologies (DELL) quote and statistics"
    url: "https://stockanalysis.com/stocks/dell/"
  - label: "HP Inc. — Fiscal 2026 full year and fourth quarter results"
    url: "https://www.globenewswire.com/news-release/2026/11/24/3409888/0/en/hp-inc-reports-fiscal-2026-full-year-and-fourth-quarter-results-announces-dividend-increase.html"
  - label: "Reuters (Investing.com) — HPE shares fall as margin worries overshadow raised outlook"
    url: "https://www.investing.com/news/stock-market-news/hpe-shares-fall-as-margin-worries-overshadow-raised-outlook-5048068"
  - label: "InfotechLead (TBR) — Dell Technologies targets nearly half of AI server market"
    url: "https://infotechlead.com/networking/dell-technologies-targets-nearly-half-of-ai-server-market-as-enterprise-ai-infrastructure-demand-accelerates-96001"
  - label: "Data Center Frontier (Hyperion) — Dell takes the top spot in on-prem HPC and AI servers"
    url: "https://www.datacenterfrontier.com/frontier-computing/article/55420619/its-the-roaring-2020s-for-the-hpc-ai-data-center-industry-but-it-comes-with-costs"
  - label: "GPUSmith — NVIDIA AI server OEM comparison: Supermicro vs Dell vs HPE"
    url: "https://gpusmith.com/articles/en/nvidia-ai-server-oem-comparison"
  - label: "CNBC — Nasdaq slumps about 1.5% as Nvidia comeback reverses course"
    url: "https://www.cnbc.com/2026/11/23/stock-market-today-live-updates.html"
  - label: "CNBC — Stocks making the biggest moves"
    url: "https://www.cnbc.com/2026/11/24/stocks-moving-the-most-today-live-updates.html"
---

Dell Technologies moved twice on Tuesday. It closed the regular session down 11.83% at $295.28, then rose as much as 6% after the bell when the numbers landed, before giving most of it back. By the numbers it was a record quarter: $54.94 billion of revenue, $9.45 of adjusted earnings per share, $60.2 billion of new AI orders and a $132.3 billion backlog. What kept the stock from holding a direction is a single line in the guidance — a fourth quarter in which revenue rises and profit falls.

## The company, and where it sits in the chain

Dell was founded in 1984 by Michael Dell and is headquartered in Round Rock, Texas. It returned to the public market in 2018 and now runs on two legs: the Infrastructure Solutions Group, which sells servers, storage and networking, and the Client Solutions Group, which sells PCs and monitors. Of the $145.75 billion booked in the first nine months of fiscal 2027, ISG supplied $102.77 billion, or 70%. A company that was called a PC maker a year ago has become an infrastructure company, and management says so plainly — "we are now a different company," with ISG "driving the vast majority of our profit and growth."

Dell's position in the value chain is neither chip design nor component manufacturing. It takes Nvidia's GB300 NVL72 and the coming Vera Rubin NVL72, Intel and AMD CPUs, and memory from Micron, SK hynix and Samsung, assembles and integrates them by the rack, and stands them up inside data centres. Taiwanese ODMs such as Foxconn and Quanta supply components and sub-assembly; Dell differentiates on testing a complete rack before it ships and bringing it live within six hours of delivery. Its "Dell AI Factory" bundle — liquid cooling, power and cabling integration, operations software — is deployed at more than 7,500 customers across hyperscalers, neoclouds, sovereign and government buyers, and enterprises.

By share it is already number one. TBR estimates Dell took 46.7% of the branded AI server and systems market in 2025, against 25.0% for Supermicro, 11.7% for HPE and 1.7% for Lenovo. IDC's first-quarter 2026 server tracker put Dell first at 16.5% of worldwide server revenue, and Hyperion has Dell at 24% of the on-premises HPC market, ahead of HPE at 21% for the first time.

The competition comes in three forms: branded OEMs (Supermicro, HPE, Lenovo), Taiwanese ODMs (Foxconn, Quanta, Wiwynn), and Nvidia's own DGX systems. ODM direct vendors still took 50.2% of server revenue in the first quarter. That is the slice hyperscalers buy for themselves; the branded vendors compete for everyone who cannot integrate a rack in-house. Dell's strength in enterprises, sovereigns and mid-sized neoclouds follows from exactly that — for a customer without an integration team, assembly, validation and service are the product.

## The quarter, and the numbers that matter

Third-quarter revenue, for the period ended October 30, was <strong>$54.94 billion</strong>, up 103% from $27.0 billion a year earlier and a third consecutive quarterly record. Infrastructure revenue rose 198% to $41.97 billion, of which AI servers were <strong>$22.03 billion</strong> (+291%), traditional servers and networking $15.01 billion (+235%) and storage $4.93 billion (+24%).

Profit grew faster than revenue. Operating income rose 251% to $7.44 billion, and the infrastructure segment earned $7.12 billion, up 308%, for a <strong>17.0% operating margin</strong> — up from 12.4% a year ago and 15.0% in the second quarter. That a business dominated by cost-heavy AI servers expanded its margin says something: at this scale, procurement and overhead are producing leverage. The CFO noted that non-GAAP operating expenses fell to 7% of revenue, the lowest in the company's 42-year history. Adjusted earnings per share were <strong>$9.45</strong>, nearly four times the $2.59 of a year ago; on a GAAP basis it was $8.82.

Orders and backlog explain the company better than anything else. Dell booked <strong>$60.2 billion</strong> of AI server orders in the quarter and ended it with <strong>$132.3 billion</strong> of backlog, up $37.3 billion from $95.0 billion in the second quarter. Management stresses that each order is vetted for customer credit, access to capital, land and power — a defence that the backlog is not padded, and an admission that conversion depends on how fast customers can build.

Cash generation is working. Operating cash flow was $4.5 billion in the quarter and $10.8 billion for the nine months. Dell returned $4.9 billion to shareholders and the board authorised another $25 billion of buybacks.

Guidance has now been raised three times this year: fourth-quarter revenue of <strong>$56.3 billion</strong> (+69%) and adjusted EPS of <strong>$8.40</strong> (+116%), and for fiscal 2027 revenue of <strong>$202 billion</strong> (+78%), AI server revenue of $78 billion (+216%) and adjusted EPS of $29.68 (+188%). With $21.32 booked over nine months, another $8.36 in the fourth quarter lands exactly on the annual figure.

That is where the arithmetic starts to argue with itself. Fourth-quarter revenue rises $6.3 billion from the third quarter, yet earnings per share fall $1.05. Revenue sets another record while profit goes backwards. That implies a margin more than a point lower than the third quarter's, and the way the market read it was visible in the after-hours tape. At $295.28 the stock trades at roughly <strong>10 times</strong> fiscal 2027 earnings of $29.68. For a company guiding 78% revenue growth, that is a low multiple — which is another way of saying the market does not believe the last two quarters of that forecast.

## What happened overnight, and the competitive picture

The stock had been falling long before the print. It peaked at $595.51 in early October and lost half its value within seven weeks. The trigger was Barclays on October 14, when analyst Tim Long cut Dell, HPE and NetApp together and argued that stronger enterprise revenue "is more of a function of memory costs than a move to enterprise AI at this time." The stock fell 11.3% that day. A second wave came at the end of October, when Intel warned about the PC market and Gartner reported third-quarter shipments down 22.4%; the shares reached $316 on November 5. Monday's 20.46% jump was borrowed from Nvidia's rally, and apart from that one session the trend had been down.

Tuesday's regular-session loss had nothing to do with the results. HPE reported that morning, raised fiscal 2027 growth guidance to 27–35% from 13–17%, and still fell 12% pre-market because it guided Cloud & AI operating margin down to about 14%. Piper Sandler called it a "peak growth and peak multiple" problem. The market already had that question in hand before Dell's guidance arrived.

The mixed after-hours reaction has the same root. The third-quarter numbers directly rebut Barclays: margins expanded while costs rose, storage — the higher-margin business — grew 24%, and overhead hit a record low as a share of revenue. Then the company itself guided to lower earnings in the fourth quarter. Whether the third quarter was a one-off, or a temporary dip that reverses, is not yet knowable, and so the stock could not decide.

Neither can the competition settle it. HPE beat with $14.55 billion of revenue (+50%) and $1.43 of EPS and still fell 16% on margins. Supermicro's gross margin sits near 9.9% and its legal troubles have weakened its ability to defend share. Foxconn, meanwhile, is reported to have taken part of SpaceX's VR200 volume from Dell. Memory suppliers are asking for 25–45% increases on agreed contracts. Branded vendors have more pricing power to pass those through — and every time they use it, the next order can migrate to an ODM. PCs run the same way: HP has AI PCs at nearly 60% of shipments but operating margin fell to 5.3% from 6.6%, and called its fiscal 2027 outlook prudent. Dell's client segment grew revenue 3% and shrank operating income 6%.

## Checkpoints and risks

<!-- Rendered from the frontmatter watchItems. -->

## Sources

- [Dell — Third Quarter Fiscal 2027 Financial Results](https://www.businesswire.com/news/home/20261124456824/en/Dell-Technologies-Delivers-Third-Quarter-Fiscal-2027-Financial-Results)
- [Reuters (Investing.com) — Dell lifts annual forecasts after record quarter on surging AI server demand](https://www.investing.com/news/stock-market-news/dell-lifts-annual-forecasts-after-record-quarter-on-surging-ai-server-demand-5049024)
- [Dell — Second Quarter Fiscal 2027 Financial Results](https://investors.delltechnologies.com/news-events/press-releases/detail/1653/dell-technologies-delivers-second-quarter-fiscal-2027-financial-results)
- [Dell — First Quarter Fiscal 2027 Financial Results](https://investors.delltechnologies.com/news-events/press-releases/detail/428/dell-technologies-delivers-first-quarter-fiscal-2027-financial-results)
- [Dell (Motley Fool) — Q2 2027 earnings call transcript](https://www.fool.com/earnings/call-transcripts/2026/09/08/dell-dell-q2-2027-earnings-call-transcript/)
- [Dell (Motley Fool) — Q1 2027 earnings call transcript](https://www.fool.com/earnings/call-transcripts/2026/05/28/dell-dell-q1-2027-earnings-call-transcript/)
- [TipRanks — Dell stock rises after Q3 EPS blows past estimates](https://www.tipranks.com/news/dell-stock-rises-after-q3-eps-blows-past-estimates)
- [Benzinga — Dell delivers Q3 double beat, raises FY27 outlook](https://www.benzinga.com/markets/earnings/26/11/63609544/dell-delivers-q3-double-beat-raises-fy27-outlook-we-are-now-a-different-company)
- [CNBC — Dell stock plunges 11%, leading data center sell-off as fears mount about 'enterprise AI timing'](https://www.cnbc.com/2026/10/14/dell-stock-barclays-enterprise-ai.html)
- [StreetInsider — Dell Technologies shares fall as analyst and sector concerns persist](https://www.streetinsider.com/Investing/Dell+Technologies+shares+fall+as+analyst+and+sector+concerns+persist/27196643.html)
- [Yahoo Finance — Why is Dell Technologies stock falling 5.9% today?](https://finance.yahoo.com/markets/stocks/articles/why-dell-technologies-stock-falling-134017599.html)
- [Yahoo Finance — GF Securities revamps Dell target ahead of earnings](https://finance.yahoo.com/markets/stocks/articles/gf-securities-revamps-dell-target-191736044.html)
- [TipRanks — Dell last-minute Q3 earnings alert](https://www.tipranks.com/news/dell-last-minute-q3-earnings-alert-heres-what-wall-street-and-options-traders-expect)
- [StockAnalysis — Dell Technologies (DELL) quote and statistics](https://stockanalysis.com/stocks/dell/)
- [HP Inc. — Fiscal 2026 full year and fourth quarter results](https://www.globenewswire.com/news-release/2026/11/24/3409888/0/en/hp-inc-reports-fiscal-2026-full-year-and-fourth-quarter-results-announces-dividend-increase.html)
- [Reuters (Investing.com) — HPE shares fall as margin worries overshadow raised outlook](https://www.investing.com/news/stock-market-news/hpe-shares-fall-as-margin-worries-overshadow-raised-outlook-5048068)
- [InfotechLead (TBR) — Dell Technologies targets nearly half of AI server market](https://infotechlead.com/networking/dell-technologies-targets-nearly-half-of-ai-server-market-as-enterprise-ai-infrastructure-demand-accelerates-96001)
- [Data Center Frontier (Hyperion) — Dell takes the top spot in on-prem HPC and AI servers](https://www.datacenterfrontier.com/frontier-computing/article/55420619/its-the-roaring-2020s-for-the-hpc-ai-data-center-industry-but-it-comes-with-costs)
- [GPUSmith — NVIDIA AI server OEM comparison: Supermicro vs Dell vs HPE](https://gpusmith.com/articles/en/nvidia-ai-server-oem-comparison)
- [CNBC — Nasdaq slumps about 1.5% as Nvidia comeback reverses course](https://www.cnbc.com/2026/11/23/stock-market-today-live-updates.html)
- [CNBC — Stocks making the biggest moves](https://www.cnbc.com/2026/11/24/stocks-moving-the-most-today-live-updates.html)
