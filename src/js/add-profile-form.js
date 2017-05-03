// Import React
import React from 'react';

// Create class called AppView that extends the base React Component class
class FormProfile extends React.Component {
  render() {
    return (
			<section>
				<form className='form'>
					<article className="form__header">
						<div className="form__header__title">Edit Profile</div>
						<div className="form__header__avatar header__avatar_small"></div>
					</article>
					<fieldset className="form__fieldset">
						<div className="form__fieldset__title">
							<span className="icon icon-user"></span> About
						</div>
						<div className="form__fieldset__field">
							<input type="text" placeholder="Name" />
						</div>
						<div className="form__fieldset__field">
							<input type="text" placeholder="Location" />
						</div>
						<div className="form__fieldset__field">
							<input type="email" placeholder="Email" />
						</div>
						<div className="form__fieldset__field">
							<input type="text" placeholder="Username" />
						</div>
						<div className="form__fieldset__field">
							<input type="text" placeholder="Phone Number" />
						</div>
					</fieldset>
					<fieldset className="form__fieldset">
						<div className="form__fieldset__title">
							<span className="icon icon-key"></span> Change Password
						</div>
						<div className="form__fieldset__field">
							<input type="password" placeholder="Old Password" />
						</div>
						<div className="form__fieldset__field">
							<input type="password" placeholder="Location" />
						</div>
					</fieldset>
					<div className="form__sumit">Submit</div>
				</form>
			</section>
    );
  }
}


export default FormProfile;
