import React from "react";
import "./Home.css";
import { Button, IconButton, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import bigLogo from "../res/logo_big.png"; // Tell webpack this JS file uses this image
import music from "../res/music.png"; // Tell webpack this JS file uses this image
import data from "../res/data.png"; // Tell webpack this JS file uses this image
import MostPopularSongs from "../components/MostPopularSongs";

function Home() {
  return (
    <div className="Home">
      <div className="home_spash_container">
        <div className="home_left">
          <img src={bigLogo} alt="Logo" className="big_logo" />
        </div>

        <div className="home_right">
          <h2 Style="margin-top:0; font-size: 30px;">Stream music and view song data now!</h2>
          <h4 Style="margin-top:0; font-size: 18px"> Log in or create an account.</h4>

          <div Style="width:100%;  font-family: customHelvetica;">
            <Button variant="contained" id="home_buttons" Style=" font-family: customHelvetica;">
              Log In
            </Button>
            <Button variant="contained" Style="background-color:#336bf2; color:white; font-family: customHelvetica;" id="home_buttons">
              Create an Account
            </Button>
          </div>
        </div>
      </div>

      <div className="info_container">
        <div className="info_container_div">
          <div className="home_info_container_left">
            <img src={music} alt="Music" className="" height="100"></img>
            <div Style="width:200px">
              <h3>Listen to your favourite music.</h3>
            </div>
          </div>
        </div>
        <div className="info_container_div">
          <div Style="home_info_container_left">
            <img src={data} alt="Data" className="" height="100" Style=" padding-left:10px;"></img>
          </div>
          <div Style="width:200px">
            <h3>Get interesting data and facts about the artist.</h3>
          </div>
        </div>
      </div>

      <div className="home_splash_card_area">
        <Card className="dataCard dataCard_home" Style="border-radius:30px;color: black">
          <div className="home_card_title">
            <h4 Style="margin:5px">Most Popular Songs</h4>
          </div>
          <MostPopularSongs />
        </Card>
      </div>
    </div>
  );
}

export default Home;
