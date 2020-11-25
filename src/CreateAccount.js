import React from 'react';
import fire from './config/fire';
import { AppBar, Toolbar, IconButton, Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
// import fire from "./config/fire";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

class CreateAccount extends React.Component {

    // Sign up with email and password
    signUp() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
            console.log("Successfully Signed In");
        }).catch((err) => {
            console.log("Error: " + err.toString());
        })
    }



    render() {
        return (
            <div className="Home" style={{ textAlign: 'center'}}>

                <div id="createAccount">
                    <br></br>
                    <br></br>
                    <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}}>
                        <input className="inputField" placeholder="Enter Email" type="text"></input>
                    </div>
                    <br></br>
                    <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}}>
                        <input className="inputField" placeholder="Enter Password" type="password"></input>
                    </div>
                    <br></br>
                    <Button variant="contained" id="home_buttons" Style="background-color:#336bf2; color:white; font-family: customHelvetica;">
                        Create Account
                    </Button>
                </div>
            </div>
        )
    }
}

export default CreateAccount;