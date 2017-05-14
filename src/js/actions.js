/*
export function addTodo(text) {
	return {
		type: 'ADD_TODO',
		payload: {
			id: v4(),
			isDone: false,
			text: text
		}
	};
}
*/

export function onAddProfile(new_profile) {
	console.log('onAddProfile - new_profile')
	console.log(new_profile)
	return {
		type: 'ADD_PROFILE',
		payload: {
			id: new_profile.id,
			name: new_profile.name,
			location:  new_profile.location,
			email: new_profile.email,
			username: new_profile.username,
			phone: new_profile.phone,
			oldPassword: new_profile.oldPassword,
			newPassword: new_profile.newPassword
		}
	};
}


// window.location.href ='#/food-list';
