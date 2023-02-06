import React, { useState, useRef } from "react";

import TitleText from "../Components/Common/TitleText";
import Layout from "../Layout";
import { Button, Col, DatePicker, Form, Input, Row, Select, Spin } from "antd";
import { LoadingOutlined, LockOutlined } from "@ant-design/icons";

import { createDocumentsForBuyer } from "../dbconfig";

const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;
export const Buyer = () => {
  const [form] = Form.useForm();

  const [btnLoader, setBtnLoader] = useState(false);
  const [btnText, setBtnText] = useState("Send");
  const formRef = useRef(null);

  const onFinish = async (values) => {
    setBtnLoader(true);
    try {
      let res = await createDocumentsForBuyer(values);
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
          <TitleText heading="Buyer Infromation" subheading="SEND US" />
          <div class="grid">
            <div class="col-12 md:col-12 lg:col-12">
              <Form
                layout="vertical"
                form={form}
                ref={formRef}
                style={{ marginTop: "20px" }}
                onFinish={onFinish}
              >
                <h1 style={{ paddingBottom: "15px" }}> Valued Interest</h1>
                <Row gutter={[24, 0]}>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item
                      value="123"
                      label="Preferred Location"
                      name="preferredLocation"
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Preferred Location"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item
                      value="123"
                      label="Preferred Size"
                      name="preferredSize"
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Preferred Size"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item
                      value="123"
                      label="CarParking Requirement"
                      name="carParkingRequirement"
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="CarParking Requirement"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item
                      value="123"
                      label="Expected Handover Date"
                      name="expectedHandoverDate"
                    >
                      <DatePicker format={"YYYY-MM-DD"} />
                    </Form.Item>
                  </Col>
                </Row>

                <h1 style={{ paddingBottom: "15px" }}>Other Information</h1>
                <Row gutter={[24, 0]}>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item
                      label="Facing Of The Apartment"
                      name="facingOfTheApartment"
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Facing Of The Apartment"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item
                      value="123"
                      label="Preferred Floor"
                      name="preferredFloor"
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Preferred Floor,"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item
                      value="123"
                      label="Minimum Bedroom"
                      name="minBedroom"
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Minimum Bedroom"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item
                      value="123"
                      label="Minimum Bathroom"
                      name="minBathroom"
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Minimum Bathroom"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <h1 style={{ paddingBottom: "15px" }}>Contact Information</h1>
                <Row gutter={[24, 0]}>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item value="123" label="Name" name="name">
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Name"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item value="123" label="Profession" name="profession">
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Profession"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item value="123" label="Mobile" name="mobile">
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Mobile"
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
                  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item value="123" label="Address" name="address">
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="Address"
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

export default Buyer;
