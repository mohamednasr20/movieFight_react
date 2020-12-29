import React from "react";
import { MovieTitle } from "./MovieTitle";

export const MovieResults = ({ movies, selectMovie }) => {
  const moviesList = movies.map((movie) => (
    <MovieTitle
      key={movie.imdbID}
      poster={movie.Poster}
      title={movie.Title}
      year={movie.Year}
      id={movie.imdbID}
    />
  ));
  return <div onClick={selectMovie}>{moviesList}</div>;
};
