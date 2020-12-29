import React from "react";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export const MovieTitle = ({ poster, title, year, id }) => {
  return (
    <Alert
      variant="info"
      className="text-left m-1"
      style={{ cursor: "pointer" }}
    >
      <Image className="mr-3" src={poster} style={{ height: "50px" }} rounded />
      <span>{title}</span>
      <Badge className="ml-1" variant="info">
        {year}
      </Badge>
      <Button id={id} variant="info" className="ml-2">
        Select
      </Button>{" "}
    </Alert>
  );
};
