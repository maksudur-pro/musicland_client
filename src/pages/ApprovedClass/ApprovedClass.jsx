import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import LazyLoad from "react-lazy-load";
import useRole from "../../Hooks/useRole";

const ApprovedClasses = () => {
  const [classes, setClasses] = useState([]);
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = useRole();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://music-land-server.vercel.app/approveClass"
      );
      setClasses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
      <div className="mx-auto text-center md:w-4/12 mb-10">
        <h3 className="text-3xl uppercase border-b-4 font-bold py-4">
          All Classes
        </h3>
      </div>
      <div className="grid grid-cols-1 p-10 lg:p-0 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((classObj) => (
          <div
            key={classObj._id}
            className="card shadow-lg flex flex-col justify-between">
            <img
              src={classObj.classImg}
              alt={classObj.courseName}
              className="w-full rounded-xl object-cover"
            />
            <div className="card-body">
              <h2 className="text-xl font-bold mb-2">{classObj.courseName}</h2>
              <p className="">Instructor: {classObj.instructor_name}</p>
              <p className="">Available seats: {classObj.seats}</p>
              <p className="">Enrolled Student: {classObj.totalEnrolled}</p>
            </div>
            <div className="flex justify-between items-center p-4">
              <p className="mb-2">Price: ${classObj.price}</p>
              {!user && (
                <Link to="/login">
                  <button className="btn bg-[#f1961f] hover:bg-[#e99e3c] text-white">
                    Add Class
                  </button>
                </Link>
              )}
              {data.role === "student" && (
                <button
                  className="btn bg-[#f1961f] hover:bg-[#e99e3c] text-white"
                  onClick={() => handleSelect(classObj)}>
                  Add Class
                </button>
              )}
              {data.role === "admin" && (
                <button
                  disabled
                  className="btn bg-[#f1961f] hover:bg-[#e99e3c] text-white"
                  onClick={() => handleSelect(classObj)}>
                  Add Class
                </button>
              )}
              {data.role === "instructor" && (
                <button
                  disabled
                  className="btn bg-[#f1961f] hover:bg-[#e99e3c] text-white"
                  onClick={() => handleSelect(classObj)}>
                  Add Class
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ApprovedClasses;
