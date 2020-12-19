import "./Login.css";
import React, { useState } from "react";
import firebase, { generateUserDocument } from "../config/fire";
import { AppBar, Toolbar, IconButton, Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { useHistory } from "react-router";

function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

  const signUpWithEmailAndPassword = async (event, displayName, email_, password_) => {
    event.preventDefault();
    const seed = Math.floor(Math.random);
    const photoURL = "https://picsum.photos/seed/picsum/200/300";
    try {
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email_, password_);
      console.log(displayName);
      generateUserDocument(user, { displayName, photoURL });
    } catch (error) {
      setError("Error Signing up with email and password");
      console.log(error);
    }
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        document.getElementById("displayName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        setEmail("");
        setPassword("");
        setDisplayName("");
        history.push("/");
      } else {
        // No user is signed in.
      }
    });
  };

  return (
    <div className="Home" style={{ textAlign: "center" }}>
      <div id="createAccount">
        <br></br>
        <h1 Style="font-family:customHelvetica;">Create An Account</h1>
        <br></br>
        <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
          <input className="input_login" placeholder="Enter Username" id="displayName" type="text" onChange={(e) => setDisplayName(e.target.value)}></input>
        </div>
        <br></br>

        <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
          <input className="input_login" placeholder="Enter Email" id="email" type="text" onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <br></br>
        <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
          <input className="input_login" placeholder="Enter Password" id="password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <br></br>
        <div style={{ display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center", marginBottom: 50 }}>
          <Button onClick={(e) => signUpWithEmailAndPassword(e, displayName, email, password)} variant="contained" id="home_buttons" Style="background-color:#336bf2; color:white; font-family: customHelvetica;">
            Create Account
          </Button>
          <Button variant="contained" id="home_buttons" Style=" width: 220px;height:35px;font-family: customHelvetica;" onClick={() => (window.location.href = "./Login")}>
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
