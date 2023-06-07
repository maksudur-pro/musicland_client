import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Music Land | Home</title>
      </Helmet>
      <div className="relative">
        <img src="https://i.ibb.co/TRj0sYx/6997674-1.jpg" alt="" />
        <div className="text-end absolute top-0 right-0 lg:top-32 lg:right-8 p-3 lg:p-0 m-3 lg:m-0">
          <h1 className="text-xl leading-5 lg:text-7xl lg:tracking-widest font-extrabold uppercase text-[#f1961f]">
            classes
            <br />
            for all
            <br />
            ages
          </h1>
          <h2 className="text-[4px] lg:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum.
          </h2>
          <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-[#f1961f] lg:mt-4">
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
