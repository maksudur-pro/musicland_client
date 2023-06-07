import { NavLink } from "react-router-dom";

const Header = () => {
  const navOption = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }>
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }>
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }>
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
            className="menu font-semibold text-lg menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navOption}
          </ul>
        </div>
        <p className="text-2xl font-bold lg:text-3xl lg:font-extrabold ml-[160px] lg:ml-0">
          Music<span className="text-[#f1961f]">Land</span>
        </p>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          {navOption}
        </ul>
      </div>
    </div>
  );
};

export default Header;
