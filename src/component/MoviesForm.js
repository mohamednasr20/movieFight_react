import React, { useState, useEffect } from "react";
import useInputState from "../hooks/useInputState";
import useRequestDataState from "../hooks/useRequestDataState";
import { MovieResults } from "./MovieResults";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

export const MoviesForm = () => {
  const [searchTermOne, setSearchOne] = useInputState("");
  const [searchTermTwo, setSearchTwo] = useInputState("");
  const [moviesOne, fetchMoviesOne] = useRequestDataState([]);
  const [moviesTwo, fetchMoviesTwo] = useRequestDataState([]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      fetchMoviesOne(searchTermOne);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [searchTermOne]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      fetchMoviesTwo(searchTermTwo);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [searchTermTwo]);

  return (
    <Form className="my-3">
      <h3>search for movie</h3>
      <Row>
        <div className="col-6">
          <Form.Control
            size="lg"
            type="text"
            placeholder="movie Name"
            value={searchTermOne}
            onChange={setSearchOne}
          />
          <MovieResults movies={moviesOne} />
        </div>
        <div className="col-6">
          <Form.Control
            size="lg"
            type="text"
            placeholder="movie Name"
            value={searchTermTwo}
            onChange={setSearchTwo}
          />
          <MovieResults movies={moviesTwo} />
        </div>
      </Row>
    </Form>
  );
};
