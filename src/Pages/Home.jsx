import Layout from "../Layout";
import React from "react";
import About from "../Components/About/About";
import { Banner } from "../Components/Banner/Banner";
import Category from "../Components/Category/Category";
import Chooseus from "../Components/CooseUs/Chooseus";
import Trusted from "../Components/Trusted/Trusted";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Category />
      <About />
      <Chooseus />
      <Trusted />
    </Layout>
  );
};

export default Home;
