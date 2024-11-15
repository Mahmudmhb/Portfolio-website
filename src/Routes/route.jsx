import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Professional from "../Components/Professional/Professional";
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
import PortfolioDetails from "../Components/Portfolio/portpolioDetails";
import ErrorPage from "../Pages/Error/Error";
import BlogDetails from "../Pages/Blogs/Blog/BlogDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
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
        path: "abouts-us",
        element: <WorkPlan />,
      },
      {
        path: "blogdetails/:id",
        element: <BlogDetails />,
      },
      {
        path: "projects",
        element: <Portfolio />,
      },
      {
        path: "/portfolio/:id",
        element: <PortfolioDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <Dashboard />
      </PrivateRoute>
    ),
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
