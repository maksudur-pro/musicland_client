import React from "react";
import { Helmet } from "react-helmet-async";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Slider from "./slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Music Land | Home</title>
      </Helmet>
      <Slider></Slider>
      <Gallery></Gallery>
      <Contact></Contact>
    </div>
  );
};

export default Home;
