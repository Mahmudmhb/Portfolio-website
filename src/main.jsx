import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Home from "./Pages/Home/Home.jsx";
import Professional from "./Components/Professional/Professional.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/professional",
        element: <Professional></Professional>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-[#1a1a1a]">
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </div>
);
