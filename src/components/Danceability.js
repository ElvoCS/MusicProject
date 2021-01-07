import React, { useState, useEffect } from "react";
import "../pages/styles/Song.css";
import { Credentials } from "../Credentials";
import { Card } from "@material-ui/core";
import axios from "axios";
import { XYPlot, VerticalBarSeries, XAxis, YAxis, LineSeries } from "react-vis";
import { useDispatch, useSelector } from "react-redux";
import { setSpotifyID } from "../redux/actions";
import "react-vis/dist/style.css";

function Danceability() {
  const [danceability, setDanceability] = useState();
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
        axios(`https://api.spotify.com/v1/audio-features/` + spotifyID, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + tokenResponse.data.access_token,
          },
        })
          .then((tracksResponse) => {
            if (tracksResponse != undefined) {
              setDanceability((parseFloat(tracksResponse.data.danceability) * 100).toFixed(1));
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
    { x: 1, y: 17.64 },
    { x: 2, y: 35.2941176471 },
    { x: 3, y: 73.5294117647 },
    { x: 4, y: 161.764705882 },
    { x: 5, y: 188.235294118 },
    { x: 6, y: 255.882352941 },
    { x: 7, y: 367.647058824 },
    { x: 8, y: 458.823529412 },
    { x: 9, y: 605.882352942 },
    { x: 10, y: 764.705882353 },
    { x: 11, y: 967.647058824 },
    { x: 12, y: 1050 },
    { x: 13, y: 1035.29411765 },
    { x: 14, y: 847.05882353 },
    { x: 15, y: 647.05882353 },
    { x: 16, y: 344.117647059 },
    { x: 17, y: 150 },
    { x: 18, y: 73.5294117647 },
    { x: 19, y: 0 },
  ];

  return (
    <div>
      <div className="graph_container">
        <Card className="graph-card" style={{ borderRadius: 30, color: "black" }}>
          <div className="song_card_title">
            <h4 style={{ margin: 5, fontSize: 20 }}>Danceability</h4>
          </div>
          <div className="song_card_title">
            <h4 style={{ margin: 5, fontSize: 15 }}>
              {songName} : {danceability}% danceable
            </h4>
          </div>
          <div className="graph_description">
            <div className="graph_description_text">
              <h4>Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0 is least danceable and 100 is most danceable. The distribution of values for this feature look like this.</h4>
            </div>
          </div>
          <div className="graph_card_content">
            <div className="y_axis_label">
              <h2>Frequency (Hz)</h2>
            </div>

            <XYPlot height={300} width={600} color="#0079BF" xDomain={[0, 20]} yDomain={[0, 1100]} margin={{ left: 60 }}>
              <XAxis title="" style={{ overflow: "show", padding: 5 }} xDomain={[0, 100]} />
              <YAxis style={{ overflow: "show", padding: 5 }} />
              <VerticalBarSeries data={data} />
              {searchSuccess ? (
                <h1>No danceability search success</h1>
              ) : (
                <LineSeries
                  color="#FF495C"
                  strokeWidth="4"
                  title={danceability}
                  data={[
                    { x: scale(danceability, 0, 100, 0, 20), y: 0 },
                    { x: scale(danceability, 0, 100, 0, 20), y: 1100 },
                  ]}
                />
              )}
            </XYPlot>
          </div>
          <div className="x_axis_label">
            <h2>Danceability (%) </h2>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Danceability;
