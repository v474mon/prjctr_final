import React, { Component} from 'react';
import { Link } from 'react-router';

class Menu extends Component {
	render(){
		return (
			<div className="bottom-bar">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<Link to="/food-list" className="bottom-bar__link">
								<span className="bottom-bar__link__icon icon-food-list"></span>
								<span className="bottom-bar__link__text">Food List</span>
							</Link>
							<Link to="/food-add" className="bottom-bar__link">
								<span className="bottom-bar__link__icon icon-food-add"></span>
								<span className="bottom-bar__link__text">Food add</span>
							</Link>
							<Link to="/about" className="bottom-bar__link">
								<span className="bottom-bar__link__icon icon-about"></span>
								<span className="bottom-bar__link__text">About</span>
							</Link>
							<Link to="/profile-add" className="bottom-bar__link">
								<span className="bottom-bar__link__icon icon-me"></span>
								<span className="bottom-bar__link__text">Me</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Menu;
