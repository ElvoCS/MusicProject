import "./styles/Login.css";
import React, { useState } from "react";
import firebase, { generateUserDocument } from "../config/fire";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";

function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

  const signUpWithEmailAndPassword = async (event, displayName, email_, password_) => {
    event.preventDefault();
    const seed = Math.floor(Math.random() * Math.floor(5000));
    const photoURL = "https://picsum.photos/seed/" + seed + "/200";
    try {
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email_, password_);
      generateUserDocument(user, { displayName, photoURL });
    } catch (err) {
      document.getElementById("error").innerHTML = err.message;
      setError(error);
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
    <div className="create_account_container">
      <div id="createAccount">
        <br></br>
        <h2 style={{ fontFamily: "customHelvetica", textAlign: "center" }}>Create An Account</h2>
        <br></br>
        <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
          <input className="input_login" placeholder="Username" id="displayName" type="text" onChange={(e) => setDisplayName(e.target.value)}></input>
        </div>
        <br></br>

        <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
          <input className="input_login" placeholder="Email" id="email" type="text" onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <br></br>
        <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
          <input className="input_login" placeholder="Password" id="password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
        </div>

        <br></br>
        <div id="error" className="error"></div>
        <br></br>

        <div style={{ display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center", marginBottom: 50 }}>
          <Button onClick={(e) => signUpWithEmailAndPassword(e, displayName, email, password)} size="small" variant="contained" style={{ backgroundColor: "#0079BF", color: "white", marginRight: 30, fontFamily: "customHelvetica" }}>
            Create Account
          </Button>
          <Button variant="contained" size="small" style={{ fontFamily: "customHelvetica", textAlign: "center" }} onClick={() => (window.location.href = "./Login")}>
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
