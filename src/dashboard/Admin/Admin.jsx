import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, handleLogOut } = useContext(AuthContext);
  const handleSignOut = () => {
    handleLogOut().then().catch();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] py-10">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <div className="flex flex-col items-center">
          {/* Profile Picture */}
          {user?.photoURL ? (
            <img
              src={user?.photoURL}
              alt="Profile"
              className="w-32 h-32 rounded-full mb-4 shadow-lg"
            />
          ) : (
            <div className="w-32 h-32 bg-gray-500 rounded-full mb-4 flex items-center justify-center text-2xl text-gray-300">
              No Image
            </div>
          )}

          {/* Display Name */}
          <h1 className="text-3xl font-bold text-white mb-2">
            {user?.displayName ? user.displayName : "User Name"}
          </h1>

          {/* Email */}
          <p className="text-gray-400 text-lg mb-4">{user?.email}</p>

          {/* Profile Actions */}
          <div className="mt-6 w-full flex justify-around">
            <button className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600">
              Edit Profile
            </button>
            <Link to="/">
              <button
                onClick={handleSignOut}
                className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Log Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
