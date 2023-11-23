import React, { useEffect, useRef, useState } from "react";
import {
  LockOutlined,
  PlusOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import "./dashboard.css";
import Card_List from "./Card_List";
import { Dialog } from "primereact/dialog";
import {
  getIndividualProjectInfoForPayment,
  updateIndividualUser,
} from "../dbconfig";
import { Button, Col, Form, Input, Row } from "antd";
import Loader from "../Components/Common/Loader";
import OnPageLoader from "../Components/Common/OnPageLoader";

const Dashboard_Main = () => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [position, setPosition] = useState("center");
  const [projectId, setProjectId] = useState("");
  const [loader, setLoader] = useState(false);

  const [form] = Form.useForm();
  const formRef = useRef(null);
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

  const onFinish = async (values) => {
    const data = {
      ...values,
    };
    try {
      let res = await updateIndividualUser(data);
      if (res) {
      }
    } catch (error) { }
  };

  const onSearchProjectByProjectId = async () => {
    setLoader(true);
    let res = await getIndividualProjectInfoForPayment(
      "client_project_info",
      projectId
    );

    if (res) {
      setLoader(false);
      form.setFieldValue("projectName", res.projectName);
      form.setFieldValue("aptPrice", res.aptPrice);
      form.setFieldValue("address", res.address);
      form.setFieldValue("totalPrice", res.totalPrice);
    }
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
                <PlusOutlined /> Make Payment
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
                <PlusOutlined /> Add user
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
        style={{ width: "40vw" }}
        onHide={() => onHide("displayBasic")}
      >
        {loader ? (
          <OnPageLoader />
        ) : (
          <>
            <Form.Item label="Project ID" name="projectid">
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                suffix={
                  <Button
                    onClick={onSearchProjectByProjectId}
                    style={{ background: "#285496", color: "white" }}
                  >
                    Find
                  </Button>
                }
                onInput={(e) => setProjectId(e.target.value)}
                placeholder="Find project by project ID"
              />
            </Form.Item>

            <Form
              layout="vertical"
              form={form}
              ref={formRef}
              style={{ marginTop: "20px" }}
              onFinish={onFinish}
            >
              <Row gutter={[24, 0]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                  <Form.Item label="Project Name" name="projectName">
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Project Name"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                  <Form.Item label="Address" name="address">
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Address"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                  <Form.Item label="Apartment Price" name="aptPrice">
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Apartment Price"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                  <Form.Item label="Total Price" name="totalPrice">
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Total Price"
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </>
        )}
      </Dialog>
    </>
  );
};

export default Dashboard_Main;
