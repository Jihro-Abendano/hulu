import React from "react";
import "../styles/Header.scss"; // adjust path as necessary

const Header = () => {
  return (
    <nav>
      <div>
        <img src="/assets/logo.png" alt="Logo" style={{ height: "40px" }} />
      </div>
      <div>LOG IN</div>
    </nav>
  );
};

export default Header;
