// Import React
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Menu from './Menu';
import AppHeader from './app-header';
import ChapterHeader from './chapter-header';

// Create class called AppView that extends the base React Component class
const ProfileAdd = ({ onAddProfile, ownProps, profile }) => {
	console.log('profile', profile)
	let new_profile = {}
	let nameInput = '';
	let locationInput = '';
	let emailInput = '';
	let usernameInput = '';
	let phoneInput = '';
	let oldPasswordInput = '';
	let newPasswordInput = '';

	const addProfile = ( {profile} ) => {
		new_profile.name = nameInput.value;
		new_profile.location = locationInput.value;
		new_profile.email = emailInput.value;
		new_profile.username = usernameInput.value;
		new_profile.phone = phoneInput.value;
		new_profile.oldPassword = oldPasswordInput.value;
		new_profile.newPassword = newPasswordInput.value;
		console.log('new_profile')
		console.log(new_profile)
		onAddProfile(new_profile);
	}


    return (
			<div>
				<AppHeader  />
				<section className="app-body">
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
							<h2>{profile.name}</h2>
							<div className="form__fieldset__field">
								<input type="text" placeholder="Name" className="form-control" type="text" ref={(input) => {nameInput = input}}  />
							</div>
							<div className="form__fieldset__field">
								<input type="text" placeholder="Location" className="form-control" ref={(input) => {locationInput = input}} />
							</div>
							<div className="form__fieldset__field">
								<input type="email" placeholder="Email" className="form-control" ref={(input) => {emailInput = input}}  />
							</div>
							<div className="form__fieldset__field">
								<input type="text" placeholder="Username" className="form-control" ref={(input) => {usernameInput = input}} />
							</div>
							<div className="form__fieldset__field">
								<input type="text" placeholder="Phone Number" className="form-control" ref={(input) => {phoneInput = input}} />
							</div>
						</fieldset>
						<fieldset className="form__fieldset">
							<div className="form__fieldset__title">
								<span className="icon icon-key"></span> Change Password
							</div>
							<div className="form__fieldset__field">
								<input type="password" placeholder="Old Password"  className="form-control" ref={(input) => {oldPasswordInput = input}} />
							</div>
							<div className="form__fieldset__field">
								<input type="password" placeholder="New Password"  className="form-control" ref={(input) => {newPasswordInput = input}} />
							</div>
						</fieldset>
						<button className="form__submit" onClick={addProfile} type="button">Submit</button>
					</form>
					</div>
				</section>
			</div>
    );
}

export default connect(
	(state, ownProps) => ({
		//tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
		ownProps,
		profile: state.profile
	}),
	dispatch => ({
		onAddProfile: (new_profile) => {
			const payload = {
				name: new_profile.name,
				location:  new_profile.location,
				email: new_profile.email,
				username: new_profile.username,
				phone: new_profile.phone,
				oldPassword: new_profile.oldPassword,
			  newPassword: new_profile.newPassword
			};
			dispatch({ type: 'ADD_PROFILE', payload})
		}
	})

)(ProfileAdd);
