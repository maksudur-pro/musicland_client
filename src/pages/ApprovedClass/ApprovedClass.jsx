import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ApprovedClasses = () => {
  const [data, setData] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://music-land-server.vercel.app/approveClass"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (data) => {
    if (user && user.email) {
      const cartItem = {
        classId: data._id,
        courseName: data.courseName,
        classImg: data.classImg,
        price: data.price,
        seats: data.seats,
        totalEnrolled: data.totalEnrolled,
        payment: false,
        email: user.email,
      };
      axios
        .post("https://music-land-server.vercel.app/carts", cartItem)
        .then((response) => {
          if (response.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Course added on your class page",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          if (response.data.message) {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Course already added",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to select the course",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Music Land | Classes</title>
      </Helmet>
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
