import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios
      .get("https://music-land-server.vercel.app/instructors")
      .then((response) => {
        setInstructors(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <div>
      <div className="mx-auto text-center md:w-4/12 my-10 p-8 lg:p-0">
        <h3 className="text-3xl uppercase border-b-4 font-bold py-4">
          popular Instructor
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 p-10 lg:p-0 gap-4">
        {instructors.slice(0, 6).map((instructor) => (
          <motion.div
            key={instructor._id}
            className="bg-white p-4 rounded-lg shadow-md relative overflow-hidden"
            variants={cardVariants}
            initial="initial"
            whileHover="hover">
            <img
              src={instructor.photo}
              alt={instructor.name}
              className="h-72 w-full md:h-96 object-cover rounded-lg mb-4"
            />
            <div className="absolute bottom-0 left-0 bg-gray-100 text-black w-full py-4 font-bold text-center px-4 transition-colors duration-300 ">
              {instructor.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
