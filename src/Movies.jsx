import { useQuery } from "react-query";
import SingleMovie from "./SingleMovie";
import { useGlobalContext } from "./context";
import axios from "axios";
import { Link } from "react-router-dom";
import SingleMovieInfo from "./SingleMovieInfo";

const Movies = () => {
  const { query, setQuery } = useGlobalContext();

  const API_URL = import.meta.env.VITE_API_STRING;

  const result = useQuery({
    queryKey: ["movies", query],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}&s=${query}`);
      return data;
    },
  });

  const { data, isLoading, isError } = result;

  if (isLoading) {
    return <>Loading</>;
  }

  if (isError) {
    return <>Error</>;
  }

  const movies = data.Search;

  return (
    <div className="max-w-2xl px-4 mx-auto my-8 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        List of Movies
      </h2>

      <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {movies.map((movie) => {
          return (
            <Link to={`/movie/${movie.imdbID}`}>
              <SingleMovieInfo key={movie.imdbID} {...movie} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
