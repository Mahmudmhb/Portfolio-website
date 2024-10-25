import { Link } from "react-router-dom";
import { portfolioItems } from "./portfolioItems";

const Portfolio = () => {
  return (
    <div className="w-5/6 mx-auto my-20">
      <div className="text-center">
        <span className="my-2 md:text-xl text-[11px] font-thin border-[#ff014f] border rounded-sm md:px-5 py-2 text-[#ff014f]">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </span>
        <h1 className="border-b border-white pb-5 mt-10 text-5xl text-[#c4cfde] mb-10 font-extrabold">
          My Portfolio
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#202327] border border-[#ff014f] p-5 rounded-lg shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-top rounded-t-2xl hover:object-bottom duration-[5000ms] object-cover"
            />
            <div className="mt-5 flex justify-between">
              <a
                href={item.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff014f]  hover:text-[#8954f7]"
              >
                Live Demo
              </a>
              <a
                href={item.clientLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff014f]  hover:text-[#8954f7]"
              >
                Client Code
              </a>
              <a
                href={item.serverLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff014f]  hover:text-[#8954f7]"
              >
                Server Code
              </a>
            </div>
            <h3 className="text-xl font-semibold  hover:text-[#01bad4] text-[#8954f7] transition-colors duration-300 mb-3">
              {item.title}
            </h3>
            <p className="text-white mt-3 truncate">{item.description}</p>
            <Link to={`/portfolio/${item.id}`}>
              <button className="my-3 px-8 hover:bg-[#8954f7] text-[#8954f7] hover:text-white duration-500 py-2  rounded-3xl border border-[#8954f7]">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
