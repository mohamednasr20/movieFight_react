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
      setValue([]);
    }
  };

  return [value, handleDataRequest];
};

export default useRequestDataState;
