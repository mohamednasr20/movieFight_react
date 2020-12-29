import React from "react";

export const MovieDetailes = ({ movie }) => {
  const movieTitle = movie ? movie.Title : "hello";
  return <div>{movieTitle}</div>;
};
