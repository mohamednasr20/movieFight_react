import React, { useState, useEffect, useContext } from "react";
import useRequestDataState from "../hooks/useRequestDataState";
import { MovieResults } from "./MovieResults";
import { MovieDetailes } from "./MovieDetailes";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import useMovieState from "../hooks/useMovieState";
import { SearchTermContext } from "../contexts/SearchTermState";

export const MoviesForm = () => {
  const [moviesOne, fetchMoviesOne, resetMoviesOne] = useRequestDataState([]);
  const [moviesTwo, fetchMoviesTwo, resetMoviesTwo] = useRequestDataState([]);
  const [movieOne, setMovieOne] = useMovieState({});
  const [movieTwo, setMovieTwo] = useMovieState({});
  const [movieIdOne, setMovieIdOne] = useState("");
  const [movieIdTwo, setMovieIdTwo] = useState("");

  const { handleChange, searchTermOne, searchTermTwo, reset } = useContext(
    SearchTermContext
  );

  const handleMovieSeclectOne = (e) => {
    setMovieIdOne(e.target.id);
    reset("searchTermOne");
    resetMoviesOne();
  };

  const handleMovieSeclectTwo = (e) => {
    setMovieIdTwo(e.target.id);
    reset("searchTermTwo");
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieIdOne]);

  useEffect(() => {
    if (!movieIdTwo) return;

    setMovieTwo(movieIdTwo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieIdTwo]);

  return (
    <Form className="my-3">
      <h3>search for movie</h3>
      <Row>
        <div className="col-6">
          <Form.Control
            size="lg"
            type="text"
            name="searchTermOne"
            value={searchTermOne}
            onChange={(e) => handleChange(e)}
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
            name="searchTermTwo"
            value={searchTermTwo}
            onChange={(e) => handleChange(e)}
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
