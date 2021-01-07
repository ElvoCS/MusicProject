import React, { useState, useEffect } from "react";
import "../pages/styles/Song.css";
import { Credentials } from "../Credentials";
import { Card } from "@material-ui/core";
import axios from "axios";
import { XYPlot, VerticalBarSeries, XAxis, YAxis, LineSeries } from "react-vis";
import { useDispatch, useSelector } from "react-redux";
import { setSpotifyID } from "../redux/actions";

function Danceability() {
  const [valence, setValence] = useState();
  const spotifyID = useSelector((state) => state.SpotifyID);
  const songName = useSelector((state) => state.songName);

  let searchSuccess = false;
  const spotify = Credentials();
  const dispatch = useDispatch();

  useEffect(() => {
    if (spotifyID.length > 0) {
      spotifySearch();
    }
  }, [spotifyID]);

  const spotifySearch = async () => {
    await axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    })
      .then((tokenResponse) => {
        console.log("test", spotifyID);
        axios(`https://api.spotify.com/v1/audio-features/` + spotifyID, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + tokenResponse.data.access_token,
          },
        })
          .then((tracksResponse) => {
            console.log(tracksResponse);
            if (tracksResponse != undefined) {
              setValence((parseFloat(tracksResponse.data.valence) * 100).toFixed(1));
              searchSuccess = true;
            } else {
              searchSuccess = false;
            }
          })
          .catch((error) => {
            console.log("Spotify Search API call problem", error);
          });
      })
      .catch((error) => {
        console.log("Spotify access token problem", error);
      });
  };
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
  const data = [
    { x: 0, y: 0 },
    { x: 1, y: 342.09 },
    { x: 2, y: 389.15 },
    { x: 3, y: 457.93 },
    { x: 4, y: 579.2 },
    { x: 5, y: 532.14 },
    { x: 6, y: 615.4 },
    { x: 7, y: 629.88 },
    { x: 8, y: 660.65 },
    { x: 9, y: 577.39 },
    { x: 10, y: 597.3 },
    { x: 11, y: 615.4 },
    { x: 12, y: 660.65 },
    { x: 13, y: 550.24 },
    { x: 14, y: 571.96 },
    { x: 15, y: 515.85 },
    { x: 16, y: 494.13 },
    { x: 17, y: 367.43 },
    { x: 18, y: 331.23 },
    { x: 19, y: 0 },
  ];

  return (
    <div>
      <div className="graph_container">
        <Card className="graph-card" style={{ borderRadius: 30, color: "black" }}>
          <div className="song_card_title">
            <h4 style={{ margin: 5, fontSize: 20 }}>Valence</h4>
          </div>
          <div className="song_card_title">
            <h4 style={{ margin: 5, fontSize: 15 }}>
              {songName} : {valence}% valence
            </h4>
          </div>
          <div className="graph_description">
            <div className="graph_description_text">
              <h4>A measure from 0 to 100 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry). The distribution of values for this feature look like this:</h4>
            </div>
          </div>
          <div className="graph_card_content">
            <div className="y_axis_label">
              <h2>Frequency (Hz)</h2>
            </div>
            <XYPlot height={300} width={600} color="#0079BF" xDomain={[0, 20]} yDomain={[0, 700]} margin={{ left: 60 }}>
              <XAxis title="" style={{ overflow: "show", padding: 5 }} xDomain={[0, 100]} />
              <YAxis style={{ overflow: "show", padding: 5 }} />
              <VerticalBarSeries data={data} />
              {searchSuccess ? (
                <h1>No valence search success</h1>
              ) : (
                <LineSeries
                  color="#FF495C"
                  strokeWidth="4"
                  title={valence}
                  data={[
                    { x: scale(valence, 0, 100, 0, 20), y: 0 },
                    { x: scale(valence, 0, 100, 0, 20), y: 700 },
                  ]}
                />
              )}
            </XYPlot>
          </div>
          <div className="x_axis_label">
            <h2>Valence (%) </h2>
          </div>
          <div className="graph_description">
            <div className="graph_description_text"></div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Danceability;
