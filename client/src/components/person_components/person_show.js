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
    this.props.deletePersonAsync(this.props.params.id, () => { 
        this.context.router.push('/person') 
    });
  }
          // this.props.createPerson(props, () => this.context.router.push('/') );
  onEditClick() {
    this.context.router.push('/person/edit/' + this.props.params.id);
  }

  render() {
    // console.log(this.props)
    
    const { Person } = this.props;//[this.props.params.id];
    // console.log(Person)

    if (!this.props.Person) {
      return <div>Loading...</div>
    }

    return (
      <div> 
        <Link to="/person">Back To people</Link>
        <h3>{Person.name}</h3>
        <h6>Location: {Person.location}</h6>
        
        <div>
            {/*All fields shown for now with raw data*/}
            <h4>Details</h4>
            <p>Gender : {Person.location}</p>
            <p>Website : {Person.website}</p>
            <p>Socialmedia</p>
            <ul>
                <li>Twitter : {Person.socialmedia.twitter}</li>
                <li>Facebook : {Person.socialmedia.facebook}</li>
                <li>Linkedin : {Person.socialmedia.linkedin}</li>
                <li>Youtube : {Person.socialmedia.youtube}</li>
                <li>Instagram : {Person.socialmedia.instagram}</li>
            </ul>
            <p>Working at : {Person.workingAt}</p>
            <p>Days per week : {Person.daysPerWeek}</p>  {/*to remove ?*/} 
            <p>Role : {Person.role}</p>
            <p>Mentor : {Person.isMentor}</p>
            <p>MenteeList : {Person.menteeList}</p>
            <p>Main skills : {Person.skills.mainSkills[0]}</p> {/*have to itirate through skills*/}
            <p>Skills : {Person.skills.skills[0]}</p> {/*have to itirate through skills*/}
            <p>Organization : {Person.organization}</p>
        </div>

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
  // console.log('state and ownProps')
  // console.log(state)
  // console.log(ownProps)
    return { Person: state.Persons[ownProps.params.id], Persons: state.Persons }; 
}


export default connect(mapStateToProps, { deletePersonAsync })(PersonShow);