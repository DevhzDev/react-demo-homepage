import React, {useState, useEffect, useCallback} from 'react';
import {Link} from 'react-router-dom';
import './SubCommon.css';
import './ViewContent.css';

function ViewContent(props){
  let boNo    = props.boNo;
  let type    = "";
  let pageType = "";
  let serVal  = "";
  if(props.serVal){
    serVal  = props.serVal;
  }
  if(props.type){
    type = props.type;
  }
  if( serVal==="media" || serVal==="news" ){
    pageType = "Media";
  }else{
    pageType = "Notice";
  }

  // 이전글, 다음글, 리스트 링크
  let linkType = "/"+pageType+"?";
  if(type) linkType += "Type="+type+"&";

  const [boTitle, setBoTitle]       = useState('');
  const [boContents, setBoContents] = useState('');
  const [bo_date, setBoDate]        = useState('');
  const [bo_tag, setBoTag]          = useState('');
  const [nextPage, setNextPage]     = useState('');
  const [prevPage, setPrevPage]     = useState('');
  
  const ViewFetch = useCallback(() => {
    let pTop = document.querySelector(".Con").offsetTop; // 상단으로 이동(영역 클래스명 : Con)
    window.scrollTo({top:pTop-170});
    fetch('/api/View.php', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: ("type="+serVal+"&bo_no="+boNo)
    })
    .then(res => res.json())
    .then(data =>{
      let info = data['info'];
      if(info === "Error"){
        alert("잘못된 접근입니다.");
        window.location.href='/';
      }else{
        setBoTitle(info['bo_title']);
        setBoContents(info['bo_contents']);
        setBoTag(info['bo_tag']);
        setNextPage(data['next']);
        setPrevPage(data['prev']);
        let boDateArr = info['bo_date'].split(' ');
        setBoDate(boDateArr[0]);
      }
    }); 
  }, [boNo,serVal]);

  useEffect(()=>{
    ViewFetch();
  }, [boNo,ViewFetch])

  return(
    <div className="ViewWrap">
      <div className="ViewTitle">{boTitle}</div>
      <div className="ViewInfo">
        <div>글 번호 : {boNo} </div><div className="ViewInfoBar"> | </div><div> 작성일 : {bo_date}</div>
      </div>
      <div className="ViewContents" dangerouslySetInnerHTML={ {__html: boContents} }></div>
      <div className="ViewTags">{bo_tag}</div>
      <div className="ViewMenu">
        <div className="ViewPrev">
          <div className={(!prevPage)?'ViewBtnNone':''}><Link to={linkType+"bo_no="+prevPage}>{"< 이전글"}</Link></div>
        </div>
        <div className="ViewMenuIcon">
          <Link to={linkType}>
            <img src="http://www.ntriz.co.kr/img/MenuList.png" alt="list"/>    
          </Link>
        </div>
        <div className="ViewNext">
          <div className={(!nextPage)?'ViewBtnNone':''}><Link to={linkType+"bo_no="+nextPage}>{"다음글 >"}</Link></div>
        </div>
      </div>
    </div>
  )
}

export default ViewContent;