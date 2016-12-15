import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
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
    handleSubmit(event) {

        event.preventDefault() // stop default form submit stuff happening without our control


        // debugger
        // create object of input values (would be better to use redux form but causing issues...)
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

        // dispatch input object to createPersons object and call new route url as the callback
        this.props.dispatch( createPersonAsync( formObj, () => this.context.router.push('/person') ));
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

                <div>
                    <label>Gender</label>
                    <select className="form-control" {...gender} >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>Website</label>
                    <input type="text" className="form-control" {...website} /> 
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>Twitter</label>
                    <input type="text" className="form-control" {...twitter} /> 
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>Facebook</label>
                    <input type="text" className="form-control" {...facebook} /> 
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>Linkedin</label>
                    <input type="text" className="form-control" {...linkedin} /> 
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>Youtube</label>
                    <input type="text" className="form-control" {...youtube} /> 
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>Instagram</label>
                    <input type="text" className="form-control" {...instagram} /> 
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>Working at</label>
                    <input type="text" className="form-control" {...workingAt} /> 
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>Days per week</label>
                    <input type="number" className="form-control" {...daysPerWeek} /> 
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>Role</label>
                    <input type="text" className="form-control" {...role} /> 
                    <div className="text-help" >
                    </div>
                </div>


                <div>
                    <label>Mentor</label>
                    <select className="form-control" {...isMentor} >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <div className="text-help" >
                    </div>
                </div>

                {/*todo : add functionnality to show menteeList field only if is Mentor true*/}
                <div>
                    <label>Mentee List</label>
                    <select className="form-control" {...menteeList} >
                        {mentors(this.props.Persons)}
                    
                    </select>
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>Main Skills</label>
                    <input type="text" className="form-control" {...mainSkills} /> 
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>Skills</label>
                    <input type="text" className="form-control" {...skills} /> 
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>Organization</label>
                    <input type="text" className="form-control" {...organizations} /> 
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