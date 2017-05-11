import React, { Component} from 'react';
import { browserHistory } from 'react-router'

// Create class called AppView that extends the base React Component class
const ChapterHeader = (props) => {
		const { name, icon } = props;
		const class_link = "app-header__cat-icon " + icon
    return (
			<div className="chapter-header">
				<div className="app-header__curved"></div>
				<div className={class_link}></div>
				<div className="app-header__cat-title">{name}</div>
			</div>
    );
  }

export default ChapterHeader;
