const initialState = [
	{id: 1, name: 'Spicy Beef Khichuri', ordered: 2, sales: 2},
	{id: 2, name: 'Biriyani', ordered: 4, sales: 15},
	{id: 3, name: 'Spicy Beef Khichuri', ordered: 2, sales: 2},
	{id: 4, name: 'Biriyani', ordered: 4, sales: 15}
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
