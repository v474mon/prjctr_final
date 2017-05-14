import React, { Component, PropTypes }  from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import AppHeader from './app-header';
import ChapterHeader from './chapter-header';

const FoodItem = (props)  => {

	const item = props.foodItem;

  return (
		<div>
			<AppHeader />
			<section className="app-body">
				<ChapterHeader name="Food details" icon="icon-food-detail" />
				<div className='form r form_bot-padding'>
					<section className="form__fieldset bg-white">
						<div className="form__fieldset__title">
							<div className="container">
								<span className="icon icon-about-food"></span> About Food
							</div>
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
							<div className="container">
								<span className="icon icon-camera"></span> Photos
							</div>
						</div>
						<div className="text-center">
							<img src={`src/img/${item.img}`} alt={item.name} className="cards__item__img" />
						</div>
					</section>

					<section className="form__fieldset bg-white">
							<div className="form__fieldset__title">
								<div className="container">
									<span className="icon icon-about-food"></span> About Food
								</div>
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
			</section>
			<Menu />
		</div>
    );
}
export default FoodItem;
