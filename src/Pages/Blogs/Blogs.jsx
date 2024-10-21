import Blog from "./Blog/Blog";

const Blogs = () => {
  return (
    <div className="min-h-screen w-5/6 mx-auto text-white flex justify-center items-center">
      <div>
        <div className="my-10 uppercase text-center">
          <span className="my-5 mx-4 font-thin border-[#ff014f] border  rounded-sm px-5 py-2  text-[#ff014f]">
            The freshest and most exciting news
          </span>
          <h3 className="  border-b py-5 mb-5 pb-5 border-white text-5xl my-5  text-[#c4cfde] font-extrabold">
            ----- recent blogs ------
          </h3>
        </div>
        <Blog />
      </div>
    </div>
  );
};

export default Blogs;
