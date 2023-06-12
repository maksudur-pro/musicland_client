import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Music Land | Home</title>
      </Helmet>
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-white">
              <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
              <p className="text-lg mb-6">
                If you have any questions or need assistance, feel free to reach
                out to our support team. We're here to help!
              </p>
              <p className="text-lg mb-6">
                Phone: <span className="font-semibold">123-456-7890</span>
              </p>
              <p className="text-lg mb-6">
                Email:{" "}
                <span className="font-semibold">support@example.com</span>
              </p>
              <p className="text-lg mb-6">
                Address:{" "}
                <span className="font-semibold">
                  1234 Main Street, City, Country
                </span>
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-3xl font-semibold mb-4">Support Form</h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg text-gray-800 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg text-gray-800 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-lg text-gray-800 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold w-full focus:outline-none">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
