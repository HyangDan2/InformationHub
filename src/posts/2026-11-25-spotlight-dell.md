---
title: "US Markets 스포트라이트 · DELL — 1,323억 달러 잔고를 쌓고도 주가는 고점에서 반토막"
date: 2026-11-25T06:50:00+09:00
channel: "us-markets"
navSection: "us-markets"
reportKind: "spotlight"
summary: "3분기 매출 549억 4,000만 달러(+103%), 비GAAP 주당순이익 9.45달러(+265%). AI 서버 매출이 220억 달러로 291% 늘었고, 한 분기에 602억 달러를 새로 수주해 잔고는 1,323억 달러까지 쌓였습니다. 연간 매출 전망은 2,020억 달러로 올해만 세 번째 상향입니다. 그런데 주가는 실적을 내기 전날 11.83% 빠졌고, 발표 뒤 시간외에서도 방향을 잡지 못했습니다. 4분기 가이던스가 매출은 2.5% 늘리면서 주당순이익은 11% 줄이는 숫자였기 때문입니다."
tickers: ["DELL", "NVDA", "HPE", "HPQ", "MU", "INTC"]
spotlight:
  snapshot:
    - { label: "종가", value: "295.28달러", note: "-11.83% · 실적 발표 전날", tone: "down" }
    - { label: "시가총액", value: "약 1,880억 달러", note: "1년 전보다 124% 증가" }
    - { label: "3분기 매출", value: "549억 4,000만 달러", note: "+103% · 3분기 연속 최대" }
    - { label: "3분기 주당순이익", value: "9.45달러", note: "비GAAP · +265%" }
    - { label: "AI 서버 매출", value: "220억 달러", note: "+291% · 전체 매출의 40%" }
    - { label: "AI 수주 · 잔고", value: "602억 · 1,323억 달러", note: "잔고 한 분기에 373억 증가", tone: "up" }
    - { label: "4분기 가이던스", value: "563억 달러", note: "주당순이익 8.40달러 · 3분기보다 감소", tone: "down" }
    - { label: "FY27 매출 전망", value: "2,020억 달러", note: "세 번째 상향 · +78%" }
    - { label: "ISG 영업이익률", value: "17.0%", note: "1년 전 12.4% · 2분기 15.0%", tone: "up" }
    - { label: "예상 PER", value: "약 10배", note: "FY27 EPS 29.68달러 기준" }
    - { label: "고점 대비", value: "-50.4%", note: "595.51달러 → 295.28달러", tone: "down" }
  charts:
    - title: "분기 매출"
      unit: "십억 달러"
      caption: "1년 전 270억 달러이던 분기 매출이 두 배가 됐습니다. 4분기 563억 달러는 회사 가이던스입니다."
      rows:
        - { label: "FQ3 2026", sub: "작년 같은 분기", value: 27.01, digits: 2, note: "실적" }
        - { label: "FQ4 2026", sub: "1월 마감", value: 33.32, digits: 2, note: "실적" }
        - { label: "FQ1 2027", sub: "5월 1일 마감", value: 43.84, digits: 2, note: "+88%" }
        - { label: "FQ2 2027", sub: "7월 31일 마감", value: 46.97, digits: 2, note: "+58%" }
        - { label: "FQ3 2027", sub: "10월 30일 마감", value: 54.94, digits: 2, note: "+103%", subject: true }
        - { label: "FQ4 2027", sub: "가이던스", value: 56.30, digits: 2, note: "전망" }
    - title: "AI 서버 매출"
      unit: "십억 달러"
      caption: "2분기까지 160억 달러대에 머물던 AI 서버 매출이 3분기에 220억 달러로 뛰었습니다. 나머지 세 분기 매출을 합하면 545억 달러이고, 연간 가이던스는 780억 달러입니다."
      rows:
        - { label: "FQ2 2026", sub: "작년 4월 분기", value: 8.21, digits: 2, note: "실적" }
        - { label: "FQ3 2026", sub: "작년 7월 분기", value: 5.64, digits: 2, note: "실적" }
        - { label: "FQ4 2026", sub: "1월 마감", value: 8.95, digits: 2, note: "실적" }
        - { label: "FQ1 2027", sub: "5월 1일 마감", value: 16.13, digits: 2, note: "+757%" }
        - { label: "FQ2 2027", sub: "7월 31일 마감", value: 16.40, digits: 2, note: "+100%" }
        - { label: "FQ3 2027", sub: "10월 30일 마감", value: 22.03, digits: 2, note: "+291%", subject: true }
    - title: "AI 서버 잔고"
      unit: "십억 달러 · 분기 말"
      caption: "잔고는 2분기 950억 달러에서 1,323억 달러로 늘었습니다. 같은 기간 수주는 244억, 609억, 602억 달러입니다."
      rows:
        - { label: "FQ1 2027", sub: "3분기 연속 최대", value: 51.3, digits: 1, note: "수주 244억" }
        - { label: "FQ2 2027", sub: "3분기 연속 최대", value: 95.0, digits: 1, note: "수주 609억" }
        - { label: "FQ3 2027", sub: "3분기 연속 최대", value: 132.3, digits: 1, note: "수주 602억", subject: true }
    - title: "3분기 사업부문 매출"
      unit: "십억 달러"
      caption: "AI 서버와 전통 서버를 합친 인프라 부문이 매출의 76%를 차지합니다. PC를 담당하는 클라이언트 부문은 3% 늘어나는 데 그쳤고 영업이익은 6% 줄었습니다."
      rows:
        - { label: "AI 서버", sub: "인프라 부문", value: 22.03, digits: 2, note: "40%" }
        - { label: "전통 서버·네트워킹", sub: "인프라 부문", value: 15.01, digits: 2, note: "27%" }
        - { label: "스토리지", sub: "인프라 부문", value: 4.93, digits: 2, note: "9%" }
        - { label: "클라이언트", sub: "PC·모니터", value: 12.89, digits: 2, note: "23%" }
    - title: "주당순이익"
      unit: "달러 · 비GAAP"
      caption: "1년 전 2.59달러이던 분기 이익이 9.45달러가 됐습니다. 4분기 가이던스는 8.40달러로, 매출이 늘어나는 분기에 이익은 줄어드는 숫자입니다."
      rows:
        - { label: "FQ3 2026", sub: "작년 같은 분기", value: 2.59, digits: 2, note: "실적" }
        - { label: "FQ4 2026", sub: "1월 마감", value: 3.87, digits: 2, note: "실적" }
        - { label: "FQ1 2027", sub: "실적", value: 4.86, digits: 2, note: "+214%" }
        - { label: "FQ2 2027", sub: "실적", value: 7.04, digits: 2, note: "+203%" }
        - { label: "FQ3 2027", sub: "실적", value: 9.45, digits: 2, note: "+265%", subject: true }
        - { label: "FQ4 2027", sub: "가이던스", value: 8.40, digits: 2, note: "전망" }
watchItems:
  - tag: "실적"
    tone: "next"
    title: "2월 말 4분기 — 이익률이 16%대로 돌아오는지"
    detail: "델은 4분기(1월 30일 마감) 매출을 563억 달러, 비GAAP 주당순이익을 8.40달러로 제시했습니다. 매출은 3분기보다 63억 달러 늘어나는데 주당순이익은 1.05달러 줄어드는 숫자입니다. 3분기 영업이익률이 13.5%, 인프라 부문 이익률이 17.0%까지 올랐던 만큼, 4분기에 그 수준이 유지되는지가 이 회사의 이익 체력에 대한 직접적인 답이 됩니다. 회사는 4분기 AI 서버 매출로 약 235억 달러를 암시하고 있습니다."
    when: "2027년 2월 말 · 델 4분기 실적 발표"
  - tag: "원가"
    tone: "down"
    title: "메모리 계약가 25~45% 인상 요구 — 매출을 키우고 이익을 깎는 힘"
    detail: "AI 서버 공급사들이 기존에 합의한 계약가를 25~45% 올려 달라고 요구하고 있다는 보도가 나왔습니다. 델은 1분기 실적 발표에서 \"수요가 공급을 넘고 메모리가 주된 제약\"이라고 밝혔습니다. 원가 상승분을 판가에 전가하면 매출은 커지지만 마진은 눌립니다. 바클레이즈가 10월에 델의 투자의견을 낮추며 든 논리도 정확히 이 지점이었습니다. 이 회사가 원가를 얼마나 넘기고 얼마나 흡수하는지가 4분기와 2027회계연도 마진의 방향을 가릅니다."
    when: "분기마다 확인 · 4분기 실적"
  - tag: "잔고"
    tone: "event"
    title: "1,323억 달러 잔고의 질 — 신용과 전력, 부지를 검증했다는 말의 무게"
    detail: "회사는 새 수주를 받을 때 고객의 신용과 자금 조달, 전력과 부지 확보까지 확인한다고 강조합니다. 잔고가 부실 고객의 주문으로 부풀지 않았다는 뜻입니다. 반대로 그만큼 잔고가 실제 매출로 바뀌는 속도는 고객의 데이터센터 준비 상황에 달려 있습니다. 네오클라우드 비중이 얼마인지, 선수금 조건이 어떤지가 다음 공시에서 확인할 지점입니다."
    when: "4분기 실적 · 10-K 공시"
  - tag: "PC"
    tone: "down"
    title: "클라이언트는 이미 마이너스 — AI가 가려준 부분"
    detail: "3분기 클라이언트 부문 매출은 3% 늘어나는 데 그쳤고 영업이익은 6% 줄었습니다. 2분기에는 매출이 20% 늘었으니 두 분기 만에 성장이 멈춘 셈입니다. 인텔은 2026년 PC 시장이 12% 줄고 하반기 출하는 20% 이상 감소할 것으로 봤고, 가트너는 3분기 세계 PC 출하량이 22.4% 줄었다고 집계했습니다. HP도 AI PC가 출하량의 60%에 이르렀지만 영업이익률은 6.6%에서 5.3%로 내려갔습니다. AI 서버가 좋아도 PC가 계속 이렇게 가면 전체 이익률에는 부담입니다."
    when: "4분기 실적 · 세트 업체 가이던스"
  - tag: "경쟁"
    tone: "flat"
    title: "폭스콘과 ODM 직판 50% — 브랜드의 몫은 줄어들 수 있다"
    detail: "서버 시장에서 대만 ODM의 직판 비중은 2026년 1분기 50.2%입니다. 1년 전 64.1%에서 줄었다고는 하지만 여전히 절반입니다. 델은 같은 기간 브랜드 제조사 가운데 점유율 16.5%로 1위이고, AI 서버 시장에서는 46.7%까지 올라섰습니다. 다만 GF증권은 델이 스페이스X의 VR200 물량 일부를 폭스콘에 내줬다고 지적했습니다. 하이퍼스케일러가 직접 주문할수록 브랜드 몫이 줄어드는 구조는 앞으로도 변수입니다."
    when: "분기 점유율 발표"
  - tag: "수급"
    tone: "down"
    title: "내부자 매도 35억 달러, 200일선은 아직 위에 있다"
    detail: "지난 1년간 내부자 매도는 35억 달러를 넘는데 매수는 없었습니다. 10월 15일에는 실버레이크 계열이 주가 고점 부근에서 대량으로 판 사실이 공시됐습니다. 주가는 50일 이동평균(467달러)과 200일 이동평균(349달러)을 모두 아래에 두고 있습니다. 애널리스트 21명 가운데 14명이 매수 의견이고 평균 목표주가는 569달러지만, 모건스탠리는 403달러로 목표가를 낮추며 보유 의견을 유지했습니다."
    when: "분기 공시 · 이동평균 회복 여부"
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
  - label: "TipRanks — Dell last-minute Q3 earnings alert: what Wall Street and options traders expect"
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
  - label: "CNBC — Stocks making the biggest moves: Dick's Sporting Goods, Analog Devices, Nvidia, Pinterest & more"
    url: "https://www.cnbc.com/2026/11/24/stocks-moving-the-most-today-live-updates.html"
---

델 테크놀로지스가 3분기 실적을 내놓은 날, 주가는 두 번 움직였습니다. 정규장에서 11.83% 빠진 295.28달러로 마감했고, 장 마감 뒤 실적이 나오자 시간외에서 6%까지 올랐다가 다시 상승분을 대부분 돌려줬습니다. 숫자만 보면 사상 최대입니다. 매출 549억 4,000만 달러에 주당순이익 9.45달러, 한 분기에 602억 달러를 수주해 쌓인 잔고가 1,323억 달러입니다. 그런데도 주가가 방향을 잡지 못한 이유는 하나입니다. 회사가 4분기 전망으로 매출은 늘리고 이익은 줄이는 숫자를 내놨기 때문입니다.

## 기업 개요와 밸류체인 포지션

델은 1984년 마이클 델이 세운 회사로 텍사스 라운드록에 본사를 두고 있습니다. 2018년 다시 상장했고, 지금은 두 개의 축으로 움직입니다. 서버·스토리지·네트워킹을 묶은 인프라솔루션그룹(ISG)과 PC·모니터를 파는 클라이언트솔루션그룹(CSG)입니다. 2027회계연도 9개월 매출 1,457억 5,000만 달러 가운데 ISG가 1,027억 6,500만 달러로 70%를 차지합니다. 1년 전만 해도 PC 회사로 불렸던 곳이 이제 인프라 회사가 됐습니다. 회사도 3분기 발표문에서 "우리는 이제 다른 회사"라며 "이익과 성장의 대부분을 ISG가 만든다"고 표현했습니다.

밸류체인에서 델의 자리는 부품을 만드는 회사도, 칩을 설계하는 회사도 아닙니다. 엔비디아의 GB300 NVL72와 차세대 베라루빈 NVL72, 인텔과 AMD의 중앙처리장치, 마이크론·SK하이닉스·삼성전자의 메모리를 받아 랙 단위로 조립하고 통합해 데이터센터에 세우는 일을 합니다. 대만의 폭스콘과 콴타 같은 ODM이 부품과 조립을 맡고, 델은 랙 전체를 출하 전에 시험하고 배송 뒤 6시간 안에 가동하는 방식으로 차이를 만듭니다. 액체냉각 설계와 전력·배선 통합, 운영 소프트웨어까지 묶은 '델 AI 팩토리'를 7,500개가 넘는 고객이 쓰고 있습니다. 고객은 하이퍼스케일러와 네오클라우드, 정부·소버린, 일반 기업으로 나뉩니다.

점유율은 이미 1위입니다. 시장조사기관 TBR은 2025년 브랜드 제조사의 AI 서버·시스템 시장에서 델이 46.7%를 가져갔다고 추정합니다. 슈퍼마이크로 25.0%, HPE 11.7%, 레노버 1.7%입니다. IDC의 2026년 1분기 세계 서버 매출 순위에서도 델이 16.5%로 1위였고, 하이퍼에이전시 집계로는 온프레미스 HPC 시장에서 24%를 차지해 HPE(21%)를 처음 앞질렀습니다.

경쟁자는 세 갈래입니다. 브랜드 제조사인 슈퍼마이크로·HPE·레노버, 대만 ODM인 폭스콘·콴타·위윈, 그리고 엔비디아가 직접 파는 DGX입니다. 이 가운데 ODM 직판은 1분기 기준 서버 매출의 50.2%를 차지합니다. 하이퍼스케일러가 직접 주문하는 물량이 그만큼 크다는 뜻이고, 브랜드 제조사의 몫은 그 나머지에서 나옵니다. 델이 기업과 소버린 고객, 중간 규모 네오클라우드에서 강한 이유도 여기에 있습니다. 랙을 사다 놓고 직접 통합할 인력이 없는 고객에게는 브랜드의 조립·검증·서비스가 값어치를 갖습니다.

## 최근 실적과 핵심 지표

3분기(10월 30일 마감) 매출은 <strong>549억 4,000만 달러</strong>로 전년 동기 270억 달러에서 103% 늘었습니다. 분기 매출로 세 번째 연속 사상 최대입니다. 인프라 부문이 419억 7,000만 달러로 198% 늘었고, 그 안에서 AI 서버가 <strong>220억 3,000만 달러</strong>(+291%), 전통 서버·네트워킹이 150억 1,000만 달러(+235%), 스토리지가 49억 3,000만 달러(+24%)였습니다.

이익은 매출보다 빠르게 늘었습니다. 영업이익이 74억 4,000만 달러로 251% 증가했고, 인프라 부문 영업이익은 71억 1,800만 달러로 308% 늘었습니다. 인프라 부문 이익률은 <strong>17.0%</strong>입니다. 1년 전 12.4%, 2분기 15.0%에서 계속 올라온 숫자입니다. AI 서버처럼 원가가 무거운 제품이 매출의 대부분을 차지하는데도 이익률이 개선됐다는 것은, 규모가 커지면서 부품 조달과 판관비에서 효율이 나왔다는 뜻입니다. 최고재무책임자는 비GAAP 기준 판관비가 매출의 7%로 42년 역사상 가장 낮아졌다고 밝혔습니다. 주당순이익은 <strong>9.45달러</strong>(비GAAP)로 전년 같은 분기 2.59달러의 네 배에 가까웠고, GAAP 기준으로는 8.82달러였습니다.

수주와 잔고는 이 회사를 설명하는 가장 중요한 숫자입니다. 3분기에 새로 받은 AI 서버 주문이 <strong>602억 달러</strong>이고, 분기 말 잔고는 <strong>1,323억 달러</strong>입니다. 2분기 말 950억 달러에서 한 분기에 373억 달러 늘었습니다. 회사는 수주마다 고객의 신용과 자금 조달 능력, 전력과 부지 확보까지 확인한다고 강조합니다. 잔고가 부실 주문으로 부풀지 않았다는 항변인 동시에, 잔고가 매출로 바뀌는 속도가 고객의 데이터센터 준비에 달려 있다는 고백이기도 합니다.

현금도 잘 돌고 있습니다. 3분기 영업활동현금흐름이 45억 달러, 9개월 누적 108억 달러입니다. 회사는 이 가운데 49억 달러를 자사주 매입과 배당으로 주주에게 돌려줬고, 이사회는 매입 한도를 250억 달러 더 늘렸습니다.

전망은 올해 들어 세 번째로 올라갔습니다. 4분기 매출 <strong>563억 달러</strong>(+69%), 비GAAP 주당순이익 <strong>8.40달러</strong>(+116%)를 제시했고, 2027회계연도 전체로는 매출 <strong>2,020억 달러</strong>(+78%), AI 서버 매출 780억 달러(+216%), 비GAAP 주당순이익 29.68달러(+188%)를 봅니다. 9개월 누적 주당순이익이 21.32달러였으니 4분기에 8.36달러를 더하면 연간 전망과 정확히 맞아떨어집니다.

여기서 계산이 갈립니다. 4분기 매출은 3분기보다 63억 달러 늘지만, 주당순이익은 9.45달러에서 8.40달러로 1.05달러 줄어듭니다. 매출은 사상 최대를 다시 쓰는데 이익은 뒤로 가는 분기입니다. 이익률이 3분기보다 1%포인트 이상 내려간다는 뜻이고, 시장이 이 숫자를 읽은 방식이 이날 시간외 주가의 등락으로 나타났습니다. 지금 주가는 2027회계연도 예상 주당순이익 29.68달러의 <strong>약 10배</strong>입니다. 같은 기간 매출이 78% 늘어난다고 보고 있는 회사로는 낮은 배수입니다. 시장이 그 전망의 마지막 두 분기를 믿지 않는다는 뜻이기도 합니다.

## 간밤 이슈와 경쟁 구도

주가는 실적을 내기 전부터 내려가고 있었습니다. 10월 초 사상 최고 595.51달러를 찍은 뒤 일곱 주 만에 절반이 날아갔습니다. 출발점은 10월 14일 바클레이즈의 투자의견 하향이었습니다. 팀 롱 애널리스트는 델과 HPE, 넷앱을 한꺼번에 낮추며 "기업 매출이 좋아진 것은 기업 AI 도입이 아니라 메모리 원가가 밀어올린 결과"라고 썼습니다. 메모리 가격이 정상화되면 성장도 되돌아온다는 논리였습니다. 그날 델은 11.3% 빠졌습니다. 10월 말에는 인텔이 PC 시장 악화를 경고했고, 가트너가 3분기 PC 출하량 22.4% 감소를 발표하면서 두 번째 파동이 왔습니다. 11월 5일 주가는 316달러까지 밀렸습니다. 전날 20.46% 급등은 엔비디아발 반등에 얹혀 간 것이고, 그 하루를 빼면 하락 추세는 이어지고 있었습니다.

이날 정규장 하락도 실적과는 무관했습니다. 같은 날 아침 HPE가 4분기 실적을 내고 2027회계연도 성장률 전망을 13~17%에서 27~35%로 올렸는데도 주가가 12% 빠졌습니다. 이유는 마진이었습니다. HPE는 클라우드·AI 부문 영업이익률이 2027회계연도에 14% 수준으로 내려갈 것이라고 밝혔습니다. 파이퍼샌들러는 "성장 정점과 멀티플 정점이 동시에 지나갔다는 우려"라고 해석했습니다. 델의 4분기 가이던스가 나오기 전에 시장은 이미 그 질문을 갖고 있었습니다.

실적이 나온 뒤에도 반응이 엇갈린 이유도 같습니다. 3분기 숫자는 바클레이즈의 논리를 정면으로 반박했습니다. 원가가 올랐는데도 인프라 이익률은 17.0%로 올랐고, AI 서버만 늘어난 것이 아니라 상대적으로 마진이 좋은 스토리지가 24% 늘었으며, 판관비율은 역대 최저였습니다. 그런데 4분기 가이던스에서 회사 스스로 이익 감소를 예고했습니다. 3분기의 반론이 일회성이었는지, 아니면 4분기에 일시적으로 눌렸다가 다시 올라가는지를 시장은 아직 모릅니다. 그래서 주가는 실적을 다 읽고도 방향을 정하지 못했습니다.

경쟁 구도도 이 질문에 답을 보태지 못합니다. HPE는 매출 145억 5,000만 달러(전년 대비 50% 증가)와 주당순이익 1.43달러로 예상을 넘기고도 마진 때문에 16%대 급락했습니다. 슈퍼마이크로는 마진이 9.9%에 머물고 법적 문제까지 겹쳐 점유율을 지킬 여력이 약해졌습니다. 대신 폭스콘이 스페이스X의 VR200 물량 일부를 가져갔다는 관측이 나옵니다. 메모리 공급사들은 기존 계약가를 25~45% 올려 달라고 요구하고 있습니다. 원가 상승을 판가로 넘기는 힘은 브랜드 제조사가 더 갖고 있지만, 그 힘을 쓸수록 고객의 다음 발주는 ODM으로 갈 수 있습니다. PC 쪽도 같은 방향입니다. HP는 AI PC가 출하량의 60%에 이르렀지만 영업이익률이 6.6%에서 5.3%로 내려갔고, 2027회계연도 전망에 대해 "신중한 접근"이라는 표현을 썼습니다. 델의 클라이언트 부문도 매출 3% 증가, 영업이익 6% 감소였습니다.

## 추후 체크포인트와 리스크

<!-- 이 목록은 frontmatter의 watchItems에서 카드로 렌더링됩니다. -->

## 출처

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
