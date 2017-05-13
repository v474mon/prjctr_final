import { loadState, saveState } from '../components/localStorage';

const serializedState = loadState('food-list');
var initialState = serializedState ? serializedState : [];

export default function foodList (state = initialState, action){
	if(action.type === 'ADD_FOOD'){
		return [
			...state,
			action.payload
		];
	}
	saveState('food-list', state);
	return state;
}
