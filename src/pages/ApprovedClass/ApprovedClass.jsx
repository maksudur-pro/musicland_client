import { useState, useEffect } from "react";
import axios from "axios";

const ApprovedClasses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/approveClass");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (classObj) => {
    // Perform actions on class selection
    console.log("Selected class:", classObj);
  };

  return (
    <>
      <h1 className="text-3xl text-center font-bold mb-4">All Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((classObj) => (
          <div
            key={classObj._id}
            className="card shadow-lg flex flex-col justify-between">
            <img
              src={classObj.classImg}
              alt={classObj.courseName}
              className="w-full rounded-xl object-cover mb-4"
            />
            <div className="card-body">
              <h2 className="text-xl font-bold mb-2">{classObj.courseName}</h2>
              <p className="mb-2">Instructor: {classObj.instructor_name}</p>
              <p className="mb-2">Email: {classObj.email}</p>
              <p className="mb-2">Available seats: {classObj.seats}</p>
              <p className="mb-2">Enrolled Student: {classObj.totalEnrolled}</p>
            </div>
            <div className="flex justify-between items-center p-4">
              <p className="mb-2">Price: ${classObj.price}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleSelect(classObj)}>
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ApprovedClasses;
