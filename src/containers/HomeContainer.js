import React, { Component } from "react";
import { connect } from "react-redux";
import * as SearchActions from "../actions/SearchActions";
import * as RegisterActions from "../actions/RegisterActions";
import Home from "../pages/Home";

class HomeContainer extends Component {
  registerCompany(registerCompanyInfo) {
    return this.props
      .dispatch(RegisterActions.registerCompany(registerCompanyInfo))
      .then(() => {
        this.props.dispatch(SearchActions.JobList());
      });
  }
  render() {
    return (
      <Home
        data={this.props.data}
        infos={this.props.data}
        registerCompany={this.registerCompany.bind(this)}
      />
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.search.data
  };
}
export default connect(mapStateToProps)(HomeContainer);
