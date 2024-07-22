import React,{useEffect} from 'react';
import './IndexE.css';
import {Link} from 'react-router-dom';
import WOW from 'wowjs';

const IndexECon = [
  {
    img : "/images/Page3Banner1__DsImg1.png",
    title : "SELLPRO",
    about : "통합 온오프라인 판매 솔루션 셀프로를 소개합니다.",
    link : "#1",
  },
  {
    img : "/images/Page3Banner1__DsImg2.png",
    title : "SELLPRICE",
    about : "최저가 모니터링 솔루션 셀프라이스",
    link : "#2",
  },
  {
    img : "/images/Page3Banner1__DsImg3.png",
    title : "SELLTIP",
    about : "오픈마켓 관리 솔루션 셀팁",
    link : "#3",
  },
  {
    img : "/images/Page3Banner1__DsImg4.png",
    title : "DESIGN",
    about : "홈페이지와 각종 디자인까지 통합 디자인 솔루션",
    link : "#4",
  },
];

function IndexE(){
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return(
    <div className="IndexE">
      <IndexETitle />
      <IndexEContent />
    </div>
  );
}

function IndexETitle(){
  const IndexEMainTitle = "Our service";
  const IndexEMainSub   = "엔트리즈의 새로운 소식을 다양한 매체로 한눈에 확인해 보세요";
  return(
    <div className="IndexETitle wow fadeIn">
      <div className="IndexEMainTitle">{IndexEMainTitle}</div>
      <div className="IndexEMainSub">{IndexEMainSub}</div>
    </div>
  );
}

function IndexEContent(){
  return(
    <div className="IndexEContent">
      {IndexECon.map((con, index) => (
        <IndexEItem FImg={con.img} FTitle={con.title} FSub={con.about} FLink={con.link} key={"indexESlide"+index} index={index}/>
      ))}
    </div>
  );
}

function IndexEItem(props){
  return(
    <div className="IndexEItem wow fadeIn" style={{backgroundImage:'url('+props.FImg+')'}} data-wow-delay={props.index*2/10+"s"}>
      <div className="IndexEItemIn">
        <div className="IndexEItemAbout">
          <div className="IndexEItemTitle">
            {props.FTitle}
          </div>
          <div className="IndexEItemSub">
            {props.FSub}
          </div>
          <div className="IndexEItemMore">
            <Link to={props.FLink}>more</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexE;