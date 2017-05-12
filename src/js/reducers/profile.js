const initialState = {};
/*
const initialState = {
	name: '',
	location: '',
	username: '',
	phone: '',
	oldPassword: '',
	newPassword: ''
};
*/

export default function profile (state = initialState, action){
	if(action.type === 'ADD_PROFILE'){
			state = action.payload
		return state
	}
	return state;
}
