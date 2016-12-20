import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App.jsx';
import Voting from './components/Voting.jsx';
import Results from './components/Results.jsx';

const routes = <Route component={App}>
	<Route path="/results" component={Results}/>
	<Route path="/" component={Voting}/>
</Route>;

ReactDOM.render(
	<Router history={hashHistory}>{routes}</Router>,
	document.getElementById('app')
);