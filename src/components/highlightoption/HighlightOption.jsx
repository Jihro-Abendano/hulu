import React from "react";

const HighlightOption = ({ label, onClick, className }) => (
  <button className={className} onClick={onClick}>
    {label}
  </button>
);

export default HighlightOption;
