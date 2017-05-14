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
					<ChapterHeader name="About app" icon="icon-about" />
					<div className="container">
						<section>
							<h2>Projector final project</h2>
							<p>Application allows modify personal information (Profile) and add Food into Food List.</p>
						</section>
						<section>
							<h3>Technologies</h3>
							<p>App made on ReactJs/ Redux/ ImmutableJs stack</p>
							<p>HTML markup on BEM and SaaS-preprocessor</p>
						</section>

					</div>
				</section>
				<Menu />
			</div>
		)
	}
}

export default About;
