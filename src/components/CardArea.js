import React from "react";
import "./CardArea.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import bg from "../res/bg.png"; // Tell webpack this JS file uses this image

function CardArea() {
  return (
    <div className="cardArea">
      <div className="card"> </div>
    </div>
  );
}

export default CardArea;
