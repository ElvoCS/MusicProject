import "./Login.css";
import React from "react";
import fire from "../config/fire";
import { AppBar, Toolbar, IconButton, Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
// import fire from "./config/fire";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

function CreateAccount() {
  // Sign up with email and password
  const signUp = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully Signed In");
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
      });
  };

  return (
    <div className="Home" style={{ textAlign: "center" }}>
      <div id="createAccount">
        <br></br>
        <h1 Style="font-family:customHelvetica;">Create An Account</h1>
        <br></br>
        <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
          <input className="input_login" placeholder="Enter Email" type="text"></input>
        </div>
        <br></br>
        <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
          <input className="input_login" placeholder="Enter Password" type="password"></input>
        </div>
        <br></br>
        <div style={{ display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center", marginBottom: 50 }}>
          <Button variant="contained" id="home_buttons" Style="background-color:#336bf2; color:white; font-family: customHelvetica; ">
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
