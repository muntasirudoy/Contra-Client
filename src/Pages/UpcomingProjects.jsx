import React, { useEffect, useState } from "react";
import { PanelMenu } from "primereact/panelmenu";
import { Chip } from "primereact/chip";
import Card from "../Components/Category/card";
import img from "/b1.jpg";
import AvailableData from "../Components/Common/AvailableData";
import UpcomingProjectsText from "../Components/Common/UpcomingProjectsText ";
import Layout from "../Layout";
import { getSingleCategory } from "../dbconfig";
import { Link } from "react-router-dom";
import OnPageLoaderTwo from "../Components/Common/OnPageLoaderTwo";

export const UpcomingProjects = () => {
  const [pdata, setPdata] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    async function fetchData() {
      try {
        let res = await getSingleCategory("project_details", "Upcomming");
        setPdata(res);
        setLoader(false);
      } catch (error) {}
    }
    fetchData();
  }, []);
  return (
    <Layout>
      <div className="avialableflats">
        <div className="container">
          <UpcomingProjectsText />

          <div class="grid">
            <div class="col-12 md:col-3 lg:col-3">
              <Chip
                label="Filter by location"
                icon="pi pi-map"
                width="100%"
                className="mr-2 mb-2 py-2 px-4"
              />
              <PanelMenu model={AvailableData} style={{ width: "300px" }} />
            </div>
            <div class="col-12 md:col-9 lg:col-9">
              <div className="grid">
                {loader ? (
                  <OnPageLoaderTwo />
                ) : (
                  pdata &&
                  pdata.map((data) => (
                    <div className="col-12 md:col-4 lg:col-4">
                      <div className="avialablecard">
                        <Link to={`${data.slug}`}>
                          <Card img={img} title={data.title} />
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default UpcomingProjects;
