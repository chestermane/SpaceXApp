import React, { Component } from "react";
import Landing from "./container/landing";
import Flight from "./pages/flight";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/flight-info" component={Flight} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
