import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AxiosInstance } from "../../../Provider/useAxios";

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the route
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await AxiosInstance.get(`/blogs/${id}`); // Replace with your API endpoint
        setBlog(response?.data?.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#1a1a1a] text-white">
        Loading...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#1a1a1a] text-white">
        Blog not found
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a] min-h-screen text-white">
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-4 min-h-96">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full rounded-lg shadow-lg "
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="flex justify-between text-gray-400 mb-4">
          <span>By {blog.author}</span>
          <span>Category: {blog.category}</span>
        </div>
        <div className="text-gray-500 mb-8">
          Published on {new Date(blog.createdAt).toLocaleDateString()}
        </div>
        <p className="text-lg text-gray-300 leading-8">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
