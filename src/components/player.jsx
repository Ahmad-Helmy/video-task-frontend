import React, { Component } from "react";
import "./player.css";

class Payer extends Component {
  state = { status: "pause" };
  ratioStyle = () => {
    const ratio = this.props.ratio.split("/");
    return ((ratio[1] * 1.0) / ratio[0]) * 100 + "%";
  };
  titleClasses = () => {
    return "title " + (this.state.status === "play" && "animation");
  };
  titleColor = () => {
    return this.props.titleColor.hex;
  };
  render() {
    return (
      <React.Fragment>
        <div className="player">
          <div
            className={this.titleClasses()}
            style={{ opacity: this.state.status === "pause" && 1 }}
          >
            <h5 style={{ color: this.props.titleColor }}>
              {this.props.titleText}
            </h5>
          </div>
          <video
            onPause={() => {
              this.setState({ status: "pause" });
            }}
            onPlay={() => {
              this.setState({ status: "play" });
            }}
            src={this.props.video}
            height={this.ratioStyle()}
            width="100%"
            controls
          ></video>
        </div>
      </React.Fragment>
    );
  }
}

export default Payer;
