import React from "react";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";

export const MovieTitle = ({ poster, title, year, id }) => {
  return (
    <Alert
      variant="info"
      className="text-left m-1"
      style={{ cursor: "pointer" }}
      id={id}
    >
      <Image className="mr-3" src={poster} style={{ height: "50px" }} rounded />
      <span>{title}</span>
      <Badge className="ml-3" variant="info">
        {year}
      </Badge>
    </Alert>
  );
};
