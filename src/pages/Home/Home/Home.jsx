import React from "react";
import { Helmet } from "react-helmet-async";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Slider from "./slider";
import Support from "./Support";
import PopularClasses from "./PopularClasses";
import PopularInstructor from "./PopularInstructor";
import useAuth from "../../../Hooks/useAuth";
import LazyLoad from "react-lazy-load";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const Home = () => {
  const { loading } = useAuth();

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (loading) {
    return (
      <div className="h-screen bg-white">
        <LazyLoad
          className="flex justify-center items-center h-full"
          height={762}>
          <img
            className="h-16 w-16"
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt=""
          />
        </LazyLoad>
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        <title>Music Land | Home</title>
      </Helmet>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
      <Gallery></Gallery>
      <Support />
      <Contact></Contact>
    </div>
  );
};

export default Home;
