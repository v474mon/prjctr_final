// Import React
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Create class called AppView that extends the base React Component class
class BottomBar extends Component {
  render() {
    return (
				<div className="bottom-bar">
					<div className="row">
						<div className="col-md-12">
							<div className="bottom-bar__link">
								<span className="bottom-bar__link__icon"></span>
								<span className="bottom-bar__link__text">Post Food</span>
							</div>
						</div>
					</div>
				</div>
    );
  }
}


export default connect(
	state => ({
		testStore: state
	}),
	dispatch => ({})
)(BottomBar);
