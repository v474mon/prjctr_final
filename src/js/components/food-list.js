import React, {Component} from 'react';
import FoodItem from './food-item';


class FoodList extends Component {
	//const { list } = props;
	constructor(props) {
		super(props);
		this.state = {
			list: props.items
		}
	};


	render() {
		return (
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
		);
	}
};

export default FoodList;
