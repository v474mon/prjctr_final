// Import CSS

import '../css/index.sass';

// Import React and ReactDOM
import React         from 'react'; // Necessary for JSX
import ReactDOM      from 'react-dom';
import { Provider}   from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// Import our JS code
/*
import FormProfile from './components/add-profile-form';
import FormFood    from './components/add-food-form';
import BottomBar   from './components/bottom-bar';
import FoodList    from './components/food-list';
import FoodDetail  from './components/food-detail';
import AppHeader   from './components/app-header';
*/
import TestComponent   from './components/test-component';


import reducer from './reducers/index';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
//window.__REDUX_DEVTOOLS_EXTENSION__());


/*
const foodList = [
	{id: 1, name: 'Spicy Beef Khichuri', ordered: 2, sales: 2},
	{id: 2, name: 'Biriyani', ordered: 4, sales: 15},
	{id: 3, name: 'Spicy Beef Khichuri', ordered: 2, sales: 2},
	{id: 4, name: 'Biriyani', ordered: 4, sales: 15}
]

let FormProfileAdd = (
	<div>
		<FormProfile />
	</div>
);

let FormFoodAdd = (
	<div>
		<AppHeader name="" icon="icon-food-list" />
		<FormFood />
	</div>
);

let FoodIHavePosted = (
	<div>
		<AppHeader name="Food I&rsquo;ve posted" icon="icon-food-list" />
		<FoodList items={foodList} />
		<BottomBar />
	</div>
);

let PageFoodDetail = (
	<div>
		<AppHeader name="" icon="icon-food-detail" />
		<FoodDetail items={foodList[1]} />
		<BottomBar />
	</div>
);
*/

// Attach React to #app-container inside index.html
/*
ReactDOM.render(
  	PageFoodDetail
  document.getElementById('app-container')
);
*/
ReactDOM.render(
	<Provider store={store}>
  		<TestComponent />
	</Provider>,
  document.getElementById('app-container')
);