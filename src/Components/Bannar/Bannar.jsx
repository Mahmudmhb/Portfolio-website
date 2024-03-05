import { Link } from "react-router-dom";
import mahmud from "../../assets/mahmud.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Bannar = () => {
  return (
    <div className="w-5/6 mx-auto flex justify-center ">
      <div className=" md:flex items-center md:justify-between text-[#dddddd] ">
        <div className="space-y-5 my-20  md:w-1/2 ">
          <h1 className=" font-extrabold   tracking-widest	  text-4xl text-[#c4cfde] ">
            {" "}
            Hello👋,
            <span className="text-[#ff014f]">I`m Mahmud</span>
          </h1>
          <h3 className="text-6xl font-extrabold text-[#8954f7] tracking-wid  ">
            A Programmer Specializing in Web Development.
          </h3>
          <p className="text-2xl">
            I break down complex user experience problems to create integritiy
            solutions that connect billions of people
          </p>
          <div className="flex sm:flex-row  items-center gap-5">
            <Link
              to={
                "https://drive.google.com/file/d/1KUd0U1eV1S9SEAu-aDLh_ljAu5xAdOhn/view?usp=sharing"
              }
              target="_blank"
            >
              <button className=" my-3 px-8 hover:bg-[#8954f7] text-[#8954f7] hover:text-white duration-500 py-2 text-xl rounded-3xl border border-[#8954f7]">
                Download CV
              </button>
            </Link>
            <div className="space-x-4">
              <h1 className="my-2 mx-4 font-thin text-[#ff014f]">
                FIND WITH ME
              </h1>
              <button className="p-2 rounded-full hover:bg-[#8954f7] text-[#8954f7] border-[#8954f7] hover:text-white duration-500   border">
                <FaGithub className=" text-2xl" />
              </button>
              <button className="p-2 rounded-full hover:bg-[#8954f7] text-[#8954f7] border-[#8954f7] hover:text-white duration-500   border">
                <FaLinkedinIn className=" text-2xl" />
              </button>
            </div>
          </div>
        </div>
        <img
          src={mahmud}
          className=" w-96 rounded-full hover:rotate-[5deg] duration-300 hover:border-8 border-[#8954f7] shadow-2xl shadow-indigo-800  hover:grayscale

          "
        />
      </div>
    </div>
  );
};

export default Bannar;
