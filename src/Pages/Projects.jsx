import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Card, Tabs } from "antd";
import Meta from "antd/es/card/Meta";
import Heading from "../Components/Common/Heading";
import { Link, useLocation } from "react-router-dom";
import AvialableFlats from "./AvialableFlats";
import OngoingProjects from "./OngoingProjects";
import UpcomingProjects from "./UpcomingProjects";
import AllFlats from "./AllFlats";
import ReadyProjects from "./ReadyProjects";
import { Helmet } from "react-helmet";

const content = "Discover our impressive portfolio of completed projects at Mahmud Builders. From residential to commercial, our skilled team has successfully delivered exceptional construction projects. Explore our innovative designs, quality craftsmanship, and attention to detail. Trust us to bring your vision to life. Contact us to discuss your next project."
const Projects = () => {
  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get("redirect");
  console.log(redirectUrl);

  const [activeKey, setActiveKey] = useState("1");
  useEffect(() => {
    setActiveKey(redirectUrl ? redirectUrl : "1");
  }, []);

  const items = [
    {
      key: "1",
      label: <Link to="./?redirect=1">All</Link>,
      children: <AllFlats />,
    },
    {
      key: "2",
      label: <Link to="./?redirect=2">Ready Projects</Link>,
      children: <ReadyProjects />,
    },
    {
      key: "3",
      label: <Link to="./?redirect=3">Ongoing Projects</Link>,
      children: <OngoingProjects />,
    },
    {
      key: "4",
      label: <Link to="./?redirect=4">Upcomming Projects</Link>,
      children: <UpcomingProjects />,
    },
    {
      key: "5",
      label: <Link to="./?redirect=5">Completed Projects</Link>,
      children: <AvialableFlats />,
    },
  ];

  console.log(activeKey);
  const keyChange = (key) => {
    setActiveKey(key);
  };
  return (
    <Layout>
      <Helmet>
        <title>MBL | Projects</title>
        <meta name="description" content={content} />
      </Helmet>
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="choose-heading">
          <Heading heading="Our Projects" />
        </div>
        <div className="projects grid">
          <div className="col-12 md:col-12 lg:col-12">
            <Tabs
              size="large"
              activeKey={activeKey}
              items={items}
              onChange={keyChange}
              centered
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
