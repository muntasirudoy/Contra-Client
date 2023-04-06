import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="header" class="site-header">
      <nav class="navigation">
          <div
            id="navbar"
            class="navigation-holder"
          >
            <a class="navbar-brand" href="/">
              <img src="/logo.svg" alt />
            </a>{" "}
            <ul class="nav navbar-nav">
              <li class="active">
                <Link to="/">Home</Link>
              </li>
              <li class="menu-item-has-children">
                {" "}
                <Link to="#">About Us</Link>
                <ul class="sub-menu">
                  <li>
                    <Link to="/company-profile">Company Profile</Link>
                  </li>
                  <li>
                    <Link to="/company-team">Management Team</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>

              <li class="menu-item-has-children">
                {" "}
                <Link href="#" >Contact</Link>
                <ul class="sub-menu">
                  <li>
                    <Link to="/land-owner">Land Owner</Link>
                  </li>
                  <li>
                    <Link to="/buyer">Buyer</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
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
