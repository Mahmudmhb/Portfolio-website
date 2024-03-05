import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div className=" border-b">
      <div className="md:flex justify-between w-5/6 mx-auto  text-white items-center h-20">
        <div className=" text-white">
          <h1>Mahmudul hasan</h1>
        </div>
        <ul className="flex   md:justify-between gap-10  items-center ">
          <Link>
            {" "}
            <li>home</li>
          </Link>
          <Link>
            {" "}
            <li>Abouts</li>
          </Link>
          <Link>
            {" "}
            <li>Skills</li>
          </Link>
          <Link>
            {" "}
            <li>Projects</li>
          </Link>
          <Link>
            {" "}
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
