import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { deletePersonAsync } from '../../actions/person_actions';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

class PersonShow extends Component {
  static contextTypes = {
      router: PropTypes.object
  };

  // componentWillMount() {
  //   this.props.fetchPerson(this.props.params.id);
  // }


  onDeleteClick() {
    console.log('delete clicked. state = ')
    console.log(this.props.state)
    this.props.deletePersonAsync(this.props.params.id, () => { this.context.router.push('/person') });
  }
          // this.props.createPerson(props, () => this.context.router.push('/') );
  onEditClick() {
    this.context.router.push('/person/edit/' + this.props.params.id);
  }

  render() {
    console.log(this.props)
    
    const { Person } = this.props;//[this.props.params.id];
    console.log(Person)

    if (!this.props.Person) {
      return <div>Loading...</div>
    }

    return (
      <div> 
        <Link to="/person">Back To people</Link>
        <h3>{Person.name}</h3>
        <h6>Location: {Person.location}</h6>
        <Link to="/person">Back To people</Link>
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

function mapStateToProps(state, ownProps) {
  console.log('state and ownProps')
  console.log(state)
  console.log(ownProps)
    return { Person: state.Persons[ownProps.params.id], Persons: state.Persons }; 
}


export default connect(mapStateToProps, { deletePersonAsync })(PersonShow);