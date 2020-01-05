import React from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
//
//
//
//
//
//
const Header = () => (
  <header>
    <div className="wrapper">
      <h1>Employee Management</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/Home" className="links">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Employee" className="links">
              Employee List
            </NavLink>
          </li>
          <li>
            <NavLink to="/Orders" className="links">
              Orders
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
