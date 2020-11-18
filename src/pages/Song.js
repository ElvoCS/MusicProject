import React from "react";
import "./Song.css";

import CardArea from "../components/CardArea";
import { Card } from "@material-ui/core";

function Song() {
  return (
    <div>
      <div className="songContainer">
        <CardArea />
      </div>
    </div>
  );
}

export default Song;
