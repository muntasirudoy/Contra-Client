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
         <li> <b> Address:</b> <br /> Holding-1/9, Block A, Level-02, 9 Masjidul Illah Rd, Radio Colony Rd, Savar Union 1344</li>
              <li><b>Phone:</b>  <br /> 01782-592825, 01716-685350 <br /> 01795-731830, 01711-174925 <br /> 01775-203354, 01821-262006 </li> 
             <li> <b>Email:</b>  <br /> mahmudbuilders.mlbl@gmail.com</li>
            </ul>
          </div>
          <div className="col-12 md:col-4 lg:col-3 footer-col">
            <h4 className="footer-title"> USEFUL LINKS</h4>
            <ul>
              <li><Link to="/contact-us">Contact Us</Link></li>  
              <li><Link to="/company-profile">Our Profile</Link></li>
              


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
               <Footertext li="Facebook" link="https://www.facebook.com/Mahmudbuilders.mlbl?mibextid=ZbWKwL" />
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
