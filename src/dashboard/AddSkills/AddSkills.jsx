import { useState } from "react";
import { useForm } from "react-hook-form"; // Import react-hook-form
import * as Icons from "react-icons/fa"; // Import all icons from react-icons/fa

const AddSkills = () => {
  const { register, handleSubmit, reset } = useForm();
  const [skills, setSkills] = useState([]);

  // Function to handle form submission
  const onSubmit = (data) => {
    let IconComponent = Icons[data.icon] || Icons.FaHtml5; // Fallback to FaHtml5 if the icon doesn't exist

    const newSkill = {
      name: data.name,
      percentage: data.percentage,
      icon: (
        <IconComponent className="text-9xl p-3 hover:p-1 font-extrabold mx-auto text-[#c4cfde] duration-700" />
      ), // Use dynamic icon
    };

    setSkills((prevSkills) => [...prevSkills, newSkill]);
    reset(); // Reset the form after submission
  };

  return (
    <div className="min-h-screen text-white">
      {/* Add Skill Form */}
      <div className="max-w-md mx-auto p-5 bg-[#202327] rounded-lg shadow-md">
        <h1 className="text-3xl mb-5 text-center">Add New Skill</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="name">
              Skill Name
            </label>
            <input
              {...register("name", { required: true })}
              id="name"
              type="text"
              className="w-full px-3 py-2 bg-[#010101] border border-gray-600 rounded-md text-[#c4cfde] focus:outline-none focus:border-[#ff014f]"
              placeholder="Enter skill name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="icon">
              Icon Class
            </label>
            <input
              {...register("icon")}
              id="icon"
              type="text"
              className="w-full px-3 py-2 bg-[#010101] border border-gray-600 rounded-md text-[#c4cfde] focus:outline-none focus:border-[#ff014f]"
              placeholder="Enter icon class (e.g., FaReact, FaNodeJs)"
            />
            <p className="text-sm text-gray-400 mt-1">
              You can find available icons from react-icons library.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff014f] py-2 px-4 rounded-lg text-white font-semibold hover:bg-[#d60142]"
          >
            Add Skill
          </button>
        </form>
      </div>

      {/* Display Added Skills */}
      <div className="my-10 w-5/6 mx-auto grid grid-cols-3 gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-center bg-[#202327] hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl p-3 rounded-3xl"
          >
            {skill.icon} {/* Dynamic Icon */}
            <h1 className="text-[#c4cfde] text-3xl font-extrabold">
              {skill.percentage}%
            </h1>
            <p className="text-lg text-[#c4cfde]">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddSkills;
