import React, { useState } from "react";
import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";
import "./dashboard.css";
import Card_List from "./Card_List";
import { Dialog } from "primereact/dialog";
const Dashboard_Main = () => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [position, setPosition] = useState("center");
  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  return (
    <>
      <div
        style={{
          padding: "0 20px",
          minHeight: "100%",
          boxSizing: "border-box",
        }}
      >
        <div className="dashboard-title">
          <h1>Good Morning, Mahmud!</h1>
          <p>Here's what's happening with your store today.</p>
        </div>

        <div className="dashboard-cards">
          <div className="dasboard-card">
            <div className="box"></div>
            <div className="text">
              <h2>Your Total Clients</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="dasboard-card">
            <div className="box"></div>
            <div className="text">
              <h2>Your Total Clients</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="dasboard-card">
            <div className="box"></div>
            <div className="text">
              <h2>Your Total Clients</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="dashboard-cards bottom">
          <div className="dashboard-card-3">
            <div className="card-head">
              <h3>
                <UnorderedListOutlined style={{ marginRight: "5px" }} />
                Category list
              </h3>
              <button onClick={() => onClick("displayBasic")}>
                <PlusOutlined /> Add
              </button>
            </div>
            <div className="dashboard-card-list-3">
              <Card_List
                heading="Category heading"
                subheading="category subheading here"
              />
            </div>
          </div>
          <div className="dashboard-card-3">
            <div className="card-head">
              <h3>
                <UnorderedListOutlined style={{ marginRight: "5px" }} />
                Category list
              </h3>
              <button onClick={() => onClick("displayBasic")}>
                <PlusOutlined /> Add
              </button>
            </div>
            <div className="dashboard-card-list-3">
              <Card_List
                heading="Category heading"
                subheading="category subheading here"
              />
            </div>
          </div>
          <div className="dashboard-card-3">
            <div className="card-head">
              <h3>
                <UnorderedListOutlined style={{ marginRight: "5px" }} />
                Category list
              </h3>
              <button onClick={() => onClick("displayBasic")}>
                <PlusOutlined /> Add
              </button>
            </div>
            <div className="dashboard-card-list-3">
              <Card_List
                heading="Category heading"
                subheading="category subheading here"
              />
            </div>
          </div>
        </div>
      </div>
      <Dialog
        header="Header"
        visible={displayBasic}
        style={{ width: "50vw" }}
        onHide={() => onHide("displayBasic")}
      ></Dialog>
    </>
  );
};

export default Dashboard_Main;
