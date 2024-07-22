import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';

function NotFound(){
	return(
		<div className="NotFound">
			<div className="NotFoundWrap">
				<div className="NotFoundImgWrap">
					<Link to="/"><img src="http://admin.ntriz.co.kr/data/DesignSt/default__DsIcon2" alt="404" /></Link>
				</div>
				<div className="NotFoundTitle">404 Not Found</div>
			</div>
		</div>
	);
}

export default NotFound;