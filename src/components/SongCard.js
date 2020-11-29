import React from "react";
import "./SongCard.css";
import { Card } from "@material-ui/core";

function SongCard(cardData) {
  return (
    <div className="">
      <Card className="dataCard song_card_component" Style="border-radius:30px;color: black">
        <h4 Style="margin:5px">{cardData.title}</h4>
      </Card>
    </div>
  );
}

export default SongCard;
