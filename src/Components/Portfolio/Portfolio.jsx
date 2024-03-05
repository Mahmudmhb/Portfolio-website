import { useEffect, useState } from "react";
import axios from "axios";

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
        <span className="my-2 md:mx-4 font-thin border-[#ff014f] border  rounded-sm md:px-5 py-2 sm:lowercase  text-[#ff014f]">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </span>
        <h1 className=" border-b border-white pb-5 mt-10 text-5xl  text-[#c4cfde] mb-10 font-extrabold">
          My Portfolio
        </h1>
      </div>
      <div className="grid md:grid-cols-2 items-center gap-5">
        {portfolio.map((item) => (
          <div key={item.id}>
            <div className="flex items-center justify-center  lg:card-side bg-[#1e2124] duration-700 hover:bg-[#140c1c] text-white rounded-lg shadow-xl">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body items-center">
                <h2 className="card-title hover:text-[#8954f7]">
                  New album is released!
                </h2>
                <p>Click the button to listen on Spotiwhy app.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
