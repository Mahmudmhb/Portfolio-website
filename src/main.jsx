import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { router } from "./Routes/route.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-[#1a1a1a]">
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </div>
);
