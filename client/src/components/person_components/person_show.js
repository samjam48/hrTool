import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPerson, deletePerson } from '../../actions/person_actions';
import { Link } from 'react-router';

class PersonShow extends Component {
  static contextTypes = {
      router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPerson(this.props.params.id);
  }


  onDeleteClick() {
    this.props.deletePerson(this.props.params.id, () => { this.context.router.push('/') });
  }
          // this.props.createPerson(props, () => this.context.router.push('/') );
  onEditClick() {
    this.context.router.push('/person/edit/' + this.props.params.id);
  }

  render() {
    const { Person } = this.props;

    if (!this.props.Person) {
      return <div>Loading...</div>
    }

    return (
      <div> 
        <Link to="/">Back To Index</Link>
        <h3>{Person.name}</h3>
        <h6>Location: {Person.location}</h6>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          style={{'left': '80%'}}
          onClick={this.onDeleteClick.bind(this)}>
          Delete Person
        </button>
        <button
          className="btn btn-warning pull-xs-right"
          style={{'left': '30%'}}
          onClick={this.onEditClick.bind(this)}>
          Edit Person
        </button>
      </div>
      )
  }
}

function mapStateToProps(state) {
    return { Person: state.Persons.Person }; 
}


export default connect(mapStateToProps, { fetchPerson, deletePerson })(PersonShow);