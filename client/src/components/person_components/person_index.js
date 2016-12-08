import React, { Component } from 'react';
import { fetchPersons } from '../../actions/person_actions';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class PersonsIndex extends Component {
    // componentWillMount() {
    //     this.props.fetchPersons();
    // }

    renderPersons() {

        return Object.values(this.props.Persons).map( (Person) => {
            return (
                <li className='list-group-item' key={Person.id} >
                    <Link to={"Person/"+ Person.id} >
                        <h4 className="indexPerson" >{Person.name}</h4>
                        <p className="indexPerson"  >{Person.location}</p>
                    </Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="person/new" className="btn btn-primary">
                        Add a Person
                    </Link>
                </div>
                <h3>Persons</h3>
                <ul className="list-group">
                    { this.renderPersons() }
                </ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    console.log('---------------------')
    console.log('persons index, mapstatetoprops, current State = ')
    console.log(state)
    return { Persons: state.Persons };
}


import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {
    console.log('persons index, mapdispatchtoprops, fetch persons = ')
    console.log(fetchPersons)
    return bindActionCreators({ fetchPersons }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonsIndex)

// _______________________ above == below _________________________

// export default connect(null, {fetchPersons: fetchPersons })(PersonsIndex)

// ______(furthermore)____ above == below _________________________


// export default connect(mapStateToProps, { fetchPersons })(PersonsIndex)