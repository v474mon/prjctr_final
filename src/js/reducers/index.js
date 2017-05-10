import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import foodList from './foodList';
import playlists from './playlists';
import filterTracks from './filterTracks';


export default combineReducers({
	routing: routerReducer,
  foodList,
	filterTracks
})
