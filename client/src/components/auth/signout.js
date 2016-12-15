import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/authentication';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return <div>You stay classy...</div>;
  }
}

export default connect(null, actions)(Signout);