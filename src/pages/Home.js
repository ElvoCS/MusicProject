import React, { useContext, useState, useEffect } from "react";
import "./styles/Home.css";
import { Button, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import bigLogo from "../res/logo_big.png"; // Tell webpack this JS file uses this image
import music from "../res/music.png"; // Tell webpack this JS file uses this image
import data from "../res/data.png"; // Tell webpack this JS file uses this image
import MostPopularSongs from "../components/MostPopularSongs";
import Player from "../components/Player";
import { UserContext } from "../providers/UserProvider";

function Home() {
  const user = useContext(UserContext);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    if (user) {
      const { displayName, photoURL } = user;
      setDisplayName(displayName);
      console.log("name: ", displayName, photoURL);
      setPhotoURL(photoURL);
    }
    console.log("user; ", user);
  }, [user]);

  const loadLogin = () => {
    window.location.href = "./Login";
  };

  const loadCreateAccount = () => {
    window.location.href = "./CreateAccount";
  };

  return (
    <div className="Home">
      <div className="home_spash_container">
        <div className="home_left">
          <img src={bigLogo} alt="Logo" className="big_logo" />
        </div>

        <div className="home_right">
          {user ? (
            <div>
              <div className="profile_pic_container">
                <img className="profile_pic_home" src={photoURL} width="100" style={{ marginTop: 30 }} alt="profile" />
              </div>
              <h2 style={{ fontSize: 25 }}>Welcome to Notify {displayName}!</h2>
              <h4 style={{ fontSize: 15 }}>Search for an artist or a song now using the search bar or view a popular song from the card below</h4>
            </div>
          ) : (
            <div>
              <h2 style={{ marginTop: 0, fontSize: 25 }}>Stream music and view song data now!</h2>
              <h4 style={{ marginTop: 0, fontSize: 16 }}> Log in or create an account.</h4>

              <div style={{ width: "100%", fontFamily: "customHelvetica" }}>
                <Button variant="contained" style={{ fontFamily: "customHelvetica", marginRight: 20 }} size="medium" onClick={loadLogin}>
                  Log In
                </Button>
                <Button variant="contained" style={{ backgroundColor: "#0079BF", color: "white", fontFamily: "customHelvetica" }} size="medium" onClick={loadCreateAccount}>
                  Create an Account
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="info_container">
        <div className="info_container_div">
          <div className="home_info_container_left">
            <img src={music} alt="Music" className="" style={{ marginTop: 10 }} height="90"></img>
            <div style={{ width: 200 }}>
              <h4 style={{ marginBottom: 30, marginTop: 25 }}>Listen to your favourite music.</h4>
            </div>
          </div>
        </div>
        <div className="info_container_div">
          <div className="home_info_container_left">
            <img src={data} alt="Data" className="" height="100" style={{ paddingLeft: 10 }}></img>
          </div>
          <div style={{ width: 200 }}>
            <h4 style={{ marginBottom: 30 }}>View interesting data and facts about the artist.</h4>
          </div>
        </div>
      </div>
      <div className="home_splash_card_area">
        <Card className="dataCard dataCard_home" style={{ borderRadius: 30, color: "black" }}>
          <div className="home_card_title">
            <h4 style={{ marginBottom: 15 }}>Most Popular Songs</h4>
          </div>
          <MostPopularSongs />
        </Card>
      </div>
    </div>
  );
}

export default Home;
