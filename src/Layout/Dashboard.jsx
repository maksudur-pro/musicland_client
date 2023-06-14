import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useRole from "../Hooks/useRole";
import { FaBars } from "react-icons/fa";

const Dashboard = () => {
  const { data } = useRole();
  const admin = (
    <>
      <h1 className="text-center">Admin Panel</h1>
      <div className="divider"></div>
      <li>
        <NavLink
          to="/dashboard/manage_user"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }>
          Manage User
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manage_classes"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }>
          Manage Class
        </NavLink>
      </li>
    </>
  );
  const instructor = (
    <>
      <h1 className="text-center">Instructor Panel</h1>
      <div className="divider"></div>
      <li>
        <NavLink
          to="/dashboard/add_class"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }>
          Add Class
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/my_class"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }>
          My Class
        </NavLink>
      </li>
    </>
  );
  const student = (
    <>
      <h1 className="text-center">Student Panel</h1>
      <div className="divider"></div>
      <li>
        <NavLink
          to="/dashboard/selected"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }>
          Selected class
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/enrolled"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }>
          Enrolled class
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/history"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }>
          Payment History
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn drawer-button ml-[200px] lg:hidden">
          <FaBars />
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {data.role === "admin" && admin}
          {data.role === "instructor" && instructor}
          {data.role === "student" && student}
          <div className="divider"></div>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#f1961f]" : "default"
              }>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
