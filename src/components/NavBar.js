import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const activeStyles = {
    borderBottom: "1px solid #000066",
    color: "#000066",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div className="navbar">
      <div className="header__logo-box">
        <NavLink to="/" exact>
          <img
            src="../images/bemo-logo2.png"
            alt="Logo"
            className="header__logo"
          />
        </NavLink>
      </div>

      <NavLink
        to="/index"
        exact
        className={"button"}
        activeStyle={activeStyles}
      >
        Main
      </NavLink>

      <NavLink
        to="/contact-us"
        exact
        className={"button"}
        activeStyle={activeStyles}
      >
        Contact Us
      </NavLink>
    </div>
  );
};
export default NavBar;
