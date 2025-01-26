import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import LazyLoad from "react-lazy-load";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";

const AllInstructor = () => {
  const [instructors, setInstructors] = useState([]);
  const { loading } = useAuth();

  useEffect(() => {
    axios
      .get("https://music-land-server.vercel.app/instructors")
      .then((response) => setInstructors(response.data))
      .catch((error) => console.log(error));
  }, []);

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
    <>
      <Helmet>
        <title>Music Land | Instructors</title>
      </Helmet>
      <div className="mx-auto text-center md:w-4/12 mb-10">
        <h3 className="text-3xl uppercase border-b-4 font-bold py-4">
          All Instructors
        </h3>
      </div>
      <div className="grid p-10 lg:p-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:py-20">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={instructor.photo}
                className="h-72 w-full"
                alt="Teacher"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructor.name}</h2>
              <p>{instructor.email}</p>
              <p>
                Lorem ipsum dolor sit amet, con amit sectetur adipisicing elit.
              </p>
              <div className="card-actions">
                <div className="badge bg-[#f1961f] hover:bg-[#e99e3c] p-4 cursor-pointer text-white badge-outline">
                  View Details
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllInstructor;
