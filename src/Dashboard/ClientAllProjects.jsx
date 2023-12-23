import { LoadingOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, Radio, Row, Spin } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ImProfile } from "react-icons/im";
import { useLocation } from "react-router-dom";
import ClientProjectCard from "../Components/Common/ClientProjectCard";
import Skelton from "../Components/Common/Skelton";
import { Store } from "../Context/context";
import { createDocumentsForClientProjectInfo } from "../dbconfig";
import OnPageLoader from "../Components/Common/OnPageLoader";

const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;
const ClientAllProjects = ({ showForm, clientProjects, params }) => {


  const [form] = Form.useForm();
  const [btnLoader, setBtnLoader] = useState(false);
  const [skltn, setSkltn] = useState(false);
  const [openForm, setOpenForm] = useState("hide-form");
  const [formCardStatus, setFormCardStatus] = useState(true);
  const [sellBtnText, setSellBtnText] = useState("Sell a Project");

  const formRef = useRef(null);

  const onFinish = async (values) => {
    setBtnLoader(true);
    const {
      projectName,
      land,
      foundation,
      address,
      refference,
      projjectid,
      floor,
      unit,
      rate,
      aptPrice,
      parkingPrice,
      utility,
      totalPrice,
      totalPriceInWord,
      monthlyInstallment,
      noInstallment,
      paymentMethod,
      paymentMode,
      bookingMoney,
      downPayment,
      bankName,
      bookingDate,
      downPaymentDate
    } = values;
    const data = {
      ...values,
      id: params,
      projectName,
      land,
      foundation,
      address,
      refference,
      projjectid,
      floor,
      unit,
      rate,
      aptPrice,
      parkingPrice,
      utility,
      totalPrice,
      totalPriceInWord,
      monthlyInstallment,
      noInstallment,
      paymentMethod,
      paymentMode,
      bookingMoney,
      downPayment,
      bankName,
      bookingDate,
      downPaymentDate,
      dueAmount: (Number(totalPrice) - (Number(bookingMoney) + Number(downPayment)))
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

  const handleOpenForm = () => {
    if (openForm == "hide-form") {
      setOpenForm("show-form");
      setFormCardStatus(false);
      setSellBtnText("Show Project's");
    } else {
      setOpenForm("hide-form");
      setFormCardStatus(true);
      setSellBtnText("Sell a Project");
    }
  };


  if (!clientProjects?.length > 0) {
    return <OnPageLoader />
  } else {
    return (
      <div className="clientsProjectDetails">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {showForm && (
            <Button onClick={handleOpenForm} type="primary">
              {sellBtnText}
            </Button>
          )}
        </div>

        {showForm && (
          <div className={`${openForm}`}>
            <Form
              layout="vertical"
              form={form}
              ref={formRef}
              style={{ marginTop: "20px" }}
              onFinish={onFinish}
            >
              <Divider style={{ padding: "0px 0 50px" }}>
                <h2 style={{ textAlign: "center", color: "#333d4c " }}>
                  Project Information
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

              <Divider style={{ padding: "50px 0" }}>
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

              <Divider style={{ padding: "50px 0" }}>
                {" "}
                <h2 style={{ textAlign: "center", color: "#333d4c" }}>
                  Payment Information
                </h2>
              </Divider>
              <Row gutter={[24, 0]}>
                <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                  <Form.Item label="Payment Mode" name="paymentMode">
                    <Radio.Group>
                      <Radio value="once"> Once </Radio>
                      <Radio value="installment"> Installment </Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item label="Payment Method" name="paymentMethod">
                    <Radio.Group>
                      <Radio value="cash"> Cash </Radio>
                      <Radio value="cheque"> Cheque </Radio>
                      <Radio value="pay-order"> Pay-order </Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Row gutter={[24, 0]}>

                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                      <Form.Item label="No. Installment" name="noInstallment">
                        <Input
                          prefix={<LockOutlined className="site-form-item-icon" />}
                          placeholder="No. Installment"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                      <Form.Item label="Monthly Installment" name="monthlyInstallment">
                        <Input
                          prefix={<LockOutlined className="site-form-item-icon" />}
                          placeholder="Monthly Installment"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                </Col>




                <Col xs={24} sm={12} md={12} lg={10} xl={10}>
                  <Form.Item label="Booking Money" name="bookingMoney">
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Booking Money"
                    />
                  </Form.Item>
                  <Form.Item label="Down Payment" name="downPayment">
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Down Payment"
                    />
                  </Form.Item>
                  <Form.Item label="Bank Name" name="bankName">
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Bank Name"
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                  <Form.Item label="Date" name="bookingDate">
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Booking Date"
                    />
                  </Form.Item>
                  <Form.Item label="Date " name="downPaymentDate">
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Down Payment Date"
                    />
                  </Form.Item>
                  <Form.Item label="Branch" name="branch">
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Branch"
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
            {formCardStatus && (
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
            )}
          </>
        )}
      </div>
    );
  }
};

export default ClientAllProjects;
