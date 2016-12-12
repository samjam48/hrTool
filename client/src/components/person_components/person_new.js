import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPersonAsync } from '../../actions/person_actions';
import { Link } from 'react-router';

class PersonsNew extends Component {
    
    // get context from global router
    static contextTypes = {
        router: PropTypes.object
    };

    // 
    // after Person has been created, navigate the user to the index
    // we navigate by calling this.context.router.push with the new path
    handleSubmit(event) {

        event.preventDefault() // stop default form submit stuff happening without our control
        // debugger
        // create object of input values (would be better to use redux form but causing issues...)
        var formObj = {name: event.target[0].value, location: event.target[1].value}

        // dispatch input object to createPersons object and call new route url as the callback
        this.props.dispatch(createPersonAsync(formObj, () => this.context.router.push('/person') ));
    }

    render() {

        const { fields: {name, location }, handleSubmit } = this.props;
        
        return (
            <form onSubmit={this.handleSubmit.bind(this)} >
                <h3>Create A New Person</h3>

                <div>
                    <label>Name</label>
                    <input type="text" className="form-control" {...name} /> 
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>Location</label>
                    <input type="text" className="form-control" {...location} /> 
                    <div className="text-help" >
                    </div>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/person" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {

    const errors = {};

    if (!values.name) {
        errors.name = 'Enter a title';
    }
    if (!values.location) {
        errors.location = 'Enter at least one category';
    }

    return errors;
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'PersonsNewForm',
    fields: ['name', 'location'],
    validate
})(PersonsNew);





    //     const { fields: {name, location }, handleSubmit } = this.props;
        
    //     return (
    //         <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
    //             <h3>Create A New Person</h3>

    //             <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`} >
    //                 <label>Name</label>
    //                 <input type="text" className="form-control" {...name} />
    //                 <div className="text-help" >
    //                     {name.touched ? name.error : ''}
    //                 </div>
    //             </div>

    //             <div className={`form-group ${location.touched && location.invalid ? 'has-danger' : ''}`} >
    //                 <label>Location</label>
    //                 <input type="text" className="form-control" {...location} />
    //                 <div className="text-help" >
    //                     {location.touched ? location.error : ''}
    //                 </div>
    //             </div>


    //             <button type="submit" className="btn btn-primary">Submit</button>
    //             <Link to="/" className="btn btn-danger">Cancel</Link>
    //         </form>
    //     );
    // }