// Import React
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Menu from './Menu';

// Create class called AppView that extends the base React Component class
const FoodAddForm = ({ onAddFood, ownProps }) => {
	console.log('ownProps', ownProps)
	let trackInput = '';
	let searchInput = '';
	const addFood = () => {
		console.log('addFood', trackInput.value);
		onAddFood(trackInput.value);
		trackInput.value = '';
	}


    return (
			<div>
				<Menu />
				<h1>FORMS</h1>
				<div>
					<input type="text" ref={(input) => {trackInput = input}} />
					<button onClick={addFood}>add Track</button>
				</div>

			</div>
    );
}


export default connect(
	(state, ownProps) => ({
		//tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
		ownProps
	}),
	dispatch => ({
		onAddFood: (name) => {
			const payload = {
				id: Date.now().toString(),
				name
			};
			dispatch({ type: 'ADD_FOOD', payload})
		}
	})
)(FoodAddForm);

/*

*/
