import React from "react";
import {
  FaGlobeAmericas,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="mx-auto mt-10 text-center md:w-4/12 my-2">
        <h3 className="text-3xl uppercase border-b-4 font-bold py-4">
          contact us
        </h3>
      </div>
      <div className=" my-10 mx-auto md:px-6">
        <section className="mb-32">
          <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80')]"></div>
          <div className="container px-6 md:px-12">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="mx-auto mb-12 text-center lg:mb-0">
                  <FaGlobeAmericas className="mx-auto mb-6 h-8 w-8 text-[#f1961f]" />
                  <h6 className="font-medium">Bangladesh</h6>
                </div>
                <div className="mx-auto mb-12 text-center lg:mb-0">
                  <FaMapMarkerAlt className="mx-auto mb-6 h-8 w-8 text-[#f1961f]" />
                  <h6 className="font-medium">Dhaka, 94126</h6>
                </div>
                <div className="mx-auto mb-6 text-center md:mb-0">
                  <FaPhoneAlt className="mx-auto mb-6 h-8 w-8 text-[#f1961f]" />
                  <h6 className="font-medium">+ 01 234 567 89</h6>
                </div>
                <div className="mx-auto text-center">
                  <FaMoneyBillWave className="mx-auto mb-6 h-8 w-8 text-[#f1961f]" />
                  <h6 className="font-medium">Tax ID: 273 384</h6>
                </div>
              </div>
              <div className="mx-auto max-w-[700px]">
                <form>
                  <div className="mt-4">
                    <label className="block mb-1 font-bold">Name</label>
                    <input
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border-[#f1961f] focus:border-[#f1961f] focus:ring-[#f1961f]"
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block mb-1 font-bold">Email</label>
                    <input
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border-[#f1961f] focus:border-[#f1961f] focus:ring-[#f1961f]"
                      type="email"
                      placeholder="your mail"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block mb-1 font-bold">Message</label>
                    <textarea
                      id="message"
                      className="w-full px-4 py-2 rounded-lg border-[#f1961f] focus:border-[#f1961f] focus:ring-[#f1961f]"
                      rows="4"
                      placeholder="Your Message"></textarea>
                  </div>
                  <div className="mt-6">
                    <button className="w-full py-2 px-4 font-bold text-white bg-[#f1961f] hover:bg-[#ce7d13] rounded-lg">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
