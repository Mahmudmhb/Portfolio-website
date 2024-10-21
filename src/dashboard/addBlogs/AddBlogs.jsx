import { useForm } from "react-hook-form";
import { useState } from "react";

const AddBlogs = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className="max-w-lg mx-auto p-5 bg-gray-100 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-5">Add a New Blog</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Blog Title
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-600 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Blog Content */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Blog Content
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="5"
            {...register("content", { required: "Content is required" })}
          />
          {errors.content && (
            <p className="text-red-600 text-sm">{errors.content.message}</p>
          )}
        </div>

        {/* Author Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Author Name
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("author", { required: "Author name is required" })}
          />
          {errors.author && (
            <p className="text-red-600 text-sm">{errors.author.message}</p>
          )}
        </div>

        {/* Blog Category */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Blog Category
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            {...register("category", { required: "Category is required" })}
          />
          {errors.category && (
            <p className="text-red-600 text-sm">{errors.category.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Upload Image
          </label>
          <input
            type="file"
            className="w-full p-2 border border-gray-300 rounded-md"
            accept="image/*"
            {...register("image", { required: "Image is required" })}
            onChange={handleImageChange}
          />
          {errors.image && (
            <p className="text-red-600 text-sm">{errors.image.message}</p>
          )}

          {/* Image Preview */}
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-md"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlogs;
