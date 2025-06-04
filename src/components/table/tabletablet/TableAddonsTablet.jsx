import React from "react";
import "./TableTablet.scss";
const TableAddonsTablet = ({ currentPlan }) => {
  return (
    <table className="addons-tablet">
      <tbody>
        <tr>
          <td colSpan="3">
            Add-ons available at an additional cost.
            <br />
            Add them up after you sign up for Hulu.
          </td>
        </tr>
        {currentPlan.addons.map((addon, index) => (
          <tr key={index}>
            <td>{addon.basic}</td>
            <td>{addon.name}</td>
            <td>{addon.premium}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableAddonsTablet;
