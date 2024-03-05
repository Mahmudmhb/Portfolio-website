import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div className="text-white text-center">
      {/* <div className=" my-10 divider">
        <h1 className="text-3xl border px-5 py-2 rounded-xl  ">
          BEST SKILL ON
        </h1>
      </div> */}
      <Marquee>
        <div className="text-4xl my-10 mx-8">
          <ul>
            <li className="inline-block px-4 py-2 text-text-1 font-medium">
              HTML-CSS
            </li>
            <li className="inline-block px-4 py-2 text-text-1 font-medium">
              JavaScript
            </li>
            <li className="inline-block px-4 py-2 text-text-1 font-medium">
              React
            </li>

            <li className="inline-block px-4 py-2 text-text-1 font-medium">
              TailwindCSS
            </li>
            <li className="inline-block px-4 py-2 text-text-1 font-medium">
              Bootstrap
            </li>
            <li className="inline-block px-4 py-2 text-text-1 font-medium">
              MaterialUI
            </li>

            <li className="inline-block px-4 py-2 text-text-1 font-medium">
              NodeJS
            </li>
            <li className="inline-block px-4 py-2 text-text-1 font-medium">
              ExpressJS
            </li>
            <li className="inline-block px-4 py-2 text-text-1 font-medium">
              MongoDB
            </li>

            <li className="inline-block px-4 py-2 text-text-1 font-medium">
              Firebase
            </li>

            <li className="inline-block px-4 py-2 text-text-1 font-medium">
              Vercel
            </li>
          </ul>
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;
