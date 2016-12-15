import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPersonAsync } from '../../actions/person_actions';
import { Link } from 'react-router';

class PersonsNew extends Component {
    constructor(props) {
        super(props);
        // console.log('constructor log')
        // console.log(this.props)
        // console.log(this.state)
        this.state = { id: newObjectKey(this.props.Persons) }
    }
    
    // get context from global router
    static contextTypes = {
        router: PropTypes.object
    };

    // 
    // after Person has been created, navigate the user to the index
    // we navigate by calling this.context.router.push with the new path
    handleFormSubmit(formProps) {
        // dispatch input object to createPersons object and call new route url as the callback
        this.props.dispatch( createPersonAsync( formProps, () => this.context.router.push('/person') ));
    }

    render() {

        const { fields: {
            name, 
            location, 
            gender,
            website,
            twitter,
            facebook,
            linkedin,
            youtube,
            instagram,
            workingAt,
            daysPerWeek,
            role,
            isMentor,
            menteeList,
            mainSkills,
            skills,
            organizations
        }, handleSubmit } = this.props;

        // console.log('person new render')

        // console.log(this.props.Persons)
        
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
                <h3>Create A New Person</h3>

				<Field component={renderField} type="text" name="name" label="Name"/>
				<Field component={renderField} type="text" name="location" label="Location"/>
                <div>
                    <label>Gender</label>
                    <Field name="gender" className="form-control" component="select"  {...gender} >
                        <option></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </Field>
                </div>
				<Field component={optionalField} type="text" name="website" label="Website"/>
				<Field component={optionalField} type="text" name="twitter" label="Twitter"/>
				<Field component={optionalField} type="text" name="facebook" label="facebook"/>
				<Field component={optionalField} type="text" name="linkedin" label="LinkedIn"/>
				<Field component={optionalField} type="text" name="youtube" label="Youtube"/>
				<Field component={optionalField} type="text" name="instagram" label="Instagram"/>
				<Field component={optionalField} type="text" name="workingAt" label="WorkingAt"/>
				<Field component={optionalField} type="number" name="daysPerWeek" label="daysPerWeek"/>
				<Field component={optionalField} type="text" name="role" label="Role"/>
                <div>
                    <label>Mentor</label>
                    <Field name="mentor" className="form-control" component="select"  {...isMentor} >
                        <option></option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </Field>
                </div>
                <div>
                    <label>Mentee List</label>
                    <Field name="menteeList" className="form-control" component="select"  {...menteeList} >
                        <option></option>
                        {mentors(this.props.Persons)}
                    </Field>
                </div>
				<Field component={optionalField} type="text" name="mainSkills" label="MainSkills"/>
				<Field component={optionalField} type="text" name="skills" label="Skills"/>
				<Field component={optionalField} type="text" name="organizations" label="Organizations"/>

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

const optionalField = ({ input, label, type }) => {

	return (
		<div className="form-group">
			<label>{label}</label>
			<input {...input} placeholder={label} type={type} className="form-control" />
			<div className="form-control-feedback">
			</div>
		</div>
	)
}

function mapStateToProps(state) {
    // console.log('map state = ')
    // console.log(state)
    return {
        Persons: state.Persons,
        Companies: state.Companies    
    };
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
PersonsNew =  reduxForm({
    form: 'PersonsNewForm',
    fields: [
        'name', 
        'location',
        'gender',    
        'website',
        'twitter',
        'facebook',
        'linkedin',
        'youtube',
        'instagram',
        'workingAt',
        'daysPerWeek',
        'role',
        'isMentor',
        'menteeList',
        'mainSkills',
        'skills',
        'organizations'
        ],
    validate
})(PersonsNew);


PersonsNew = connect(mapStateToProps)(PersonsNew)

export default PersonsNew




function newObjectKey (state){
    let num = Object.keys(state).length
    let id = Object.keys(state)[num-1]
    return parseInt(id) + 1
}





function mentors(Persons){
    // console.log("mentors function")
    // console.log(Persons)
    let mentors = []
    for(let person in Object.keys(Persons)){
        // console.log("mentors loop")
        // console.log(person)
        // console.log(Persons)
        mentors.push( <option value={Persons[Object.keys(Persons)[person]]._id}>{Persons[Object.keys(Persons)[person]].name}</option>)
    }
    //  // console.log("mentors")
    // console.log(mentors)
    return mentors
}


// if(person.isMentor == true) 
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