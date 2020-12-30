import { createContext, useReducer } from "react";
import searchInputReducer from "./searchInputReducer";

const initialState = {
  searchTermOne: "",
  searchTermTwo: "",
};

export const SearchTermContext = createContext(initialState);

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchInputReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "HANDLE_CHANGE",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const reset = (st) => {
    dispatch({
      type: "RESET",
      payload: st,
    });
  };

  return (
    <SearchTermContext.Provider
      value={{
        searchTermOne: state.searchTermOne,
        searchTermTwo: state.searchTermTwo,
        handleChange,
        reset,
      }}
    >
      {children}
    </SearchTermContext.Provider>
  );
};
