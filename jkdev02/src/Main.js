import React, {Fragment} from 'react';
import IndexC from './IndexC';
import IndexD from './IndexD';
import IndexE from './IndexE';
import Header from './Head';
import Footer from './Footer';

//Main
function Main(){
	return(
		<Fragment>
			<Header />
			<div className="Main">
				<IndexC />
				<IndexD />
				<IndexE />
			</div>
			<Footer />
		</Fragment>
	);
}

export default Main;
