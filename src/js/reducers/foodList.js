import { Immutable, List, Map } from 'immutable';
import { fromJS, toJS } from 'immutable';
import { loadState, saveState } from '../helpers/localStorage';

const serializedState = loadState('foodList');
var initialState = serializedState ? serializedState : [];
const imm_food_list = fromJS(initialState);

export default function foodList (food_list = imm_food_list, action){
	if(action.type === 'ADD_FOOD'){
	  const food_list_map = food_list.push(Map(action.payload));
		saveState('foodList', food_list_map.toJS());
		return food_list_map;
	}

	return food_list;
}
