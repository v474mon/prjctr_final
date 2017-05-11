// Import React
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Menu from './Menu';
import AppHeader from './app-header';

// Create class called AppView that extends the base React Component class
const ProfileAdd = ({ onAddProfile, ownProps }) => {
	console.log('ownProps', ownProps)
	let trackInput = '';
	let searchInput = '';
	const addFood = () => {
		console.log('addProfile', trackInput.value);
		onAddFood(trackInput.value);
		trackInput.value = '';
	}


    return (
			<div>
				<section className="">
					<div className=''>
					<form className='form bg-white r form_bot-padding'>
						<article className="form__header edit_profile_header">
							<div className="form__header__title">Edit Profile</div>
							<div className="form__header__avatar header__avatar_small"></div>
						</article>
						<fieldset className="form__fieldset">
							<div className="form__fieldset__title">
								<span className="icon icon-user"></span> About
							</div>
							<div className="form__fieldset__field">
								<input type="text" placeholder="Name" className="form-control" />
							</div>
							<div className="form__fieldset__field">
								<input type="text" placeholder="Location" className="form-control" />
							</div>
							<div className="form__fieldset__field">
								<input type="email" placeholder="Email" className="form-control" />
							</div>
							<div className="form__fieldset__field">
								<input type="text" placeholder="Username" className="form-control" />
							</div>
							<div className="form__fieldset__field">
								<input type="text" placeholder="Phone Number" className="form-control" />
							</div>
						</fieldset>
						<fieldset className="form__fieldset">
							<div className="form__fieldset__title">
								<span className="icon icon-key"></span> Change Password
							</div>
							<div className="form__fieldset__field">
								<input type="password" placeholder="Old Password"  className="form-control" />
							</div>
							<div className="form__fieldset__field">
								<input type="password" placeholder="New Password"  className="form-control" />
							</div>
						</fieldset>
						<div className="form__submit">Submit</div>
					</form>
					</div>
				</section>
			</div>
    );
}


export default connect(
	(state, ownProps) => ({
		//tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
		ownProps
	}),
	dispatch => ({
		onAddProfile: (name) => {
			const payload = {
				id: Date.now().toString(),
				name
			};
			dispatch({ type: 'ADD_PROFILE', payload})
		}
	})
)(ProfileAdd);

/*
<h1>FORMS</h1>
<div>
	<input type="text" ref={(input) => {trackInput = input}} />
	<button onClick={addFood}>add Track</button>
</div>

*/
