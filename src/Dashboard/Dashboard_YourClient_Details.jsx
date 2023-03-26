import { LoadingOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, Row, Spin, Tabs } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ClientPersonal from "../Components/Clients/ClientPersonal";
import ClientsPayment from "../Components/Clients/ClientsPayment";
import ClientProjects from "../Components/Clients/ClientsProjects";
import { Store } from "../Context/context";
import { EventStore } from "../Context/eventContext";
import { getCurrentUser, getIndividualClientProjectInfo } from "../dbconfig";
import ClientAllProjects from "./ClientAllProjects";
import ClientsAllPayments from "./ClientsAllPayments";
const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;
const Dashboard_YourClient_Details = () => {
  const { currentUser } = useContext(Store);
  const {currentEvent} = useContext(EventStore)
  const [form] = Form.useForm();
  const [btnLoader, setBtnLoader] = useState(false);
  const [skltn, setSkltn] = useState(false);
  const [clientProjects, setClientProjects] = useState([]);
  const [clinetPersonalInfo, setClinetPersonalInfo] = useState();
  const [activeTab, setActiveTab] = useState(currentEvent.payload || 1)

  const formRef = useRef(null);
  const param = useParams();



  useEffect(() => {
    const fetchData = async () => {
      const res = await getCurrentUser(param.id);
      if (res) {
        setClinetPersonalInfo(res);
      }
    };

    const fetchClentProjectInfo = async () => {
      const res = await getIndividualClientProjectInfo(
        "client_project_info",
        param.id
      );
      if (res) {
        setClientProjects(res);
      }
    };
    fetchClentProjectInfo();
    fetchData();
  }, [activeTab]);

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

  const items = [
    {
      key: "1",
      label: `Personal Information`,
      children: (
        <>
          <ClientPersonal valueFromDashboardClientProject={clinetPersonalInfo} params={ param.id}/>
        </>
      ),
    },
    {
      key: "2",
      label: `Project Information`,
      children: <ClientAllProjects clientProjects={clientProjects}  showForm={true} params={ param.id}/>,
    },
    {
      key: "3",
      label: `Payment`,
      children: <ClientsAllPayments />,
    },
    {
      key: "4",
      label: `Nomeeni`,
      children: `Content of Tab Pane 3`,
    },
  ];

  return (
    <div>
      <Tabs defaultActiveKey={activeTab} centered items={items} />

      {/* <Divider />
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
      </Form> */}
    </div>
  );
};

export default Dashboard_YourClient_Details;
