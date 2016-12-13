import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { updateCompany } from '../../actions/company_actions';
import { Link } from 'react-router';

class editCompany extends Component {

    static contextTypes = {
        router: PropTypes.object
    };


    handleSubmit(event) {
        event.preventDefault()
        var formObj = {name: event.target[0].value, location: event.target[1].value}
        
        this.props.updateCompany(formObj, this.props.Company.id, this.props.Companies, () => { 
            this.context.router.push(`/company/${this.props.Company.id}`) 
        }) 
    }


    render() {
        console.log('edit company props')
        console.log(this.props)
        const { Company } = this.props;
        // const { handleSubmit } = this.props;

        const { fields: { name, location }, handleSubmit } = this.props;

        if (!Company) {
            return <div>Loading...</div>
        }
        
        return (
            <div>
                <div> 
                    <Link to="/company">Back To Startups</Link>
                </div>

                <form onSubmit={this.handleSubmit.bind(this)} >
                    <h3>Edit Startup</h3>

                    <div>
                        <label>Name</label>
                        <input type="text" className="form-control" {...name} defaultValue={Company.name} />
                        <div className="text-help" >
                        </div>
                    </div>

                    <div  >
                        <label>Location</label>
                        <input type="text" className="form-control" {...location}  defaultValue={Company.location} />
                        <div className="text-help" >
                        </div>
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to={`/company/${Company.id}`} className="btn btn-danger">Cancel</Link>
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
    return { Company: state.Companies[ownProps.params.id], Companies: state.Companies}; 
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


editCompany = reduxForm({
  form: 'ComapniesEditForm',
  fields: ['name', 'location'],
  validate
})(editCompany)

export default connect ( mapStateToProps, { updateCompany })(editCompany);



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