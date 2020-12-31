const YoutubeVideoIDReducer = (state = "", action) => {
  switch (action.type) {
    case "setVideoID":
      return action.payload;
    default:
      return state;
  }
};

export default YoutubeVideoIDReducer;
