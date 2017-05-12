const initialState = [
	{id: 1, name: 'Spicy Beef Khichuri', ingredient: 'beef, tomato, chips', price: '26.80', perPerson: '1', ordered: 2, sales: 2},
	{id: 2, name: 'Biriyani', ingredient: 'meat, cucumber', price: '125.00', perPerson: '2', ordered: 4, sales: 15},
	{id: 3, name: 'Spicy Beef Khichuri', ingredient: 'salmon, shrimps', price: '128.23', perPerson: '1', ordered: 2, sales: 2},
	{id: 4, name: 'Biriyani', ingredient: 'rise, vegetables', price: '12.40', perPerson: '1', ordered: 4, sales: 15}
];


export default function foodList (state = initialState, action){
	if(action.type === 'ADD_FOOD'){
		return [
			...state,
			action.payload
		];
	}
	return state;
}
