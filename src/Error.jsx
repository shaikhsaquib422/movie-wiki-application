import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="flex items-center justify-center h-[71vh] ">
      <div className="text-2xl font-bold">
        <p className="mb-2">
          Error : The Resource you are looking for does not exist.
        </p>
        <Link to="/">
          <p>
            <span className="px-4 py-1 text-white bg-gray-800 rounded cursor-pointer hover:bg-gray-700">
              Go back to the home page
            </span>
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Error;
