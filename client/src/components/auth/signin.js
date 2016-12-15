import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/authentication';

class Signin extends Component {
  handleSubmit(event) {

    event.preventDefault() 
    // console.log(event.target[1])
    let email = event.target[0].value
    let password = event.target[1].value

    this.props.signinUser({email, password});
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
    const {fields: { email, password }} = this.props;

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
            <label>Email</label>
            <input type="text" className="form-control" {...email} /> 
            <div className="text-help" >
            </div>
        </div>
        <div>
            <label>Password</label>
            <input type="password" className="form-control" {...password} /> 
            <div className="text-help" >
            </div>
        </div>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

Signin = reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin)

Signin = connect( mapStateToProps, actions )(Signin);

export default Signin