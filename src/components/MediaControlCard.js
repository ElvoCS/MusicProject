import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import "./styles/MediaControlCard.css";

function MediaControlCard() {
  return (
    <div className="details">
      <Card className="Card" style={{ borderRadius: 30, backgroundColor: "336bf2", marginTop: 80 }}>
        <CardContent className="mediaContent__container">
          <div className="mediaContent">
            <Typography component="h5" variant="h5">
              Buffalo Soldier
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Bob Marley
            </Typography>
          </div>
        </CardContent>

        <div className="mediaControls__container">
          <div className="mediaControls">
            <IconButton className="previous">
              <SkipPreviousIcon />
            </IconButton>

            <IconButton className="play">
              <PlayArrowIcon />
            </IconButton>

            <IconButton className="next">
              <SkipNextIcon />
            </IconButton>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default MediaControlCard;
