import React, {useState, useEffect, Fragment} from 'react';
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
	
	let hdLogo		= "http://admin.ntriz.co.kr/data/DesignSt/default__DsIcon2";

	const goUrl = () => {
		let goUrlLink	= "http://www.ntriz.co.kr/";
		window.location.href= goUrlLink;
	}

	return(
		<div className="HdLogo">
			<img src={hdLogo} className="HdLogoImg" onClick={goUrl} alt="Logo"/>
		</div>
	
	);
}

function HdMenuMake(props){

  return(
      <div className="HdMenuMake">
        <div className="HdMenu" onClick={() => window.location.href=props.menuLink}>{props.menuName}</div>
        <HdMenu2Depth index={props.index}/>
      </div>
  );

}

function HdMenu2Depth(props){
  let idx = props.index;
  let subMenu = menuArr[idx]['menuSub'];

  const hdMenuOnClick = (link) => {
    window.location.href=link;
  }
  return(
    <div className="HdMenu2Depth">
      {subMenu.map((menu, index) => (
        <div className="HdMenu2DepSub" key={"SubMenu"+index} onClick={() => hdMenuOnClick(menu['menuLink'])}>{menu['menuName']}</div>
      ))}
    </div>
  )
}


const menuArr = [
  {
    menuName : 'Company',
    menuLink : '#1',
    menuSub : [
      {menuName : 'about us', menuLink : '#11'},
      {menuName : '연혁', menuLink : '#12'},
      {menuName : '조직도', menuLink : '#13'},
      {menuName : '찾아오시는 길', menuLink : '#14'},
    ],
  }, 
  {
    menuName : 'Service',
    menuLink : '#2',
    menuSub : [
      {menuName : '셀프로', menuLink : '#21'},
      {menuName : '셀프라이스', menuLink : '#22'},
      {menuName : '셀팁', menuLink : '#23'},
      {menuName : '디자인 솔루션', menuLink : '#24'},
    ],
  }, 
  {
    menuName : 'Media',
    menuLink : '#3',
    menuSub : [
      {menuName : '보도자료', menuLink : '#31'},
      {menuName : '소셜 미디어', menuLink : '#32'},
    ],
  }, 
  {
    menuName : 'Community',
    menuLink : '#4',
    menuSub : [
      {menuName : '공지사항', menuLink : '#41'},
    ],
  }, 
];


function HdMenuWrap(){

  return(
		<div className="HdMenuWrap">
			<HdMenuArr />
		</div>
	);

}


function HdMenuArr(){
  return(
    <PC>
      {menuArr.map((menu, index) => (
        <HdMenuMake menuName = {menu.menuName} menuLink = {menu.menuLink} key = {"HdMenuLine"+index} index = {index}/>
      ))}
    </PC>
  );
}

function HdMenuFor(props){
  return(
      <Fragment>
        <div className={"menuBar " + (!props.cateOpenChk ? 'menuBarMove' : '' )}></div>
      </Fragment>
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
  const hdLeftOnClick = () => {
    window.location.href = props.menuLink;
  }

  return(
    <div className="HdLeftCateLine">
      <div className="HdLeft1DepMenu" onClick={hdLeftOnClick}>{props.menuName}</div>
      <HdLeftCate2DepLine index={props.index}/>
    </div>

  );
}

function HdLeftCate2DepLine(props){
  let idx = props.index;
  let subMenu = menuArr[idx]['menuSub'];

  const hdLeftOnClick = (link) => {
    window.location.href = link;
  }

  return (
    <div className="HdLeftCate2DepLine">
      {subMenu.map((menu, index) => (
        <div className="HdLeftCate2DepMenu" key={"SubMenu"+index} onClick={() => hdLeftOnClick(menu['menuLink'])}>{menu['menuName']}</div>
      ))}
    </div>
  );
}

export default Header;