import React from "react";
import "./Buttons.scss";

const Buttons = ({ text, variant }) => {
  return (
    <button className={`button ${variant ? `button-${variant}` : ""}`}>
      {text}
    </button>
  );
};

export default Buttons;
