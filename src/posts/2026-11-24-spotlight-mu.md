---
title: "US Markets 스포트라이트 · MU — 엔비디아가 돌아온 날, 메모리는 사상 최대 상승을 기록했다"
date: 2026-11-24T06:50:00+09:00
channel: "us-markets"
navSection: "us-markets"
reportKind: "spotlight"
summary: "4분기 매출 542억 3,000만 달러(+379%), 총이익률 87.0%, 주당순이익 33.42달러. 6분기 연속 사상 최대였고, 다음 분기 가이던스는 615억 달러입니다. 그런데 주가는 6월 고점에서 41.7% 빠져 있었고, 23일 하루에 19.04% 올랐습니다. 회사에서 나온 새 소식은 없었습니다. 젠슨 황의 복귀로 AI 설비투자에 대한 신뢰가 돌아오자, 가장 세게 눌렸던 자리가 가장 크게 반등한 것입니다. 확인할 숫자는 12월 17일에 나옵니다."
tickers: ["MU", "NVDA", "AMD", "TSM"]
spotlight:
  snapshot:
    - { label: "종가", value: "707.70달러", note: "+19.04% · 장중 719.43달러", tone: "up" }
    - { label: "시가총액", value: "약 8,140억 달러", note: "하루에 약 1,300억 달러 증가" }
    - { label: "4분기 매출", value: "542억 3,000만 달러", note: "+379% · 6분기 연속 최대" }
    - { label: "4분기 총이익률", value: "87.0%", note: "영업이익률 82.3% (비GAAP)" }
    - { label: "1분기 가이던스", value: "615억 달러", note: "주당순이익 38.15달러" }
    - { label: "2027년 HBM", value: "사실상 완판", note: "가격은 지난해보다 큰 폭 상승" }
    - { label: "수주 잔고", value: "약 1,500억 달러", note: "장기계약 26건 · 전량 인수 조건" }
    - { label: "내년 예상 PER", value: "4.0배", note: "FY27 컨센서스 EPS 176.50달러" }
    - { label: "6월 고점 대비", value: "-41.7%", note: "1,213.56달러 → 707.70달러", tone: "down" }
  charts:
    - title: "분기 매출"
      unit: "십억 달러"
      caption: "1년 전 113억 달러이던 분기 매출이 6분기 만에 5배가 됐습니다. 1분기 615억 달러는 회사 가이던스입니다."
      rows:
        - { label: "FQ4 2025", sub: "작년 같은 분기", value: 11.32, digits: 2, note: "실적" }
        - { label: "FQ1 2026", sub: "12월 분기", value: 13.64, digits: 2, note: "+21%" }
        - { label: "FQ2 2026", sub: "3월 분기", value: 23.80, digits: 2, note: "+75%" }
        - { label: "FQ3 2026", sub: "6월 분기", value: 41.46, digits: 2, note: "+74%" }
        - { label: "FQ4 2026", sub: "9월 3일 마감", value: 54.23, digits: 2, note: "+31%", subject: true }
        - { label: "FQ1 2027", sub: "가이던스", value: 61.50, digits: 2, note: "전망" }
    - title: "HBM 시장 점유율"
      unit: "% · 2분기 2026 매출 기준"
      caption: "고대역폭 메모리는 SK하이닉스가 절반, 삼성전자가 3분의 1을 가져갑니다. 마이크론은 18%로 3위이고, 1분기 21%에서 3%포인트 줄었습니다."
      rows:
        - { label: "SK하이닉스", sub: "1분기 58%", value: 50, digits: 0, note: "1위" }
        - { label: "삼성전자", sub: "1분기 21%", value: 33, digits: 0, note: "HBM4 선행" }
        - { label: "마이크론", sub: "1분기 21%", value: 18, digits: 0, note: "3위", subject: true }
    - title: "4분기 사업부문 매출"
      unit: "십억 달러"
      caption: "데이터센터 두 부문이 매출의 63%를 차지합니다. 1년 전에는 클라우드 메모리와 코어 데이터센터를 합쳐 61억 달러였습니다."
      rows:
        - { label: "코어 데이터센터", sub: "GPU 서버용", value: 18.00, digits: 2, note: "33%" }
        - { label: "클라우드 메모리", sub: "HBM·하이퍼스케일러", value: 16.28, digits: 2, note: "30%" }
        - { label: "모바일·클라이언트", sub: "폰·PC", value: 13.11, digits: 2, note: "24%" }
        - { label: "자동차·임베디드", sub: "차량·산업", value: 6.82, digits: 2, note: "13%" }
    - title: "주당순이익"
      unit: "달러 · 비GAAP"
      caption: "2026회계연도 75.52달러에서 2027년 176.50달러로 두 배 이상 늘어나는 것이 컨센서스입니다. 2028년은 207.76달러입니다."
      rows:
        - { label: "FY2025", sub: "실적", value: 8.29, digits: 2, note: "전년" }
        - { label: "FY2026", sub: "실적", value: 75.52, digits: 2, note: "+811%", subject: true }
        - { label: "FY2027", sub: "컨센서스", value: 176.50, digits: 2, note: "+134%" }
        - { label: "FY2028", sub: "컨센서스", value: 207.76, digits: 2, note: "+18%" }
watchItems:
  - tag: "실적"
    tone: "next"
    title: "12월 17일 — 마진의 바닥을 확인하는 자리"
    detail: "마이크론은 17일 장 마감 뒤 1분기(11월 27일 마감) 실적을 냅니다. 회사가 제시한 숫자는 매출 615억 달러±15억 달러, 총이익률 86.25%, 주당순이익 38.15달러±1달러입니다. 컨센서스는 매출 570억 달러 안팎, 주당순이익 35.40달러였습니다. 회사는 1분기가 2027회계연도 총이익률의 바닥이라고 밝혔습니다. 다음 분기 가이던스에서 86%대가 유지되는지, 2분기부터 다시 올라가는지가 관건입니다."
    when: "12월 17일(현지시간) 장 마감 후"
  - tag: "가격"
    tone: "up"
    title: "계약가격은 아직 오르고 있다"
    detail: "트렌드포스는 4분기 일반 D램 계약가격이 전 분기 대비 10~15% 오르고, 2027년 1분기 5~10%, 2분기 3~8%, 하반기에는 보합에서 5% 상승을 전망합니다. 4분기 실적에서 D램 평균판매가격은 10%대 후반, 낸드는 30%가량 올랐습니다. 문제는 현물가격입니다. 지난 10월부터 낸드를 중심으로 현물이 먼저 꺾였고, 메모리 주가는 가격이 실제로 내리기 전에 먼저 움직여 왔습니다. 계약가와 현물가의 간격이 벌어지는지가 첫 신호입니다."
    when: "매달 말 계약가격 발표"
  - tag: "경쟁"
    tone: "down"
    title: "HBM4 — 삼성이 앞서고, 중국은 뒤에서 온다"
    detail: "2분기 HBM 점유율은 SK하이닉스 50%, 삼성전자 33%, 마이크론 18%입니다. 삼성은 HBM4를 세계에서 처음 양산했고, 엔비디아 베라루빈 물량의 25~30%를 가져간 것으로 추정됩니다. 마이크론은 3월부터 36GB 12단 HBM4를 양산했고 48GB 16단 샘플을 보내고 있습니다. 중국 CXMT는 HBM3E 시험 생산에 들어갔지만 수율이 20~30%로 SK하이닉스(약 70%)에 크게 못 미칩니다. 지금의 위협은 아니고, 2027년 이후의 변수입니다."
    when: "분기 점유율 발표"
  - tag: "수요"
    tone: "down"
    title: "메모리 가격이 비싸지면 사는 쪽이 줄어든다"
    detail: "애플은 지난 3일 실적 발표에서 메모리 조달 비용을 두고 이례적이라고 표현했습니다. D램 가격이 기가비트당 1.90달러까지 올라 폰과 PC 제조사의 원가를 밀어 올리고 있습니다. 서버와 HBM 수요는 계약으로 묶여 있지만, 소비자 기기 쪽 물량이 줄면 전체 비트 수요가 흔들립니다. 마이크론 매출의 24%가 모바일·클라이언트, 13%가 자동차·임베디드입니다."
    when: "세트 업체 4분기 실적 시즌"
  - tag: "공급"
    tone: "event"
    title: "새 팹은 2027년 중반에 첫 웨이퍼를 뽑는다"
    detail: "마이크론은 아이다호 신규 팹에서 2027년 중반 첫 웨이퍼를 생산하고, 의미 있는 물량은 그 뒤 몇 분기 지나서 나온다고 밝혔습니다. 업계 전체로도 대형 신규 팹이 2028년에야 가동을 시작합니다. HBM은 같은 용량의 일반 D램보다 웨이퍼를 3배, 차세대는 4배까지 씁니다. 증설이 늦는 만큼 지금의 타이트한 수급은 2028년까지 이어질 수 있다는 논리이고, 반대로 증설이 계약 만료 시점과 겹치면 다음 사이클의 부담이 됩니다."
    when: "2027년 중반 이후"
  - tag: "계약"
    tone: "flat"
    title: "상한선이 있는 계약 — 좋은 것만은 아니다"
    detail: "마이크론의 장기 공급계약은 26건, 남은 이행 의무는 약 1,500억 달러입니다. 모두 전량 인수 조건에 가격 하한과 상한이 붙습니다. 가격이 급등하면 계약 물량에서는 그만큼 덜 받는다는 뜻입니다. 2030년까지 예상 매출의 35% 이상이 계약으로 묶여 있는 만큼 하방은 단단하지만, 상방은 열려 있지 않습니다. 12월 실적에서 계약 물량과 비계약 물량의 비중, 그리고 상한이 실제로 얼마나 걸려 있는지를 보면 이 회사의 이익 상한을 가늠할 수 있습니다."
    when: "12월 17일 실적 발표"
sources:
  - label: "Micron — Fiscal Fourth Quarter and Full Year 2026 Results"
    url: "https://investors.micron.com/news/press-release/2026/Micron-Technology-Inc--Reports-Record-Fiscal-Fourth-Quarter-and-Full-Year-2026-Results/default.aspx"
  - label: "Micron — Q4 2026 earnings call transcript (Sanjay Mehrotra, Mark Murphy)"
    url: "https://stockanalysis.com/stocks/mu/transcripts/699706-q4-2026/"
  - label: "Micron — To Report Fiscal First Quarter Results on December 17, 2026"
    url: "https://investors.micron.com/news/press-release/2026/Micron-Technology-to-Report-Fiscal-First-Quarter-Results-on-December-17-2026/default.aspx"
  - label: "Micron — Q1 2026 financial results and prepared remarks (FQ1-26 base for the revenue series)"
    url: "https://investors.micron.com/news/press-release/2025/Micron-Technology-Inc--Reports-Results-for-the-First-Quarter-of-Fiscal-2026-12-17-2025/default.aspx"
  - label: "S&P Global Market Intelligence — Behind the Earnings Call: Micron Technology Q4 2026"
    url: "https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/10/behind-the-earnings-call-micron-technology-inc-q4-2026"
  - label: "CNBC — Micron (MU) Q4 earnings report 2026"
    url: "https://www.cnbc.com/2026/09/30/micron-mu-q4-earnings-report-2026.html"
  - label: "Electronics Weekly (Counterpoint) — Q3 DRAM revenue up 369% YoY, market shares"
    url: "https://www.electronicsweekly.com/news/business/q3-dram-revenue-up-369-yoy-2026-11/"
  - label: "The Register — Memory makers mint megabucks while buyers beg for mercy"
    url: "https://www.theregister.com/systems/2026/11/05/memory-makers-mint-megabucks-while-buyers-beg-for-mercy/5307846"
  - label: "Yonhap (Counterpoint) — Samsung narrows gap with SK hynix in HBM market in Q2"
    url: "https://en.yna.co.kr/view/AEN20260903010700320"
  - label: "Chosunbiz — Micron accelerates HBM expansion in Singapore and Taiwan"
    url: "https://biz.chosun.com/en/en-it/2026/11/24/QUHPICOVNRAN3APHG5LFNDOQUQ/"
  - label: "Yahoo Finance — Micron's president says memory has been tight across multiple years; TrendForce 2027 outlook"
    url: "https://finance.yahoo.com/markets/stocks/articles/micron-president-says-memory-tight-134550601.html"
  - label: "Investing.com — SK hynix says memory demand beats supply through 2030: what it means for Micron"
    url: "https://www.investing.com/analysis/sk-hynix-says-memory-demand-beats-supply-through-2030what-it-means-for-micron-200690804"
  - label: "Investing.com — Apple's 'unprecedented' memory warning adds fuel to wobbly Micron, SK hynix trade"
    url: "https://www.investing.com/news/stock-market-news/apples-unprecedented-memory-warning-adds-fuel-to-wobbly-micron-sk-hynix-trade-4995638"
  - label: "Trefis — Micron stock at $733: why did memory stocks crash?"
    url: "https://www.trefis.com/stock/mu/articles/623897/micron-stock-at-733-why-did-memory-stocks-crash/2026-11-10"
  - label: "CNBC — Stocks making the biggest moves Monday: Boeing, Nvidia, CoreWeave, Newmont & more"
    url: "https://www.cnbc.com/2026/11/23/stocks-moving-the-most-today-live-updates.html"
  - label: "CNBC — Dow soars 1,400 points; Nasdaq surges 6% as Jensen Huang returns to Nvidia"
    url: "https://www.cnbc.com/2026/11/22/stock-market-today-live-updates.html"
  - label: "Investopedia — Stock Market Today: Major Indexes Skyrocket as Nvidia Jumps 31%"
    url: "https://www.investopedia.com/stock-market-today-dow-jones-s-and-p-500-nasdaq-11232026-12274147"
---

마이크론 주가가 하루에 19.04% 올랐습니다. 메모리 종목 가운데 사상 최대 상승일이고, 라운드힐 메모리 ETF(DRAM)도 4월 상장 이후 가장 좋은 하루를 보냈습니다. 회사에서 새 소식이 나온 것은 아닙니다. 이날 엔비디아 이사회가 젠슨 황을 최고경영자로 되돌리면서 AI 설비투자에 대한 신뢰가 돌아왔고, 지난 두 달 동안 가장 세게 팔렸던 자리가 가장 크게 반등했습니다. 실적은 이미 6분기 연속 사상 최대였고, 주가는 6월 고점에서 41.7% 빠져 있던 상태였습니다.

## 기업 개요와 밸류체인 포지션

마이크론은 아이돌호주 보이시에 본사를 둔 메모리 반도체 회사입니다. D램과 낸드를 직접 설계하고 만들어 파는 종합반도체회사(IDM)이고, 2026회계연도 매출 1,331억 9,000만 달러 가운데 75.6%가 D램, 24.4%가 낸드와 기타입니다. 한때 경기 순환에 따라 적자와 흑자를 오가던 회사가 지금은 매출의 87%를 총이익으로 남기고 있습니다.

조직은 고객 성격에 따라 네 갈래로 나뉩니다. 클라우드 메모리 부문은 하이퍼스케일러와 HBM을, 코어 데이터센터 부문은 GPU 서버와 기업용 서버를 맡습니다. 4분기에 두 부문이 각각 162억 8,000만 달러와 180억 달러로 매출의 63%를 차지했습니다. 모바일·클라이언트(131억 달러)는 스마트폰과 PC를, 자동차·임베디드(68억 달러)는 차량과 산업 장비를 상대합니다.

밸류체인에서 마이크론의 자리는 엔비디아와 다릅니다. 칩을 설계해 파운드리에 맡기는 회사가 아니라, 웨이퍼를 깎고 쌓고 패키징하는 설비를 직접 가진 회사입니다. 앞단에서는 ASML의 노광장비와 어플라이드 머티어리얼즈·램리서치·KLA의 증착·식각·검사 장비가 필요하고, 뒷단에서는 D램 다이를 수직으로 쌓아 실리콘 인터포저 위에 올리는 첨단 패키징이 필요합니다. 엔비디아와 AMD의 가속기에 들어가는 HBM은 이 회사의 생산 능력에 직접 묶여 있습니다. 마이크론은 엔비디아와 함께 업계 첫 맞춤형 HBM4E인 NV-HBM을 개발하고 있고, 이 제품은 차세대 GPU와 NV링크 퓨전 플랫폼에 들어갈 예정입니다.

경쟁 구도는 세 회사로 좁혀집니다. D램 시장은 3분기 매출 기준으로 삼성전자 38%, SK하이닉스 29%, 마이크론 21%, 중국 CXMT 9%입니다. HBM에서는 순서가 달라 SK하이닉스가 50%로 앞서고 삼성전자 33%, 마이크론 18%입니다. 마이크론의 HBM 생산 능력은 연말 기준 월 10만 장 안팎으로 추정되는데, 이는 1년 전의 두 배이지만 삼성전자와 SK하이닉스의 절반 수준입니다. 싱가포르와 대만에 패키징 설비를 계속 넣으면서 격차를 줄이는 중입니다.

## 최근 실적과 핵심 지표

4분기(9월 3일 마감) 매출은 <strong>542억 3,000만 달러</strong>로 전년 동기 113억 달러에서 379% 늘었습니다. 분기 매출로 여섯 번째 연속 사상 최대이고, 전 분기 대비로도 31% 늘었습니다. D램이 398억 달러(+343%)로 매출의 73%, 낸드가 141억 달러(+526%)로 26%였습니다. 출하량은 D램이 한 자릿수 중반, 낸드가 10% 늘었을 뿐인데 매출이 이만큼 커진 것은 가격 때문입니다. D램 평균판매가격은 전 분기 대비 10%대 후반, 낸드는 30%가량 올랐습니다.

이익은 매출보다 빠르게 늘었습니다. 총이익률이 <strong>87.0%</strong>(비GAAP)로 전 분기 84.9%에서 더 올랐고, 영업이익은 446억 달러로 매출의 82.3%입니다. 주당순이익은 <strong>33.42달러</strong>(비GAAP)로 전년 같은 분기 3.03달러의 열한 배입니다. 영업활동 현금흐름만 440억 달러였습니다. 2026회계연도 전체로는 매출 1,331억 9,000만 달러(+256%), 총이익률 81.1%, 주당순이익 75.52달러입니다.

1분기 가이던스는 매출 <strong>615억 달러</strong>±15억 달러, 총이익률 86.25%, 주당순이익 <strong>38.15달러</strong>±1달러입니다. 회사는 1분기가 2027회계연도 총이익률의 바닥이 될 것이라고 밝혔습니다. 여기에 두 가지 계약 조건이 붙어 있습니다. 장기 공급계약 26건의 남은 이행 의무가 약 <strong>1,500억 달러</strong>이고, 모두 전량 인수 조건입니다. 2030년까지 예상 매출의 35% 이상이 이 계약으로 묶여 있습니다. 회사는 계약상 가격 하한만 적용해도 과거 사이클 정점의 마진을 넘는다고 말합니다.

지금 주가를 이 숫자에 대면 계산이 단순해집니다. 2027회계연도 컨센서스 주당순이익 176.50달러로 나누면 <strong>4.0배</strong>, 2028년 207.76달러로 나누면 3.4배입니다. 같은 기간 매출이 두 배 넘게 늘어난다고 보고 있다는 뜻이고, 시장이 그 전망을 온전히 믿지 않는다는 뜻이기도 합니다.

## 간밤 이슈와 경쟁 구도

이날 마이크론을 움직인 것은 회사 뉴스가 아니라 엔비디아였습니다. 젠슨 황의 복귀 발표 뒤 AI 관련주가 일제히 반등했고, 메모리는 그 중심에 섰습니다. 마이크론 19.04%, SK하이닉스 미국주식예탁증서 20.6%, 웨스턴디지털과 시게이트 14%, 샌디스크 11%였습니다. 같은 날 마벨이 18.37%, Arm이 16%대, TSMC가 14.01% 올랐으니 반도체 전체가 뛴 날이지만, 메모리 쪽 상승률이 두드러졌습니다.

배경에는 지난 두 달의 낙폭이 있습니다. 마이크론은 6월 25일 사상 최고 종가 1,213.56달러를 찍은 뒤 10월까지 40% 넘게 빠졌습니다. 이유는 세 가지였습니다. 중국 CXMT가 밀도를 높인 D램 설계를 내놓으면서 공급 과잉 우려가 커졌고, 낸드 현물가격이 계약가격보다 먼저 꺾였고, 11월 초 애플이 메모리 조달 비용을 두고 이례적이라고 말하면서 수요 훼손 가능성이 부각됐습니다. 여기에 엔비디아 사태로 AI 설비투자 자체가 흔들리자 메모리주는 가장 먼저 팔렸습니다. 이날 반등은 그 세 가지 중 세 번째를 되돌린 것입니다.

회사 쪽 재료는 최근 며칠 사이에 나왔습니다. 스콧 드보어 사장은 18일 인터뷰에서 메모리 부족이 이미 여러 해 이어지고 있다고 말했고, 같은 날 트렌드포스는 2027년 전망을 내놓으며 일반 D램 계약가격이 1분기 5~10%, 2분기 3~8% 더 오르고 하반기에도 보합에서 5% 상승할 것으로 봤습니다. 마이크론의 2027회계연도는 9월 초에 끝나므로, 이 가격 전망은 회계연도 전체를 덮습니다. 19일에는 1분기 실적 발표일을 12월 17일로 확정했습니다.

주목할 점은 이날 상승이 업종 전체의 베타였다는 것입니다. 개별 종목의 새 계약이나 고객 발표는 없었습니다. 따라서 다음 판단은 두 가지 숫자에 달려 있습니다. 12월 17일 실적에서 1분기 가이던스를 채우는지, 그리고 4분기부터 2027년까지 이어지는 계약가격 상승이 실제 청구서에 반영되는지입니다. 이날 19%는 그 전제가 유지될 것이라는 베팅이지, 확인된 결과가 아닙니다.

## 추후 체크포인트와 리스크

<!-- 이 목록은 frontmatter의 watchItems에서 카드로 렌더링됩니다. -->

## 출처

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
