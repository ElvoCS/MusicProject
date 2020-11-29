import React from "react";
import "./Detail.css";

const Detail = ({ track }) => {
  return (
    <div className="song_card">
      <img width="100" src={track.album.images[0].url} alt={track.name} className="song_thumbnail"></img>
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
