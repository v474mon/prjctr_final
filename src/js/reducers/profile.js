import { loadState, saveState } from '../components/localStorage';

//const initialState = loadState();
const serializedState = loadState('profile');
var initialState = serializedState ? serializedState : {};


export default function profile (state = initialState, action){
	if(action.type === 'ADD_PROFILE'){
			state = action.payload;
			saveState('profile', state);
		return state
	}
	return state;
}
