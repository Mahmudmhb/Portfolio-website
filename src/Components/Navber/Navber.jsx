import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navber = () => {
  const { user } = useContext(AuthContext);
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
          <Link to="/blogs">
            <li>Blogs</li>
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
        {user?.email ? (
          <>
            <div>
              <Link to="/dashboard">
                {" "}
                <button className=" my-3 px-8 hover:bg-[#8954f7] text-[#8954f7] hover:text-white duration-500 py-1  rounded-3xl border border-[#8954f7]">
                  Dashboard
                </button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link to="/Login">
                {" "}
                <button className=" my-3 uppercase px-8 hover:bg-[#8954f7] text-[#8954f7] hover:text-white duration-500  py-1 rounded-3xl border border-[#8954f7]">
                  Login
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;
