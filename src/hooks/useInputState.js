import { useState } from "react";

const useInputState = (initVal) => {
  const [value, setValue] = useState(initVal);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
};

export default useInputState;
