import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './navbar/header'
import SwipeableViews from 'react-swipeable-views';

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="text-xs-right">
            <Link to="person" className="btn btn-primary">
                People
            </Link>
            <Link to="company" className="btn btn-primary">
                Companies
            </Link>
        </div>
        {this.props.children}
          <Link to="/company/deleteCompanies" className="btn btn-primary">
            remove all companies
          </Link>

          <Link to="/person/deletePersons" className="btn btn-primary">
            remove all the people
          </Link>
      </div>
    );
  }
}


