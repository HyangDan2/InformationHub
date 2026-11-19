---
title: "US Markets 스포트라이트 · NVDA — 실적은 예상을 웃돌았지만, 주가는 52주 신저가 부근에 머물렀다"
date: 2026-11-19T06:50:00+09:00
channel: "us-markets"
navSection: "us-markets"
reportKind: "spotlight"
summary: "매출 1,158억 달러, 데이터센터 1,076억 달러, 4분기 가이던스 1,300억 달러. 매출·가이던스 모두 시장 예상을 웃돌았지만 주가는 -2.89%로 52주 최저선에 붙었습니다. 실적 호조에도 주가가 눌린 배경에는 CEO 승계 불확실성과 중국 규제 변수가 있습니다."
tickers: ["NVDA"]
spotlight:
  snapshot:
    - { label: "종가", value: "150.96달러", note: "-2.89% · 52주 최저 148.80", tone: "down" }
    - { label: "시가총액", value: "3.75조 달러" }
    - { label: "3분기 매출", value: "1,158.4억 달러", note: "전년 동기 570억 달러" }
    - { label: "데이터센터", value: "1,076억 달러", note: "컨센서스 1,018.7억 달러" }
    - { label: "4분기 가이던스", value: "1,274~1,326억 달러", note: "컨센서스 1,251억 달러" }
    - { label: "2028회계연도 성장", value: "75%", note: "직전 전망 70%" }
    - { label: "11월 누적", value: "-24%", note: "6주 연속 하락", tone: "down" }
    - { label: "최근 5거래일", value: "-13.11%", tone: "down" }
  charts:
    - title: "분기 매출"
      unit: "십억 달러"
      caption: "2026회계연도 3분기는 전년 동기 실적, 2027회계연도 4분기는 회사 가이던스(1,274억~1,326억 달러)의 중간값입니다."
      rows:
        - { label: "FY26 3Q", sub: "작년 같은 분기", value: 57.0, digits: 1, note: "실적" }
        - { label: "FY27 3Q", sub: "이번 분기", value: 115.84, digits: 2, note: "실적", subject: true }
        - { label: "FY27 4Q", sub: "가이던스 중간값", value: 130.0, digits: 1, note: "전망" }
    - title: "3분기 매출 구성"
      unit: "십억 달러"
      caption: "데이터센터 1,076억 달러, 나머지 사업 82억 달러. 매출의 93%가 데이터센터에서 나옵니다."
      rows:
        - { label: "데이터센터", sub: "GPU·시스템", value: 107.6, digits: 1, note: "93%", subject: true }
        - { label: "기타", sub: "게이밍·오토모티브 등", value: 8.24, digits: 2, note: "7%" }
watchItems:
  - tag: "리더십"
    tone: "down"
    title: "후임 CEO 선임 시점"
    detail: "이사회 의장은 황 전 CEO의 복귀를 배제했지만 후보와 일정은 내놓지 않았습니다. 실적 발표 후 주가가 장중 상승분을 모두 반납한 직접적 이유입니다. 후임이 정해지고 로드맵이 확인되는 순간이 밸류에이션 재설정의 출발점입니다."
    when: "미정 · 이사회 공시"
  - tag: "정책"
    tone: "event"
    title: "중국향 임대 금지의 시행 세부"
    detail: "상무부는 엔비디아 칩이 중국 기업에 임대되는 경로를 막는 규정 변경을 예고했습니다. 가이던스는 이미 중국 데이터센터 매출을 0으로 가정하고 있고 이번 분기 중국 비중은 2% 수준이지만, 싱가포르·말레이시아 중계 수출 허가 요건은 네오클라우드 증설 속도를 늦출 수 있습니다."
    when: "시행 규정 공고"
  - tag: "수요"
    tone: "next"
    title: "4분기 가이던스의 질"
    detail: "4분기는 1주가 더 있는 분기라, 멜리어스 리서치는 순차 증가분 가운데 90억~100억 달러를 그 효과로 추정합니다. 실제 고객 주문이 얼마인지 확인하려면 다음 분기 가이던스에서 추가 주(週) 효과가 빠진 숫자를 봐야 합니다."
    when: "2027회계연도 1분기 가이던스"
  - tag: "경쟁"
    tone: "event"
    title: "앤트로픽 상장이 바꾸는 자금 흐름"
    detail: "1조 5,000억 달러 밸류에이션의 앤트로픽이 19일 상장합니다. AI 노출을 원하는 자금에 새 선택지가 생기는 만큼, 단기적으로는 엔비디아를 포함한 기존 AI 대형주에서 자금이 일부 이동할 수 있습니다."
    when: "11월 19일"
  - tag: "밸류에이션"
    tone: "flat"
    title: "52주 최저선 148.80달러"
    detail: "종가가 52주 최저선 바로 위에 있습니다. 이 선이 깨지면 기술적 매도가 겹칠 수 있지만, 실적과 가이던스가 유지되는 한 아래쪽은 실적이 받쳐 줍니다. 주간 하락이 이어지는지와 거래량, 두 가지를 함께 보면 판단에 도움이 됩니다."
    when: "이번 주"
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
  - label: "Blockchain.News — Semiconductor price table (종가·시가총액·52주 범위)"
    url: "https://blockchain.news/stocks/sector/semiconductors"
  - label: "AP — How major US stock indexes fared Wednesday 11/18/2026"
    url: "https://apnews.com/article/wall-street-stocks-dow-nasdaq-990749d3d269f7ef05b9f6c089713a58"
  - label: "Anthropic — Anthropic prices initial public offering"
    url: "https://www.anthropic.com/news/anthropic-prices-initial-public-offering"
  - label: "Reuters (Investing) — Anthropic valued at $1.5 trillion as IPO raises record $81 billion"
    url: "https://www.investing.com/news/stock-market-news/anthropic-prices-blockbuster-ipo-at-83-a-share-source-says-5037110"
---

## 한 줄 요약

3분기 숫자는 예상을 넘었습니다. 매출 <strong>1,158억 4,000만 달러</strong>, 조정 EPS <strong>2.68달러</strong>, 데이터센터 <strong>1,076억 달러</strong>, 4분기 가이던스 <strong>1,274억~1,326억 달러</strong>. 그런데 주가는 장중 +2.7%에서 방향을 바꿔 <strong>150.96달러(-2.89%)</strong>로 마감했습니다. 실적 호조가 주가로 이어지지 못한 이유는 숫자 밖에 있습니다.

## 실적: 숫자로 본 3분기

10월 25일 마감한 2027회계연도 3분기 매출은 <strong>1,158억 4,000만 달러</strong>로 전년 동기 570억 달러에서 두 배가 됐고, 시장 예상 1,091억 달러를 67억 달러 넘었습니다. 조정 EPS는 2.68달러로 예상 2.48달러를 웃돌았습니다. 데이터센터 매출은 <strong>1,076억 달러</strong>(예상 1,018억 7,000만 달러)로 매출의 93%를 차지했습니다.

가이던스도 강했습니다. 4분기 매출은 1,274억~1,326억 달러로 컨센서스 1,251억 달러를 넘었고, 2028회계연도 성장률 전망은 석 달 전 70%에서 <strong>75%</strong>로 올랐습니다. 중국 데이터센터 매출은 아예 0으로 가정한 숫자입니다. 이번 분기 중국 비중은 2% 수준이었습니다.

한 가지 봐야 할 것은 4분기에 1주가 더 있다는 점입니다. 멜리어스 리서치는 순차 증가분 가운데 90억~100억 달러를 그 추가 주(週) 효과로 추정했습니다. 매출이 얼마나 늘었는지보다, 추가 주를 걷어낸 뒤에도 증가율이 유지되는지가 다음 분기 실적을 가늠하는 잣대입니다.

## 주가: 실적 호조가 왜 주가로 이어지지 못했나

첫째, **리더십**입니다. 젠슨 황 CEO가 지난주 물러난 뒤 이사회는 그를 다시 불러들이지 않겠다고 밝혔지만, 후임 선임 일정은 제시하지 않았습니다. 하비 존스 이사회 의장은 실적 발표 후 컨퍼런스콜에서 이 문제에 대해 서두르는 모습을 보이지 않았고, 시장은 그 답을 기다리다 장중 상승분을 모두 반납했습니다. 오펜하이머는 목표주가를 제시하지 않은 상태로 "리더십 공백"을 이유로 들었습니다.

둘째, **중국 규제**입니다. 미 상무부는 엔비디아 칩이 중국 기업에 임대되는 경로를 막는 규정 변경을 예고했습니다. 회사 가이던스에는 이미 반영돼 있지만, 싱가포르·말레이시아 등 중계국 수출에 새 허가 요건이 붙으면 네오클라우드 증설 속도가 늦어질 수 있습니다. 이날 코어위브는 -4.13%, 아이렌은 -3.61%였고, 네비우스만 +0.87%로 버텼습니다.

셋째, **자금의 선택지**입니다. 1조 5,000억 달러로 평가된 앤트로픽이 19일 나스닥에 상장합니다. AI 노출을 원하는 자금 입장에서 새 대형 종목이 생기는 것이고, 단기적으로는 기존 AI 대형주에서 일부 자금이 빠져나갈 수 있습니다.

주가는 11월에만 24% 빠졌고 6주 연속 하락했습니다. 2012년 이후 가장 긴 연속 하락이고, 2025년 7월 이후 최저입니다. 52주 범위는 148.80~243.37달러로 종가는 최저선 바로 위에 있습니다.

## 앞으로 지켜볼 변수

<!-- 이 목록은 frontmatter의 watchItems에서 카드로 렌더링됩니다. -->

## 출처

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
