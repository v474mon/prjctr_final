import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import foodList from './foodList';
import profile from './profile';



export default combineReducers({
	routing: routerReducer,
	form: formReducer,
  foodList,
	profile
})
