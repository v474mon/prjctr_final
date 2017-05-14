export function onAddProfile(new_profile) {
	window.location.href ='#/food-list';
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
