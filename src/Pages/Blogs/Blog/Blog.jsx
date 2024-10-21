import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      {" "}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <Link to={`/blogdetails/}`}>
            <div className="w-[365px] h-52 image-container">
              <img
                src="https://janstudio.net/claue/demo/wp-content/uploads/2015/12/street-style-girl-1024x683.jpg"
                alt=""
              />
            </div>
          </Link>
          <div className="space-y-2 ">
            <Link to={`/blogdetails/`}>
              <h1 className="font-bold lowercase mt-2 duration-500 hover:text-[#01bad4]">
                this is blog tilte
              </h1>
            </Link>
            <p>By admin on</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
              sed?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
