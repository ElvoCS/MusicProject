import React, { useEffect, useState } from "react";
import "./styles/Song.css";
import Search from "../components/Search";

function Song() {
  /*
  DONE ----- 1) getting the searched for songs name from the url parameters
  DONE ----- 2) querying spotify for that song name
  DONE ----- 3) querying youtube to get the video
  DONE ----- 4) querying audiodb for biography
  5) Graphing danceability

  current problem: syncing states across Search component and searchyoutube component
  solution: make song name & artist name globally accessible within the song page context

  search function from spotify
  "drake"
  "drake one dance"
  "one dance"
  return: 
        song_name: string
        artist_name: string
  */

  return (
    <div>
      <Search />
    </div>
  );
}

export default Song;
