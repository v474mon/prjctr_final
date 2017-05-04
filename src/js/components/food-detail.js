import React, {Component} from 'react';

class FoodDetail extends Component {
	//const { list } = props;
/*	constructor(props) {
		super(props);
		this.state = {
			list: props.items
		}
	};
*/

	render() {
		return (
			<section className="app-body body_footer">
				<div className='form bg-white r form_bot-padding'>
					<div className=''>
						<article className="form__fieldset">
							<div className="form__fieldset__title">
								<span className="icon icon-about-food"></span> About Food
							</div>
							<div className="form__fieldset__text-content">
								Sorisha Elish Khichuri
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
		);
	}
};

export default FoodDetail;
