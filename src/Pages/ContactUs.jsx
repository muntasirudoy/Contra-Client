import React, { useRef, useState } from "react";
import TitleText from "../Components/Common/TitleText";
import Layout from "../Layout";
import { Col, Row, Button, Spin, Form, Input } from "antd";
import { createDocumentsForContactUs } from "../dbconfig";
import { LoadingOutlined, LockOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;
const ContactUs = () => {
  const [form] = Form.useForm();
  const [btnLoader, setBtnLoader] = useState(false);
  const [btnText, setBtnText] = useState("Send");
  const formRef = useRef(null);

  const onFinish = async (values) => {
    console.log(values);
    setBtnLoader(true);
    try {
      let res = await createDocumentsForContactUs(values);
      if (res) {
        setBtnLoader(false);
        setBtnText("Information sent");
      }
    } catch (error) {}
  };
  return (
    <Layout>
      <div className="aftersale">
        <div className="container">
          <TitleText
            heading="Get in Touch"
            subheading="If you have any further questions or queries please do not hesitate to get in touch."
          />
          <div class="grid">
            <div class="col-12 md:col-5 lg:col-5"> </div>
            <div class="col-12 md:col-5 lg:col-5">
              <Form
                layout="vertical"
                form={form}
                ref={formRef}
                style={{ marginTop: "20px" }}
                onFinish={onFinish}
              >
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
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Form.Item label="Subject" name="subject">
                      <TextArea
                        rows={12}
                        placeholder="SubjecT (Min length 150)"
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

export default ContactUs;
