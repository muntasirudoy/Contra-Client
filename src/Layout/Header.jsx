import React, { useContext, useState } from "react";
import {
  PhoneOutlined,
  MailOutlined,
  FacebookFilled,
  YoutubeFilled,
  InstagramFilled,
  MailFilled,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import logo from "/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import "./layout.css";
import { authSignout } from "../dbconfig";
import { Store } from "../Context/context";
import { Chip } from "primereact/chip";
import Navbar from "./Navbar";
import { Dropdown } from "antd";

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(Store);

  const navigate = useNavigate();
  // const handleAdmin = () => {
  //   navigate(
  //     currentUser?.userStatus == "authority"
  //       ? "/dashboard"
  //       : "/login?redirect=/dashboard"
  //   );
  // };

  // const handleClient = () => {
  //   navigate(
  //     currentUser?.userStatus == "client"
  //       ? "/client-profile"
  //       : "/login?redirect=/client-profile"
  //   );
  // };

  const handleSignOut = async () => {
    setCurrentUser("");
    authSignout();
  };

  // const items = [
  //   {
  //     label: "HOME",
  //   },
  //   {
  //     label: "ABOUT",
  //     items: [
  //       {
  //         label: (
  //           <Link id="RouterNavLink" className="nav-link" to="/company-profile">
  //             Company Profile
  //           </Link>
  //         ),
  //       },
  //       {
  //         label: (
  //           <Link id="RouterNavLink" className="nav-link" to="/company-team">
  //             Management Team
  //           </Link>
  //         ),
  //       },
  //       // {
  //       //   label: (
  //       //     <Link
  //       //       id="RouterNavLink"
  //       //       className="nav-link"
  //       //       to="/corporate-social-responsibility"
  //       //     >
  //       //       Corporate Social Responsibility
  //       //     </Link>
  //       //   ),
  //       // },
  //     ],
  //   },

  //   {
  //     label: (
  //       <Link id="RouterNavLink" className="nav-link" to="Projects">
  //         Projects
  //       </Link>
  //     ),

  //     // items: [
  //     //   {
  //     //     label: (
  //     //       <Link id="RouterNavLink" className="nav-link" to="/available-flats">
  //     //         Avialable Flats
  //     //       </Link>
  //     //     ),
  //     //   },
  //     //   {
  //     //     label: (
  //     //       <Link
  //     //         id="RouterNavLink"
  //     //         className="nav-link"
  //     //         to="/upcoming-projects"
  //     //       >
  //     //         Upcomming Projects
  //     //       </Link>
  //     //     ),
  //     //   },
  //     //   {
  //     //     label: (
  //     //       <Link
  //     //         id="RouterNavLink"
  //     //         className="nav-link"
  //     //         to="/ongoing-projects"
  //     //       >
  //     //         {" "}
  //     //         Ongoing Project{" "}
  //     //       </Link>
  //     //     ),
  //     //   },
  //     //   {
  //     //     label: (
  //     //       <Link id="RouterNavLink" to="/ready-projects">
  //     //         {" "}
  //     //         Ready Project
  //     //       </Link>
  //     //     ),
  //     //   },
  //     // ],
  //   },

  //   {
  //     label: "SERVICE",
  //     items: [
  //       {
  //         label: (
  //           <Link id="RouterNavLink" className="nav-link" to="/after-sale">
  //             After Sale Service
  //           </Link>
  //         ),
  //       },
  //     ],
  //   },
  //   {
  //     label: "CONTACT",
  //     items: [
  //       {
  //         label: (
  //           <Link id="RouterNavLink" className="nav-link" to="/land-owner">
  //             Land Owner
  //           </Link>
  //         ),
  //       },
  //       {
  //         label: (
  //           <Link id="RouterNavLink" className="nav-link" to="/buyer">
  //             Buyer
  //           </Link>
  //         ),
  //       },
  //       {
  //         label: (
  //           <Link id="RouterNavLink" className="nav-link" to="/contact-us">
  //             Contact Us
  //           </Link>
  //         ),
  //       },
  //     ],
  //   },

  //   // {
  //   //   label: "ACCOUNTS",
  //   //   items: [
  //   //     {
  //   //       label:
  //   //         currentUser?.userStatus == "authority" ? (
  //   //           <a style={{ width: "100%" }} onClick={handleAdmin}>
  //   //             Admin
  //   //           </a>
  //   //         ) : currentUser?.userStatus == "client" ? (
  //   //           <a className="nav-link" onClick={handleClient}>
  //   //             Client's Dashboard
  //   //           </a>
  //   //         ) : (
  //   //           <>
  //   //             <a className="nav-link" onClick={handleSignOut}>
  //   //               Logout
  //   //             </a>
  //   //           </>
  //   //         ),
  //   //     },

  //   //     {
  //   //       label: currentUser?.userStatus == "client" && (
  //   //         <a className="nav-link" onClick={handleSignOut}>
  //   //           Logout
  //   //         </a>
  //   //       ),
  //   //     },
  //   //     {
  //   //       label: (
  //   //         <Link id="RouterNavLink" className="nav-link" to="/login">
  //   //         Login
  //   //         </Link>
  //   //       ),
  //   //     },
  //   //     {
  //   //       label: currentUser?.userStatus == "client" && (
  //   //         <a className="nav-link" onClick={handleSignOut}>
  //   //           Logout
  //   //         </a>
  //   //       ),
  //   //     },

  //   //   ],
  //   // },
  // ];
  const items = [
    currentUser?.userStatus &&{
      key: "1",
      label: (
        currentUser?.userStatus == "client" ? <Link to="/client-profile">My Profile</Link> : currentUser?.userStatus == "authority" ? <Link to="/dashboard">Dashboard</Link> : ""
      ),
    },
    currentUser && {
      key: "2",
      label: (
        <Link
           to="#"
           onClick={handleSignOut}
        >
         Logout
        </Link>
      ),
    },
    !currentUser&& {
      key: "3",
      label: (
         <Link to="/client-login">Login</Link>
      ),
    },
    !currentUser&& {
      key: "4",
      label: (
        <Link to="/client-signup">Signup</Link>
      ),
    },
  ];
  const content = (
    <>
      <p className="auth-name" style={{ padding: "0 20px 0 15px", fontWeight: "600" }}>
        {currentUser?.username ? currentUser?.username : "Login/Signup"}
      </p>
      <img className="mr-0" src={currentUser?.user?.photoURL ? currentUser.user.photoURL : "/user.png"} alt="" />
    </>
  );

const [show, setShow] = useState("hide")

  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="left">
            {" "}
            <MailOutlined />
            <p>mahmudbuilders.mlbl@gmail.com</p> <PhoneOutlined />{" "}
            <p>01782-592825 </p>{" "}
          </div>
          <div className="right">
            {" "}
            <FacebookFilled /> <YoutubeFilled />
            <InstagramFilled />
            <MailFilled />
          </div>
        </div>
      </div>
      <div className="mid-header-all">
        <div className="container">
          <div className="mid-header">
            <Navbar show={show}/>
            {/* <MenuUnfoldOutlined onClick={()=> setShow(show=="hide" ? "show" : "hide")}/> */}
              {/* <div className="user-account">
                <Dropdown menu={{ items }} placement="bottomLeft">
                  <Chip
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0",
                    }}
                    template={content}
                  />
                </Dropdown>
              </div> */}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
