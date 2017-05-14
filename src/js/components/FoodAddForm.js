// Import React
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';

import Menu from './Menu';
import AppHeader from './app-header';
import ChapterHeader from './chapter-header';

// Create class called AppView that extends the base React Component class
const FoodAddForm = ({ onAddFood, ownProps }) => {
	let new_food_item = {}
	let nameInput = '';
	let ingredientsInput = '';
	let priceInput = '';
	let perPersonInput = '';
	let supplierNameInput = '';
	let supplierLocationInput = '';
	let supplierPhoneInput = '';
	const addFood = () => {
		//console.log('addFood', trackInput.value);
		//onAddFood(trackInput.value);
		new_food_item.name = nameInput.value;
		new_food_item.ingredient = ingredientsInput.value;
		new_food_item.price = priceInput.value;
		new_food_item.perPerson = perPersonInput.value;
		new_food_item.supplierName = supplierNameInput.value;
		new_food_item.supplierLocation = supplierLocationInput.value;
		new_food_item.supplierPhone = supplierPhoneInput.value;

		onAddFood(new_food_item);
	}


    return (
			<div>
				<AppHeader  />
				<section className="app-body">
					<ChapterHeader name="Add new food" icon="icon-food-list" />
					<div className=''>
						<form
							className='form bg-white r form_bot-padding'
						>

							<fieldset className="form__fieldset">
								<div className="form__fieldset__title">
									<span className="icon icon-about-food"></span> About Food
								</div>
								<div className="form__fieldset__field">
									<input type="text" placeholder="Food Title" className="form-control" type="text" ref={(input) => {nameInput = input}} />
								</div>
								<div className="form__fieldset__field">
									<input type="text" placeholder="Ingredients" className="form-control" ref={(input) => {ingredientsInput = input}}  />
								</div>
								<div className="row clearfix">
									<div className="col-md-6">
										<div className="form__fieldset__field">
											<input type="text" placeholder="Price" className="form-control" ref={(input) => {priceInput = input}} />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form__fieldset__field">
											<input type="text" placeholder="Per Person" className="form-control" ref={(input) => {perPersonInput = input}} />
										</div>
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
									<input type="text" placeholder="Supplier Name" className="form-control" ref={(input) => {supplierNameInput = input}}  />
								</div>
								<div className="form__fieldset__field">
									<input type="text" placeholder="Supplier Location" className="form-control" ref={(input) => {supplierLocationInput = input}}  />
								</div>
								<div className="form__fieldset__field">
									<input type="text" placeholder="Supplier Phone" className="form-control" ref={(input) => {supplierPhoneInput = input}}  />
								</div>
							</fieldset>

							<button className="form__submit" type="button" onClick={addFood}>Submit</button>
						</form>
					</div>
				</section>
			</div>
    );
}
/*
export default reduxForm({
	form: 'foodItem',
	fields: ['name, ingredients'],

})(FoodAddForm);
*/

export default connect(
	(state, ownProps) => ({
		//tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
		ownProps
	}),
	dispatch => ({
		onAddFood: (new_food_item) => {
			const payload = {
				id: parseInt(Date.now().toString()),
				img: "food"+Math.floor(Math.random()*12+1)+".jpg",
				name: new_food_item.name,
				ingredient:  new_food_item.ingredient,
				price: new_food_item.price,
				perPerson: new_food_item.perPerson,
				supplierName: new_food_item.supplierName,
				supplierLocation: new_food_item.supplierLocation,
				supplierPhone: new_food_item.supplierPhone,
				views: 0,
				sales: 0
			};
			dispatch({ type: 'ADD_FOOD', payload})
			window.location.href ='#/food-list';
		}
	})
)(FoodAddForm);
