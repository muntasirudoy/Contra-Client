import React, { useEffect, useState, useReducer } from "react";

import { PanelMenu } from "primereact/panelmenu";

import { Chip } from "primereact/chip";
import Card from "../Components/Category/card";
import AvailableData from "../Components/Common/AvailableData";
import axios from "axios";
import { Link } from "react-router-dom";
import AvialableFlatsText from "../Components/Common/AvialableFlatsText";
import Layout from "../Layout";
import { getSingleCategory } from "../dbconfig";
import img from "/b1.jpg";
import Skelton from "../Components/Common/Skelton";
import OnPageLoader from "../Components/Common/OnPageLoader";
import OnPageLoaderTwo from "../Components/Common/OnPageLoaderTwo";
import NoFlats from "../Components/Common/NoFlats";
export const AvialableFlats = () => {
  const [pdata, setPdata] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    async function fetchData() {
      try {
        let res = await getSingleCategory(
          "project_details",
          "Available Project"
        );
        setLoader(false);
        setPdata(res);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div class="grid">
        <div class="col-12 md:col-12 lg:col-12">
          <div className="grid">
            {loader ? (
              <OnPageLoaderTwo number={window.innerWidth < 576 ? 1 : 3} />
            ) : (
              pdata?.length > 0 ?
                pdata.map((data) => (
                  <div className="col-12 md:col-4 lg:col-4">
                    <div className="avialablecard">
                      <Link to={`/projects/available-flats/${data.slug}`}>
                        <Card img={data.imageUrls?.[0]} title={data.title} />
                      </Link>
                    </div>
                  </div>
                )) : <NoFlats />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default AvialableFlats;
