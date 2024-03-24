import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleMovie = () => {
  const { id } = useParams();

  const apiString = import.meta.env.VITE_API_STRING;

  const result = useQuery({
    queryKey: ["singlemovie", id],
    queryFn: async () => {
      const { data } = await axios.get(`${apiString}&i=${id}`);
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

  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Ratings,
    Metascore,
    imdbRating,
    imdbVotes,
    imdbID,
    Type,
    DVD,
    BoxOffice,
    Production,
    Website,
  } = result.data;

  return (
    <article className="flex pt-6 justify-evenly max-sm:flex-col">
      <div className="flex flex-col items-center min-w-[50%] justify-center my-4">
        <img
          src={Poster}
          alt={Title}
          className="object-cover object-center h-fit"
        />
        <div>
          <strong>Ratings:</strong>
          <ul>
            {Ratings &&
              Ratings.map((rating, index) => (
                <li key={index}>
                  <strong>{rating.Source}:</strong> {rating.Value}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="mb-5 mr-5 max-sm:px-3">
        <div className="details">
          <h2 className="text-2xl font-bold">
            {Title} ({Year})
          </h2>
          <p>
            <strong>Director:</strong> {Director}
          </p>
          <p>
            <strong>Writer:</strong> {Writer}
          </p>
          <p>
            <strong>Actors:</strong> {Actors}
          </p>
          <p>
            <strong>Plot:</strong> {Plot}
          </p>
          <p>
            <strong>Genre:</strong> {Genre}
          </p>
          <p>
            <strong>Rated:</strong> {Rated}
          </p>
          <p>
            <strong>Runtime:</strong> {Runtime}
          </p>
          <p>
            <strong>Language:</strong> {Language}
          </p>
          <p>
            <strong>Country:</strong> {Country}
          </p>
          <p>
            <strong>Released:</strong> {Released}
          </p>
          <p>
            <strong>Awards:</strong> {Awards}
          </p>
          <p>
            <strong>Metascore:</strong> {Metascore}
          </p>
          <div className="flex gap-2">
            <p>
              <strong>IMDB Rating:</strong> {imdbRating}
            </p>
            <p>
              <strong>IMDB Votes:</strong> {imdbVotes}
            </p>
            <p>
              <strong>IMDB ID:</strong> {imdbID}
            </p>
          </div>

          <p>
            <strong>Type:</strong> {Type}
          </p>
          <p>
            <strong>DVD Release:</strong> {DVD}
          </p>
          <p>
            <strong>Box Office:</strong> {BoxOffice}
          </p>
          <p>
            <strong>Production:</strong> {Production}
          </p>
          <p>
            <strong>Website:</strong> {Website}
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">{Year}</p>
      </div>
    </article>
  );
};

export default SingleMovie;

/*

          

*/
