import React from "react";
const TableDesktopBody = ({ currentPlan }) => {
  return (
    <tbody>
      {currentPlan.titles.map((title, rowIndex) => (
        <tr key={rowIndex}>
          <td>{title}</td>
          {currentPlan.columns.map((col, colIndex) => (
            <td key={colIndex}>{col.values[rowIndex]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableDesktopBody;
