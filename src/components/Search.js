import React, { useEffect, useState, useContext } from "react";
import { Credentials } from "../Credentials";
import axios from "axios";
import { useParams } from "react-router";
import SearchYoutube from "./SearchYoutube";
import { useDispatch } from "react-redux";
import { setSongName, setArtistName, setSpotifyID } from "../redux/actions";
import Biography from "./Biography";
import Danceability from "./Danceability";
import Valence from "./Valence";
import { UserContext } from "../providers/UserProvider";
import firebase from "firebase";

function Search() {
  const user = useContext(UserContext);
  const spotify = Credentials();
  const [uid_, setUid] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [spotifySearchTerm, setSpotifySearchTerm] = useState("");
  let searchSuccess = false;
  const dispatch = useDispatch();
  let st_temp = useParams();

  useEffect(() => {
    if (user) {
      // console.log(user);
      const { uid } = user;
      //  console.log(uid);
      setUid(uid);
      setSearchTerm(st_temp.id);
      setSpotifySearchTerm(st_temp.id.replaceAll(" ", "%20"));
      if (searchTerm.length > 0 && spotifySearchTerm.length > 0) {
        spotifySearch();
      }
    }
  }, [user, searchTerm, spotifySearchTerm]);

  const saveSearch = async (song_name, artist_name) => {
    if (!user) return;

    firebase
      .firestore()
      .collection("History")
      .add({
        uid: uid_,
        history_text: artist_name + " " + song_name,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
  };

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
          headers: {
            Authorization: "Bearer " + tokenResponse.data.access_token,
          },
        })
          .then((tracksResponse) => {
            if (tracksResponse.data.tracks.items.length > 0) {
              var songName = tracksResponse.data.tracks.items[0].name;
              var artistName = tracksResponse.data.tracks.items[0].artists[0].name;
              var id = tracksResponse.data.tracks.items[0].id;

              dispatch(setSongName(songName));
              dispatch(setArtistName(artistName));
              dispatch(setSpotifyID(id));
              saveSearch(songName, artistName);
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
        <div>
          {console.log("SPOTIFY SEARCH RESULTS EMPTY")}
          <h2>No search results found. Please try another search.</h2>
        </div>
      ) : (
        <div>
          <SearchYoutube />
          <Biography />
          <Danceability />
          <Valence />
        </div>
      )}
    </div>
  );
}
export default Search;
