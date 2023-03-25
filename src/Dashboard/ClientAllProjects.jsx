import { EyeOutlined, LoadingOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, Radio, Row, Spin } from "antd";
import Link from "antd/es/typography/Link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ImProfile } from "react-icons/im";
import { useLocation } from "react-router-dom";
import ClientProjectCard from "../Components/Common/ClientProjectCard";
import Skelton from "../Components/Common/Skelton";
import { Store } from "../Context/context";
import {
  createDocumentsForClientProjectInfo,
} from "../dbconfig";

const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;
const ClientAllProjects = ({ showForm, clientProjects }) => {
  const { currentUser } = useContext(Store);

  const [form] = Form.useForm();
  const [btnLoader, setBtnLoader] = useState(false);
  const [skltn, setSkltn] = useState(false);
  const [openForm, setOpenForm] = useState("hide-form");
  const [ formCardStatus, setFormCardStatus] = useState(true)
  const [ sellBtnText, setSellBtnText] = useState("Sell a Project")

  const formRef = useRef(null);

  const onFinish = async (values) => {
    setBtnLoader(true);
    const { projectName, land, foundation, address, refference } = values;
    const data = {
      ...values,
      id: currentUser.id,
      projectName,
      land,
      foundation,
      address,
      refference,
    };
    try {
      let res = await createDocumentsForClientProjectInfo(data);
      if (res) {
        setBtnLoader(false);
      }
    } catch (error) {
      setBtnLoader(true);
    }
  };


  // useEffect(() => {
  //   setSkltn(true);
  //   const fetchData = async () => {
  //     try {
  //       const res = await getAllClientProjects(currentUser.id);
  //       setSkltn(false);
  //       setClientProjects(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  //   // form.setFieldsValue({
  //   //   'mobile': currentUser?.mobile && currentUser.mobile,
  //   //   'apartmentName': currentUser?.apartmentName && currentUser.apartmentName
  //   // })
  //   // form.setFieldValue('mobile', currentUser?.mobile && currentUser.mobile);
  //   // form.setFieldValue('apartmentName', currentUser?.apartmentName && currentUser.apartmentName);
  // }, [currentUser]);

  const handleOpenForm = () => {
    if (openForm == "hide-form") {
      setOpenForm("show-form");
      setFormCardStatus(false)
      setSellBtnText("Show Project's")
    } else {
      setOpenForm("hide-form");
      setFormCardStatus(true)
      setSellBtnText("Sell a Project")
    }
  };

  const location = useLocation()
  console.log(location);
  return (
    <div className="clientsProjectDetails">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>
          <ImProfile /> Project Information
        </h2>
        {showForm && (
          <Button onClick={handleOpenForm} type="primary">
            {sellBtnText}
          </Button>
        )}
      </div>
      <p>You can edit/update your projects information</p>

      {showForm && (
        <div className={`${openForm}`}>
          <Form
            layout="vertical"
            form={form}
            ref={formRef}
            style={{ marginTop: "20px" }}
            onFinish={onFinish}
          >
            <Divider style={{padding:"0px 0 50px" }}>
              <h2 style={{ textAlign: "center", color: "#333d4c " }}>
                Project's Details
              </h2>
            </Divider>
            <Row gutter={[24, 0]}>
              <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                <Form.Item label="Project Name" name="projectName">
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Project Name"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                <Form.Item label="Land" name="land">
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Land"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                <Form.Item label="Foundation" name="foundation">
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Foundation"
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
                <Form.Item label="Refference" name="refference">
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Refference"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Divider style={{padding:"50px 0" }}>
              {" "}
              <h2 style={{ textAlign: "center", color: "#333d4c" }}>
                Project Pricing & Specification
              </h2>
            </Divider>
            <Row gutter={[24, 0]}>

              <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                <Form.Item label="Project Types">
                  <Radio.Group>
                    <Radio value="apple"> Residential </Radio>
                    <Radio value="pear"> Commercial </Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                <Form.Item label="Project ID" name="projjectid">
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Project ID"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                <Form.Item label="Floor" name="floor">
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Floor"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                <Form.Item label="Unit" name="unit">
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Unit"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                <Form.Item label="Rate (Per Sqft)" name="rate">
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Rate"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                <Form.Item label="Only Apt. Price" name="aptPrice">
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Apt. Price"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                <Form.Item label="Parking Price" name="parkingPrice">
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Parking Price"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                <Form.Item label="Utility" name="utility">
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Utility"
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
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <Form.Item label="Total Price in Word" name="totalPriceInWord">
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Total Price in Word"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Button
                style={{ background: "#014a69", color: "white" }}
                htmlType="submit"
                className="login-form-button"
              >
                {btnLoader ? (
                  <>
                    <Spin
                      indicator={antIcon}
                      style={{ color: "white", marginRight: "5px" }}
                    />
                    loading
                  </>
                ) : (
                  "UPDATE"
                )}
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}

      {skltn ? (
        <Skelton />
      ) : (
        <>
          <Divider />
            {formCardStatus &&
            
            <div className="allItems">
            <div className="singleProjectCards">
              {clientProjects &&
                clientProjects.map((e) => (
                  <>
                    <ClientProjectCard data={e} />
                  </>
                ))}
            </div>
          </div> 
            }
        </>
      ) }
    </div>
  );
};

export default ClientAllProjects;
