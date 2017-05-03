// Import React
import React from 'react';

// Create class called AppView that extends the base React Component class
class FormProfile extends React.Component {
  render() {
    return (
			<section>
				<form className='form bg-white r form_bot-padding'>
					<article className="form__header">
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
			</section>
    );
  }
}


export default FormProfile;
