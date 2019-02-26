import React, { Component } from "react";
import ReactPlayer from "react-player";
import Header from "../shared/header";
import Table from "../shared/table";

import "./flight.css";

class Flight extends Component {
  render() {
    let { flight } = this.props.location.state;
    return (
      <div>
        <Header />
        <div className="heading">
          {flight.mission_name}

          <div className="videoContainer">
            <ReactPlayer
              className="videoPlayer"
              controls={true}
              url={flight.links.video_link}
            />
          </div>
        </div>
        <div><Table flight={flight}></Table></div>
      </div>
    );
  }
}

export default Flight;
