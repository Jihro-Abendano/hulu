import React from "react";
import "./TableTablet.scss";
import TableTabletHeader from "./TableTabletHeader";
import TableTabletBody from "./TableTabletBody";

const TableTablet = ({ currentPlan }) => {
  return (
    <table className="table-tablet">
      <TableTabletHeader currentPlan={currentPlan} />
      <TableTabletBody currentPlan={currentPlan} />
    </table>
  );
};

export default TableTablet;
