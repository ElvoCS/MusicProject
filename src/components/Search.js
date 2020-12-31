import React, { useEffect, useState } from "react";
import { Credentials } from "../Credentials";
import axios from "axios";
import { useParams } from "react-router";
import SearchYoutube from "./SearchYoutube";
import { useDispatch } from "react-redux";
import { setSongName, setArtistName, setSpotifyID } from "../redux/actions";
import Biography from "./Biography";
import Danceability from "./Danceability";

function Search() {
  const spotify = Credentials();
  const [searchTerm, setSearchTerm] = useState("");
  const [spotifySearchTerm, setSpotifySearchTerm] = useState("");
  let searchSuccess = false;
  const dispatch = useDispatch();
  let st_temp = useParams();

  useEffect(() => {
    setSearchTerm(st_temp.id);
    setSpotifySearchTerm(st_temp.id.replaceAll(" ", "%20"));
    if (searchTerm.length > 0 && spotifySearchTerm.length > 0) {
      spotifySearch();
    }
  }, [searchTerm, spotifySearchTerm]);

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
        axios(`https://api.spotify.com/v1/search?q=` + spotifySearchTerm + `&type=track`, {
          method: "GET",
          headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
        })
          .then((tracksResponse) => {
            if (tracksResponse.data.tracks.items.length > 0) {
              console.log(tracksResponse);
              dispatch(setSongName(tracksResponse.data.tracks.items[0].name));
              dispatch(setArtistName(tracksResponse.data.tracks.items[0].artists[0].name));
              console.log(tracksResponse.data.tracks.items[0].id);
              dispatch(setSpotifyID(tracksResponse.data.tracks.items[0].id));
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
  return (
    <div>
      {searchSuccess ? (
        console.log("SPOTIFY SEARCH RESULTS EMPTY")
      ) : (
        <div>
          <SearchYoutube />
          <Biography />
          <Danceability />
        </div>
      )}
    </div>
  );
}
export default Search;
