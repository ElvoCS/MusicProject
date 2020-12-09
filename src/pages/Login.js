import "./Login.css";
import React from "react";
import fire from "../config/fire";
import { AppBar, Toolbar, IconButton, Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Login() {
  // Login with email and password
  const login = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully Logged In");
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
      });
  };

  return (
    <div className="Home" style={{ textAlign: "center" }}>
      <div id="loginPage">
        <br />
        <h1 Style="font-family:customHelvetica;">Login</h1>
        <br />

        <Button variant="contained" id="home_buttons" Style="font-family: customHelvetica; width: fit-content">
          Sign in with Google
        </Button>
        <div class="g-signin2"></div>
        <p Style="font-family:customHelvetica;">OR</p>
        <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
          <input className="input_login" placeholder="Enter Email" type="text"></input>
        </div>
        <br></br>
        <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
          <input Style="margin-bottom:30px;" className="input_login" placeholder="Enter Password" type="password"></input>
        </div>
        <div style={{ display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center", marginBottom: 50 }}>
          <Button variant="contained" id="home_buttons" Style="background-color:#336bf2; color:white; font-family: customHelvetica;">
            Log In
          </Button>

          <Button
            variant="contained"
            id="home_buttons"
            Style=" 
                width: 220px;
                height:45px;
                font-family: customHelvetica;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                 text-align: center;"
            onClick={() => (window.location.href = "./CreateAccount")}
          >
            Create New Account
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
