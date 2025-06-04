import React from "react";

const TableTabletBody = ({ currentPlan }) => {
  return (
    <tbody>
      {currentPlan.titles.map((title, i) => (
        <tr key={i}>
          <td>
            <span className="value-left">
              {currentPlan.columns[0].values[i]}
            </span>
          </td>
          <td>
            <span className="title">{title}</span>
          </td>
          <td>
            <span className="value-right">
              {currentPlan.columns[1].values[i]}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableTabletBody;
