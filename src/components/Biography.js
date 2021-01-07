import React, { useState, useEffect } from "react";
import axios from "axios";
import SongCard from "./SongCard";
import "../pages/styles/Song.css";
import { useSelector } from "react-redux";

function Biography() {
  const songName = useSelector((state) => state.songName);
  const artistName = useSelector((state) => state.artistName);
  const [artistBio, setArtistBio] = useState("");

  useEffect(() => {
    if (songName.length > 0 && artistName.length > 0) audioDBSearch();
  }, [songName, artistName, artistBio]);

  const audioDBSearch = async () => {
    await axios(`https://theaudiodb.com/api/v1/json/1/search.php?s=` + artistName, {
      method: "GET",
    })
      .then((tracksResponse) => {
        if (tracksResponse.data.artists.length > 0 && tracksResponse.data.artists[0].strBiographyEN.length > 0) {
          setArtistBio(tracksResponse.data.artists[0].strBiographyEN);
        } else {
          setArtistBio("Biography currently Unavailable for this artist.");
        }
      })
      .catch((error) => {
        console.log("AudioDB API call problem", error);
      });
  };

  return (
    <div className="song_container_title_container">
      <SongCard title={artistName + "'s Biography"} bio={artistBio} />
    </div>
  );
}

export default Biography;
