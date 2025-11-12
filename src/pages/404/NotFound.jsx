import React from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f0f12] text-white px-4 text-center">
      <div className="max-w-md">
        <h1 className="md:text-9xl text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-600 drop-shadow-md animate-pulse">
          404
        </h1>
        <h2 className="title mb-5">
          Oops! Page not found.
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <Link
          to="/"
          className="btn btn-outline rounded-full border-purple-600 text-purple-400 hover:bg-purple-900 hover:text-white transition duration-300 flex items-center gap-2 mx-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <div className="absolute bottom-4 text-xs text-gray-600">
        © {new Date().getFullYear()} | Designed with 💜 by Sajib
      </div>
    </div>
  );
};

export default NotFound;
