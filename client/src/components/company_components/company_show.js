import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { deleteCompanyAsync } from '../../actions/company_actions';
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
		this.props.deleteCompanyAsync(this.props.params.id, () => {
			this.context.router.push('/company')
		});
	}
	// this.props.createPerson(props, () => this.context.router.push('/') );
	onEditClick() {
		this.context.router.push('/company/edit/' + this.props.params.id);
	}

	render() {
		const { Company } = this.props;

		if (!this.props.Company) {
			return <div>Loading...</div>
		}

		return (
			<div>
				<Link to="/company">Back To Startups</Link>
				<h3>{Company.name}</h3>
				<h6>Location: {Company.location}</h6>

				<div>
					{/*All fields shown for now with raw data*/}
					<h4>Details</h4>
					<p>Mentor : {Company.mentor}</p>
					<p>Description : {Company.description}</p>
					<p>Status : {Company.status}</p>
					<p>Website : {Company.website}</p>
					<p>Socialmedia</p>
					<ul>
						<li>Twitter : {Company.socialmedia.twitter}</li>
						<li>Facebook : {Company.socialmedia.facebook}</li>
						<li>Linkedin : {Company.socialmedia.linkedin}</li>
						<li>Youtube : {Company.socialmedia.youtube}</li>
						<li>Instagram : {Company.socialmedia.instagram}</li>
					</ul>
					<p>Spoke person : {Company.spokePerson}</p>
					<p>Team : {Company.team}</p>  {/*to remove ?*/}
					<p>Sector : {Company.sector}</p>
					<p>Skills : {Company.skills[0]}</p> {/*have to itirate through skills*/}
					<p>On site : {Company.onSite ? 'Yes' : 'No'}</p>
					<p>News : {Company.news}</p>
					<p>Pitch : {Company.pitch}</p>
					<p>Last update : {Company.lastUpdate}</p>
					<p>Partners : {Company.partners}</p>
					<p>Fund raised : {Company.fundRaised}</p>
				</div>

				<Link to="/company">Back To Startups</Link>
				<button
					className="btn btn-danger pull-xs-right"
					style={{ 'left': '80%' }}
					onClick={this.onDeleteClick.bind(this)}>
					Delete Startup
        </button>
				<button
					className="btn btn-warning pull-xs-right"
					style={{ 'left': '30%' }}
					onClick={this.onEditClick.bind(this)}>
					Edit Startup
        </button>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		Company: state.Companies[ownProps.params.id],
		Companies: state.Companies
	};
}


export default connect(mapStateToProps, { deleteCompanyAsync })(CompanyShow);