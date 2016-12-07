import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { createPerson, fetchPerson, deletePerson } from '../actions/index';
import { Link } from 'react-router';

// class editPerson extends Component {
//     // constructor(props){
//     //     super(props);


//     //     this.props.fetchPerson(this.props.params.id);
//     //     console.log(this.props.title)
//     //     this.state = { title: this.props.title, categories: '', content: ''}
//     // }

//     static contextTypes = {
//         router: PropTypes.object
//     };

//     componentWillMount() {
//         this.props.fetchPerson(this.props.params.id);
//         // this.setState({ title: this.props.title })
//     }

//     onSubmit(props) {
//         this.props.createPerson(props, 
//             (this.props.deletePerson(this.props.params.id,
//                 () => { this.context.router.push('/') }) ) );
//     }


//     render() {

//         const { Person } = this.props;
//         const { fields: { title, categories, content }, handleSubmit } = this.props;

//         if (!Person) {
//             return <div>Loading...</div>
//         }
        
//         return (
//             <div>
//                 <div> 
//                     <Link to="/">Back To Index</Link>
//                 </div>

//                 <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
//                     <h3>Edit Person</h3>

//                     <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`} >
//                         <label>Name</label>
//                         <input type="text" className="form-control" {...name} />
//                         <div className="text-help" >
//                             {name.touched ? name.error : ''}
//                         </div>
//                     </div>

//                     <div className={`form-group ${location.touched && location.invalid ? 'has-danger' : ''}`} >
//                         <label>Location</label>
//                         <input type="text" className="form-control" {...location} />
//                         <div className="text-help" >
//                             {location.touched ? location.error : ''}
//                         </div>
//                     </div>


//                     <button type="submit" className="btn btn-primary">Submit</button>
//                     <Link to={`/Persons/${Person.id}`} className="btn btn-danger">Cancel</Link>
//                 </form>

//             </div>
//         )
//     }

//     // onInputChange(title) {
//     //     this.setState({title});
//     //     console.log(state)
//     // }
// }

// function mapStateToProps(state) {
//     return { Person: state.Persons.Person }; 
// }

// function validate(values) {
//   const errors = {};

//   if (!values.name) {
//     errors.name = 'touch box to confirm value is correct';
//   }
//   if (!values.location) {
//     errors.location = 'touch box to confirm value is correct';
//   }


//   return errors;
// }


// export default reduxForm({
//   form: 'PersonsNewForm',
//   fields: ['title', 'categories', 'content'],
//   validate
// }, mapStateToProps, { fetchPerson, createPerson, deletePerson })(editPerson);



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