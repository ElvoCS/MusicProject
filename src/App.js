import React, { useState, useEffect } from "react";
import Dropdown from "./components/Dropdown";
import Listbox from "./components/Listbox";
import Detail from "./components/Detail";
import { Credentials } from "./Credentials";
import axios from "axios";
import Footer from "./components/Footer";

const App = () => {
  const spotify = Credentials();
  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState({
    selectedTrack: "",
    listOfTracksFromAPI: [],
  });
  var elements = [];
  const [musicData, setmusicData] = useState([]);
  const [trackDetail, setTrackDetail] = useState(null);

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);
    });
  }, [spotify.ClientId, spotify.ClientSecret]);

  const getMostPopular = (e) => {
    axios(`https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((tracksResponse) => {
      setTracks({
        selectedTrack: tracks.selectedTrack,
        listOfTracksFromAPI: tracksResponse.data.items,
      });
    });
  };

  const loadElements = (e) => {
    getMostPopular();
    for (var i = 0; i < tracks.listOfTracksFromAPI.length; i++) {
      elements.push(tracks.listOfTracksFromAPI[i].track);
    }

    setmusicData(elements);
    console.log(elements);
  };

  return (
    <div className="container">
      <div className="col-sm-6 row form-group px-0">
        <button onClick={loadElements} className="btn btn-success col-sm-12">
          load elements
        </button>

        <div>
          {musicData.map((data, id) => {
            return <Detail track={data} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
