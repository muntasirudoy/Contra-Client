import {
  DeleteFilled,
  EyeOutlined,
  LoadingOutlined,
  LockOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Modal,
  Popconfirm,
  Radio,
  Row,
  Select,
  Space,
  Spin,
  Tag,
} from "antd";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
const { TextArea } = Input;
const { Search } = Input;
import React, { useEffect, useRef, useState } from "react";
import Skelton from "../Components/Common/Skelton";
import {
  createDocumentsForProjectDetails,
  deleteProject,
  getAllCategory,
  getAllProjects,
  getIndividualCategoryFlat,
  storage,
  updateIetIndividualCategoryFlat,
} from "../dbconfig";
import Dashboard_Heading from "./Dashboard_Heading";
import { BiUpload } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";

const text = "Are you sure to delete this task?";
const description = "Delete the task";

const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;
const Dashboard_All_Projects = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skltn, setSkltn] = useState(false);
  const [updateBtn, setUpdateBtn] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [btnLoader, setBtnLoader] = useState(false);
  const [allCatetgory, setAllCatetgory] = useState([]);
  const [allProjects, setAllProject] = useState([]);
  const [file, setFile] = useState([]); // progress
  const [percent, setPercent] = useState(0); // Handle file upload event and update state
  const [preview, setPreview] = useState([]);
  const [pdf, setPdf] = useState("");

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

    fetchAllProject();
    fetchData();
  }, []);

  const fetchAllProject = async () => {
    setSkltn(true);
    try {
      const res = await getAllProjects();
      setSkltn(false);
      if (res) {
        setAllProject(res);
        console.log(res);
      }
    } catch (error) {}
  };

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
    const imgUrls = await Promise.all(
      file.map((image) => handleUploadImage(image))
    ).catch((err) => {
      console.log(err);
      return;
    });

    const pdfUrl = await handleUploadPdf(pdf).catch((err) => {
      console.log(err);
      return;
    });

    let obj = {
      ...values,
      imageUrls: imgUrls,
      pdfUrl: pdfUrl,
    };
    try {
      await createDocumentsForProjectDetails(obj);
      setBtnLoader(false);
      setIsModalOpen(false);
      fetchAllProject();
    } catch (error) {
      setBtnLoader(false);
    }
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
        imageUrls,
        totalFlat,
        commonFacilities,
        flatAvailable,
        totalOffice,
        officeAvailable,
        totalShop,
        shopAvailable,
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
        totalFlat,
        commonFacilities,
        flatAvailable,
        totalOffice,
        officeAvailable,
        totalShop,
        shopAvailable,
      });

      setPreview(imageUrls ? imageUrls : []);
      setUpdateId(id);
    } catch (error) {}
  };
  const confirm = async (id) => {
    setAllProject((data) => {
      return data.filter((e) => e.id != id);
    });
    try {
      await deleteProject(id);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onUpdateData = async (id) => {
    setBtnLoader(true);
    let res = formRef.current?.getFieldsValue();
    let obj = {
      ...res,
      imageUrls: preview,
    };

    try {
      await updateIetIndividualCategoryFlat({ ...obj, id: updateId });
      setBtnLoader(false);
      setIsModalOpen(false);
    } catch (error) {
      setBtnLoader(false);
    }
  }; // State to store uploaded file

  function handleChange(event) {
    const files = event.target.files;
    const newImages = [];
    const newPreviews = [];
    for (let i = 0; i < files.length; i++) {
      newImages.push(files[i]);
      newPreviews.push(URL.createObjectURL(files[i]));
    }
    setFile([...file, ...newImages]);
    setPreview([...preview, ...newPreviews]);
  }

  const handleUploadImage = async (image) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, "images/" + image.name);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const inputRef = useRef(null);
  const handleButtonClick = () => {
    inputRef.current.click();
  };
  const handleRemoveImage = (index) => {
    const newImages = [...file];
    const newPreviews = [...preview];
    newImages.splice(index, 1);
    newPreviews.splice(index, 1);
    setFile(newImages);
    setPreview(newPreviews);
  };
  const handleChangePdf = (event) => {
    setPdf(event.target.files[0]);
  };
  const handleUploadPdf = (pdf) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, "pdf/" + pdf.name);
      const uploadTask = uploadBytesResumable(storageRef, pdf);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Pdf Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Pdf Upload is paused");
              break;
            case "running":
              console.log("Pdf Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
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
          width={"80%"}
          footer={false}
        >
          <div className="projects-image-area">
            <div className="preview-images">
              {preview.map((prev, index) => (
                <div className="image-with-overlay">
                  <img
                    key={index}
                    src={prev}
                    alt="Image Preview"
                    className="preview-img"
                  />
                  <div className="remove-overlay">
                    <RiDeleteBin2Fill
                      onClick={() => handleRemoveImage(index)}
                    />
                  </div>
                </div>
              ))}
              <div className="preview-img-select" onClick={handleButtonClick}>
                <BiUpload />
                <span>Select file</span>
              </div>
              <input
                type="file"
                multiple
                ref={inputRef}
                style={{ display: "none" }}
                onChange={handleChange}
              />
            </div>

            <div className="preview-images">
              <input type="file" onChange={handleChangePdf} />
            </div>
          </div>
          <Form
            layout="vertical"
            form={form}
            ref={formRef}
            style={{ marginTop: "20px" }}
            onFinish={onFinish}
          >
            <Row gutter={[24, 0]}>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Form.Item
                  value="123"
                  label="Project Name"
                  name="title"
                  required
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Project Name"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Form.Item label="Short Location" name="subTitle" required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Form.Item label="Category" name="category" required>
                  <Select
                    style={{ width: "100%" }}
                    defaultValue="Select Category"
                    options={allCatetgory}
                  ></Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Form.Item label="Details" name="details" required>
                  <TextArea
                    rows={12}
                    placeholder="maxLength is 150"
                    maxLength={1000}
                    style={{ height: "150px" }}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item label="Total Flat" name="totalFlat" required>
                  <Input placeholder="Total Flat" type="number" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item label="Flat Available" name="flatAvailable" required>
                  <Input placeholder="Number of Flat Available" type="number" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item label="Total Office" name="totalOffice" required>
                  <Input placeholder="Number of Total Office" type="number" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item
                  label="Office Available"
                  name="officeAvailable"
                  required
                >
                  <Input
                    placeholder="Number of Office Available"
                    type="number"
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item label="Total Shop" name="totalShop" required>
                  <Input placeholder="Number of Total Shop" type="number" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item
                  label="Office Available"
                  name="shopAvailable"
                  required
                >
                  <Input placeholder="Number of Shop Available" type="number" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item label="Location" name="location" required>
                  <Input placeholder="Location" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item label="Address" name="address" required>
                  <Input placeholder="Address" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item label="Project Type" name="projectType" required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item
                  label="Number of Building Blocks"
                  name="numberofBuildingBlocks"
                  required
                >
                  <Input
                    placeholder="Number of Building Blocks"
                    type="number"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item label="Land Area (Katha)" name="landArea" required>
                  <Input placeholder="Land Area (Decimal)" type="number" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item label="Flat Size" name="flatSize">
                  <Input placeholder="Flat Size" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item
                  label="Number of Floor"
                  name="numberofFloor"
                  required
                >
                  <Input placeholder="Number of Floor" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item label="Launch Date" name="launchDate" required>
                  <Input placeholder="Launch Date" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item
                  label="Rajuk Aproval Date"
                  name="rajukpprovalDate"
                  required
                >
                  <Input placeholder="Rajuk Aproval Date" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item
                  label="Rajuk Aproval No"
                  name="rajukApprovalNo"
                  required
                >
                  <Input placeholder="Rajuk Aproval No" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item label="Status" name="status" required>
                  <Input placeholder="Status" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item
                  label="Estimated Completion Date"
                  name="estimatedCompletionDate"
                  required
                >
                  <Input placeholder="Estimated Completion Date" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Form.Item label="Slug" name="slug" required>
                  <Input placeholder="Write product slug" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Form.Item
                  name="commonFacilities"
                  label="Common Facilities"
                  required
                >
                  <Checkbox.Group>
                    <Row>
                      <Col span={8}>
                        <Checkbox
                          value="Car Parking"
                          style={{
                            lineHeight: "32px",
                          }}
                        >
                          Car Parking
                        </Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox
                          value="Lift"
                          style={{
                            lineHeight: "32px",
                          }}
                        >
                          Lift
                        </Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox
                          value="Generator"
                          style={{
                            lineHeight: "32px",
                          }}
                        >
                          Generator
                        </Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox
                          value="Sub-station"
                          style={{
                            lineHeight: "32px",
                          }}
                        >
                          Sub-station
                        </Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox
                          value="Guard Room"
                          style={{
                            lineHeight: "32px",
                          }}
                        >
                          Guard Room
                        </Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox
                          value="Driver's Waiting Room"
                          style={{
                            lineHeight: "32px",
                          }}
                        >
                          Driver's Waiting Room
                        </Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox
                          value="Community Space"
                          style={{
                            lineHeight: "32px",
                          }}
                        >
                          Community Space
                        </Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox
                          value="Fire Extinguisher"
                          style={{
                            lineHeight: "32px",
                          }}
                        >
                          Fire Extinguisher
                        </Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox
                          value="Prayer Room"
                          style={{
                            lineHeight: "32px",
                          }}
                        >
                          Prayer Room
                        </Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
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

export default Dashboard_All_Projects;
