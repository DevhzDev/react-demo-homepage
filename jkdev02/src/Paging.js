import React from 'react';
import './Paging.css';

const Paging = ({page, pageInfo, setPageNum}) => {

  page            = Number(page);
  let blockS      = pageInfo['BlockS'];
  let blockE      = pageInfo['BlockE'];
  let TotalPage   = pageInfo['TotalPage'];
  let preBlock    = pageInfo['PreBlock'];
  let nextBlock   = pageInfo['NextBlock'];  

  let pageArr     = [];
  let blockArr    = [];
  
  // 처음 페이지
  blockArr          = [];
  blockArr["num"]   = "<<";
  blockArr["page"]  = 1;
  blockArr["type"]  = "icon";
  pageArr.push(blockArr);

  // 이전 블록
  blockArr          = [];
  blockArr["num"]   = "<";
  blockArr["page"]  = preBlock;
  blockArr["type"]  = "icon";
  pageArr.push(blockArr);

  // 페이징 번호
  for(let i=blockS;i<=blockE;i++){
    blockArr          = [];
    blockArr["num"]   = i;
    blockArr["page"]  = i;
    pageArr.push(blockArr);
  }

  // 다음 블록
  blockArr          = [];
  blockArr["num"]   = ">";
  blockArr["page"]  = nextBlock;
  blockArr["type"]  = "icon";
  pageArr.push(blockArr);

  // 마지막 페이지
  blockArr          = [];
  blockArr["num"]   = ">>";
  blockArr["page"]  = TotalPage;
  blockArr["type"]  = "icon";
  pageArr.push(blockArr);

  const pageClick = (page) => {
    setPageNum(page);
    let pTop = document.querySelector(".ListWrap").offsetTop; // 리스트 상단으로 이동(리스트 영역 클래스명 : ListWrap)
    window.scrollTo({top:pTop-100});
  }

  return(
    <div className="Paging">
      { 
        pageArr.map((item, index) => (
          <div className={"PageIcon "+(page === item.num ? 'NowPage ' : '') + (item.type === "icon" ? 'PageDirection' : '')} key={"page"+index} onClick={()=>pageClick(item.page)}>{item.num}</div>
        ))
      }
    </div>
  );
}

export default Paging;