import React, { useContext, useEffect, useState, useRef } from "react";
import { Button, Col, Divider, Form, Input, Row, Spin } from "antd";
import { ImProfile } from "react-icons/im";
import { Store } from "../../Context/context";
import OnPageLoader from "../Common/OnPageLoader";
import { LoadingOutlined, LockOutlined } from "@ant-design/icons";
import { updateIndividualUser } from "../../dbconfig";

const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;
const ClientPersonal = ({ valueFromDashboardClientProject : personalInfo}) => {
  const { currentUser } = useContext(Store);
  // const { currentEvent,setCurrentEvent } = useContext(eventStore);
  const [form] = Form.useForm();
  const [btnLoader, setBtnLoader] = useState(false);
  const [res, setRes] = useState("");
  const formRef = useRef(null);

  const onFinish = async (values) => {
    setBtnLoader(true)
    const data = {
      ...values,
      id:currentUser.id,
      apartmentName: values.apartmentName ? values.apartmentName : "",
      lastName: values.lastName ? values.lastName : "",
      mobile: values.mobile ? values.mobile : "",
      profession: values.profession ? values.profession : "",
      dateOfBirth: values.dateOfBirth ? values.dateOfBirth : "",
      nationality: values.nationality ? values.nationality : "",
      permanentAddress: values.permanentAddress ? values.permanentAddress : "",
      presentAddress: values.presentAddress ? values.presentAddress : "",
      nid: values.nid ? values.nid : "",
      passport: values.passport ? values.passport : "",
    }
    try {
      let res = await updateIndividualUser(data)
      if(res){
        setBtnLoader(false)
      }
    } catch (error) {
      setBtnLoader(true)
    }
  };

  useEffect(()=>{
    if(personalInfo){
      form.setFieldValue('mobile', personalInfo?.mobile && currentUser.mobile);
      form.setFieldValue('apartmentName', personalInfo?.apartmentName && currentUser.apartmentName);
      form.setFieldValue('lastName', personalInfo?.lastName && currentUser.lastName);
      form.setFieldValue('firstName', personalInfo?.username);
      form.setFieldValue('email', personalInfo?.email);
      form.setFieldValue('nationality', personalInfo?.nationality);
      form.setFieldValue('profession', personalInfo?.profession);
      form.setFieldValue('permanentAddress', personalInfo?.permanentAddress);
      form.setFieldValue('presentAddress', personalInfo?.presentAddress);
      form.setFieldValue('nid', personalInfo?.nid);
      form.setFieldValue('dateOfBirth', personalInfo?.dateOfBirth);
      form.setFieldValue('passport', personalInfo?.passport);
    }else{
      form.setFieldValue('mobile', currentUser?.mobile && currentUser.mobile);
      form.setFieldValue('apartmentName', currentUser?.apartmentName && currentUser.apartmentName);
      form.setFieldValue('lastName', currentUser?.lastName && currentUser.lastName);
      form.setFieldValue('firstName', currentUser?.username);
      form.setFieldValue('email', currentUser?.email);
      form.setFieldValue('nationality', currentUser?.nationality);
      form.setFieldValue('profession', currentUser?.profession);
      form.setFieldValue('permanentAddress', currentUser?.permanentAddress);
      form.setFieldValue('presentAddress', currentUser?.presentAddress);
      form.setFieldValue('nid', currentUser?.nid);
      form.setFieldValue('dateOfBirth', currentUser?.dateOfBirth);
      form.setFieldValue('passport', currentUser?.passport);
    }
    
  },[currentUser,personalInfo])


  if (!currentUser) {
    return <OnPageLoader />;
  } else {
    return (
      <div>
        <h2>
          <ImProfile /> Personal Information
        </h2>
        <p>You can edit/update your personal information</p>
        <Divider />
        <Form
          layout="vertical"
          form={form}
          ref={formRef}
          style={{ marginTop: "20px" }}
          onFinish={onFinish}
        >
          <Row gutter={[24, 0]}>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Form.Item label="First Name" name="firstName">
                <Input
                  disabled ={personalInfo ? false : true}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="First Name"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Form.Item  label="Last Name" name="lastName">
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Last Name"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Form.Item label="Mobile" name="mobile">
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Mobile Number"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Form.Item
                label="Apartment Name"
                name="apartmentName"
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Apartment Name"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Form.Item value="123" label="Email" name="email">
                <Input
                  disabled
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Form.Item label="Profession" name="profession">
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Profession"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Form.Item label="dateOfBirth" name="dateOfBirth">
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Date Of Birth"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Form.Item label="Nationality" name="nationality">
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Nationality"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Form.Item label="Permanent Address" name="permanentAddress">
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Permanent Address"
                />
              </Form.Item>
           
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Form.Item label="Present Address" name="presentAddress">
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Present Address"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Form.Item label="NID" name="nid">
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="NID"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Form.Item label="Passport" name="passport">
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Passport"
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button
              style={{background:"#014a69", color:"white"}}
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
    );
  }
};

export default ClientPersonal;
