import React from "react";
import "./styles/SongCard.css";
import { Card } from "@material-ui/core";

function SongCard(cardData) {
  return (
    <Card className="dataCard song_card_component" style={{ borderRadius: "30px", color: "black" }}>
      <div className="song_card_title">
        <h4 style={{ margin: 5 }}>{cardData.title}</h4>
      </div>
      <div className="song_card_content">
        <div className="song_card_text" style={{ margin: 5 }}>
          {cardData.bio}
        </div>
      </div>
    </Card>
  );
}

export default SongCard;
