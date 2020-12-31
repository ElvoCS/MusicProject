const ArtistNameReducer = (state = "", action) => {
  switch (action.type) {
    case "setArtistName":
      return action.payload;
    default:
      return state;
  }
};

export default ArtistNameReducer;
