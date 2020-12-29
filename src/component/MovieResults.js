import React from "react";
import { MovieTitle } from "./MovieTitle";

export const MovieResults = ({ movies }) => {
  const moviesList = movies.map((movie) => (
    <MovieTitle key={movie.imdbID} poster={movie.Poster} title={movie.Title} />
  ));
  return <div>{moviesList}</div>;
};
