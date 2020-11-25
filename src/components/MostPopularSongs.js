import React, { useState, useEffect } from "react";
import Detail from "./Detail";
import { Credentials } from "../credentials";
import axios from "axios";
import "./MostPopularSongs.css";

const MostPopularSongs = () => {
  const spotify = Credentials();
  const [token, setToken] = useState("");
  const [musicData, setmusicData] = useState([]);

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    })
      .then((tokenResponse) => {
        setToken(tokenResponse.data.access_token);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [spotify.ClientId, spotify.ClientSecret]);

  useEffect(() => {
    getMostPopular();
  });

  const getMostPopular = async () => {
    await axios(`https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((tracksResponse) => {
        setmusicData(tracksResponse.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="songs_container">
      {musicData.map((data, id) => {
        return <Detail track={data.track} key={id} />;
      })}
    </div>
  );
};

export default MostPopularSongs;
