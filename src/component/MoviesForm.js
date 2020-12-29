import React, { useState, useEffect } from "react";
import useInputState from "../hooks/useInputState";
import useRequestDataState from "../hooks/useRequestDataState";
import useIdState from "../hooks/useInputState";
import { MovieResults } from "./MovieResults";
import { MovieDetailes } from "./MovieDetailes";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import useMovieState from "../hooks/useMovieState";

export const MoviesForm = () => {
  const [searchTermOne, setSearchOne, resetSearchOne] = useInputState("");
  const [searchTermTwo, setSearchTwo, resetSearchTwo] = useInputState("");
  const [moviesOne, fetchMoviesOne, resetMoviesOne] = useRequestDataState([]);
  const [moviesTwo, fetchMoviesTwo, resetMoviesTwo] = useRequestDataState([]);
  const [movieOne, setMovieOne] = useMovieState({});
  const [movieTwo, setMovieTwo] = useMovieState({});
  const [movieIdOne, setMovieIdOne] = useState("");
  const [movieIdTwo, setMovieIdTwo] = useState("");

  const handleMovieSeclectOne = (e) => {
    setMovieIdOne(e.target.id);
    resetSearchOne();
    resetMoviesOne();
  };

  const handleMovieSeclectTwo = (e) => {
    setMovieIdTwo(e.target.id);
    resetSearchTwo();
    resetMoviesTwo();
  };

  useEffect(() => {
    if (!searchTermOne) return;
    const timeOutId = setTimeout(() => {
      fetchMoviesOne(searchTermOne);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTermOne]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      fetchMoviesTwo(searchTermTwo);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTermTwo]);

  useEffect(() => {
    if (!movieIdOne) return;

    setMovieOne(movieIdOne);
  }, [movieIdOne]);

  useEffect(() => {
    if (!movieIdTwo) return;

    setMovieTwo(movieIdTwo);
  }, [movieIdTwo]);

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
          <MovieResults
            movies={moviesOne}
            selectMovie={handleMovieSeclectOne}
          />
          <MovieDetailes movie={movieOne} />
        </div>
        <div className="col-6">
          <Form.Control
            size="lg"
            type="text"
            placeholder="movie Name"
            value={searchTermTwo}
            onChange={setSearchTwo}
          />
          <MovieResults
            movies={moviesTwo}
            selectMovie={handleMovieSeclectTwo}
          />
          <MovieDetailes movie={movieTwo} />
        </div>
      </Row>
    </Form>
  );
};
