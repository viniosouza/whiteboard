import React, { Component } from "react";
import { connect } from "react-redux";
import * as CompanyActions from "../actions/CompanyDetailsActions";
import CompanyDetails from "../components/CompanyDetails";

class CompanyDetailsContainer extends Component {
  componentWillMount() {
    const { jobId } = this.props.match.params;
    this.props.dispatch(CompanyActions.companyDetails(jobId));
  }
  render() {
    return <CompanyDetails infos={this.props.companyDetails} />;
  }
}
function mapStateToProps(state) {
  return {
    companyDetails: state.company.data
  };
}
export default connect(mapStateToProps)(CompanyDetailsContainer);
