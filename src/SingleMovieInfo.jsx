import React from "react";

const SingleMovieInfo = ({ Title, Poster, Type, Year, imdbID }) => {
  return (
    <div className="relative group">
      <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={Poster}
          alt={Title}
          className="object-cover object-center w-full h-full lg:h-full lg:w-full"
        />
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {Title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{Year}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{imdbID}</p>
      </div>
    </div>
  );
};

export default SingleMovieInfo;
