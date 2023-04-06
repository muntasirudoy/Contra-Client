import React from "react";
import "../../Layout/layout.css";
import { Link } from "react-router-dom";
export const Footertext = (props) => {
  return (
    <a href={props.link}>
      <li className="footer-li">
        <i className="fas fa-chevron-right" style={{ marginRight: "7px" }}></i>
        <p> {props.li}</p>
      </li>
    </a>
  );
};

export default Footertext;
