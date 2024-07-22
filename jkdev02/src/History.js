import React from 'react';
import Header from './Head';
import Footer from './Footer';
import SubHead from './SubHead';
import './History.css';
import './SubCommon.css';

//History
const HistoryArr = [
  {
    title : "2020",
    sub : [
      '롯데 ON 연동개발 완료',
      '셀팁 리뉴얼 신규오픈 (마켓솔루션)'
    ]
  },
  {
    title : "2019",
    sub : [
      '벤처기업 인증',
      '기업부설 연구소 설립',
      '쿠팡, 위메프 2.0, 티몬 연동개발 완료',
      '물류전산 시스템 개발완료',
      'SELLPRO 솔루션 고객사 100호점 돌파'
    ]
  },
  {
    title : "2018",
    sub : [
      '(주)엔트리즈 설립',
      '그룹웨어 개발',
      'ESM 2.0 연동 개발 완료',
      '스마트 스토어 제휴 API 등록 및 개발완료',
      '셀프라이스 리뉴얼(가격추적 솔루션'
    ]
  },
  {
    title : "2017",
    sub : [
      '가격모니터링 시스템 SELLPRICE 개발',
      '다나와 물류전산 개발완료',
      'SELLPRO 솔루션 고객사 70호점 돌파'
    ]
  },
  {
    title : "2016",
    sub : [
      'NAVER 쇼핑, PAY, 로그인 연동',
      '셀프로 사업부 선유도 사옥이전'
    ]
  },
  {
    title : "2015",
    sub : [
      'G마켓, 인터파크 제휴 POI 고객사 등록 및 개발완료',
      '다나와 상품정보 DB, API 사용 단독 계약 체결'
    ]
  }
];
function History(){
  const HistoryTitle = "Our history.";
	return(
		<div className="History">
			<Header />
			<HistoryContent HistoryTitle = {HistoryTitle} />
			<Footer />
		</div>
	);
}

function HistoryContent(props){
  return(
    <div className="HistoryContent">
      <SubHead img="http://admin.ntriz.co.kr/data/DesignSt/company__DsImg1" title="회사소개"/>
      <div className="Con">
        <div className="ConTitle">{props.HistoryTitle}</div>
        <div className="HistoryWrap">
          {HistoryArr.map((history, index) => (
            <HistoryCon historyTitle={history['title']} index={index} key={"history"+index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

function HistoryCon(props){
  const HistorySubArr = HistoryArr[props.index]['sub'];
  return(
    <div className="HistoryCon">
      <div className="HistoryTitle">
        <div className="HistoryTitleName">{props.historyTitle}</div>
        <div className="HistoryTitleLine"></div>
      </div>
      <div className="HistoryLineWrap">
        {HistorySubArr.map((history, index) => (
          <div className="HistoryLine" key={"historysub"+index}>
            <div className="HistoryLineDash">-</div>
            <div>{history}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default History;