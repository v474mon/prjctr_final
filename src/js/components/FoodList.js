// Import React
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Menu from './Menu';
import AppHeader from './app-header';
import ChapterHeader from './chapter-header';


const FoodList = (props)  => {
	const { foodList } = props.foodList;
	const foodListCount = foodList.size;

  return (
		<div>
			<AppHeader/>
			<section className="app-body body_footer">
				<ChapterHeader name="Food I&rsquo;ve posted" icon="icon-food-list" />
				<div className="container">
					<ul className='cards__list'>
					{foodList.map(item => (
						<li key={item.get('id')}>
							<Link className="cards__item"  to={`/food-list/${item.get('id')}`}>
								<img src={`src/img/${item.get('img')}`} alt="" className="cards__item__img" />
								<div className="cards__item__cover">
									<div className="cards__item__cover__title">
										{item.get('name')}
									</div>
								</div>
							</Link>
						</li>
					))}
					</ul>
					{foodListCount == 0 > 0 &&
						<div>
		        	<p>No food added yet</p>
						</div>
      		}
				</div>
			</section>
			<Menu />
			</div>
    );
}
export default FoodList;
