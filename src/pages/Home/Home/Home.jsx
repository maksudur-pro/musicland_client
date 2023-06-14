import React from "react";
import { Helmet } from "react-helmet-async";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Slider from "./slider";
import Support from "./Support";
import PopularClasses from "./PopularClasses";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Music Land | Home</title>
      </Helmet>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <Gallery></Gallery>
      <Support />
      <Contact></Contact>
    </div>
  );
};

export default Home;
