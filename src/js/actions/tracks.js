var mockApiData = [
	{
		id: 1,
		name: "Enter Sandman"
	},
	{
		id: 2,
		name : "Welcom home"
	},
	{
		id: 3,
		name: "Master of puppets"
	},
	{
		id: 4,
		name: "Fade to black"
	}
];
export const getTracks = () => dispatch => {
		setTimeout(() => {
			console.log('I got tracks');
			dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData })
		}, 2000)
}
