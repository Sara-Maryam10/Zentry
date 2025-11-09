import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-left">
        <img
          src="./src/images/zentry logo.png"
          alt="Zentry Logo"
          className="logo-image"
          aria-hidden="true"
        />
        <span className="logo-text">Zentry</span>
      </div>
      <div className="navbar-right">
        <NavLink to="/" className="nav-button" activeclassname="active" end>
          Home
        </NavLink>
        <NavLink to="/AssetReg" className="nav-button" activeclassname="active">
          AssetReg
        </NavLink>
        <NavLink to="/MyAssets" className="nav-button" activeclassname="active">
          MyAssets
        </NavLink>
        <NavLink to="/Marketplace" className="nav-button" activeclassname="active">
          Marketplace
        </NavLink>
        <NavLink to="/LogOrSign" className="nav-button" activeclassname="active">
          Login/SignUp
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
