import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { handleSignUp, handleUpdateUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    handleSignUp(email, password)
      .then(() => {
        Swal.fire(`Welcome Our New Profile ${name}`);
        navigate(location?.state ? location.state : "/");
        handleUpdateUser(name, photoUrl).then().catch();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Create Your Account
        </h1>
        <form onSubmit={handleRegister} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-700"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label
              htmlFor="photoUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Picture URL
            </label>
            <input
              id="photoUrl"
              type="text"
              name="photoUrl"
              placeholder="http://yourphoto.com"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-700"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email1"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              id="email1"
              type="email"
              name="email"
              placeholder="name@example.com"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-700"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password1"
              className="block text-sm font-medium text-gray-700"
            >
              Your Password
            </label>
            <input
              id="password1"
              type="password"
              name="password"
              placeholder="********"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-700"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label htmlFor="remember" className="text-sm text-gray-700">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Sign Up
          </button>

          {/* Redirect to Login */}
          <div className="text-center">
            <p className="text-sm text-gray-700">
              Already have an account?{" "}
              <Link to="/login" className="text-green-600 hover:text-green-700">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
