// Import React
import React from 'react';

// Create class called AppView that extends the base React Component class
class FormFood extends React.Component {
  render() {
    return (
			<section className="app-body">
				<div className=''>
					<form className='form bg-white r form_bot-padding'>

						<fieldset className="form__fieldset">
							<div className="form__fieldset__title">
								<span className="icon icon-about-food"></span> About Food
							</div>
							<div className="form__fieldset__field">
								<input type="text" placeholder="Food Title" className="form-control" />
							</div>
							<div className="form__fieldset__field">
								<input type="text" placeholder="Ingredients" className="form-control" />
							</div>
							<div className="row clearfix">
								<div className="col-md-6">
									<div className="form__fieldset__field">
										<input type="text" placeholder="Price" className="form-control" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="form__fieldset__field">
										<input type="text" placeholder="Per Person" className="form-control" />
									</div>
								</div>
							</div>
						</fieldset>

						<fieldset className="form__fieldset">
							<div className="form__fieldset__title">
								<span className="icon icon-available"></span> Availability
							</div>
							<div className="form__fieldset__field">
								<div className="form-check">
						      <label className="form-check-label">
						        <input type="radio" className="form-check-input" name="optionsRadios" value="option1" />
						        Available
						      </label>
						    </div>
								<div className="form-check">
						      <label className="form-check-label">
						        <input type="radio" className="form-check-input" name="optionsRadios" value="option2" />
						        Will available at
						      </label>
						    </div>
								<div className="form-check">
						      <label className="form-check-label">
						        <input type="radio" className="form-check-input" name="optionsRadios" value="option3" />
						        After order will take
						      </label>
						    </div>
							</div>
						</fieldset>

						<fieldset className="form__fieldset">
							<div className="form__fieldset__title">
								<span className="icon icon-camera"></span> Photos
							</div>
							<div className="form__fieldset__field">
								<div className="text-center">
									<p>Take or Upload Photos of the food</p>
									<div className="form__btn__take-photo"></div>
								</div>
							</div>
						</fieldset>

						<fieldset className="form__fieldset">
							<div className="form__fieldset__title">
								<span className="icon icon-supplier"></span> Supplier Info
							</div>
							<div className="form__fieldset__field">
								<input type="text" placeholder="Supplier Name" className="form-control" />
							</div>
							<div className="form__fieldset__field">
								<input type="text" placeholder="Ingredients" className="form-control" />
							</div>
							<div className="form__fieldset__field">
								<input type="text" placeholder="Supplier Location" className="form-control" />
							</div>
							<div className="form__fieldset__field">
								<input type="text" placeholder="Supplier Contant info" className="form-control" />
							</div>
						</fieldset>

						<div className="form__submit">Submit</div>
					</form>
				</div>
			</section>
    );
  }
}


export default FormFood;
