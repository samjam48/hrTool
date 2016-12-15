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

		// var formObj = { name: event.target[0].value, location: event.target[1].value }
		var formObj = {
			name: event.target[0].value,
			location: event.target[1].value,
			gender: event.target[2].value,
			website: event.target[3].value,
			twitter: event.target[4].value,
			facebook: event.target[5].value,
			linkedin: event.target[6].value,
			youtube: event.target[7].value,
			instagram: event.target[8].value,
			workingAt: event.target[9].value,
			daysPerWeek: event.target[10].value,
			role: event.target[11].value,
			isMentor: event.target[12].value,
			menteeList: event.target[13].value,
			mainSkills: event.target[14].value,
			skills: event.target[15].value,
			organizations: event.target[16].value
		}

		console.log('formObj')
		console.log(formObj)
		this.props.updatePersonAsync(
			formObj,
			this.props.Person._id,
			this.props.Persons,
			(id) => { this.context.router.push(`/person/${id}`) })
	}


	render() {
		// console.log('edit person props')
		// console.log(this.props)
		const { Person } = this.props;
		// const { handleSubmit } = this.props;
		console.log('personedit/render:Person');
		console.log(Person)

		const { fields: { name, location, gender, website, twitter, facebook, linkedin, youtube, instagram, workingAt, daysPerWeek, role, isMentor, menteeList, mainSkills, skills, organizations }, handleSubmit } = this.props;

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

					<div>
						<label>Name</label>
						<input type="text" className="form-control" {...name} defaultValue={Person.name} />
						<div className="text-help" >
						</div>
					</div>

					<div>
						<label>Location</label>
						<input type="text" className="form-control" {...location} defaultValue={Person.location} />
						<div className="text-help" >
						</div>
					</div>


					<div>
						<label>Gender</label>
						<select className="form-control" {...gender}  defaultValue={Person.gender} >
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
						<div className="text-help" >
						</div>
					</div>

					<div>
						<label>Website</label>
						<input type="text" className="form-control" {...website} defaultValue={Person.website} />
						<div className="text-help" >
						</div>
					</div>

					<div>
						<label>Twitter</label>
						<input type="text" className="form-control" {...twitter} defaultValue={Person.twitter} />
						<div className="text-help" >
						</div>
					</div>

					<div>
						<label>Facebook</label>
						<input type="text" className="form-control" {...facebook} defaultValue={Person.facebook} />
						<div className="text-help" >
						</div>
					</div>

					<div>
						<label>Linkedin</label>
						<input type="text" className="form-control" {...linkedin} defaultValue={Person.linkedin} />
						<div className="text-help" >
						</div>
					</div>

					<div>
						<label>Youtube</label>
						<input type="text" className="form-control" {...youtube} defaultValue={Person.youtube} />
						<div className="text-help" >
						</div>
					</div>

					<div>
						<label>Instagram</label>
						<input type="text" className="form-control" {...instagram} defaultValue={Person.instagram} />
						<div className="text-help" >
						</div>
					</div>

					<div>
						<label>Working at</label>
						<select className="form-control" {...workingAt} defaultValue={Person.workingAt} >
							<option value="default">None</option>
							{getCompanies(this.props.Companies)}
						</select>
						<div className="text-help" >
						</div>
					</div>

					<div>
						<label>Days per week</label>
						<input type="number" className="form-control" {...daysPerWeek} defaultValue={Person.daysPerWeek} />
						<div className="text-help" >
						</div>
					</div>

					<div>
						<label>Role</label>
						<input type="text" className="form-control" {...role} defaultValue={Person.role} />
						<div className="text-help" >
						</div>
					</div>


					<div>
						<label>Mentor</label>
						<select className="form-control" {...isMentor} defaultValue={Person.isMentor} >
							<option value="true">Yes</option>
							<option value="false">No</option>
						</select>
						<div className="text-help" >
						</div>
					</div>

					{/*niceToHave : show menteeList field only if is Mentor true*/}
					<div>
						<label>Mentor At</label>
						<select className="form-control" {...menteeList} defaultValue={Person.menteeList} >
							<option value="default">None</option>
							{getCompanies(this.props.Companies)}
						</select>
						<div className="text-help" >
						</div>
					</div>

					<div>
						<label>Main Skills</label>
						<input type="text" className="form-control" {...mainSkills} defaultValue={Person.mainSkills} />
						<div className="text-help" >
						</div>
					</div>

					<div>
						<label>Skills</label>
						<input type="text" className="form-control" {...skills} defaultValue={Person.skills} />
						<div className="text-help" >
						</div>
					</div>

					<div>
						<label>Organizations</label>
						<select className="form-control" {...organizations} defaultValue={Person.organizations} >
							<option value="default">None</option>
							{getCompanies(this.props.Companies)}
						</select>
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
	//     // console.log(state)
	// }
}

function mapStateToProps(state) {
	return {
		Persons: state.Persons,
		Companies: state.Companies
	};
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
})(editPerson)

export default connect(mapStateToProps, { updatePersonAsync })(editPerson);


function getCompanies(propsCompanies) {
	let companies = [];
	for (let i in Object.keys(propsCompanies)) {
		companies.push(<option value={propsCompanies[Object.keys(propsCompanies)[i]]._id}>{propsCompanies[Object.keys(propsCompanies)[i]].name}</option>)
	}
	return companies;
}

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