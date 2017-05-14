// Import React
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Menu from './Menu';
import AppHeader from './app-header';
import ChapterHeader from './chapter-header';

// Create class called AppView that extends the base React Component class
const ProfileAdd = (props)  => {
	//const { profile, onAddProfile } = props.profile;
const { profile, onAddProfile} = props;
console.log('onAddProfile')
console.log(onAddProfile)
//const ProfileAdd = ({ onAddProfile, ownProps, profile }) => {
	let new_profile = {}
	let nameInput = '';
	let locationInput = '';
	let emailInput = '';
	let usernameInput = '';
	let phoneInput = '';
	let oldPasswordInput = '';
	let newPasswordInput = '';
	let id = profile.id ? profile.id : parseInt(Date.now().toString());
	console.log('profile', profile)

	const addProfile = (event) => {
		new_profile.id = id;
		new_profile.name = nameInput.value;
		new_profile.location = locationInput.value;
		new_profile.email = emailInput.value;
		new_profile.username = usernameInput.value;
		new_profile.phone = phoneInput.value;
		new_profile.oldPassword = oldPasswordInput.value;
		new_profile.newPassword = newPasswordInput.value;
		console.log('new_profile - ProfileADD')
		console.log(new_profile)
		onAddProfile(new_profile);

	};


    return (
			<div>
				<AppHeader  />
				<section className="app-body">
					<div className=''>
					<form className='form bg-white r'>
						<article className="form__header edit_profile_header">
							<div className="form__header__title">Edit Profile</div>
							<div className="form__header__avatar header__avatar_small"></div>
						</article>
						<fieldset className="form__fieldset">
							<div className="form__fieldset__title">
								<div className="container">
									<span className="icon icon-user"></span> About
								</div>
							</div>
							<div className="container">
								<div className="form__fieldset__field">
									<input type="text" placeholder="Name" defaultValue={profile.get('name')} className="form-control" type="text" ref={(input) => {nameInput = input}}  />
								</div>
								<div className="form__fieldset__field">
									<input type="text" placeholder="Location" defaultValue={profile.get('location')} className="form-control" ref={(input) => {locationInput = input}} />
								</div>
								<div className="form__fieldset__field">
									<input type="email" placeholder="Email" defaultValue={profile.get('email')} className="form-control" ref={(input) => {emailInput = input}}  />
								</div>
								<div className="form__fieldset__field">
									<input type="text" placeholder="Username" defaultValue={profile.get('username')} className="form-control" ref={(input) => {usernameInput = input}} />
								</div>
								<div className="form__fieldset__field">
									<input type="text" placeholder="Phone Number" defaultValue={profile.get('phone')} className="form-control" ref={(input) => {phoneInput = input}} />
								</div>
							</div>
						</fieldset>
						<button className="form__submit submit_simple" onClick={addProfile} type="button">Submit</button>
					</form>
					</div>
				</section>
			</div>
    );
}
export default ProfileAdd;

/*
export default connect(
	(state, ownProps) => ({
		//tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
		ownProps,
		profile: state.profile
	}),
	dispatch => ({
		onAddProfile: (new_profile) => {
			const payload = {
				id: new_profile.id,
				name: new_profile.name,
				location:  new_profile.location,
				email: new_profile.email,
				username: new_profile.username,
				phone: new_profile.phone,
				oldPassword: new_profile.oldPassword,
			  newPassword: new_profile.newPassword
			};
			dispatch({ type: 'ADD_PROFILE', payload});
			window.location.href ='#/food-list';
		}
	})

)(ProfileAdd);
*/
