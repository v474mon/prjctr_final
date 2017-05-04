// Import CSS
import '../css/index.sass';

// Import React and ReactDOM
import React       from 'react'; // Necessary for JSX
import ReactDOM    from 'react-dom';

// Import our JS code
import HelloWorld  from './components/hello-world';
import FormProfile from './components/add-profile-form';
import FormFood    from './components/add-food-form';
import BottomBar   from './components/bottom-bar';
import FoodList    from './components/food-list';
import FoodDetail  from './components/food-detail';
import AppHeader   from './components/app-header';

const foodList = [
	{id: 1, name: 'Spicy Beef Khichuri', ordered: 2, sales: 2},
	{id: 2, name: 'Biriyani', ordered: 4, sales: 15},
	{id: 3, name: 'Spicy Beef Khichuri', ordered: 2, sales: 2},
	{id: 4, name: 'Biriyani', ordered: 4, sales: 15}
]

let FormProfileAdd = (
	<div>
		<FormProfile />
	</div>
);

let FormFoodAdd = (
	<div>
		<AppHeader name="" icon="icon-food-list" />
		<FormFood />
	</div>
);

let FoodIHavePosted = (
	<div>
		<AppHeader name="Food I&rsquo;ve posted" icon="icon-food-list" />
		<FoodList items={foodList} />
		<BottomBar />
	</div>
);

let PageFoodDetail = (
	<div>
		<AppHeader name="" icon="icon-food-detail" />
		<FoodDetail items={foodList[1]} />
		<BottomBar />
	</div>
);

// Attach React to #app-container inside index.html
ReactDOM.render(
  PageFoodDetail,
  document.getElementById('app-container')
);
