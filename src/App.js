import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import HomeContainer from "./containers/HomeContainer";
import CompanyDetailsContainer from "./containers/CompanyDetailsContainer";
import "antd/dist/antd.css";
const componseEnhancers = composeWithDevTools({});

const store = createStore(
  reducers,
  /* preloadedState, */ componseEnhancers(applyMiddleware(thunk))
);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path="/" exact component={HomeContainer} />
            <Route
              path="/job/:jobId"
              exact
              component={CompanyDetailsContainer}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
