import React from "react";

const TableTabletBody = ({ currentPlan }) => {
  return (
    <tbody>
      {currentPlan.titles.map((title, i) => (
        <>
          <tr key={i}>
            <td colSpan={2} className="table-tablet-title">
              {title}
            </td>
          </tr>
          <tr>
            <td className="table-tablet-left">
              {currentPlan.columns[0].values[i]}
            </td>
            <td className="table-tablet-right">
              {currentPlan.columns[1].values[i]}
            </td>
          </tr>
        </>
      ))}
    </tbody>
  );
};

export default TableTabletBody;
