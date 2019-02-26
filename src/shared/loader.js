import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import '../shared/loader.css'
class Loader extends Component {
  render() {
    return <div className="loader"><CircularProgress color="secondary"/></div>;
  }
}
export default Loader;
