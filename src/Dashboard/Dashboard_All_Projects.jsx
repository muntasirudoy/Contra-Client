import {
  DeleteFilled,
  EyeOutlined,
  LoadingOutlined,
  LockOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Modal,
  Popconfirm,
  Row,
  Select,
  Space,
  Spin,
  Tag,
  Upload,
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
import UploadImage from "../Components/Common/UploadImage";
import { Link, Outlet, useNavigate } from "react-router-dom";

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
  const [statusFile, setStatusFile] = useState([]); // progress
  const [previewStatus, setPreviewStatus] = useState([]);
  const [percent, setPercent] = useState(0); // Handle file upload event and update state
  const [preview, setPreview] = useState([]);
  const [pdf, setPdf] = useState("");
  const navigate = useNavigate()
  const [floorFile, setFloorFile] = useState({
    floorFileName: "Select Floor Plan (PDF)",
    floorFileUrl: "",
  })
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
      } catch (error) { }
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
    } catch (error) { }
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

    const statusImgUrls = await Promise.all(
      statusFile.map((image) => handleUploadStatusImg(image))
    ).catch((err) => {
      console.log(err);
      return;
    });

    let obj = {
      ...values,
      imageUrls: imgUrls,
      statusImgUrls: statusImgUrls,
      floorFile: {
        floorFileUrl: pdfUrl,
        floorFileName: pdf.name,
      }
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

  const onSearch = () => { };
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
        floorFile,
        statusImgUrls,
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
      setPreviewStatus(statusImgUrls ? statusImgUrls : []);
      setUpdateId(id);
      setFloorFile(floorFile)
    } catch (error) { }
  };
  const confirm = async ({ id }) => {
    try {
      await deleteProject(id.id);
      setAllProject((data) => {
        return data.filter((e) => e.id != id);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const onUpdateData = async (id) => {
    setBtnLoader(true);
    let res = formRef.current?.getFieldsValue();
    let imgUrls;
    pdfUrl;
    statusImgUrls

    if (file.length > 0) {
      imgUrls = await Promise.all(
        file.map((image) => handleUploadImage(image))
      ).catch((err) => {
        console.log(err);
        return;
      });
    }
    if (pdfUrl.length > 0) {
      pdfUrl = await handleUploadPdf(pdf).catch((err) => {
        console.log(err);
        return;
      });
    }

    if (statusFile.length > 0) {
      statusImgUrls = await Promise.all(
        statusFile.map((image) => handleUploadStatusImg(image))
      ).catch((err) => {
        console.log(err);
        return;
      });
    }

    let obj = {
      ...res,
      imageUrls: imgUrls,
      statusImgUrls: statusImgUrls,
      floorFile: {
        floorFileUrl: pdfUrl,
        floorFileName: pdf.name,
      }
    };

    try {
      await updateIetIndividualCategoryFlat({ ...obj, id: updateId });
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
          <Link to="/dashboard/dashboard-projects/add-project">
            <button className="projectBtn">
              <PlusOutlined /> Add Project
            </button>
          </Link>
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
                    <Link style={{ fontSize: "16px" }} to={`/dashboard/dashboard-projects/edit/${e.id}`}>
                      View
                    </Link>
                    <Popconfirm
                      placement="topLeft"
                      title={text}
                      description={description}
                      onConfirm={() => confirm(e)}
                      okText="Yes"
                      cancelText="No"
                    >
                      Delete
                    </Popconfirm>
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_All_Projects;
