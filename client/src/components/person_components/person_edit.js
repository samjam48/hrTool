import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { updatePersonAsync } from '../../actions/person_actions';
import { Link } from 'react-router';

class editPerson extends Component {

    static contextTypes = {
        router: PropTypes.object
    };


    handleSubmit(event) {
        event.preventDefault()
        var formObj = {name: event.target[0].value, location: event.target[1].value}
        console.log(formObj)        
        this.props.updatePersonAsync(formObj, this.props.Person._id, this.props.Persons, (id) => { this.context.router.push(`/person/${id}`) }) 
    }


    render() {
        console.log('edit person props')
        console.log(this.props)
        const { Person } = this.props;
        // const { handleSubmit } = this.props;

        const { fields: { name, location }, handleSubmit } = this.props;

        if (!Person) {
            return <div>Loading...</div>
        }
        
        return (
            <div>
                <div> 
                    <Link to="/person">Back To peeps</Link>
                </div>

                <form onSubmit={this.handleSubmit.bind(this)} >
                    <h3>Edit Person</h3>

                    <div  >
                        <label>Name</label>
                        <input type="text" className="form-control" {...name} defaultValue={Person.name} />
                        <div className="text-help" >
                        </div>
                    </div>

                    <div  >
                        <label>Location</label>
                        <input type="text" className="form-control" {...location}  defaultValue={Person.location} />
                        <div className="text-help" >
                        </div>
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to={`/person/${Person._id}`} className="btn btn-danger">Cancel</Link>
                </form>

            </div>
        )
    }

    // onInputChange(title) {
    //     this.setState({title});
    //     console.log(state)
    // }
}

function mapStateToProps(state, ownProps) {
    console.log(state)
    return { Person: state.Persons[ownProps.params.id], Persons: state.Persons}; 
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'touch box to confirm value is correct';
  }
  if (!values.location) {
    errors.location = 'touch box to confirm value is correct';
  }

  return errors;
}


editPerson = reduxForm({
  form: 'PersonsEditForm',
  fields: ['name', 'location'],
  validate
})(editPerson)

export default connect ( mapStateToProps, { updatePersonAsync })(editPerson);



                            // Value={this.state.title}
                            // onChange={event => this.onInputChange( event.target.value) } />


                    // <h3>{Person.title}</h3>
                    // <h6>Categories: {Person.categories}</h6>
                    // <p>{Person.content}</p>

                // <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
                //     <h3>Edit Person</h3>

                //     <div className="form-group" >
                //         <label>Title</label>
                //         <input type="text" className="form-control" {...title} />
                //         <div className="text-help" >
                //         </div>
                //     </div>

                //     <div className="form-group" >
                //         <label>Categories</label>
                //         <input type="text" className="form-control" {...categories} />
                //         <div className="text-help" >
                //         </div>
                //     </div>

                //     <div className="form-group" >
                //         <label>Content</label>
                //         <textarea className="form-control" {...content} />
                //         <div className="text-help" >
                //         </div>
                //     </div>

                //     <button type="submit" className="btn btn-primary">Submit</button>
                //     <Link to={`/Persons/${Person.id}`} className="btn btn-danger">Cancel</Link>
                // </form>