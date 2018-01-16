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
        data={this.props.data}
        infos={this.props.data}
        updateSearch={this.updateSearch.bind(this)}
        registerCompany={this.registerCompany.bind(this)}
        onChange={this.updateSearch.bind(this)}
      />
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    data: state.search.data
  };
}
export default connect(mapStateToProps)(HomeContainer);
