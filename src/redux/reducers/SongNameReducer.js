const SongNameReducer = (state = "", action) => {
  switch (action.type) {
    case "setSongName":
      return action.payload;
    default:
      return state;
  }
};

export default SongNameReducer;
