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

import FoodList   from './components/FoodList';
import FoodAddForm from './components/FoodAddForm';
import ProfileAdd from './components/ProfileAdd';

import reducer from './reducers/index';
import About from './components/About';
import Track from './components/Track';
import FoodItem from './components/FoodItem';

import { createBrowserHistory } from 'history';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Route path="/" component={FoodList} />
				<Route path="/food-add" component={FoodAddForm} />
				<Route path="/profile-add" component={ProfileAdd} />
				<Route path="/about" component={About} />
				<Route path="/tracks/:id" component={Track} />
				<Route path="/food-list/:id" component={FoodItem} />
			</div>
		</Router>
	</Provider>,
  document.getElementById('app-container')
);
