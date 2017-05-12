const initialState = [];


export default function foodList (state = initialState, action){
	if(action.type === 'ADD_FOOD'){
		return [
			...state,
			action.payload
		];
	}
	return state;
}
