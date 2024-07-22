import React from 'react';
import './IndexC.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import {Link} from 'react-router-dom';
import SwiperCore, { 
  Autoplay, 
  Pagination, 
  EffectFade
} from "swiper";

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const IndexCArr = [
	{
		img : 'http://demoadmin1.ntriz.co.kr/data/DesignSt/A_MainASlide1__DsImg1',
		link : '', 
	},
	{
		img : 'http://admin.ntriz.co.kr/data/DesignSt/Page1Section2__DsImg1',
		link : '#2', 
	},
	{
		img : 'http://demoadmin1.ntriz.co.kr/data/DesignSt/A_MainASlide2__DsImg1',
		link : '#3', 
	},
	{
		img : 'http://admin.ntriz.co.kr/data/DesignSt/Page1Section4__DsImg1',
		link : '#4', 
	}
];


//IndexC
function IndexC(){
	return(
		<div className="IndexC">
			<Swiper
				className='swiper-container indexCSlide'
				slidesPerView={1}
				pagination = {{
          el: '.IndexCPaging',
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false
        }}
        effect="fade"
        loop={true}
			>
				{IndexCArr.map((btn, index) => (
					<SwiperSlide key={"indexCSlide"+index}>
            <Link to={btn.link} style={(!btn.link)?{cursor:'default'}:{}} >
						  <SwiperItem img={btn.img}/>
            </Link>
					</SwiperSlide>
				))}
			</Swiper>
      <div className="IndexCPaging"></div>
		</div>
	);
}

function SwiperItem(props){
	return(
		<div className="IndexCItem" style={{backgroundImage:'url('+props.img+')'}}></div>
	);
}

export default IndexC;
