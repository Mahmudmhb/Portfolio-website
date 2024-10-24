import { useEffect, useState } from "react";
import { AxiosInstance } from "../../Provider/useAxios";
import Blog from "./Blog/Blog";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await AxiosInstance.get("/blogs");
        // Log the response data
        const BlogData = res?.data.data;
        setBlogs(BlogData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="min-h-screen w-5/6 mx-auto text-white flex justify-center items-center">
      <div className="my-10">
        <div className="my-10  text-center mb-10">
          <span className="my-5  uppercase mx-4 font-thin border-[#ff014f] border  rounded-sm px-5 py-2  text-[#ff014f]">
            The freshest and most exciting news
          </span>
          <h3 className="  border-b py-5 mb-5 pb-5 border-white text-5xl my-5  text-[#c4cfde] font-extrabold">
            ----- Recent blogs ------
          </h3>
        </div>
        {/* {BlogData} */}
        <div className="md:grid grid-cols-3 gap-3 mt-20">
          {blogs?.slice(0, 3).map((item) => (
            <Blog key={item._id} item={item}>
              {" "}
            </Blog>
          ))}
        </div>
        <Link to="/blogs" className="flex justify-center mt-5">
          <button className=" my-3 px-8 hover:bg-[#8954f7] text-[#8954f7] hover:text-white duration-500 py-2 text-xl rounded-3xl border border-[#8954f7]">
            See More Blogs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
