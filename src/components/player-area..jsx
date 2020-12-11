import React, { Component } from "react";
import Player from "./player";
import Color from "./color";
import TitleInput from "./title-input";
import AspectList from "./aspect-list";
import VideoInput from "./video-input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class PlayerArea extends Component {
  state = {
    videoFilePath: "",
    aspectRatio: "16/9",
    titleColor: " #000000",
    titleText: "",
  };

  handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size < 500000000) {
        this.setState(
          {
            videoFilePath: URL.createObjectURL(file),
          },
          () => {
            toast.success("video uploaded");
          }
        );
      } else {
        toast.error("video size is above 500MB");
      }
    }
  };

  changeAspectRatio = (ratio) => {
    this.setState({ aspectRatio: ratio });
  };
  changeTitleColor = (color) => {
    this.setState({ titleColor: color.hex });
  };
  changeTitleText = (title) => {
    this.setState({ titleText: title });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6 text-center">
              <VideoInput onChange={this.handleVideoUpload} />
            </div>
            <div className="col-3"></div>
          </div>
          <div className="row player-area mt-3">
            <div className="col-3">
              <TitleInput changeTitle={this.changeTitleText} />
              <br />
              <Color changeColor={this.changeTitleColor} />
            </div>
            <div className="col-6 d-flex flex-column align-items-center">
              <Player
                ratio={this.state.aspectRatio}
                video={this.state.videoFilePath}
                titleColor={this.state.titleColor}
                titleText={this.state.titleText}
              />
            </div>
            <div className="col-3">
              <AspectList
                current={this.state.aspectRatio}
                onChange={this.changeAspectRatio}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PlayerArea;
