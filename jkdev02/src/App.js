import {Route, Switch} from 'react-router-dom';
import Main from './Main';
import AboutUs from './AboutUs';
import History from './History';
import Organization from './Organization';
import Location from './Location';
import Service from './Service';
import Media from './Media';
import Notice from './Notice';
import Write from './Write';
import Login from './Login';
import Join from './Join';
import NotFound from './NotFound';

function App() {
	return(
		<Switch>
			<Route path="/" exact component={Main} />
			<Route path="/AboutUs" component={AboutUs} />
      <Route path="/History" component={History} />
      <Route path="/Organization" component={Organization} />
      <Route path="/Location" component={Location} />
      <Route path="/Service" component={Service} />
      <Route path="/Notice" component={Notice} />
      <Route path="/Media" component={Media} />
      <Route path="/Login" component={Login} />
      <Route path="/Join" component={Join} />
      {/* <Route path="/Write/:type" component={Write} /> */}
      <Route component={NotFound} />
		</Switch>
	);
}

export default App;
