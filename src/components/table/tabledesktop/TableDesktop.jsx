import React from "react";
import "./TableDesktop.scss";
import TableDesktopHeader from "./TableDesktopHeader";
import TableDesktopBody from "./TableDesktopBody";

const Table = ({ currentPlan }) => {
  return (
    <table className="table-desktop">
      <TableDesktopHeader currentPlan={currentPlan} />
      <TableDesktopBody currentPlan={currentPlan} />
    </table>
  );
};

export default Table;
