import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
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
    </>
  );

  return (
    <div className="drawer drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {admin}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;