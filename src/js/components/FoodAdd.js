
// Import React
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Menu from './Menu';
import AppHeader from './app-header';
import ChapterHeader from './chapter-header';

// Create class called AppView that extends the base React Component class
const FoodAdd = (props)  => {
	const { onAddFood, ownProps} = props;
	let new_food_item = {}
	let nameInput = '';
	let ingredientsInput = '';
	let priceInput = '';
	let perPersonInput = '';
	let supplierNameInput = '';
	let supplierLocationInput = '';
	let supplierPhoneInput = '';
	const addFood = () => {
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
					<ChapterHeader name="Add new food" icon="icon-food-add" />
					<div className=''>
						<form className='form bg-white r'>
							<fieldset className="form__fieldset">
								<div className="form__fieldset__title">
									<div className="container">
										<span className="icon icon-about-food"></span> About Food
									</div>
								</div>

								<div className="form__fieldset__field">
									<div className="container">
										<input type="text" placeholder="Food Title" className="form-control" type="text" ref={(input) => {nameInput = input}} />
									</div>
								</div>
								<div className="form__fieldset__field">
									<div className="container">
										<textarea type="text" placeholder="Ingredients" className="form-control" ref={(input) => {ingredientsInput = input}} ></textarea>
									</div>
								</div>
								<div className="form__fieldset__field">
									<div className="container">
										<div className="row clearfix">
											<div className="col-md-6 col-sm-6 col-xs-6">
												<input type="number" placeholder="Price" className="form-control" ref={(input) => {priceInput = input}} />
											</div>
											<div className="col-md-6 col-sm-6 col-xs-6">
												<input type="number" placeholder="Per Person" className="form-control" ref={(input) => {perPersonInput = input}} />
											</div>
										</div>
									</div>
								</div>
							</fieldset>

							<fieldset className="form__fieldset">
								<div className="form__fieldset__title">
									<div className="container">
										<span className="icon icon-camera"></span> Photo
									</div>
								</div>
								<div className="form__fieldset__field">
									<div className="text-center">
										<div className="container">
											<p className="text-small">
												Unfortunately, in this version it&rsquo;s impossible to upload photo.
												Random picture would be placed automatically.
											</p>
										</div>
										<div className="form__btn__take-photo"></div>
									</div>
								</div>
							</fieldset>

							<button className="form__submit submit_simple" type="button" onClick={addFood}>Submit</button>
						</form>
					</div>
				</section>
			</div>
    );
}
export default FoodAdd;
