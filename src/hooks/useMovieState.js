import { useState } from "react";

import { handleMovieData } from "../Apis";

const useMovieState = (initalVal) => {
  const [value, setValue] = useState(initalVal);

  const movieData = async (id) => {
    const movie = await handleMovieData(id);

    setValue(movie);
  };

  const reset = () => {
    setValue(initalVal);
  };

  return [value, movieData, reset];
};

export default useMovieState;
