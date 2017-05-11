import React from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import AppHeader from './app-header';

const FoodItem = ({ item }) =>  {
	return (
		<div>
			<AppHeader name="Food details" icon="icon-food-detail" />
			<section className="app-body body_footer">
				<div className='form bg-white r form_bot-padding'>
					<div className=''>
						<article className="form__fieldset">
							<div className="form__fieldset__title">
								<span className="icon icon-about-food"></span> About Food
							</div>
							<div className="form__fieldset__text-content">
								{item.name}
							</div>
							<div className="small_label">Food Title</div>
						</article>

						<article className="form__fieldset">
							<div className="form__fieldset__title">
								<span className="icon icon-camera"></span> Photos
							</div>
							<div className="form__fieldset__field">
								<img src="src/img/food1.jpg" alt="" className="cards__item__img" />
							</div>
						</article>
					</div>
				</div>
			</section>
			<Menu />
		</div>
	)};

const mapStateToProps = (state, ownProps) => {
	console.log(ownProps);
	return {
		item: state.foodList.find(item => item.id === Number(ownProps.params.id))
	}
};

export default connect(mapStateToProps)(FoodItem);
