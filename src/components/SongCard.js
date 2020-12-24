import React, { Image } from "react";
import "./SongCard.css";
import { Card } from "@material-ui/core";

function SongCard(cardData) {
  return (
    <Card className="dataCard song_card_component" Style="border-radius:30px;color: black">
      <div className="song_card_content">
        <div className="song_card_title">
          <h4 Style="margin:5px">{cardData.title}</h4>
        </div>
        <h4 className="song_card_text" Style="margin:5px">
          {cardData.bio}
        </h4>
      </div>
    </Card>
  );
}

export default SongCard;
