import React from "react";

const TableTabletHeader = ({ currentPlan }) => {
  return (
    <thead>
      {currentPlan.columns.map((col, i) => (
        <th key={i}>
          <div className="table-tablet-header">
            <img src={col.image} alt={col.label} />
            <p className="table-tablet-header-label">{col.label}</p>
            <button className="table-tablet-header-price">{col.price}</button>
            <span className="table-tablet-header-deal">{col.deal}</span>
          </div>
        </th>
      ))}
    </thead>
  );
};

export default TableTabletHeader;
