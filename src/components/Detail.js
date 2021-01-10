import React from "react";
import "./styles/Detail.css";
import { useHistory } from "react-router";

const Detail = ({ track }) => {
  let history = useHistory();

  return (
    <div className="song_card" onClick={() => history.push("/song/" + track.artists[0].name + " " + track.name)}>
      <img width="100" height="100" src={track.album.images[0].url} alt={track.name} className="song_thumbnail"></img>
      <label htmlFor={track.name} className="song_name">
        {track.name}
      </label>
      <label htmlFor={track.artists[0].name} className="artist_name">
        {track.artists[0].name}
      </label>
    </div>
  );
};

export default Detail;
