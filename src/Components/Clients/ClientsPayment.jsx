import React, { useContext, useEffect, useState, useRef } from "react";
import { Button, Col, Divider, Form, Input, Popconfirm, Row, Spin, Tabs, Tag } from "antd";
import { ImProfile } from "react-icons/im";
import { Store } from "../../Context/context";
import OnPageLoader from "../Common/OnPageLoader";
import { EyeOutlined, LoadingOutlined, LockOutlined } from "@ant-design/icons";
import {
  createDocumentsForClientProjectInfo,
  getAllClientProjects,
  updateIndividualUser,
} from "../../dbconfig";

import Skelton from "../Common/Skelton";
const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;
const ClientsPayment = ({ values }) => {
  const { currentUser } = useContext(Store);
  const [form] = Form.useForm();
  const [btnLoader, setBtnLoader] = useState(false);
  const [skltn, setSkltn] = useState(false);
  const[ClientProjects, setClientProjects] = useState([])
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
        setCurrentEvent(true);
        setBtnLoader(false);
      }
    } catch (error) {
      setBtnLoader(true);
    }
  };

  useEffect(() => {
    setSkltn(true)
    const fetchData =async()=>{
     try {
      const res = await getAllClientProjects(currentUser.id)
      setSkltn(false)
      setClientProjects(res)
     } catch (error) {
      console.log(error);
     }

    }
    fetchData()
    // form.setFieldsValue({
    //   'mobile': currentUser?.mobile && currentUser.mobile,
    //   'apartmentName': currentUser?.apartmentName && currentUser.apartmentName
    // })
    // form.setFieldValue('mobile', currentUser?.mobile && currentUser.mobile);
    // form.setFieldValue('apartmentName', currentUser?.apartmentName && currentUser.apartmentName);
  }, [currentUser]);

  if (!currentUser) {
    return <OnPageLoader />;
  } else {
    return (
      <div>
        <h2>
          <ImProfile /> Project Information
        </h2>
        <p>You can edit/update your projects information</p>
        <Divider />
        {skltn ? (
              <Skelton />
            ) : (
              ClientProjects &&
              ClientProjects.map((e, i) => (
                <div className="tableSingleCard" key={i + 1}>
                  <span className="slno">{i + 1}</span>
                  <span>{e.projectName}</span>
                  <span>{e.address}</span>
                  <span>{e.land}</span>
                  <span>{e.foundation}</span>

                  <span>
                    <EyeOutlined
                      style={{
                        border: "none",
                        marginRight: "5px",
                        cursor: "pointer",
                        fontSize: "20px",
                        color: "#ffa554",
                      }}
                      onClick={() => projectOnView(e)}
                    />

                  </span>
                </div>
              ))
            )}




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
    );
  }
};

export default ClientsPayment;
