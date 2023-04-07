import Layout from "../Layout";
import React from "react";
import About from "../Components/About/About";
import { Banner } from "../Components/Banner/Banner";
import Category from "../Components/Category/Category";
import Chooseus from "../Components/CooseUs/Chooseus";
import Trusted from "../Components/Trusted/Trusted";
import { Helmet } from "react-helmet";
const content =
  "Mahmud Builders is your Trusted Building Construction Partner. We offer top-notch building construction services for commercial and residential projects. Our skilled team of builders and architects delivers exceptional results. Contact us for reliable, innovative, and customized construction solutions. Build your dream project with us!";

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>MBL | Construction</title>
        <meta name="description" content={content} />
      </Helmet>
      <Banner />
      <Category />
      <React.Suspense fallback={"Loading Data..."}>
        <About />
      </React.Suspense>
      <React.Suspense fallback={"Loading Data..."}>
        <Chooseus />
      </React.Suspense>
      <Trusted />
    </Layout>
  );
};

export default Home;
