import React from "react";
import "./Profile.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { Button, Card } from "@material-ui/core";
import logo from "../res/logo_icon.png"; // Tell webpack this JS file uses this image

function Profile() {
  return (
    <div className="Profile">
      <div className="profile_splash_container">
        <div className="profilePic"></div>

        <div className="UserInfo">
          <div className="Location">
            <LocationOnIcon fontSize="medium"></LocationOnIcon>
            <p>Dublin</p>
          </div>
          <div className="Username">
            <PermIdentityIcon fontSize="medium"></PermIdentityIcon>
            <p>Carl Egan</p>
          </div>
          <div></div>

          <div className="popularSongs">
            <Card className="dataCard dataCard_home" Style="border-radius:30px;color: #336bf2">
              <h1 className="home_card_title">Liked songs</h1>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
