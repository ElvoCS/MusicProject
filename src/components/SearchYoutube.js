import React, { useEffect } from "react";
import YTSearch from "youtube-api-search";
import { Card } from "@material-ui/core";
import ReactPlayer from "react-player";
import "../pages/styles/Song.css";
import { useSelector, useDispatch } from "react-redux";
import { setVideoID } from "../redux/actions";

function SearchYoutube(data) {
  const songName = useSelector((state) => state.songName);
  const artistName = useSelector((state) => state.artistName);
  const videoID = useSelector((state) => state.videoID);
  let searchSuccess = false;
  const dispatch = useDispatch();

  useEffect(() => {
    if (songName.length > 0 && artistName.length > 0) searchSong();
  }, [songName, artistName]);

  const searchSong = async () => {
    dispatch(setVideoID("JFm7YDVlqnI"));
    /*  
    let term = artistName + " " + songName;
     await YTSearch({ key: "AIzaSyCGfrAHXk8YHxl9FKaB8FTof1bgIvnFvFw", term: term }, (videos) => {
      if (videos.length > 0) {
        dispatch(setVideoID(videos[0].id.videoId));
      }
    });*/
  };

  return (
    <div>
      {searchSuccess ? (
        console.log("YOUTUBE SEARCH RESULTS EMPTY")
      ) : (
        <div className="youtube-player-container">
          <Card className="player-card" style={{ borderRadius: 30, color: "black", overflow: "hidden", backgroundColor: "black" }}>
            <div className="youtube-player" style={{ width: "100%", height: "100%" }}>
              <ReactPlayer allow="autoplay" className="youtube-player" origin="http://localhost:3000" controls={true} volume={0.2} width="100%" height="100%" url={"http://www.youtube.com/watch?v=" + videoID + "?autoplay=1"} />
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

export default SearchYoutube;
