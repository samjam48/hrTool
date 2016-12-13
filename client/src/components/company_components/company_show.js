import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { deleteCompany } from '../../actions/company_actions';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

class CompanyShow extends Component {
  static contextTypes = {
      router: PropTypes.object
  };

  // componentWillMount() {
  //   this.props.fetchPerson(this.props.params.id);
  // }


  onDeleteClick() {
    console.log('delete clicked. state = ')
    console.log(this.props.state)
    this.props.deleteCompany(this.props.params.id, this.props.Companies, () => { 
        this.context.router.push('/company') 
    });
  }
          // this.props.createPerson(props, () => this.context.router.push('/') );
  onEditClick() {
    this.context.router.push('/company/edit/' + this.props.params.id);
  }

  render() {
    console.log(this.props)
    
    const { Company } = this.props;//[this.props.params.id];
    console.log(Company)

    if (!this.props.Company) {
      return <div>Loading...</div>
    }

    return (
      <div> 
        <Link to="/company">Back To Startups</Link>
        <h3>{Company.name}</h3>
        <h6>Location: {Company.location}</h6>
        <Link to="/company">Back To Startups</Link>
        <button
          className="btn btn-danger pull-xs-right"
          style={{'left': '80%'}}
          onClick={this.onDeleteClick.bind(this)}>
          Delete Company
        </button>
        <button
          className="btn btn-warning pull-xs-right"
          style={{'left': '30%'}}
          onClick={this.onEditClick.bind(this)}>
          Edit Company
        </button>
      </div>
      )
  }
}

function mapStateToProps(state, ownProps) {
    return { Company: state.Companies[ownProps.params.id], Companies: state.Companies }; 
}


export default connect(mapStateToProps, { deleteCompany })(CompanyShow);