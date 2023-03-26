import React, { useContext } from "react";
import { Row, Col } from "antd";

import "./layout.css";
import Footertext from "../Components/Common/Footertext";
import { Link } from "react-router-dom";
import { Store } from "../Context/context";

export const Footer = () => {
  const { currentUser } = useContext(Store);
  return (
    <div className="footer">
      <div className="container foot">
        <div className="grid">
          <div className="col-12 md:col-4 lg:col-3  footer-col">
            <h4 className="footer-title"> MAHMUD BUILDERS LTD</h4>
            <ul>
              <Footertext li="Address: SEL Centre, 29, West Panthapath,Bir Uttam Kazi Nuruzzaman Road, Dhaka 1205" />
              <Footertext li="Phone: (8802) 58151094, 58155290, (88) 01819558141" />
              <Footertext li="Fax: (8802) 48113973" />
              <Footertext li="Email (For Information): info@sel.com.bd" />
            </ul>
          </div>
          <div className="col-12 md:col-4 lg:col-3 footer-col">
            <h4 className="footer-title"> USEFUL LINKS</h4>
            <ul>
              <Footertext li="Webmail login" />
              <Footertext li="Leave Managemetn System(LMS)" />
              <Footertext li="Contact Us" />
              <Footertext li="Our Profile" />

              {!currentUser && (
                <Link style={{ color: "white" }} to="/login">
                  Admin Login
                </Link>
              )}


               {currentUser?.userStatus == "authority" && (
                <Link style={{ color: "white" }} to="/dashboard">
                  Admin Dashboard
                </Link>
              )}
            </ul>
          </div>
          <div className="col-12 md:col-4 lg:col-3 footer-col">
            <h4 className="footer-title">NEWS LETTER</h4>
            <ul>
              <Footertext li="Facebook" />
              <Footertext li="Gallery" />
            </ul>
          </div>
        </div>
        <div
          className="grid"
          style={{
            textAlign: "center",
            color: "rgb(192, 192, 192)",
            fontSize: "12px",
            marginTop: "20px",
          }}
        >
          <div className="col-12 md:col-12 lg:col-12">
            <p>
              Copyrights © 2022. All Rights Reserved by{" "}
              <b style={{ color: "#eab308" }}>MAHMUD BUILDERS</b> || Developed
              By: Muntasir Udoy
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
