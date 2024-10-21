import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { LiaBlogSolid } from "react-icons/lia";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#18191a] min-h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/5 lg:sticky top-0 bg-gray-800 text-white p-5 h-full lg:min-h-screen">
        <ul>
          <li>
            <Link to="/skills" className="flex gap-3 items-center my-2.5">
              <GiSkills /> Add Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="flex gap-3 items-center my-2.5">
              {" "}
              <GrProjects /> Add Projects
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/add-blogs"
              className="flex gap-3 items-center my-2.5"
            >
              <LiaBlogSolid /> Add Blogs
            </Link>
          </li>
          <li className="bottom-0 flex gap-3 items-center my-2.5">
            <Link to="/" className="bottom-0 flex gap-3 items-center my-2.5">
              <FaHome /> Home
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-4/5 p-5 lg:p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
