import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import Tr from "../Components/Common/Tr";
import { Image, Modal, Tag } from "antd";
import Layout from "../Layout";
import { getSingleCategorySingleDetails } from "../dbconfig";
import img from "/logo.svg";
import { Viewer, Document } from "@react-pdf-viewer/core";
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import styles
const pdfjs = await import("pdfjs-dist/build/pdf");
const pdfjsWorker = await import("pdfjs-dist/build/pdf.worker.entry");

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import OnPageLoaderTwo from "../Components/Common/OnPageLoaderTwo";
import Loader from "../Components/Common/Loader";

export const FlatsDetails = () => {
  const param = useParams();
  const [flatDetails, setFlatDetails] = useState("");
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    async function fetchData() {
      try {
        let res = await getSingleCategorySingleDetails(
          "project_details",
          param.slug
        );
        setFlatDetails(res);
        setLoader(false);
      } catch (error) {}
    }
    fetchData();
  }, []);
  console.log(flatDetails);
  const {
    title,
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
    slug,
    commonFacilities,
    imageUrls,
    totalFlat,
    flatAvailable,
    totalOffice,
    officeAvailable,
    totalShop,
    shopAvailable,
    pdfUrl,
  } = flatDetails;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [visible, setVisible] = useState(false);
  return (
    <Layout>
      <div className="flatsdetails">
        <div className="container">
          <div class="grid">
            <div class="col-12 md:col-5 lg:col-5">
              {imageUrls?.[0] ? (
                <div className="image">
                  {/* <img src={imageUrls?.[0] ? imageUrls?.[0] : img} alt="building" /> */}
                  <Image
                    preview={{
                      visible: false,
                    }}
                    width={"100%"}
                    src={imageUrls?.[0] ? imageUrls?.[0] : img}
                    onClick={() => setVisible(true)}
                  />

                  <Image
                    preview={{
                      visible: false,
                    }}
                    style={{ marginRight: "10px" }}
                    width={135}
                    src={imageUrls?.[1]}
                    onClick={() => setVisible(true)}
                  />
                  <Image
                    preview={{
                      visible: false,
                    }}
                    style={{ marginRight: "10px" }}
                    width={135}
                    src={imageUrls?.[2]}
                    onClick={() => setVisible(true)}
                  />
                  <Image
                    preview={{
                      visible: false,
                    }}
                    style={{ marginRight: "10px" }}
                    width={135}
                    src={imageUrls?.[3]}
                    onClick={() => setVisible(true)}
                  />

                  {/* <div className="image-gallary">
                              {imageUrls?.map((e) => (
                                <>
                                  <img className="gallaryimg" src={e} alt="building" />
                                </>
                              ))}
                            </div> */}

                  <div
                    style={{
                      display: "none",
                    }}
                  >
                    <Image.PreviewGroup
                      preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                      }}
                    >
                      {imageUrls?.map((e) => (
                        <>
                          <Image src={e} />
                        </>
                      ))}
                    </Image.PreviewGroup>
                  </div>
                </div>
              ) : (
                <OnPageLoaderTwo number={1} />
              )}
            </div>

            {loader ? (
              <OnPageLoaderTwo number={1} />
            ) : (
              <div
                class="col-12 md:col-7 lg:col-7"
                style={{ paddingTop: "25px" }}
              >
                <p style={{ margin: "0", color: "#957B5F" }}>{subTitle}</p>
                <h1 style={{ fontWeight: "700", color: "#957B5F" }}>{title}</h1>
                <p
                  style={{
                    marginTop: "20px",
                    color: "#353535",
                    fontSize: "15px",
                  }}
                >
                  {details}
                </p>
                <div className="tags"></div>
                <div className="table">
                  <table>
                    <thead>
                      <tr>
                        <th>Option</th>
                        <th>Description</th>
                      </tr>
                    </thead>

                    <tbody>
                      <Tr left="Location" right={location} />
                      <Tr left="Address" right={address} />
                      <Tr
                        left="Land Area"
                        right={landArea + " " + "(Decimal)"}
                      />
                      <Tr left="Project Type" right={projectType} />
                      <Tr
                        left="Number of Building Blocks"
                        right={numberofBuildingBlocks}
                      />
                      <Tr left="Flat Size" right={flatSize} />
                      <Tr left="Number of Floor" right={numberofFloor} />
                      <Tr left="Launch Date" right={launchDate} />
                      <Tr left="RAJUK Approval Date" right={rajukpprovalDate} />
                      <Tr left="Rajuk Approval No" right={rajukApprovalNo} />

                      <Tr
                        left="Status"
                        right={
                          <Tag
                            color={
                              status == "READY"
                                ? "green"
                                : status == "Upcomming"
                                ? "yellow"
                                : status == "Ongoing"
                                ? "blue"
                                : status == "Available"
                                ? "red"
                                : "red"
                            }
                          >
                            {status}
                          </Tag>
                        }
                        tr
                      />

                      <Tr
                        left="Common Facilities"
                        right={commonFacilities?.map((e) => (
                          <Tag color="#014a69">{e}</Tag>
                        ))}
                        tr
                      />
                    </tbody>
                  </table>
                  <div className="available-info">
                    <h3>Unit Information</h3>

                    <div className="unit-table">
                      <div className="unit-table-head">
                        <span> Type</span>
                        <span> Available Flat</span>
                        <span> Total</span>
                      </div>
                      <div className="unit-table-body">
                        <span> Flat</span>
                        <span> {flatAvailable}</span>
                        <span> {totalFlat}</span>
                      </div>
                      <div className="unit-table-body">
                        <span> Office</span>
                        <span> {officeAvailable}</span>
                        <span> {totalOffice}</span>
                      </div>
                      <div className="unit-table-body">
                        <span> Shop</span>
                        <span> {shopAvailable}</span>
                        <span> {totalShop}</span>
                      </div>
                    </div>
                  </div>

                  <div className="available-info">
                    <h3>Additional Information</h3>
                    <div className="tags">
                      <Tag
                        onClick={showModal}
                        style={{
                          fontSize: "16px",
                          padding: "5px 15px",
                          cursor: "pointer",
                        }}
                        color="#957B5F"
                      >
                        Floor Plan
                      </Tag>
                      <Tag
                        style={{
                          fontSize: "16px",
                          padding: "5px 15px",
                          cursor: "pointer",
                        }}
                        color="#014a69"
                      >
                        Present Status
                      </Tag>
                    </div>
                  </div>

                  <Modal
                    onCancel={handleCancel}
                    title="Add a project"
                    open={isModalOpen}
                    centered
                    width={800}
                    footer={false}
                  >
                    {pdfUrl && (
                      <Viewer
                        fileUrl={pdfUrl}
                        plugins={[defaultLayoutPluginInstance]}
                      />
                    )}
                  </Modal>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default FlatsDetails;
