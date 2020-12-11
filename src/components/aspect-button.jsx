import React from "react";

const AspectButton = (props) => {
  const className =
    "btn mt-2 " + (props.current === props.ratio ? "btn-success" : "btn-info");
  return (
    <button
      style={{ width: "100px" }}
      className={className}
      onClick={() => {
        props.onChange(props.ratio);
      }}
    >
      {props.ratio}
    </button>
  );
};

export default AspectButton;
