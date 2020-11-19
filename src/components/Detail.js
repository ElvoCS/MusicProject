import React from "react";

const Detail = ({ track }) => {
  const test = () => {
    console.log(track.name);
  };

  return (
    <div className="offset-md-1 col-sm-4" onLoad={test}>
      <div className="row col-sm-12 px-0">
        <img width="100" src={track.album.images[0].url} alt={track.name}></img>
      </div>
      <div className="row col-sm-12 px-0">
        <label htmlFor={track.name} className="form-label col-sm-12">
          {track.name}
        </label>
      </div>
      <div className="row col-sm-12 px-0">
        <label htmlFor={track.artists[0].name} className="form-label col-sm-12">
          {track.artists[0].name}
        </label>
      </div>
    </div>
  );
};

export default Detail;
