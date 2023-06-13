import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AllInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios
      .get("https://music-land-server.vercel.app/instructors")
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
          <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={instructor.photo}
                className="w-full h-96"
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
