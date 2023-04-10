import React, { useEffect, useState } from "react";

import { PanelMenu } from "primereact/panelmenu";

import { Chip } from "primereact/chip";
import Card from "../Components/Category/card";

import AvailableData from "../Components/Common/AvailableData";
import img from "/b1.jpg";
import Layout from "../Layout";
import OngoingProjectsText from "../Components/Common/OngoingProjectsText";
import { getSingleCategory } from "../dbconfig";
import { Link } from "react-router-dom";
import OnPageLoaderTwo from "../Components/Common/OnPageLoaderTwo";
import NoFlats from "../Components/Common/NoFlats";

export const OngoingProjects = () => {
  const [pdata, setPdata] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    async function fetchData() {
      try {
        let res = await getSingleCategory("project_details", "Ongoing");
        setPdata(res);
        setLoader(false);
      } catch (error) {}
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="avialableflats">
        <div class="grid">
          <div class="col-12 md:col-12 lg:col-12">
            <div className="grid">
              {loader ? (
                <OnPageLoaderTwo number={3} />
              ) : (
                pdata?.length > 0 ?
                pdata.map((data) => (
                  <div className="col-12 md:col-4 lg:col-4">
                    <div className="avialablecard">
                      <Link to={`/ongoing-projects/${data.slug}`}>
                        <Card img={data.imageUrls[0]} title={data.title} />
                      </Link>
                    </div>
                  </div>
                )): <NoFlats/>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OngoingProjects;
