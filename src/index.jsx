import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';

import reducer from './reducer.js';
import {setState} from './action_creators.js';
import App from './components/App.jsx';
import {VotingContainer} from './components/Voting.jsx';
import {ResultsContainer} from './components/Results.jsx';

const store = createStore(reducer);

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state => 
	store.dispatch(setState(state))
);

const routes = <Route component={App}>
	<Route path="/results" component={ResultsContainer}/>
	<Route path="/" component={VotingContainer}/>
</Route>;

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);