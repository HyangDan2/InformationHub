---
title: "US Markets 스포트라이트 · AVGO — 구글이 주문을 줄인 날, 브로드컴은 12% 빠졌다"
date: 2026-11-21T06:50:00+09:00
channel: "us-markets"
navSection: "us-markets"
reportKind: "spotlight"
summary: "3분기 매출 295억 9,000만 달러(+86%), AI 반도체 167억 달러(+221%), 4분기 가이던스 348억 달러. 숫자는 사상 최대였는데 주가는 하루에 12.19% 빠졌습니다. TF인터내셔널이 구글의 2027년 TPU 8i 발주를 20% 줄였다고 전했고, 앤트로픽에 최대 420억 달러를 대여한 노출까지 겹쳤습니다. 회사가 직접 답할 자리는 12월 9일입니다."
tickers: ["AVGO", "GOOGL", "NVDA", "AMD", "MU", "TSM"]
spotlight:
  snapshot:
    - { label: "종가", value: "304.41달러", note: "-12.19% · 장중 301.72", tone: "down" }
    - { label: "시가총액", value: "1조 4,500억 달러", note: "하루에 1,910억 달러 감소", tone: "down" }
    - { label: "3분기 매출", value: "295억 9,000만 달러", note: "+86% · 사상 최대" }
    - { label: "AI 반도체", value: "167억 달러", note: "매출의 56% · +221%" }
    - { label: "4분기 가이던스", value: "348억 달러", note: "AI 217억 달러 · +93%" }
    - { label: "2027년 AI 매출", value: "1,150억 달러", note: "2028년 2,300억 달러" }
    - { label: "6월 고점 대비", value: "-36%", note: "481.57달러 → 304.41달러", tone: "down" }
    - { label: "앤트로픽 노출", value: "최대 420억 달러", note: "대여 약정 + 지분 10억 달러", tone: "down" }
  charts:
    - title: "분기 매출"
      unit: "십억 달러"
      caption: "3분기는 전년 동기 대비 86%, 전 분기 대비 33% 늘었습니다. 4분기 348억 달러는 회사 가이던스입니다."
      rows:
        - { label: "Q3 2025", sub: "작년 같은 분기", value: 15.95, digits: 2, note: "실적" }
        - { label: "Q4 2025", sub: "2025회계연도 마감", value: 18.02, digits: 2, note: "실적" }
        - { label: "Q1 2026", sub: "1분기", value: 19.31, digits: 2, note: "실적" }
        - { label: "Q2 2026", sub: "2분기", value: 22.19, digits: 2, note: "실적" }
        - { label: "Q3 2026", sub: "이번 분기", value: 29.59, digits: 2, note: "실적", subject: true }
        - { label: "Q4 2026", sub: "가이던스", value: 34.80, digits: 2, note: "전망" }
    - title: "연간 AI 반도체 매출"
      unit: "십억 달러"
      caption: "2025회계연도 200억 달러에서 2026년 580억 달러로 2.9배 늘고, 2027년과 2028년에는 각각 두 배씩 커지는 계획입니다. 회사는 두 해 물량의 공급을 이미 확보했다고 밝혔습니다."
      rows:
        - { label: "FY2025", sub: "실적", value: 20.0, digits: 1, note: "+65%" }
        - { label: "FY2026", sub: "가이던스", value: 58.0, digits: 1, note: "+186%", subject: true }
        - { label: "FY2027", sub: "전망", value: 115.0, digits: 1, note: "두 배" }
        - { label: "FY2028", sub: "전망", value: 230.0, digits: 1, note: "두 배" }
    - title: "3분기 매출 구성"
      unit: "십억 달러"
      caption: "AI 반도체가 매출의 56%로 2분기 49%에서 뛰었습니다. 나머지 반도체(브로드밴드·무선·서버 스토리지)는 41억 달러, 인프라 소프트웨어는 88억 달러입니다."
      rows:
        - { label: "AI 반도체", sub: "XPU·AI 네트워킹", value: 16.7, digits: 1, note: "56%", subject: true }
        - { label: "비AI 반도체", sub: "브로드밴드·무선·스토리지", value: 4.1, digits: 1, note: "14%" }
        - { label: "인프라 소프트웨어", sub: "VMware 등", value: 8.8, digits: 1, note: "30%" }
watchItems:
  - tag: "실적"
    tone: "next"
    title: "12월 9일 — 구글 발주 질문에 회사가 직접 답한다"
    detail: "브로드컴은 9일 장 마감 뒤 4분기(11월 1일 마감) 실적과 내년 전망을 내놓습니다. 시장이 볼 것은 두 가지입니다. 2027회계연도 AI 매출 1,150억 달러 전망을 그대로 유지하는지, 구글 물량 변화를 처음으로 입으로 확인하는지입니다. 최근 네 번의 실적 가운데 세 번은 다음 날 주가가 빠졌고, 6월에는 13% 하락했습니다. 여덟 번의 평균 변동폭은 10%였습니다."
    when: "12월 9일(현지시간) 장 마감 후"
  - tag: "고객"
    tone: "down"
    title: "TPU 8i와 8t — 100만 대가 뜻하는 것"
    detail: "궈의 조사에 따르면 구글은 학습용 8t를 미디어텍에서 더 받고, 추론용 8i는 브로드컴 쪽 계획을 줄입니다. 8i 가운데 값이 비싼 맥스(코드명 화이트피시)에 감축이 몰렸습니다. 확정된 내용은 아니고 두 회사 모두 답하지 않았습니다. 확인 지점은 구글의 다음 실적 발표와 TSMC의 선단 패키징 배분, 내년 상반기 미디어텍 8t 출하 시점입니다."
    when: "2027년 물량 확정 시점"
  - tag: "금융"
    tone: "down"
    title: "앤트로픽 대출 420억 달러의 조건"
    detail: "브로드컴과 앤트로픽의 3월 계약은 임대료를 전환사채로 대신 받는 구조입니다. 정상 조건은 연 9%에 원금에 이자를 더하는 방식이고, 매출이 계약상 기준에 못 미치는 기간에 발행되는 채권은 13%에 시가의 85%로 전환됩니다. 상환 기한은 57~63개월이고, 9월 30일 기준으로 아직 한 장도 발행되지 않았습니다. 10월 26일 발표된 630억 달러 특수목적법인에서는 브로드컴이 선순위 대출만큼의 잔존가치를 보증합니다. 매출과 금융이 같은 방향으로 움직이는 구조입니다."
    when: "분기 공시마다 확인"
  - tag: "회계"
    tone: "down"
    title: "매출의 질 — 순환 금융 논쟁"
    detail: "SEC는 엔비디아의 회계를 들여다보고 있고, 집행국장은 AI 기업의 공시를 점검하겠다고 예고했습니다. 브로드컴은 칩을 팔면서 고객에게 돈을 빌려주고, 그 고객의 매출이 다시 자기 매출로 잡히는 자리에 있습니다. 12월 실적에서 금융 지원 규모와 조건을 얼마나 나눠서 설명하는지가 밸류에이션의 전제를 바꿉니다."
    when: "12월 9일 · SEC 진행 상황"
  - tag: "주가"
    tone: "flat"
    title: "291.53달러와 481.57달러"
    detail: "이날 장중 저점은 301.72달러였습니다. 11월 5일 종가 291.53달러가 지난 1년 최저이고, 여기가 무너지면 다음 지지선은 더 아래에 있습니다. 반대로 골드만삭스(목표 460달러)와 레드번(398달러)의 목표가는 지금 주가보다 30~50% 위에 있습니다. 두 곳 모두 투자의견을 낮춘 뒤에도 목표가를 주가 위에 두고 있다는 점은 참고할 만합니다."
    when: "이번 주"
  - tag: "공급"
    tone: "event"
    title: "선단 웨이퍼·기판·HBM·전력"
    detail: "1,150억 달러 전망의 전제는 공급입니다. 회사는 선단 웨이퍼와 기판, HBM을 확보했다고 했지만 수요가 전망을 웃돈다고도 인정했습니다. 궈가 구글의 발주 조정 이유로 든 것도 데이터센터 전력입니다. 전력과 패키징이 병목이면 주문이 줄어드는 것이 아니라 일정이 밀릴 뿐이라는 해석과, 고객이 우선순위를 바꾸는 것이라는 해석이 갈립니다."
    when: "2027년 공급 계약"
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
  - label: "l0g — Anthropic: supplier financing and AI contracts (420억 달러 대여·630억 달러 SPV 분석)"
    url: "https://l0g.fr/en/analysis/anthropic-supplier-financing-ipo/"
  - label: "Fortune — Anthropic's IPO filing shows the risky financing needed to achieve its compute goals"
    url: "https://fortune.com/2026/11/04/dario-amodei-wants-a-country-of-geniuses-in-a-data-center-realizing-that-vision-requires-tricky-financial-mechanics-anthropics-ipo-filing-shows/"
  - label: "Reuters — Nvidia's accounting is a focus of US SEC investigation, sources say"
    url: "https://www.reuters.com/5f374b32b07b/world/us-secs-nvidia-probe-is-examining-potential-accounting-issues-sources-say-2026-11-20/"
  - label: "Anthropic — IPO pricing prospectus (SEC, 2026-11-18)"
    url: "https://www.sec.gov/Archives/edgar/data/2130357/000162828026074937/anthropicpbc-fwppricing.htm"
---

브로드컴 주가가 하루에 12% 빠졌습니다. 3분기 매출은 295억 9,000만 달러로 전년 대비 86% 늘었고, AI 반도체만 167억 달러로 세 배 넘게 커졌습니다. 4분기 가이던스도 348억 달러입니다. 숫자만 보면 실적이 아니라 사고가 난 것처럼 보이는 하루입니다. 이유는 두 가지였습니다. 구글이 내년 주문을 줄였다는 보도, 그리고 앤트로픽에 돈을 빌려주는 회사라는 사실이 갑자기 다시 계산되기 시작한 것입니다.

## 기업 개요와 밸류체인 포지션

브로드컴은 두 개의 다리로 서 있습니다. 하나는 반도체입니다. 2025회계연도 매출 638억 9,000만 달러 가운데 369억 달러가 반도체, 270억 달러가 인프라 소프트웨어였습니다. 반도체 안에서도 성격이 갈립니다. AI용 맞춤형 가속기(XPU)와 AI 네트워킹이 성장을 끌고, 브로드밴드·무선·서버 스토리지 같은 전통 사업이 바닥을 받칩니다. 다른 하나는 소프트웨어입니다. VM웨어 클라우드 파운데이션이 기업 고객의 구독료를 만들어 냅니다. AI 사이클이 흔들릴 때 매출의 30%가 구독이라는 점은 완충 장치입니다.

AI에서 브로드컴의 자리는 엔비디아와 다릅니다. 범용 GPU를 파는 회사가 아니라, 소수의 대형 고객을 위해 칩을 설계해 주는 회사입니다. 고객은 여섯 곳입니다. 구글의 텐서프로세싱유닛(TPU)이 가장 크고, 메타의 추론용 자체 칩(MTIA), 오픈AI의 첫 맞춤 칩(할라페뇨), 앤트로픽이 뒤를 잇습니다. 지난 3분기 XPU 출하는 전년 대비 3.5배 늘어 AI 매출의 73%를 차지했습니다. 나머지는 네트워킹입니다. 수천 개의 칩을 한 덩어리로 묶으려면 스위치와 광모듈, 신호 처리 부품이 필요한데, 이 부품을 함께 파는 회사가 브로드컴입니다. 2분기에는 AI 매출의 40% 가까이가 네트워킹에서 나왔습니다.

밸류체인에서 브로드컴은 설계를 맡고 생산은 TSMC가 합니다. 선단 웨이퍼와 기판, HBM 메모리를 조달해 패키징까지 끝내면, HPE·델·레노버 같은 서버 업체가 랙으로 조립합니다. 브로드컴이 직접 만드는 것은 설계와 소프트웨어, 그리고 고객과의 계약입니다.

2026년에 새로 생긴 자리가 하나 더 있습니다. 금융입니다. 앤트로픽은 3월 계약으로 임대료를 최대 420억 달러까지 전환사채로 대신 내기로 했고, 브로드컴은 앤트로픽 상장과 함께 진행된 사모 배정에 10억 달러를 넣었습니다. 10월 26일에는 뱅크오브아메리카·블랙스톤·씨티·모건스탠리가 630억 달러 규모의 특수목적법인을 세워 브로드컴 장비를 사들여 앤트로픽에 빌려주는 구조가 나왔습니다. 브로드컴은 이 거래에서 선순위 대출에 해당하는 잔존가치를 보증합니다. 칩을 팔고, 그 칩을 살 돈을 빌려주고, 빌려준 돈의 담보까지 서는 셈입니다.

## 최근 실적과 핵심 지표

3분기(8월 2일 마감) 매출은 <strong>295억 9,000만 달러</strong>로 전년 동기 159억 5,200만 달러에서 86% 늘었습니다. AI 반도체가 <strong>167억 달러</strong>(+221%, 전 분기 대비 +54%)로 매출의 56%를 차지했고, 2분기 49%에서 비중이 더 커졌습니다. 반도체 부문 전체는 208억 달러(+127%), 인프라 소프트웨어는 88억 달러였습니다.

이익도 함께 늘었습니다. 비GAAP 영업이익은 201억 달러로 매출의 67.9%, GAAP 영업이익은 160억 달러입니다. 비GAAP 주당순이익은 <strong>3.32달러</strong>(+96%), GAAP 기준으로는 2.68달러입니다. 영업활동 현금흐름 142억 달러에서 설비투자 5억 달러를 뺀 잉여현금흐름은 <strong>137억 달러</strong>로 매출의 46%였고, 보유 현금은 240억 달러입니다. 분기 배당은 주당 0.65달러로 지난해 12월 10% 올린 뒤 유지하고 있습니다.

4분기 가이던스는 매출 <strong>348억 달러</strong>(+93%), AI 반도체 <strong>217억 달러</strong>(+236%), 비GAAP 영업이익률 66%입니다. 4분기에는 앤트로픽향 아이언우드 출하가 빨라지고, 구글향 TPU 8i가 본격 양산되고, 오픈AI 할라페뇨와 메타 MTIA도 나란히 출하됩니다. 회사는 2026회계연도 AI 매출을 580억 달러로 보고, 2027년 1,150억 달러, 2028년 2,300억 달러까지 두 배씩 늘리겠다고 밝혔습니다. 2028년 주당순이익 30달러 초과도 자신했습니다.

여기서 두 가지를 짚어야 합니다. 첫째, 이 전망은 9월에 나온 것이고 그 뒤로 구글 발주 축소 보도가 나왔습니다. 회사가 석 달 만에 숫자를 낮출 수 있는 자리가 12월 9일입니다. 둘째, 2028년 주당순이익 30달러를 그대로 받아들이면 지금 주가는 그 숫자의 10배 수준입니다. 골드만삭스가 이익 추정치는 그대로 두고 배수만 30배에서 25배로 낮춰 목표가를 460달러로 내린 것도 같은 계산에서 나왔습니다.

## 간밤 이슈와 경쟁 구도

직접 원인은 TF인터내셔널 밍치궈 애널리스트의 게시물이었습니다. 그는 최신 공급망 조사를 근거로 "구글이 2027년 브로드컴 설계 TPU 8i 출하 계획을 약 100만 대, 20% 줄였다"고 밝혔습니다. 감축은 값이 비싼 8i 맥스(코드명 화이트피시)에 집중됐고, 구글은 대신 미디어텍이 설계하는 8t를 더 받을 계획이라고 했습니다. 세부 내용은 아직 확정되지 않았다고 덧붙였습니다. 구글과 브로드컴 모두 공개적으로 답하지 않았고, 보도에 인용된 숫자는 어느 회사의 확인도 받지 않은 추정이라는 점을 먼저 분명히 해 둡니다.

그래도 시장이 반응한 이유는 숫자 자체보다 방향입니다. 8t는 학습용, 8i는 추론용입니다. 궈는 구글이 "프론티어 모델 개발이 컴퓨팅을 가장 먼저 가져간다"고 여러 차례 강조해 왔다며, 공급망과 데이터센터 전력이 빠듯한 상황에서 학습 쪽으로 물량을 돌리는 조정이라고 설명했습니다. 추론 수요가 계속 늘어난다면 결국 8i가 다시 필요해지겠지만, 내년 매출 계획에서 20%가 빠지는 것과 순서가 바뀌는 것은 다릅니다.

구글과의 관계가 끝난 것은 아닙니다. 브로드컴은 4월에 구글과 차세대 TPU를 계속 함께 개발하고 2031년까지 네트워킹 부품을 공급하기로 하는 계약을 맺었습니다. 9월 2일 실적 발표에서 CEO 혹 탄은 "구글과의 협업은 그 어느 때보다 강하다"고 말했고, 미디어텍 8t가 먼저 시작됐는데도 8i를 먼저 출하했다고 강조했습니다. 발주가 미디어텍으로 일부 옮겨 가더라도 네트워킹 매출과 개발 계약은 브로드컴에 남습니다.

앤트로픽 쪽은 방향이 반대입니다. 궈가 지목한 8i는 바로 브로드컴이 앤트로픽에 대는 칩입니다. 혹 탄은 앤트로픽이 2027년 브로드컴의 최대 XPU 고객이 되어 8i를 5기가와트 규모로 깔 것이라고 했고, 오픈AI가 2028년 두 번째 고객이 된다고 봤습니다. 구글 물량이 줄어도 앤트로픽이 늘면 상쇄되는 구조입니다. 다만 앤트로픽은 이제 상장사이고, 주가는 둘째 날 8.50% 빠져 공모가 83달러에 겨우 붙어 있습니다. 앤트로픽이 설비를 늘릴수록 브로드컴의 매출과 대여 잔액이 함께 커지는 만큼, 두 회사의 위험이 같은 방향으로 묶여 있다는 지적도 함께 커집니다.

경쟁 구도는 이날 하루에 압축돼 나타났습니다. 엔비디아 -14.01%, AMD -13.25%, 마이크론 -13.89%, 브로드컴 -12.19%, TSMC -9.30%였고, 마벨과 ARM, 아리스타도 장중 10% 안팎 밀렸습니다. 대만 증시에서는 미디어텍이 10% 빠졌습니다. 8t로 물량이 옮겨 간다는 소식이 미디어텍에 유리한 재료인데도 대만 시장 전체가 6% 넘게 무너진 날이라, 수혜주조차 팔렸습니다.

이 와중에 애널리스트들은 목표가를 줄줄이 낮춰 왔습니다. 골드만삭스는 18일 목표가를 540달러에서 460달러로 내리며 매수 의견은 유지했고, 로스차일드앤코 레드번은 지난주 투자의견을 중립으로 낮추고 목표가를 595달러에서 398달러로 잘랐습니다. 두 목표가 모두 이날 종가보다 30~50% 높습니다. 반대로 웨드부시의 댄 아이브스는 이번 매도가 "패닉에 가까운 청산"이라며, 내년 빅테크 설비투자가 1조 5,000억 달러 수준이라는 전제는 바뀌지 않았다고 말했습니다.

## 추후 체크포인트와 리스크

<!-- 이 목록은 frontmatter의 watchItems에서 카드로 렌더링됩니다. -->

## 출처

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
