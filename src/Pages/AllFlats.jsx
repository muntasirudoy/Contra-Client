import React, { useEffect, useState, useReducer } from "react";

import { PanelMenu } from "primereact/panelmenu";

import { Chip } from "primereact/chip";
import Card from "../Components/Category/card";
import AvailableData from "../Components/Common/AvailableData";
import axios from "axios";
import { Link } from "react-router-dom";
import AvialableFlatsText from "../Components/Common/AvialableFlatsText";
import Layout from "../Layout";
import { getAllProjects, getSingleCategory } from "../dbconfig";
import img from "/b1.jpg";
import Skelton from "../Components/Common/Skelton";
import OnPageLoader from "../Components/Common/OnPageLoader";
import OnPageLoaderTwo from "../Components/Common/OnPageLoaderTwo";
export const AllFlats = () => {
  const [pdata, setPdata] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {


    fetchAllProject();

  }, []);
  const fetchAllProject = async () => {
    setLoader(true);
    try {
      const res = await getAllProjects();
      setLoader(false);
      if (res) {
        setPdata(res);
        console.log(res);
      }
    } catch (error) {}
  };
  return (
    <>
      <div class="grid">
        <div class="col-12 md:col-12 lg:col-12">
          <div className="grid">
            {loader ? (
              <OnPageLoaderTwo number={3} />
            ) : (
              pdata &&
              pdata.map((data) => (
                <div className="col-12 md:col-4 lg:col-4">
                  <div className="avialablecard">
                    <Link to={`/projects/available-flats/${data.slug}`}>
                      <Card img={data.imageUrls?.[0]} title={data.title} />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default AllFlats;
