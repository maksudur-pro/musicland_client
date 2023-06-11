import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import MyClass from "../pages/Dashboard/Instructor/MyClass";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass";
import EnrolledClass from "../pages/Dashboard/Student/EnrolledClass";
import ApprovedClasses from "../pages/ApprovedClass/ApprovedClass";
import AllInstructor from "../pages/AllInstructor/AllInstructor";
import Payment from "../pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "classes",
        element: <ApprovedClasses />,
      },
      {
        path: "instructors",
        element: <AllInstructor />,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/carts/${params.id}`),
      },
      // admin panel
      {
        path: "manage_user",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manage_classes",
        element: <ManageClasses></ManageClasses>,
      },
      // instructor panel
      {
        path: "add_class",
        element: <AddClass></AddClass>,
      },
      {
        path: "my_class",
        element: <MyClass></MyClass>,
      },
      // student panel
      {
        path: "selected",
        element: <SelectedClass></SelectedClass>,
      },
      {
        path: "enrolled",
        element: <EnrolledClass></EnrolledClass>,
      },
    ],
  },
]);
