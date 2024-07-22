import React,{useEffect} from 'react';
import Header from './Head';
import Footer from './Footer';
import SubHead from './SubHead';
import './Location.css';
import './SubCommon.css';
import WOW from 'wowjs';


function Organization(){
  useEffect(() => {
    new WOW.WOW({live:false}).init();
  }, []);
  const Title = "Location.";

  return(
    <div className="Location">
      <Header />
			<LocationContent Title = {Title} />
			<Footer />
    </div>
  )
}

function LocationContent(props){
  return(
    <div className="LocationContent">
      <SubHead img="http://admin.ntriz.co.kr/data/DesignSt/company__DsImg1" title="회사소개"/>
      <div className="Con">
        <div className="ConTitle">{props.Title}</div>
        <div className="LocationCon">
          <LocationMap />
        </div>
      </div>
    </div>
  )
}


// Kakao Map
function LocationMap(){
  
  // X, Y 좌표
  const locationX = 37.5400879093106;
  const locationY = 126.8943166846442;

  // script 헤더에 append
  const kakaoAppkey = "dd63ec7c798c7d909b3f271fb7d144d1";
  const script = document.createElement("script");
  script.async = true;
  script.src  = "//dapi.kakao.com/v2/maps/sdk.js?appkey="+kakaoAppkey+"&autoload=false";
  document.head.appendChild(script);

  // kakaoMap 생성
  const onLoadKakaoMap = () => {    
    window.kakao.maps.load(() => {
      let container = document.getElementById('kakaoMap'); // 지도 영역
      let mapPoistion = new window.kakao.maps.LatLng(locationX, locationY); // 좌표

      // 지도 생성
      let options = {
        center: mapPoistion,
        level: 3
      };
      let map = new window.kakao.maps.Map(container, options);

      // 마커 생성
      let marker = new window.kakao.maps.Marker({ 
        position: mapPoistion,
      });
      marker.setMap(map);

      // 마커 말풍선
      let balCon = '<div style="width:150px;box-sizing:border-box;padding:10px">';
      balCon    += ' <div style="font-weight:bold;text-align:center;width:100%;font-size:16px;margin-bottom:10px">주식회사 엔트리즈</div>';
      balCon    += ' <div style="width:100%;text-align:center;font-size:10px"></div>';
      balCon    += '  <div style="display:flex;width:90%;margin:0 auto;text-align:center">';
      balCon    += '    <a href="https://map.kakao.com/link/map/주식회사 엔트리즈,'+locationX+','+locationY+'" style="width:50%;color:#16b1ca;font-size:11px" target="_blank">큰지도보기</a>';
      balCon    += '    <a href="https://map.kakao.com/link/to/주식회사 엔트리즈,'+locationX+','+locationY+'" style="width:50%;color:#16b1ca;font-size:11px" target="_blank" style="font-size:8pt;padding-top:3px">길찾기</a>';
      balCon    += '  </div>';
      balCon    += '</div>';

      let balPosition = new window.kakao.maps.LatLng(locationX, locationY);	
      var balWindow	= new window.kakao.maps.InfoWindow({
        position : balPosition, 
        content : balCon 
      });
      balWindow.open(map, marker);

      // 줌 컨트롤
      let zoomControl		 = new window.kakao.maps.ZoomControl();
      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
    });
  }
  script.addEventListener("load", onLoadKakaoMap);

  return(
    <div className="LocationMap wow fadeIn">
      <div id="kakaoMap" style={{width:'100%', height:'600px'}}></div>
    </div>
  )
}


export default Organization;