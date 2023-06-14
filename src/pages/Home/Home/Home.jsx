import React from "react";
import { Helmet } from "react-helmet-async";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Slider from "./slider";
import Support from "./Support";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Music Land | Home</title>
      </Helmet>
      <Slider></Slider>
      <Gallery></Gallery>
      <Support />
      <Contact></Contact>
    </div>
  );
};

export default Home;
