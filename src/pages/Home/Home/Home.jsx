import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Music Land | Home</title>
      </Helmet>

      <section className="bg-indigo-900 text-white py-20">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Summer Camp</h1>
          <p className="text-xl mb-8">Discover the Joy of Playing Music</p>
          <button className="bg-white text-indigo-900 px-6 py-3 rounded-full shadow-md font-semibold hover:bg-indigo-800">
            Enroll Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
