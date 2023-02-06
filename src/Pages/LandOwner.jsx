import React, { useState, useRef } from "react";
import LandOwnerText from "../Components/Common/LandOwnerText";
import Layout from "../Layout";
import { Col, Form, Input, Row, Select, Spin, Button } from "antd";
import { LoadingOutlined, LockOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { createDocumentsForLandOwner } from "../dbconfig";
const Type = [
  { label: "Civil", value: "NY" },
  { label: "Electrical", value: "RM" },
  { label: "Others", value: "LDN" },
  { label: "Istanbul", value: "IST" },
  { label: "Paris", value: "PRS" },
];
const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;
export const LandOwner = () => {
  const [form] = Form.useForm();

  const [btnLoader, setBtnLoader] = useState(false);
  const [btnText, setBtnText] = useState("Send");
  const formRef = useRef(null);

  const onFinish = async (values) => {
    setBtnLoader(true);
    try {
      let res = await createDocumentsForLandOwner(values);
      console.log(res);
      if (res) {
        setBtnLoader(false);
        setBtnText("Information sent");
      }
    } catch (error) {}
  };

  return (
    <Layout>
      <div className="owner">
        <div className="container">
          <LandOwnerText />
          <div className="grid">
            <div className="col-12 md:col-12 lg:col-12">
              <Form
                layout="vertical"
                form={form}
                ref={formRef}
                style={{ marginTop: "20px" }}
                onFinish={onFinish}
              >
                <h1 style={{ paddingBottom: "15px" }}>Land Information</h1>

                <Row gutter={[24, 0]}>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item
                      value="123"
                      label="Land Address"
                      name="landAddress"
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Land Address"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item value="123" label="Land Size" name="landSize">
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Land Size"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item
                      value="123"
                      label="Road Width of the front"
                      name="roadWidth"
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Road Width of the front"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item
                      value="123"
                      label="Facing Of Land"
                      name="facingOfLand"
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Facing Of Land"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item label="Land Category" name="landCategory">
                      <Select
                        style={{ width: "100%" }}
                        defaultValue="Land Category"
                        options={Type}
                      ></Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item
                      label="Attractive Features"
                      name="attractiveFeatures"
                    >
                      <TextArea
                        rows={12}
                        placeholder="Attractive Features (max length 250)"
                        maxLength={250}
                        style={{ height: "100px" }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <h1 style={{ paddingBottom: "15px" }}>
                  Land Owner Information
                </h1>
                <Row gutter={[24, 0]}>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item
                      value="123"
                      label="Land Owner Name"
                      name="landOwnerName"
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Land Owner Name"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item
                      value="123"
                      label="Contact Person"
                      name="contactPerson"
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Contact Person"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item
                      value="123"
                      label="Contact Number"
                      name="contactNumber"
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Contact Number"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item value="123" label="Email" name="email">
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Email"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item>
                  <Button
                    type="primary"
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
                      btnText
                    )}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandOwner;
