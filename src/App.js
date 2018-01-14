import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import Home from "./pages/Home";
import CompanyProfile from "./components/CompanyProfile";
import "antd/dist/antd.css";

const componseEnhancers = composeWithDevTools({});

const store = createStore(
  reducers,
  /* preloadedState, */ componseEnhancers(applyMiddleware(thunk))
);

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <Router>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/job/:jobId" component={CompanyProfile} />
        </div>
      </Router>
      // </Provider>
    );
  }
}

export default App;
