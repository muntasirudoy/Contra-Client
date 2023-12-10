import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import Heading from "../Components/Common/Heading";
import { Link, useLocation } from "react-router-dom";
import AvialableFlats from "./AvialableFlats";
import OngoingProjects from "./OngoingProjects";
import UpcomingProjects from "./UpcomingProjects";
import AllFlats from "./AllFlats";
import ReadyProjects from "./ReadyProjects";
import { Helmet } from "react-helmet";
import Tabs from 'react-responsive-tabs';

// IMPORTANT you need to include the default styles
import 'react-responsive-tabs/styles.css';
const content = "Discover our impressive portfolio of completed projects at Mahmud Builders. From residential to commercial, our skilled team has successfully delivered exceptional construction projects. Explore our innovative designs, quality craftsmanship, and attention to detail. Trust us to bring your vision to life. Contact us to discuss your next project."
const Projects = () => {
  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get("redirect");
  const [activeKey, setActiveKey] = useState("1");
  useEffect(() => {
    setActiveKey(redirectUrl ? redirectUrl : "1");
  }, []);

  const items = [
    {
      key: "1",
      label: <Link to="./?redirect=1">All Projects</Link>,
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

  const keyChange = (key) => {
    setActiveKey(key);
  };

  const [tabPosition] = useState(window.innerWidth < 576 ? "top" : "left")


  function getTabs() {
    return items.map((item, index) => ({
      title: item.label,
      getContent: () => item.children,
      /* Optional parameters */
      key: index,
      tabClassName: 'tab',
      panelClassName: 'panel',
    }));
  }


  return (
    <Layout>
      <Helmet>
        <title>MBL | Projects</title>
        <meta name="description" content={content} />
      </Helmet>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="choose-heading">
          <Heading heading="Our Projects" />
        </div>
        <div className="projects grid">
          <div className="col-12 md:col-12 lg:col-12">
          <Tabs items={getTabs()} />
            {/* <Tabs
              centered
              size="large"
              activeKey={activeKey}
              items={items}
              onChange={keyChange}
              tabPosition={tabPosition}

            /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
