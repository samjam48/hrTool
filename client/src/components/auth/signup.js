import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/authentication';


class Signup extends Component {
  handleFormSubmit(formProps) {
    // Call action creator to sign up the user!
    console.log(formProps)

    this.props.signupUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <h3>Sign Up</h3>
        <Field component={renderField} type="text" name="email" label="Email"/>
        <Field component={renderField} type="password" name="password" label="Password"/>
        <Field component={renderField} type="password" name="passwordConfirm" label="Confirm Password"/>
        <button type="submit" className="btn btn-primary">Sign in</button>
        
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.email) ) {
    errors.email = 'Please enter a valid email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

const renderField = ({ input, label, type, meta: { touched, error, invalid } }) => {
    	//Construct form-group class depending on form state
	const groupClass = touched ? (invalid ? 'form-group has-danger':'form-group has-success') : 'form-group';
	//Construct form-control class depending on form state
	const inputClass = touched ? (invalid ? 'form-control form-control-danger':'form-control form-control-success') : 'form-control';
	
	return (
		<div className={groupClass}>
			<label>{label}</label>
			<input {...input} placeholder={label} type={type} className={inputClass} />
			<div className="form-control-feedback">
				{touched ? <span>{error}</span> : ''}
			</div>
		</div>
	)
}


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

Signup = reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
})(Signup)

Signup = connect( mapStateToProps, actions)(Signup);

export default Signup



// <fieldset className="form-group">
//           <label>Email:</label>
//           <input className="form-control" {...email} />
//           {email.touched && email.error && <div className="error">{email.error}</div>}
//         </fieldset>
//         <fieldset className="form-group">
//           <label>Password:</label>
//           <input className="form-control" {...password} type="password" />
//           {password.touched && password.error && <div className="error">{password.error}</div>}
//         </fieldset>
//         <fieldset className="form-group">
//           <label>Confirm Password:</label>
//           <input className="form-control" {...passwordConfirm} type="password" />
//           {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
//         </fieldset>
//         {this.renderAlert()}
//         <button action="submit" className="btn btn-primary">Sign up!</button>