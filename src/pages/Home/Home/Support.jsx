import React from "react";
import { FaTools } from "react-icons/fa";

const Support = () => {
  return (
    <section className="p-8 lg:p-0">
      <div className="mx-auto text-center md:w-4/12 my-10">
        <h3 className="text-3xl uppercase border-b-4 font-bold py-4">
          Support team
        </h3>
      </div>

      <div className="flex flex-wrap items-center">
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
          <div
            className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light">
            <img
              src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              className="w-full"
            />
          </div>
        </div>

        <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
          <div className="mb-12 flex">
            <div className="shrink-0">
              <div className="rounded-md p-4 shadow-lg bg-[#f1961f] ">
                <FaTools className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="ml-4 grow">
              <p className="mb-2 font-bold">Support 24/7</p>
              <p className=" ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                quisquam quibusdam modi sapiente magni molestias pariatur
                facilis reprehenderit facere aliquam ex.
              </p>
            </div>
          </div>

          <div className="mb-12 flex">
            <div className="shrink-0">
              <div className="rounded-md p-4 shadow-lg bg-[#f1961f] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-white">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4 grow">
              <p className="mb-2 font-bold">Safe and solid</p>
              <p className=" ">
                Eum nostrum fugit numquam, voluptates veniam neque quibusdam
                ullam aspernatur odio soluta, quisquam dolore animi mollitia a
                omnis praesentium, expedita nobis!
              </p>
            </div>
          </div>

          <div className="mb-12 flex">
            <div className="shrink-0">
              <div className="rounded-md p-4 shadow-lg bg-[#f1961f] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-white">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4 grow">
              <p className="mb-2 font-bold">Extremely fast</p>
              <p className=" ">
                Enim cupiditate, minus nulla dolor cumque iure eveniet facere
                ullam beatae hic voluptatibus dolores exercitationem? Facilis
                debitis aspernatur amet nisi iure eveniet facere?
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="shrink-0">
              <div className="rounded-md p-4 shadow-lg bg-[#f1961f] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-white">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4 grow">
              <p className="mb-2 font-bold">Live analytics</p>
              <p className=" ">
                Illum doloremque ea, blanditiis sed dolor laborum praesentium
                maxime sint, consectetur atque ipsum ab adipisci ullam
                aspernatur odio soluta, quisquam dolore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
