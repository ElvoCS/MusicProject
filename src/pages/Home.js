import React from "react";
import "./Home.css";
import { Button, IconButton, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import bigLogo from "../res/logo5.png"; // Tell webpack this JS file uses this image

function Home() {
  return (
    <div className="Home">
      <div className="home_spash_container">
        <div className="home_left">
          <img src={bigLogo} alt="Logo" className="big_logo" />
        </div>

        <div className="home_right">
          <h1>Stream Music And View Song Data Now!</h1>
          <h3> Log in or create an account</h3>

          <div Style="width:100%">
            <Button variant="contained" id="home_buttons">
              Log In
            </Button>
            <Button variant="contained" color="secondary" id="home_buttons">
              Create an Account
            </Button>
          </div>
        </div>
      </div>
      <div className="home_splash_card_area">
        <Card className="dataCard dataCard_home" Style="border-radius:30px;color: #336bf2">
          <h1 className={"home_card_title"}>Most Popular Songs</h1>
        </Card>
      </div>
    </div>
  );
}

export default Home;
