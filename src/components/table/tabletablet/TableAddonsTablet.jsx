import React from "react";
import "./TableTablet.scss";
const TableAddonsTablet = ({ currentPlan }) => {
  return (
    <table className="addons-tablet">
      <tbody>
        <tr>
          <td colSpan="3" className="addons-tablet-header">
            Add-ons available at an additional cost.
            <br />
            Add them up after you sign up for Hulu.
          </td>
        </tr>
        {currentPlan.addons.map((addon, index) => (
          <>
            <tr key={index}>
              <td colSpan={2} className="addons-tablet-name">
                {addon.name}
              </td>
            </tr>
            <tr>
              <td className="addons-tablet-basic">{addon.basic}</td>
              <td className="addons-tablet-premium">{addon.premium}</td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default TableAddonsTablet;
