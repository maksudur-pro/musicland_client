import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, googleAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const { email, password } = data;
    signIn(email, password)
      .then((result) => {
        const loggedIn = result.user;
        navigate(from, { replace: true });
        reset();
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogle = () => {
    googleAuth().then((result) => {
      const user = result.user;
      const name = user.displayName;
      const email = user.email;
      const photo = user.photoURL;
      const saveUser = { name, email, role: "student", photo };
      // Make a POST method
      fetch("https://music-land-server.vercel.app/users/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((response) => response.json())
        .then((data) => {
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.error("Error adding user:", error);
        });
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Helmet>
        <title>Music Land | Login</title>
      </Helmet>
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-[#f1961f] uppercase">
          Login
        </h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              name="email"
              placeholder="email"
              className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#f1961f] focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.email && (
              <p className="text-error">{errors.email?.message}</p>
            )}
          </div>
          <div className="mb-2 relative">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              name="password"
              placeholder="password"
              className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#f1961f] focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {showPassword ? (
              <FaEyeSlash
                className="absolute top-[70%] right-[3%] transform -translate-y-2/4 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaEye
                className="absolute top-[70%] right-[3%] transform -translate-y-2/4 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}

            {errors.password && (
              <p className="text-error">{errors.password?.message}</p>
            )}
          </div>
          <a href="#" className="text-xs text-[#f1961f] hover:underline">
            Forget Password?
          </a>
          <p className="text-error">{error}</p>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#f1961f] rounded-md hover:bg-[#f1961f] focus:outline-none focus:bg-[#f1961f]">
              Login
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            onClick={handleGoogle}
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#f1961f]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current text-[#f1961f]">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link
            to="/signup"
            href="#"
            className="font-medium text-[#f1961f] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
