import React from "react";

const VideoInput = (props) => {
  return <input type="file" accept=".mp4" onChange={props.onChange} />;
};

export default VideoInput;
