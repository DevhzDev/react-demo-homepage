import React,{useEffect} from 'react';
import Header from './Head';
import Footer from './Footer';
import SubHead from './SubHead';
import './Service.css';
import './SubCommon.css';
import {PCTablet} from './MediaQuery';
import WOW from 'wowjs';

function Service(){
   useEffect(() => {
    new WOW.WOW({live:false}).init();
   }, []);
  return(
    <div className="Location">
      <Header />
			<ServiceContent />
			<Footer />
    </div>
  )
}

const serviceArr = [
                      {
                        title : 'SellPro',
                        subTitle : '한번에 해결하는 쇼핑몰 관리',
                        about : '홈페이지 관리 따로? 오픈마켓 관리 따로? 쇼핑몰 통합관리 셀프로 솔루션으로 한번에 해결!',
                        img : './images/service1__DsImg1.png',
                        link : 'https://sellpro.co.kr/',
                        icon : [
                          {
                            img : './images/service1__DsIcon1.png',
                            str : '홈페이지 관리'
                          },
                          {
                            img : './images/service1__DsIcon2.png',
                            str : '오픈마켓 관리'
                          },
                          {
                            img : './images/service1__DsIcon3.png',
                            str : '가격 관리'
                          },
                          {
                            img : './images/service1__DsIcon4.png',
                            str : '주문 관리'
                          },
                          {
                            img : './images/service1__DsIcon5.png',
                            str : '협력사'
                          },
                        ]
                      },
                      {
                        title : 'SellPrice',
                        subTitle : '스마트한 가격 관리',
                        about : '상품 최저가 관리 솔루션 셀프라이스에서는 다나와, 네이버, 에누리 등의 가격비교 사이트에서 스마트한 가격 경쟁이 가능합니다.',
                        img : './images/service2__DsImg1.png',
                        link : 'http://sellprice.co.kr/',
                        icon : [
                          {
                            img : './images/service2__DsIcon1.png',
                            str : '가격비교 모니터링'
                          },
                          {
                            img : './images/service2__DsIcon2.png',
                            str : '최저가 관리'
                          },
                          {
                            img : './images/service2__DsIcon3.png',
                            str : '모바일 지원'
                          },
                        ]
                      },
                      {
                        title : 'SellTip',
                        subTitle : '오픈마켓 관리의 팁',
                        about : '상품 관리부터 주문관리까지! 사용하기 편한 오픈마켓 통합관리 솔루션 셀팁 하나로 해결 가능합니다.',
                        img : './images/service3__DsImg1.jpg',
                        link : 'http://selltip.co.kr/',
                        icon : [
                          {
                            img : './images/service3__DsIcon1.png',
                            str : '오픈마켓 관리'
                          },
                          {
                            img : './images/service3__DsIcon2.png',
                            str : '가격 관리'
                          },
                          {
                            img : './images/service3__DsIcon3.png',
                            str : '주문 관리'
                          },
                          {
                            img : './images/service3__DsIcon4.png',
                            str : '재고 정리'
                          },
                        ]
                      },
                      {
                        title : 'Ntriz Design',
                        subTitle : '디자인에 솔루션을 더하다',
                        about : '디자이너와 프로그래머가 없어도 가능! 기획부터 디자인, 시스템 개발, 유지보수까지 토탈 솔루션',
                        img : './images/service4__DsImg1.png',
                        link : 'https://sellpro.co.kr/sp/design.php',
                        icon : [
                          {
                            img : './images/service4__DsIcon1.png',
                            str : '홈페이지 디자인'
                          },
                          {
                            img : './images/service4__DsIcon2.png',
                            str : '배너/이벤트'
                          },
                          {
                            img : './images/service4__DsIcon3.png',
                            str : 'CI, BI 디자인'
                          },
                          {
                            img : './images/service4__DsIcon4.png',
                            str : '상품 상세페이지'
                          },
                          {
                            img : './images/service4__DsIcon5.png',
                            str : '모바일 디자인'
                          },
                        ]
                      }
                    ];
let Param       = "";
let ParamArr    = "";
let serviceInfo = [];
let subTitle    = " 엔트리즈의 새로운 소식을 다양한 매체로 한눈에 ";
function ServiceContent(){
  Param       = window.location.search;
  ParamArr    = Param.split('=');
  serviceInfo = serviceArr[parseInt(ParamArr[1])-1];
  if(!serviceInfo || !Param){
    window.location.href='/';
  }

  return(
    <div className="ServiceContent">
      <SubHead img="./images/service__DsImg1.png" title="서비스소개"/>
      <div className="Con">
        <PCTablet>
          <div className="ConTitle">
            <div className="wow fadeIn">{serviceInfo['title']}</div>
            <div className="ConSubTitle wow fadeIn">{subTitle}</div>
          </div>
        </PCTablet>
        <div className="ServiceCon">
          <ServiceWrap />
        </div>
      </div>
    </div>
  )
}

function ServiceWrap(){
  const ServiceGo = (link) => {
    window.open(link);
  }
  return(
    <div className="ServiceWrap">
      <div className="ServiceAboutWrap">
        <div className="ServiceSubTitle wow fadeIn">
          {serviceInfo['subTitle']}
        </div>
        <div className="ServiceMainTitle wow fadeIn">
          {serviceInfo['title']}
        </div>
        <div className="ServiceAbout wow fadeIn">
          {serviceInfo['about']}
        </div>
        <div className="IconLine">
          {serviceInfo['icon'].map((icon, index) => (
            <div className="IconCell wow fadeInUp" data-wow-delay={index*2/10+"s"} key={"icon"+index}>
              <div className="IconCellImg">
                <img src={icon.img} alt="service"/>
              </div>
              <div className="IconCellImgAbout">
                {icon.str}
              </div>
            </div>
          ))}
        </div>
        <div className="ServiceMoreBtnWrap">
          <button className="wow fadeIn" onClick={()=>ServiceGo(serviceInfo['link'])}>More</button>
        </div>
      </div>
      <div className="ServiceImgWrap wow fadeIn" style={{backgroundImage:'url('+serviceInfo['img']+')'}}></div>
    </div>
  )
}


export default Service;