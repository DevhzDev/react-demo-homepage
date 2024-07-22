import React, {useState} from 'react';
import Header from './Head';
import Footer from './Footer';
import SubHead from './SubHead';
import ViewContent from './ViewContent';
import SearchWrap from './Search'
import {BoNoCheck,ConTitleWrap,MediaList} from './ListForm';
import './SubCommon.css';

let conTitle    = "Notice";
let subTitle    = "엔트리즈의 새로운 소식을 다양한 매체로 한눈에";
let boNo        = 0;
function Notice(){

  // boNo 체크
  boNo        = BoNoCheck();
  if(boNo > 0){ // 상세
    return(
      <div>
        <Header />
        <NoticeView />
        <Footer />
      </div>
    )
  }else{  // 리스트
    return(
      <div>
        <Header />
        <NoticeContent />
        <Footer />
      </div>
    )
  }
}

// 게시글 상세
function NoticeView(){
  return(
    <div className="MediaContent">
       <SubHead img="http://admin.ntriz.co.kr/data/DesignSt/community__DsImg1" title="커뮤니티"/>
       <div className="Con">
        <div className="ConTitle">
          <ConTitleWrap conTitle={conTitle} conSubTitle={subTitle}/>
        </div>
        <ViewContent boNo={boNo} serVal={"notice"}/>
      </div>
    </div>
  )
}

function NoticeContent(){
  const [stx, setStx]             = useState('');   // 검색값
  const [sfl, setSfl]             = useState('');   // 검색옵션
  boNo = 0;

  return(
    <div className="MediaContent">
       <SubHead img="http://admin.ntriz.co.kr/data/DesignSt/community__DsImg1" title="커뮤니티"/>
       <div className="Con">
        <div className="ConTitle">
          <ConTitleWrap conTitle={conTitle} conSubTitle={subTitle}/>
          <SearchWrap setStx={setStx} setSfl={setSfl}/>
        </div>
        <MediaList boNo={boNo} sfl={sfl} stx={stx} list={"Normal"} fetchLink={"/api/NoticeList.php"} fetchData=""/>
      </div>
    </div>
  )
}


export default Notice;