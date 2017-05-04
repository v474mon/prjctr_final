import React from 'react';

const FoodItem = (props) => {
	const { name, ordered, sales } = props;
/*
	if(isDone) {
		//return <strike>{text}</strike>;
	} else {
		//return <span>{text}</span>;
	}
*/
		return (
			<div className="cards__item">
				<img src="src/img/food1.jpg" alt="" className="cards__item__img" />
				<div className="cards__item__cover">
					<div className="cards__item__cover__title">
						{name}
					</div>
					<div className="cards__item__cover__title_num">
						{ordered} Pending ordered<br/>
					</div>
					<div className="cards__item__cover__title_num italic">
						{sales} Total Sales
					</div>
				</div>
			</div>
		);

	/*
	render() {
    return (
			<div>
				<img src="src/img/food1.jpg" alt="" />
				{text}
			</div>
    );
  }
	*/
};

export default FoodItem;
