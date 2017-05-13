import React from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import AppHeader from './app-header';
import ChapterHeader from './chapter-header';

const FoodItem = ({ item, onViewFood, onOrderFood }) =>  {
	onViewFood(item.id);
	const orderNow = () => {
		onOrderFood(item.id);
	}
	return (
		<div>
			<AppHeader />
			<section className="app-body">
				<ChapterHeader name="Food details" icon="icon-food-detail" />
				<div className='form r form_bot-padding'>
					<div className=''>
						<section className="form__fieldset bg-white">
							<div className="form__fieldset__title">
								<span className="icon icon-about-food"></span> About Food
							</div>
							<article className="form__fieldset__field">
								<div className="container">
									<div className="form__fieldset__text-content">
										{item.name}
									</div>
									<div className="small_label">Food Title</div>
								</div>
							</article>
							<article className="form__fieldset__field">
								<div className="container">
									<div className="form__fieldset__text-content">
										{item.ingredient}
									</div>
									<div className="small_label">Ingredients</div>
								</div>
							</article>
							<article className="form__fieldset__field">
								<div className="container">
									<div className="form__fieldset__text-content">
										{item.price} uah / {item.perPerson} pers
									</div>
								</div>
							</article>
						</section>

						<section className="form__fieldset">
								<div className="form__fieldset__title">
									<span className="icon icon-camera"></span> Photos
								</div>
								<div className="">
									<img src={`src/img/${item.img}`} alt={item.name} className="cards__item__img" />
								</div>
						</section>

						<section className="form__fieldset bg-white">
							<div className="form__fieldset__title">
								<span className="icon icon-about-food"></span> About Food
							</div>
							<article className="form__fieldset__field">
								<div className="container">
									<div className="form__fieldset__text-content">
										{item.supplierName}
									</div>
									<div className="small_label">Supplier Name</div>
								</div>
							</article>
							<article className="form__fieldset__field">
								<div className="container">
									<div className="form__fieldset__text-content">
										{item.supplierLocation}
									</div>
									<div className="small_label">Supplier Location</div>
								</div>
							</article>
							<article className="form__fieldset__field">
								<div className="container">
									<div className="form__fieldset__text-content">
										{item.supplierPhone}
									</div>
									<div className="small_label">Supplier Phone</div>
								</div>
							</article>
						</section>
					</div>
					<button className="form__submit" onClick={orderNow} type="button">Order now</button>
				</div>
			</section>
			<Menu />
		</div>
	)};


export default connect(
		(state, ownProps) => ({
			ownProps,
			item: state.foodList.find(item => item.id === Number(ownProps.params.id))
		}),
		dispatch => ({
			onOrderFood: (id) => {
				console.log('id', id);
				//dispatch({ type: 'FIND_TRACK', payload: id})
			},
			onViewFood: (id) => {
				console.log('id', id);
			}
		})
)(FoodItem);




/*
,



*/
