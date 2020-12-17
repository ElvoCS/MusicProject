import React from "react";
import "./Song.css";

import CardArea from "../components/CardArea";
import { Card, isWidthDown } from "@material-ui/core";
import SongCard from "../components/SongCard";
import Player from "../components/Player";

function Song() {
  return (
    <div>
      <div Style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Player />
      </div>
      <div className="songContainer">
        <SongCard title="Song Data" />
        <SongCard title="Song Data" />
        <SongCard title="Song Data" />
      </div>
    </div>
  );
}

export default Song;
