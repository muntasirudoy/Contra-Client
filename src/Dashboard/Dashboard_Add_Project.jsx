import React from 'react'
import Dashboard_Heading from './Dashboard_Heading'
import { LoadingOutlined } from '@ant-design/icons'
import { Button, Checkbox, Col, Form, Row, Spin } from 'antd'
import { useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createDocumentsForProjectDetails, getAllCategory } from '../dbconfig'
import UploadImage from '../Components/Common/UploadImage'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { fetchCategories, formItems } from './utils'
import axios from 'axios'
const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;

import { sha1 } from 'crypto-hash'
const Dashboard_Add_Project = () => {
    const formRef = useRef(null);
    const [form] = Form.useForm();
    const [btnLoader, setBtnLoader] = useState(false);
    const [allCatetgory, setAllCatetgory] = useState([]);
    const [projectImages, setProjectImages] = useState([])
    const [statusImages, setStatusImages] = useState([])
    const [pdf, setPdf] = useState([])
    const navigate = useNavigate()


    const onFinish = async (values) => {
        setBtnLoader(true);
        toast('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        if (!projectImages.length > 0) {
            console.log("upload project img");
            setBtnLoader(false);
            return
        }
        if (!statusImages.length > 0) {
            console.log("upload status img");
            setBtnLoader(false);
            return
        }
        let obj = {
            ...values,
            imageUrls: projectImages?.map((img) => {
                return {
                    url: img.url,
                    id: img.public_id
                }
            }),
            statusUrls: statusImages?.map((img) => {
                return {
                    url: img.url,
                    id: img.public_id
                }
            }),
            pdfUrls: pdf?.map((img) => {
                return {
                    url: img.url,
                    id: img.public_id
                }
            })
        };



        try {
            await createDocumentsForProjectDetails(obj);
            setBtnLoader(false);
            navigate("../all-projects")
        } catch (error) {
            setBtnLoader(false);
        }
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
            setProjectImages(newArr)
            console.error(response);

        } catch (error) {
            console.error(error);
        }
    }





    useEffect(() => {
        fetchCategoryList()
    }, [])

    // fetch Category
    const fetchCategoryList = async () => {
        try {
            const res = await fetchCategories()
            setAllCatetgory(res);
        } catch (error) { }
    };



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
                        {formItems.map((item) => (
                            <Col {...item.colProps} key={item.name}>
                                <Form.Item
                                    label={item.label}
                                    name={item.name}
                                    rules={item.rules}
                                    hasFeedback={item.hasFeedback}
                                >
                                    {item.component}
                                </Form.Item>
                            </Col>
                        ))}
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Form.Item
                                label="Common Facilities"
                                name="commonFacilities"
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

                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>

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
                                        "Save"
                                    )}
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

            </div>
            <ToastContainer />
            {/* Same as */}
            <ToastContainer />
        </div>
    )
}

export default Dashboard_Add_Project



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
