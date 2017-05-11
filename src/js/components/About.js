import React, { Component} from 'react';
import Menu from './Menu';
import AppHeader from './app-header';
import ChapterHeader from './chapter-header';

class About extends Component {
	render(){
		return (
			<div>
				<AppHeader  />
				<section className="app-body body_footer">
					<ChapterHeader name="About app" icon="icon-food-about" />
					This is our cool music app
				</section>
				<Menu />
			</div>
		)
	}
}

export default About;
