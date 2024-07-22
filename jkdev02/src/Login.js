import React,{useEffect} from 'react';
import Header from './Head';
import Footer from './Footer';
import SubHead from './SubHead';
import {Link} from 'react-router-dom';
import WOW from 'wowjs';
import './Login.css';
import './SubCommon.css';


function Login(){
  useEffect(() => {
    new WOW.WOW({live:false}).init();
  }, []);
  return(
    <div className="Login">
      <Header />
			<LoginContent />
			<Footer />
    </div>
  )
}

function LoginContent(){
  return(
    <div className="LoginContent">
      <SubHead img="./images/service__DsImg1.png" title="로그인"/>
      <div className="Con">
        <div className="ConTitle">
          <div className="wow fadeIn">Login</div>
        </div>
        <div className="ServiceCon">
          <LoginWrap />
        </div>
      </div>
    </div>
  )
}

function LoginWrap(){
  return(
    <div className="ServiceCon">
      <div className="ServiceConIn wow fadeIn">
        <div className="LoginLine">
          <div className="LoginLineName">아이디</div>
          <div className="inputArea"><input type="text" name="MbId" className="inputStyle inputLogin" maxLength="20" /></div>
        </div>
        <div className="LoginLine">
          <div className="LoginLineName">비밀번호</div>
          <div className="inputArea"><input type="password" name="MbPw" className="inputStyle inputLogin" maxLength="20" /></div>
        </div>
        <div className="LoginBtnWrap">
          <button className="LoginBtn">로그인</button>
        </div>
        <div className="LoginJoinWrap">
          <Link to="./Join">회원가입</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;