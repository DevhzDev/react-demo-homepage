import React, {useEffect} from 'react';
import Header from './Head';
import Footer from './Footer';
import SubHead from './SubHead';
import './SubCommon.css';
import './Join.css';
import WOW from 'wowjs';

function Join(){
  useEffect(() => {
    let wow = new WOW.WOW({live: false});
    wow.init();
  }, []);

  return(
    <div className="Join">
      <Header />
      <JoinContent />
      <Footer />
    </div>
  )
}

function JoinContent(){
  return(
    <div className="JoinContent">
      <SubHead img="./images/service__DsImg1.png" title="로그인"/>
      <div className="Con">
        <div className="ConTitle">
          <div className="wow fadeIn">Join</div>
        </div>
        <div className="ServiceCon">
          <JoinWrap />
        </div>
      </div>
    </div>
  )
}

function JoinWrap(){

  const postClick = () => {
    console.log(1);
  }

  // 연락처 숫자만 입력 & - 자동 입력
  const NumInput = (name) => {
    let val     = document.getElementsByName(name)[0].value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-");
    document.getElementsByName(name)[0].value = val;
  }

  return(
    <div className="JoinWrap">
      <JoinAgreeContent />
      <div className="JoinInfo wow fadeIn">
        <div className="JoinWrapTitle">기본정보</div>
        <div className="JoinInfoContent">

          <div className="JoinInfoLine">
            <div className="JoinInfoTable">
              <div className="JoinInfoLeft">이름</div>
              <div className="JoinInfoRight">
                <input type="text" name="MbName" className="inputStyle joinInput" maxLength="20" required autoComplete="off" />
              </div>
            </div>
            <div className="JoinInfoTable">
              <div className="JoinInfoLeft">아이디</div>
              <div className="JoinInfoRight">
                <input type="text" name="MbId" className="inputStyle joinInput" maxLength="20" required autoComplete="off" />
              </div>
            </div>
          </div>

          <div className="JoinInfoLine">
            <div className="JoinInfoTable">
              <div className="JoinInfoLeft">비밀번호</div>
              <div className="JoinInfoRight">
                <input type="password" name="MbPassword" className="inputStyle joinInput" maxLength="20" required autoComplete="off" />
              </div>
            </div>
            <div className="JoinInfoTable">
              <div className="JoinInfoLeft">비밀번호 확인</div>
              <div className="JoinInfoRight">
                <input type="password" name="MbPasswordCheck" className="inputStyle joinInput" maxLength="20" required autoComplete="off" />
              </div>
            </div>
          </div>

          <div className="JoinInfoLine">
            <div className="JoinInfoTable">
              <div className="JoinInfoLeft">휴대폰</div>
              <div className="JoinInfoRight">
                <input type="text" name="MbPhone" className="inputStyle joinInput" maxLength="20" onInput={()=>{NumInput("MbPhone")}} required autoComplete="off" />
              </div>
            </div>
            <div className="JoinInfoTable">
              <div className="JoinInfoLeft">전화번호</div>
              <div className="JoinInfoRight">
                <input type="text" name="MbTel" className="inputStyle joinInput" maxLength="20" onInput={()=>{NumInput("MbTel")}} autoComplete="off" />
              </div>
            </div>
          </div>

          <div className="JoinInfoLine JoinInfoLineAddress">
            <div className="JoinInfoLeft">주소</div>
            <div className="JoinInfoRight JoinInfoRightAddress">
              <div className="JoinAddressLine JoinZipLine">
                <div className="JoinMbZipLeft"><input type="text" name="MbZip" className="inputStyle joinInput" maxLength="6" onClick={postClick} readOnly required /></div>
                <div className="JoinMbZipRight"><button className="ZipBtn" onClick={postClick} >우편번호 찾기</button></div>
              </div>
              <div className="JoinAddressLine"><input type="text" name="MbAddr1" className="inputStyle joinInput" maxLength="100" readOnly required autoComplete="off" /></div>
              <div className="JoinAddressLine"><input type="text" name="MbAddr2" className="inputStyle joinInput" maxLength="100" required autoComplete="off" /></div>
            </div>
          </div>

          <div className="JoinSubmitWrap">
            <button className="JoinSubmitBtn">회원가입</button>
          </div>

        </div>
      </div>
    </div>
  )
}



function JoinAgreeContent(){
  let AgreeArr = [
                  {
                    content : '주식회사 demo는 대한민국 헌법에 보장된 "사생활의 비밀과 자유 및 통신의 비밀 보장"을 준수하고 있습니다. 일부 부도덕한 기업 및 개인들의 유출로 인한 불법행위로 인해 발생할지도 모르는 위험을 방지하고 회원의 개인정보를 보호하여 주식회사 demo 회원에게 양질의 정보 서비스를 제공하기 위하여 주식회사 demo은 다음과 같은 개인정보 보호 정책을 적용하고 있습니다. 이는, 정보통신부에서 지정한 개인정보 보호 지침 제 7조에 의거한 것으로 아래와 같이 명시합니다.<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>- 본 개인정보 보호정책은 정부의 관련법률 및 지침의 변경과 주식회사 demo의 정책 변화에 따라 변경될 수 있습니다.&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>주식회사 demo는 회원의 개인 정보 보호를 매우 중요하게 취급하며, "정보 통신망 이용 촉진 등에 관한 법률"상의 개인정보 보호 규정 및 정보통신부가 제정한 "개인정보 보호 지침"을 준수하고 있습니다. 주식회사 demo는 개인정보 보호 방침을 통하여 회원이 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인 정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.&nbsp;<br>&nbsp;',
                    id : 'Agree',
                    title : '이용약관'
                  },
                  {
                    content : '<p style="padding: 10px 0px; font-size: 14px; font-weight: 400;">주식회사 demo는 대한민국 헌법에 보장된 "사생활의 비밀과 자유 및 통신의 비밀 보장"을 준수하고 있습니다. 일부 부도덕한 기업 및 개인들의 유출로 인한 불법행위로 인해 발생할지도 모르는 위험을 방지하고 회원의 개인정보를 보호하여 주식회사 demo 회원에게 양질의 정보 서비스를 제공하기 위하여 주식회사 demo은 다음과 같은 개인정보 보호 정책을 적용하고 있습니다. 이는, 정보통신부에서 지정한 개인정보 보호 지침 제 7조에 의거한 것으로 아래와 같이 명시합니다.</p>',
                    id : 'Private',
                    title : '개인정보처리방침'
                  }
                ];
  
  return(
    <>
      {AgreeArr.map((con, index) => (
        <div className="JoinWrapIn wow fadeIn" data-wow-delay={index*2/10+"s"} key={"JoinAgree"+index}>
          <div className="JoinWrapTitle">{con.title} 동의</div>
          <div className="JoinAgreeCon ScrollStyle" dangerouslySetInnerHTML={ {__html: con.content} }></div>
          <div className="JoinAgreeLine">
            <label className="CmInputBox">
              <input type="checkbox" name={"Join"+con.id+"Check"}/>
              위 {con.title}에 동의합니다. (필수)
              <span className="CmCheckIcon"></span>
            </label>
          </div>
        </div>
      ))}
    </>
  )
}


export default Join;