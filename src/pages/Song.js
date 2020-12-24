import React, { useEffect, useState } from "react";
import "./Song.css";

import { Card } from "@material-ui/core";
import SongCard from "../components/SongCard";
import ReactPlayer from "react-player";
import YTSearch from "youtube-api-search";
import { useParams } from "react-router-dom";
import axios from "axios";

function Song() {
  let st = useParams();
  const [videoID, setVideoID] = useState();
  const [artistBio, setArtistBio] = useState();
  const [artistName, setArtistName] = useState();
  const [artistBorn, setArtistBorn] = useState();

  const searchSong = async (term) => {
    await YTSearch({ key: "AIzaSyCGfrAHXk8YHxl9FKaB8FTof1bgIvnFvFw", term: term }, (videos) => {
      setVideoID(videos[0].id.videoId);
      console.log(videos[0]);
    });
  };

  const audioDBSearch = async (term) => {
    await axios(`https://theaudiodb.com/api/v1/json/1/search.php?s=` + term, {
      method: "GET",
    })
      .then((tracksResponse) => {
        console.log(tracksResponse);
        setArtistBio(tracksResponse.data.artists[0].strBiographyEN);
        setArtistName(tracksResponse.data.artists[0].strArtist);
        setArtistBorn(tracksResponse.data.artists[0].intBornYear);
      })
      .catch((error) => {
        console.log("AudioDB API call problem", error);
      });
  };

  useEffect(() => {
    console.log(st.id);
    searchSong(st.id);
    audioDBSearch(st.id);
  }, []);

  return (
    <div>
      <div className="youtube-player-container">
        <Card className="player-card" Style="border-radius:30px; color: black; overflow: hidden; background-color:black;">
          <div className="youtube-player" Style="width:100%; height:100%;">
            <ReactPlayer play={true} allow="autoplay" className="youtube-player" origin="http://localhost:3000" controls={true} volume={0.2} width="100%" height="100%" url={"http://www.youtube.com/watch?v=" + videoID + "?autoplay=1"} />
          </div>
        </Card>
      </div>
      <div className="song_container_title_container">
        <SongCard title={artistName + " Biography"} bio={artistBio} />
      </div>
      <div className="songContainer">
        <SongCard title={"Born in"} bio={artistBorn} />
        <SongCard title="Song Data 2" />
      </div>
    </div>
  );
}

export default Song;
