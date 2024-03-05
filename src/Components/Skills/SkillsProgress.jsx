import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { MdJavascript } from "react-icons/md";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const SkillsProgress = () => {
  return (
    <div className="w-5/6 mx-auto">
      <div>
        <div className="text-center border-b border-white my-20">
          <h1 className="  pb-5 mt-10 text-5xl  text-[#c4cfde] mb-10 font-extrabold">
            My Skills
          </h1>
          <p>
            <p className="text-white mb-2">
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and you customers.
            </p>
          </p>
        </div>
        <div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 justify-center md:justify-between">
            <div className="text-center my-5">
              <div className="text-center bg-[#140c1c] p-3 rounded-3xl">
                <FaHtml5 className="text-9xl p-3 hover:p-1  font-extrabold mx-auto text-[#c4cfde] duration-700 "></FaHtml5>
                <h1
                  className="text-[#c4cfde]
             text-3xl font-extrabold"
                >
                  90%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] text-3xl font-extrabold mt-2">
                HTML
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#140c1c] p-3 rounded-3xl">
                <FaCss3Alt className="text-9xl p-3 hover:p-1 font-extrabold mx-auto text-[#c4cfde] duration-700 "></FaCss3Alt>
                <h1
                  className="text-[#c4cfde]
             text-3xl font-extrabold"
                >
                  90%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] mt-2 text-3xl font-extrabold">
                CSS
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#140c1c] p-3 rounded-3xl">
                <MdJavascript className="text-9xl p-3 hover:p-1 font-extrabold mx-auto text-[#c4cfde] duration-700 "></MdJavascript>
                <h1
                  className="text-[#c4cfde]
             text-3xl font-extrabold"
                >
                  80%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] uppercase mt-2 text-3xl font-extrabold">
                javascript
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#140c1c] p-3 rounded-3xl">
                <SiTailwindcss className="text-9xl p-3 hover:p-1 font-extrabold mx-auto text-[#c4cfde] duration-700 "></SiTailwindcss>
                <h1
                  className="text-[#c4cfde]
             text-3xl font-extrabold"
                >
                  85%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] uppercase mt-2 text-3xl font-extrabold">
                TailwindCSS
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#140c1c] p-3 rounded-3xl">
                <FaReact className="text-9xl p-3 hover:p-1 font-extrabold mx-auto text-[#c4cfde] duration-700 "></FaReact>
                <h1
                  className="text-[#c4cfde]
             text-3xl font-extrabold"
                >
                  85%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] uppercase mt-2 text-3xl font-extrabold">
                react js
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#140c1c] p-3 rounded-3xl">
                <SiFirebase className="text-9xl p-3 hover:p-1 font-extrabold mx-auto text-[#c4cfde] duration-700 " />

                <h1
                  className="text-[#c4cfde]
             text-3xl font-extrabold"
                >
                  85%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] uppercase mt-2 text-3xl font-extrabold">
                Firebase
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#140c1c] p-3 rounded-3xl">
                <SiVercel className="text-9xl p-3 hover:p-1 font-extrabold mx-auto text-[#c4cfde] duration-700 " />

                <h1
                  className="text-[#c4cfde]
             text-3xl font-extrabold"
                >
                  50%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] uppercase mt-2 text-3xl font-extrabold">
                Vercel
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#140c1c] p-3 rounded-3xl">
                <FaNode className="text-9xl p-3 hover:p-1 font-extrabold mx-auto text-[#c4cfde] duration-700 " />

                <h1
                  className="text-[#c4cfde]
             text-3xl font-extrabold"
                >
                  50%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] uppercase mt-2 text-3xl font-extrabold">
                Node js
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#140c1c] p-3 rounded-3xl">
                <SiExpress className="text-9xl p-3 hover:p-1 font-extrabold mx-auto text-[#c4cfde] duration-700 " />

                <h1
                  className="text-[#c4cfde]
             text-3xl font-extrabold"
                >
                  50%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] uppercase mt-2 text-3xl font-extrabold">
                ExpressJS
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#140c1c] p-3 rounded-3xl">
                <SiMongodb className="text-9xl p-4 hover:p-0 font-extrabold mx-auto text-[#c4cfde] duration-700 " />

                <h1
                  className="text-[#c4cfde]
             text-3xl font-extrabold  hover:text-[#8954f7]"
                >
                  50%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] hover:text-[#8954f7]  uppercase mt-2 text-3xl font-extrabold">
                MongoDB
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#140c1c] p-3 rounded-3xl">
                <FaBootstrap className="text-9xl p-4 hover:p-0 font-extrabold mx-auto text-[#c4cfde] duration-700 " />

                <h1
                  className="text-[#c4cfde]
             text-3xl font-extrabold  hover:text-[#8954f7]"
                >
                  90%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] hover:text-[#8954f7]  uppercase mt-2 text-3xl font-extrabold">
                Bootstrap
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsProgress;
