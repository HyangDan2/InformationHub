---
title: "US Markets 데일리 리포트 · 11월 21일"
date: 2026-11-21T06:35:00+09:00
channel: "us-markets"
navSection: "us-markets"
reportKind: "daily"
summary: "앤트로픽 상장 이틀째, 시장은 AI 주식을 팔았습니다. S&P 500은 3.70% 내린 6,910.39로 7거래일 연속 하락하며 조정장에 들어갔고, 다우도 48,147.33으로 밀렸습니다. 나스닥은 5.28% 빠져 올해 상승분을 전부 반납했고, 반도체지수는 10.73% 무너졌습니다. 엔비디아 회계 조사 보도와 구글의 브로드컴 발주 축소 소식이 겹치면서 VIX는 30.59% 급등한 37.14를 기록했습니다."
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
    status: "7주 연속 하락"
    tone: "down"
    pct: -14.01
    close: 125.53
    note: "SEC 회계 조사 보도, 2008년 이후 최장"
  - code: "MSFT"
    status: "약세"
    tone: "down"
    pct: -2.77
    close: 484.52
    note: "500달러선 내줌, 개별 악재는 없음"
  - code: "AAPL"
    status: "방어"
    tone: "flat"
    pct: -1.90
    close: 342.56
    note: "AI 에이전트 개발 보도에도 M7 최소 낙폭"
  - code: "GOOGL"
    status: "약세"
    tone: "down"
    pct: -2.70
    close: 265.29
    note: "발주 축소 보도에도 낙폭은 제한"
  - code: "META"
    status: "급락"
    tone: "down"
    pct: -5.93
    close: 560.84
    note: "600달러선 붕괴, AI 지출 부담"
  - code: "AMZN"
    status: "급락"
    tone: "down"
    pct: -4.10
    close: 246.82
    note: "앤트로픽 지분에도 매물"
  - code: "TSLA"
    status: "급락"
    tone: "down"
    pct: -7.64
    close: 345.82
    note: "고밸류 성장주 조정에 동참"
  - code: "AVGO"
    status: "급락"
    tone: "down"
    pct: -12.19
    close: 304.41
    note: "구글 TPU 8i 발주 20% 축소 보도"
  - code: "AMD"
    status: "급락"
    tone: "down"
    pct: -13.25
    close: 424.39
    note: "공매도 보고서 여진, 이틀째 급락"
  - code: "MU"
    status: "급락"
    tone: "down"
    pct: -13.89
    close: 594.51
    note: "6월 고점 대비 -50%, 메모리 동반 투매"
  - code: "TSM"
    status: "급락"
    tone: "down"
    pct: -9.30
    close: 319.34
    note: "대만 증시 주간 -17%"
  - code: "INTC"
    status: "급락"
    tone: "down"
    pct: -7.97
    close: 51.28
    note: "파운드리 자금 부담 재부각"
  - code: "ASML"
    status: "급락"
    tone: "down"
    pct: -6.63
    close: 1266.22
    note: "장비주까지 매물 확산"
  - code: "ANT"
    status: "약세"
    tone: "down"
    pct: -8.50
    close: 88.91
    note: "공모가 83달러 위에서 마감"
  - code: "UNH"
    status: "급등"
    tone: "up"
    pct: 2.90
    close: 340.08
    note: "TD코웬 매수 상향, 목표가 455달러"
  - code: "DIS"
    status: "약세"
    tone: "down"
    pct: -1.89
    close: 117.98
    note: "지수를 따라 밀림"
watchItems:
  - tag: "금리"
    tone: "down"
    title: "12월 FOMC까지 남은 재료는 25일 PCE 하나"
    detail: "금리선물은 12월 8~9일 회의에서 25bp 인상을 92~96% 확률로 반영하고 있습니다. 변수는 크리스토퍼 월러 이사가 꺼낸 50bp입니다. \"사람들을 놀라게 할 필요가 있다\"는 발언은 그대로 남아 있고, 10월 의사록도 연준이 물가를 아직 통제하지 못했다고 본다는 점을 확인해 줬습니다. 25일 발표되는 10월 PCE가 마지막 숫자입니다. 11월 소비심리지수는 51.5로 10월(48.0)에서 올랐지만 여전히 경기침체기에나 나오던 수준입니다."
    when: "11월 25일 PCE · 12월 8~9일 FOMC"
  - tag: "실적"
    tone: "event"
    title: "12월 9일 브로드컴 — 구글 발주 축소에 직접 답한다"
    detail: "브로드컴은 9일 장 마감 뒤 4분기(11월 1일 마감) 실적을 냅니다. 회사가 제시한 가이던스는 매출 348억 달러, AI 반도체 217억 달러, 영업이익률 66%입니다. 2027회계연도 AI 매출 1,150억 달러 전망을 유지하는지가 관건입니다. 같은 주에 마이크론(12월 17일), 그 전주에 HPE와 아날로그 디바이스가 줄줄이 실적을 냅니다."
    when: "12월 9일(현지시간) 장 마감 후"
  - tag: "규제"
    tone: "down"
    title: "엔비디아 회계 조사 — 어디까지 번질까"
    detail: "로이터가 SEC 집행국이 엔비디아의 회계를 들여다본다고 보도한 것이 이날 낙폭을 키웠습니다. 초점은 싱가포르 매출이 거의 절반까지 늘어난 시점에 지역별 매출 기준을 고객 본사 기준으로 바꾼 회계 처리입니다. SEC 집행국장 데이비드 우드콕은 지난달 AI 기업의 공시를 살펴보고 있다고 말했습니다. 조사는 위법의 증거가 아니지만, 다른 AI 기업의 공시에도 같은 질문이 따라붙을 수 있습니다."
    when: "상시 · 추가 보도 주시"
  - tag: "자금"
    tone: "down"
    title: "앤트로픽의 임대료 1,612억 달러는 누가 대주나"
    detail: "앤트로픽은 증권신고서에 이자 제외 장비 임대료 1,612억 달러를 적었습니다. 브로드컴은 3월 계약으로 임대료를 최대 420억 달러까지 전환사채로 대신 받아 주기로 했고, 10월 26일에는 뱅크오브아메리카·블랙스톤·씨티·모건스탠리가 630억 달러 규모 특수목적법인을 만들어 브로드컴 장비를 사서 앤트로픽에 빌려주는 구조가 발표됐습니다. 브로드컴은 이 거래에서 선순위 대출만큼의 잔존가치를 보증합니다. 매출이 계약상 기준에 못 미치면 금리는 9%에서 13%로, 전환가는 90%에서 85%로 불리해집니다."
    when: "분기 공시마다 확인"
  - tag: "수급"
    tone: "down"
    title: "200일선을 내준 지수 — 반등의 조건"
    detail: "세 지수가 모두 200일 이동평균 아래로 내려왔습니다. BTIG의 조너선 크린스키는 200일선 아래에서는 위험이 아래쪽으로 열린다고 봅니다. 최근 30년간 200일선을 3% 넘지 않게 밑돈 채 6일 연속 하락한 사례는 세 번뿐이었고, 세 번 모두 5일 뒤에는 반등했습니다. 다만 그 뒤에 더 큰 하락이 왔습니다. 매도 물량이 쏟아진 뒤 거래량이 줄고 VIX가 꺾이는지가 첫 신호입니다."
    when: "이번 주"
  - tag: "일정"
    tone: "flat"
    title: "추수감사절 단축장, 얇아지는 거래량"
    detail: "26일은 휴장, 27일은 조기 마감입니다. 연휴를 앞두고 7,300만 명이 차로 이동하고 전국 평균 휘발유 가격은 갤런당 3.69달러로 내렸습니다. 거래량이 줄면 지수는 평소보다 크게 흔들립니다. 12월 FOMC 전 마지막 물가·고용 지표가 이 기간에 나옵니다."
    when: "11월 26~27일"
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

## 시황 — 세 지수가 같은 날 조정장에 들어갔다

S&P 500은 <strong>3.70%(-265.44p) 내린 6,910.39</strong>로 마감했습니다. 7거래일 연속 하락으로 2020년 2월 이후 가장 긴 연속 하락이고, 10월 6일 사상 최고 종가(7,818.93)에서 11.6% 내려와 조정장에 들어섰습니다. 다우도 <strong>949.73p(-1.93%)</strong> 밀린 <strong>48,147.33</strong>으로 7개월 만에 가장 낮은 자리에서 마감하며 조정장에 합류했습니다. 나스닥은 <strong>5.28%(-1,261.47p)</strong> 빠진 <strong>22,617.73</strong>으로 올해 상승분을 모두 반납했습니다(연초 대비 -2.7%). 나스닥100은 장중 고점 대비 20%를 넘겨 약세장 구간에 들어갔습니다. 필라델피아 반도체지수(SOX)는 <strong>10.73%(-1,011.13p)</strong> 무너진 <strong>8,408.59</strong>로, 구성 종목 대부분이 두 자릿수 낙폭을 기록했습니다.

주간으로도 S&P 500이 8.6%, 다우가 8.0%, 나스닥이 10.0% 빠졌습니다. S&P 500의 주간 하락은 올해 4월 관세 충격 이후, 다우는 2020년 3월 이후 가장 컸습니다.

방아쇠는 앤트로픽의 상장이었습니다. 전날 공모가 83달러에 9억 8,000만 주를 팔아 813억 달러를 조달하며 화려하게 데뷔했지만, 이틀째인 이날 <strong>88.91달러(-8.50%)</strong>로 밀렸습니다. 장중 83.05달러까지 내려가 공모가에 닿았고, 시간외에서도 88달러대에 머물렀습니다. 시장이 실망한 것은 앤트로픽 자체가 아니라 그 주변입니다. AI에 새로 투자할 자리를 얻으려면 기존 종목을 팔아야 하고, 그 매물이 개장과 함께 나왔습니다. 전날 17% 상승으로 끝난 상장이 다음 날 차익 실현의 명분이 된 셈입니다.

두 번째 재료는 엔비디아였습니다. 로이터가 SEC 집행국이 엔비디아의 회계를 조사하고 있다고 단독 보도하자 낙폭이 6%대에서 14%까지 벌어졌습니다. 초점은 싱가포르 매출이 거의 절반까지 불어난 시점에 지역별 매출 집계 기준을 고객 본사 기준으로 바꾼 회계 처리입니다. 같은 회사가 섹스피어 조사와 별개로 허깅페이스 인수 계약, AI 자금 지원 구조까지 들여다봐야 하는 상황이라, 반도체 업종 전체가 회계와 자금조달이라는 두 단어에 민감하게 반응했습니다.

세 번째는 연준입니다. 10월 의사록은 연준이 12월 인상을 확신하면서도 AI를 물가 상승의 실질적 원인으로 보고 있다는 점을 확인해 줬습니다. 크리스토퍼 월러 이사는 50bp 인상이 필요할 수 있다고 다시 말했고, 금리선물은 25bp를 92~96% 확률로 반영하고 있습니다. 11월 소비심리지수는 51.5로 10월(48.0)보다 올랐지만 여전히 경기침체기에나 나오는 수준이었습니다.

자금은 주식에서만 빠지지 않았습니다. 10년물 국채금리는 <strong>4.932%(-12bp)</strong>, 2년물은 4.634%(-14bp), 30년물은 5.316%(-8bp)로 내렸습니다. 반대로 금은 <strong>2.8% 하락한 온스당 3,518.50달러</strong>로 2025년 9월 이후 최저치를 찍었고, 주간으로는 9.5% 빠져 8개월 만의 최악을 기록했습니다. 은은 3.8% 내린 41.12달러로 1월 고점(121.64달러) 대비 66% 낮습니다. 비트코인은 5만 9,000달러 아래로 밀렸고, 24시간 동안 약 15억 달러의 레버리지 포지션이 강제 청산됐습니다. 유가만 올랐습니다. WTI는 <strong>83.98달러(+0.93%)</strong>로 마감했지만 주간으로는 5.2% 빠졌습니다.

업종도 방향이 분명했습니다. S&P 500 11개 업종 가운데 기술이 7.1% 빠져 가장 나빴고, 경기소비재가 2.9% 하락으로 뒤를 이었습니다. 반면 필수소비재와 헬스케어는 올랐습니다. 월마트(+1.5%), 코스트코(+0.8%), 존슨앤드존슨과 프록터앤드갬블(각 +1%), 제너럴밀스(+5%), 맥코믹(+4%)처럼 경기와 상관없이 팔리는 회사로 돈이 몰렸습니다. 나스닥100 구성 101개 가운데 71개가 약세장에 들어갔고, 그 안의 반도체·메모리 종목 20개는 하나도 빠짐없이 고점 대비 20% 넘게 빠져 있었습니다.

아시아에서는 한국과 일본이 각각 5% 넘게 밀렸고, 대만 가권지수는 주간 17% 하락으로 1990년 이후 최악의 한 주를 보냈습니다. 삼성전자는 7%, SK하이닉스는 6% 안팎 내렸습니다. 전날 밤 미국 반도체주의 낙폭이 그대로 아시아로 옮겨 붙은 모습입니다.

공포지수 VIX는 <strong>37.14(+30.59%)</strong>로 장중 40.03까지 올라, 3월 말 이후 처음으로 30을 크게 웃돌았습니다. 원·달러 환율은 <strong>1,345.92원(+0.89%)</strong>입니다.

## US Markets 항목별 리포트

### NVDA · Nvidia

<strong>125.53달러(-14.01%)</strong>. 7거래일 연속 하락이자 7주 연속 주간 하락으로, 2008년 금융위기 이후 가장 긴 흐름입니다. 7주 동안 주가가 46% 빠지며 시가총액 약 2조 6,000억 달러가 사라졌고, 세계 시가총액 1위 자리는 애플·마이크로소프트·알파벳에 내준 4위입니다. 이달 들어서만 33% 하락했습니다. 실적은 지난주에 예상을 웃돌았고 다음 회계연도 성장률 전망도 75%로 올라갔지만, 매도는 숫자가 아니라 젠슨 황 전 CEO의 빈자리와 SEC 조사 보도에서 나왔습니다. 선행 주가수익비율은 8.4배로 AMD(29배)의 3분의 1 수준까지 내려왔습니다. 시간외에서는 128달러대로 반등했습니다.

### MSFT · Microsoft

<strong>484.52달러(-2.77%)</strong>. 500달러선을 내줬습니다. 회사에서 나온 악재는 없었고, 하이퍼스케일러의 AI 설비투자에 대한 연준의 경계와 앤트로픽 상장 이후의 포트폴리오 재편이 겹쳤습니다. 서버 CPU 주문을 줄이지 않고 있다는 관측이 나온 것은 인텔에는 우호적이었지만, 마이크로소프트의 주가를 붙잡아 주지는 못했습니다.

### AAPL · Apple

<strong>342.56달러(-1.90%)</strong>. M7 가운데 낙폭이 가장 작았습니다. 블룸버그가 애플이 기기 조작과 앱 실행, 코딩을 대신하는 자율 AI 에이전트를 개발 중이라고 보도했는데, 이 소식은 오히려 경쟁 구도에 대한 부담으로 읽혔습니다. 그래도 AI 자본지출 논쟁에서 거리가 있어 매물은 적었습니다.

### GOOGL · Alphabet

<strong>265.29달러(-2.70%)</strong>. 이날 반도체를 흔든 보도의 당사자였지만 주가는 상대적으로 버텼습니다. 장중 한때 보합권에 머물기도 했습니다. 알파벳은 앤트로픽 상장과 함께 진행된 260억 달러 사모 배정에서 100억 달러를 맡은 최대 투자자이고, 브로드컴과는 2031년까지 네트워킹 부품을 사기로 한 계약을 맺고 있습니다. 발주를 미디어텍 쪽으로 돌린다는 관측이 사실이어도 알파벳의 지출 총액이 줄어드는 것은 아니라는 해석이 낙폭을 줄였습니다.

### META · Meta Platforms

<strong>560.84달러(-5.93%)</strong>. 600달러선이 무너졌습니다. 자체 모델과 데이터센터에 들어가는 돈이 문제인 종목군에 속해 있어 AI 심리가 흔들릴 때 가장 먼저 팔립니다. 브로드컴은 4분기에 메타의 추론용 자체 칩(MTIA)을 본격 출하한다고 밝혔는데, 그만큼 설비 비용도 함께 늘어납니다.

### AMZN · Amazon

<strong>246.82달러(-4.10%)</strong>. 앤트로픽 지분과 대여금을 가진 회사라 상장 자체는 평가이익 재료인데, 이날은 AWS 설비투자 부담이 더 크게 읽혔습니다. 260억 달러 사모 배정에도 참여했습니다.

### TSLA · Tesla

<strong>345.82달러(-7.64%)</strong>. 회사 고유의 재료 없이 고밸류 성장주 조정을 그대로 따라갔습니다. 자동차 업종은 이날 하락 상위에 이름을 올렸습니다.

### AVGO · Broadcom

<strong>304.41달러(-12.19%)</strong>. 장중 301.72달러까지 밀렸고, 하루에 시가총액 1,910억 달러가 사라졌습니다. TF인터내셔널 밍치궈 애널리스트가 "구글이 2027년 브로드컴 설계 TPU 8i 출하 계획을 약 100만 대, 20% 줄였다"고 밝힌 것이 직접 원인입니다. 여기에 앤트로픽에 최대 420억 달러를 대여하고 지분 10억 달러를 산 노출이 겹쳤습니다. 6월 2일 사상 최고 종가(481.57달러) 대비 36% 낮습니다. 자세한 내용은 이번 호 스포트라이트에서 다뤘습니다.

### AMD · Advanced Micro Devices

<strong>424.39달러(-13.25%)</strong>. 전날 공매도 보고서로 7.72% 빠진 데 이어 이틀째 두 자릿수 하락입니다. 회사는 보고서 내용을 즉시 반박했지만, 반도체 섹터 전체가 무너지는 날에는 반박만으로 가격을 붙잡기 어려웠습니다. 장 시작 전부터 7% 내린 채로 출발했습니다.

### MU · Micron

<strong>594.51달러(-13.89%)</strong>. 6월 25일 사상 최고 종가(1,213.56달러)의 절반 수준입니다. 배런스는 마이크론의 선행 주가수익비율이 3.8배라며 메모리주가 "견디기 힘들 만큼 싸다"고 썼지만, 매수세는 붙지 않았습니다. 마이크론은 2027년 생산량의 75% 이상이 이미 고객에게 배정돼 있고, 최근 4개 분기 조정 주당순이익(75.28달러) 기준으로는 8배에 거래됩니다. 실적은 12월 17일입니다. 샌디스크는 16.1% 빠졌는데, 8대 1 주식분할이 전날 마감 뒤 적용된 데다 트렌드포스가 2027년 1분기부터 낸드 계약가격이 내리기 시작한다고 전망한 것이 겹쳤습니다.

### TSM · TSMC

<strong>319.34달러(-9.30%)</strong>. 대만 가권지수가 주간 17% 빠지며 1990년 이후 최악의 한 주를 기록한 여파입니다. 파운드리 수요 자체가 꺾였다는 소식은 없었지만, AI 칩 발주 조정 보도가 나오면 가장 먼저 영향을 받는 자리입니다.

### INTC · Intel

<strong>51.28달러(-7.97%)</strong>. 장중 51.10달러까지 밀렸습니다. 파운드리 로드맵에 들어가는 설비투자 부담과 외부 고객 확보 지연이 다시 부각됐습니다. 52주 범위는 32.89~142.35달러로, 고점 대비로는 3분의 2가 사라진 상태입니다.

### ASML · ASML

<strong>1,266.22달러(-6.63%)</strong>. 노광장비주까지 매물이 확산했습니다. 내년 설비투자 계획이 조정될 수 있다는 우려가 반도체 장비 전반에 걸쳐 나왔습니다.

### ANT · Anthropic

<strong>88.91달러(-8.50%)</strong>. 공모가 83달러를 겨우 웃도는 수준에서 둘째 날을 마쳤습니다. 장중 83.05달러까지 내려가 공모가에 닿았습니다. 상장과 함께 진행된 사모 배정에는 구글과 엔비디아가 각 100억 달러, AMD가 25억 달러, 브로드컴·마이크론·마이크로소프트가 각 10억 달러, TSMC가 5억 달러를 넣었습니다. 이 배정 주식은 상장 주식이 아니라서 보호예수(락업) 적용 대상도 아닙니다. 공모가를 지키는지가 다음 주 이 종목의 방향을 가르고, 그 수급이 대형 AI주에도 영향을 줍니다.

### CRWV · CoreWeave / NBIS · Nebius

코어위브와 네비우스는 장중 9~11% 밀렸습니다. AI 설비를 빌려주는 회사들은 조달 비용에 민감합니다. 앤트로픽 상장으로 AI에 투자할 통로가 하나 늘었지만, 새 종목을 사기 위한 재원은 기존 네오클라우드에서 나왔습니다.

### UNH · UnitedHealth

<strong>340.08달러(+2.90%)</strong>. TD코웬이 투자의견을 보유에서 매수로 올리고 목표주가를 402달러에서 455달러로 높이며 2027년 최선호 종목으로 꼽았습니다. 옵텀헬스 회복과 메디케어 어드밴티지 수익성 개선으로 2028년까지 주당순이익이 두 자릿수 중반대로 늘 수 있다는 논리입니다. 최근 석 달간 14% 빠졌던 종목이라 반발 매수도 붙었습니다.

### WMT · Walmart

<strong>+1.5%</strong>. 전날 실적 발표 뒤 빠졌던 주가를 하루 만에 되돌렸습니다. 매출 성장과 마진 개선, 이커머스 수익성이라는 세 가지가 함께 나왔다는 평가가 나왔습니다. 코스트코도 0.8% 올랐습니다.

### DIS · Walt Disney

<strong>117.98달러(-1.89%)</strong>. 회사 고유의 재료 없이 지수를 따라 밀렸습니다. 전날 52주 최고를 새로 쓴 뒤 이틀째 조정입니다.

## 앞으로 지켜볼 변수

<!-- 이 목록은 frontmatter의 watchItems에서 카드로 렌더링됩니다. -->

## 출처

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
