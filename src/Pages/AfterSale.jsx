import React, { useRef, useState } from "react";
import { Card } from "primereact/card";
import AfterSaleText from "../Components/Common/AfterSaleText";
import Layout from "../Layout";

import { LockOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select, Spin } from "antd";
import { createDocumentsForAfterSale, getAllAfterSale } from "../dbconfig";

const { TextArea } = Input;

const AfterSale = () => {
  const Type = [
    { label: "Civil", value: "NY" },
    { label: "Electrical", value: "RM" },
    { label: "Others", value: "LDN" },
    { label: "Istanbul", value: "IST" },
    { label: "Paris", value: "PRS" },
  ];
  const [value2, setValue2] = useState(+880);
  const [form] = Form.useForm();
  const [btnLoader, setBtnLoader] = useState(false);
  const formRef = useRef(null);

  const onFinish = async (values) => {
    try {
      let res = await createDocumentsForAfterSale(values);
      console.log(res);
    } catch (error) {}
  };

  return (
    <Layout>
      <div className="aftersale">
        <div className="container">
          <AfterSaleText />
          <div class="grid">
            <div class="col-12 md:col-6 lg:col-6">
              <Card
                icon="pi pi-fw pi-home"
                title="Contact us"
                subTitle="mahmudbuilders@com"
              />
              <Card
                icon="pi pi-fw pi-home"
                title="Authorized Person Number"
                subTitle="(88) 01819-558130"
              />
              <div class="col-12 md:col-7 lg:col-7"></div>

              <div className="afterinput">
                <Form
                  layout="vertical"
                  form={form}
                  ref={formRef}
                  style={{ marginTop: "20px" }}
                  onFinish={onFinish}
                >
                  <Row gutter={[24, 0]}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                      <Form.Item
                        value="123"
                        label="Project Name"
                        name="projectName"
                      >
                        <Input
                          prefix={
                            <LockOutlined className="site-form-item-icon" />
                          }
                          placeholder="Project Name"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                      <Form.Item
                        value="123"
                        label="Clients Name"
                        name="clientsName"
                      >
                        <Input
                          prefix={
                            <LockOutlined className="site-form-item-icon" />
                          }
                          placeholder="Clients Name"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                      <Form.Item
                        value="123"
                        label="Apartment Name"
                        name="apartmentName"
                      >
                        <Input
                          prefix={
                            <LockOutlined className="site-form-item-icon" />
                          }
                          placeholder="Apartment Name"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                      <Form.Item value="123" label="Email" name="email">
                        <Input
                          prefix={
                            <LockOutlined className="site-form-item-icon" />
                          }
                          placeholder="Email"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                      <Form.Item value="123" label="Mobile" name="mobile">
                        <Input
                          prefix={
                            <LockOutlined className="site-form-item-icon" />
                          }
                          placeholder="Mobile Number"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                      <Form.Item label="Category" name="category">
                        <Select
                          style={{ width: "100%" }}
                          defaultValue="Select Category"
                          options={Type}
                        ></Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Form.Item label="Details" name="details">
                        <TextArea
                          rows={12}
                          placeholder="maxLength is 50"
                          maxLength={150}
                          style={{ height: "100px" }}
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
                        "SEND"
                      )}
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
            <div class="col-12 md:col-6 lg:col-6 order">
              <img className="aft-img" src="/b1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AfterSale;
