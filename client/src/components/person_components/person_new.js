import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPersonAsync } from '../../actions/person_actions';
import { Link } from 'react-router';

class PersonsNew extends Component {
	constructor(props) {
		super(props);
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

		this.props.dispatch(createPersonAsync(formProps, () => this.context.router.push('/person')));

		// event.preventDefault() // stop default form submit stuff happening without our control


		// // debugger
		// // create object of input values (would be better to use redux form but causing issues...)
		// var formObj = {
		// 	name: event.target[0].value,
		// 	location: event.target[1].value,
		// 	gender: event.target[2].value,
		// 	website: event.target[3].value,
		// 	twitter: event.target[4].value,
		// 	facebook: event.target[5].value,
		// 	linkedin: event.target[6].value,
		// 	youtube: event.target[7].value,
		// 	instagram: event.target[8].value,
		// 	workingAt: event.target[9].value,
		// 	daysPerWeek: event.target[10].value,
		// 	role: event.target[11].value,
		// 	isMentor: event.target[12].value,
		// 	menteeList: event.target[13].value,
		// 	mainSkills: event.target[14].value,
		// 	skills: event.target[15].value,
		// 	organizations: event.target[16].value
		// }

		// dispatch input object to createPersons object and call new route url as the callback
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


		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
				<h3>Create A New Person</h3>

				<Field component={renderField} type="text" name="name" label="Name" />

				<Field component={renderField} type="text" name="location" label="Location" />

				<div>
					<label>Gender</label>
					<Field name="gender" className="form-control" component="select"  {...gender} >
						<option></option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="other">Other</option>
					</Field>
				</div>

				<Field component={optionalField} type="text" name="website" label="Website" />
				<Field component={optionalField} type="text" name="twitter" label="Twitter" />
				<Field component={optionalField} type="text" name="facebook" label="facebook" />
				<Field component={optionalField} type="text" name="linkedin" label="LinkedIn" />
				<Field component={optionalField} type="text" name="youtube" label="Youtube" />
				<Field component={optionalField} type="text" name="instagram" label="Instagram" />

				<div>
					<label>Working At</label>
					<Field name="workingAt" className="form-control" component="select"  {...workingAt} >
						<option value="default">None</option>
						{getCompanies(this.props.Companies)}
					</Field>
				</div>


				<Field component={optionalField} type="number" name="daysPerWeek" label="daysPerWeek" />
				<Field component={optionalField} type="text" name="role" label="Role" />


				<div>
					<label>Mentor</label>
					{/*  todo : name = mentor affected ?*/}
					<Field name="mentor" className="form-control" component="select"  {...isMentor} >
						<option value="true">Yes</option>
						<option value="false">No</option>
					</Field>
				</div>

				{/*todo : add functionnality to show menteeList field only if is Mentor true*/}
				<div>
					<label>Mentor At</label>
					<Field name="menteeList" className="form-control" component="select"  {...menteeList} >
						<option value="default">None</option>
						{getCompanies(this.props.Companies)}
					</Field>
				</div>

				<Field component={optionalField} type="text" name="mainSkills" label="MainSkills" />
				<Field component={optionalField} type="text" name="skills" label="Skills" />


				<div>
					<label>Organizations</label>
					<Field name="organizations" className="form-control" component="select"  {...organizations} >
						<option value="default">None</option>
						{getCompanies(this.props.Companies)}
					</Field>
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

const renderField = ({ input, label, type, meta: { touched, error, invalid } }) => {
	//Construct form-group class depending on form state
	const groupClass = touched ? (invalid ? 'form-group has-danger' : 'form-group has-success') : 'form-group';
	//Construct form-control class depending on form state
	const inputClass = touched ? (invalid ? 'form-control form-control-danger' : 'form-control form-control-success') : 'form-control';

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
PersonsNew = reduxForm({
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




function newObjectKey(state) {
	let num = Object.keys(state).length
	let id = Object.keys(state)[num - 1]
	return parseInt(id) + 1
}





function getCompanies(propsCompanies) {
	// console.log('personnew/getCompanies/propsCompanies')
	// console.log(propsCompanies)
	let companies = [];
	for (let i in Object.keys(propsCompanies)) {
		companies.push(<option value={propsCompanies[Object.keys(propsCompanies)[i]]._id}>{propsCompanies[Object.keys(propsCompanies)[i]].name}</option>)
	}
	return companies;
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