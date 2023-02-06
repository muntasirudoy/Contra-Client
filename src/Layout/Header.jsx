import React, { useState, useEffect, useContext } from "react";
import {
  HomeOutlined,
  PhoneOutlined,
  MailOutlined,
  FacebookFilled,
  YoutubeFilled,
  InstagramFilled,
  MailFilled,
} from "@ant-design/icons";
import logo from "/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import "./layout.css";
import { getUserInfo } from "../dbconfig";
import { Store } from "../Context/context";
import { Menubar } from "primereact/menubar";

const Header = () => {
  const { currentUser, setCurrentuser } = useContext(Store);
  const navigate = useNavigate();
  const handleAdmin = () => {
    navigate(currentUser ? "/dashboard" : "/login?redirect=/dashboard");
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   console.log("hello");
    //   let res = getUserInfo();
    //   console.log(res);
    // };
    // fetchData();
  }, []);

  const items = [
    {
      label: "HOME",
    },
    {
      label: "ABOUT",
      items: [
        {
          label: (
            <Link id="RouterNavLink" className="nav-link" to="/company-profile">
              Company Profile
            </Link>
          ),
        },
        {
          label: (
            <Link id="RouterNavLink" className="nav-link" to="/company-team">
              Management Team
            </Link>
          ),
        },
        {
          label: (
            <Link
              id="RouterNavLink"
              className="nav-link"
              to="/corporate-social-responsibility"
            >
              Corporate Social Responsibility
            </Link>
          ),
        },
      ],
    },

    {
      label: "PROJECTS",
      items: [
        {
          label: (
            <Link id="RouterNavLink" className="nav-link" to="/available-flats">
              Avialable Flats
            </Link>
          ),
        },
        {
          label: (
            <Link
              id="RouterNavLink"
              className="nav-link"
              to="/upcoming-projects"
            >
              Upcomming Projects
            </Link>
          ),
        },
        {
          label: (
            <Link
              id="RouterNavLink"
              className="nav-link"
              to="/ongoing-projects"
            >
              {" "}
              Ongoing Project{" "}
            </Link>
          ),
        },
        {
          label: (
            <Link id="RouterNavLink" to="/ready-projects">
              {" "}
              Ready Project
            </Link>
          ),
        },
      ],
    },

    {
      label: "SERVICE",
      items: [
        {
          label: (
            <Link id="RouterNavLink" className="nav-link" to="/after-sale">
              After Sale Service
            </Link>
          ),
        },
      ],
    },
    {
      label: "CONTACT",
      items: [
        {
          label: (
            <Link id="RouterNavLink" className="nav-link" to="/land-owner">
              Land Owner
            </Link>
          ),
        },
        {
          label: (
            <Link id="RouterNavLink" className="nav-link" to="/buyer">
              Buyer
            </Link>
          ),
        },
        {
          label: (
            <Link id="RouterNavLink" className="nav-link" to="/contact-us">
              Contact Us
            </Link>
          ),
        },
      ],
    },

    {
      label: "ACCOUNTS",
      items: [
        {
          label: (
            <a style={{ width: "100%" }} onClick={handleAdmin}>
              Admin
            </a>
          ),
        },
        {
          label: (
            <Link id="RouterNavLink" className="nav-link" to="/">
              Clients
            </Link>
          ),
        },
      ],
    },
  ];

  const start = (
    <Link id="RouterNavLink" className="nav-link" to="/">
      <img alt="logo" src={logo} height="50" className="mr-2"></img>
    </Link>
  );

  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="left">
            {" "}
            <MailOutlined />
            <p>mahmudbuilders@gmail.com</p> <PhoneOutlined />{" "}
            <p>+880187925861 </p>{" "}
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
            <Menubar model={items} start={start} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
