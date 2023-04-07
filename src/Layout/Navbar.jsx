import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({show}) => {
  return (
    <header id="header" class="site-header">
      <nav class="navigation">
        <div id="navbar" class="navigation-holder">
          <a class="navbar-brand" href="/">
            <img src="/logo.svg" alt />
          </a>{" "}
          <ul class= {`nav navbar-nav ${show}`}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li class="menu-item-has-children">
              {" "}
              <NavLink to="#">About Us</NavLink>
              <ul class="sub-menu">
                <li>
                  <NavLink to="/company-profile">Company Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/company-team">Management Team</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>

            <li class="menu-item-has-children">
              {" "}
              <NavLink href="#">Contact</NavLink>
              <ul class="sub-menu">
                <li>
                  <NavLink to="/land-owner">Land Owner</NavLink>
                </li>
                <li>
                  <NavLink to="/buyer">Buyer</NavLink>
                </li>
                <li>
                  <NavLink to="/contact-us">Contact Us</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
