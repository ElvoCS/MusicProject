import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import "./MediaControlCard.css";

function MediaControlCard() {
  return (
    <div className="details">
      <Card className="Card" Style="border-radius:30px;background-color: #336bf2; margin-top:80px;">
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
