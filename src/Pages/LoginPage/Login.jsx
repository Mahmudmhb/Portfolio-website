import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Checkbox } from "flowbite-react";

const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;

    handleLogin(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Successfully logged in ${result.user.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
          footer: `<Link to='/login'>${error.message}</link>`,
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Welcome Back!
        </h1>
        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <label
              htmlFor="email1"
              className="block text-sm font-medium text-gray-700"
            >
              Your email
            </label>
            <input
              id="email1"
              type="email"
              placeholder="name@gmail.com"
              required
              name="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            />
          </div>
          <div>
            <label
              htmlFor="password1"
              className="block text-sm font-medium text-gray-700"
            >
              Your password
            </label>
            <input
              id="password1"
              type="password"
              required
              name="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
          >
            Sign In
          </button>
          <div className="text-center mt-4">
            <h2 className="text-sm text-gray-600">
              New here?{" "}
              <Link
                to="/register"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Sign Up
              </Link>
            </h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
