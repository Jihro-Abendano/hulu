import React from "react";
const TableDesktopBody = ({ currentPlan }) => {
  return (
    <tbody>
      {currentPlan.titles.map((title, i) => (
        <>
          <tr key={i}>
            <td>{title}</td>
            <td>{currentPlan.columns[0].values[i]}</td>
            <td>{currentPlan.columns[1].values[i]}</td>
          </tr>
        </>
      ))}
    </tbody>
  );
};

export default TableDesktopBody;
