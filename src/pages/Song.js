import React, { useEffect, useState } from "react";
import "./Song.css";

import { Card } from "@material-ui/core";
import SongCard from "../components/SongCard";
import ReactPlayer from "react-player";
import YTSearch from "youtube-api-search";

import { useParams } from "react-router-dom";

function Song() {
  let st = useParams();
  const [videoID, setVideoID] = useState();

  const searchSong = async (term) => {
    await YTSearch({ key: "AIzaSyCGfrAHXk8YHxl9FKaB8FTof1bgIvnFvFw", term: term }, (videos) => {
      setVideoID(videos[0].id.videoId);
    });
  };

  useEffect(() => {
    console.log(st.id);
    searchSong(st.id);
  }, []);

  return (
    <div>
      <div className="youtube-player-container">
        <Card className="player-card" Style="border-radius:30px; color: black; overflow: hidden;">
          <div className="youtube-player" Style="width:100%; height:100%;">
            <ReactPlayer play={true} allow="autoplay" className="youtube-player" origin="http://localhost:3000" controls={true} volume={0.2} width="100%" height="100%" url={"http://www.youtube.com/watch?v=" + videoID + "?autoplay=1"} />
          </div>
        </Card>
      </div>
      <div className="songContainer">
        <SongCard title="Song Data 0" />
        <SongCard title="Song Data 1" />
        <SongCard title="Song Data 2" />
      </div>
    </div>
  );
}

export default Song;
