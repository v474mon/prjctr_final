// Import React
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Menu from './Menu';
import AppHeader from './app-header';
import ChapterHeader from './chapter-header';


// Create class called AppView that extends the base React Component class
const FoodList = ({ foodList, ownProps }) => {
	console.log('ownProps', ownProps)
	let trackInput = '';
	let searchInput = '';
	console.log('foodList', foodList)
	/*
	const addTrack = () => {
		console.log('addTrack', trackInput.value);
		onAddTrack(trackInput.value);
		trackInput.value = '';
	}

 const findTrack = () => {
		console.log('findTrack', searchInput.value);
		onFindTrack(searchInput.value);
	}
*/

    return (
			<div>
				<AppHeader/>
				<section className="app-body body_footer">
					<ChapterHeader name="Food I&rsquo;ve posted" icon="icon-food-list" />
					<ul className='cards__list'>
						{foodList.map((item, index ) =>
							<li key={index}>
								<Link className="cards__item"  to={`/food-list/${item.id}`}>
									<img src="src/img/food1.jpg" alt="" className="cards__item__img" />
									<div className="cards__item__cover">
										<div className="cards__item__cover__title">
											{item.name}
										</div>
										<div className="cards__item__cover__title_num">
											{item.ordered} Pending ordered<br/>
										</div>
										<div className="cards__item__cover__title_num italic">
											{item.sales} Total Sales
										</div>
									</div>
								</Link>
							</li>
						)}
					</ul>

				</section>
				<Menu />
				</div>
    );
}
/*
<section className="app-body body_footer">
	<div className=''>
		<ul className='cards__list'>
			{this.state.list.map(item => (
				<li key={item.id}>
					<FoodItem name={item.name} ordered={item.ordered} sales={item.sales} />
				</li>
			))}
		</ul>
	</div>
</section>
*/
export default connect(
	(state, ownProps) => ({
	//	foodList: state.foodList.filter(item => item.name.includes(state.filterList)),
		foodList: state.foodList,
		ownProps
	}),
	dispatch => ({
		onAddTrack: (name) => {
			const payload = {
				id: Date.now().toString(),
				name
			};
			dispatch({ type: 'ADD_TRACK', payload})
		},
		onFindTrack: (name) => {
			console.log('name', name)
			dispatch({ type: 'FIND_TRACK', payload: name})
		}
	})
)(FoodList);

/*

*/
