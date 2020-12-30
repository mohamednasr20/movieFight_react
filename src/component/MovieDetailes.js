import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const MovieDetailes = ({ movie }) => {
  const movieCard = movie.Title ? (
    <Card className="mt-4 bg-light" style={{ width: "100%" }}>
      <Card.Img
        style={{ height: "  300px" }}
        variant="top"
        src={movie.Poster}
      />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Plot}</Card.Text>
      </Card.Body>

      <Card.Body className="mt-3">
        <ListGroup variant="flush">
          <ListGroup.Item>
            {" "}
            <span className="text-info">ACTORS:</span> {movie.Actors}
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <span className="text-info"> RATE:</span> {movie.imdbRating}
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <span className="text-info">BOX OFFICE:</span> {movie.BoxOffice}
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <span className="text-info">AWARDS:</span> {movie.Awards}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  ) : (
    <div></div>
  );

  return <>{movieCard}</>;
};
