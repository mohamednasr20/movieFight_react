import { useState } from "react";

import { handleDataSearch } from "../Apis";

const useRequestDataState = (initalVal) => {
  const [value, setValue] = useState(initalVal);

  const handleDataRequest = async (searchTerm) => {
    const movies = await handleDataSearch(searchTerm);

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
