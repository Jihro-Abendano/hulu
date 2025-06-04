import React from "react";
import "./Select.scss";

const Select = ({ selectedPlan, handleChange }) => {
  return (
    <div className={"plans-dropdown"}>
      <div className="plans-dropdown-select">
        <select id="plan-select" onChange={handleChange} value={selectedPlan}>
          <option value="dh">Disney+, Hulu Bundle</option>
          <option value="dhe">Disney+, Hulu, ESPN+ Bundle</option>
          <option value="dhm">Disney+, Hulu, Max Bundle</option>
          <option value="hltv">Hulu + Live TV</option>
        </select>
      </div>
    </div>
  );
};

export default Select;
