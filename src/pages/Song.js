import React from "react";
import "./Song.css";

import CardArea from "../Components/CardArea";
import { Card } from "@material-ui/core";
import SongCard from "../components/SongCard";

function Song() {
  return (
    <div className="songContainer">
      <SongCard title="Song Data" />
      <SongCard title="Song Data" />
      <SongCard title="Song Data" />
    </div>
  );
}

export default Song;
