import React, { useContext, useState, useEffect } from "react";
import "./styles/Profile.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { Button, Card, List, ListItem, ListItemText } from "@material-ui/core";
import ReactRoundedImage from "react-rounded-image";
import profilePic from "../res/profile-pic.jpg"; // Place Holder
import { UserContext } from "../providers/UserProvider";
import { useHistory } from "react-router";
import firebase from "firebase";

function Profile() {
  const user = useContext(UserContext);
  let history = useHistory();

  const [email_, setEmail] = useState("");
  const [displayName_, setDisplayName] = useState("");
  const [photoURL_, setPhotoURL] = useState("");
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    if (user) {
      const { email, displayName, photoURL } = user;
      setEmail(email);
      setDisplayName(displayName);
      setPhotoURL(photoURL);
    }
  }, [user]);

  const profile_logout = () => {
    firebase.auth().signOut();
    history.push("/");
  };

  const profile_deleteAccount = () => {
    firebase
      .auth()
      .currentUser.delete()
      .then(function () {
        history.push("/");
      });
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("History")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs);
        setHistoryList(snapshot.docs.map((doc) => ({ text: doc.history_text })));
      });
  }, []);

  return (
    <div className="profile">
      <Card className=" profile_card" style={{ borderRadius: 30, color: "black" }}>
        <div className="profile_pic_container">
          <img className="profile_pic" src={photoURL_} alt="profile" />
        </div>
        <p> </p>
        <div className="user_info">
          <List subheader="Profile ">
            <br />

            <ListItem>
              Username: &nbsp; <div style={{ color: "#0079BF" }}> {displayName_}</div>
            </ListItem>
            <ListItem>
              Email: &nbsp;<div style={{ color: "#0079BF" }}>{email_}</div>
            </ListItem>
            <br />
            <Button variant="contained" style={{ fontFamily: "customHelvetica", backgroundColor: "#0079BF", color: "white", marginRight: 20 }} onClick={() => profile_logout()}>
              Log out
            </Button>

            <Button variant="contained" color="secondary" style={{ fontFamily: "customHelvetica" }} onClick={() => profile_deleteAccount()}>
              Delete Account
            </Button>
            <Card className=" profile_card" style={{ borderRadius: 30, color: "black" }}>
              {historyList.map(({ history_text }) => console.log(historyList))}
            </Card>
          </List>
        </div>
      </Card>
    </div>
  );
}

export default Profile;
