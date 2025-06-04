import React from "react";
import "./TableDesktop.scss";

const TableAddonsDesktop = ({ currentPlan }) => {
  return (
    <table className="addons-desktop">
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
            <td>{addon.name}</td>
            <td>{addon.basic}</td>
            <td>{addon.premium}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableAddonsDesktop;
