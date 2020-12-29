import React from "react";
import Card from "react-bootstrap/Card";

export const MovieDetailes = ({ movie }) => {
  const movieCard = movie.Title ? (
    <Card className="mt-4 bg-light" style={{ width: "34rem", height: "35rem" }}>
      <Card.Img
        style={{ height: "  300px" }}
        variant="top"
        src={movie.Poster}
      />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Plot}</Card.Text>
      </Card.Body>

      <Card.Body>{movie.imdbRating}</Card.Body>
    </Card>
  ) : (
    <div></div>
  );

  return <>{movieCard}</>;
};
