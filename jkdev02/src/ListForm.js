import React, {useState, useEffect, useRef, useCallback} from 'react';
import './ListForm.css';
import Paging from './Paging';
import {Link} from 'react-router-dom';

// boNo 체크
function BoNoCheck(){
  let schStr = window.location.search;
  let schSplit = schStr.split("?");
  let boNoCheck = 0;
  if(schSplit[1]){
    schSplit = schSplit[1].split("&");

    for(let i=0;i<schSplit.length;i++){
      if(schSplit[i].indexOf("bo_no=") >= 0){
        let boNoArr = schSplit[i].split("=");
        boNoCheck         = boNoArr[1]; 
        break;
      }
    }
  }
  return boNoCheck;
}

// 게시글 없음
function NoList(props){
  return(
    <div className="ListWrap">
      <ListCntWrap totalCnt={props.totalCnt}/>
      <div className="NoList">
          게시글이 없습니다.
      </div>
    </div>
  );
}

// 게시글 수
function ListCntWrap(props){
  return(
    <div className="MediaCntWrap">
      <span className="MediaCnt">총 {props.totalCnt}건</span>의 검색결과가 있습니다.
    </div>
  );
}

// 제목 영역
function ConTitleWrap(props){
  return(
    <div className="ConSubTitleWrap">
      <div>{props.conTitle}</div>
      <div>
        <div className="ConSubTitle">{props.conSubTitle}</div>
      </div>
    </div>
  );
}

function MediaList(props){
  const [mediaList, setMediaList] = useState([]);  // 게시글 리스트
  const [mediaCnt, setMediaCnt]   = useState(0);   // 총 게시글 수
  const [pageInfo, setPageInfo]   = useState([]);
  const [pageNum, setPageNum]     = useState(1);
  
  const stx = useRef("");
  const sfl = useRef("");
  let type = "";
  if(props.type) type = props.type;

  const mediaListFetch = useCallback(() => {
    let fetchData = props.fetchData;
    if(fetchData){
      fetchData += "&";
    }
    fetchData += "page="+pageNum+"&stx="+stx.current+"&sfl="+sfl.current;
    fetch(props.fetchLink, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: (fetchData)
    })
    .then(res => res.json())
    .then(data =>{
      setPageInfo(data['Paging']);
      setMediaCnt(data['TotalCount']);
      setMediaList(data['List']);
    }); 
  }, [props,pageNum]);

  // 리스트 상단으로 스크롤 이동
  const ListTop = () => {
    let pTop = document.querySelector(".ListWrap").offsetTop; // 상단으로 이동(영역 클래스명 : Con)
    window.scrollTo({top:pTop-120});
  }

  const SearchInfo = () => {
    stx.current = document.getElementsByName("stx")[0].value;
    sfl.current = document.getElementsByName("sfl")[0].value;
  }


  // Media : 보도자료 / 소셜미디어 선택
  useEffect(()=>{
    if(props.serVal){
      window.scrollTo({top:0});
      stx.current = "";
      sfl.current = "";
      document.getElementsByName("stx")[0].value = "";
      document.getElementsByName("sfl")[0].value = "";
      setPageNum(1);
      mediaListFetch();
    }
  }, [props.serVal])
  
  // 페이징
  useEffect(()=>{
    ListTop();
    SearchInfo();
    mediaListFetch();
  }, [mediaListFetch,pageNum])

  // 검색 (input)
  useEffect(()=>{
    ListTop();
    SearchInfo();
    setPageNum(1);
    mediaListFetch();
  }, [props.stx])

  // 검색 (select)
  useEffect(()=>{
    SearchInfo();
    setPageNum(1);
    mediaListFetch();
  }, [props.sfl])
  
  const linkInfo = () => {
    let link = window.location.pathname+"?";
    if(type){
      link  += "Type="+type;
    }
    return link;
  }

  const pageNameCheck = () => {
    let pageStr = props.serVal;
    if(!type){
      let pageNameArr = window.location.pathname.split("/");
      pageStr = pageNameArr[1];
    }
    pageStr = pageStr.toLowerCase();
    return pageStr;
  }

  let linkType = linkInfo();
  let pageName = pageNameCheck();

  if(mediaCnt <= 0){
    return(
      <>
        <NoList totalCnt={mediaCnt}/>
        <Paging page={pageNum} pageInfo={pageInfo} setPageNum={setPageNum}/>
      </>
    );
  }else{
    return(
      <>
        <div className="ListWrap">
          <ListCntWrap totalCnt={mediaCnt}/>
          <ListItemWrap linkType={linkType} mediaList={mediaList} list={props.list}/>
        </div>
        <div className="WriteBtnWrap">
          <Link to={"/Write/"+pageName}><button className="WriteBtn">글쓰기</button></Link>
        </div>
        <Paging page={pageNum} pageInfo={pageInfo} setPageNum={setPageNum}/>
      </>
    );
  } 
}

function ListItemWrap(props){
  if(props.list === "gallery"){
    return(      // 갤러리형 리스트
      <div>
        {
          props.mediaList.map((item, index) => (
            <Link to={props.linkType+"&bo_no="+item.bo_no} key={"MediaListItem"+index} >
              <MediaListItem item={item}/>
            </Link>
          ))
        }
    </div>
    );
  }else{       // 일반 리스트 
    return(
      <div>
        {
          props.mediaList.map((item, index) => (
            <Link to={props.linkType+"&bo_no="+item.bo_no} key={"MediaListItem"+index} >
              <NormalListItem item={item}/>
            </Link>
          ))
        }
      </div>
    );
  }
}


function NormalListItem(props){
  let item = props.item;
  return(
    <div className="NormalItemList">
      <div className="NormalItemTitle">{item['bo_title']}</div>
      <div className="NormalItemDate">{item['bo_date']}</div>
    </div>
  );
}

function MediaListItem(props){
  let item = props.item;
  return(
    <div className="MediaListItem">
      <div className="MediaItImg">
        <div style={{backgroundImage:'url('+item['bo_img']+')'}}></div>
      </div>
      <div className="MediaItAbout">
        <div className="MediaItTitle">{item['bo_title']}</div>
        <div className="MediaItContents">{item['bo_contents']}</div>
        <div className="MediaItDate">{item['bo_date']}</div>
      </div>
    </div>
  );
}

export {BoNoCheck,NoList,ConTitleWrap,MediaList};