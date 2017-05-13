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
				<section className="app-body app-body_login">
					<div className=''>
					<form className='form'>
						<fieldset className="form__fieldset">
							<div className="login_input_wrap r">
								<input type="text" placeholder="Login" className="form-control form-control-login" type="text" ref={(input) => {loginInput = input}}  />
								<span className="icon form__login__icon icon-login"></span>
							</div>
							<div className="login_input_wrap r">
								<input type="password" placeholder="Password"  className="form-control form-control-login" ref={(input) => {passwordInput = input}} />
									<span className="icon form__login__icon icon-password"></span>
							</div>
						</fieldset>
						<div className="text-center">
							<button className="login_form__submit" onClick={LoginFunc} type="button">Submit</button>
						</div>
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
