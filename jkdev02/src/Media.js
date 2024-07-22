import React, {useState} from 'react';
import Header from './Head';
import Footer from './Footer';
import SubHead from './SubHead';
import ViewContent from './ViewContent';
import SearchWrap from './Search'
import {BoNoCheck,ConTitleWrap,MediaList} from './ListForm';
import './SubCommon.css';

let Param       = "";
let ParamArr    = "";
let subTitle    = "엔트리즈의 새로운 소식을 다양한 매체로 한눈에";
let serVal      = "";
let type        = "";
const MediaArr  = ['News', 'Media'];
let boNo        = 0;

function Media(){
  Param       = window.location.search;
  ParamArr    = Param.split('=');
  type        = ParamArr[1];
  let typeArr  = type.split("&");
  for(let i=0;i<typeArr.length;i++){
    if(typeArr[i].indexOf('bo_no') < 0){
      type = typeArr[i];
      break;
    }
  }
  serVal      = MediaArr[parseInt(ParamArr[1])-1];
  if(!Param){
    serVal    = MediaArr[0];
  }
  if(!serVal){
    alert("잘못된 접근입니다.");
    window.location.href='/';
  }

  serVal      = serVal.toLowerCase();

  // boNo 체크
  boNo        = BoNoCheck();

  if(boNo > 0){ // 상세
    return(
      <div>
        <Header />
        <MediaView />
        <Footer />
      </div>
    )
  }else{  // 리스트
    return(
      <div>
        <Header />
        <MediaContent />
        <Footer />
      </div>
    )
  }
}


// 게시글 상세
function MediaView(){
  return(
    <div className="MediaContent">
       <SubHead img="http://admin.ntriz.co.kr/data/DesignSt/media__DsImg1" title="미디어"/>
       <div className="Con">
        <div className="ConTitle">
          <ConTitleWrap conTitle={MediaArr[parseInt(ParamArr[1])-1]} conSubTitle={subTitle}/>
        </div>
        <ViewContent boNo={boNo} serVal={serVal} type={type}/>
      </div>
    </div>
  )
}


// 리스트
function MediaContent(){
  const [stx, setStx]    = useState('');   // 검색값
  const [sfl, setSfl]    = useState('');   // 검색옵션
  boNo = 0;
  return(
    <div className="MediaContent">
       <SubHead img="http://admin.ntriz.co.kr/data/DesignSt/media__DsImg1" title="미디어"/>
       <div className="Con">
        <div className="ConTitle">
          <ConTitleWrap conTitle={MediaArr[parseInt(ParamArr[1])-1]} conSubTitle={subTitle}/>
          <SearchWrap setStx={setStx} setSfl={setSfl}/>
        </div>
        <MediaList boNo={boNo} type={type} sfl={sfl} stx={stx} serVal={serVal} list={"gallery"} fetchLink={"/api/MediaList.php"} fetchData={"serVal="+serVal}/>
      </div>
    </div>
  )
}



export default Media;
