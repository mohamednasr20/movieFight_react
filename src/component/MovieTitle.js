import React from "react";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";

export const MovieTitle = ({ poster, title }) => {
  return (
    <Alert
      variant="info"
      className="text-left m-1"
      style={{ cursor: "pointer" }}
    >
      <Image className="mr-3" src={poster} style={{ height: "50px" }} rounded />
      <span>{title}</span>
    </Alert>
  );
};
