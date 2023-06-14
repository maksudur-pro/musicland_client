import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const PopularClasses = () => {
  const [topClasses, setTopClasses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/sortClasses")
      .then((response) => {
        setTopClasses(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving sorted classes:", error);
      });
  }, []);

  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };
  return (
    <>
      <div className="mx-auto text-center md:w-4/12 my-6 p-8 lg:p-0">
        <h3 className="text-3xl uppercase border-b-4 font-bold py-4">
          popular classes
        </h3>
      </div>
      <div className="grid p-10 lg:p-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {topClasses.map((classItem) => (
          <motion.div
            variants={cardVariants}
            key={classItem._id}
            initial="initial"
            whileHover="hover"
            className="card bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-72 w-full"
                src={classItem.classImg}
                alt={classItem.courseName}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{classItem.courseName}</h2>
              <p>Instructor: {classItem.instructor_name}</p>
              <p>Enrolled Students: {classItem.totalEnrolled}</p>
              <p>Price: ${classItem.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
