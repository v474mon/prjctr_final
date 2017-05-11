import React, { Component} from 'react';
import Menu from './Menu';
import AppHeader from './app-header';

class About extends Component {
	render(){
		return (
			<div>
				<AppHeader name="About app" icon="icon-food-about" />
				<section className="app-body body_footer">
					This is our cool music app
				</section>
				<Menu />
			</div>
		)
	}
}

export default About;
