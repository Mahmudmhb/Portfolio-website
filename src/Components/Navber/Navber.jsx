import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div className=" border-b ">
      <div className="flex  justify-between w-5/6 mx-auto  text-white items-center h-20">
        <div className=" text-white flex items-center">
          <h1 className="">Mahmudul hasan</h1>
        </div>
        <ul className="md:flex hidden  md:justify-between md:gap-10 gap-2  items-center ">
          <Link to="/">
            {" "}
            <li>home</li>
          </Link>
          <Link to="/abouts-us">
            {" "}
            <li>Abouts</li>
          </Link>
          <Link to="/skills">
            <li>Skills</li>
          </Link>
          <Link to="/projects">
            {" "}
            <li>Projects</li>
          </Link>
          <Link to="/contact-us">
            {" "}
            <li>Contact</li>
          </Link>
        </ul>
        <div>
          <Link to="/dashboard">
            {" "}
            <button className=" bg-blue-600 text-white px-3 py-1 rounded-lg shadow-xl hover:bg-blue-800 duration-300 delay-100">
              Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
