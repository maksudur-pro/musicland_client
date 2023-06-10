import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const { googleAuth } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { name, email, password, photo } = data;
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUserProfile(name, photo)
          .then(() => {
            const saveUser = { name, email, role: "student", photo };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire("Register Successfully!", " ", "success");
                  navigate("/");
                }
              });
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGoogle = () => {
    googleAuth().then((result) => {
      const user = result.user;
      console.log(user);
      const name = user.displayName;
      const email = user.email;
      const photo = user.photoURL;
      const saveUser = { name, email, role: "student", photo };
      console.log(user);
      // Make a POST method
      fetch("http://localhost:5000/users/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((response) => response.json())
        .then((data) => {
          navigate("/");
        })
        .catch((error) => {
          console.error("Error adding user:", error);
        });
    });
  };

  const password = React.useRef({});
  password.current = watch("password", "");

  return (
    <div>
      <div className="flex flex-col items-center  pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <Helmet>
          <title>Music Land | Register</title>
        </Helmet>
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-[#f1961f]">Register</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined">
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  {...register("name", { required: "Name is required" })}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm p-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.name && (
                  <p className="text-error">{errors.name?.message}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined">
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.email && (
                  <p className="text-error">{errors.email?.message}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700 undefined">
                Photo Url
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  placeholder="photo"
                  name="photo"
                  {...register("photo", {
                    required: "Photo is required",
                  })}
                  className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.photo && (
                  <p className="text-error">{errors.photo?.message}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined">
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  name="password"
                  className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.password && (
                  <p className="text-error">{errors.password?.message}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined">
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  {...register("password_confirmation", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === password.current || "Passwords do not match",
                  })}
                  className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.password_confirmation && (
                  <p className="text-error">
                    {errors.password_confirmation?.message}
                  </p>
                )}
              </div>
            </div>
            <Link to="" className="text-xs text-[#f1961f] hover:underline">
              Forget Password?
            </Link>
            <p className="text-error">{error}</p>
            <div className="flex items-center mt-4">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#f1961f] rounded-md hover:bg-[#f1961f] focus:outline-none focus:bg-[#f1961f]">
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <Link
                to="/login"
                className="text-[#f1961f] hover:underline"
                href="#">
                Log in
              </Link>
            </span>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 ">OR</p>
            <hr className="w-full" />
          </div>
          <div className="my-6 space-y-2">
            <button
              aria-label="Login with Google"
              onClick={handleGoogle}
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
              <FaGoogle />
              <p>Register with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
