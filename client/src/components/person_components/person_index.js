import React, { Component } from 'react';
import { fetchPersonsAsync } from '../../actions/person_actions';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PersonsIndex extends Component {
    constructor(props) {
        super(props);
        console.log('constructor log')
        console.log(this.props)
        console.log(this.state)
        this.props.dispatch( fetchPersonsAsync() )
        // this.state = { Persons: this.props.Persons }
    }

    // shouldComponentUpdate(nextState, nextProps) {
    //     console.log("shouldComponentUpdate")
    //     console.log(nextState)
    //     console.log(nextProps)
    //     return this.props != nextProps
    // }

    componentWillUpdate(){

        // this.props.dispatch( fetchPersons() )
    }

    componentWillReceiveProps(nextProps){    // update state with new data

        // this.setState({ Persons: nextProps.Persons })
    }

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




function mapDispatchToProps(dispatch) {
    console.log('persons index, mapdispatchtoprops, fetch persons = ')
    console.log(fetchPersonsAsync)
    return bindActionCreators({ fetchPersonsAsync, dispatch }, dispatch)
}

// 

export default connect(mapStateToProps, mapDispatchToProps)(PersonsIndex)

// _______________________ above == below _________________________

// export default connect(null, {fetchPersons: fetchPersons })(PersonsIndex)

// ______(furthermore)____ above == below _________________________


// export default connect(mapStateToProps, { fetchPersons })(PersonsIndex)