import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Main from './Main';
import AboutUs from './AboutUs';

// Router
function Router(){
	return(
		<Switch>
			<Route path="/" exact component={Main} />
			<Route path="/AboutUs" component={AboutUs} />
			{/* Not Found */}
			<Route component={() => <Redirect to="/" />} />
		</Switch>
	);
}

export default Router;