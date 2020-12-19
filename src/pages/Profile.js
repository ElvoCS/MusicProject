import React, { useContext, useState } from "react";
import "./Profile.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { Button, Card } from "@material-ui/core";
import ReactRoundedImage from "react-rounded-image";
import profilePic from "../res/profile-pic.jpg"; // Place Holder
import { UserContext } from "../providers/UserProvider";
import { useHistory } from "react-router";
import firebase from "../config/fire";

function Profile() {
  const user = useContext(UserContext);
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");

  const checkIfUserAuthenticated = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
        const { email, displayName } = user;
        setEmail(email);
        setDisplayName(displayName);
      } else {
        history.push("/login");
      }
    });
  };

  return (
    <div className="Profile" onLoad={() => checkIfUserAuthenticated()}>
      <div className="profile_container">
        <div className="UserInfo">
          <div className="ProfilePic">
            <ReactRoundedImage image={profilePic} roundedColor="#fdfcfc" imageWidth="150" imageHeight="150" roundedSize="15" />
          </div>
          <div className="Location">
            <LocationOnIcon></LocationOnIcon>
            <p>Dublin</p>
          </div>
          <div className="Username">
            <PermIdentityIcon></PermIdentityIcon>
            <p>{email}</p>
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
