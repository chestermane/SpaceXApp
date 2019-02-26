import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Fragment } from "react";

import "./flights.css";

class Flights extends Component {
  render() {
    let { flight } = this.props;
    if (flight.links.mission_patch_small !== null) {
      let card = (
        <Link
          to={{
            pathname: "/flight-info",
            state: { flight: this.props.flight }
          }}
        >
          <div className="tile">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={flight.links.mission_patch_small} />
              <Card.Body>
                <Card.Title>{flight.mission_name}</Card.Title>
                <Card.Text>{flight.details}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </Link>
      );
      return card;
    }

    return <Fragment>{this.card}</Fragment>;
  }
}

export default Flights;
