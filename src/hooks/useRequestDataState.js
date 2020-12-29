import { useState } from "react";
import axios from "axios";

const useRequestDataState = (initalVal) => {
  const [value, setValue] = useState(initalVal);

  const handleDataRequest = async (searchTerm) => {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "b1c01351",
        s: searchTerm,
      },
    });
    const movies = response.data.Search;
    if (movies) {
      setValue(movies);
    } else {
      setValue(initalVal);
    }
  };

  const reset = () => {
    setValue(initalVal);
  };

  return [value, handleDataRequest, reset];
};

export default useRequestDataState;
