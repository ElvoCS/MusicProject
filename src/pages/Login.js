import "./Login.css";
import React, { useState, useContext } from "react";
import firebase from "../config/fire";
import { AppBar, Toolbar, IconButton, Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import { UserContext } from "../providers/UserProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  let history = useHistory();
  const user = useContext(UserContext);

  const logInWithEmailAndPassword = (event, email_, password_) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email_, password_)
      .catch((err) => {
        document.getElementById("error").innerHTML = err.message;
        setError(err);
        console.error("Error signing in with password and email", err);
      });

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        setEmail("");
        setPassword("");
        history.push("/");
      } else {
        // No user is signed in.
      }
    });
  };

  return (
    <div className="create_account_container">
      <div id="loginPage">
        <br />
        <h1 Style="font-family:customHelvetica;text-align:center;">Login</h1>
        <br />

        <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
          <input className="input_login" placeholder="Email" type="text" id="email" onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <br></br>
        <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
          <input Style="margin-bottom:30px;" className="input_login" id="password" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
        </div>

        <br></br>
        <div id="error" className="error"></div>
        <br></br>

        <div style={{ display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center", marginBottom: 50 }}>
          <Button onClick={(e) => logInWithEmailAndPassword(e, email, password)} variant="contained" size="small" Style="background-color:#336bf2; color:white; margin-right: 30px;font-family: customHelvetica;">
            Log In
          </Button>
          <Button variant="contained" size="small" Style="font-family: customHelvetica; text-align: center; " onClick={() => (window.location.href = "./CreateAccount")}>
            Create New Account
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
