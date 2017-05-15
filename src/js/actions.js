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


export function onAddFood(new_food_item) {
	window.location.href ='#/food-list';
	return {
		type: 'ADD_FOOD',
		payload: {
			id: parseInt(Date.now().toString()),
			img: "food"+Math.floor(Math.random()*12+1)+".jpg",
			name: new_food_item.name,
			ingredient:  new_food_item.ingredient,
			price: new_food_item.price,
			perPerson: new_food_item.perPerson
		}
	};
}
