import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
import {PC, Mobile} from './MediaQuery';

const FooterArr = {
                    co_name : '주식회사 엔트리즈',
                    co_address : '서울 영등포구 양평로 22길 21 1210호 엔트리즈',
                    co_license : '000-00-00000',
                    co_ceo : 'AAA',
                    co_private : 'BBB',
                    co_tel : '00-0000-0000',
                    co_fax : '00-1111-1111',
                    co_email : 'help@ntriz.co.kr'
                  };

const FooterIconArr = [
                        './images/footer_icon1.png',
                        './images/footer_icon2.png',
                        './images/footer_icon3.png'
                      ];                        

const FooterSelectArr = [
                          {
                            link : 'https://sellpro.co.kr/',
                            name : '셀프로',
                          },
                          {
                            link : 'http://sellprice.co.kr/',
                            name : '셀프라이스',
                          },
                          {
                            link : 'http://www.selltip.co.kr/',
                            name : '셀팁',
                          },
                        ];
function Footer() {

  const GoFooterLink = (e) => {
    window.open(e.target.value);
  }

	return(
		<div className="Footer">
			<div className="FooterIn">
        <div className="FooterLine">
          <Link to="/"><img src="/images/default__DsIcon3.png" alt="logo"/></Link>
        </div>
        <div className="FooterLine FooterCoName">
          {FooterArr['co_name']}
        </div>
        <div>
          {FooterArr['co_address']}
        </div>
        <div className="FooterLine FooterInfoWrap">
          <div className="FooterInfo">사업자등록번호. {FooterArr['co_license']}</div>
          <PC>
            <div className="FooterBar"> | </div>
            <div className="FooterInfo">대표. {FooterArr['co_ceo']}</div><div className="FooterBar"> | </div>
            <div className="FooterInfo">개인정보 담당자. {FooterArr['co_private']}</div>
          </PC>
        </div>
        <Mobile>
          <div className="FooterFlex">
            <div className="FooterInfo">대표. {FooterArr['co_ceo']}</div><div className="FooterBar"> | </div>
            <div className="FooterInfo">개인정보 담당자. {FooterArr['co_private']}</div>
          </div>
        </Mobile>
        <div className="FooterLine FooterInfoWrap">
          <div className="FooterInfo">Tel. {FooterArr['co_tel']}</div><div className="FooterBar"> | </div>
          <div className="FooterInfo">fax. {FooterArr['co_fax']}</div><div className="FooterBar"> | </div>
          <div className="FooterInfo">email. {FooterArr['co_email']}</div>
          <PC>
            <div className="FooterBar"> | </div>
            <div className="FooterInfo">copyright © 2018 ntriz corporation., allrights reserved</div>
          </PC>
        </div>
        <Mobile>
          <div className="FooterInfo">copyright © 2018 ntriz corporation., allrights reserved</div>
        </Mobile>
        <div className="FooterIconWrap">
          {FooterIconArr.map((img, index) => (
            <img src={img} key={"FooterIcon"+index} alt="FooterIcon" />
          ))}
        </div>
        <div className="FooterSelectLine">
          <select className="FooterSelect" onChange={GoFooterLink}>
            <option value="">Family Site</option>
            {FooterSelectArr.map((select, index) => (
              <option value={select.link} key={"select"+index}>{select.name}</option>
            ))}
          </select>
        </div>
      
      </div>
		</div>
	);
}

export default Footer;
