// Import React
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Menu from './Menu';
import AppHeader from './app-header';

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
				<AppHeader name="" icon="icon-food-list" />
				<section className="app-body">
					<div className=''>
						<form className='form bg-white r form_bot-padding'>

							<fieldset className="form__fieldset">
								<div className="form__fieldset__title">
									<span className="icon icon-about-food"></span> About Food
								</div>
								<div className="form__fieldset__field">
									<input type="text" placeholder="Food Title" className="form-control" type="text" ref={(input) => {trackInput = input}} />
								</div>
								<div className="form__fieldset__field">
									<input type="text" placeholder="Ingredients" className="form-control" />
								</div>
								<div className="row clearfix">
									<div className="col-md-6">
										<div className="form__fieldset__field">
											<input type="text" placeholder="Price" className="form-control" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form__fieldset__field">
											<input type="text" placeholder="Per Person" className="form-control" />
										</div>
									</div>
								</div>
							</fieldset>

							<fieldset className="form__fieldset">
								<div className="form__fieldset__title">
									<span className="icon icon-available"></span> Availability
								</div>
								<div className="form__fieldset__field">
									<div className="form-check">
										<label className="form-check-label">
											<input type="radio" className="form-check-input" name="optionsRadios" value="option1" />
											Available
										</label>
									</div>
									<div className="form-check">
										<label className="form-check-label">
											<input type="radio" className="form-check-input" name="optionsRadios" value="option2" />
											Will available at
										</label>
									</div>
									<div className="form-check">
										<label className="form-check-label">
											<input type="radio" className="form-check-input" name="optionsRadios" value="option3" />
											After order will take
										</label>
									</div>
								</div>
							</fieldset>

							<fieldset className="form__fieldset">
								<div className="form__fieldset__title">
									<span className="icon icon-camera"></span> Photos
								</div>
								<div className="form__fieldset__field">
									<div className="text-center">
										<p>Take or Upload Photos of the food</p>
										<div className="form__btn__take-photo"></div>
									</div>
								</div>
							</fieldset>

							<fieldset className="form__fieldset">
								<div className="form__fieldset__title">
									<span className="icon icon-supplier"></span> Supplier Info
								</div>
								<div className="form__fieldset__field">
									<input type="text" placeholder="Supplier Name" className="form-control" />
								</div>
								<div className="form__fieldset__field">
									<input type="text" placeholder="Ingredients" className="form-control" />
								</div>
								<div className="form__fieldset__field">
									<input type="text" placeholder="Supplier Location" className="form-control" />
								</div>
								<div className="form__fieldset__field">
									<input type="text" placeholder="Supplier Contant info" className="form-control" />
								</div>
							</fieldset>

							<button className="form__submit" onClick={addFood}>Submit</button>
						</form>
					</div>
				</section>
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
<h1>FORMS</h1>
<div>
	<input type="text" ref={(input) => {trackInput = input}} />
	<button onClick={addFood}>add Track</button>
</div>

*/
