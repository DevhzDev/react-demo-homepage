import React,{useState, useEffect} from 'react';
import './IndexD.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, {Navigation} from "swiper";
import {Link} from 'react-router-dom';
import WOW from 'wowjs';

SwiperCore.use([Navigation]);

const btnArr = [{name : '보도자료', id : 'news'}, {name : '소셜미디어', id : 'media'}];

/* IndexD */
function IndexD(){
  const [btnId, setBtnId] = useState(btnArr[0]['id']);
  const [btnIndex, setBtnIndex] = useState(0);
  return(
    <div className="IndexD">
      <IndexDTitleWrap setBtnId={setBtnId} setBtnIndex={setBtnIndex} btnIndex={btnIndex}/>
      <IndexDContentWrap btnId={btnId} btnIndex={btnIndex}/>
    </div>
  );
}

/* 좌측 타이틀 영역 */
function IndexDTitleWrap(props){
  const IndexDTitle = "Media";
  const IndexDTitleSub = "엔트리즈의 새로운 소식을 다양한 매체로 한눈에 확인해보세요.";

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const btnClick = (index) => {
    props.setBtnIndex(index);
    props.setBtnId(btnArr[index]['id']);
  }

  return(
    <div className="IndexDTitleWrap">
      <div className="IndexDTitle wow fadeIn">{IndexDTitle}</div>
      <div className="IndexDTitleSub wow fadeIn">{IndexDTitleSub}</div>
      <div className="IndexDtitleBtn wow fadeIn" data-wow-delay='.4s'>
        {btnArr.map((btn, index) => (
          <IndexDBtn btnName={btn.name} btnId={btn.id} key={"MediaBtn"+index} btnIndex={props.btnIndex === index ? 'IndexDBtnActive' : ''} setBtnIndex={() => btnClick(index)} />
        ))}
      </div>
    </div>
  );
}

function IndexDBtn(props){
  return(
      <div className="IndexDBtnDiv">
        <button className={"IndexDBtn " + props.btnIndex} onClick={() => props.setBtnIndex()}>{props.btnName}</button>
      </div>
  );
}

/* 우측 컨텐츠 영역 */
function IndexDContentWrap(props){
  return(
    <div className="IndexConBackground wow fadeIn">
      <div className="IndexDContentWrap wow fadeIn">
        <IndexDSwiper btnId={props.btnId} btnIndex={props.btnIndex}/>
        <IndexDSwiperNavi />
      </div>
    </div>
  );
}


/* Swiper */
function IndexDSwiper(props){

  let type = Number(props.btnIndex)+1;
  let link = "/Media?Type="+type+"&bo_no=";
  const [indexDList, setIndexDList] = useState([]);
  
  useEffect(()=>{
    fetch("/api/IndexD.php", {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: ("btnId="+props.btnId)
    })
    .then(res => res.json())
    .then(data =>{
      setIndexDList(data);
    });
  },[props.btnId]);

  return(
    <Swiper
        className='swiper-container IndexDSlide'
        breakpoints={{
          1: {
            slidesPerView: 1,
          },
          800:{
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={15}
        slidesPerView={3}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false
        }}
        loop={true}
        navigation={{
          prevEl: '.IndexDPrev',
          nextEl: '.IndexDNext',
        }}
      >
        {indexDList.map((slide, index) => (
          <SwiperSlide key={"IndexDSlide"+index}>
            <IndexDSwiperItem index={index} btnId={props.btnId} link={link} slideImg={slide.bo_img} slideTitle={slide.bo_title} slideCon={slide.bo_contents} slideDate={slide.bo_date} slideBoNo={slide.bo_no} />
          </SwiperSlide>
        ))}
      </Swiper>
  );
}

function IndexDSwiperItem(props){
  let link = props.link+props.slideBoNo;
  return(
    <Link to={link}>
      <div className="IndexDSwiperItem">
        <div className="IndexDSwiperItemImg" style={{backgroundImage:'url('+props.slideImg+')'}}></div>
        <div className="IndexDSwiperItemTitle">{props.slideTitle}</div>
        <div className="IndexDSwiperItemCon">{props.slideCon}</div>
        <div className="IndexDSwiperItemDate">{props.slideDate}</div>
      </div>
    </Link>
  );
}

function IndexDSwiperNavi(){
  return(
    <div className="IndexDSwiperNavi">
      <img src="http://www.ntriz.co.kr/img/SlideBtnPrev.png" className="IndexDPrev" alt="swiperLeft"/>
      <img src="http://www.ntriz.co.kr/img/SlideBtnNext.png" className="IndexDNext" alt="swiperRight"/>
    </div>
  );

}

export default IndexD;