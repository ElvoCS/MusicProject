import React from "react";
import "./CardArea.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import { Card, AppBar, Toolbar, makeStyles } from "@material-ui/core";
import bg from "../res/bg.png"; // Tell webpack this JS file uses this image

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function CardArea() {
  return (
    <div className="CardArea">
      <Card className="dataCard" Style="border-radius:30px;background-color: #336bf2">
        <h1 className={"title"}>This is a data card</h1>
      </Card>

      <Card className="dataCard" Style="border-radius:30px;background-color: #336bf2">
        <h1 className={"title"}>This is a data card</h1>
      </Card>

      <Card className="dataCard" Style="border-radius:30px;background-color: #336bf2">
        <h1 className={"title"}>This is a data card</h1>
      </Card>

      <Card className="dataCard" Style="border-radius:30px;background-color: #336bf2">
        <h1 className={"title"}>This is a data card</h1>
      </Card>
      <Card className="dataCard" Style="border-radius:30px;background-color: #336bf2">
        <h1 className={"title"}>This is a data card</h1>
      </Card>

      <Card className="dataCard" Style="border-radius:30px;background-color: #336bf2">
        <h1 className={"title"}>This is a data card</h1>
      </Card>
      <Card className="dataCard" Style="border-radius:30px;background-color: #336bf2">
        <h1 className={"title"}>This is a data card</h1>
      </Card>
      <Card className="dataCard" Style="border-radius:30px;background-color: #336bf2">
        <h1 className={"title"}>This is a data card</h1>
      </Card>
    </div>
  );
}

export default CardArea;
