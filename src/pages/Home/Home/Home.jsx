import React from "react";
import { Helmet } from "react-helmet-async";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Music Land | Home</title>
      </Helmet>

      <Contact></Contact>
    </div>
  );
};

export default Home;
