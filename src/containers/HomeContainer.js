import React, { Component } from "react";
import { connect } from "react-redux";
import * as SearchActions from "../actions/SearchActions";
import * as RegisterActions from "../actions/RegisterActions";
import Home from "../pages/Home";

class HomeContainer extends Component {
  updateSearch(pesquisa) {
    this.props.dispatch(SearchActions.searchJob(pesquisa));
  }

  registerCompany(registerCompanyInfo) {
    return this.props.dispatch(
      RegisterActions.registerCompany(registerCompanyInfo)
    );
  }
  render() {
    return (
      <Home
        infos={this.props.data}
        updateSearch={this.updateSearch.bind(this)}
        total={this.props.totalCount}
        registerCompany={this.registerCompany.bind(this)}
      />
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    data: state.search.data,
    totalCount: state.search.data
  };
}
export default connect(mapStateToProps)(HomeContainer);
