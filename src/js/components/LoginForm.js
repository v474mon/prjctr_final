// Import React
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'


// Create class called AppView that extends the base React Component class
const LoginForm = ({ onLogin, ownProps }) => {
	let loginInput = '';
	let passwordInput = '';
  const LoginFunc = () => {
		if (loginInput.value == 'admin' && passwordInput.value == 'root'){
			onLogin();
		}
		else{
			alert ('Ошибка')
		}
	}


    return (
			<div>
				<section className="app-body">
					<div className=''>
					<form className='form bg-white r form_bot-padding'>
						<fieldset className="form__fieldset">
							<div className="form__fieldset__field">
								<input type="text" placeholder="Login" className="form-control" type="text" ref={(input) => {loginInput = input}}  />
							</div>
							<div className="form__fieldset__field">
								<input type="password" placeholder="Password"  className="form-control" ref={(input) => {passwordInput = input}} />
							</div>
						</fieldset>
						<button className="form__submit" onClick={LoginFunc} type="button">Submit</button>
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
		onLogin: () => {
			const payload = {
				success: true
			};
			window.location.href ='#/about';
		//	dispatch({ type: 'ON_LOGIN', payload})
		}
	})

)(LoginForm);
