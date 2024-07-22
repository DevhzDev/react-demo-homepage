import React from 'react';
import './IndexF.css';

const IndexFCon = [
  {
    img : "http://admin.ntriz.co.kr/data/DesignSt/Page3Banner1__DsImg1",
    title : "SELLPRO",
    about : "통합 온오프라인 판매 솔루션 셀프로를 소개합니다.",
    link : "#1",
  },
  {
    img : "http://admin.ntriz.co.kr/data/DesignSt/Page3Banner1__DsImg2",
    title : "SELLPRICE",
    about : "최저가 모니터링 솔루션 셀프라이스",
    link : "#2",
  },
  {
    img : "http://admin.ntriz.co.kr/data/DesignSt/Page3Banner1__DsImg3",
    title : "SELLTIP",
    about : "오픈마켓 관리 솔루션 셀팁",
    link : "#3",
  },
  {
    img : "http://admin.ntriz.co.kr/data/DesignSt/Page3Banner1__DsImg4",
    title : "DESIGN",
    about : "홈페이지와 각종 디자인까지 통합 디자인 솔루션",
    link : "#4",
  },
];

function IndexF(){
  return(
    <div className="IndexF">
      <IndexFTitle />
      <IndexFContent />
    </div>
  );
}

function IndexFTitle(){
  const IndexFMainTitle = "Our service";
  const IndexFMainSub   = "엔트리즈의 새로운 소식을 다양한 매체로 한눈에 확인해 보세요";
  return(
    <div className="IndexFTitle">
      <div className="IndexFMainTitle">{IndexFMainTitle}</div>
      <div className="IndexFMainSub">{IndexFMainSub}</div>
    </div>
  );
}

function IndexFContent(){
  return(
    <div className="IndexFContent">
      {IndexFCon.map((con, index) => (
        <IndexFItem FImg={con.img} FTitle={con.title} FSub={con.about} FLink={con.link} key={"indexESlide"+index}/>
      ))}
    </div>
  );
}

function IndexFItem(props){
  return(
    <div className="IndexFItem" style={{backgroundImage:'url('+props.FImg+')'}}>
      <div className="IndexFItemIn">
        <div className="IndexFItemAbout">
          <div className="IndexFItemTitle">
            {props.FTitle}
          </div>
          <div className="IndexFItemSub">
            {props.FSub}
          </div>
          <div className="IndexFItemMore">
            more
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexF;