import React, { Image } from "react";
import "./SongCard.css";
import { Card } from "@material-ui/core";

function SongCard(cardData) {
  return (
    <Card className="dataCard song_card_component" Style="border-radius:30px;color: black">
      <div className="song_card_container">
        <div className="song_card_title">
          <h4 Style="margin:5px">{cardData.title}</h4>
        </div>
        <div className="song_card_content"></div>
      </div>
    </Card>
  );
}

export default SongCard;
