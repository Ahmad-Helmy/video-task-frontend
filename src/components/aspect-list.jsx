import React from "react";
import AspectButton from "./aspect-button";

const AspectList = (props) => {
  const renderAspectButton = (ratio) => {
    return (
      <AspectButton
        current={props.current}
        onChange={props.onChange}
        ratio={ratio}
      />
    );
  };
  return (
    <React.Fragment>
      <div className="w-100 d-flex flex-column align-items-center">
        <h5>Aspect Ratio:</h5>
        {renderAspectButton("16/9")}
        {renderAspectButton("21/9")}
        {renderAspectButton("4/3")}
        {renderAspectButton("1/1")}
      </div>
    </React.Fragment>
  );
};

export default AspectList;
