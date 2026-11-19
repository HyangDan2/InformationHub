---
title: "US Markets 스포트라이트 · AMD — 3분기 숫자는 사상 최대였는데, 하루에 -7.72%"
date: 2026-11-20T06:50:00+09:00
channel: "us-markets"
navSection: "us-markets"
reportKind: "spotlight"
summary: "3분기 매출 133억 8,000만 달러, 데이터센터 85억 달러(+97%), 4분기 가이던스 170억 달러. 성장 속도는 오히려 빨라졌는데 주가는 -7.72% 급락했습니다. Hunterbrook의 공매도 보고서가 겨눈 것은 실적이 아니라 중국·홍콩 매출 22.4%, 싱가포르 10%대, 그리고 중국 합작사에 맡긴 후공정입니다."
tickers: ["AMD", "NVDA", "AVGO", "TSM", "MU"]
spotlight:
  snapshot:
    - { label: "종가", value: "489.19달러", note: "-7.72% · 장중 470.56", tone: "down" }
    - { label: "시가총액", value: "8,332억 달러" }
    - { label: "3분기 매출", value: "133.8억 달러", note: "+45% · 사상 최대" }
    - { label: "데이터센터", value: "85억 달러", note: "매출의 64% · +97%" }
    - { label: "4분기 가이던스", value: "170억 달러", note: "±3% · +66%" }
    - { label: "2027년 매출 전망", value: "+80% 이상", note: "직전 전망의 두 배" }
    - { label: "중국·홍콩 비중", value: "22.4%", note: "2025회계연도 77.5억 달러", tone: "down" }
    - { label: "52주 범위", value: "188.22~658.52달러", note: "고점 대비 -26%" }
  charts:
    - title: "분기 매출"
      unit: "십억 달러"
      caption: "2026회계연도 4분기는 회사 가이던스(170억 달러 ±3%)의 중간값입니다. 3분기 매출은 전년 동기 대비 45%, 전 분기 대비 16% 늘었습니다."
      rows:
        - { label: "Q3 2025", sub: "작년 같은 분기", value: 9.25, digits: 2, note: "실적" }
        - { label: "Q2 2026", sub: "전 분기", value: 11.54, digits: 2, note: "실적" }
        - { label: "Q3 2026", sub: "이번 분기", value: 13.38, digits: 2, note: "실적", subject: true }
        - { label: "Q4 2026", sub: "가이던스 중간값", value: 17.0, digits: 1, note: "전망" }
    - title: "데이터센터 매출"
      unit: "십억 달러"
      caption: "1년 만에 두 배 가까이 늘었습니다. 4분기에는 데이터센터만 전 분기 대비 50% 성장한다는 것이 회사 전망입니다."
      rows:
        - { label: "Q3 2025", sub: "작년 같은 분기", value: 4.31, digits: 2, note: "실적" }
        - { label: "Q2 2026", sub: "전 분기", value: 6.69, digits: 2, note: "실적" }
        - { label: "Q3 2026", sub: "이번 분기", value: 8.5, digits: 1, note: "+97%", subject: true }
    - title: "3분기 매출 구성"
      unit: "십억 달러"
      caption: "데이터센터가 매출의 64%로 1년 전 47%에서 뛰었습니다. 클라이언트·게이밍은 게임 부진으로 8% 줄었습니다."
      rows:
        - { label: "데이터센터", sub: "EPYC·Instinct", value: 8.5, digits: 1, note: "64%", subject: true }
        - { label: "클라이언트·게이밍", sub: "라이젠·게임", value: 3.7, digits: 1, note: "28%" }
        - { label: "임베디드", sub: "산업·자동차", value: 1.1, digits: 1, note: "8%" }
watchItems:
  - tag: "규제"
    tone: "down"
    title: "1월 10일 — 50% 소유 규칙 유예의 끝"
    detail: "블랙리스트 업체가 50% 이상 지분을 가진 해외 법인까지 규제를 넓히는 규칙이 유예 중이고, 그 유예가 2027년 1월 10일에 끝납니다. 이번 주 발효된 5개국 허가 규칙과 겹치면 AMD의 아시아 매출 추정치를 다시 잡아야 합니다. 보고서의 핵심도 실적이 아니라 이 달력입니다."
    when: "2027년 1월 10일"
  - tag: "정책"
    tone: "event"
    title: "싱가포르·말레이시아 등 5개국 허가"
    detail: "잠정 최종규칙은 싱가포르·말레이시아·인도네시아·태국·브라질로 가는 첨단 AI칩에 허가를 요구합니다. AMD는 2025회계연도에 싱가포르 고객에게 42억 8,000만 달러를 청구했고, 이는 전체 매출의 10%가 넘습니다."
    when: "이번 주 발효"
  - tag: "수요"
    tone: "next"
    title: "4분기 데이터센터 +50%는 지켜질까"
    detail: "회사는 4분기 데이터센터 매출이 전 분기 대비 50% 늘고, 2027년에는 전체 매출이 80% 이상 성장하며 데이터센터가 매출의 80%를 넘는다고 봅니다. 이 숫자가 성립하려면 Helios 랙스케일 출하가 HPE·델·레노버·슈퍼마이크로 등 OEM으로 퍼져야 합니다. 1월 초 CES 전후 공급망 코멘트가 첫 검증 지점입니다."
    when: "2027년 1월"
  - tag: "리스크"
    tone: "down"
    title: "고객 지분(warrants)과 자금조달 구조"
    detail: "AMD는 고객 계약에 얹은 지분 증권의 회계 효과로 3분기에 11억 달러의 비현금 비용을 인식했고, 앞으로 이 비용은 커집니다. 매출의 상당 부분을 지분과 대출로 뒷받침하는 구조라, 고객이 설비투자를 줄이면 매출과 평가손이 동시에 흔들립니다. 공매도 보고서가 'AI 자금경색'을 겨눈 이유입니다."
    when: "분기 실적마다 확대"
  - tag: "주가"
    tone: "flat"
    title: "470달러 지지선과 52주 최고 658.52달러"
    detail: "이날 장중 저점이 470.56달러였습니다. 여기서 다시 밀리면 11월 초 저점대까지 열려 있고, 반대로 회사 반박이 힘을 얻고 규제 일정이 미뤄지면 낙폭 회복이 빠른 종목입니다. 다음 주 초 반등 여부와 거래량을 함께 보십시오."
    when: "이번 주"
sources:
  - label: "CNBC — AMD stock dives on short-seller report of alleged China exposure"
    url: "https://www.cnbc.com/2026/11/19/amd-falls-on-short-seller-report-of-alleged-china-exposure.html"
  - label: "Reuters (Investing) — Short seller Hunterbrook shorts AMD citing concerns over China exports"
    url: "https://www.investing.com/news/stock-market-news/short-seller-hunterbrook-shorts-amd-citing-concerns-over-china-exports-5039475"
  - label: "Business Insider — AMD stock falls after short-seller says it has a China problem"
    url: "https://www.businessinsider.com/amd-stock-short-seller-hunterbrook-china-nvda-2026-11"
  - label: "Yahoo Finance — AMD stock drops after Hunterbrook Media raises export control concerns"
    url: "https://finance.yahoo.com/technology/article/amd-stock-drops-after-hunterbrook-media-raises-export-control-concerns-171508145.html"
  - label: "TipRanks — AMD stock plunges after short-seller report"
    url: "https://www.tipranks.com/news/amd-stock-plunges-after-short-seller-report-alleges-that-the-chipmaker-has-its-own-china-problem"
  - label: "Kiplinger — Dow Drops 1,100 Points as Anthropic Pops 17% (Hunterbrook 논리·AMD 주가)"
    url: "https://www.kiplinger.com/investing/stocks/dow-drops-1-100-points-as-anthropic-pops-17-percent-stock-market-today"
  - label: "AMD — AMD Reports Third Quarter 2026 Financial Results"
    url: "https://ir.amd.com/news-events/press-releases/detail/1303/amd-reports-third-quarter-2026-financial-results"
  - label: "AMD — Third Quarter 2026 Financial Results Prepared Remarks (Lisa Su·Jean Hu)"
    url: "https://newsroom.amd.com/documents/2026/11/84f4476b-f064-4f0f-957c-fe484853e178.pdf"
  - label: "Reuters (Investing) — AMD forecast eases AI spending fears as data-center sales surge"
    url: "https://www.investing.com/news/stock-market-news/amd-forecasts-quarterly-revenue-above-estimates-as-datacenter-growth-accelerates-4996502"
  - label: "CNBC — AMD Q3 2026 earnings report"
    url: "https://www.cnbc.com/amp/2026/11/03/amd-amd-q3-earnings-report-2026-.html"
  - label: "Blockchain.News — Semiconductor price table (종가·시가총액·52주 범위)"
    url: "https://blockchain.news/stocks/sector/semiconductors"
---

3분기 숫자만 보면 사상 최대입니다. 매출 <strong>133억 8,000만 달러</strong>(+45%), 데이터센터 <strong>85억 달러</strong>(+97%), 4분기 가이던스 <strong>170억 달러</strong>(+66%). 그런데 주가는 하루 만에 <strong>489.19달러(-7.72%)</strong>로 밀렸고, 장중에는 -11%까지 갔습니다. 숫자를 흔든 것이 아니라 중국 사업의 구조를 겨눈 보고서 하나가 시가총액 700억 달러 가까이를 지웠습니다.

## 기업 개요 — CPU 회사에서 AI 시스템 회사로

AMD는 한때 인텔의 저가 대안이었습니다. 지금은 다릅니다. 서버용 EPYC CPU로 점유율을 끌어올렸고, 엔비디아의 대안으로 AI 가속기 Instinct를 밀면서 사업의 무게중심이 데이터센터로 옮겨 갔습니다. 3분기 데이터센터 매출 비중은 64%로, 1년 전 47%에서 뛰었습니다. 매출의 3분의 2가 서버와 AI에서 나온다는 뜻입니다.

밸류체인에서 AMD의 자리는 설계입니다. 웨이퍼는 TSMC가 만들고, 조립·검사·패키징은 중국 퉁푸(Tongfu) 마이크로일렉트로닉스가 85% 지분을 가진 두 합작법인이 맡습니다. AMD가 나머지 15%를 보유하고, 그중 한 곳에는 1억 달러를 대여해 주고 있습니다. 소프트웨어는 서버 펌웨어로 이어집니다. 서버 업체가 AMD 칩을 얹으려면 AMD가 쓰는 시작(起動) 펌웨어가 필요한데, 이 파일이 어디로 흘러가는지가 이번 보고서의 출발점입니다.

## 실적 — 3분기 숫자와 4분기 가이던스

3분기 매출은 <strong>133억 7,700만 달러</strong>로 전년 동기 92억 4,600만 달러에서 45% 늘었고, 회사 가이던스 상단을 넘었습니다. 데이터센터는 <strong>85억 달러</strong>(+97%)로 매출의 64%를 차지했고, 부문 영업이익은 29억 달러(+168%), 영업이익률은 34%까지 올라섰습니다. 비GAAP 기준 주당순이익은 <strong>2.09달러</strong>로 74% 늘었습니다.

반대로 클라이언트·게이밍은 37억 달러로 8% 줄었습니다. 클라이언트(라이젠)가 29억 달러로 7% 늘어난 반면 게이밍이 7억 7,300만 달러로 40% 빠졌습니다. 임베디드는 11억 달러로 29% 늘었습니다. AI가 나머지 사업의 부진을 덮는 구조입니다.

가이던스는 더 공격적입니다. 4분기 매출 <strong>170억 달러(±3%)</strong>는 전년 대비 66%, 전 분기 대비 27% 성장입니다. 이 가운데 데이터센터가 전 분기 대비 50% 늘고, 클라이언트·게이밍은 20% 넘게 줄어드는 그림입니다. 리사 수 CEO는 2027년 매출이 80% 이상 늘고 데이터센터가 전체 매출의 80%를 넘을 것이라고 했습니다. 석 달 전 전망(서버 매출 70% 이상 증가)을 다시 올린 숫자입니다.

여기서 짚어야 할 것이 있습니다. 3분기 GAAP 주당순이익 1.46달러에는 고객 계약에 딸린 지분 증권(warrants)의 평가 효과로 <strong>11억 달러</strong>의 비현금 비용이 들어 있습니다. 회사는 이 비용이 앞으로 분기마다 커질 것이라고 밝혔습니다. 비GAAP과 현금흐름에는 영향이 없지만, "고객에게 지분을 주고 매출을 만든다"는 구조 자체는 공매도 보고서가 파고든 지점과 맞닿아 있습니다.

## 간밤의 이슈 — 공매도 보고서가 겨눈 중국, 그리고 경쟁 구도

Hunterbrook Capital은 19일 "AMD에게도 중국 문제가 있다"는 제목의 보고서를 내고 공매도 포지션을 공개했습니다. 회사는 즉시 반박했습니다. "이 주장은 AMD의 사업 관행과 관계를 왜곡한 것입니다. AMD는 미국 수출통제법을 준수하며 전 세계 사업에서 엄격한 절차를 유지하고 있습니다." CNBC와 로이터는 보고서 내용을 독자적으로 확인하지 못했다고 밝혔습니다. 주장과 반박을 나눠 봐야 합니다.

**보고서의 주장.** 중국 서버업체 아이이트 시스템스(IEIT)는 2025년 3월 미국 상무부 블랙리스트에 올랐습니다. 그런데 그 뒤로도 AMD의 서버 시작 펌웨어가 최소 여섯 차례 새 버전으로 IEIT 제품에 들어갔고, 가장 최근 업데이트는 2026년 10월 19일이었습니다. 보고서는 IEIT와 연결된 세 업체(Aivres·Kaytus·Maginfra)가 사실상 같은 펌웨어를 쓴다고 지적했습니다. Aivres는 과거 인스퍼 시스템스라는 이름이었고, Kaytus의 감사보고서에는 IEIT가 최종 모회사로 적혀 있습니다. AMD 스스로도 Aivres를 Instinct 서버 파트너로 소개하고 있습니다. 어떻게 이 파일이 넘어갔는지, 허가를 받은 것인지는 보고서도 확인하지 못했습니다.

**확인되는 숫자.** 중국·홍콩 고객에 대한 청구액은 2025회계연도에 <strong>77억 5,000만 달러</strong>, 전체 매출의 <strong>22.4%</strong>입니다. 싱가포르만 42억 8,000만 달러로 10%를 넘습니다. 2025년 라이선스 수익 6,700만 달러는 2019년 블랙리스트에 오른 중국 칩 합작사 두 곳에서 나온 것으로 보고서는 추적했습니다. 2025년 4월 MI308 수출 제한으로 약 8억 달러의 재고 비용을 인식한 전례도 있습니다. 이 숫자들은 모두 AMD의 공시나 보도로 확인됩니다.

**규제 일정.** 이번 주 발효된 잠정 최종규칙은 싱가포르·말레이시아·인도네시아·태국·브라질로 가는 첨단 AI칩에 수출 허가를 요구합니다. 블랙리스트 업체가 50% 이상 지분을 가진 해외 법인까지 규제를 넓히는 규칙은 유예 중이고, 그 유예가 2027년 1월 10일에 끝납니다. 보고서의 결론은 "AMD가 엔비디아보다 중국 규제에서 안전하지 않다"는 것입니다.

**경쟁 구도는 반대로 움직였습니다.** 그동안 시장은 엔비디아의 중국 리스크를 AMD의 기회로 읽었습니다. 18일에도 엔비디아가 -2.89% 빠지는 동안 AMD는 +5.31% 올랐습니다. 그런데 이번 보고서는 그 반사이익 논리에 정면으로 맞섰습니다. 결과적으로 19일 AMD는 -7.72%, 엔비디아는 -3.30%였습니다. 브로드컴 -2.09%, 마이크론 -2.10%, TSMC -2.90% 등 반도체 전반이 밀린 가운데 AMD의 낙폭이 유독 컸습니다.

공매도 측의 논리는 실적이 아니라 자금 구조를 겨눕니다. "엔비디아가 AI의 중앙은행이라면 AMD는 실리콘밸리은행"이라는 표현이 상징적입니다. 표면의 재무는 멀쩡하지만, AMD가 성장을 뒷받침해 준 고객들이 지출을 줄이면 매출 감소와 평가손이 동시에 온다는 것입니다. 3분기에 인식한 11억 달러 비현금 비용은 그 구조가 이미 재무제표에 나타났다는 신호로 읽힐 수 있습니다.

## 추후 체크포인트와 리스크

첫 번째는 **규제의 달력**입니다. 1월 10일 유예 종료와 5개국 허가 규칙이 겹치는 구간이 가장 위험합니다. 회사가 "중국은 중요한 시장이며 수출통제를 완전히 준수하겠다"는 입장을 유지하는 가운데, 규칙이 실제로 조여지는지가 관건입니다.

두 번째는 **4분기 데이터센터 +50%의 실행**입니다. Helios 랙스케일은 앤트로픽, 메타, 마이크로소프트, 오픈AI, 오라클 클라우드가 첫 랙을 가동했습니다. 관건은 MI455X 물량이 HPE·델·레노버·슈퍼마이크로 등 OEM 채널로 퍼지는 속도입니다. 170억 달러 가이던스를 채우려면 여기서 미끄러짐이 없어야 합니다.

세 번째는 **클라이언트·게이밍의 부진**입니다. 4분기에 20% 넘게 줄어드는 사업을 안고 데이터센터가 50% 늘어야 전체가 27% 성장합니다. AI 쪽 숫자가 조금만 어긋나도 분기 전체가 흔들리는 구조입니다.

네 번째는 **주가의 기술적 위치**입니다. 52주 범위는 188.22~658.52달러이고, 종가는 고점 대비 26% 낮습니다. 19일 장중 저점 470.56달러가 1차 지지선입니다. 여기서 반등하면 공매도 보고서의 충격은 하루로 끝나지만, 다시 밀리면 11월 초 저점대까지 열려 있습니다.

## 출처

- [CNBC — AMD stock dives on short-seller report of alleged China exposure](https://www.cnbc.com/2026/11/19/amd-falls-on-short-seller-report-of-alleged-china-exposure.html)
- [Reuters (Investing) — Short seller Hunterbrook shorts AMD citing concerns over China exports](https://www.investing.com/news/stock-market-news/short-seller-hunterbrook-shorts-amd-citing-concerns-over-china-exports-5039475)
- [Business Insider — AMD stock falls after short-seller says it has a China problem](https://www.businessinsider.com/amd-stock-short-seller-hunterbrook-china-nvda-2026-11)
- [Yahoo Finance — AMD stock drops after Hunterbrook Media raises export control concerns](https://finance.yahoo.com/technology/article/amd-stock-drops-after-hunterbrook-media-raises-export-control-concerns-171508145.html)
- [TipRanks — AMD stock plunges after short-seller report](https://www.tipranks.com/news/amd-stock-plunges-after-short-seller-report-alleges-that-the-chipmaker-has-its-own-china-problem)
- [Kiplinger — Dow Drops 1,100 Points as Anthropic Pops 17%](https://www.kiplinger.com/investing/stocks/dow-drops-1-100-points-as-anthropic-pops-17-percent-stock-market-today)
- [AMD — AMD Reports Third Quarter 2026 Financial Results](https://ir.amd.com/news-events/press-releases/detail/1303/amd-reports-third-quarter-2026-financial-results)
- [AMD — Third Quarter 2026 Financial Results Prepared Remarks](https://newsroom.amd.com/documents/2026/11/84f4476b-f064-4f0f-957c-fe484853e178.pdf)
- [Reuters (Investing) — AMD forecast eases AI spending fears as data-center sales surge](https://www.investing.com/news/stock-market-news/amd-forecasts-quarterly-revenue-above-estimates-as-datacenter-growth-accelerates-4996502)
- [CNBC — AMD Q3 2026 earnings report](https://www.cnbc.com/amp/2026/11/03/amd-amd-q3-earnings-report-2026-.html)
- [Blockchain.News — Semiconductor price table](https://blockchain.news/stocks/sector/semiconductors)
