import React, { Component } from 'react';
// import { fetchCompanies } from '../../actions/company_actions';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CompaniesIndex extends Component{
    
    renderCompanies(){
        return Object.values(this.props.Companies).map((Company) => {
            return(
                <li className='list-group-item' key={Company._id} >
                    <Link to={"company/"+ Company._id} >
                        <h4 className="indexCompany" >{Company.name}</h4>
                        <p className="indexCompany"  >{Company.location}</p>
                    </Link>
                </li>
            );
        });
    };

    render(){
        return(
            <div>
                <div className="text-xs-right">
                    <Link to="company/new" className="btn btn-primary">
                        Add a Startup
                    </Link>
                </div>
                <h3>Companies</h3>
                <ul className="list-group">
                    { this.renderCompanies() }
                </ul>
            </div>
        );
    };

}



function mapStateToProps(state) {
    // console.log('---------------------')
    // console.log('companies index, mapstatetoprops, current State = ')
    // console.log(state)
    return { Companies: state.Companies };
}

export default connect(mapStateToProps)(CompaniesIndex)