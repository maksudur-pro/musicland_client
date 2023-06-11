import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AllInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/instructors")
      .then((response) => setInstructors(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Helmet>
        <title>Music Land | Instructors</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:py-20">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="card shadow-lg">
            {instructor.photo && (
              <img
                src={instructor.photo}
                alt="Instructor"
                className="w-full h-60 object-cover"
              />
            )}
            <div className="card-body">
              <h3 className="text-xl font-bold">{instructor.name}</h3>
              <p className="text-gray-600">{instructor.email}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllInstructor;
