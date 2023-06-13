import React from "react";
import { Helmet } from "react-helmet-async";
import Contact from "./Contact";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Music Land | Home</title>
      </Helmet>
      <Gallery></Gallery>
      <Contact></Contact>
    </div>
  );
};

export default Home;
