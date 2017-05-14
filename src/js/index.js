// Import CSS
import '../css/index.sass';

// Import React and ReactDOM
import React         from 'react'; // Necessary for JSX
import ReactDOM      from 'react-dom';
import { Provider}   from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';


import FoodAddForm from './components/FoodAddForm';
import LoginForm from './components/LoginForm';
import reducer from './reducers/index';
import About from './components/About';

import { createBrowserHistory } from 'history';
import { FoodListContainer, FoodItemContainer, ProfileAddContainer } from './containers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Route path="/" component={About} />
				<Route path="/food-list" component={FoodListContainer} />
				<Route path="/food-add" component={FoodAddForm} />
				<Route path="/food-list/:id" component={FoodItemContainer} />
				<Route path="/profile-add" component={ProfileAddContainer} />
				<Route path="/about" component={About} />
			</div>
		</Router>
	</Provider>,
  document.getElementById('app-container')
);
