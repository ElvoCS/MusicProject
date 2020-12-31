import SongNameReducer from "./SongNameReducer";
import ArtistNameReducer from "./ArtistNameReducer";
import YoutubeVideoIDReducer from "./YoutubeVideoIDReducer";
import { combineReducers } from "redux";
import SpotifyIDReducer from "./SpotifyIDReducer";

const songDataReducers = combineReducers({
  songName: SongNameReducer,
  artistName: ArtistNameReducer,
  videoID: YoutubeVideoIDReducer,
  SpotifyID: SpotifyIDReducer,
});

export default songDataReducers;
