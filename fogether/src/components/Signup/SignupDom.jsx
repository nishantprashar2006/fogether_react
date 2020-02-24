import React from 'react';

export default function signupDom() {
	return (
		<div className="jumbotron container_backgroundColor">
			<div className="container">
				<div className="row justify-content-md-center">
					<div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2">
						<div className="panel panel-default">
							<div className="panel-body">
								<form role="form">
									<div className="row">
										<div className="col-xs-12 col-sm-12 col-md-12">
											<div className="form-group">
												<input type="text" name="first_name" id="first_name" className="form-control input-sm" placeholder="First Name" />
											</div>
										</div>
										<div className="col-xs-12 col-sm-12 col-md-12">
											<div className="form-group">
												<input type="text" name="middle_name" id="middle_name" className="form-control input-sm" placeholder="Middle Name" />
											</div>
										</div>
										<div className="col-xs-12 col-sm-12 col-md-12">
											<div className="form-group">
												<input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="Last Name" />
											</div>
										</div>
									</div>

									<div className="row">
										<div className="col-xs-12 col-sm-12 col-md-12">
											<div className="form-group">
												<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="form-control input-sm" placeholder="Phone Number" />
											</div>
										</div>
									</div>

									<div className="row">
										<div className="col-xs-12 col-sm-12 col-md-12">
											<div className="form-group">
												<input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email Address" />
											</div>
										</div>
									</div>

									<div className="row">
										<div className="col-xs-12 col-sm-12 col-md-12">
											<div className="form-group">
												<input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password" />
											</div>
										</div>
										<div className="col-xs-12 col-sm-12 col-md-12">
											<div className="form-group">
												<input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-sm" placeholder="Confirm Password" />
											</div>
										</div>
									</div>

									<div className="row signup-button-margin">
										<div className="col-xs-12 col-sm-12 col-md-12">
											<input type="submit" value="Signup" className="btn btn-info btn-block" />
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}