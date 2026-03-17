import React from "react";

const TableDesktopHeader = ({ currentPlan }) => {
  return (
    <thead>
      <tr>
        <th></th>
        {currentPlan.columns.map((col, i) => (
          <th key={i}>
            <div className="table-desktop-header">
              <img src={col.image} alt={col.label} />
              <p className="table-desktop-header-label">{col.label}</p>
              <button className="table-desktop-header-price">
                {col.price}
              </button>
              <span className="table-desktop-header-deal">{col.deal}</span>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableDesktopHeader;
