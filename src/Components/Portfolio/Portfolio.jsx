import portfolio3 from "../../assets/portfolio/home lota-online-shop.png";
import portfolio2 from "../../assets/portfolio/car-doctors.png";
import portfolio1 from "../../assets/portfolio/cleanco.png";
import portfolio4 from "../../assets/portfolio/home travelwp.png";
import portfolio5 from "../../assets/portfolio/bisto-boss-menu.png";
import portfolio6 from "../../assets/portfolio/bistro-boss.png";

import { Link } from "react-router-dom";

const Portfolio = () => {
  // console.log(portfolio);
  return (
    <div className="w-5/6 mx-auto">
      <div className="text-center my-20">
        <span className="my-2 md:text-xl text-[11px] md:mx-4 font-thin border-[#ff014f] border  rounded-sm md:px-5 py-2   text-[#ff014f]">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </span>
        <h1 className=" border-b border-white pb-5 mt-10 text-5xl  text-[#c4cfde] mb-10 font-extrabold">
          My Portfolio
        </h1>
      </div>
      <div className="grid md:grid-cols-3 items-center gap-5">
        <div className="border p-5 h-[478px] shadow-2xl rounded-br-3xl  border-[#ff014f] rounded-tl-3xl  bg-[#202327]   duration-1000 hover:bg-[#010101]">
          <img
            src={portfolio3}
            alt=""
            className="w-full h-80 object-cover object-top rounded-t-2xl hover:object-bottom duration-[5000ms]"
          />

          <div className="flex justify-evenly items-center my-5 text-white">
            <Link to="https://lota-online-shop.web.app/" target="/blank">
              <button>Demo</button>
            </Link>
            <Link
              to="https://github.com/Mahmudmhb/lota-online-shop"
              target="/blank"
            >
              <button>GitHub</button>
            </Link>
          </div>
          <div>
            <ul className="text-white">
              <li> Online Shopping website</li>
            </ul>
          </div>
        </div>
        <div className="border p-5 h-[478px] shadow-2xl rounded-br-3xl  border-[#ff014f] rounded-tl-3xl bg-[#202327]   duration-1000 hover:bg-[#010101]">
          <img
            src={portfolio1}
            alt=""
            className="w-full h-80 object-cover rounded-t-2xl object-top hover:object-bottom duration-[5000ms]"
          />
          <div className="flex justify-evenly items-center my-5 text-white">
            <Link to="https://cleaninco-2a1c2.web.app/" target="/blank">
              <button>Demo</button>
            </Link>
            <Link to="https://github.com/Mahmudmhb/cleaninco" target="/blank">
              <button>GitHub</button>
            </Link>
          </div>
          <div>
            <ul className="text-white">
              <li>A Services related website</li>
            </ul>
          </div>
        </div>
        <div className="border p-5 h-[478px] shadow-2xl rounded-br-3xl  border-[#ff014f] rounded-tl-3xl bg-[#202327]   duration-1000 hover:bg-[#010101]">
          <img
            src={portfolio2}
            alt=""
            className="w-full h-80 object-cover rounded-t-2xl object-top hover:object-bottom duration-[5000ms]"
          />
          <div className="flex justify-evenly items-center my-5 text-white">
            <Link to="https://car-doctors-16e9e.web.app/" target="/blank">
              <button>Demo</button>
            </Link>
            <Link to="https://github.com/Mahmudmhb/car-doctors" target="/blank">
              <button>GitHub</button>
            </Link>
          </div>
          <div>
            <ul className="text-white">
              <li>A Services related website</li>
            </ul>
          </div>
        </div>
        <div className="border p-5 h-[478px] shadow-2xl rounded-br-3xl  border-[#ff014f] rounded-tl-3xl bg-[#202327]   duration-1000 hover:bg-[#010101]">
          <img
            src={portfolio4}
            alt=""
            className="w-full h-80 object-cover rounded-t-2xl object-top hover:object-bottom duration-[5000ms]"
          />
          <div className="flex justify-evenly items-center my-5 text-white">
            <Link to="https://travelwp-b7eb6.web.app/" target="/blank">
              <button>Demo</button>
            </Link>
            <Link to="https://github.com/Mahmudmhb/travelwp" target="/blank">
              <button>GitHub</button>
            </Link>
          </div>
          <div>
            <ul className="text-white">
              <li>A Tourist lover book a tour and choose his/her Guide</li>
            </ul>
          </div>
        </div>
        <div className="border p-5 h-[478px] shadow-2xl rounded-br-3xl  border-[#ff014f] rounded-tl-3xl bg-[#202327]   duration-1000 hover:bg-[#010101]">
          <img
            src={portfolio5}
            alt=""
            className="w-full h-80 object-cover rounded-t-2xl object-top hover:object-bottom duration-[5000ms]"
          />
          <div className="flex justify-evenly items-center my-5 text-white">
            <Link to="https://brisro-boss.web.app/menu" target="/blank">
              <button>Demo</button>
            </Link>
            <Link to="https://github.com/Mahmudmhb/bistro-boss" target="/blank">
              <button>GitHub</button>
            </Link>
          </div>
          <div>
            <ul className="text-white">
              <li>Castomers Order Food And Book Table</li>
            </ul>
          </div>
        </div>
        <div className="border p-5 h-[478px] shadow-2xl rounded-br-3xl  border-[#ff014f] rounded-tl-3xl bg-[#202327]   duration-1000 hover:bg-[#010101]">
          <img
            src={portfolio6}
            alt=""
            className="w-full h-80 object-cover rounded-t-2xl  object-top hover:object-bottom duration-[5000ms]"
          />
          <div className="flex justify-evenly items-center my-5 text-white">
            <Link to="https://brisro-boss.web.app/" target="/blank">
              <button>Demo</button>
            </Link>
            <Link to="https://github.com/Mahmudmhb/bistro-boss" target="/blank">
              <button>GitHub</button>
            </Link>
          </div>
          <div>
            <ul className="text-white">
              <li>Castomers Order Food And Book Table</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
