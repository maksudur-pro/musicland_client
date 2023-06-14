import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser, FaEnvelope, FaChair, FaDollarSign } from "react-icons/fa"; // Import required icons
import useSelectClass from "../../../Hooks/useSelectClass";
import { Helmet } from "react-helmet-async";

const EnrolledClass = () => {
  const [classes] = useSelectClass();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  return (
    <>
      <Helmet>
        <title>Student | Enrolled Class</title>
      </Helmet>
      <div className="mx-auto text-center md:w-4/12 mb-10">
        <h3 className="text-3xl uppercase border-b-4 font-bold py-4">
          Enrolled Class
        </h3>
      </div>
      <div className="gap-4 grid grid-cols-1 p-4 lg:grid-cols-3 mt-10">
        {classes.map((enrolledClass) =>
          enrolledClass.payment === true ? (
            <div
              key={enrolledClass._id}
              className="card w-72  bg-white rounded-lg shadow-md mb-4"
              data-aos="fade-up" // Apply fade-up animation to the card
            >
              <figure>
                <img
                  src={enrolledClass.classImg}
                  alt="Class"
                  className="w-full  object-cover rounded-t-lg"
                />
              </figure>
              <div className="p-4">
                <h2 className="text-lg font-bold">{enrolledClass.className}</h2>
                <p className="flex items-center text-gray-500 mb-2">
                  <FaUser className="mr-2" /> Instructor:{" "}
                  {enrolledClass.instructorName}
                </p>
                <p className="flex items-center text-gray-500 mb-2">
                  <FaEnvelope className="mr-2" /> Email: {enrolledClass.email}
                </p>
                <p className="flex items-center text-gray-500 mb-2">
                  <FaChair className="mr-2" /> Seats: {enrolledClass.seats}
                </p>
                <p className="flex items-center text-gray-500 mb-2">
                  <FaDollarSign className="mr-2" /> Price: $
                  {enrolledClass.price}
                </p>
                <div className="flex justify-end">
                  <button className="btn  text-white bg-[#f1961f] mb-2 hover:bg-[#f59d2a]">
                    Open
                  </button>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default EnrolledClass;
