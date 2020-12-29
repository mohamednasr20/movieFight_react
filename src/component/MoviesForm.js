import React, { useState, useEffect } from "react";
import useInputState from "../hooks/useInputState";
import useRequestDataState from "../hooks/useRequestDataState";
import { MovieResults } from "./MovieResults";
import { MovieDetailes } from "./MovieDetailes";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import axios from "axios";

export const MoviesForm = () => {
  const [searchTermOne, setSearchOne, resetSearchOne] = useInputState("");
  const [searchTermTwo, setSearchTwo] = useInputState("");
  const [moviesOne, fetchMoviesOne, resetMoviesOne] = useRequestDataState([]);
  const [moviesTwo, fetchMoviesTwo] = useRequestDataState([]);
  const [movie, setMovie] = useState({});
  const [movieId, setMovieId] = useState("");

  const handleMovieSeclect = (e) => {
    setMovieId(e.target.id);
    resetSearchOne();
    resetMoviesOne();
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
    const handleMovieData = async (movieId) => {
      const response = await axios.get("http://www.omdbapi.com/", {
        params: {
          apikey: "b1c01351",
          i: movieId,
        },
      });
      setMovie(response.data);
      console.log(response.data);
    };
    if (movieId) {
      handleMovieData(movieId);
    }
  }, [movieId]);

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
          <MovieResults movies={moviesOne} selectMovie={handleMovieSeclect} />
          <MovieDetailes movie={movie} />
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
