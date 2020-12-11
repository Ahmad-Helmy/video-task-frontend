import React from "react";
import ColorPicker, { useColorObject } from "react-color-palette";

const Color = (props) => {
  const [color, setColor] = useColorObject("hex", "#121212");

  return (
    <React.Fragment>
      <label> Title color:</label>
      <ColorPicker
        width="200"
        color={color}
        onChange={(color) => {
          props.changeColor(color);
          setColor(color);
        }}
      />
    </React.Fragment>
  );
};

export default Color;
