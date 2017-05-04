import React from 'react';

// Create class called AppView that extends the base React Component class
const AppHeader = (props) => {
		const { name, icon } = props;
		const class_link = "app-header__cat-icon " + icon
    return (
			<div className="app-header">
				<div className="app-header__curved"></div>
				<div className="app-header__btn-link app-return-link"> &lt; </div>
				<div className={class_link}></div>
				<div className="app-header__cat-title">{name}</div>
			</div>
    );
  }

export default AppHeader;
