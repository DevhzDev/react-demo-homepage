import React from 'react';
import './Search.css';


function SearchWrap(props){
  const searchEvent = (e) =>{
    if(e.key === "Enter"){        // input Enter
      searchSubmit();  
    }
  }

  const searchSubmit = () =>{     // Click
    let sStx   = document.getElementsByName("stx")[0].value;
    let sSfl   = document.getElementsByName("sfl")[0].value;

    props.setStx(sStx);
    props.setSfl(sSfl);
  }

  return(
    <div className="ConSearchWrap">
      <div className="ConSearchSel">
        <select name="sfl">
          <option value="">전체</option>
          <option value="bo_title">제목</option>
          <option value="bo_contents">내용</option>
        </select>
      </div>
      <div className="conSearchInput">
        <input type="text" className="searchInput" name="stx" placeholder="검색어를 입력해 주세요." onKeyPress={searchEvent} maxLength={50} />
      </div>
      <div className="conSearchSubmit">
        <input type="submit" className="searchSubmit" value="" onClick={searchSubmit}/>
      </div>
    </div>
  )
}

export default SearchWrap;