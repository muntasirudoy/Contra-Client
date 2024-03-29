import React from 'react'
import Dashboard_Heading from './Dashboard_Heading'
import { LoadingOutlined, LockOutlined } from '@ant-design/icons'
import { Button, Checkbox, Col, Form, Input, Row, Select, Spin } from 'antd'
import { useRef } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllCategory, getIndividualCategoryFlat, updateIetIndividualCategoryFlat } from '../dbconfig'
import UploadImage from '../Components/Common/UploadImage'
import TextArea from 'antd/es/input/TextArea'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { useEffect } from 'react'

import { sha1 } from 'crypto-hash'
import axios from 'axios'
const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;
const Dashboard_Edit_Project = () => {
    const formRef = useRef(null);
    const [form] = Form.useForm();
    const [btnLoader, setBtnLoader] = useState(false);
    const [skltn, setSkltn] = useState(false);
    const [updateBtn, setUpdateBtn] = useState(false);
    const [updateId, setUpdateId] = useState("");
    const [allCatetgory, setAllCatetgory] = useState([]);
    const [images, setImages] = useState([])
    const [projectImages, setProjectImages] = useState([])
    const [statusImages, setStatusImages] = useState([])
    const [pdf, setPdf] = useState([])
    const param = useParams()


    const onFinish = async (value) => {
        console.log(value);
        setBtnLoader(true);

        let obj = {
            ...value,
            imageUrls: projectImages?.map((img) => {
                return {
                    url: img.url,
                    id: img.public_id
                }
            }),
        };
        try {
            await updateIetIndividualCategoryFlat({ ...obj, id: updateId });
            setBtnLoader(false);
        } catch (error) {
            setBtnLoader(false);
        }
    };



    useEffect(() => {
        projectOnView(param.id)
        fetchCategoryList();
    }, [images])

    // fetch Category
    const fetchCategoryList = async () => {
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

    // single project view
    const projectOnView = async (id) => {
        setUpdateBtn(true);
        try {
            let res = await getIndividualCategoryFlat(id);
            console.log(res);
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
            setProjectImages(imageUrls)
            setPreview(imageUrls ? imageUrls : []);
        } catch (error) { }
    };





    const handleRemoveImage = async (val) => {
        let newArr = projectImages.filter((e) => e.id !== val.id);
        const generateSHA1 = async (data) => {
            return await sha1(data)
        }
        const generateSignature = (publicId, apiSecret) => {
            const timestamp = new Date().getTime();
            return `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
        };

        const cloudName = "dxf9h9jqf";
        const timestamp = new Date().getTime();
        const apiKey = '137384169193345';
        const apiSecret = 'NSgwzaWoBFa0t1B-1cp-GXfWn1A'
        const signature = await generateSHA1(generateSignature(val.public_id, apiSecret));
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;
        try {
            console.log(val, signature, apiKey, timestamp);
            const response = await axios.post(url, {
                public_id: val.public_id,
                signature: signature,
                api_key: apiKey,
                timestamp: timestamp,
            });
            console.log("hello 21");
            setProjectImages(newArr)
            console.error(response);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <div className="dashboard-project-container">
                <Dashboard_Heading
                    heading="Add New Project"
                    subheading="Add or update your projects"
                />
                <div style={{ display: "flex" }}>
                    <div className="preview-images">

                        {projectImages?.map((prev, index) => (
                            <div className="image-with-overlay">
                                <img
                                    key={index}
                                    src={prev.url}
                                    alt="Image Preview"
                                    className="preview-img"
                                />
                                <div className="remove-overlay">
                                    <RiDeleteBin2Fill onClick={() => handleRemoveImage(prev)} />
                                </div>
                            </div>
                        ))}

                        <div className="preview-img-select" style={{ background: "rgba(233, 234, 255, 0.716)" }}>
                            <UploadImage setImages={setProjectImages} />

                            <span style={{ fontWeight: "600", color: "darkblue" }}> Upload Project image</span>

                        </div>
                    </div>

                    <div className="preview-images">
                        {statusImages?.map((prev, index) => (
                            <div className="image-with-overlay">
                                <img
                                    key={index}
                                    src={prev.url}
                                    alt="Image Preview"
                                    className="preview-img"
                                />
                                <div className="remove-overlay">
                                    <RiDeleteBin2Fill />
                                </div>
                            </div>
                        ))}

                        <div className="preview-img-select" style={{ background: "rgba(241, 255, 233, 0.716)" }}>
                            <UploadImage active="statusImg" setImages={setStatusImages} />

                            <span style={{ fontWeight: "600", color: "green" }}>   Upload Status image</span>
                        </div>
                    </div>

                    <div className="preview-images">
                        {pdf?.map((prev, index) => (
                            <div className="image-with-overlay" >
                                <img
                                    key={index}
                                    src={"https://res.cloudinary.com/dxf9h9jqf/image/upload/c_limit,h_120,w_120/v1681921749/sxemlx36odwqs3gqqo8r.jpg"
                                    }
                                    alt="Image Preview"
                                    className="preview-img"
                                />
                                <p>{prev.name}</p>
                                <div className="remove-overlay">
                                    <RiDeleteBin2Fill />
                                </div>
                            </div>
                        ))}

                        <div className="preview-img-select" style={{ background: "rgba(255, 233, 233, 0.716)" }}>
                            <UploadImage option="pdf" setImages={setPdf} />
                            <span style={{ fontWeight: "600", color: "darkred" }}> Upload Floor Plan (pdf)</span>
                        </div>
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
                                "Update"
                            )}
                        </Button>

                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Dashboard_Edit_Project



{/* <div className="projects-image-area">
            <h3 style={{ padding: "10px 15px", marginTop: "10px" }}>Project Image</h3>
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

            <h3 style={{ padding: "10px 15px", marginTop: "10px" }}>Present Status ( jpg/png )</h3>
            <div className="preview-images">
              {previewStatus.map((prev, index) => (
                <div className="image-with-overlay">
                  <img
                    key={index}
                    src={prev}
                    alt="Image Preview"
                    className="preview-img"
                  />
                  <div className="remove-overlay">
                    <RiDeleteBin2Fill
                      onClick={() => handleRemoveStatusImage(index)}
                    />
                  </div>
                </div>
              ))}
              <div className="preview-img-select" onClick={handleStatusButtonClick}>

                <BiUpload />
                <span>Select file</span>
              </div>
              <input
                type="file"
                multiple
                ref={statusRef}
                style={{ display: "none" }}
                onChange={handleChangeStatus}
              />
            </div>


            <div className="pdf-section">
              <span>{floorFile.floorFileName}</span>
              <input type="file" onChange={handleChangePdf} ref={floorRef} />
            </div>
                </div> */}
