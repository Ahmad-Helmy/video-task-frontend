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
          <div className="row player-area mt-3">
            <div className="col-lg-6 order-lg-2 col-md-6 order-md-2 col-12 d-flex flex-column align-items-center">
              <VideoInput onChange={this.handleVideoUpload} />
              <div className="mt-2">
                <Player
                  ratio={this.state.aspectRatio}
                  video={this.state.videoFilePath}
                  titleColor={this.state.titleColor}
                  titleText={this.state.titleText}
                />
              </div>
            </div>
            <div className="col-lg-3 order-lg-1 col-md-3 order-md-1 col-6">
              <TitleInput changeTitle={this.changeTitleText} />
              <br />
              <Color changeColor={this.changeTitleColor} />
            </div>

            <div className="col-lg-3 order-lg-3 col-md-3 order-md-3 col-6">
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
