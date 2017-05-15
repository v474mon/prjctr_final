import { Immutable, List, Map } from 'immutable';
import { fromJS, toJS } from 'immutable';
import { loadState, saveState } from '../helpers/localStorage';

const serializedState = loadState('profile');
var initialState = serializedState ? serializedState : {};
const imm_profile = fromJS(initialState);

const init = Map({});
export default function(profile=imm_profile, action) {
	if(action.type === 'ADD_PROFILE'){
		const prof = action.payload;
		const prof_obj = profile
			.set('id', prof.id)
			.set('name', prof.name)
			.set('location', prof.location)
			.set('email', prof.email)
			.set('phone', prof.phone)
			.set('username', prof.username)
			.set('newPassword', prof.newPassword)
			.set('oldPassword', prof.oldPassword);
		saveState('profile', prof_obj.toJS());
		return prof_obj;
	}
	return profile;
}
