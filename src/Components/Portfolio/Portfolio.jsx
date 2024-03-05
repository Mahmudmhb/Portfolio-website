import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    axios.get("/public/portfolio.json").then((res) => {
      setPortfolio(res.data);
    });
  }, []);
  return (
    <div className="w-5/6 mx-auto">
      <div className="text-center my-20">
        <span className="my-2 md:mx-4 font-thin border-[#ff014f] border  rounded-sm md:px-5 py-2  text-[#ff014f]">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </span>
        <h1 className=" border-b border-white pb-5 mt-10 text-5xl  text-[#c4cfde] mb-10 font-extrabold">
          My Portfolio
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {portfolio.map((item) => (
          <div key={item.id}>
            <div className="card w-[350px] bg-[#202327] duration-500 hover:bg-[#212428] shadow-xl">
              <figure className="px-10 hover:px-5 hover:pt-5 duration-500 pt-10">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="px-10  ">
                <div className="flex justify-between items-center">
                  <h2 className="card-title text-[#ff014f] text-xl font-thin my-5 uppercase">
                    {item.heading}
                  </h2>
                  <button className="text-white hover:text-[#ff014f]">
                    <FaRegHeart />
                  </button>
                </div>
                <p className=" text-2xl mb-10 hover:text-[#ff014f] duration-300  text-[#c4cfde] font-extrabold">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
