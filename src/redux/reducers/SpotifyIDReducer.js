const SpotifyIDReducer = (state = "", action) => {
  switch (action.type) {
    case "setSpotifyID":
      return action.payload;
    default:
      return state;
  }
};

export default SpotifyIDReducer;
