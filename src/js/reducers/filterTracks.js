const initialState = '';


export default function filterList(state = initialState, action){
	if(action.type === 'FIND_TRACK'){
		return action.payload
	}
	return state;
}
