import React from 'react';
import ReactDOM from 'react-dom';
import './appStyles.css';
import App from './containers/App';
import Homepage from './containers/Homepage';
import CategoryPage from './containers/CategoryPage';
import registerServiceWorker from './registerServiceWorker';
import {default as mainReducer} from './reducers/MainReducer.js';

import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

var reducer = combineReducers({
	mainReducer,
	routing:routerReducer
})
const store = createStore(reducer,
compose(applyMiddleware(thunk, routerMiddleware(browserHistory)))
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Homepage} />
				<Route path="category/:name" component={CategoryPage} />
			</Route>
		</Router>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
