import axios from "axios";

const URL = "http://www.omdbapi.com/";

export const handleDataSearch = async (searchTerm) => {
  const response = await axios.get(URL, {
    params: {
      apikey: "b1c01351",
      s: searchTerm,
    },
  });
  return response.data.Search;
};

export const handleMovieData = async (movieId) => {
  const response = await axios.get(URL, {
    params: {
      apikey: "b1c01351",
      i: movieId,
    },
  });
  return response.data;
};
