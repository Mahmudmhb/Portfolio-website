import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Professional from "../Components/Professional/Professional";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Components/Contact/Contact";
import WorkPlan from "../Components/WorkPlan/WorkPlan";
import Portfolio from "../Components/Portfolio/Portfolio";
import Dashboard from "../dashboard/Dashboard";
import Admin from "../dashboard/Admin/Admin";
import AddBlogs from "../dashboard/addBlogs/AddBlogs";
import Login from "../Pages/LoginPage/Login";
import SignUp from "../Pages/LoginPage/SignUp";
import HomePageBlogs from "../Pages/Blogs/HomePageBlogs";
import AddSkills from "../dashboard/AddSkills/AddSkills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "professional",
        element: <Professional />,
      },
      {
        path: "blogs",
        element: <HomePageBlogs />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "about-us",
        element: <WorkPlan />,
      },
      {
        path: "projects",
        element: <Portfolio />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Admin />,
      },
      {
        path: "add-blogs",
        element: <AddBlogs />,
      },
      {
        path: "add-skills",
        element: <AddSkills />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
]);
