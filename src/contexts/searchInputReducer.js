export default (state, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "RESET":
      return {
        ...state,
        [action.payload]: "",
      };
    default:
      return state;
  }
};
