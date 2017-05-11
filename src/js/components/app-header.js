import React, { Component} from 'react';
import { browserHistory } from 'react-router'

// Create class called AppView that extends the base React Component class
class AppHeader extends Component {
	render(){
    return (
			<div className="app-header">
				<div className="app-header__btn-link app-return-link" onClick={browserHistory.goBack}> &lt; </div>
			</div>

		)
	}
}

export default AppHeader;
