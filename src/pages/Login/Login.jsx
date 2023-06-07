import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col justify-center overflow-hidden">
      <Helmet>
        <title>Music Land | Login</title>
      </Helmet>
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-[#f1961f] uppercase">
          Login
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              placeholder="email"
              className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#f1961f] focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              placeholder="password"
              className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#f1961f] focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-[#f1961f] hover:underline">
            Forget Password?
          </a>
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