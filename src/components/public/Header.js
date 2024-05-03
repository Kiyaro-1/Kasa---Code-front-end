import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../images/LOGO.png";

import "./header.css";

const header = () => {
  return (
    <header>
      <nav className="menu-navigation">
        <Link to="/home" className="lien-logo-kasa">
          <img src={logo} alt="logo kasa" className="logo-kasa" />
        </Link>
        <ul className="nav-buttons">
          <li>
            <NavLink to="/home">Acceuil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
