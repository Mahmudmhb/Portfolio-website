import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-5/6 mt-20 mx-auto">
      <div className="md:flex gap-4 items-center justify-between">
        <div className="w-full">
          <div className="space-y-8 mb-10 ">
            <span className="my-2 mx-4 font-thin border-[#ff014f] border  rounded-sm px-5 py-2  text-[#ff014f]">
              GET IN TOUCH
            </span>

            <h3 className="text-5xl font-extrabold text-[#c4cfde] tracking-wid  ">
              Let's make your <br /> brand brilliant!
            </h3>

            <p className="text-white">
              It will be my pleasure to work with you and make your brand more
              brilliant. I am always ready to help you. If you have any query,
              please feel free to contact with me.
            </p>
            <h3 className="md:text-4xl font-extrabold text-[#c4cfde] tracking-wid  ">
              +8801568084061 <br /> mahmud.mhb1@gmail.com
            </h3>

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
        </div>

        <form className="w-full">
          <div className="space-y-10">
            <div className="flex gap-4 ">
              <input
                type="text"
                placeholder="Name"
                name=""
                className="bg-[#1d1d1d] w-full rounded py-3 text-white"
              />
              <input
                type="email"
                placeholder="Email"
                name=""
                className="bg-[#1d1d1d] w-full rounded  py-3 text-white"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name=""
              className="bg-[#1d1d1d] w-full  py-3 rounded text-white"
            />
            <textarea
              name=""
              id=""
              rows="5"
              //   cols="10"
              placeholder="Messages"
              className="bg-[#1d1d1d]   w-full rounded text-white"
            ></textarea>
          </div>

          <button className="w-full rounded-3xl mt-10 border border-[#8954f7] py-3 hover:text-white text-[#8954f7] text-xl hover:bg-[#8954f7]">
            Lets Talk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
