import Blog from "./Blog/Blog";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const HomePageBlogs = () => {
  const { isloading, blogs } = useContext(AuthContext);
  console.log(blogs);

  return (
    <div className="min-h-screen w-5/6 mx-auto text-white flex justify-center items-center">
      {isloading && (
        <>
          <p>loading.......</p>
        </>
      )}
      <div className="my-10">
        <div className="my-10  text-center mb-10">
          <span className="my-5  uppercase mx-4 font-thin border-[#ff014f] border  rounded-sm px-5 py-2  text-[#ff014f]">
            The freshest and most exciting news
          </span>
        </div>
        {/* {BlogData} */}
        <div className="md:grid grid-cols-3 gap-3 mt-20">
          {blogs?.map((item) => (
            <Blog key={item._id} item={item}>
              {" "}
            </Blog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageBlogs;
