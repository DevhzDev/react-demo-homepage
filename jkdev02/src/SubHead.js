import React,{useEffect} from 'react';
import './SubHead.css';
import {Link} from 'react-router-dom';
import {PC, Mobile} from './MediaQuery';
import {menuArr} from './Head';
import WOW from 'wowjs';


// GET 값 처리
function SearchSplit(){
  const nowPath = window.location.pathname;
  let nowPathStr = nowPath;

  if(window.location.search){
    let schStr = window.location.search;
    let schSplit = schStr.split("?");
    schSplit = schSplit[1].split("&");
    let schPathStr = "";
    for(let i=0;i<schSplit.length;i++){
      if(schSplit[i].indexOf("Type=") >= 0){
        schPathStr = schSplit[i]; 
        break;
      }
    }
    nowPathStr+="?"+schPathStr;
  }
  return nowPathStr;
}

//SubHead
function SubHead(props){
  const menuCnt = menuArr.length;
  let nowCateMenu = [];
  let nowPathStr = SearchSplit();

  useEffect(() => {
    new WOW.WOW({live: false}).init();
  }, []);
  
	for(let i=0;i<menuCnt;i++){
		let menuInfo = menuArr[i];
    if(menuInfo['menuLink'].indexOf(nowPathStr) >= 0){
      nowCateMenu = menuInfo['menuSub'];
			break;
		}else{
			let subMenuCnt = menuInfo['menuSub'].length;
			for(let j=0;j<subMenuCnt;j++){
				let subMenuInfo = menuInfo['menuSub'][j];
        if(subMenuInfo['menuLink'].indexOf(nowPathStr) >= 0){
          nowCateMenu = menuInfo['menuSub'];
					break;
				}
			}
		}
	}
	return(
		<>
			<PC>
				<div className="SubHead" style={{backgroundImage:'url('+props.img+')'}}>
					<div className="SubHeadTitle">{props.title}</div>
					<div className={"SubHeadBtnWrap "+(nowCateMenu.length > 1 ? '':'None')}>
            {nowCateMenu.map((menu, index) => (
              <HdSubMenu menuName = {menu.menuName} menuLink = {menu.menuLink} key = {"SubHeadBtn"+index} nowPathStr={nowPathStr} index={index}/>
            ))}
					</div>
				</div>
			</PC>
			<Mobile>
				<div className="SubHeadMobile">
					<div className="SubHeadMobileTitle">{props.title}</div>
          <div className={"SubHeadBtnWrap "+(nowCateMenu.length > 1 ? '':'None')}>
            {nowCateMenu.map((menu, index) => (
              <HdSubMenu menuName = {menu.menuName} menuLink = {menu.menuLink} key = {"SubHeadBtn"+index} nowPathStr={nowPathStr} index={index} />
            ))}
					</div>
				</div>
			</Mobile>
		</>
	);
}

function HdSubMenu(props){
  return(
    <Link to={props.menuLink}>
      <div className={"HdSubBtn wow fadeIn "+ (props.menuLink.indexOf(props.nowPathStr) >= 0 ? 'HdSubBtnActive' : '')} data-wow-delay={(Number(props.index)/10)+"s"}>
        {props.menuName}
      </div>
    </Link>
  )
}

export default SubHead;
export {SearchSplit}
