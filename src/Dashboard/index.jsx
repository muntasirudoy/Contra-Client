import React, { useState, useContext, useEffect } from "react";
import {
  AppstoreOutlined,
  PieChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { GrLogout } from "react-icons/gr";
const { Search } = Input;
import { Layout, Menu, theme, Input, ConfigProvider } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import "./dashboard.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Store } from "../Context/context";
import { authSignout, getCurrentUser } from "../dbconfig";
import Loader from "../Components/Common/Loader";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { currentUser, setCurrentUser } = useContext(Store);
  const [userInfo, setUserInfo] = useState("");
const navigate =     useNavigate() 
  const items = [
    getItem(
      <Link to="dashboard-home"> DASHBOARD</Link>,
      "1",
      <PieChartOutlined />
    ),
    getItem("PAGES", "sub2", <AppstoreOutlined />, [
      getItem("Home", "sub3", null, [
        getItem("Banner", "7"),
        getItem(<Link to="dashboard-about"> About us </Link>, "8"),
        // getItem("Category", "9"),
        getItem(<Link to="dashboard-why-choose">Why choose us </Link>, "10"),
        getItem("Clients", "11"),
      ]),
      getItem("About", "sub4", null, [
        getItem("Company profile", "12"),
        getItem("Management", "13"),
        getItem("Corporate social", "14"),
      ]),
      currentUser?.role == "Admin" &&
        getItem("Projects", "sub5", null, [
          getItem(<Link to="dashboard-all-projects">All Projects </Link>, "23"),
          getItem(<Link to="dashboard-avilable-project">Avilable </Link>, "15"),
          getItem(
            <Link to="dashboard-upcomming-project">Upcomming </Link>,
            "16"
          ),
          getItem(<Link to="dashboard-ongoing-project">Ongoing </Link>, "17"),
          getItem(<Link to="dashboard-ready-project">Ready </Link>, "18"),
        ]),

      getItem("Service", "sub6", null, [
        getItem(<Link to="dashboard-after-sale">After Sale </Link>, "19"),
      ]),
    ]),
    currentUser?.role == "Admin" && getItem(
      <Link to="your-clients">Your Clients </Link>,
      "sub7",
      <SettingOutlined />
    ),
    currentUser?.role == "Admin" &&
      getItem(
        <Link to="all-users">All Users</Link>,
        "sub10",
        <SettingOutlined />
      ),
    getItem(
      <Link to="dashboard-projects-category">Category </Link>,
      "sub9",
      <SettingOutlined />
    ),
    getItem("Contact", "sub8", <SettingOutlined />, [
      getItem(<Link to="dashboard-land-owner">Land owner </Link>, "20"),
      getItem(<Link to="dashboard-buyer">Buyer </Link>, "21"),
      getItem(<Link to="dashboard-contactus">Contact us </Link>, "22"),
    ]),
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onSearch = (value) => console.log(value);

  const signout = () => {
    setCurrentUser("");
    authSignout();
  };

useEffect(()=>{
  if(currentUser?.userStatus == "client"){
    authSignout();
    navigate("/")
  }
},[currentUser])


  if (!currentUser) {
    return <Loader />;
  } else {
    return (
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#285496",
              colorBgLayout: "#f5f8ff",
              colorBgBase: "#edf0f9",
              borderRadius: 5,
              colorTextBase: "gray",
              colorBgTextActive: "white",
              fontFamily: "Arial, Helvetica, sans-serif",
              boxShadow:"none"
            },
          }}
        >
          <Sider
            width={250}
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div
              style={{
                margin: " 0 20px",
                padding: "30px 0px",
                boxSizing: "border-box",
              }}
            >
              <Link to="/">
                <img
                  style={{ width: "100%" }}
                  src="/logo/LOGO-W.png"
                  alt="logo"
                />
              </Link>
            </div>
            <Menu
              className="dashboard-menu"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
              theme="dark"
            />
          </Sider>

          <Layout className="site-layout">
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
                borderBottom: "1px solid rgb(235, 235, 235)",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                size="large"
                style={{
                  width: 300,
                }}
              />
              <div className="profile">
                <p>
                  {currentUser?.username}
                </p>
                <div className="profile-image">
                 <img src={currentUser.user.photoURL} alt="Photo" />
                </div>
                <span onClick={signout}>
                  <GrLogout fontSize={24} />
                </span>
              </div>
            </Header>
            <Content
              style={{
                margin: "15px",
                padding: "30px",
                background:"white",
                boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              }}
            >
              <Outlet />
            </Content>
            <Footer
              style={{
                textAlign: "center",
              }}
            >
              <b>MAHMUD BUILDERS</b> ©2018 Created by Muntasir Udoy
            </Footer>
          </Layout>
        </ConfigProvider>
      </Layout>
    );
  }
};

export default Dashboard;
