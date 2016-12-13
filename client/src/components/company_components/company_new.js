import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createCompany } from '../../actions/company_actions';
import { Link } from 'react-router';

class CompaniesNew extends Component {
    
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
            mentor: event.target[2].value,
            description: event.target[3].value,
            status: event.target[4].value, 
            website: event.target[5].value,
            twitter: event.target[6].value,
            facebook: event.target[7].value,
            linkedin: event.target[8].value,
            youtube: event.target[9].value,
            instagram: event.target[10].value,
            spokePerson: event.target[11].value,
            team: event.target[12].value,
            sector: event.target[13].value,
            skills: event.target[14].value,
            onSite: event.target[15].value,
            news: event.target[16].value,
            pitch: event.target[17].value,
            // lastUpdate: event.target[18].value,
            partners: event.target[18].value,
            fundRaised: event.target[19].value
        }

        // dispatch input object to createPersons object and call new route url as the callback
        this.props.dispatch(createCompany(formObj, () => this.context.router.push('/company') ));
    }

    render() {

        const { fields: {
            name, 
            location,
            mentor,
            description,
            status, 
            website,
            twitter,
            facebook,
            linkedin,
            youtube,
            instagram,
            spokePerson,
            team,
            sector,
            skills,
            onSite,
            news,
            pitch,
            lastUpdate,
            partners,
            fundRaised
        }, handleSubmit } = this.props;
        
        return (
            <form onSubmit={this.handleSubmit.bind(this)} >
                <h3>Create A New StartUp</h3>

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
                    <label>Mentor</label>
                    <input type="text" className="form-control" {...mentor} /> 
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>Description</label>
                    <input type="text" className="form-control" {...description} /> 
                    <div className="text-help" >
                    </div>
                </div>

                <div>
                    <label>Status</label>
                    <select className="form-control" {...status} >
                        <option value="true">Active</option>
                        <option value="false">Not active</option>
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
                    <label>Spoke person</label>
                    <input type="text" className="form-control" {...spokePerson} /> 
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>Team</label>
                    <input type="number" className="form-control" {...team} /> 
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>Sector</label>
                    <input type="text" className="form-control" {...sector} /> 
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
                    <label>On site</label>
                    <input type="radio" name="onSite" value="true" className="form-control" {...onSite} /> Yes
                    <input type="radio" name="onSite" value="false" className="form-control" {...onSite} /> No
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>News</label>
                    <input type="text" className="form-control" {...news} /> 
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>Pitch</label>
                    <input type="text" className="form-control" {...pitch} /> 
                    <div className="text-help" >
                    </div>
                </div>

                //for lastUpdate add code at backend to get form sent date

                <div> 
                    <label>Partners</label>
                    <input type="text" className="form-control" {...partners} /> 
                    <div className="text-help" >
                    </div>
                </div>

                <div> 
                    <label>Fund raised</label>
                    <input type="number" className="form-control" {...fundRaised} /> 
                    <div className="text-help" >
                    </div>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/company" className="btn btn-danger">Cancel</Link>
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
    form: 'CompaniesNewForm',
    fields: ['name', 'location'],
    validate
})(CompaniesNew);
