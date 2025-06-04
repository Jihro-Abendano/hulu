import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="Logo" />

        <div className="nav-actions">
          <div className="nav-actions-login">LOG IN</div>

          <div className="nav-actions-hamburger" onClick={toggleMenu}>
            ☰
          </div>

          {menuOpen && (
            <div className="nav-actions-menu">
              <ul>
                <li>Get the Hulu App</li>
                <li>Log In</li>
                <li>Sign Up Now</li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
