/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Blog = ({ item }) => {
  const { title, content, author, category, image, _id } = item;

  return (
    <div className="border p-5 h-[500px] mt-5 shadow-2xl rounded-br-3xl  border-[#ff014f] rounded-tl-3xl  bg-[#202327]   duration-1000 hover:bg-[#010101]">
      {/* Image Section */}
      <Link to={`/blogdetails/${_id}`} className="block relative">
        <div className="w-full h-52 bg-gray-800 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-top rounded-t-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Content Section */}
      <div className="p-5">
        <Link to={`/blogdetails/${_id}`}>
          <h2 className="text-xl font-semibold  hover:text-[#01bad4] text-[#8954f7] transition-colors duration-300 mb-3">
            {title}
          </h2>
        </Link>

        {/* Author and Category */}
        <div className="flex justify-between items-center text-sm text-gray-400 mb-3">
          <span>Author: {author}</span>
          <span className=" text-[#8954f7] hover:text-white text-xs font-bold duration-500   rounded-3xl">
            {category}
          </span>
        </div>

        {/* Blog Content Preview */}
        <p className="text-gray-300 text-sm leading-6 line-clamp-3">
          {content}
        </p>
      </div>

      {/* Read More Button */}
      <div className="px-5 pb-5">
        <Link
          to={`/blogdetails/${_id}`}
          className="my-3 px-8 hover:bg-[#8954f7] text-[#8954f7] hover:text-white duration-500 py-2  rounded-3xl border border-[#8954f7]"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Blog;
