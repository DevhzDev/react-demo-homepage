import React from 'react';
import Header from './Head';
import Footer from './Footer';
import SubHead from './SubHead';
import './SubCommon.css';
import './AboutUs.css';
import {PC, Mobile} from './MediaQuery';

//AboutUs
function AboutUs(){
	return(
		<div className="AboutUs">
			<Header />
			<AboutUsContent />
			<Footer />
		</div>
	);
}

function AboutUsContent(){
	const AboutComTitle = " About NTRIZ. ";
	const AboutComCon = "주식회사 엔트리즈는 다양하게 축적된 실무 경험과 노하우를 기반으로 통합 온 오프라인 판매 시스템을 설계하여 비즈니스 모델을 개발, 서비스 하고 있으며 온라인 판매에 최적화된 인프라를 구축하여 통합 솔루션 에이전시로 확고하게 자리매김하고 있습니다.<br><br>엔트리즈 임직원들은 끊임없는 연구 개발로 고객들에게 더 나은 서비스를 제공하고자 항상 노력하고 있습니다.";
	const AboutComImgPC = "./images/about__DsImg1.png";
	const AboutComImgMo = "./images/about__DsIcon1.png";
	const WhatTitle = "What we do?";
	const WhatImg = "./images/about__DsImg2.png";
	const WhatImgMo = "./images/about__DsIcon2.png";
	return(
		<div className="AboutUsContent">
			<SubHead img="./images/company__DsImg1.png" title="회사소개"/>
			<div className="AboutUsCon Con">
				<AboutCompany AboutComTitle = {AboutComTitle} AboutComCon={AboutComCon} AboutComImgPC={AboutComImgPC} AboutComImgMo={AboutComImgMo} />
				<WhatWeDo WhatTitle={WhatTitle} WhatImg={WhatImg} WhatImgMo={WhatImgMo} />
			</div>
		</div>
	);
}

function AboutCompany(props){
	return(
		<div className="AboutCompany">
			<div className="AboutComTitle ConTitle">{props.AboutComTitle}</div>
			<div className="AboutComCon" dangerouslySetInnerHTML={ {__html: props.AboutComCon} }></div>
			<div className="AboutComImgWrap">
				<PC>
					<img src={props.AboutComImgPC} className="AboutComImgPC" alt="AboutComImgPC" />
				</PC>
				<Mobile>
					<img src={props.AboutComImgMo} className="AboutComImgMo" alt="AboutComImgMo" />
				</Mobile>
			</div>
		</div>
	);
}

function WhatWeDo(props){
	return(
		<div className="WhatWeDo">
			<div className="WhatCon">
				<PC>
					<img src={props.WhatImg} className="WhatImg" alt="What we do" />
				</PC>
				<Mobile>
					<img src={props.WhatImgMo} className="WhatImg" alt="What we do" />
				</Mobile>
			</div>
		</div>
	);
}

export default AboutUs;
