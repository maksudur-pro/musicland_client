import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import useRole from "../../../Hooks/useRole";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const { data } = useRole();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  const navOption = (
    <>
      <li className="text-xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }>
          Home
        </NavLink>
      </li>
      <li className="text-xl">
        <NavLink
          to="/instructors"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }>
          Instructors
        </NavLink>
      </li>
      <li className="text-xl">
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }>
          Classes
        </NavLink>
      </li>
      <li className="text-xl">
        <NavLink
          to={
            data.role === "admin"
              ? "/dashboard/manage_user"
              : data.role === "student"
              ? "/dashboard/selected"
              : data.role === "instructor"
              ? "/dashboard/my_class"
              : "/dashboard"
          }
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }>
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 my-container">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navOption}
          </ul>
        </div>
        <Link
          to="/"
          className="text-2xl font-bold hidden lg:block  lg:text-3xl lg:font-extrabold ml-[160px] lg:ml-0">
          Music<span className="text-[#f1961f]">Land</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{navOption}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <img
            title={user?.displayName}
            src={`${user?.photoURL}`}
            className="w-10 h-10 rounded-full mr-3"
            alt=""
          />
        ) : (
          <FaUserAlt className="mr-3 w-6 h-6"></FaUserAlt>
        )}
        {user ? (
          <button
            onClick={handleLogout}
            className="btn text-white bg-[#f1961f] hover:bg-[#f59d2a] mb-2">
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn  text-white bg-[#f1961f] mb-2 hover:bg-[#f59d2a]">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
