import React from "react";
import "./Profile.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { Button, Card } from "@material-ui/core";
import ReactRoundedImage from "react-rounded-image";
import profilePic from "../res/profile-pic.jpg"; // Place Holder

function Profile() {
  return (
    <div className="Profile">
      <div className="profile_container">

        <div className="UserInfo">
        <div className="ProfilePic">
                                          <ReactRoundedImage
                                            image={profilePic}
                                            roundedColor="#fdfcfc"
                                            imageWidth="150"
                                            imageHeight="150"
                                            roundedSize="15"
                                          />
                                          </div>
          <div className="Location">
            <LocationOnIcon fontSize="medium"></LocationOnIcon>
            <p>Dublin</p>
          </div>
          <div className="Username">
            <PermIdentityIcon fontSize="medium"></PermIdentityIcon>
            <p>Carl Egan</p>
          </div>


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
