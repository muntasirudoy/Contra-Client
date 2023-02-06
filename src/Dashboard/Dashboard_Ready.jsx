import {
  DeleteFilled,
  EyeOutlined,
  LoadingOutlined,
  LockOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Popconfirm,
  Row,
  Select,
  Skeleton,
  Space,
  Spin,
  Table,
  Tag,
} from "antd";
const { TextArea } = Input;
const { Search } = Input;
import React, { useEffect, useRef, useState } from "react";
import Skelton from "../Components/Common/Skelton";
import {
  createDocumentsForProjectDetails,
  getAllCategory,
  getAllProjects,
  getIndividualCategoryFlat,
  getSingleCategory,
  updateIetIndividualCategoryFlat,
} from "../dbconfig";
import Dashboard_Heading from "./Dashboard_Heading";
import { ProgressSpinner } from "primereact/progressspinner";
import { defaultForm } from "./utils";
import { async } from "@firebase/util";
import { useParams } from "react-router-dom";
const text = "Are you sure to delete this task?";
const description = "Delete the task";

const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;
const Dashboard_Ready = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skltn, setSkltn] = useState(false);
  const [updateBtn, setUpdateBtn] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [projectForm, setProjectForm] = useState(defaultForm);
  const [categoryForm, setCategoryForm] = useState("");
  const [btnLoader, setBtnLoader] = useState(false);
  const [allCatetgory, setAllCatetgory] = useState([]);
  const [allProjects, setAllProject] = useState([]);
  const param = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllCategory();
        const newArr = res.map((e) => {
          return {
            value: e.categoryName,
            label: e.categoryName,
          };
        });
        setAllCatetgory(newArr);
      } catch (error) {}
    };
    const fetchAllProject = async () => {
      setSkltn(true);

      try {
        let res = await getSingleCategory("project_details", "Ready Project");
        console.log(res);
        setSkltn(false);
        if (res) {
          setAllProject(res);
        }
      } catch (error) {}
    };
    fetchAllProject();
    fetchData();
  }, []);
  const showModal = () => {
    setUpdateBtn(false);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    formRef.current?.resetFields();
  };

  const onFinish = async (values) => {
    setBtnLoader(true);
    try {
      await createDocumentsForProjectDetails(values);
      setBtnLoader(false);
      setIsModalOpen(false);
    } catch (error) {}
  };

  const onSearch = () => {};
  const formRef = useRef(null);
  const projectOnView = async ({ id }) => {
    setUpdateBtn(true);
    setIsModalOpen(true);
    try {
      let res = await getIndividualCategoryFlat(id);
      const {
        address,
        category,
        details,
        estimatedCompletionDate,
        flatSize,
        landArea,
        launchDate,
        location,
        numberofBuildingBlocks,
        numberofFloor,
        projectType,
        rajukApprovalNo,
        rajukpprovalDate,
        status,
        subTitle,
        title,
        slug,
      } = res;
      formRef.current?.setFieldsValue({
        address,
        category,
        details,
        estimatedCompletionDate,
        flatSize,
        landArea,
        launchDate,
        location,
        numberofBuildingBlocks,
        numberofFloor,
        projectType,
        rajukApprovalNo,
        rajukpprovalDate,
        status,
        subTitle,
        title,
        slug,
      });
      setUpdateId(id);
    } catch (error) {}
  };
  const confirm = (id) => {
    setAllProject((data) => {
      return data.filter((e) => e.id != id);
    });
  };

  const onUpdateData = async (id) => {
    setBtnLoader(true);
    let res = formRef.current?.getFieldsValue();
    try {
      await updateIetIndividualCategoryFlat({ ...res, id: updateId });
      setBtnLoader(false);
      setIsModalOpen(false);
    } catch (error) {
      setBtnLoader(false);
    }
  };

  return (
    <div>
      {" "}
      <div className="dashboard-project-container">
        <Dashboard_Heading
          heading="All Projects"
          subheading="Add or update your projects"
        />
        <div className="dashboard-projects ready">
          <button className="projectBtn" onClick={showModal}>
            {" "}
            <PlusOutlined /> Add Project
          </button>
          <Space direction="vertical" style={{ float: "right" }}>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{}}
            />
          </Space>
          <div className="tableCards">
            <div className="tableCardsHeader">
              <div className="tableSingleCard head">
                <span className="slno">SL. NO</span>
                <span>PROJECT NAME</span>
                <span>LOCATION</span>
                <span>AREA (KATHA)</span>
                <span>TYPE</span>
                <span>STATUS</span>
                <span>ACTION</span>
              </div>
            </div>

            {skltn ? (
              <Skelton />
            ) : (
              allProjects &&
              allProjects.map((e, i) => (
                <div className="tableSingleCard" key={i + 1}>
                  <span className="slno">{i + 1}</span>
                  <span>{e.title}</span>
                  <span>{e.location}</span>
                  <span>{e.landArea}</span>
                  <span>{e.projectType}</span>
                  <span>
                    <Tag
                      style={{
                        width: "60%",
                        padding: "5px 0",
                        border: "1px dotted gray",
                      }}
                      color={
                        e.status == "READY"
                          ? "green"
                          : e.status == "Upcomming"
                          ? "yellow"
                          : e.status == "Ongoing"
                          ? "blue"
                          : e.status == "Available"
                          ? "red"
                          : "red"
                      }
                    >
                      {" "}
                      {e.status}
                    </Tag>
                  </span>
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
                    <Popconfirm
                      placement="topLeft"
                      title={text}
                      description={description}
                      onConfirm={() => confirm(e.id)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <DeleteFilled
                        style={{
                          cursor: "pointer",
                          fontSize: "20px",
                          color: "#cf1444",
                        }}
                      />
                    </Popconfirm>
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        <Modal
          onCancel={handleCancel}
          title="Add a project"
          open={isModalOpen}
          centered
          width={750}
          footer={false}
        >
          <Form
            layout="vertical"
            form={form}
            ref={formRef}
            style={{ marginTop: "20px" }}
            onFinish={onFinish}
          >
            <Row gutter={[24, 0]}>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Form.Item value="123" label="Project Name" name="title">
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Project Name"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Form.Item label="Sub Title" name="subTitle">
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Form.Item label="Category" name="category">
                  <Select
                    style={{ width: "100%" }}
                    defaultValue="Select Category"
                    options={allCatetgory}
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

              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Form.Item label="Details" name="details">
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Form.Item label="Location" name="location">
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Form.Item label="Address" name="address">
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Form.Item label="Project Type" name="projectType">
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Form.Item
                  label="Number of Building Blocks"
                  name="numberofBuildingBlocks"
                >
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Form.Item label="Land Area (Katha)" name="landArea">
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Form.Item label="Flat Size" name="flatSize">
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Form.Item label="Number of Floor" name="numberofFloor">
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Form.Item label="Launch Date" name="launchDate">
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Form.Item label="Rajuk Aproval Date" name="rajukpprovalDate">
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Form.Item label="Rajuk Aproval No" name="rajukApprovalNo">
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Form.Item label="Status" name="status">
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <Form.Item
                  label="Estimated Completion Date"
                  name="estimatedCompletionDate"
                >
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <Form.Item label="Slug" name="slug">
                  <Input placeholder="Write product slug" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              {updateBtn ? (
                <Button
                  type="primary"
                  className="login-form-button"
                  onClick={onUpdateData}
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
                    "Update"
                  )}
                </Button>
              ) : (
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
                    "Save"
                  )}
                </Button>
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard_Ready;
