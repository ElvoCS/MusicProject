import React from "react";
import "./Song.css";

import CardArea from "../components/CardArea";
import { Card } from "@material-ui/core";
import SongCard from "../components/SongCard";

function Song() {
  return (
    <div className="songContainer">
      <SongCard title="example" />
      <SongCard title="test" />
    </div>
  );
}

export default Song;
