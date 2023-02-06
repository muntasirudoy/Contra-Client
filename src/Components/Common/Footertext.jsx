import React from "react";
import "../../Layout/layout.css";
export const Footertext = (props) => {
  return (
    <>
      <li className="footer-li">
        <i className="fas fa-chevron-right" style={{ marginRight: "7px" }}></i>
        <p> {props.li}</p>
      </li>
    </>
  );
};

export default Footertext;
