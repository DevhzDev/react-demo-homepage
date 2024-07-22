import React, {useState, useEffect, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {PC} from './MediaQuery';
import './Head.css';
import './Common.css';

//Header
function Header(){
  // Scroll
  const [hdScroll, setHdScroll] = useState(false);
	useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return() => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleScroll = () => {
    if(window.scrollY > 1){
      setHdScroll(true);
      return;
    }
    setHdScroll(false);
    return;
  };

	return(
		<div className={"Header "+ (hdScroll ? 'HeaderScroll' : '' )}>
			<HdLogo />
			<HdMenuWrap />
			<HdMenu3Bar />
		</div>
	);
}


function HdLogo(){	
	return(
		<div className="HdLogo">
			<Link to="/"><img src="/images/default__DsIcon2.png" className="HdLogoImg" alt="Logo"/></Link>
		</div>
	);
}

function HdMenuMake(props){

	return(
		<div className="HdMenuMake">
			<div className="HdMenu">{props.menuName}</div>
			<HdMenu2Depth index={props.index}/>
		</div>
	);

}

function HdMenu2Depth(props){
  let idx = props.index;
  let subMenu = menuArr[idx]['menuSub'];

  return(
    <div className="HdMenu2Depth">
      {subMenu.map((menu, index) => (
        <Link to={menu.menuLink} key={"SubMenu"+index}><div className="HdMenu2DepSub" >{menu['menuName']}</div></Link>
      ))}
    </div>
  )
}

const menuArr = [
  {
    menuName : 'Company',
    menuLink : '#1',
    menuSub : [
      {menuName : 'about us', menuLink : '/AboutUs'},
      {menuName : '연혁', menuLink : '/History'},
      {menuName : '조직도', menuLink : '/Organization'},
      {menuName : '찾아오시는 길', menuLink : '/Location'},
    ],
  }, 
  {
    menuName : 'Service',
    menuLink : '#2',
    menuSub : [
      {menuName : '셀프로', menuLink : '/Service?Type=1'},
      {menuName : '셀프라이스', menuLink : '/Service?Type=2'},
      {menuName : '셀팁', menuLink : '/Service?Type=3'},
      {menuName : '디자인 솔루션', menuLink : '/Service?Type=4'},
    ],
  }, 
  {
    menuName : 'Media',
    menuLink : '#3',
    menuSub : [
      {menuName : '보도자료', menuLink : '/Media?Type=1'},
      {menuName : '소셜 미디어', menuLink : '/Media?Type=2'},
    ],
  }, 
  {
    menuName : 'Community',
    menuLink : '#4',
    menuSub : [
      {menuName : '공지사항', menuLink : '/Notice'},
    ],
  },
  {
    menuName : 'Login',
    menuLink : '#4',
    menuSub : [
      {menuName : '로그인', menuLink : '/Login'},
      {menuName : '회원가입', menuLink : '/Join'},
    ],
  }, 
];

function HdMenuArr(){
	return(
		<PC>
			{menuArr.map((menu, index) => (
				<HdMenuMake menuName = {menu.menuName} menuLink = {menu.menuLink} key = {"HdMenuLine"+index} index = {index}/>
			))}
		</PC>
	);
}

function HdMenuWrap(){
	return(
		<div className="HdMenuWrap">
			<HdMenuArr />
		</div>
	);
}

function HdMenuFor(props){
	return(
		<div className={"menuBar " + (!props.cateOpenChk ? 'menuBarMove' : '' )}></div>
	);
}

function HdMenu3Bar(){

  const [cateOpenChk, setOpen] = useState(true);   // 카테고리 오픈 여부
  const cateOpen = () => {
    if(!cateOpenChk){
      setOpen(true);
    }else{
      setOpen(false);
    }
  }

  return(
    <Fragment>
      <div className="HdMenu3Bar">
          <div className="HdMenu3Btn" onClick={cateOpen}>
            <HdMenuFor cateOpenChk={cateOpenChk} />
            <HdMenuFor cateOpenChk={cateOpenChk} />
            <HdMenuFor cateOpenChk={cateOpenChk} />
          </div>
      </div>
     <HdLeftCate displayLeft = {(!cateOpenChk ? 'block' : 'none')}/>
    </Fragment>
  );
}

/* 우측 카테고리 */
function HdLeftCate(props){
  return(
    <div className="HdLeftCate" style={{display:props.displayLeft}}>
       {menuArr.map((menu, index) => (
        <HdLeftCateLine menuName = {menu.menuName} menuLink = {menu.menuLink} index={index} key = {"Menu"+index}/>
      ))}
    </div>
  );
}

function HdLeftCateLine(props){
  return(
    <div className="HdLeftCateLine">
      <Link to={props.menuLink}><div className="HdLeft1DepMenu">{props.menuName}</div></Link>
      <HdLeftCate2DepLine index={props.index}/>
    </div>
  );
}

function HdLeftCate2DepLine(props){
  let idx = props.index;
  let subMenu = menuArr[idx]['menuSub'];

  return (
    <div className="HdLeftCate2DepLine">
      {subMenu.map((menu, index) => (
        <Link to={menu['menuLink']} key={"SubMenu"+index}><div className="HdLeftCate2DepMenu">{menu['menuName']}</div></Link>
      ))}
    </div>
  );
}

export default Header;
export {menuArr};