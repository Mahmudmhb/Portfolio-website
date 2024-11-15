/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#202327] text-white text-center">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <h2 className="text-3xl mb-4">Page Not Found</h2>
      <p className="mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="text-[#ff014f] underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
