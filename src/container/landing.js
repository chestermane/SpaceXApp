import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../shared/header";
import Loader from "../shared/loader";

import * as action from "../store/actions/flight-actions";
import Flights from "../componets/flights";

import "../componets/flights.css";

class Landing extends Component {
  componentWillMount() {
    this.props.loadFlightData();
  }
  render() {
    let flights;
    if (this.props.loading !== true) {
      if (this.props.flightData) {
        flights = this.props.flightData.map(flight => {
          return <Flights flight={flight} />;
        });
      }
    } else return <Loader />;
    return (
      <div>
        <Header />
        {flights}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  flightData: state.flightData
});

const mapDispatchToProps = dispatch => ({
  loadFlightData: () => dispatch(action.loadFlightData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
